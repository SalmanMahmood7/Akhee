"use client";

import PageLayout from "@/components/PageLayout";
import { Target, CheckCircle, Users, TrendingUp, Zap, ArrowRight, Search, Palette, Wrench, Brain, Settings, Monitor, Lightbulb, BarChart3, Shield, Globe, Database, Code2, Server, Cloud, Box, Link, Rocket, Plus, Minus } from "lucide-react";
import { getTechnologyUrl } from "@/lib/technology-utils";
import { useState } from "react";
import ServiceDetailModal from "@/components/ServiceDetailModal";

export default function DigitalAdvisory() {
  const [selectedService, setSelectedService] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);

  const servicesData = {
    digitalStrategy: {
      title: "Digital Strategy Development",
      description: "Comprehensive digital strategies aligned with business objectives",
      fullDescription: "Develop comprehensive digital strategies that align technology investments with business objectives for maximum ROI. Our strategic approach ensures your digital transformation initiatives drive sustainable growth and competitive advantage in today's rapidly evolving marketplace.",
      features: [
        {
          title: "Strategic Planning",
          description: "Long-term digital roadmaps aligned with business goals",
          icon: Target
        },
        {
          title: "Market Analysis",
          description: "Competitive landscape and market opportunity assessment",
          icon: Target
        },
        {
          title: "ROI Optimization",
          description: "Maximize return on digital technology investments",
          icon: Target
        },
        {
          title: "Digital Roadmapping",
          description: "Phased implementation plans with clear milestones",
          icon: Target
        }
      ],
      benefits: [
        {
          title: "Strategic Clarity",
          description: "Clear digital transformation roadmap",
          metric: "100% alignment"
        },
        {
          title: "ROI Improvement",
          description: "Average improvement in technology ROI",
          metric: "+250%"
        },
        {
          title: "Market Advantage",
          description: "Faster time to market for digital initiatives",
          metric: "60% faster"
        }
      ],
      process: [
        {
          step: 1,
          title: "Business Assessment",
          description: "Evaluate current digital maturity and business objectives",
          duration: "1-2 weeks"
        },
        {
          step: 2,
          title: "Strategy Development",
          description: "Create comprehensive digital transformation strategy",
          duration: "2-3 weeks"
        },
        {
          step: 3,
          title: "Roadmap Creation",
          description: "Develop detailed implementation roadmap with timelines",
          duration: "1-2 weeks"
        },
        {
          step: 4,
          title: "Implementation Support",
          description: "Ongoing strategic guidance during execution phase",
          duration: "3-12 months"
        }
      ],
      technologies: ["Microsoft Visio", "Tableau", "Power BI", "Miro", "Lucidchart", "SWOT Analysis Tools", "Digital Maturity Frameworks"],
      caseStudy: {
        client: "Manufacturing Company (2,000+ employees)",
        challenge: "Outdated systems hindering growth and digital customer expectations",
        solution: "Comprehensive digital strategy with cloud migration and automation roadmap",
        results: [
          "40% improvement in operational efficiency",
          "25% increase in customer satisfaction",
          "60% reduction in manual processes",
          "$3.2M cost savings over 2 years"
        ]
      },
      deliverables: [
        "Digital maturity assessment report",
        "Comprehensive digital strategy document",
        "Implementation roadmap with timelines",
        "ROI projections and business case",
        "Risk assessment and mitigation plan",
        "Ongoing strategic guidance"
      ]
    },
    technologyAssessment: {
      title: "Technology Assessment & Planning",
      description: "In-depth evaluation of technology stack and digital capabilities",
      fullDescription: "Conduct thorough evaluation of your current technology infrastructure, digital capabilities, and system architecture to identify optimization opportunities and create strategic technology plans.",
      features: [
        {
          title: "Infrastructure Review",
          description: "Comprehensive technology stack evaluation",
          icon: Target
        },
        {
          title: "Gap Analysis",
          description: "Identify technology gaps and opportunities",
          icon: Target
        },
        {
          title: "Optimization Planning",
          description: "Strategic optimization and modernization plans",
          icon: Target
        },
        {
          title: "Technology Roadmap",
          description: "Future-focused technology evolution planning",
          icon: Target
        }
      ],
      benefits: [
        {
          title: "Cost Reduction",
          description: "Average technology cost savings",
          metric: "35%"
        },
        {
          title: "Performance Gain",
          description: "System performance improvement",
          metric: "+180%"
        },
        {
          title: "Efficiency",
          description: "Operational efficiency increase",
          metric: "45%"
        }
      ],
      process: [
        {
          step: 1,
          title: "Current State Analysis",
          description: "Comprehensive technology infrastructure assessment",
          duration: "1-2 weeks"
        },
        {
          step: 2,
          title: "Gap Identification",
          description: "Identify technology gaps and optimization opportunities",
          duration: "1 week"
        },
        {
          step: 3,
          title: "Recommendations",
          description: "Develop strategic technology recommendations",
          duration: "1-2 weeks"
        },
        {
          step: 4,
          title: "Implementation Planning",
          description: "Create detailed implementation roadmap",
          duration: "1 week"
        }
      ],
      technologies: ["Enterprise Architecture Tools", "Performance Monitoring", "Security Assessment", "Cloud Evaluation"],
      caseStudy: {
        client: "Healthcare Network",
        challenge: "Legacy systems causing operational inefficiencies",
        solution: "Comprehensive technology assessment and modernization plan",
        results: [
          "50% improvement in system performance",
          "30% reduction in maintenance costs",
          "Enhanced security posture",
          "Improved user satisfaction"
        ]
      },
      deliverables: [
        "Technology assessment report",
        "Gap analysis documentation",
        "Optimization recommendations",
        "Implementation roadmap",
        "Cost-benefit analysis",
        "Risk assessment"
      ]
    },
    changeManagement: {
      title: "Change Management Support",
      description: "Expert guidance for organizational change during digital transformation",
      fullDescription: "Navigate organizational change with expert change management support ensuring smooth adoption, user engagement, and maximum ROI from digital transformation initiatives.",
      features: [
        {
          title: "Change Strategy",
          description: "Comprehensive change management planning",
          icon: Target
        },
        {
          title: "Team Training",
          description: "Customized training programs for teams",
          icon: Target
        },
        {
          title: "User Adoption",
          description: "Strategies to maximize user adoption",
          icon: Target
        },
        {
          title: "Process Optimization",
          description: "Streamline processes for better outcomes",
          icon: Target
        }
      ],
      benefits: [
        {
          title: "Adoption Rate",
          description: "User adoption improvement",
          metric: "85%"
        },
        {
          title: "Time Savings",
          description: "Faster implementation timeline",
          metric: "40%"
        },
        {
          title: "ROI Enhancement",
          description: "Improved return on investment",
          metric: "+60%"
        }
      ],
      process: [
        {
          step: 1,
          title: "Change Assessment",
          description: "Evaluate organizational readiness for change",
          duration: "1 week"
        },
        {
          step: 2,
          title: "Strategy Development",
          description: "Create comprehensive change management strategy",
          duration: "2 weeks"
        },
        {
          step: 3,
          title: "Implementation",
          description: "Execute change management initiatives",
          duration: "4-8 weeks"
        },
        {
          step: 4,
          title: "Monitoring & Support",
          description: "Ongoing monitoring and support",
          duration: "3-6 months"
        }
      ],
      technologies: ["Change Management Platforms", "Training Systems", "Communication Tools", "Feedback Systems"],
      caseStudy: {
        client: "Financial Services Company",
        challenge: "Resistance to new digital processes and systems",
        solution: "Comprehensive change management program with training",
        results: [
          "90% user adoption rate",
          "50% reduction in support tickets",
          "Improved employee satisfaction",
          "Faster project completion"
        ]
      },
      deliverables: [
        "Change management strategy",
        "Training materials and programs",
        "Communication plans",
        "User adoption metrics",
        "Support documentation",
        "Ongoing coaching"
      ]
    },
    digitalInnovation: {
      title: "Digital Innovation Consulting",
      description: "Strategic consulting for innovative digital solutions",
      fullDescription: "Identify and implement cutting-edge digital solutions that transform business operations, enhance customer experiences, and create competitive advantages in the digital marketplace.",
      features: [
        {
          title: "Innovation Assessment",
          description: "Evaluate innovation opportunities and readiness",
          icon: Target
        },
        {
          title: "Emerging Technologies",
          description: "Leverage cutting-edge technology solutions",
          icon: Target
        },
        {
          title: "Digital Disruption",
          description: "Navigate and leverage digital disruption",
          icon: Target
        },
        {
          title: "Future-Proofing",
          description: "Build resilient, future-ready solutions",
          icon: Target
        }
      ],
      benefits: [
        {
          title: "Innovation Speed",
          description: "Faster innovation delivery",
          metric: "3x faster"
        },
        {
          title: "Market Advantage",
          description: "Competitive advantage gained",
          metric: "65%"
        },
        {
          title: "Revenue Growth",
          description: "New revenue streams created",
          metric: "+120%"
        }
      ],
      process: [
        {
          step: 1,
          title: "Innovation Discovery",
          description: "Identify innovation opportunities and trends",
          duration: "2 weeks"
        },
        {
          step: 2,
          title: "Concept Development",
          description: "Develop and validate innovation concepts",
          duration: "3-4 weeks"
        },
        {
          step: 3,
          title: "Prototype & Test",
          description: "Build prototypes and conduct testing",
          duration: "4-6 weeks"
        },
        {
          step: 4,
          title: "Implementation",
          description: "Scale and implement successful innovations",
          duration: "8-12 weeks"
        }
      ],
      technologies: ["AI/ML Platforms", "IoT Solutions", "Blockchain", "AR/VR", "Advanced Analytics", "API Platforms"],
      caseStudy: {
        client: "Retail Company",
        challenge: "Need for innovative customer engagement solutions",
        solution: "AI-powered personalization and mobile experience platform",
        results: [
          "40% increase in customer engagement",
          "25% boost in sales conversion",
          "Improved customer satisfaction",
          "New revenue streams"
        ]
      },
      deliverables: [
        "Innovation strategy document",
        "Technology roadmap",
        "Prototype solutions",
        "Implementation plans",
        "Success metrics",
        "Ongoing innovation support"
      ]
    }
  };

  const services = [
    {
      icon: Target,
      title: "Digital Strategy Development",
      description: "Comprehensive digital strategies aligned with business objectives that drive sustainable growth and competitive advantage in the digital marketplace.",
      features: ["Strategic Planning", "Market Analysis", "ROI Optimization", "Digital Roadmapping"]
    },
    {
      icon: Settings,
      title: "Technology Assessment & Planning", 
      description: "In-depth evaluation of your technology stack, digital capabilities, and infrastructure to identify opportunities for optimization and growth.",
      features: ["Infrastructure Review", "Gap Analysis", "Optimization Planning", "Technology Roadmap"]
    },
    {
      icon: Users,
      title: "Change Management Support",
      description: "Expert guidance to navigate organizational change during digital transformation initiatives, ensuring smooth adoption and maximum ROI.",
      features: ["Change Strategy", "Team Training", "User Adoption", "Process Optimization"]
    },
    {
      icon: Lightbulb,
      title: "Digital Innovation Consulting",
      description: "Strategic consulting to identify and implement innovative digital solutions that transform business operations and customer experiences.",
      features: ["Innovation Assessment", "Emerging Technologies", "Digital Disruption", "Future-Proofing"]
    }
  ];

  const technologies = [
    { 
      name: "Digital Strategy Tools", 
      category: "Planning",
      icon: Settings,
      color: "from-[#1e3a8a] to-[#1e40af]",
      description: "Strategic planning and roadmapping platforms"
    },
    { 
      name: "Analytics & BI Platforms", 
      category: "Intelligence",
      icon: Target,
      color: "from-[#f97316] to-[#ea580c]",
      description: "Business intelligence and analytics solutions"
    },
    { 
      name: "Cloud Infrastructure", 
      category: "Technology",
      icon: Settings,
      color: "from-[#1e3a8a] to-[#1e40af]",
      description: "Scalable cloud computing platforms"
    },
    { 
      name: "Process Automation", 
      category: "Efficiency",
      icon: Settings,
      color: "from-[#f97316] to-[#ea580c]",
      description: "Workflow automation and optimization tools"
    },
    { 
      name: "Digital Security", 
      category: "Protection",
      icon: Settings,
      color: "from-[#1e3a8a] to-[#1e40af]",
      description: "Cybersecurity and data protection solutions"
    },
    { 
      name: "Collaboration Platforms", 
      category: "Communication",
      icon: Settings,
      color: "from-[#f97316] to-[#ea580c]",
      description: "Team collaboration and communication tools"
    },
    { 
      name: "AI & Machine Learning", 
      category: "Innovation",
      icon: Settings,
      color: "from-[#1e3a8a] to-[#1e40af]",
      description: "Artificial intelligence and ML solutions"
    },
    { 
      name: "Digital Experience", 
      category: "Customer",
      icon: Settings,
      color: "from-[#f97316] to-[#ea580c]",
      description: "Customer experience and engagement platforms"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Assessment",
      description: "Comprehensive evaluation of your current digital maturity, business objectives, and market position to establish baseline metrics.",
      icon: Settings,
      color: "from-[#1e3a8a] to-[#1e40af]",
      features: ["Digital Maturity Assessment", "Business Analysis", "Market Research", "Stakeholder Interviews"]
    },
    {
      step: "02", 
      title: "Strategy & Roadmap Development",
      description: "Creating a comprehensive digital transformation strategy with clear milestones, timelines, and success metrics.",
      icon: Settings,
      color: "from-[#f97316] to-[#ea580c]",
      features: ["Strategic Planning", "Roadmap Creation", "Priority Setting", "Resource Allocation"]
    },
    {
      step: "03",
      title: "Implementation Planning",
      description: "Detailed planning and preparation for executing digital transformation initiatives with risk mitigation strategies.",
      icon: Settings,
      color: "from-[#1e3a8a] to-[#1e40af]",
      features: ["Project Planning", "Risk Assessment", "Team Preparation", "Technology Selection"]
    },
    {
      step: "04",
      title: "Execution & Optimization",
      description: "Guided implementation with continuous monitoring, optimization, and support to ensure successful digital transformation.",
      icon: Settings,
      color: "from-[#f97316] to-[#ea580c]",
      features: ["Implementation Support", "Performance Monitoring", "Continuous Optimization", "Success Measurement"]
    }
  ];

  const handleLearnMore = (serviceKey) => {
    setSelectedService(servicesData[serviceKey]);
    setShowModal(true);
  };

  return (
    <PageLayout>
      <div className="min-h-screen bg-white">

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src="/digital-advisory-background.jpg" 
              alt="Digital Advisory Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/75"></div>
          </div>

          <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-12 max-w-6xl">
            <div className="text-center space-y-8 pt-12">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8">
                Digital <span className="text-[#f97316]">Advisory</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Strategic guidance and expert consulting to accelerate your digital transformation journey. From digital strategy development to implementation support, we help businesses navigate the complex digital landscape and achieve sustainable growth.
              </p>
              
              <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="inline-flex items-center px-8 py-4 bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold rounded-full transition-all duration-300">
                  Get Strategic Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a href="#approach" className="inline-flex items-center px-8 py-4 border-2 border-[#f97316] text-[#f97316] hover:bg-[#f97316] hover:text-white font-semibold rounded-full transition-all duration-300">
                  View Our Approach
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Unified Background Container for All Sections */}
        <div className="bg-gradient-to-br from-blue-50 via-white to-orange-50 overflow-hidden">
        
        {/* Services Section */}
        <section id="approach" className="relative z-10" style={{paddingTop: '30px', paddingBottom: '30px'}}>
          <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
            
            {/* Header Section */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl 1366:text-4xl font-bold mb-6">
                <span className="text-[#1e3a8a]">Accelerate Your </span>
                <span className="text-[#f97316]">Digital Transformation </span>
                <span className="text-[#1e3a8a]">With Our Expert Digital Advisory Services</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We analyze your digital maturity and business objectives to deliver strategic guidance that drives measurable transformation and competitive advantage.
              </p>
            </div>

            {/* Service 1 - Digital Strategy Development */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12 bg-white/60 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-gray-100/50 shadow-lg">
              <div className="lg:order-2">
                <div className="relative h-[400px] overflow-hidden rounded-2xl shadow-xl">
                  <img 
                    src="/digital-advisory-team.jpg"
                    alt="Digital Strategy Planning"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="lg:order-1">
                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="text-[#1e3a8a]">Digital Strategy </span>
                  <span className="text-[#f97316]">Development</span>
                </h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Comprehensive digital strategies that align with your business objectives and market dynamics. Our strategic planning approach ensures sustainable growth through data-driven insights, competitive analysis, and future-focused roadmapping that positions your organization for long-term digital success.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => handleLearnMore('digitalStrategy')}
                    className="inline-flex items-center px-8 py-4 bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                  <a href="/contact" className="inline-flex items-center px-8 py-4 border-2 border-[#f97316] text-[#f97316] hover:bg-[#f97316] hover:text-white font-semibold rounded-full transition-all duration-300">
                    Get Consultation
                  </a>
                </div>
              </div>
            </div>

            {/* Service 2 - Technology Assessment */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12 bg-white/60 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-gray-100/50 shadow-lg">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="text-[#1e3a8a]">Technology Assessment </span>
                  <span className="text-[#f97316]">& </span>
                  <span className="text-[#1e3a8a]">Planning</span>
                </h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  In-depth evaluation of your technology stack, digital infrastructure, and organizational capabilities. Our comprehensive assessment identifies gaps, optimization opportunities, and strategic technology investments that will drive your digital transformation initiatives and maximize ROI.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => handleLearnMore('technologyAssessment')}
                    className="inline-flex items-center px-8 py-4 bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                  <a href="/contact" className="inline-flex items-center px-8 py-4 border-2 border-[#f97316] text-[#f97316] hover:bg-[#f97316] hover:text-white font-semibold rounded-full transition-all duration-300">
                    Get Assessment
                  </a>
                </div>
              </div>
              <div>
                <div className="relative h-[400px] overflow-hidden rounded-2xl shadow-xl">
                  <img 
                    src="/digital-monitoring-dash.jpg"
                    alt="Technology Assessment Dashboard"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Service 3 - Change Management */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12 bg-white/60 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-gray-100/50 shadow-lg">
              <div className="lg:order-2">
                <div className="relative h-[400px] overflow-hidden rounded-2xl shadow-xl">
                  <img 
                    src="/digital-consulting.jpg"
                    alt="Change Management Training"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="lg:order-1">
                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="text-[#f97316]">Change </span>
                  <span className="text-[#1e3a8a]">Management Support</span>
                </h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Expert guidance to navigate organizational change during digital transformation initiatives. Our change management approach ensures smooth adoption, minimizes resistance, and maximizes user engagement through strategic communication, training programs, and continuous support.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => handleLearnMore('changeManagement')}
                    className="inline-flex items-center px-8 py-4 bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                  <a href="/contact" className="inline-flex items-center px-8 py-4 border-2 border-[#f97316] text-[#f97316] hover:bg-[#f97316] hover:text-white font-semibold rounded-full transition-all duration-300">
                    Get Support
                  </a>
                </div>
              </div>
            </div>

            {/* Service 4 - Digital Innovation */}
            <div className="grid lg:grid-cols-2 gap-12 items-center bg-white/60 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-gray-100/50 shadow-lg">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="text-[#1e3a8a]">Digital Innovation </span>
                  <span className="text-[#f97316]">Consulting</span>
                </h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Strategic consulting to identify and implement innovative digital solutions that transform business operations and customer experiences. We help organizations stay ahead of digital trends, leverage emerging technologies, and create sustainable competitive advantages in rapidly evolving markets.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => handleLearnMore('digitalInnovation')}
                    className="inline-flex items-center px-8 py-4 bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                  <a href="/contact" className="inline-flex items-center px-8 py-4 border-2 border-[#f97316] text-[#f97316] hover:bg-[#f97316] hover:text-white font-semibold rounded-full transition-all duration-300">
                    Explore Innovation
                  </a>
                </div>
              </div>
              <div>
                <div className="relative h-[400px] overflow-hidden rounded-2xl shadow-xl">
                  <img 
                    src="/digital-strategy.jpg"
                    alt="Digital Innovation Workshop"
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
                <span className="text-[#1e3a8a]">Digital Transformation </span>
                <span className="text-[#f97316]">Technologies</span>
              </h2>
              
              <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We leverage cutting-edge technologies and platforms to drive successful digital transformation initiatives.
              </p>
            </div>
            
            {/* Technologies Grid - 2x4 Layout */}
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {technologies.map((tech, index) => (
                <div 
                  key={index} 
                  className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                    <div className={`w-full h-full bg-gradient-to-br ${tech.color} rounded-full transform translate-x-16 -translate-y-16`}></div>
                  </div>
                  
                  <div className="relative">
                    {/* Category & Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 text-xs font-semibold text-gray-600 bg-white rounded-full border">
                        {tech.category}
                      </span>
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${tech.color} flex items-center justify-center shadow-md`}>
                        <tech.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h4 className="font-bold text-2xl text-[#1e3a8a] mb-3 group-hover:text-[#f97316] transition-colors">
                      {tech.name}
                    </h4>
                    
                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {tech.description}
                    </p>
                    
                    {/* Learn More Link */}
                    <a href={getTechnologyUrl(tech.name)} className="flex items-center text-[#f97316] opacity-100 transition-all duration-300 hover:text-[#ea580c]">
                      <span className="text-sm font-medium">Explore Technology</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                  
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Advisory Process */}
        <section className="relative z-10" style={{paddingTop: '30px', paddingBottom: '30px'}}>
          <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
            <div className="text-center space-y-8 mb-12">
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="text-[#1e3a8a]">Our Advisory </span>
                <span className="text-[#f97316]">Process</span>
              </h2>
              
              <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                A proven methodology that guides organizations through successful digital transformation with strategic insights and expert support.
              </p>
            </div>
            
            {/* Process Steps - Horizontal Flow Layout */}
            <div className="relative">
              {/* Connecting Line */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#f97316]/30 to-transparent transform -translate-y-1/2 z-0"></div>
              
              <div className="grid lg:grid-cols-4 gap-8 lg:gap-4">
                {process.map((step, index) => (
                  <div 
                    key={index} 
                    className="group relative h-full flex flex-col"
                  >
                    {/* Main Card */}
                    <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                      
                      {/* Step Number Circle */}
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg mb-6 mx-auto relative z-10`}>
                        <span className="text-white font-bold text-xl">{step.step}</span>
                      </div>
                      
                      
                      {/* Title */}
                      <h3 className="text-xl font-bold text-[#1e3a8a] mb-4 text-center group-hover:text-[#f97316] transition-colors">
                        {step.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-gray-600 text-sm leading-relaxed text-center mb-6">
                        {step.description}
                      </p>
                      
                      {/* Features List */}
                      <div className="space-y-2 flex-1">
                        {step.features.map((feature, fIndex) => (
                          <div key={fIndex} className="flex items-center text-xs">
                            <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center mr-2 flex-shrink-0">
                              <CheckCircle className="w-3 h-3 text-green-600" />
                            </div>
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Hover Effect Overlay */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.color} opacity-10 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
                    </div>
                    
                    {/* Arrow for desktop - except last item */}
                    {index < process.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                        <div className="w-4 h-4 bg-[#f97316] rotate-45 opacity-60"></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Benefits Section */}
        <section style={{paddingTop: '30px', paddingBottom: '30px'}}>
          <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-[#1e3a8a]">Why Choose Our</span>{" "}
                <span className="text-[#f97316]">Digital Advisory Services?</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Transform your business with proven strategies that deliver measurable results
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Accelerated Growth",
                  description: "Achieve 40% faster digital transformation with our proven methodologies and industry best practices.",
                  icon: TrendingUp,
                  color: "text-[#f97316]"
                },
                {
                  title: "Cost Optimization",
                  description: "Reduce operational costs by up to 30% through strategic technology implementations and process improvements.",
                  icon: Settings,
                  color: "text-[#1e3a8a]"
                },
                {
                  title: "Risk Mitigation",
                  description: "Minimize transformation risks with comprehensive planning, testing, and phased implementation approaches.",
                  icon: Shield,
                  color: "text-[#1e3a8a]"
                },
                {
                  title: "Expert Guidance",
                  description: "Access to seasoned consultants with 15+ years of experience in digital transformation across industries.",
                  icon: Users,
                  color: "text-[#f97316]"
                },
                {
                  title: "Technology Agnostic",
                  description: "Unbiased recommendations based on your specific needs, not vendor partnerships or technology preferences.",
                  icon: Globe,
                  color: "text-orange-600"
                },
                {
                  title: "Measurable ROI",
                  description: "Clear metrics and KPIs to track success, with typical clients seeing 250% ROI within 18 months.",
                  icon: Target,
                  color: "text-[#1e3a8a]"
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100/50">
                  <div className="w-12 h-12 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center`}>
                      <benefit.icon className={`w-6 h-6 ${benefit.color}`} />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section style={{paddingTop: '30px', paddingBottom: '30px'}}>
          <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-[#1e3a8a]">Real-World</span>{" "}
                <span className="text-[#f97316]">Use Cases</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                See how our digital advisory services solve common business challenges
              </p>
            </div>

            <div className="space-y-12">
              {[
                {
                  title: "Legacy System Modernization",
                  challenge: "A manufacturing company struggled with outdated ERP systems causing operational inefficiencies and compliance issues.",
                  solution: "We developed a comprehensive modernization roadmap, including cloud migration strategy, system integration planning, and change management protocols.",
                  result: "40% reduction in operational costs, 60% faster reporting, and full regulatory compliance achieved within 12 months.",
                  industry: "Manufacturing"
                },
                {
                  title: "Digital Customer Experience Transformation",
                  challenge: "A retail chain needed to create omnichannel customer experiences to compete with online retailers.",
                  solution: "Designed and implemented a unified customer data platform, mobile app integration, and personalized marketing automation.",
                  result: "25% increase in customer retention, 45% boost in online sales, and 35% improvement in customer satisfaction scores.",
                  industry: "Retail"
                },
                {
                  title: "Data-Driven Decision Making",
                  challenge: "A healthcare network lacked integrated analytics to make informed operational and clinical decisions.",
                  solution: "Implemented advanced analytics platform with real-time dashboards, predictive modeling, and automated reporting systems.",
                  result: "30% improvement in patient outcomes, 20% reduction in operational costs, and enhanced regulatory compliance.",
                  industry: "Healthcare"
                }
              ].map((useCase, index) => (
                <div key={index} className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-100/50 shadow-lg">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="inline-block px-4 py-2 bg-[#f97316] text-white rounded-full text-sm font-semibold mb-4">
                        {useCase.industry}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-[#1e3a8a] mb-6">
                        {useCase.title}
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-[#f97316] mb-2">Challenge:</h4>
                          <p className="text-gray-600">{useCase.challenge}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-[#1e3a8a] mb-2">Solution:</h4>
                          <p className="text-gray-600">{useCase.solution}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-[#1e3a8a] mb-2">Result:</h4>
                          <p className="text-gray-600 font-medium">{useCase.result}</p>
                        </div>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="aspect-video bg-gradient-to-br from-[#1e3a8a] to-[#f97316] rounded-xl flex items-center justify-center">
                        <div className="text-white text-center">
                          <p className="text-lg font-semibold">Case Study #{index + 1}</p>
                        </div>
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
                Get answers to common questions about our digital advisory services
              </p>
            </div>

            {/* FAQ Accordion */}
            <div className="space-y-3 sm:space-y-4">
              {[
                {
                  question: "How long does a typical digital transformation project take?",
                  answer: "Project timelines vary based on scope and complexity, but most digital transformation initiatives take 6-18 months. We break projects into phases to deliver value incrementally and minimize business disruption."
                },
                {
                  question: "What industries do you specialize in?",
                  answer: "We have extensive experience across healthcare, manufacturing, financial services, retail, and government sectors. Our industry-agnostic methodologies can be adapted to any business vertical."
                },
                {
                  question: "How do you measure success and ROI?",
                  answer: "We establish clear KPIs and success metrics at project start, including cost savings, efficiency gains, revenue growth, and user adoption rates. Regular progress reviews ensure we're delivering measurable value."
                },
                {
                  question: "Do you provide ongoing support after implementation?",
                  answer: "Yes, we offer comprehensive post-implementation support including training, optimization, and managed services. Our goal is to ensure long-term success of your digital transformation initiatives."
                },
                {
                  question: "Can you work with our existing technology stack?",
                  answer: "Absolutely. We conduct thorough assessments of your current systems and develop integration strategies that leverage existing investments while identifying areas for modernization."
                },
                {
                  question: "What makes your approach different from other consultancies?",
                  answer: "Our hands-on, collaborative approach combines strategic planning with practical implementation. We don't just create roadmaps – we work alongside your team to execute and ensure adoption."
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
                    Still have questions?
                  </h3>
                  <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
                    Our digital advisory experts are here to help you navigate your transformation journey
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                    <a 
                      href="/contact" 
                      className="w-full sm:w-auto inline-flex items-center justify-center bg-gradient-to-r from-[#f97316] to-orange-500 hover:from-orange-500 hover:to-[#f97316] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base"
                    >
                      <span>Contact Our Experts</span>
                      <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                    <a 
                      href="/contact" 
                      className="w-full sm:w-auto inline-flex items-center justify-center bg-transparent border-2 border-[#f97316] text-[#f97316] hover:bg-[#f97316] hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base"
                    >
                      Schedule a Call
                    </a>
                  </div>
                </div>
              </div>
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
                src="/digital-advisory-cta-bg.jpg" 
                alt="Digital Advisory Team"
                className="w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-black/75"></div>
            </div>
            
            <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-12 1.25xl:px-16 max-w-7xl py-16">
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
                  Partner With Leading <span className="text-[#f97316]">Digital Advisory Experts</span> For Your Transformation Journey
                </h2>
                <p className="text-white/90 mb-10 text-lg leading-relaxed max-w-3xl mx-auto">
                  Connect with our digital transformation specialists to accelerate your business growth. Get strategic guidance, technology insights, and implementation support from industry leaders in digital advisory.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/contact" className="bg-[#f97316] hover:bg-orange-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
                    Download Our Guide
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