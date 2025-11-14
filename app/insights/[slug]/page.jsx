"use client";

import { useParams, useRouter } from "next/navigation";
import PageLayout from "@/components/PageLayout";
import { ArrowLeft, Calendar, User, Clock, Download, ExternalLink, BarChart } from "lucide-react";
import Link from "next/link";
import { useQuery } from '@tanstack/react-query';

// API fetch function
const fetchArticleBySlug = async (slug) => {
  const response = await fetch(`/api/articles/${slug}`);
  if (!response.ok) {
    throw new Error('Failed to fetch article');
  }
  const data = await response.json();
  return {
    ...data.article,
    dateValue Date(data.article.dateValue),
    createdAt.article.createdAt ? new Date(data.article.createdAt) ,
    updatedAt.article.updatedAt ? new Date(data.article.updatedAt) 
  };
};

export default function ArticlePage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  // Fetch article from API
  const { data, isLoading, error } = useQuery({
    queryKey['article', slug],
    queryFn() => fetchArticleBySlug(slug),
    staleTime5 * 60 * 1000, // 5 minutes
  });

  // Loading state
  if (isLoading) {
    return (
      <PageLayout>
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="text-center">
            <p className="text-lg text-gray-600 mb-8">Loading article...</p>
            <button
              onClick={() => router.push('/insights')}
              className="inline-flex items-center gap-2 border border-gray-300 hover:border-orange-500 text-gray-700 hover:text-orange-600 px-6 py-3 rounded-full font-medium transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Insights
            </button>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="min-h-screen bg-white">
        
        {/* Header */}
        <section className="relative bg-gradient-to-r from-slate-900 to-blue-900 py-14">
          <div className="absolute inset-0">
            <img 
              src={finalArticle.image} 
              alt={finalArticle.title}
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-12 max-w-4xl pt-10">
            {/* Back Button */}
            <div className="mb-8">
              <button
                onClick={() => router.back()}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 hover:border-orange-500 px-3 py-1.5 rounded-md text-sm transition-all duration-300 hover:shadow-lg hover:scale-105 hover:-translate-y-0.5"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Insights
              </button>
            </div>

            {/* Category Badge */}
            <div className="mb-6">
              <span className="bg-orange-500 text-white text-sm font-medium px-4 py-2 rounded-full">
                {finalArticle.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {finalArticle.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl">
              {finalArticle.excerpt}
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-white/80 mb-8">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{finalArticle.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{finalArticle.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{finalArticle.readTime}</span>
              </div>
            </div>

            {/* Download Button in Hero */}
            <div className="mt-8">
              <button
                onClick={() => window.open(finalArticle.downloadableAsset, '_blank')}
                className="bg-gradient-to-r from-[#f97316] to-[#ea580c] hover:from-[#ea580c] hover:to-[#d97706] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl text-base flex items-center gap-2 hover:gap-3"
              >
                <Download className="w-4 h-4 transition-transform duration-300 hover:rotate-12" />
                Download Complete Guide
              </button>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-4xl">
            

            {/* Article Content */}
            <div className="prose prose-lg max-w-none mb-12">
              
              {/* Introduction */}
              <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl p-8 mb-8 border border-blue-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Executive Summary</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  In today's rapidly evolving digital landscape, organizations face unprecedented challenges and opportunities. This comprehensive analysis examines the current market trends, implementation strategies, and measurable outcomes that define success in {finalArticle.category.toLowerCase()}.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Based on industry research and real-world case studies, we've identified key patterns that separate high-performing organizations from their competitors. The insights presented here provide actionable frameworks for immediate implementation.
                </p>
              </div>

              {/* Market Analysis */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Market Landscape & Current Trends</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                The {finalArticle.industry.toLowerCase()} industry is experiencing significant transformation, driven by technological advancement and changing market demands. Recent studies indicate that organizations investing in strategic {finalArticle.category.toLowerCase()} initiatives are achieving {finalArticle.keyTakeaways[0]} improvement rates across key performance metrics.
              </p>

              <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Industry Snapshot</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-[#1e3a8a] mb-2">{finalArticle.keyTakeaways[0]}</div>
                    <div className="text-sm text-gray-600">Performance Improvement</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600 mb-2">{finalArticle.keyTakeaways[1]}</div>
                    <div className="text-sm text-gray-600">Market Growth</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600 mb-2">{finalArticle.keyTakeaways[2]}</div>
                    <div className="text-sm text-gray-600">ROI Achievement</div>
                  </div>
                </div>
              </div>

              {/* Implementation Strategy */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Strategic Implementation Framework</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Successful {finalArticle.category.toLowerCase()} implementation requires a structured approach that balances innovation with risk management. Our research shows that organizations following a phased implementation strategy achieve 40% better outcomes compared to those attempting comprehensive overhauls.
              </p>

              <div className="space-y-6 mb-8">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Phase 1 & Planning</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Begin with a comprehensive audit of current capabilities and infrastructure. Identify gaps, opportunities, and potential challenges that could impact implementation success.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Current state analysis and capability mapping</li>
                    <li>Stakeholder identification and requirement gathering</li>
                    <li>Risk assessment and mitigation planning</li>
                    <li>Resource allocation and timeline development</li>
                  </ul>
                </div>

                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Phase 2 Building</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Establish the technical and organizational foundation necessary for successful implementation. This phase focuses on infrastructure, team preparation, and initial pilot programs.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Infrastructure setup and security implementation</li>
                    <li>Team training and skill development programs</li>
                    <li>Pilot project execution and learning capture</li>
                    <li>Process optimization and workflow design</li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Phase 3 Implementation</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Roll out solutions across the organization with continuous monitoring and optimization. Focus on adoption, performance metrics, and continuous improvement.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Organization-wide deployment and change management</li>
                    <li>Performance monitoring and KPI tracking</li>
                    <li>User adoption programs and support systems</li>
                    <li>Continuous optimization and feature enhancement</li>
                  </ul>
                </div>
              </div>

              {/* Case Study */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Real-World Success Story</h2>
              
              <div className="bg-gray-50 rounded-xl p-8 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Case Study{finalArticle.industry} Transformation</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  A leading {finalArticle.industry.toLowerCase()} organization partnered with our team to implement a comprehensive {finalArticle.category.toLowerCase()} solution. The 18-month project delivered measurable results that exceeded initial projections.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Challenge</h4>
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">
                      The organization faced increasing pressure to modernize operations while maintaining service quality and regulatory compliance. Legacy systems were limiting growth potential and creating operational inefficiencies.
                    </p>
                    
                    <h4 className="font-semibold text-gray-900 mb-3">Solution</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      We implemented a phased approach focusing on {finalArticle.category.toLowerCase()} modernization, team training, and process optimization. The solution included cloud migration, automated workflows, and enhanced security measures.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Results Achieved</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-700 text-sm">{finalArticle.keyTakeaways[0]} improvement in operational efficiency</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-700 text-sm">{finalArticle.keyTakeaways[1]} reduction in processing time</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-gray-700 text-sm">{finalArticle.keyTakeaways[2]} increase in user satisfaction</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-gray-700 text-sm">ROI achieved within 12 months</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Best Practices */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Implementation Best Practices</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Based on our experience across hundreds of implementations, these best practices consistently drive better outcomes and faster time-to-value for organizations.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm">1</span>
                    Start with Clear Objectives
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Define specific, measurable goals and success criteria before beginning implementation. This ensures alignment across stakeholders and provides a framework for measuring progress.
                  </p>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm">2</span>
                    Invest in Change Management
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Successful adoption requires comprehensive change management. Invest in training, communication, and support systems to ensure smooth user transition and sustained adoption.
                  </p>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm">3</span>
                    Monitor and Optimize
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Implement robust monitoring and analytics from day one. Use data-driven insights to identify optimization opportunities and ensure continuous improvement.
                  </p>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm">4</span>
                    Plan for Security
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Security should be integrated throughout the implementation process, not added as an afterthought. Implement security controls, compliance measures, and regular audits.
                  </p>
                </div>
              </div>

              {/* Future Outlook */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Future Outlook & Recommendations</h2>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                The {finalArticle.category.toLowerCase()} landscape continues to evolve rapidly. Organizations that stay ahead of emerging trends and technologies will maintain competitive advantages in their respective markets.
              </p>

              <div className="bg-blue-50 rounded-xl p-6 mb-8 border border-blue-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Recommendations for 2024</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">✓</span>
                    <span className="text-gray-700 text-sm">Prioritize AI and automation integration to enhance operational efficiency</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">✓</span>
                    <span className="text-gray-700 text-sm">Invest in cloud-native architectures for scalability and resilience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">✓</span>
                    <span className="text-gray-700 text-sm">Enhance cybersecurity measures to address evolving threat landscapes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold mt-0.5">✓</span>
                    <span className="text-gray-700 text-sm">Focus on user experience design to drive adoption and satisfaction</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Key Takeaways */}
            <div className="bg-gray-50 rounded-2xl p-8 mb-12">
              <div className="flex items-center gap-2 mb-6">
                <BarChart className="w-5 h-5 text-[#1e3a8a]" />
                <h3 className="text-2xl font-bold text-gray-900">Key Statistics & Insights</h3>
              </div>
              <div className="grid gap-4">
                {finalArticle.keyTakeaways.map((takeaway, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium">{takeaway}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Services */}
            {finalArticle.relatedServices && (
              <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Services</h3>
                <p className="text-gray-600 mb-6">Explore our services that can help you implement the strategies discussed in this finalArticle.</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {finalArticle.relatedServices.map((service, index) => (
                    <Link
                      key={index}
                      href={service}
                      className="flex items-center gap-3 p-4 bg-gray-50 hover:bg-orange-50 border border-gray-200 hover:border-orange-300 rounded-xl transition-all duration-300 hover:shadow-md"
                    >
                      <ExternalLink className="w-5 h-5 text-orange-600" />
                      <span className="font-medium text-gray-900">
                        {service.split('/').pop()?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}


          </div>
        </section>

      </div>
    </PageLayout>
  );
}