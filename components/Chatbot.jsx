"use client";

import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, Send, X, Bot, User } from "lucide-react";


const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm Akhee's assistant. I can help you with information about our services, pricing, or any questions about our company. How can I assist you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [knowledge, setKnowledge] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Load knowledge base when chatbot is first opened
  useEffect(() => {
    if (isOpen && !knowledge && !isLoading) {
      loadKnowledge();
    }
  }, [isOpen, knowledge, isLoading]);

  const loadKnowledge = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/website-info');
      if (response.ok) {
        const result = await response.json();
        if (result.success) {
          setKnowledge(result.data);
          console.log('✅ Loaded chatbot knowledge from Firestore');
        } else {
          console.error('Failed to load chatbot knowledge:', result.error);
          // Fall back to mock data if API fails
        }
      } else {
        console.error('API request failed:', response.statusText);
        // Fall back to mock data if API fails
      }
    } catch (error) {
      console.error('Error loading chatbot knowledge:', error);
      // Fall back to mock data if API fails
    } finally {
      setIsLoading(false);
    }
  };


  // Helper function to normalize text (remove punctuation, extra spaces, handle typos)
  const normalizeText = (text) => {
    return text
      .toLowerCase()
      .replace(/[^\w\s]/g, ' ') // Remove punctuation
      .replace(/\s+/g, ' ') // Replace multiple spaces with single space
      .trim();
  };

  // Helper function to check similarity between words (simple fuzzy matching)
  const isWordSimilar = (word1, word2) => {
    if (word1 === word2) return true;
    if (Math.abs(word1.length - word2.length) > 2) return false;
    
    // Check if words are similar (handles simple typos)
    let differences = 0;
    const maxLength = Math.max(word1.length, word2.length);
    
    for (let i = 0; i < maxLength; i++) {
      if (word1[i] !== word2[i]) {
        differences++;
        if (differences > 2) return false;
      }
    }
    return true;
  };

  // Enhanced function to find best response with real data and weak English support
  const findBestResponse = (userInput) => {
    // If knowledge is still loading, return loading message
    if (isLoading && !knowledge) {
      return "I'm loading my knowledge base. Please give me a moment...";
    }

    // If no knowledge is loaded, use fallback response
    if (!knowledge) {
      return "I'm having trouble accessing my knowledge base right now. Please try asking me about our services, company information, pricing, or how to get started. I'll do my best to help!";
    }
    const normalizedInput = normalizeText(userInput);
    const inputWords = normalizedInput.split(' ');
    
    // Check for greetings with variations
    const greetings = ["hello", "hi", "hey", "helo", "helo", "hai", "good morning", "good afternoon", "good evening"];
    if (greetings.some(greeting => normalizedInput.includes(greeting))) {
      return "Hello! Welcome to Akhee. I'm here to help you learn about our services and how we can assist with your digital transformation needs. What would you like to know?";
    }

    // Check for thank you messages
    if (normalizedInput.includes("thank") || normalizedInput.includes("thanks") || normalizedInput.includes("thx")) {
      return "You're welcome! I'm here to help with any other questions about Akhee's services. Feel free to ask about our technology solutions, pricing, or how we can help your business.";
    }

    let bestMatch = { score: 0, response: "" };

    // Search through all website information
    for (const item of knowledge.websiteInfo) {
      let matchScore = 0;
      
      // Check each keyword in the item
      for (const keyword of item.keywords) {
        const keywordWords = keyword.split(' ');
        
        // Exact phrase match gets highest score
        if (normalizedInput.includes(keyword)) {
          matchScore += 10;
        }
        
        // Individual word matching with fuzzy logic
        for (const keywordWord of keywordWords) {
          for (const inputWord of inputWords) {
            if (keywordWord === inputWord) {
              matchScore += 3;
            } else if (isWordSimilar(keywordWord, inputWord)) {
              matchScore += 2;
            }
          }
        }
      }
      
      // Update best match if this score is higher
      if (matchScore > bestMatch.score) {
        bestMatch = { score: matchScore, response: item.content };
      }
    }

    // Also search through services if no good match found in website info
    if (bestMatch.score < 5) {
      for (const service of knowledge.services) {
        let matchScore = 0;
        
        // Check service title and description
        const serviceText = `${service.title} ${service.description}`.toLowerCase();
        const serviceWords = serviceText.split(' ');
        
        for (const inputWord of inputWords) {
          if (serviceWords.includes(inputWord)) {
            matchScore += 2;
          }
          // Check for partial matches in service features
          for (const feature of service.features) {
            if (feature.toLowerCase().includes(inputWord)) {
              matchScore += 1;
            }
          }
        }
        
        // Update best match if this score is higher
        if (matchScore > bestMatch.score) {
          bestMatch = { 
            score: matchScore, 
            response: `${service.description}\n\nKey features include:\n${service.features.slice(0, 4).map(f => `• ${f}`).join('\n')}\n\nWould you like to learn more about our ${service.title} services?`
          };
        }
      }
    }

    // Return best match if score is high enough
    if (bestMatch.score >= 2) {
      return bestMatch.response;
    }

    // Check for specific common questions with weak English
    if (normalizedInput.includes("help") || normalizedInput.includes("what can you do") || normalizedInput.includes("what you do")) {
      const servicesList = knowledge.services.slice(0, 8).map(s => s.title).join(', ');
      return `I can help you with information about our services including ${servicesList}, and more. I can also provide details about pricing, timelines, company information, and how to get started. What specific area interests you?`;
    }

    // Check for questions about capabilities
    if (normalizedInput.includes("can you") || normalizedInput.includes("do you") || normalizedInput.includes("are you able")) {
      return "I can answer questions about all Akhee services, pricing, company information, certifications, and how we can help your business. I'm here to provide information about our digital transformation solutions. What would you like to know?";
    }

    // Check if asking about recent articles/insights
    if (normalizedInput.includes("article") || normalizedInput.includes("insight") || normalizedInput.includes("blog") || normalizedInput.includes("news")) {
      if (knowledge.articles && knowledge.articles.length > 0) {
        const recentArticles = knowledge.articles.slice(0, 3);
        return `Here are some of our recent insights:\n\n${recentArticles.map(article => 
          `• ${article.title}\n  ${article.excerpt.slice(0, 80)}...`
        ).join('\n\n')}\n\nWould you like to know more about any of these topics?`;
      }
    }

    // Handle non-English or very unclear input
    if (normalizedInput.length < 3 || bestMatch.score === 0) {
      const mainServices = knowledge.services.slice(0, 6).map(s => s.title).join(', ');
      return `I'm here to help you with information about Akhee! You can ask me about:\n\n• Our Services (${mainServices})\n• Pricing and Consultations\n• Company Information\n• How to Get Started\n\nPlease ask me anything about our services or company. I'll do my best to understand and help you!`;
    }

    // Default response for unclear questions
    return "I'd be happy to help you with information about Akhee's services, pricing, or company details. You can ask me about our Digital Transformation services, Microsoft 365, Dynamics 365, Cloud Services, Cybersecurity, or anything else about our company. What specific information are you looking for?";
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputText,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText("");
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse = findBestResponse(inputText);
      const botMessage = {
        id: messages.length + 2,
        text: botResponse,
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-600 to-orange-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-orange-500 text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold">Brillion Assistant</h3>
                <p className="text-xs opacity-90">Online now</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-1 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`flex items-start space-x-2 max-w-[80%] ${message.isBot ? 'flex-row' : 'flex-row-reverse space-x-reverse'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.isBot 
                      ? 'bg-gradient-to-r from-blue-500 to-orange-500 text-white' 
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {message.isBot ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                  </div>
                  <div className={`px-4 py-2 rounded-2xl ${
                    message.isBot
                      ? 'bg-gray-100 text-gray-800'
                      : 'bg-gradient-to-r from-blue-600 to-orange-500 text-white'
                  }`}>
                    <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-2 max-w-[80%]">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-gray-100 px-4 py-2 rounded-2xl">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your question..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim()}
                className="bg-gradient-to-r from-blue-600 to-orange-500 text-white p-2 rounded-full hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;