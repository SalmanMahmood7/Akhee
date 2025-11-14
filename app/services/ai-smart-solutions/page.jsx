"use client";

import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { 
  Brain,
  Cpu,
  Bot,
  LineChart,
  Sparkles,
  Target,
  ArrowRight,
  CheckCircle,
  Zap,
  Network,
  Eye,
  MessageSquare,
  Shield,
  Users,
  Globe,
  TrendingUp,
  Briefcase,
  Cloud,
  Plus,
  Minus,
  Settings,
  DollarSign,
  Star,
  BarChart3,
  ShieldCheck
} from "lucide-react";
import { useState } from "react";

export default function AISmartSolutions() {
  const [selectedService, setSelectedService] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);

  const servicesData = {
    machineLearning: {
      title: "Machine Learning Solutions",
      description: "Custom ML models and algorithms to solve complex business problems",
      fullDescription: "Develop sophisticated machine learning solutions that learn from your data to provide predictive insights, automate decision-making, and optimize business processes. Our ML experts create custom models tailored to your specific industry and use cases.",
      features: [
        {
          title: "Predictive Analytics",
          description: "Forecast trends and behaviors with advanced ML algorithms",
          icon: TrendingUp
        },
        {
          title: "Natural Language Processing",
          description: "Process and understand human language at scale",
          icon: Brain
        },
        {
          title: "Computer Vision",
          description: "Extract insights from images and video content",
          icon: Eye
        },
        {
          title: "Recommendation Systems",
          description: "Personalized recommendations to enhance user experience",
          icon: Target
        }
      ],
      benefits: [
        {
          title: "Accuracy Improvement",
          description: "Average improvement in prediction accuracy",
          metric: "+85%"
        },
        {
          title: "Process Automation",
          description: "Tasks automated through ML implementation",
          metric: "70%"
        },
        {
          title: "Decision Speed",
          description: "Faster decision making with AI insights",
          metric: "10x faster"
        }
      ],
      process: [
        {
          step: 1,
          title: "Data Assessment",
          description: "Evaluate data quality and identify ML opportunities",
          duration: "1-2 weeks"
        },
        {
          step: 2,
          title: "Model Development",
          description: "Design and train custom machine learning models",
          duration: "4-8 weeks"
        },
        {
          step: 3,
          title: "Integration & Testing",
          description: "Integrate models into existing systems with thorough testing",
          duration: "2-4 weeks"
        },
        {
          step: 4,
          title: "Deployment & Monitoring",
          description: "Deploy to production with continuous monitoring and optimization",
          duration: "1-2 weeks"
        }
      ],
      technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "Apache Spark", "MLflow", "Kubeflow", "AWS SageMaker"],
      caseStudy: {
        client: "Retail Chain (500+ stores)",
        challenge: "Needed to optimize inventory management and reduce waste by 30%",
        solution: "Implemented ML-powered demand forecasting and inventory optimization system",
        results: [
          "35% reduction in inventory waste",
          "25% improvement in stock availability",
          "2x faster restocking decisions",
          "$2.5M annual cost savings"
        ]
      },
      deliverables: [
        "Custom trained ML models",
        "Model deployment pipeline",
        "Performance monitoring dashboard",
        "Documentation and training",
        "Integration with existing systems",
        "6 months optimization support"
      ]
    },
    intelligentAutomation: {
      title: "Intelligent Automation",
      description: "AI-powered automation solutions to streamline business processes",
      fullDescription: "Transform your business operations with intelligent automation that combines AI, machine learning, and process automation. Our solutions go beyond basic RPA to deliver cognitive automation that can handle complex, unstructured tasks.",
      features: [
        {
          title: "Robotic Process Automation",
          description: "Automate repetitive tasks and workflows",
          icon: Settings
        },
        {
          title: "Document Processing",
          description: "Extract and process information from documents",
          icon: BarChart3
        },
        {
          title: "Workflow Optimization",
          description: "Streamline business processes with AI",
          icon: TrendingUp
        },
        {
          title: "Decision Automation",
          description: "Automated decision-making based on rules and ML",
          icon: Brain
        }
      ],
      benefits: [
        {
          title: "Efficiency Gain",
          description: "Improvement in process efficiency",
          metric: "+200%"
        },
        {
          title: "Cost Reduction",
          description: "Reduction in operational costs",
          metric: "60%"
        },
        {
          title: "Error Reduction",
          description: "Decrease in manual errors",
          metric: "95%"
        }
      ],
      process: [
        {
          step: 1,
          title: "Process Analysis",
          description: "Identify automation opportunities in current workflows",
          duration: "1-2 weeks"
        },
        {
          step: 2,
          title: "Solution Design",
          description: "Design automation architecture and workflows",
          duration: "2-3 weeks"
        },
        {
          step: 3,
          title: "Development & Testing",
          description: "Build and test automation solutions",
          duration: "4-6 weeks"
        },
        {
          step: 4,
          title: "Deployment & Training",
          description: "Deploy solutions and train users",
          duration: "1-2 weeks"
        }
      ],
      technologies: ["UiPath", "Blue Prism", "Automation Anywhere", "Microsoft Power Automate", "Python", "OCR", "NLP", "ML"],
      caseStudy: {
        client: "Insurance Company",
        challenge: "Manual claims processing taking 5-7 days with high error rates",
        solution: "Implemented intelligent automation for claims processing with ML validation",
        results: [
          "80% reduction in processing time",
          "95% reduction in errors",
          "60% cost savings",
          "Improved customer satisfaction"
        ]
      },
      deliverables: [
        "Automated workflow solutions",
        "Process documentation",
        "User training materials",
        "Performance monitoring",
        "Ongoing support",
        "Optimization recommendations"
      ]
    },
    conversationalAI: {
      title: "Conversational AI & Chatbots",
      description: "Advanced chatbots and virtual assistants powered by natural language processing",
      fullDescription: "Create sophisticated conversational AI solutions that understand context, maintain dialogue flow, and provide personalized responses. Our chatbots integrate seamlessly with your existing systems and continuously learn from interactions.",
      features: [
        {
          title: "Natural Language Understanding",
          description: "Advanced NLU for context-aware conversations",
          icon: MessageSquare
        },
        {
          title: "Multi-channel Support",
          description: "Deploy across web, mobile, and messaging platforms",
          icon: MessageSquare
        },
        {
          title: "Intent Recognition",
          description: "Accurately identify user intentions and requests",
          icon: MessageSquare
        },
        {
          title: "Learning & Adaptation",
          description: "Continuous learning from user interactions",
          icon: MessageSquare
        }
      ],
      benefits: [
        {
          title: "Response Time",
          description: "Instant responses to customer queries",
          metric: "24/7"
        },
        {
          title: "Cost Savings",
          description: "Reduction in customer service costs",
          metric: "70%"
        },
        {
          title: "Satisfaction",
          description: "Improvement in customer satisfaction",
          metric: "+40%"
        }
      ],
      process: [
        {
          step: 1,
          title: "Use Case Definition",
          description: "Define chatbot capabilities and user journeys",
          duration: "1 week"
        },
        {
          step: 2,
          title: "Training Data Preparation",
          description: "Collect and prepare training data for NLP models",
          duration: "2-3 weeks"
        },
        {
          step: 3,
          title: "Development & Training",
          description: "Build and train conversational AI models",
          duration: "3-4 weeks"
        },
        {
          step: 4,
          title: "Integration & Testing",
          description: "Integrate with systems and conduct user testing",
          duration: "1-2 weeks"
        }
      ],
      technologies: ["Dialogflow", "Microsoft Bot Framework", "Amazon Lex", "Rasa", "OpenAI GPT", "BERT", "spaCy", "Python"],
      caseStudy: {
        client: "E-commerce Platform",
        challenge: "High volume of customer support queries overwhelming support team",
        solution: "Deployed intelligent chatbot with product recommendations and order tracking",
        results: [
          "70% of queries handled automatically",
          "50% reduction in support tickets",
          "30% increase in sales through recommendations",
          "24/7 customer support availability"
        ]
      },
      deliverables: [
        "Conversational AI chatbot",
        "Multi-platform integration",
        "Analytics dashboard",
        "Training documentation",
        "Performance monitoring",
        "Continuous optimization"
      ]
    },
    dataAnalytics: {
      title: "AI-Powered Data Analytics",
      description: "Transform raw data into actionable insights with artificial intelligence",
      fullDescription: "Leverage AI to unlock hidden patterns in your data and generate actionable business insights. Our analytics solutions provide real-time dashboards, predictive models, and automated reporting to drive data-driven decision making.",
      features: [
        {
          title: "Predictive Analytics",
          description: "Forecast trends and future outcomes",
          icon: MessageSquare
        },
        {
          title: "Real-time Dashboards",
          description: "Live data visualization and monitoring",
          icon: MessageSquare
        },
        {
          title: "Automated Reporting",
          description: "AI-generated insights and reports",
          icon: MessageSquare
        },
        {
          title: "Pattern Recognition",
          description: "Discover hidden patterns in complex data",
          icon: MessageSquare
        }
      ],
      benefits: [
        {
          title: "Decision Speed",
          description: "Faster data-driven decisions",
          metric: "5x faster"
        },
        {
          title: "Accuracy",
          description: "Improvement in forecast accuracy",
          metric: "+90%"
        },
        {
          title: "Insights",
          description: "More actionable insights generated",
          metric: "300%"
        }
      ],
      process: [
        {
          step: 1,
          title: "Data Assessment",
          description: "Evaluate data sources and quality",
          duration: "1 week"
        },
        {
          step: 2,
          title: "Infrastructure Setup",
          description: "Set up data pipelines and analytics infrastructure",
          duration: "2-3 weeks"
        },
        {
          step: 3,
          title: "Model Development",
          description: "Build predictive models and analytics solutions",
          duration: "3-4 weeks"
        },
        {
          step: 4,
          title: "Visualization & Deployment",
          description: "Create dashboards and deploy analytics platform",
          duration: "1-2 weeks"
        }
      ],
      technologies: ["Python", "R", "Tableau", "Power BI", "Apache Spark", "TensorFlow", "Pandas", "AWS Analytics"],
      caseStudy: {
        client: "Manufacturing Company",
        challenge: "Unable to predict equipment failures leading to costly downtime",
        solution: "Built predictive maintenance analytics platform with IoT integration",
        results: [
          "75% reduction in unplanned downtime",
          "40% decrease in maintenance costs",
          "Predictive accuracy of 95%",
          "$3M annual savings"
        ]
      },
      deliverables: [
        "Analytics platform",
        "Predictive models",
        "Real-time dashboards",
        "Automated reporting",
        "Data integration",
        "Training and support"
      ]
    },
    computerVision: {
      title: "Computer Vision Solutions",
      description: "Advanced image and video analysis for automated visual intelligence",
      fullDescription: "Implement computer vision solutions that can analyze, interpret, and act on visual information. From quality control to security monitoring, our CV solutions provide automated visual intelligence for various industries.",
      features: [
        {
          title: "Object Detection",
          description: "Identify and locate objects in images and videos",
          icon: MessageSquare
        },
        {
          title: "Image Classification",
          description: "Categorize images based on content",
          icon: MessageSquare
        },
        {
          title: "Facial Recognition",
          description: "Identify and verify individuals",
          icon: MessageSquare
        },
        {
          title: "Quality Inspection",
          description: "Automated defect detection and quality control",
          icon: MessageSquare
        }
      ],
      benefits: [
        {
          title: "Processing Speed",
          description: "Faster than human visual inspection",
          metric: "100x faster"
        },
        {
          title: "Accuracy",
          description: "Visual recognition accuracy",
          metric: "99.5%"
        },
        {
          title: "Cost Savings",
          description: "Reduction in manual inspection costs",
          metric: "80%"
        }
      ],
      process: [
        {
          step: 1,
          title: "Use Case Analysis",
          description: "Define visual recognition requirements",
          duration: "1 week"
        },
        {
          step: 2,
          title: "Data Collection",
          description: "Gather and annotate training images",
          duration: "2-3 weeks"
        },
        {
          step: 3,
          title: "Model Training",
          description: "Train computer vision models",
          duration: "3-4 weeks"
        },
        {
          step: 4,
          title: "Integration & Testing",
          description: "Deploy and test vision solutions",
          duration: "1-2 weeks"
        }
      ],
      technologies: ["OpenCV", "TensorFlow", "PyTorch", "YOLO", "AWS Rekognition", "Google Vision API", "Python", "CUDA"],
      caseStudy: {
        client: "Food Processing Plant",
        challenge: "Manual quality inspection missing 15% of defective products",
        solution: "Implemented computer vision system for automated quality control",
        results: [
          "99.8% defect detection accuracy",
          "50% faster inspection process",
          "90% reduction in customer complaints",
          "ROI achieved in 8 months"
        ]
      },
      deliverables: [
        "Computer vision models",
        "Real-time processing system",
        "Integration with existing equipment",
        "Performance monitoring",
        "Training and documentation",
        "Ongoing optimization"
      ]
    },
    naturalLanguageProcessing: {
      title: "Natural Language Processing Solutions",
      description: "Advanced text processing and language understanding capabilities",
      fullDescription: "Transform how your business processes and understands human language with our advanced NLP solutions. From chatbots and sentiment analysis to document processing and language translation, we help you unlock the value in textual data.",
      features: [
        {
          title: "Text Analysis & Classification",
          description: "Automatically categorize and analyze large volumes of text",
          icon: MessageSquare
        },
        {
          title: "Sentiment Analysis",
          description: "Understand emotions and opinions in customer feedback",
          icon: MessageSquare
        },
        {
          title: "Language Translation",
          description: "Real-time translation across multiple languages",
          icon: MessageSquare
        },
        {
          title: "Chatbots & Virtual Assistants",
          description: "Intelligent conversational interfaces for customer service",
          icon: MessageSquare
        }
      ],
      benefits: [
        {
          title: "Processing Speed",
          description: "Faster text processing and analysis",
          metric: "50x faster"
        },
        {
          title: "Accuracy Rate",
          description: "Text classification and sentiment accuracy",
          metric: "95%+"
        },
        {
          title: "Cost Reduction",
          description: "Reduced manual text processing costs",
          metric: "60%"
        }
      ],
      process: [
        {
          step: 1,
          title: "Requirements Analysis",
          description: "Define NLP requirements and use cases",
          duration: "1 week"
        },
        {
          step: 2,
          title: "Data Preparation",
          description: "Collect and preprocess text data",
          duration: "2 weeks"
        },
        {
          step: 3,
          title: "Model Development",
          description: "Train and optimize NLP models",
          duration: "3-4 weeks"
        },
        {
          step: 4,
          title: "Integration & Testing",
          description: "Deploy and test NLP solutions",
          duration: "1-2 weeks"
        }
      ],
      technologies: ["spaCy", "NLTK", "Transformers", "BERT", "GPT", "Amazon Comprehend", "Google NLP", "Python"],
      caseStudy: {
        client: "Customer Service Center",
        challenge: "Manual analysis of 10,000+ customer feedback emails monthly",
        solution: "Implemented NLP system for automated sentiment analysis and categorization",
        results: [
          "95% accuracy in sentiment classification",
          "80% reduction in analysis time",
          "Real-time customer insights",
          "Improved response times by 60%"
        ]
      },
      deliverables: [
        "NLP models and algorithms",
        "Text processing pipeline",
        "Analytics dashboard",
        "API integration",
        "Documentation and training",
        "Performance monitoring"
      ]
    }
  };

  const handleLearnMore = (serviceKey) => {
    setSelectedService(servicesData[serviceKey]);
    setShowModal(true);
  };

  return (
    <PageLayout>
      <div className="min-h-screen bg-white">
        
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/ai-solutions-background.jpg" 
              alt="AI Solutions Background"
              className="w-full h-full object-cover"
              loading="eager"
              onLoad={() => console.log('AI background image loaded successfully')}
              onError={(e) => console.error('Failed to load AI background image:', e)}
            />
            <div className="absolute inset-0 bg-black/75"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 1366:px-8 max-w-6xl 1366:max-w-5xl">
            <div className="text-center space-y-6 flex flex-col items-center justify-center min-h-screen py-20">
              
              
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl 1366:text-6xl font-bold mb-6">
                <span style={{color: '#f97316'}}>Artificial Intelligence</span> <span className="text-white">and</span> <br />
                <span style={{color: '#f97316'}}>Smart Solutions</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
                Harness the power of AI to transform your business. From intelligent automation to predictive analytics, 
                we deliver cutting-edge solutions that drive innovation and competitive advantage.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                <a 
                  href="/contact"
                  
                  className="inline-flex items-center justify-center bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold rounded-full transition-all duration-300 text-lg"
                  style={{width: '320px', height: '60px'}}
                >
                  Start Your AI Journey
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Unified Background Container for All Sections */}
        <div className="bg-gradient-to-br from-blue-50 via-white to-orange-50 overflow-hidden">
        
        {/* AI Solutions Grid */}
        <section id="solutions" style={{paddingTop: '30px', paddingBottom: '30px'}}>
          <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
            
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-6">
                AI-Powered <span className="text-orange-500">Solutions</span>
              </h2>
              <p className="text-xl text-[#1e3a8a] max-w-4xl mx-auto leading-relaxed">
                Leverage state-of-the-art artificial intelligence to automate processes, gain insights, and create exceptional experiences
              </p>
            </div>
            
            {/* Solutions with Images Grid */}
            <div className="space-y-20 mb-12">
              
              {/* Machine Learning & Analytics - Image Left */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <img 
                    src="/ai-data-analysis.jpg"
                    alt="Machine Learning Analytics"
                    className="rounded-2xl shadow-xl"
                  />
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl opacity-20"></div>
                </div>
                
                <div className="space-y-6">
                  <div className="inline-flex p-4 rounded-xl shadow-lg" style={{background: 'linear-gradient(to right, #f97316, #ea580c)'}}>
                    <LineChart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-[#1e3a8a]">Machine Learning & Analytics</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Unlock patterns in your data and make accurate predictions about future trends and behaviors with our advanced machine learning solutions. Transform raw data into actionable insights.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{backgroundColor: '#f97316'}}>
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="ml-3 text-lg text-[#1e3a8a]">Predictive maintenance and forecasting</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{backgroundColor: '#f97316'}}>
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="ml-3 text-lg text-[#1e3a8a]">Customer behavior analysis</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{backgroundColor: '#f97316'}}>
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="ml-3 text-lg text-[#1e3a8a]">Risk assessment and fraud detection</span>
                    </li>
                  </ul>
                  <Button 
                    onClick={() => handleLearnMore('machineLearning')}
                    className="text-white" 
                    style={{backgroundColor: '#f97316'}}
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Intelligent Automation - Image Right */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 order-2 lg:order-1">
                  <div className="inline-flex p-4 bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] rounded-xl shadow-lg">
                    <Bot className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-[#1e3a8a]">Intelligent Automation</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Automate complex business processes with AI-driven robots and intelligent workflows that adapt and learn from patterns. Streamline operations and reduce manual errors effectively.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-[#1e3a8a] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="ml-3 text-lg text-[#1e3a8a]">Robotic Process Automation (RPA)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-[#1e3a8a] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="ml-3 text-lg text-[#1e3a8a]">Document processing and extraction</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-[#1e3a8a] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="ml-3 text-lg text-[#1e3a8a]">Workflow optimization</span>
                    </li>
                  </ul>
                  <Button 
                    onClick={() => handleLearnMore('intelligentAutomation')}
                    className="bg-[#1e3a8a] hover:bg-[#1e40af] text-white"
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                
                <div className="relative order-1 lg:order-2">
                  <img 
                    src="/ai-automation.jpg"
                    alt="Intelligent Automation"
                    className="rounded-2xl shadow-xl"
                  />
                  <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] rounded-2xl opacity-20"></div>
                </div>
              </div>

              {/* Natural Language Processing - Image Left */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <img 
                    src="/ai-machine-learning.jpg"
                    alt="Natural Language Processing"
                    className="rounded-2xl shadow-xl"
                  />
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl opacity-20"></div>
                </div>
                
                <div className="space-y-6">
                  <div className="inline-flex p-4 rounded-xl shadow-lg" style={{background: 'linear-gradient(to right, #f97316, #ea580c)'}}>
                    <MessageSquare className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-[#1e3a8a]">Natural Language Processing</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Enable machines to understand, interpret, and respond to human language naturally with advanced NLP technologies. Build conversational AI systems that enhance customer interactions.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{backgroundColor: '#f97316'}}>
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="ml-3 text-lg text-[#1e3a8a]">Intelligent chatbots and virtual assistants</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{backgroundColor: '#f97316'}}>
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="ml-3 text-lg text-[#1e3a8a]">Sentiment analysis and text mining</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{backgroundColor: '#f97316'}}>
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="ml-3 text-lg text-[#1e3a8a]">Language translation and localization</span>
                    </li>
                  </ul>
                  <Button 
                    onClick={() => handleLearnMore('naturalLanguageProcessing')}
                    className="text-white" 
                    style={{backgroundColor: '#f97316'}}
                  >
                    Discover NLP Solutions <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Computer Vision - Image Right */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 order-2 lg:order-1">
                  <div className="inline-flex p-4 bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] rounded-xl shadow-lg">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-[#1e3a8a]">Computer Vision</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Extract meaningful information from images and videos to automate visual tasks and gain valuable insights. Implement intelligent monitoring systems that recognize patterns effectively.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-[#1e3a8a] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="ml-3 text-lg text-[#1e3a8a]">Object detection and recognition</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-[#1e3a8a] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="ml-3 text-lg text-[#1e3a8a]">Quality inspection and defect detection</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-[#1e3a8a] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="ml-3 text-lg text-[#1e3a8a]">Facial recognition and biometrics</span>
                    </li>
                  </ul>
                  <Button 
                    onClick={() => handleLearnMore('computerVision')}
                    className="bg-[#1e3a8a] hover:bg-[#1e40af] text-white"
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                
                <div className="relative order-1 lg:order-2">
                  <img 
                    src="/ai-consulting.jpg"
                    alt="Computer Vision"
                    className="rounded-2xl shadow-xl"
                  />
                  <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] rounded-2xl opacity-20"></div>
                </div>
              </div>
            </div>
            
          </div>
        </section>
        
        {/* Industry Applications */}
        <section style={{paddingTop: '30px', paddingBottom: '30px'}}>
          <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
            
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-6">
                Industry <span className="text-orange-500">Applications</span>
              </h2>
              <p className="text-xl text-[#1e3a8a] max-w-4xl mx-auto leading-relaxed">
                AI solutions tailored for specific industries and use cases
              </p>
            </div>

            {/* Industry Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="group bg-gradient-to-br from-blue-50 to-orange-50 p-8 rounded-2xl border border-blue-100 hover:border-orange-200 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors duration-300">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#1e3a8a] mb-3">Healthcare</h3>
                <p className="text-gray-600 text-sm">Medical imaging, diagnosis assistance, drug discovery, and patient care optimization.</p>
              </div>

              <div className="group bg-gradient-to-br from-orange-50 to-blue-50 p-8 rounded-2xl border border-orange-100 hover:border-blue-200 transition-all duration-300">
                <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500 transition-colors duration-300">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#1e3a8a] mb-3">Finance</h3>
                <p className="text-gray-600 text-sm">Fraud detection, algorithmic trading, risk assessment, and automated compliance.</p>
              </div>

              <div className="group bg-gradient-to-br from-blue-50 to-orange-50 p-8 rounded-2xl border border-blue-100 hover:border-orange-200 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors duration-300">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#1e3a8a] mb-3">Manufacturing</h3>
                <p className="text-gray-600 text-sm">Predictive maintenance, quality control, supply chain optimization, and robotics.</p>
              </div>

              <div className="group bg-gradient-to-br from-orange-50 to-blue-50 p-8 rounded-2xl border border-orange-100 hover:border-blue-200 transition-all duration-300">
                <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500 transition-colors duration-300">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#1e3a8a] mb-3">Retail</h3>
                <p className="text-gray-600 text-sm">Personalized recommendations, inventory management, price optimization, and customer insights.</p>
              </div>
            </div>

          </div>
        </section>

        {/* AI Implementation Process */}
        <section style={{paddingTop: '30px', paddingBottom: '30px'}}>
          <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
            
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-6">
                Our AI Implementation <span className="text-orange-500">Process</span>
              </h2>
              <p className="text-xl text-[#1e3a8a] max-w-4xl mx-auto leading-relaxed">
                A structured approach to successfully integrate AI into your business operations
              </p>
            </div>

            {/* Process Steps */}
            <div className="space-y-8">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/2">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4" style={{backgroundColor: '#f97316'}}>1</div>
                    <h3 className="text-2xl font-bold text-[#1e3a8a]">Assessment & Strategy</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    We analyze your current processes, identify AI opportunities, and develop a comprehensive strategy aligned with your business goals.
                  </p>
                </div>
                <div className="lg:w-1/2">
                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-[#1e3a8a]">5-10</div>
                        <div className="text-sm text-[#1e3a8a]">Business Days</div>
                      </div>
                      <div className="text-center p-4 bg-orange-50 rounded-lg">
                        <div className="text-2xl font-bold text-orange-600">100%</div>
                        <div className="text-sm text-orange-600">Custom Strategy</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
                <div className="lg:w-1/2">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">2</div>
                    <h3 className="text-2xl font-bold text-[#1e3a8a]">Development & Training</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Our experts develop and train AI models using your data, ensuring optimal performance and accuracy for your specific use cases.
                  </p>
                </div>
                <div className="lg:w-1/2">
                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-[#1e3a8a]">95%+</div>
                        <div className="text-sm text-[#1e3a8a]">Accuracy Rate</div>
                      </div>
                      <div className="text-center p-4 bg-orange-50 rounded-lg">
                        <div className="text-2xl font-bold text-orange-600">24/7</div>
                        <div className="text-sm text-orange-600">Monitoring</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/2">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4" style={{backgroundColor: '#f97316'}}>3</div>
                    <h3 className="text-2xl font-bold text-[#1e3a8a]">Deployment & Integration</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Seamless integration with your existing systems, ensuring minimal disruption while maximizing the benefits of AI implementation.
                  </p>
                </div>
                <div className="lg:w-1/2">
                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-[#1e3a8a]">Zero</div>
                        <div className="text-sm text-[#1e3a8a]">Downtime</div>
                      </div>
                      <div className="text-center p-4 bg-orange-50 rounded-lg">
                        <div className="text-2xl font-bold text-orange-600">Ongoing</div>
                        <div className="text-sm text-orange-600">Support</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Technology Stack */}
        <section style={{paddingTop: '30px', paddingBottom: '30px'}}>
          <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
            
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-6">
                Our <span className="text-orange-500">Technology Stack</span>
              </h2>
              <p className="text-xl text-[#1e3a8a] max-w-4xl mx-auto leading-relaxed">
                Cutting-edge tools and frameworks we use to build intelligent solutions
              </p>
            </div>

            {/* Tech Categories */}
            <div className="grid lg:grid-cols-3 gap-8">
              
              {/* Machine Learning */}
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100">
                <h3 className="text-xl font-bold text-[#1e3a8a] mb-6 flex items-center">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                    <Brain className="w-4 h-4 text-white" />
                  </div>
                  Machine Learning
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                    TensorFlow & PyTorch
                  </div>
                  <div className="flex items-center text-gray-600">
                    <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                    Scikit-learn & Pandas
                  </div>
                  <div className="flex items-center text-gray-600">
                    <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                    Azure ML & AWS SageMaker
                  </div>
                  <div className="flex items-center text-gray-600">
                    <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                    Jupyter & MLflow
                  </div>
                </div>
              </div>

              {/* Deep Learning */}
              <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl border border-orange-100">
                <h3 className="text-xl font-bold text-[#1e3a8a] mb-6 flex items-center">
                  <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center mr-3">
                    <Network className="w-4 h-4 text-white" />
                  </div>
                  Deep Learning
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <CheckCircle className="w-4 h-4 text-[#1e3a8a] mr-2" />
                    Neural Networks & CNNs
                  </div>
                  <div className="flex items-center text-gray-600">
                    <CheckCircle className="w-4 h-4 text-[#1e3a8a] mr-2" />
                    LSTM & Transformers
                  </div>
                  <div className="flex items-center text-gray-600">
                    <CheckCircle className="w-4 h-4 text-[#1e3a8a] mr-2" />
                    OpenAI GPT & BERT
                  </div>
                  <div className="flex items-center text-gray-600">
                    <CheckCircle className="w-4 h-4 text-[#1e3a8a] mr-2" />
                    Computer Vision APIs
                  </div>
                </div>
              </div>

              {/* Cloud & Infrastructure */}
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100">
                <h3 className="text-xl font-bold text-[#1e3a8a] mb-6 flex items-center">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                    <Cloud className="w-4 h-4 text-white" />
                  </div>
                  Cloud & Infrastructure
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                    Microsoft Azure
                  </div>
                  <div className="flex items-center text-gray-600">
                    <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                    AWS & Google Cloud
                  </div>
                  <div className="flex items-center text-gray-600">
                    <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                    Docker & Kubernetes
                  </div>
                  <div className="flex items-center text-gray-600">
                    <CheckCircle className="w-4 h-4 text-orange-500 mr-2" />
                    REST APIs & GraphQL
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* Benefits Section */}
        <section className="relative" style={{paddingTop: '30px', paddingBottom: '30px'}}>
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-64 h-64 bg-[#1e3a8a]/5 rounded-full blur-2xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#f97316]/5 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl relative z-10">
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-[#1e3a8a]">AI Solution</span>{" "}
                <span className="text-[#f97316]">Benefits</span>
              </h2>
              <p className="text-xl text-[#1e3a8a] max-w-3xl mx-auto leading-relaxed">
                Discover how our AI solutions can transform your business operations and deliver measurable results
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Automated Decision Making",
                  description: "Reduce manual decision-making time by 85% with AI-powered automation that learns from patterns and makes intelligent choices in real-time.",
                  IconComponent: Settings
                },
                {
                  title: "Predictive Intelligence",
                  description: "Forecast future trends with 95% accuracy using advanced machine learning models that analyze historical data and market patterns.",
                  IconComponent: TrendingUp
                },
                {
                  title: "Cost Optimization",
                  description: "Achieve 40-60% reduction in operational costs through intelligent process automation and resource optimization algorithms.",
                  IconComponent: DollarSign
                },
                {
                  title: "Enhanced Customer Experience",
                  description: "Deliver personalized experiences with AI chatbots and recommendation engines that understand customer preferences and behavior.",
                  IconComponent: Users
                },
                {
                  title: "Scalable Processing",
                  description: "Process unlimited data volumes with cloud-based AI infrastructure that scales automatically based on demand.",
                  IconComponent: Cloud
                },
                {
                  title: "24/7 Intelligent Monitoring",
                  description: "Continuous monitoring and instant anomaly detection with AI systems that never sleep and learn from every interaction.",
                  IconComponent: Eye
                }
              ].map((benefit, index) => {
                const IconComponent = benefit.IconComponent;
                return (
                  <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#f97316] to-orange-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1e3a8a] mb-4 group-hover:text-[#f97316] transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="relative" style={{paddingTop: '30px', paddingBottom: '30px'}}>
          <div className="absolute inset-0">
            <div className="absolute top-20 right-10 w-64 h-64 bg-[#f97316]/5 rounded-full blur-2xl"></div>
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#1e3a8a]/5 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl relative z-10">
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-[#1e3a8a]">Real-World</span>{" "}
                <span className="text-[#f97316]">Use Cases</span>
              </h2>
              <p className="text-xl text-[#1e3a8a] max-w-3xl mx-auto leading-relaxed">
                See how leading companies have transformed their operations with our AI solutions
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  industry: "E-commerce",
                  company: "Global Retail Chain",
                  challenge: "Managing inventory across 2,000+ stores with frequent stockouts and overstock situations leading to $5M annual losses.",
                  solution: "Implemented AI-powered demand forecasting system with real-time inventory optimization and automated reordering algorithms.",
                  result: "Reduced inventory costs by 35%, improved stock availability by 28%, and increased customer satisfaction by 42%.",
                  metrics: "35% Cost Reduction",
                  bgColor: "from-[#1e3a8a] to-[#1e40af]",
                  accentColor: "text-[#1e3a8a]"
                },
                {
                  industry: "Manufacturing",
                  company: "Automotive Parts Manufacturer",
                  challenge: "Equipment failures causing 15% production downtime and $2M monthly losses due to unplanned maintenance.",
                  solution: "Deployed predictive maintenance AI system with IoT sensors and machine learning models to predict equipment failures.",
                  result: "Reduced unplanned downtime by 70%, increased equipment lifespan by 25%, and saved $18M annually.",
                  metrics: "70% Downtime Reduction",
                  bgColor: "from-[#f97316] to-orange-500",
                  accentColor: "text-[#1e3a8a]"
                },
                {
                  industry: "Financial Services",
                  company: "Digital Banking Platform",
                  challenge: "Processing 50,000+ loan applications monthly with 3-week approval times and 12% fraud rate.",
                  solution: "Implemented AI-powered credit scoring and fraud detection system with natural language processing for document analysis.",
                  result: "Reduced approval time to 24 hours, decreased fraud by 85%, and increased loan approval accuracy by 40%.",
                  metrics: "85% Fraud Reduction",
                  bgColor: "from-[#1e3a8a] to-[#1e40af]",
                  accentColor: "text-[#1e3a8a]"
                }
              ].map((useCase, index) => (
                <div key={index} className="bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
                  <div className={`bg-gradient-to-r ${useCase.bgColor} p-6 text-white relative overflow-hidden`}>
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                    </div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-sm font-semibold text-white/80">{useCase.industry}</div>
                        <div className="text-right">
                          <div className="text-2xl font-bold">{useCase.metrics}</div>
                          <div className="text-sm text-white/80">Impact</div>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white">
                        {useCase.company}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-[#1e3a8a] mb-2">Challenge:</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{useCase.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-[#1e3a8a] mb-2">AI Solution:</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{useCase.solution}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-[#1e3a8a] mb-2">Result:</h4>
                        <p className={`${useCase.accentColor} font-semibold text-sm leading-relaxed`}>
                          {useCase.result}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative" style={{paddingTop: '30px', paddingBottom: '30px'}}>
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-64 h-48 sm:h-64 bg-[#f97316]/5 rounded-full blur-2xl"></div>
            <div className="absolute bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-[#1e3a8a]/5 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 max-w-4xl relative z-10">
            {/* Header */}
            <div className="text-center mb-12 sm:mb-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                <span className="text-[#1e3a8a]">Frequently Asked</span>{" "}
                <span className="text-[#f97316]">Questions</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
                Common questions about our AI solutions and how artificial intelligence can transform your business
              </p>
            </div>

            {/* FAQ Accordion */}
            <div className="space-y-3 sm:space-y-4">
              {[
                {
                  question: "How long does it take to implement an AI solution?",
                  answer: "Implementation timelines vary based on complexity, but typically range from 6-16 weeks. Simple automation projects can be deployed in 6-8 weeks, while complex machine learning solutions may take 12-16 weeks. We follow agile methodology with regular milestones, ensuring transparency and allowing for iterative feedback throughout the development process."
                },
                {
                  question: "What data do you need to build effective AI models?",
                  answer: "Data requirements depend on your specific use case. Generally, we need historical data relevant to the problem we're solving - transaction records, customer interactions, sensor data, or operational metrics. We work with both structured and unstructured data, and our team will assess your data quality and provide recommendations during the initial consultation."
                },
                {
                  question: "How do you ensure AI models remain accurate over time?",
                  answer: "We implement continuous monitoring and retraining protocols including performance tracking, drift detection, and automated alerts when accuracy degrades. Our models are designed to evolve with your business, with quarterly reviews and ongoing optimization to ensure peak performance and relevance to changing business conditions."
                },
                {
                  question: "Can AI solutions integrate with our existing systems?",
                  answer: "Absolutely. Our AI solutions are architected for seamless integration with existing infrastructure through APIs, databases, and established workflows. We support integration with popular platforms like Salesforce, Microsoft Dynamics, SAP, and custom-built systems, ensuring minimal disruption to your current operations."
                },
                {
                  question: "What's the ROI timeline for AI implementations?",
                  answer: "Most clients see initial ROI within 3-6 months of deployment. Process automation typically delivers immediate cost savings, while predictive analytics and optimization solutions may take 6-12 months to show full impact. We provide detailed ROI projections during planning and track key performance metrics throughout implementation."
                },
                {
                  question: "Do you provide training and ongoing support?",
                  answer: "Yes, comprehensive training is included in all AI implementations. We provide hands-on technical training, user training for end-users, and executive briefings for leadership. We also offer ongoing support, detailed documentation, performance monitoring, and optional managed services for continued optimization and maintenance."
                }
              ].map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 text-left focus:outline-none focus:ring-2 focus:ring-[#f97316]/20 focus:ring-offset-2 group"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#1e3a8a] group-hover:text-[#f97316] transition-colors duration-300 pr-4 leading-tight">
                        {faq.question}
                      </h3>
                      <div className="flex-shrink-0 ml-2">
                        <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-[#f97316] to-orange-500 flex items-center justify-center transition-transform duration-300 ${
                          openFAQ === index ? 'rotate-180' : 'rotate-0'
                        }`}>
                          {openFAQ === index ? (
                            <Minus className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                          ) : (
                            <Plus className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                          )}
                        </div>
                      </div>
                    </div>
                  </button>
                  
                  <div className={`transition-all duration-300 ease-in-out ${
                    openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  } overflow-hidden`}>
                    <div className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-5 lg:pb-6">
                      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-4"></div>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center mt-8 sm:mt-12 lg:mt-16">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-200/50 shadow-lg">
                <div className="max-w-2xl mx-auto">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1e3a8a] mb-3 sm:mb-4">
                    Ready to Implement AI in Your Business?
                  </h3>
                  <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
                    Let our AI experts help you harness the power of artificial intelligence to drive innovation and growth
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                    <a 
                      href="/contact" 
                      className="w-full sm:w-auto inline-flex items-center justify-center bg-gradient-to-r from-[#f97316] to-orange-500 hover:from-orange-500 hover:to-[#f97316] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base"
                    >
                      <span>Start Your AI Journey</span>
                      <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                    <a 
                      href="/contact" 
                      className="w-full sm:w-auto inline-flex items-center justify-center bg-transparent border-2 border-[#f97316] text-[#f97316] hover:bg-[#f97316] hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base"
                    >
                      Free AI Consultation
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        </div>
        
        {/* CTA Section */}
        <section className="relative overflow-hidden" style={{paddingTop: '30px', paddingBottom: '30px'}}>
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src="/ai-smart-solutions-cta-bg.jpg" 
              alt="AI Technology Future"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/85 to-orange-600/90"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 container mx-auto px-6 lg:px-12 1366:px-8 max-w-6xl 1366:max-w-5xl">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
                Partner With Leading <span className="text-[#f97316]">AI Smart Solutions Experts</span> For Your Transformation Journey
              </h2>
              <p className="text-white/90 mb-10 text-lg leading-relaxed max-w-3xl mx-auto">
                Connect with our AI transformation specialists to accelerate your business growth. Get strategic guidance, technology insights, and implementation support from industry leaders in AI smart solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="bg-[#f97316] hover:bg-orange-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
                  Download Our Guide
                </a>
                <a href="/work" className="bg-transparent border-2 border-[#f97316] text-[#f97316] hover:bg-[#f97316] hover:text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300">
                  See Case Studies
                </a>
                <a href="/contact" className="bg-transparent border-2 border-[#f97316] text-[#f97316] hover:bg-[#f97316] hover:text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300">
                  Get a Quote
                </a>
              </div>
            </div>
          </div>
        </section>

      </div>

    </PageLayout>
  );
}