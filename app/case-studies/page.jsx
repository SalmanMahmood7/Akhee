"use client";

import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Briefcase, ArrowRight, Award, Target, Sparkles, CheckCircle, TrendingUp, BarChart3, Laptop, Cloud, Shield, Lightbulb, Users, Globe, Server, Database, Code, Lock, Brain, ChevronRight, ExternalLink, Calendar, Building2, Zap } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function Work() {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const projectCategories = [
    {
      category: "APPLICATION DEVELOPMENT",
      icon: Code,
      color: "from-[#f97316] to-orange-600",
      description: "Custom software solutions that drive business growth",
      projects: [
        {
          title: "Rypl.com Marketplace",
          client: "Rypl Technologies",
          description: "Built a next-gen B2B marketplace platform from scratch with real-time bidding",
          impact: "1M+ Users",
          metrics: { users: "1M+", transactions: "$50M+", uptime: "99.9%" },
          technologies: ["React", "Node.js", "AWS", "MongoDB"],
          year: "2024",
          image: "/case-study-1.jpg",
          duration: "8 months"
        },
        {
          title: "Healthcare Portal",
          client: "MediCare Connect",
          description: "Patient management system with telemedicine capabilities",
          impact: "500K Patients",
          metrics: { patients: "500K", appointments: "2M+", satisfaction: "4.8/5" },
          technologies: ["Angular", "Python", "PostgreSQL", "Docker"],
          year: "2024",
          image: "/case-study-2.jpg",
          duration: "6 months"
        },
        {
          title: "FinTech Mobile App",
          client: "QuickPay Solutions",
          description: "Cross-platform payment processing application",
          impact: "250K Downloads",
          metrics: { downloads: "250K", dailyTransactions: "10K+", rating: "4.7★" },
          technologies: ["React Native", "Firebase", "Stripe API", "Node.js"],
          year: "2023",
          image: "/case-study-3.jpg",
          duration: "4 months"
        }
      ]
    },
    {
      category: "DATA & ANALYTICS",
      icon: BarChart3,
      color: "from-[#1e3a8a] to-blue-800",
      description: "Transform data into actionable business intelligence",
      projects: [
        {
          title: "Canadian Propane Analytics",
          client: "Superior Propane",
          description: "Consolidated data platform discovering multi-channel sales opportunities",
          impact: "+250% Sales",
          metrics: { salesGrowth: "250%", dataProcessed: "10TB+", insights: "500+" },
          technologies: ["Tableau", "Python", "Snowflake", "Apache Spark"],
          year: "2024",
          image: "/case-study-4.jpg",
          duration: "5 months"
        },
        {
          title: "Retail Intelligence Dashboard",
          client: "Metro Stores",
          description: "Real-time inventory and customer behavior analytics",
          impact: "+45% Efficiency",
          metrics: { efficiency: "45%", stores: "200+", accuracy: "98%" },
          technologies: ["Power BI", "Azure", "SQL Server", "Python"],
          year: "2023",
          image: "/case-study-5.jpg",
          duration: "3 months"
        },
        {
          title: "Manufacturing KPI System",
          client: "AutoParts Global",
          description: "Predictive maintenance and production optimization platform",
          impact: "-30% Downtime",
          metrics: { downtimeReduction: "30%", costSavings: "$2M+", plants: "15" },
          technologies: ["Apache Kafka", "TensorFlow", "Grafana", "InfluxDB"],
          year: "2024",
          image: "/case-study-6.jpg",
          duration: "7 months"
        }
      ]
    },
    {
      category: "CLOUD SERVICES",
      icon: Cloud,
      color: "from-[#f97316] to-orange-600",
      description: "Scalable cloud infrastructure and migration services",
      projects: [
        {
          title: "Global Finance Migration",
          client: "Global Finance Corp",
          description: "Complete AWS migration reducing operational costs significantly",
          impact: "-40% Costs",
          metrics: { costReduction: "40%", performance: "+60%", availability: "99.99%" },
          technologies: ["AWS", "Kubernetes", "Terraform", "Jenkins"],
          year: "2024",
          image: "/case-study-7.jpg",
          duration: "10 months"
        },
        {
          title: "SaaS Platform Scaling",
          client: "TechStart Inc",
          description: "Multi-region deployment with auto-scaling capabilities",
          impact: "10x Growth",
          metrics: { scalability: "10x", regions: "5", responseTime: "<100ms" },
          technologies: ["Google Cloud", "Docker", "Redis", "LoadBalancer"],
          year: "2023",
          image: "/case-study-8.jpg",
          duration: "4 months"
        },
        {
          title: "Hybrid Cloud Solution",
          client: "Insurance Leader",
          description: "Secure hybrid cloud architecture for sensitive data",
          impact: "100% Compliant",
          metrics: { compliance: "100%", dataMigrated: "50TB", security: "SOC2" },
          technologies: ["Azure", "VMware", "Active Directory", "VPN"],
          year: "2024",
          image: "/case-study-9.jpg",
          duration: "6 months"
        }
      ]
    },
    {
      category: "CYBER SECURITY",
      icon: Shield,
      color: "from-[#1e3a8a] to-blue-800",
      description: "Enterprise-grade security solutions and compliance",
      projects: [
        {
          title: "Healthcare Security Overhaul",
          client: "Ontario Health Network",
          description: "Implementing enterprise-grade security infrastructure with zero-trust",
          impact: "100% Secure",
          metrics: { incidents: "0", compliance: "HIPAA", protection: "500K records" },
          technologies: ["CrowdStrike", "Palo Alto", "Splunk", "HashiCorp Vault"],
          year: "2024",
          image: "/healthcare-security-overhaul.jpg",
          duration: "8 months"
        },
        {
          title: "Banking Security Audit",
          client: "Regional Bank",
          description: "Complete security assessment and remediation",
          impact: "Zero Breaches",
          metrics: { vulnerabilities: "-95%", training: "1000+ staff", certifications: "PCI DSS" },
          technologies: ["Qualys", "Fortinet", "RSA", "IBM QRadar"],
          year: "2023",
          image: "/case-study-11.jpg",
          duration: "5 months"
        },
        {
          title: "Ransomware Protection",
          client: "Manufacturing Corp",
          description: "Advanced threat detection and response system",
          impact: "-99% Threats",
          metrics: { threatsBlocked: "10K+", recoveryTime: "<1hr", dataProtected: "100TB" },
          technologies: ["SentinelOne", "Veeam", "Zscaler", "Darktrace"],
          year: "2024",
          image: "/case-study-12.jpg",
          duration: "3 months"
        }
      ]
    },
    {
      category: "DIGITAL ADVISORY",
      icon: Lightbulb,
      color: "from-[#f97316] to-orange-600",
      description: "Strategic consulting for digital transformation",
      projects: [
        {
          title: "Retail Digital Transformation",
          client: "Fashion Retail Giant",
          description: "Complete digital strategy overhaul and omnichannel implementation",
          impact: "+180% ROI",
          metrics: { roi: "180%", channels: "5", customerSatisfaction: "+40%" },
          technologies: ["Salesforce", "Adobe Commerce", "Analytics 360", "CDP"],
          year: "2024",
          image: "/case-study-13.jpg",
          duration: "12 months"
        },
        {
          title: "Government Modernization",
          client: "City of Toronto",
          description: "Digital services transformation for citizen engagement",
          impact: "2M Citizens",
          metrics: { citizens: "2M", services: "50+", processingTime: "-60%" },
          technologies: ["ServiceNow", "Microsoft 365", "Power Platform", "Azure"],
          year: "2023",
          image: "/government-modernization.jpg",
          duration: "18 months"
        },
        {
          title: "Supply Chain Optimization",
          client: "Logistics Leader",
          description: "AI-driven supply chain and logistics transformation",
          impact: "-35% Costs",
          metrics: { costReduction: "35%", deliveryTime: "-25%", accuracy: "99.5%" },
          technologies: ["SAP S/4HANA", "Blue Yonder", "IoT", "Blockchain"],
          year: "2024",
          image: "/case-study-15.jpg",
          duration: "9 months"
        }
      ]
    },
    {
      category: "DIGITAL PLATFORMS",
      icon: Globe,
      color: "from-[#1e3a8a] to-blue-800",
      description: "Enterprise platforms and ecosystem development",
      projects: [
        {
          title: "E-Learning Platform",
          client: "EduTech Solutions",
          description: "Comprehensive online education platform with AI tutoring",
          impact: "100K Students",
          metrics: { students: "100K", courses: "500+", completion: "85%" },
          technologies: ["Next.js", "GraphQL", "WebRTC", "TensorFlow.js"],
          year: "2024",
          image: "/case-study-16.jpg",
          duration: "10 months"
        },
        {
          title: "IoT Management Platform",
          client: "Smart City Initiative",
          description: "Centralized IoT device management and analytics",
          impact: "50K Devices",
          metrics: { devices: "50K", dataPoints: "1B+/day", uptime: "99.95%" },
          technologies: ["MQTT", "TimescaleDB", "React", "Apache Flink"],
          year: "2023",
          image: "/case-study-17.jpg",
          duration: "7 months"
        },
        {
          title: "B2B Commerce Platform",
          client: "Industrial Supplier",
          description: "Custom B2B marketplace with complex pricing rules",
          impact: "$100M GMV",
          metrics: { gmv: "$100M", suppliers: "500+", buyers: "5000+" },
          technologies: ["Magento", "Elasticsearch", "RabbitMQ", "Vue.js"],
          year: "2024",
          image: "/case-study-18.jpg",
          duration: "8 months"
        }
      ]
    },
    {
      category: "MANAGED IT",
      icon: Server,
      color: "from-[#f97316] to-orange-600",
      description: "Complete IT infrastructure management and support",
      projects: [
        {
          title: "MaRS Discovery District",
          client: "MaRS Innovation Hub",
          description: "Complete infrastructure revamp increasing efficiency dramatically",
          impact: "+300% Efficiency",
          metrics: { efficiency: "300%", tickets: "-70%", satisfaction: "98%" },
          technologies: ["VMware", "Cisco", "Microsoft 365", "ServiceDesk"],
          year: "2024",
          image: "/infrastructure-revamp.jpg",
          duration: "Ongoing"
        },
        {
          title: "Law Firm IT Management",
          client: "Top Legal Firm",
          description: "24/7 managed services for 500+ employees",
          impact: "99.9% Uptime",
          metrics: { uptime: "99.9%", responseTime: "<15min", users: "500+" },
          technologies: ["Azure AD", "Citrix", "Veeam", "SolarWinds"],
          year: "2023",
          image: "/case-study-20.jpg",
          duration: "Ongoing"
        },
        {
          title: "Multi-Site Infrastructure",
          client: "Retail Chain",
          description: "Unified IT management across 50 locations",
          impact: "50 Locations",
          metrics: { locations: "50", devices: "2000+", savings: "$500K/year" },
          technologies: ["SD-WAN", "Meraki", "Intune", "ConnectWise"],
          year: "2024",
          image: "/case-study-21.jpg",
          duration: "Ongoing"
        }
      ]
    }
  ];

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src="/case-study-22.jpg" 
              alt="Work Portfolio Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/70"></div>
          </div>

          <div className="relative z-10 container mx-auto px-6 lg:px-12 max-w-6xl">
            <div className="text-center space-y-6">
              <div className="h-20 mb-6"></div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
                Transforming <span className="text-[#f97316]">Ideas</span> Into <span className="text-[#f97316]">Reality</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Discover how we've helped businesses across industries achieve digital excellence through innovative solutions and strategic partnerships.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap justify-center gap-12 pt-8">
                <div className="text-center">
                  <p className="text-4xl font-bold text-[#f97316]">100+</p>
                  <p className="text-gray-400 mt-1">Happy Clients</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-[#f97316]">250+</p>
                  <p className="text-gray-400 mt-1">Projects Delivered</p>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Projects by Category */}
        <section className="py-14 1366:py-14">
          <div className="container mx-auto px-6 md:px-8 lg:px-12 1366:px-8 max-w-7xl 1366:max-w-6xl">
            <div className="space-y-16">
              {projectCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="space-y-8">
                  {/* Category Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 bg-gradient-to-r ${category.color} rounded-xl`}>
                        <category.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-[#1e3a8a]">{category.category}</h3>
                        <p className="text-gray-600">{category.description}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setExpandedCategory(expandedCategory === category.category ? null : category)}
                      className="flex items-center space-x-2 text-[#1e3a8a] hover:text-[#1e3a8a] font-medium"
                    >
                      <span>{expandedCategory === category.category ? 'Show Less' : 'View All'}</span>
                      <ChevronRight className={`w-5 h-5 transition-transform ${expandedCategory === category.category ? 'rotate-90' : ''}`} />
                    </button>
                  </div>

                  {/* Projects Grid */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {category.projects.slice(0, expandedCategory === category.category ? undefined : 3).map((project, projectIndex) => (
                      <div
                        key={projectIndex}
                        className="group relative bg-white rounded-2xl overflow-hidden border border-blue-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                      >
                        {/* Project Image */}
                        <div className="relative h-48 overflow-hidden">
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                          <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 bg-white/90 backdrop-blur text-xs font-semibold text-gray-800 rounded-full">
                              {project.year}
                            </span>
                          </div>
                          <div className="absolute bottom-4 left-4 right-4">
                            <h4 className="text-xl font-bold text-white mb-1">{project.title}</h4>
                            <p className="text-sm text-gray-200">{project.client}</p>
                          </div>
                        </div>

                        {/* Project Content */}
                        <div className="p-6 space-y-4">
                          <p className="text-gray-600 line-clamp-2">{project.description}</p>

                          {/* Metrics */}
                          <div className="flex flex-wrap gap-3">
                            {Object.entries(project.metrics).slice(0, 3).map(([key, value]) => (
                              <div key={key} className="flex items-center space-x-1">
                                <CheckCircle className="w-4 h-4 text-[#f97316]" />
                                <span className="text-sm font-medium text-gray-700">{String(value)}</span>
                              </div>
                            ))}
                          </div>

                          {/* Technologies */}
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.slice(0, 3).map((tech, techIndex) => (
                              <span 
                                key={techIndex}
                                className="px-2 py-1 bg-blue-100 text-xs font-medium text-gray-600 rounded"
                              >
                                {tech}
                              </span>
                            ))}
                            {project.technologies.length > 3 && (
                              <span className="px-2 py-1 bg-blue-100 text-xs font-medium text-gray-600 rounded">
                                +{project.technologies.length - 3}
                              </span>
                            )}
                          </div>

                          {/* Footer */}
                          <div className="pt-4 border-t border-blue-100 flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <Calendar className="w-4 h-4 text-[#1e3a8a]" />
                              <span className="text-sm text-gray-500">{project.duration}</span>
                            </div>
                            <button className="group/btn flex items-center text-[#1e3a8a] font-semibold text-sm hover:text-[#1e3a8a] transition-colors">
                              Case Study
                              <ExternalLink className="ml-1 w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                            </button>
                          </div>
                        </div>

                        {/* Impact Badge */}
                        <div className="absolute top-4 right-4">
                          <div className="px-3 py-1 bg-gradient-to-r from-[#f97316] to-orange-600 text-white text-xs font-bold rounded-full shadow-lg">
                            {project.impact}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="py-14 1366:py-14 bg-blue-50">
          <div className="container mx-auto px-6 md:px-8 lg:px-12 1366:px-8 max-w-7xl 1366:max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl 1366:text-3xl font-bold text-[#1e3a8a] mb-4">What Our Clients Say</h2>
              <p className="text-lg text-gray-600">Real feedback from real partners</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote: "Brillion transformed our entire infrastructure. The efficiency gains have been remarkable.",
                  author: "Hamza Khan",
                  role: "CTO, MaRS Discovery District",
                  image: "/hamza-khan.jpg"
                },
                {
                  quote: "Their data analytics solution gave us insights we never knew existed. Game-changing work.",
                  author: "Shahzaib Kamal",
                  role: "VP Operations, Superior Propane",
                  image: "/shahzaib-kamal.png"
                },
                {
                  quote: "The security implementation was flawless. We sleep better knowing our data is protected.",
                  author: "Salman Mahmood",
                  role: "CISO, Ontario Health",
                  image: "/salman-mahmood.jpg"
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#f97316] text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center space-x-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-[#1e3a8a]">{testimonial.author}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden">
          <div className="relative bg-[#1e3a8a]">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img 
                src="/case-study-23.jpg" 
                alt="Business Transformation Background"
                className="w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-black/70"></div>
            </div>
            
            <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-12 1.25xl:px-16 max-w-7xl flex items-center justify-center py-12">
              <div className="text-center max-w-4xl mx-auto mt-8">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-white/90 mb-10 text-lg leading-relaxed max-w-3xl mx-auto">
                  Join hundreds of companies that have accelerated their growth with our innovative solutions.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <a 
                    href="/contact"
                    className="bg-[#f97316] hover:bg-orange-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 text-lg flex items-center justify-center"
                  >
                    Download Our Guide
                  </a>
                  <a 
                    href="/case-studies"
                    className="bg-transparent border-2 border-[#f97316] text-[#f97316] px-8 py-4 rounded-full font-semibold hover:bg-[#f97316] hover:text-white transition-all duration-300 text-lg flex items-center justify-center"
                  >
                    See Case Studies
                  </a>
                  <a 
                    href="/contact"
                    className="bg-transparent border-2 border-[#f97316] text-[#f97316] px-8 py-4 rounded-full font-semibold hover:bg-[#f97316] hover:text-white transition-all duration-300 text-lg flex items-center justify-center"
                  >
                    Get a Quote
                  </a>
                </div>

              </div>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}