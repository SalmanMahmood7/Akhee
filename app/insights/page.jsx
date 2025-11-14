"use client";

import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight, BookOpen, TrendingUp, Shield, Database, Cloud, Cpu, Server, Sparkles, Download, FileText, CheckSquare, BarChart, ExternalLink, Eye, PieChart, LineChart, BarChart3, Activity, Target, Zap, Clock } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

// Featured articles from homepage
const featuredArticles = [
  {
    id: 1,
    slug: "microsoft-365-team-adoption",
    title: "How to get your whole team using Microsoft 365",
    excerpt: "Discover strategies to drive adoption and maximize the value of your Microsoft 365 investment across your entire organization.",
    category: "Digital Transformation",
    industry: "Technology", 
    topic: "Productivity",
    author: "Sarah Johnson",
    date: "March 15, 2024",
    dateValue: new Date("2024-03-15"),
    icon: TrendingUp,
    image: "/insight-1.jpg"
  },
  {
    id: 2,
    slug: "cloud-security-2024", 
    title: "The Future of Cloud Security in 2024",
    excerpt: "Explore the latest trends and best practices in cloud security to protect your digital assets in an evolving threat landscape.",
    category: "Cybersecurity",
    industry: "Financial Services",
    topic: "Cloud Security",
    author: "Michael Chen", 
    date: "March 10, 2024",
    dateValue: new Date("2024-03-10"),
    icon: Shield,
    image: "/insight-2.jpg"
  },
  {
    id: 3,
    slug: "ai-powered-analytics",
    title: "AI-Powered Analytics Business Intelligence", 
    excerpt: "Learn how artificial intelligence is revolutionizing data analytics and providing unprecedented insights for business growth.",
    category: "Data & Analytics",
    industry: "Healthcare",
    topic: "AI & Machine Learning",
    author: "Emily Rodriguez",
    date: "March 8, 2024", 
    dateValue: new Date("2024-03-08"),
    icon: Database,
    image: "/insight-3.jpg"
  },
  {
    id: 4,
    slug: "cloud-migration-best-practices",
    title: "Cloud Migration Best Practices for Enterprise",
    excerpt: "A comprehensive guide to successfully migrating your enterprise applications to the cloud with minimal downtime.",
    category: "Cloud Services",
    industry: "Manufacturing", 
    topic: "Cloud Migration",
    author: "David Kim",
    date: "March 5, 2024",
    dateValue: new Date("2024-03-05"),
    icon: Cloud,
    image: "/insight-4.jpg"
  }
];

// Additional articles to fill out the page
const additionalArticles = [
  {
    id: 5,
    slug: "devops-automation-guide",
    title: "DevOps Automation: A Complete Implementation Guide",
    excerpt: "Streamline your development pipeline with comprehensive automation strategies and best practices.",
    category: "DevOps",
    industry: "Technology",
    topic: "Process Automation", 
    author: "Alex Thompson",
    date: "March 3, 2024",
    dateValue: new Date("2024-03-03"),
    icon: Cpu,
    image: "/insight-5.jpg"
  },
  {
    id: 6,
    slug: "digital-transformation-roadmap",
    title: "Creating a Digital Transformation Roadmap",
    excerpt: "Step-by-step guide to planning and executing successful digital transformation initiatives.",
    category: "Digital Transformation", 
    industry: "Retail",
    topic: "Digital Strategy",
    author: "Maria Garcia",
    date: "February 28, 2024",
    dateValue: new Date("2024-02-28"),
    icon: Target,
    image: "/insight-6.jpg"
  },
  {
    id: 7,
    slug: "serverless-architecture-benefits",
    title: "The Business Benefits of Serverless Architecture",
    excerpt: "Discover how serverless computing can reduce costs and improve scalability for your applications.",
    category: "Development",
    industry: "Technology",
    topic: "Infrastructure",
    author: "James Wilson",
    date: "February 25, 2024",
    dateValue: new Date("2024-02-25"), 
    icon: Server,
    image: "/insight-7.jpg"
  },
  {
    id: 8,
    slug: "healthcare-data-visualization",
    title: "Data Visualization Trends in Healthcare Technology",
    excerpt: "How modern healthcare organizations are leveraging data visualization for better patient outcomes.",
    category: "Data & Analytics",
    industry: "Healthcare", 
    topic: "Data Visualization",
    author: "Dr. Lisa Park",
    date: "February 22, 2024",
    dateValue: new Date("2024-02-22"),
    icon: Activity,
    image: "/insight-8.jpg"
  }
];

const allArticles = [...featuredArticles, ...additionalArticles];

export default function Insights() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeIndustry, setActiveIndustry] = useState("All");
  const [activeTopic, setActiveTopic] = useState("All");

  // Filter categories, industries, and topics
  const categories = [
    "All",
    "Digital Transformation",
    "Cybersecurity", 
    "Data & Analytics",
    "Cloud Services",
    "Development",
    "DevOps"
  ];

  const industries = [
    "All",
    "Healthcare",
    "Financial Services",
    "Retail",
    "Manufacturing",
    "Technology",
    "Education"
  ];

  const topics = [
    "All",
    "Productivity",
    "Cloud Security",
    "AI & Machine Learning",
    "Cloud Migration",
    "Process Automation",
    "Digital Strategy",
    "Infrastructure",
    "Data Visualization"
  ];

  // Filter articles based on active filters
  const filteredArticles = allArticles.filter(article => {
    const categoryMatch = activeCategory === "All" || article.category === activeCategory;
    const industryMatch = activeIndustry === "All" || article.industry === activeIndustry;
    const topicMatch = activeTopic === "All" || article.topic === activeTopic;
    return categoryMatch && industryMatch && topicMatch;
  });

  return (
    <PageLayout>
      <div className="min-h-screen bg-white">

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src="/insights-hero-bg.jpg" 
              alt="Digital Insights Technology Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/70"></div>
          </div>

          <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-12 1366:px-8 max-w-6xl 1366:max-w-5xl">
            <div className="text-center space-y-8 pt-12">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8">
                Digital <span className="text-[#f97316]">Insights</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Stay ahead of the curve with our latest insights, trends, and best practices in digital transformation, technology, and innovation.
              </p>
              
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="relative z-10 py-16 bg-gray-50">
          <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
            
            {/* Category Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-full text-sm font-medium border transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-[#f97316] border-[#f97316] text-white shadow-lg'
                      : 'bg-white border-gray-200 text-gray-700 hover:border-[#f97316] hover:text-[#f97316]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Additional Filters */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {/* Industry Filter */}
              <div className="relative">
                <select
                  value={activeIndustry}
                  onChange={(e) => setActiveIndustry(e.target.value)}
                  className="appearance-none bg-white border border-gray-200 rounded-full px-6 py-3 pr-10 text-sm font-medium text-gray-700 hover:border-[#f97316] focus:border-[#f97316] focus:outline-none transition-all duration-300 min-w-[150px]"
                >
                  {industries.map((industry) => (
                    <option key={industry} value={industry}>
                      {industry === "All" ? "All Industries" : industry}
                    </option>
                  ))}
                </select>
              </div>

              {/* Topic Filter */}
              <div className="relative">
                <select
                  value={activeTopic}
                  onChange={(e) => setActiveTopic(e.target.value)}
                  className="appearance-none bg-white border border-gray-200 rounded-full px-6 py-3 pr-10 text-sm font-medium text-gray-700 hover:border-[#f97316] focus:border-[#f97316] focus:outline-none transition-all duration-300 min-w-[150px]"
                >
                  {topics.map((topic) => (
                    <option key={topic} value={topic}>
                      {topic === "All" ? "All Topics" : topic}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Results Count */}
            <div className="text-center mb-8">
              <p className="text-gray-600">
                Showing {filteredArticles.length} {filteredArticles.length === 1 ? 'article' : 'articles'}
              </p>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="relative z-10 pb-24 bg-gray-50">
          <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article, index) => {
                const isOrange = index % 2 !== 0;
                const IconComponent = article.icon;
                return (
                  <div key={article.id} className="group relative">
                    <div 
                      className="relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 bg-white"
                      onClick={() => router.push(`/insights/${article.slug}`)}
                    >
                      {/* Image Section */}
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        
                        {/* Icon - Top Left */}
                        <div className="absolute top-4 left-4">
                          <div className={`w-16 h-16 rounded-2xl ${isOrange ? 'bg-gradient-to-br from-[#f97316] to-[#f97316]' : 'bg-gradient-to-br from-[#1e3a8a] to-[#1e40af]'} p-2 shadow-xl transition-all duration-700 group-hover:scale-110 group-hover:rotate-3`}>
                            <div className="w-full h-full bg-white rounded-xl flex items-center justify-center">
                              <IconComponent className={`w-8 h-8 ${isOrange ? 'text-[#f97316]' : 'text-[#1e3a8a]'}`} />
                            </div>
                          </div>
                        </div>

                        {/* Date - Top Right */}
                        <div className="absolute top-4 right-4">
                          <div className="bg-black/40 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
                            {article.date}
                          </div>
                        </div>

                        {/* Category - Bottom Left */}
                        <div className="absolute bottom-4 left-4">
                          <div className={`px-3 py-1 ${isOrange ? 'bg-[#f97316]' : 'bg-[#1e3a8a]'} text-white text-xs font-bold rounded-full`}>
                            {article.category}
                          </div>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="p-6 bg-white">
                        {/* Title */}
                        <h3 className={`text-xl font-bold mb-4 leading-tight ${isOrange ? 'text-[#f97316]' : 'text-[#1e3a8a]'}`}>
                          {article.title}
                        </h3>

                        {/* Excerpt */}
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {article.excerpt}
                        </p>

                        {/* Author & Read More */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-gray-600">
                            <User className="w-4 h-4" />
                            <span className="text-sm">{article.author}</span>
                          </div>
                          
                          <div className={`flex items-center gap-2 ${isOrange ? 'text-[#f97316]' : 'text-[#1e3a8a]'} text-sm font-medium group-hover:gap-3 transition-all`}>
                            <span>Read More</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Newsletter CTA Section */}
        <section className="relative py-16 overflow-hidden">
          
          <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-12 max-w-6xl">
            <div className="text-center">
              
              <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-6">
                Stay <span className="text-[#f97316]">Informed</span>
              </h2>
              
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Get the latest insights, trends, and best practices delivered directly to your inbox. Join our community of forward-thinking professionals.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-full border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#f97316] focus:border-transparent"
                />
                <button className="px-8 py-4 bg-[#f97316] hover:bg-orange-500 text-white font-semibold rounded-full transition-all duration-300 whitespace-nowrap">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/team-coding.jpg" 
              alt="Ready to Transform Your Business"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/70"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-12 max-w-6xl">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your <span className="text-[#f97316]">Business?</span>
              </h2>
              <p className="text-xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
                Let's discuss how our expertise can help you achieve your digital transformation goals and drive innovation across your organization.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center justify-center gap-2 h-12 bg-[#f97316] hover:bg-orange-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 text-lg">
                  <Download className="w-5 h-5" />
                  Download Our Guide
                </button>
                <Link className="inline-flex items-center justify-center gap-2 h-12 bg-transparent border-2 border-[#f97316] text-[#f97316] px-8 py-4 rounded-full font-semibold hover:bg-[#f97316] hover:text-white transition-all duration-300 text-lg" href="/case-studies">
                  <Eye className="w-5 h-5" />
                  See Case Studies
                </Link>
                <button className="inline-flex items-center justify-center gap-2 h-12 bg-transparent border-2 border-[#f97316] text-[#f97316] px-8 py-4 rounded-full font-semibold hover:bg-[#f97316] hover:text-white transition-all duration-300 text-lg">
                  <ArrowRight className="w-5 h-5" />
                  Get a Quote
                </button>
              </div>
            </div>
          </div>
        </section>

      </div>
    </PageLayout>
  );
}