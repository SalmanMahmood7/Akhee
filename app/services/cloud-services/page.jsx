"use client";

import PageLayout from "@/components/PageLayout";
import { Cloud, CheckCircle, Server, Shield, Database, ArrowRight, Zap, Monitor, Settings, Users, Globe, Container, Layers, Lock, Cpu, Network, RefreshCw, Search, Palette, Wrench, Rocket, DollarSign, TrendingUp, Bot, Plus, Minus } from "lucide-react";
import { useState } from "react";
import ServiceDetailModal from "@/components/ServiceDetailModal";
import { getTechnologyUrl } from "@/lib/technology-utils";

export default function CloudServices() {
  const [selectedService, setSelectedService] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);

  const handleLearnMore = (serviceKey) => {
    setSelectedService(servicesData[serviceKey]);
    setShowModal(true);
  };

  const servicesData = {
    cloudMigration: {
      title: "Cloud Migration",
      description: "Seamless migration of applications and data to cloud platforms",
      fullDescription: "Migrate your entire infrastructure to the cloud with zero downtime and maximum efficiency. Our expert team handles everything from assessment to post-migration optimization, ensuring your applications perform better in the cloud than on-premises.",
      features: [
        {
          title: "Zero-Downtime Migration",
          description: "Seamless migration with continuous availability",
          icon: Cloud
        },
        {
          title: "Data Transfer Optimization",
          description: "Secure and efficient data migration strategies",
          icon: Database
        },
        {
          title: "Application Modernization",
          description: "Refactor applications for cloud-native performance",
          icon: Settings
        },
        {
          title: "Hybrid Cloud Setup",
          description: "Flexible hybrid cloud architecture implementation",
          icon: Network
        }
      ],
      benefits: [
        {
          title: "Cost Reduction",
          description: "Average reduction in infrastructure costs",
          metric: "40-60%"
        },
        {
          title: "Performance Improvement",
          description: "Faster application response times",
          metric: "+200%"
        },
        {
          title: "Scalability",
          description: "Dynamic scaling capability",
          metric: "10x faster"
        }
      ],
      process: [
        {
          step: 1,
          title: "Assessment & Planning",
          description: "Comprehensive infrastructure assessment and migration strategy",
          duration: "2-3 weeks"
        },
        {
          step: 2,
          title: "Migration Design",
          description: "Design cloud architecture and migration roadmap",
          duration: "1-2 weeks"
        },
        {
          step: 3,
          title: "Pilot Migration",
          description: "Test migration with non-critical applications",
          duration: "2-4 weeks"
        },
        {
          step: 4,
          title: "Full Migration",
          description: "Complete migration with monitoring and optimization",
          duration: "4-12 weeks"
        }
      ],
      technologies: ["AWS Migration Hub", "Azure Migrate", "Google Cloud Migrate", "VMware vMotion", "Docker", "Kubernetes"],
      caseStudy: {
        client: "Financial Services Company",
        challenge: "Legacy infrastructure costing $500K annually with limited scalability",
        solution: "Complete AWS migration with containerization and auto-scaling",
        results: [
          "65% reduction in infrastructure costs",
          "99.9% uptime achievement",
          "300% improvement in deployment speed",
          "Zero security incidents post-migration"
        ]
      },
      deliverables: [
        "Migration assessment report",
        "Cloud architecture design",
        "Migrated applications and data",
        "Performance optimization",
        "Security configuration",
        "Documentation and training"
      ]
    },
    cloudSecurity: {
      title: "Cloud Security",
      description: "Comprehensive security solutions for cloud infrastructure",
      fullDescription: "Protect your cloud infrastructure with enterprise-grade security solutions. Our comprehensive approach covers identity management, data encryption, compliance monitoring, and threat protection across multi-cloud environments.",
    },
    cloudMonitoring: {
      title: "Cloud Monitoring",
      description: "24/7 monitoring and optimization of cloud resources",
      fullDescription: "Ensure optimal cloud performance with continuous monitoring, automated optimization, and proactive issue resolution. Our monitoring solutions provide real-time insights and automated responses to maintain peak efficiency.",
    },
    databaseService: {
      title: "Database as a Service",
      description: "Managed database solutions with high availability",
      fullDescription: "Leverage fully managed database services for maximum reliability and performance. Our DBaaS solutions handle maintenance, scaling, and optimization while you focus on your applications.",
    },
    containerization: {
      title: "Containerization",
      description: "Docker and Kubernetes deployment and management",
      fullDescription: "Modernize your applications with containerization for improved scalability, portability, and deployment efficiency. Our container solutions enable microservices architecture and DevOps best practices.",
    },
    serverless: {
      title: "Serverless Computing",
      description: "Event-driven serverless architecture and deployment",
      fullDescription: "Build scalable, cost-effective applications with serverless architecture. Pay only for what you use while enjoying automatic scaling and reduced operational overhead.",
    }
  };
  const cloudServices = [
    {
      icon: Cloud,
      title: "Cloud Migration",
      description: "Seamless migration of applications and data to cloud platforms",
      features: ["Zero-Downtime Migration", "Data Transfer", "Application Modernization", "Hybrid Cloud Setup"]
    },
    {
      icon: Cloud,
      title: "Cloud Security",
      description: "Comprehensive security solutions for cloud infrastructure",
      features: ["Identity Management", "Encryption", "Compliance Monitoring", "Threat Protection"]
    },
    {
      icon: Cloud,
      title: "Cloud Monitoring",
      description: "24/7 monitoring and optimization of cloud resources",
      features: ["Performance Analytics", "Cost Monitoring", "Auto-scaling", "Alert Management"]
    },
    {
      icon: Cloud,
      title: "Database as a Service",
      description: "Managed database solutions with high availability",
      features: ["Database Migration", "Backup & Recovery", "Performance Tuning", "Multi-Cloud Support"]
    },
    {
      icon: Cloud,
      title: "Containerization",
      description: "Docker and Kubernetes deployment and management",
      features: ["Container Orchestration", "Microservices", "CI/CD Integration", "Service Mesh"]
    },
    {
      icon: Cloud,
      title: "Serverless Computing",
      description: "Event-driven serverless architecture and deployment",
      features: ["Function as a Service", "Event Processing", "Auto-scaling", "Cost Optimization"]
    }
  ];

  const cloudPlatforms = [
    { 
      name: "Amazon Web Services", 
      category: "Public Cloud",
      icon: Server,
      color: "bg-[#1e3a8a]",
      description: "Enterprise-scale AWS solutions and services"
    },
    { 
      name: "Microsoft Azure", 
      category: "Public Cloud",
      icon: Server,
      color: "bg-[#f97316]",
      description: "Azure cloud infrastructure and platform services"
    },
    { 
      name: "Google Cloud", 
      category: "Public Cloud",
      icon: Server,
      color: "bg-[#1e3a8a]",
      description: "GCP data analytics and machine learning"
    },
    { 
      name: "Multi-Cloud Strategy", 
      category: "Hybrid",
      icon: Server,
      color: "bg-[#f97316]",
      description: "Cross-platform cloud orchestration"
    },
    { 
      name: "Private Cloud", 
      category: "On-Premise",
      icon: Server,
      color: "bg-[#1e3a8a]",
      description: "Secure private cloud infrastructure"
    },
    { 
      name: "Edge Computing", 
      category: "Distributed",
      icon: Server,
      color: "bg-[#f97316]",
      description: "Edge computing and IoT solutions"
    },
    { 
      name: "Kubernetes", 
      category: "Orchestration",
      icon: Server,
      color: "bg-[#1e3a8a]",
      description: "Container orchestration platforms"
    },
    { 
      name: "DevOps Integration", 
      category: "CI/CD",
      icon: Server,
      color: "bg-[#f97316]",
      description: "Automated deployment pipelines"
    }
  ];

  const cloudProcess = [
    {
      step: "01",
      title: "Assessment & Strategy",
      description: "Comprehensive analysis of current infrastructure and cloud readiness assessment.",
      icon: Search,
      color: "from-blue-500 to-indigo-600",
      features: ["Infrastructure Audit", "Cost Analysis", "Migration Strategy", "Risk Assessment"]
    },
    {
      step: "02", 
      title: "Architecture & Design",
      description: "Design scalable, secure, and cost-effective cloud architecture solutions.",
      icon: Palette,
      color: "from-purple-500 to-pink-600",
      features: ["Cloud Architecture", "Security Design", "Network Planning", "Compliance Framework"]
    },
    {
      step: "03",
      title: "Migration & Implementation",
      description: "Execute cloud migration with minimal disruption and maximum efficiency.",
      icon: Rocket,
      color: "from-green-500 to-teal-600",
      features: ["Phased Migration", "Data Transfer", "Application Testing", "Performance Validation"]
    },
    {
      step: "04",
      title: "Optimization & Support",
      description: "Continuous monitoring, optimization, and support for cloud infrastructure.",
      icon: Wrench,
      color: "from-emerald-500 to-teal-600",
      features: ["Performance Tuning", "Cost Optimization", "24/7 Support", "Regular Updates"]
    }
  ];

  return (
    <PageLayout>
      <div className="min-h-screen bg-white">

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src="/cloud-hero-bg.jpg" 
              alt="Cloud Services Infrastructure"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/75"></div>
          </div>

          <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-12 max-w-6xl">
            <div className="text-center space-y-8 pt-12">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8">
                Enterprise <span className="text-[#f97316]">Cloud Services</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Transform your business with scalable, secure, and cost-effective cloud solutions. From migration to optimization, 
                we deliver cloud infrastructure that drives innovation and growth across Canada.
              </p>
              
              <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="inline-flex items-center px-8 py-4 bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold rounded-full transition-all duration-300">
                  Get Cloud Assessment
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a href="/work" className="inline-flex items-center px-8 py-4 border-2 border-[#f97316] text-[#f97316] hover:bg-[#f97316] hover:text-white font-semibold rounded-full transition-all duration-300">
                  View Case Studies
                </a>
              </div>
              
            </div>
          </div>
        </section>

        {/* Unified Background Container for All Sections */}
        <div className="bg-gradient-to-br from-blue-50 via-white to-orange-50 overflow-hidden">
        
        {/* Cloud Services Overview Section - New Design */}
        <section className="relative z-10" style={{paddingTop: '30px', paddingBottom: '30px'}}>
          <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
            
            {/* Header Section */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl 1366:text-4xl font-bold text-[#1e3a8a] mb-6">
                <span className="text-[#f97316]">Transform Your Business</span> <span className="text-[#1e3a8a]">With Enterprise Cloud Solutions</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Leverage our comprehensive cloud services to accelerate innovation, reduce costs, and scale your business infrastructure with confidence.
              </p>
            </div>

            {/* Services Grid - Card Based Design */}
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              
              {/* Cloud Migration Card */}
              <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src="/cloud-migration.jpg"
                    alt="Cloud Migration Services"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-4 left-6 right-6">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur rounded-lg flex items-center justify-center">
                        <Cloud className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">Cloud Migration</h3>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-semibold text-[#1e3a8a] mb-4">Seamless Cloud Transformation</h4>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Migrate your applications and infrastructure to AWS, Azure, or Google Cloud with zero downtime. Our proven migration methodology ensures smooth transition while optimizing for performance and cost.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Comprehensive migration assessment & planning</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Zero-downtime migration strategies</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Post-migration optimization & support</span>
                    </li>
                  </ul>
                  <button 
                    onClick={() => handleLearnMore('cloudMigration')}
                    className="inline-flex items-center text-[#f97316] font-semibold hover:text-[#ea580c] transition-colors group/btn"
                  >
                    Learn More 
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Cloud Security Card */}
              <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src="/cloud-security-new.jpg"
                    alt="Cloud Security Services"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-4 left-6 right-6">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur rounded-lg flex items-center justify-center">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">Cloud Security</h3>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-semibold text-[#1e3a8a] mb-4">Enterprise-Grade Protection</h4>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Implement comprehensive security measures to protect your cloud infrastructure. Our multi-layered security approach ensures compliance and protects against evolving threats.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Identity & access management (IAM)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Data encryption & compliance monitoring</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">24/7 threat detection & response</span>
                    </li>
                  </ul>
                  <button 
                    onClick={() => handleLearnMore('cloudSecurity')}
                    className="inline-flex items-center text-[#f97316] font-semibold hover:text-[#ea580c] transition-colors group/btn"
                  >
                    Learn More 
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Cloud Monitoring Card */}
              <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src="/cloud-analytics.jpg"
                    alt="Cloud Monitoring Services"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-4 left-6 right-6">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur rounded-lg flex items-center justify-center">
                        <Monitor className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">Cloud Monitoring</h3>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-semibold text-[#1e3a8a] mb-4">Intelligent Analytics & Optimization</h4>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Transform cloud operations with AI-powered monitoring and analytics. Maximize performance while minimizing costs through intelligent resource optimization.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Real-time performance monitoring</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Automated cost optimization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Predictive analytics & insights</span>
                    </li>
                  </ul>
                  <button 
                    onClick={() => handleLearnMore('cloudMonitoring')}
                    className="inline-flex items-center text-[#f97316] font-semibold hover:text-[#ea580c] transition-colors group/btn"
                  >
                    Learn More 
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* DevOps & Containerization Card */}
              <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src="/cloud-infrastructure.jpg"
                    alt="DevOps Services"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-4 left-6 right-6">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur rounded-lg flex items-center justify-center">
                        <Container className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">DevOps & Containers</h3>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-semibold text-[#1e3a8a] mb-4">Accelerate Development & Deployment</h4>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Implement modern DevOps practices with containerization and CI/CD pipelines. Achieve faster deployments and improved scalability with Kubernetes and Docker.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Kubernetes orchestration & management</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Automated CI/CD pipelines</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Microservices architecture</span>
                    </li>
                  </ul>
                  <button 
                    onClick={() => handleLearnMore('containerization')}
                    className="inline-flex items-center text-[#f97316] font-semibold hover:text-[#ea580c] transition-colors group/btn"
                  >
                    Learn More 
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* Cloud Platforms & Technologies Section */}
        <section className="relative z-10" style={{paddingTop: '30px', paddingBottom: '30px'}}>
          <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
            <div className="text-center space-y-8 mb-10">
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="text-[#1e3a8a]">Leading Cloud </span>
                <span className="text-[#f97316]">Platforms & Technologies</span>
              </h2>
              
              <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We leverage industry-leading cloud platforms and cutting-edge technologies to build robust, scalable, and future-proof cloud solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {cloudPlatforms.map((platform, index) => (
                <div 
                  key={index} 
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 ${platform.color} opacity-10 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  {/* Card Content */}
                  <div className="relative p-8">
                    {/* Icon */}
                    <div className={`w-16 h-16 mb-4 rounded-2xl ${platform.color} flex items-center justify-center shadow-lg`}>
                      <platform.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Category Badge */}
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-gray-600 bg-gray-100 rounded-full mb-3">
                      {platform.category}
                    </span>
                    
                    {/* Title */}
                    <h4 className="font-bold text-lg text-[#1e3a8a] mb-2 group-hover:text-[#f97316] transition-colors">
                      {platform.name}
                    </h4>
                    
                    {/* Description */}
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {platform.description}
                    </p>
                    
                    {/* Explore Technology Link */}
                    <a href={getTechnologyUrl(platform.name)} className="mt-4 flex items-center text-[#f97316] opacity-100 transition-opacity hover:text-[#ea580c]">
                      <span className="text-sm font-medium">Explore Technology</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                  
                  {/* Bottom Border Accent */}
                  <div className={`h-1 ${platform.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                </div>
              ))}
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
                <span className="text-[#1e3a8a]">Cloud Service</span>{" "}
                <span className="text-[#f97316]">Benefits</span>
              </h2>
              <p className="text-xl text-[#1e3a8a] max-w-3xl mx-auto leading-relaxed">
                Discover how our cloud solutions drive business growth, reduce costs, and increase operational efficiency
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "60% Cost Reduction",
                  description: "Reduce infrastructure costs by 40-60% through optimized cloud architecture, auto-scaling, and pay-as-you-use pricing models.",
                  icon: DollarSign,
                  color: "from-[#1e3a8a] to-[#1e40af]"
                },
                {
                  title: "99.9% Uptime Guarantee",
                  description: "Enterprise-grade reliability with built-in redundancy, automatic failover, and global content delivery networks.",
                  icon: CheckCircle,
                  color: "from-[#f97316] to-[#ea580c]"
                },
                {
                  title: "Infinite Scalability",
                  description: "Scale resources up or down instantly based on demand without hardware limitations or long procurement cycles.",
                  icon: TrendingUp,
                  color: "from-[#1e3a8a] to-[#1e40af]"
                },
                {
                  title: "Enhanced Security",
                  description: "Enterprise-grade security with encryption, compliance monitoring, and advanced threat protection across all cloud layers.",
                  icon: Shield,
                  color: "from-[#f97316] to-[#ea580c]"
                },
                {
                  title: "Global Accessibility",
                  description: "Access your applications and data from anywhere in the world with low-latency performance and 24/7 availability.",
                  icon: Globe,
                  color: "from-[#1e3a8a] to-[#1e40af]"
                },
                {
                  title: "Automated Management",
                  description: "Reduce operational overhead with automated backups, updates, monitoring, and maintenance managed by cloud experts.",
                  icon: Bot,
                  color: "from-[#f97316] to-[#ea580c]"
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100">
                  <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-4 group-hover:text-[#f97316] transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
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
                <span className="text-[#1e3a8a]">Cloud Transformation</span>{" "}
                <span className="text-[#f97316]">Success Stories</span>
              </h2>
              <p className="text-xl text-[#1e3a8a] max-w-3xl mx-auto leading-relaxed">
                Real examples of how businesses have transformed their operations with our cloud services
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  industry: "Ecommerce",
                  company: "Online Retail Platform",
                  challenge: "Handling 10x traffic spikes during sales events with outdated infrastructure causing frequent crashes and $100K+ losses per hour.",
                  solution: "Migrated to AWS with auto-scaling, CDN implementation, and containerized microservices architecture for dynamic load handling.",
                  result: "Handled 2000% traffic increase seamlessly, achieved 99.99% uptime during peak sales, and increased revenue by 180%.",
                  metrics: "2000% Traffic Handling",
                  bgColor: "from-[#1e3a8a] to-[#1e40af]",
                  accentColor: "text-[#1e3a8a]"
                },
                {
                  industry: "Healthcare",
                  company: "Medical Practice Network",
                  challenge: "Managing patient data across 50 locations with compliance requirements and need for real-time access from multiple devices.",
                  solution: "Implemented HIPAA-compliant cloud infrastructure with encrypted data lakes, API gateways, and mobile-first applications.",
                  result: "Reduced data access time by 90%, achieved 100% HIPAA compliance, and enabled remote consultations for 80% of appointments.",
                  metrics: "90% Faster Access",
                  bgColor: "from-[#f97316] to-orange-500",
                  accentColor: "text-[#1e3a8a]"
                },
                {
                  industry: "Manufacturing",
                  company: "Industrial Equipment Manufacturer",
                  challenge: "Legacy ERP system limiting growth with manual processes and inability to integrate with modern IoT sensors and analytics.",
                  solution: "Cloud-native ERP migration with IoT integration, real-time analytics, and AI-powered predictive maintenance capabilities.",
                  result: "Increased production efficiency by 35%, reduced equipment downtime by 60%, and enabled predictive maintenance for 200+ machines.",
                  metrics: "35% Efficiency Gain",
                  bgColor: "from-[#1e3a8a] to-[#1e40af]",
                  accentColor: "text-[#1e3a8a]"
                }
              ].map((useCase, index) => (
                <div key={index} className="bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
                  <div className={`bg-gradient-to-r ${useCase.bgColor} p-6 text-white relative overflow-hidden h-32`}>
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                    </div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-sm font-semibold text-white/80">{useCase.industry}</div>
                        <div className="text-right">
                          <div className="text-2xl font-bold">{useCase.metrics}</div>
                          <div className="text-sm text-white/80">Achievement</div>
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
                        <h4 className="font-semibold text-[#1e3a8a] mb-2">Cloud Solution:</h4>
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
                Common questions about cloud services, migration, and how we can help your business succeed
              </p>
            </div>

            {/* FAQ Accordion */}
            <div className="space-y-3 sm:space-y-4">
              {[
                {
                  question: "How long does cloud migration typically take?",
                  answer: "Migration timelines vary based on complexity and scope. Simple applications can be migrated in 2-4 weeks, while complex enterprise systems may take 8-16 weeks. We use a phased approach to minimize disruption, often enabling you to see benefits within the first few weeks. Our team provides detailed timelines during the assessment phase."
                },
                {
                  question: "What are the cost savings with cloud migration?",
                  answer: "Most businesses see 40-60% reduction in infrastructure costs after cloud migration. Savings come from eliminating hardware maintenance, reducing energy costs, optimizing resource usage, and moving from capital to operational expenses. We provide detailed cost analysis and ROI projections before migration begins."
                },
                {
                  question: "How do you ensure security during and after migration?",
                  answer: "Security is our top priority throughout the migration process. We implement encryption in transit and at rest, use secure VPN connections, conduct security assessments, and implement identity and access management. Post-migration, we provide continuous monitoring, compliance reporting, and regular security updates."
                },
                {
                  question: "Can you migrate applications that weren't built for the cloud?",
                  answer: "Yes, we specialize in migrating legacy applications to the cloud. Our approach includes application assessment, refactoring when needed, containerization, and modernization to take advantage of cloud-native features. We can also implement hybrid solutions if certain components need to remain on-premises."
                },
                {
                  question: "What happens if something goes wrong during migration?",
                  answer: "We implement comprehensive backup and rollback procedures before any migration begins. Our phased approach allows us to test each component thoroughly before proceeding. In the unlikely event of issues, we can quickly rollback to the previous state while we resolve problems. We also provide 24/7 support during critical migration phases."
                },
                {
                  question: "Do you provide ongoing support after cloud migration?",
                  answer: "Absolutely. We offer comprehensive managed cloud services including 24/7 monitoring, performance optimization, security management, backup and disaster recovery, and regular health checks. Our support plans are flexible and can be customized based on your specific needs and budget requirements."
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

          </div>
        </section>

        </div>
        
        {/* CTA Section */}
        <section className="relative z-10">
          <div className="relative bg-slate-800 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img 
                src="/cloud-cta-bg.jpg" 
                alt="Cloud Infrastructure Background"
                className="w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-black/75"></div>
            </div>
            
            <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-12 1.25xl:px-16 max-w-7xl" style={{paddingTop: '30px', paddingBottom: '30px'}}>
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
                  Partner With Leading <span className="text-[#f97316]">Cloud Services Experts</span> For Your Transformation Journey
                </h2>
                <p className="text-white/90 mb-10 text-lg leading-relaxed max-w-3xl mx-auto">
                  Connect with our cloud specialists to accelerate your business growth. Get strategic guidance, technology insights, and implementation support from industry leaders in cloud services.
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
          </div>
        </section>

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <ServiceDetailModal
          isOpen={showModal}
          onClose={() => {
            setShowModal(false);
            setSelectedService(null);
          }}
          service={selectedService}
        />
      )}
    </PageLayout>
  );
}