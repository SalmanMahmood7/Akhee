"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, User, BookOpen, TrendingUp, Shield, Database } from "lucide-react";

const featuredArticles = [
  {
    slug: "microsoft-365-team-adoption",
    title: "How to get your whole team using Microsoft 365",
    excerpt: "Discover strategies to drive adoption and maximize the value of your Microsoft 365 investment across your entire organization.",
    category: "ARTICLES",
    image: "/insight-1.jpg"
  },
  {
    slug: "cloud-security-2024", 
    title: "The Future of Cloud Security in 2024",
    excerpt: "Explore the latest trends and best practices in cloud security to protect your digital assets in an evolving threat landscape.",
    category: "ARTICLES",
    image: "/insight-2.jpg"
  },
  {
    slug: "ai-powered-analytics",
    title: "AI-Powered Analytics Business Intelligence", 
    excerpt: "Learn how artificial intelligence is revolutionizing data analytics and providing unprecedented insights for business growth.",
    category: "ARTICLES",
    image: "/insight-3.jpg"
  },
  {
    slug: "cloud-migration-best-practices",
    title: "Cloud Migration Best Practices for Enterprise",
    excerpt: "A comprehensive guide to successfully migrating your enterprise applications to the cloud with minimal downtime.",
    category: "ARTICLES", 
    image: "/insight-4.jpg"
  }
];

export default function InsightsSection() {
  const router = useRouter();

  return (
    <section className="py-16">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
        
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Left Side - Articles */}
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-6">
              {featuredArticles.map((article, index) => (
                <div
                  key={index}
                  onClick={() => router.push(`/insights/${article.slug}`)}
                  className="group cursor-pointer"
                >
                  {/* Article Card */}
                  <div className="bg-white rounded-lg border border-blue-100 overflow-hidden hover:shadow-lg transition-all duration-300 group-hover:border-orange-200 h-full flex flex-col">
                    
                    <div className="p-6 pb-4 flex-1 flex flex-col">
                      {/* Category Badge */}
                      <div className="mb-4">
                        <span className="inline-flex items-center px-3 py-1 bg-blue-50 text-[#1e3a8a] text-xs font-medium rounded-full">
                          📄 {article.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-[#1e3a8a] mb-3 group-hover:text-orange-600 transition-colors duration-300 leading-tight">
                        {article.title}
                      </h3>
                      
                      {/* Excerpt */}
                      <p className="text-[#1e3a8a] leading-relaxed text-sm flex-1">
                        {article.excerpt}
                      </p>
                    </div>

                    {/* Image */}
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      
                      {/* Read More Arrow */}
                      <div className="absolute bottom-4 right-4">
                        <div className="w-9 h-9 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Our Latest Thinking */}
          <div className="lg:col-span-1 order-first lg:order-last">
            <div className="lg:sticky lg:top-28 mb-8 lg:mb-0">
              <div className="space-y-6">
                
                {/* Main Heading */}
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                    <span className="text-[#1e3a8a]">Our</span> <span className="text-[#f97316]">latest</span><br /><span className="text-[#1e3a8a]">thinking</span>
                  </h2>
                </div>
                
                {/* Description */}
                <div>
                  <p className="text-lg text-[#1e3a8a] leading-relaxed">
                    Deep insights into technology topics that matter.
                  </p>
                </div>

                {/* View All Articles Link */}
                <div className="pt-8">
                  <button
                    onClick={() => router.push('/insights')}
                    className="group inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold transition-colors duration-300"
                  >
                    View all articles
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>

                {/* Additional content to ensure scrolling is visible */}
                <div className="pt-12 space-y-4 border-t border-blue-200">
                  <h3 className="text-xl font-semibold text-[#1e3a8a]">Topics We Cover</h3>
                  <ul className="space-y-2 text-[#1e3a8a]">
                    <li className="flex items-center"><span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>Digital Transformation</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>Cloud Solutions</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>AI & Machine Learning</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>Cybersecurity</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>DevOps & Infrastructure</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}