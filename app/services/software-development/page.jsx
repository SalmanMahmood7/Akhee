"use client";

import PageLayout from "@/components/PageLayout";
import { Code2, CheckCircle, Smartphone, Globe, Database, Users, Shield, Zap, Clock, Settings, Monitor, Cpu, ArrowRight, Server, Cloud, Box, Brain, Link, Search, Palette, Wrench, Rocket, Plus, Minus } from "lucide-react";
import { useState } from "react";
import ServiceDetailModal from "@/components/ServiceDetailModal";
import { getTechnologyUrl } from "@/lib/technology-utils";

export default function SoftwareDevelopment() {
  const [selectedService, setSelectedService] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);

  const handleLearnMore = (serviceKey) => {
    setSelectedService(servicesData[serviceKey]);
    setShowModal(true);
  };

  const servicesData = {
    mobileApp: {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android",
      fullDescription: "Create powerful mobile applications that engage users and drive business growth. Our expert team develops both native and cross-platform solutions using the latest technologies and frameworks, ensuring optimal performance, user experience, and market reach across iOS and Android platforms.",
      features: [
        {
          title: "Native iOS & Android",
          description: "Platform-specific apps with optimal performance and native user experience",
          icon: Smartphone
        },
        {
          title: "Cross-Platform Development",
          description: "React Native and Flutter solutions for efficient multi-platform deployment",
          icon: Globe
        },
        {
          title: "UI/UX Design",
          description: "Intuitive interfaces designed for mobile user behavior patterns",
          icon: Palette
        },
        {
          title: "App Store Optimization",
          description: "Complete deployment and optimization for app stores",
          icon: Rocket
        }
      ],
      benefits: [
        {
          title: "Time to Market",
          description: "Faster development with proven frameworks",
          metric: "40% faster"
        },
        {
          title: "User Engagement",
          description: "Average increase in user engagement",
          metric: "+65%"
        },
        {
          title: "Cost Efficiency",
          description: "Savings with cross-platform approach",
          metric: "50% savings"
        }
      ],
      process: [
        {
          step: 1,
          title: "Requirements & Planning",
          description: "Define app functionality, target audience, and technical specifications",
          duration: "1-2 weeks"
        },
        {
          step: 2,
          title: "Design & Prototyping",
          description: "Create wireframes, UI/UX designs, and interactive prototypes",
          duration: "2-3 weeks"
        },
        {
          step: 3,
          title: "Development & Testing",
          description: "Build the app with continuous testing and quality assurance",
          duration: "6-12 weeks"
        },
        {
          step: 4,
          title: "Deployment & Launch",
          description: "App store submission, launch strategy, and post-launch support",
          duration: "1-2 weeks"
        }
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Xamarin", "Firebase", "AWS Amplify", "GraphQL"],
      caseStudy: {
        client: "E-commerce Startup",
        challenge: "Needed a mobile app to increase customer engagement and sales",
        solution: "Developed cross-platform mobile app with integrated payment and loyalty system",
        results: [
          "300% increase in mobile sales",
          "4.8 star rating on app stores",
          "50,000+ downloads in first month",
          "40% improvement in customer retention"
        ]
      },
      deliverables: [
        "Native iOS and/or Android applications",
        "Complete source code and documentation",
        "App store submission and approval",
        "User acceptance testing reports",
        "Deployment and launch strategy",
        "3 months post-launch support"
      ]
    },
    webDevelopment: {
      title: "Web Development",
      description: "Modern web applications built with cutting-edge technologies",
      fullDescription: "Build scalable, responsive web applications that deliver exceptional user experiences across all devices and platforms. Our web development services combine cutting-edge frontend technologies with robust backend systems to create high-performance applications that drive business growth.",
      features: [
        {
          title: "React & Next.js",
          description: "Modern frontend frameworks for optimal performance and SEO",
          icon: Code2
        },
        {
          title: "Responsive Design",
          description: "Seamless experience across all devices and screen sizes",
          icon: Monitor
        },
        {
          title: "Progressive Web Apps",
          description: "Web apps with native-like capabilities and offline support",
          icon: Globe
        },
        {
          title: "API Integration",
          description: "Seamless integration with third-party services and APIs",
          icon: Link
        }
      ],
      benefits: [
        {
          title: "Performance",
          description: "Improvement in page load speeds",
          metric: "+85%"
        },
        {
          title: "SEO Ranking",
          description: "Average improvement in search rankings",
          metric: "+120%"
        },
        {
          title: "Conversion Rate",
          description: "Increase in user conversions",
          metric: "+45%"
        }
      ],
      process: [
        {
          step: 1,
          title: "Discovery & Strategy",
          description: "Understand business goals, target audience, and technical requirements",
          duration: "1 week"
        },
        {
          step: 2,
          title: "Design & Architecture",
          description: "Create responsive designs and plan system architecture",
          duration: "2-3 weeks"
        },
        {
          step: 3,
          title: "Frontend Development",
          description: "Build user interface with modern frameworks and responsive design",
          duration: "4-6 weeks"
        },
        {
          step: 4,
          title: "Backend & Deployment",
          description: "Develop backend services and deploy to production environment",
          duration: "3-4 weeks"
        }
      ],
      technologies: ["React", "Next.js", "TypeScript", "Node.js", "Express", "PostgreSQL", "MongoDB", "AWS", "Vercel"],
      caseStudy: {
        client: "Healthcare Provider",
        challenge: "Needed a patient portal with appointment scheduling and medical records",
        solution: "Built secure web application with HIPAA compliance and mobile responsiveness",
        results: [
          "90% reduction in appointment booking time",
          "99.9% uptime since launch",
          "70% increase in patient satisfaction",
          "Full HIPAA compliance achieved"
        ]
      },
      deliverables: [
        "Responsive web application",
        "Content management system",
        "SEO optimization",
        "Performance monitoring setup",
        "Security implementation",
        "Training and documentation"
      ]
    },
    desktopApps: {
      title: "Desktop Applications",
      description: "Powerful desktop software solutions for Windows, macOS, and Linux",
      fullDescription: "Develop robust desktop applications that leverage the full power of modern operating systems. Our desktop solutions provide native performance, advanced system integration, and professional user interfaces that meet enterprise-grade requirements.",
      features: [
        {
          title: "Cross-Platform Support",
          description: "Applications that run seamlessly on Windows, macOS, and Linux",
          icon: Monitor
        },
        {
          title: "Native Performance",
          description: "Optimized code for maximum speed and resource efficiency",
          icon: Zap
        },
        {
          title: "System Integration",
          description: "Deep integration with OS features and hardware capabilities",
          icon: Settings
        },
        {
          title: "Modern UI/UX",
          description: "Contemporary interfaces that follow platform design guidelines",
          icon: Palette
        }
      ],
      benefits: [
        {
          title: "Performance",
          description: "Faster than web-based alternatives",
          metric: "300% faster"
        },
        {
          title: "Offline Capability",
          description: "Full functionality without internet connection",
          metric: "100% offline"
        },
        {
          title: "System Resources",
          description: "Efficient use of system resources",
          metric: "-60% memory"
        }
      ],
      process: [
        {
          step: 1,
          title: "Requirements Analysis",
          description: "Define desktop application features and platform requirements",
          duration: "1-2 weeks"
        },
        {
          step: 2,
          title: "UI/UX Design",
          description: "Create native desktop interface following platform guidelines",
          duration: "2-3 weeks"
        },
        {
          step: 3,
          title: "Development & Testing",
          description: "Build application with cross-platform compatibility and thorough testing",
          duration: "8-12 weeks"
        },
        {
          step: 4,
          title: "Deployment & Distribution",
          description: "Package application and setup distribution channels",
          duration: "1-2 weeks"
        }
      ],
      technologies: ["Electron", "Qt", "JavaFX", "WPF", ".NET", "C++", "Python", "Node.js"],
      caseStudy: {
        client: "Financial Services Company",
        challenge: "Needed secure desktop application for financial data processing",
        solution: "Developed cross-platform desktop app with encryption and audit trails",
        results: [
          "200% improvement in processing speed",
          "Zero security incidents since deployment",
          "95% user satisfaction rating",
          "30% reduction in training time"
        ]
      },
      deliverables: [
        "Cross-platform desktop application",
        "Installation packages for all platforms",
        "Complete source code and documentation",
        "User manual and training materials",
        "Performance optimization report",
        "6 months maintenance and support"
      ]
    },
    databaseManagement: {
      title: "Database Management",
      description: "Robust database solutions and management systems",
      fullDescription: "Design and implement scalable database solutions that ensure data integrity, optimal performance, and robust security. Our database management services cover everything from initial design to ongoing optimization and maintenance.",
      features: [
        {
          title: "Database Design",
          description: "Optimal schema design for performance and scalability",
          icon: Database
        },
        {
          title: "Migration Services",
          description: "Seamless migration from legacy systems to modern databases",
          icon: ArrowRight
        },
        {
          title: "Performance Optimization",
          description: "Query optimization and performance tuning for maximum efficiency",
          icon: Zap
        },
        {
          title: "Security Implementation",
          description: "Advanced security measures and access control systems",
          icon: Shield
        }
      ],
      benefits: [
        {
          title: "Query Performance",
          description: "Optimized database queries",
          metric: "500% faster"
        },
        {
          title: "Data Security",
          description: "Enterprise-grade security",
          metric: "99.9% secure"
        },
        {
          title: "Uptime",
          description: "High availability systems",
          metric: "99.99% uptime"
        }
      ],
      process: [
        {
          step: 1,
          title: "Database Assessment",
          description: "Analyze current data structure and requirements",
          duration: "1-2 weeks"
        },
        {
          step: 2,
          title: "Design & Planning",
          description: "Create optimal database schema and migration plan",
          duration: "2-3 weeks"
        },
        {
          step: 3,
          title: "Implementation",
          description: "Build database structure and migrate existing data",
          duration: "4-8 weeks"
        },
        {
          step: 4,
          title: "Optimization & Testing",
          description: "Performance tuning and comprehensive testing",
          duration: "2-3 weeks"
        }
      ],
      technologies: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch", "AWS RDS", "Azure SQL", "Oracle"],
      caseStudy: {
        client: "E-commerce Platform",
        challenge: "Slow database queries affecting website performance",
        solution: "Database redesign with optimized queries and caching",
        results: [
          "90% reduction in query response time",
          "500% improvement in page load speed",
          "Zero downtime during migration",
          "50% reduction in infrastructure costs"
        ]
      },
      deliverables: [
        "Optimized database schema",
        "Data migration services",
        "Performance monitoring setup",
        "Security audit and implementation",
        "Backup and recovery procedures",
        "Database documentation and training"
      ]
    },
    customSoftware: {
      title: "Custom Software Solutions",
      description: "Tailored software solutions designed specifically for your business needs",
      fullDescription: "Create bespoke software solutions that perfectly align with your unique business processes and requirements. Our custom development approach ensures maximum efficiency, scalability, and competitive advantage.",
      features: [
        {
          title: "Business Logic",
          description: "Custom algorithms and workflows tailored to your processes",
          icon: Brain
        },
        {
          title: "Integration Solutions",
          description: "Seamless integration with existing systems and third-party services",
          icon: Link
        },
        {
          title: "Scalable Architecture",
          description: "Built to handle growth and changing business requirements",
          icon: Box
        },
        {
          title: "User-Centric Design",
          description: "Interfaces designed specifically for your users and workflows",
          icon: Users
        }
      ],
      benefits: [
        {
          title: "Efficiency Gain",
          description: "Streamlined business processes",
          metric: "300% efficiency"
        },
        {
          title: "Cost Reduction",
          description: "Automated manual processes",
          metric: "60% cost savings"
        },
        {
          title: "ROI",
          description: "Return on investment",
          metric: "400% ROI"
        }
      ],
      process: [
        {
          step: 1,
          title: "Business Analysis",
          description: "Deep dive into business processes and requirements",
          duration: "2-4 weeks"
        },
        {
          step: 2,
          title: "Solution Design",
          description: "Architect custom solution tailored to your needs",
          duration: "3-4 weeks"
        },
        {
          step: 3,
          title: "Development",
          description: "Build custom software with iterative feedback",
          duration: "12-24 weeks"
        },
        {
          step: 4,
          title: "Deployment & Training",
          description: "Deploy solution and train your team",
          duration: "2-4 weeks"
        }
      ],
      technologies: ["Python", "Java", "C#", "Node.js", "React", "Angular", "PostgreSQL", "Docker"],
      caseStudy: {
        client: "Manufacturing Company",
        challenge: "Manual inventory tracking causing inefficiencies",
        solution: "Custom inventory management system with real-time tracking",
        results: [
          "80% reduction in inventory errors",
          "50% faster order processing",
          "Real-time inventory visibility",
          "25% improvement in customer satisfaction"
        ]
      },
      deliverables: [
        "Custom software application",
        "Complete source code ownership",
        "User training and documentation",
        "System integration services",
        "Performance monitoring",
        "12 months support and maintenance"
      ]
    },
    itConsulting: {
      title: "IT Consulting",
      description: "Strategic technology consulting to guide your digital transformation",
      fullDescription: "Get expert guidance on technology strategy, architecture planning, and digital transformation initiatives. Our IT consulting services help you make informed decisions and optimize your technology investments.",
      features: [
        {
          title: "Technology Assessment",
          description: "Comprehensive evaluation of current technology stack",
          icon: Search
        },
        {
          title: "Strategic Planning",
          description: "Long-term technology roadmap aligned with business goals",
          icon: Brain
        },
        {
          title: "Architecture Design",
          description: "Scalable system architecture for future growth",
          icon: Box
        },
        {
          title: "Digital Transformation",
          description: "Guide organizations through digital transformation initiatives",
          icon: Rocket
        }
      ],
      benefits: [
        {
          title: "Cost Optimization",
          description: "Optimized technology spending",
          metric: "40% cost reduction"
        },
        {
          title: "Efficiency",
          description: "Improved operational efficiency",
          metric: "250% productivity"
        },
        {
          title: "ROI",
          description: "Technology investment returns",
          metric: "300% ROI"
        }
      ],
      process: [
        {
          step: 1,
          title: "Current State Analysis",
          description: "Evaluate existing technology infrastructure and processes",
          duration: "2-3 weeks"
        },
        {
          step: 2,
          title: "Strategy Development",
          description: "Create comprehensive technology strategy and roadmap",
          duration: "3-4 weeks"
        },
        {
          step: 3,
          title: "Implementation Planning",
          description: "Detailed implementation plan with timelines and resources",
          duration: "2-3 weeks"
        },
        {
          step: 4,
          title: "Execution Support",
          description: "Ongoing support during implementation phase",
          duration: "Ongoing"
        }
      ],
      technologies: ["Cloud Platforms", "Microservices", "DevOps", "AI/ML", "Blockchain", "IoT", "Cybersecurity", "Data Analytics"],
      caseStudy: {
        client: "Financial Institution",
        challenge: "Legacy systems hindering digital transformation",
        solution: "Comprehensive IT strategy with cloud migration roadmap",
        results: [
          "50% reduction in IT costs",
          "3x faster time-to-market",
          "Enhanced security posture",
          "Improved customer satisfaction by 40%"
        ]
      },
      deliverables: [
        "Technology assessment report",
        "Strategic IT roadmap",
        "Architecture recommendations",
        "Implementation timeline",
        "Cost-benefit analysis",
        "Ongoing consulting support"
      ]
    }
  };

  const services = [
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android",
      features: ["Native iOS & Android", "React Native", "Flutter", "Progressive Web Apps"]
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern web applications built with cutting-edge technologies",
      features: ["React & Next.js", "Node.js Backend", "Responsive Design", "PWA Development"]
    },
    {
      icon: Monitor,
      title: "Desktop Applications",
      description: "Powerful desktop software solutions for Windows, macOS, and Linux",
      features: ["Cross-Platform", "Native Performance", "System Integration", "Modern UI/UX"]
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Robust database solutions and management systems",
      features: ["Database Design", "Migration Services", "Performance Optimization", "Data Security"]
    },
    {
      icon: Settings,
      title: "Custom Software Solutions",
      description: "Tailored software solutions designed specifically for your business needs",
      features: ["Business Logic", "Workflow Automation", "Integration Solutions", "Scalable Architecture"]
    },
    {
      icon: Brain,
      title: "IT Consulting",
      description: "Strategic technology consulting to guide your digital transformation",
      features: ["Technology Assessment", "Architecture Planning", "Security Consulting", "Digital Strategy"]
    }
  ];

  const technologies = [
    { 
      name: "React & Next.js", 
      category: "Frontend",
      icon: Code2,
      color: "bg-[#1e3a8a]",
      description: "Modern web applications with optimal performance"
    },
    { 
      name: "Node.js & Python", 
      category: "Backend",
      icon: Server,
      color: "bg-[#f97316]",
      description: "Scalable server-side solutions"
    },
    { 
      name: "PostgreSQL & MongoDB", 
      category: "Database",
      icon: Database,
      color: "bg-[#1e3a8a]",
      description: "Reliable data storage and management"
    },
    { 
      name: "AWS & Azure", 
      category: "Cloud",
      icon: Cloud,
      color: "bg-[#f97316]",
      description: "Enterprise cloud infrastructure"
    },
    { 
      name: "Docker & Kubernetes", 
      category: "DevOps",
      icon: Box,
      color: "bg-[#1e3a8a]",
      description: "Containerized deployment solutions"
    },
    { 
      name: "React Native & Flutter", 
      category: "Mobile",
      icon: Smartphone,
      color: "bg-[#f97316]",
      description: "Cross-platform mobile development"
    },
    { 
      name: "AI/ML Integration", 
      category: "Intelligence",
      icon: Brain,
      color: "bg-[#1e3a8a]",
      description: "Smart automation and insights"
    },
    { 
      name: "Blockchain", 
      category: "Emerging Tech",
      icon: Link,
      color: "bg-[#f97316]",
      description: "Decentralized secure solutions"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Planning & Discovery",
      description: "We analyze your requirements and define project scope, timeline, and deliverables.",
      icon: Search,
      color: "bg-[#1e3a8a]",
      features: ["Requirement Analysis", "Feasibility Study", "Project Roadmap", "Budget Planning"]
    },
    {
      step: "02", 
      title: "Design & Architecture",
      description: "Creating user-centric designs and robust system architecture for optimal performance.",
      icon: Palette,
      color: "bg-[#f97316]",
      features: ["UI/UX Design", "System Architecture", "Database Design", "API Planning"]
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Agile development with continuous testing to ensure quality and reliability.",
      icon: Code2,
      color: "bg-[#1e3a8a]",
      features: ["Agile Sprints", "Code Reviews", "Unit Testing", "Integration Testing"]
    },
    {
      step: "04",
      title: "Deployment & Support",
      description: "Seamless deployment with ongoing maintenance and support services.",
      icon: Rocket,
      color: "bg-[#f97316]",
      features: ["Cloud Deployment", "Performance Monitoring", "24/7 Support", "Regular Updates"]
    }
  ];

  const industries = [
    { name: "Finance & Banking", icon: "💳" },
    { name: "Healthcare", icon: "🏥" },
    { name: "E-commerce", icon: "🛒" },
    { name: "Education", icon: "📚" },
    { name: "Logistics", icon: "🚚" },
    { name: "Manufacturing", icon: "🏭" }
  ];

  return (
    <PageLayout>
      <div className="min-h-screen bg-white">

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src="/software-hero-bg.jpg" 
              alt="Custom Software Development"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/75"></div>
          </div>

          <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-12 max-w-6xl">
            <div className="text-center space-y-8 pt-12">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8">
                <span className="text-[#f97316]">Custom</span> Software Development
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Delivering business-oriented custom software solutions that catalyze digital transformation and growth across Canada. 
                From concept to deployment, we build software that solves real business challenges.
              </p>
              
              <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="inline-flex items-center px-8 py-4 bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold rounded-full transition-all duration-300">
                  Get Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a href="/work" className="inline-flex items-center px-8 py-4 border-2 border-[#f97316] text-[#f97316] hover:bg-[#f97316] hover:text-white font-semibold rounded-full transition-all duration-300">
                  View Our Work
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Unified Background Container for All Sections */}
        <div className="bg-white overflow-hidden">
        
        {/* Services Section */}
        <section className="relative z-10" style={{paddingTop: '30px', paddingBottom: '30px'}}>
          <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
            
            {/* Header Section */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl 1366:text-4xl font-bold mb-6">
                <span className="text-[#f97316]">Broaden Your Business Horizon </span>
                <span className="text-[#1e3a8a]">With Our Unmatched Software Development Services</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                As a reputed Canada-based software development service provider, we believe "Client Success = Our Success." Before offering our affordable software development services, we understand client business needs and analyze how our software solution assists in their business growth.
              </p>
            </div>

            {/* Service 1 - Mobile App Development */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12 bg-white/60 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-gray-100/50 shadow-lg">
              <div className="lg:order-2">
                <div className="relative h-[400px] overflow-hidden rounded-2xl shadow-xl">
                  <img 
                    src="/mobile-dev.jpg"
                    alt="Mobile App Development"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="lg:order-1">
                <h3 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-6">
                  <span className="text-[#f97316]">Mobile App</span> Development
                </h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Mobile apps we build well-matched your requirement within your fixed budget and timeline. Being a reliable custom software development company in Canada, we also guide you every step of the development, right from designing the look to building an app with all required functionality. Be it iOS, Android, or cross-platform apps; we can build different types of apps while keeping specific needs and your goals in mind.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => handleLearnMore('mobileApp')}
                    className="inline-flex items-center px-8 py-4 bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                  <a href="/contact" className="inline-flex items-center px-8 py-4 border-2 border-[#f97316] text-[#f97316] hover:bg-[#f97316] hover:text-white font-semibold rounded-full transition-all duration-300">
                    Talk To Our Experts
                  </a>
                </div>
              </div>
            </div>

            {/* Service 2 - Web Development */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12 bg-white/60 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-gray-100/50 shadow-lg">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-6">
                  <span className="text-[#f97316]">Web</span> Development
                </h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  As a top software development company in Canada, we have been designing and developing robust web applications for our clients. To build a solution that works for you in the long-term, we bring quality architecture, structured coding, appealing design, and thorough testing to work. Our expertise in trending technologies and advanced frameworks makes it possible to deliver visibility to the solution and offer unmatched web maintenance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => handleLearnMore('webDevelopment')}
                    className="inline-flex items-center px-8 py-4 bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                  <a href="/contact" className="inline-flex items-center px-8 py-4 border-2 border-[#f97316] text-[#f97316] hover:bg-[#f97316] hover:text-white font-semibold rounded-full transition-all duration-300">
                    Talk To Our Experts
                  </a>
                </div>
              </div>
              <div>
                <div className="relative h-[400px] overflow-hidden rounded-2xl shadow-xl">
                  <img 
                    src="/web-dev.jpg"
                    alt="Web Development"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Service 3 - Desktop Application */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12 bg-white/60 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-gray-100/50 shadow-lg">
              <div className="lg:order-2">
                <div className="relative h-[400px] overflow-hidden rounded-2xl shadow-xl">
                  <img 
                    src="/team-coding.jpg"
                    alt="Desktop Application Development"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="lg:order-1">
                <h3 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-6">
                  <span className="text-[#f97316]">Desktop</span> Application
                </h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Translate your raw business idea into a desktop solution with a trusted enterprise software development company. We build a powerful, stable, and secure desktop application that helps resolve specific business needs. Our team not just transforms ideas, we guide businesses worldwide on how to use desktop applications that can boost business growth. After examining your business objectives, we go with desktop development that works great across different platforms.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => handleLearnMore('desktopApps')}
                    className="inline-flex items-center px-8 py-4 bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                  <a href="/contact" className="inline-flex items-center px-8 py-4 border-2 border-[#f97316] text-[#f97316] hover:bg-[#f97316] hover:text-white font-semibold rounded-full transition-all duration-300">
                    Talk To Our Experts
                  </a>
                </div>
              </div>
            </div>

            {/* Service 4 - Database Management */}
            <div className="grid lg:grid-cols-2 gap-12 items-center bg-white/60 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-gray-100/50 shadow-lg">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-6">
                  <span className="text-[#f97316]">Database Management</span> Software
                </h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  With our best-in-class data management solutions, you can access, manage, and process the data more easily. Leverage our affordable software development services to equip your business with the latest technologies. Our database experts implement new versions and introduce ways to handle complex business needs. Our database management solutions range from Oracle, MySQL, SQL Server, etc. Our bespoke database management solution will help streamline your business processes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => handleLearnMore('databaseManagement')}
                    className="inline-flex items-center px-8 py-4 bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                  <a href="/contact" className="inline-flex items-center px-8 py-4 border-2 border-[#f97316] text-[#f97316] hover:bg-[#f97316] hover:text-white font-semibold rounded-full transition-all duration-300">
                    Talk To Our Experts
                  </a>
                </div>
              </div>
              <div>
                <div className="relative h-[400px] overflow-hidden rounded-2xl shadow-xl">
                  <img 
                    src="/database-management.jpg"
                    alt="Database Management Software"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Technologies Section */}
        <section className="relative z-10" style={{paddingTop: '30px', paddingBottom: '30px'}}>
          <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
            <div className="text-center space-y-8 mb-10">
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="text-[#1e3a8a]">Cutting-Edge </span>
                <span className="text-[#f97316]">Technologies</span>
              </h2>
              
              <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We leverage the latest technologies and frameworks to build robust, scalable, and future-proof software solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {technologies.map((tech, index) => (
                <div 
                  key={index} 
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 ${tech.color} opacity-10 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  {/* Card Content */}
                  <div className="relative p-8">
                    {/* Icon */}
                    <div className={`w-16 h-16 mb-4 rounded-2xl ${tech.color} flex items-center justify-center shadow-lg`}>
                      <tech.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Category Badge */}
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-gray-600 bg-gray-100 rounded-full mb-3">
                      {tech.category}
                    </span>
                    
                    {/* Title */}
                    <h4 className="font-bold text-lg text-[#1e3a8a] mb-2 group-hover:text-[#f97316] transition-colors">
                      {tech.name}
                    </h4>
                    
                    {/* Description */}
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {tech.description}
                    </p>
                    
                    {/* Explore Technology Link */}
                    <a href={getTechnologyUrl(tech.name)} className="mt-4 flex items-center text-[#f97316] opacity-100 transition-opacity hover:text-[#ea580c]">
                      <span className="text-sm font-medium">Explore Technology</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                  
                  {/* Bottom Border Accent */}
                  <div className={`h-1 ${tech.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Development Process */}
        <section className="relative z-10" style={{paddingTop: '30px', paddingBottom: '30px'}}>
          <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
            <div className="text-center space-y-8 mb-10">
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="text-[#1e3a8a]">Our Development </span>
                <span className="text-[#f97316]">Process</span>
              </h2>
              
              <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                A proven methodology that ensures successful software delivery from concept to deployment and beyond.
              </p>
            </div>
            
            {/* Process Steps - Vertical Timeline */}
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Vertical Line */}
                <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-[#1e3a8a]"></div>
                
                <div className="space-y-12">
                  {process.map((step, index) => (
                    <div key={index} className="relative flex items-start">
                      {/* Step Number Circle */}
                      <div className={`flex-shrink-0 w-16 h-16 rounded-full ${step.color} flex items-center justify-center text-white font-bold text-xl shadow-lg z-10`}>
                        {step.step}
                      </div>
                      
                      {/* Content */}
                      <div className="ml-8 flex-1">
                        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100/50">
                          <div className="mb-4">
                            <h3 className="text-2xl font-bold text-[#1e3a8a]">
                              {step.title}
                            </h3>
                          </div>
                          
                          <p className="text-gray-600 mb-4 leading-relaxed">
                            {step.description}
                          </p>
                          
                          <div className="grid grid-cols-2 gap-3">
                            {step.features.map((feature, fIndex) => (
                              <div key={fIndex} className="flex items-center text-sm">
                                <CheckCircle className="w-4 h-4 text-[#f97316] mr-2 flex-shrink-0" />
                                <span className="text-gray-700">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
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
                Common questions about our software development services and how we can help transform your business
              </p>
            </div>

            {/* FAQ Accordion */}
            <div className="space-y-3 sm:space-y-4">
              {[
                {
                  question: "What types of software development services do you offer?",
                  answer: "We offer comprehensive software development services including mobile app development (iOS/Android), web application development, desktop applications, database management, custom software solutions, and IT consulting. Our team specializes in modern technologies and frameworks to deliver scalable, secure, and high-performance solutions."
                },
                {
                  question: "How long does it typically take to develop custom software?",
                  answer: "Development timelines vary based on project complexity and requirements. Simple applications can be completed in 8-12 weeks, while complex enterprise solutions may take 6-12 months. We follow agile methodology with regular milestones and deliverables, ensuring transparency and allowing for iterative feedback throughout the process."
                },
                {
                  question: "Do you provide ongoing support and maintenance?",
                  answer: "Yes, we provide comprehensive post-launch support including bug fixes, security updates, performance optimization, feature enhancements, and technical support. We offer flexible maintenance packages ranging from basic support to full managed services, ensuring your software continues to perform optimally."
                },
                {
                  question: "Can you integrate with our existing systems?",
                  answer: "Absolutely. We specialize in system integration and can connect your new software with existing databases, CRM systems, ERP platforms, third-party APIs, and legacy systems. Our integration approach ensures data consistency, security, and seamless workflow continuity across all your business systems."
                },
                {
                  question: "What technologies and frameworks do you use?",
                  answer: "We work with modern, proven technologies including React, Next.js, Node.js, Python, React Native, Flutter, PostgreSQL, MongoDB, AWS, Azure, and many more. Our technology selection is based on your specific requirements, scalability needs, and long-term business goals."
                },
                {
                  question: "How do you ensure the security of our software and data?",
                  answer: "Security is paramount in our development process. We implement industry best practices including encryption, secure coding standards, regular security audits, access controls, data backup strategies, and compliance with regulations like GDPR and HIPAA. We also conduct thorough security testing before deployment."
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
                        <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#f97316] flex items-center justify-center transition-transform duration-300 ${
                          openFAQ === index ? 'rotate-180' : 'rotate-0'
                        }`}>
                          {openFAQ === index ? (
                            <Minus className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                          ): (
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
        {/* End Unified Background Container */}


        {/* CTA Section */}
        <section className="relative z-10">
          <div className="relative bg-slate-800 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img 
                src="/software-development-cta-bg.jpg" 
                alt="Software Development Team"
                className="w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-black/75"></div>
            </div>
            
            <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-12 1.25xl:px-16 max-w-7xl py-16">
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
                  Partner With Leading <span className="text-[#f97316]">Software Development Experts</span> For Your Transformation Journey
                </h2>
                <p className="text-white/90 mb-10 text-lg leading-relaxed max-w-3xl mx-auto">
                  Connect with our software development specialists to accelerate your business growth. Get strategic guidance, technology insights, and implementation support from industry leaders in software development.
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

      </div>
    </PageLayout>
  );
}