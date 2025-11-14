"use client";

import PageLayout from "@/components/PageLayout";
import { Lock, CheckCircle, Shield, Eye, ArrowRight, Phone, Search, Database, Cloud, Key, Clock, Users, Globe, Zap, DollarSign, Activity, Plus, Minus, BookOpen, TrendingUp, BarChart, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import ServiceDetailModal from "@/components/ServiceDetailModal";

export default function CyberSecurity() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const totalSlides = 8;
  const [selectedService, setSelectedService] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);

  // Update slides to show based on screen size
  useEffect(() => {
    const updateSlidesToShow = () => {
      const width = window.innerWidth;
      
      if (width < 768) {
        setSlidesToShow(1); // Mobile 1 slide
      } else if (width < 1024) {
        setSlidesToShow(2); // Tablet 2 slides
      } else if (width >= 1360 && width <= 1370) {
        setSlidesToShow(3); // 1366x768/767/769 and similar 3 slides
      } else if (width < 1400) {
        setSlidesToShow(3); // Other medium desktop 3 slides
      } else {
        setSlidesToShow(3); // Large desktop 3 slides
      }
      // Reset current slide when changing slide count
      setCurrentSlide(0);
    };

    updateSlidesToShow();
    window.addEventListener('resize', updateSlidesToShow);
    return () => window.removeEventListener('resize', updateSlidesToShow);
  }, []);

  // Touch/swipe functionality
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
    // Prevent page scrolling during swipe on mobile
    e.preventDefault();
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  const servicesData = {
    threatDetection: {
      title: "AI-Powered Threat Detection",
      description: "Advanced machine learning algorithms continuously monitor your digital infrastructure",
      fullDescription: "Our AI-powered threat detection system uses cutting-edge machine learning algorithms and behavioral analysis to identify and neutralize threats in real-time. With a 99.9% accuracy rate, our system continuously monitors your entire digital infrastructure, learning from patterns and anomalies to provide proactive protection against both known and emerging threats.",
      features: [
        {
          title: "Real-Time Monitoring",
          description: "24/7 continuous surveillance of your network, endpoints, and cloud infrastructure",
          icon: Activity
        },
        {
          title: "Machine Learning Analysis",
          description: "Advanced AI algorithms that learn and adapt to new threat patterns",
          icon: Eye
        },
        {
          title: "Behavioral Analytics",
          description: "Monitor user and entity behavior to detect insider threats and anomalies",
          icon: Users
        },
        {
          title: "Automated Response",
          description: "Instant threat mitigation and containment without human intervention",
          icon: Zap
        }
      ],
      benefits: [
        {
          title: "99.9% Accuracy",
          description: "Industry-leading threat detection accuracy",
          metric: "99.9%"
        },
        {
          title: "Response Time",
          description: "Average threat response time",
          metric: "< 1 second"
        },
        {
          title: "Threat Prevention",
          description: "Threats blocked monthly",
          metric: "10M+"
        }
      ],
      process: [
        {
          step: 1,
          title: "Infrastructure Assessment",
          description: "Comprehensive evaluation of your current security posture and infrastructure",
          duration: "1-2 days"
        },
        {
          step: 2,
          title: "AI Model Deployment",
          description: "Deploy and configure machine learning models tailored to your environment",
          duration: "2-3 days"
        },
        {
          step: 3,
          title: "Integration & Testing",
          description: "Integrate with existing systems and perform comprehensive testing",
          duration: "3-5 days"
        },
        {
          step: 4,
          title: "24/7 Monitoring",
          description: "Begin continuous monitoring and threat detection services",
          duration: "Ongoing"
        }
      ],
      technologies: ["TensorFlow", "PyTorch", "Apache Kafka", "Elasticsearch", "Splunk", "SIEM", "SOAR", "Machine Learning"],
      caseStudy: {
        client: "Healthcare Provider with 500+ locations",
        challenge: "Multiple security incidents and compliance concerns across distributed infrastructure",
        solution: "Implemented AI-powered threat detection with centralized monitoring and automated response",
        results: [
          "Reduced security incidents by 95%",
          "Achieved SOC 2 Type II compliance",
          "Decreased incident response time from hours to seconds",
          "Saved $2.3M annually in potential breach costs"
        ]
      },
      deliverables: [
        "AI-powered threat detection system",
        "24/7 Security Operations Center (SOC) monitoring",
        "Real-time dashboard and reporting",
        "Incident response playbooks",
        "Monthly security assessments",
        "Compliance reporting"
      ]
    },
    penetrationTesting: {
      title: "Penetration Testing",
      description: "Advanced vulnerability assessment and ethical hacking services",
      fullDescription: "Our comprehensive penetration testing services simulate real-world cyber attacks to identify vulnerabilities in your systems before malicious actors do. Our certified ethical hackers use the latest tools and techniques to test your network, web applications, and mobile applications, providing detailed reports and remediation recommendations.",
      features: [
        {
          title: "Network Penetration Testing",
          description: "Comprehensive testing of internal and external network infrastructure",
          icon: Shield
        },
        {
          title: "Web Application Testing",
          description: "OWASP Top 10 and custom vulnerability assessment for web applications",
          icon: Globe
        },
        {
          title: "Mobile App Security",
          description: "Security testing for iOS and Android mobile applications",
          icon: Phone
        },
        {
          title: "Social Engineering Tests",
          description: "Phishing simulations and social engineering awareness testing",
          icon: Users
        }
      ],
      benefits: [
        {
          title: "Vulnerability Reduction",
          description: "Average reduction in critical vulnerabilities",
          metric: "85%"
        },
        {
          title: "Compliance Score",
          description: "Average improvement in security compliance",
          metric: "+40%"
        },
        {
          title: "ROI",
          description: "Return on investment within first year",
          metric: "300%"
        }
      ],
      process: [
        {
          step: 1,
          title: "Planning & Reconnaissance",
          description: "Define scope, gather intelligence, and plan testing approach",
          duration: "2-3 days"
        },
        {
          step: 2,
          title: "Vulnerability Scanning",
          description: "Automated and manual vulnerability identification",
          duration: "3-5 days"
        },
        {
          step: 3,
          title: "Exploitation",
          description: "Attempt to exploit identified vulnerabilities safely",
          duration: "5-7 days"
        },
        {
          step: 4,
          title: "Reporting & Remediation",
          description: "Detailed report with findings and remediation recommendations",
          duration: "2-3 days"
        }
      ],
      technologies: ["Nessus", "Burp Suite", "Metasploit", "Nmap", "OWASP ZAP", "Kali Linux", "Wireshark", "Aircrack-ng"],
      caseStudy: {
        client: "Financial Services Company",
        challenge: "Required comprehensive security assessment for regulatory compliance",
        solution: "Conducted full-scope penetration testing across all digital assets",
        results: [
          "Identified 47 critical vulnerabilities",
          "Prevented potential $5M+ in breach costs",
          "Achieved PCI DSS compliance",
          "Improved overall security posture by 65%"
        ]
      },
      deliverables: [
        "Executive summary report",
        "Detailed technical findings",
        "Risk assessment and prioritization",
        "Remediation recommendations",
        "Proof-of-concept exploits",
        "Compliance mapping"
      ]
    },
    cloudSecurity: {
      title: "Cloud Security",
      description: "Comprehensive cloud infrastructure protection and compliance",
      fullDescription: "Secure your cloud infrastructure with our comprehensive cloud security solutions. We provide end-to-end protection for AWS, Azure, and Google Cloud platforms, ensuring your data and applications are protected with industry-leading security measures and compliance frameworks.",
      features: [
        {
          title: "Multi-Cloud Security",
          description: "Unified security across AWS, Azure, and Google Cloud platforms",
          icon: Cloud
        },
        {
          title: "Container Security",
          description: "Kubernetes and Docker container security scanning and monitoring",
          icon: Database
        },
        {
          title: "Compliance Management",
          description: "Automated compliance monitoring for SOC 2, HIPAA, PCI DSS",
          icon: CheckCircle
        },
        {
          title: "Identity & Access Management",
          description: "Zero-trust architecture and advanced IAM implementation",
          icon: Key
        }
      ],
      benefits: [
        {
          title: "Security Improvement",
          description: "Average improvement in cloud security posture",
          metric: "+75%"
        },
        {
          title: "Compliance Rate",
          description: "Maintained compliance across all frameworks",
          metric: "100%"
        },
        {
          title: "Cost Reduction",
          description: "Reduction in security-related cloud costs",
          metric: "-30%"
        }
      ],
      process: [
        {
          step: 1,
          title: "Cloud Security Assessment",
          description: "Comprehensive evaluation of current cloud security configuration",
          duration: "1 week"
        },
        {
          step: 2,
          title: "Security Architecture Design",
          description: "Design secure cloud architecture aligned with best practices",
          duration: "1-2 weeks"
        },
        {
          step: 3,
          title: "Implementation & Migration",
          description: "Implement security controls and migrate workloads securely",
          duration: "2-4 weeks"
        },
        {
          step: 4,
          title: "Monitoring & Maintenance",
          description: "Continuous monitoring and security maintenance",
          duration: "Ongoing"
        }
      ],
      technologies: ["AWS Security Hub", "Azure Security Center", "Google Cloud Security", "Terraform", "Kubernetes", "Docker", "HashiCorp Vault"],
      caseStudy: {
        client: "E-commerce Platform (10M+ users)",
        challenge: "Needed to secure multi-cloud infrastructure while maintaining performance",
        solution: "Implemented comprehensive cloud security with zero-trust architecture",
        results: [
          "Zero security incidents post-implementation",
          "Reduced compliance audit time by 80%",
          "Improved application performance by 25%",
          "Saved $500K annually in security tools"
        ]
      },
      deliverables: [
        "Cloud security architecture",
        "Security controls implementation",
        "Compliance reporting dashboard",
        "Incident response procedures",
        "Security monitoring setup",
        "Documentation and training"
      ]
    },
    identityManagement: {
      title: "Identity Management",
      description: "Advanced authentication and access control solutions",
      fullDescription: "Implement robust identity and access management (IAM) solutions that provide secure, seamless access to your organization's resources. Our zero-trust approach ensures that every user and device is verified and authorized before accessing sensitive data and applications.",
      features: [
        {
          title: "Single Sign-On (SSO)",
          description: "Unified access to all applications with a single set of credentials",
          icon: Lock
        },
        {
          title: "Multi-Factor Authentication",
          description: "Advanced MFA with biometric and hardware token support",
          icon: Users
        },
        {
          title: "Privileged Access Management",
          description: "Secure management of admin and privileged user accounts",
          icon: Shield
        },
        {
          title: "Identity Governance",
          description: "Automated user provisioning, de-provisioning, and access reviews",
          icon: CheckCircle
        }
      ],
      benefits: [
        {
          title: "Security Incidents",
          description: "Reduction in identity-related security incidents",
          metric: "-90%"
        },
        {
          title: "User Productivity",
          description: "Improvement in user login experience",
          metric: "+50%"
        },
        {
          title: "Compliance",
          description: "Automated compliance for identity governance",
          metric: "100%"
        }
      ],
      process: [
        {
          step: 1,
          title: "Identity Assessment",
          description: "Evaluate current identity infrastructure and access patterns",
          duration: "1-2 weeks"
        },
        {
          step: 2,
          title: "Architecture Planning",
          description: "Design comprehensive IAM architecture and integration plan",
          duration: "1 week"
        },
        {
          step: 3,
          title: "Implementation",
          description: "Deploy and configure IAM solutions with pilot testing",
          duration: "3-6 weeks"
        },
        {
          step: 4,
          title: "Full Rollout",
          description: "Complete deployment with user training and support",
          duration: "2-4 weeks"
        }
      ],
      technologies: ["Okta", "Azure Active Directory", "AWS IAM", "SailPoint", "CyberArk", "Ping Identity", "ForgeRock"],
      caseStudy: {
        client: "Manufacturing Company (5,000+ employees)",
        challenge: "Multiple security breaches due to weak access controls and password management",
        solution: "Implemented comprehensive IAM solution with zero-trust architecture",
        results: [
          "Eliminated password-related breaches",
          "Reduced help desk tickets by 60%",
          "Achieved SOX compliance for user access",
          "Improved user satisfaction by 40%"
        ]
      },
      deliverables: [
        "Single Sign-On implementation",
        "Multi-factor authentication setup",
        "Privileged access management",
        "User provisioning automation",
        "Access governance policies",
        "Training and documentation"
      ]
    },
    dataProtection: {
      title: "Data Protection",
      description: "Enterprise-grade encryption and data loss prevention",
      fullDescription: "Protect your organization's most valuable asset - your data - with our comprehensive data protection solutions. Our enterprise-grade encryption, data loss prevention, and backup strategies ensure your data remains secure, compliant, and available when you need it.",
      features: [
        {
          title: "Data Encryption",
          description: "End-to-end encryption for data at rest, in transit, and in use",
          icon: Lock
        },
        {
          title: "Data Loss Prevention",
          description: "Automated detection and prevention of data exfiltration attempts",
          icon: Shield
        },
        {
          title: "Backup & Recovery",
          description: "Automated backup solutions with point-in-time recovery",
          icon: Database
        },
        {
          title: "Data Classification",
          description: "Automated data discovery and classification based on sensitivity",
          icon: Search
        }
      ],
      benefits: [
        {
          title: "Data Breach Prevention",
          description: "Reduction in data breach incidents",
          metric: "-95%"
        },
        {
          title: "Recovery Time",
          description: "Average data recovery time",
          metric: "< 4 hours"
        },
        {
          title: "Compliance Score",
          description: "Data privacy compliance achievement",
          metric: "100%"
        }
      ],
      process: [
        {
          step: 1,
          title: "Data Discovery & Classification",
          description: "Identify and classify all sensitive data across your organization",
          duration: "1-2 weeks"
        },
        {
          step: 2,
          title: "Protection Strategy",
          description: "Develop comprehensive data protection and encryption strategy",
          duration: "1 week"
        },
        {
          step: 3,
          title: "Implementation",
          description: "Deploy encryption, DLP, and backup solutions",
          duration: "3-4 weeks"
        },
        {
          step: 4,
          title: "Monitoring & Maintenance",
          description: "Continuous monitoring and policy enforcement",
          duration: "Ongoing"
        }
      ],
      technologies: ["Vera", "Microsoft Purview", "Varonis", "Veeam", "Commvault", "Symantec DLP", "Forcepoint", "AWS KMS"],
      caseStudy: {
        client: "Legal Services Firm",
        challenge: "Required GDPR compliance and protection of sensitive client data",
        solution: "Implemented comprehensive data protection with encryption and DLP",
        results: [
          "Achieved full GDPR compliance",
          "Zero data breaches in 3+ years",
          "Reduced data discovery time by 80%",
          "Automated 95% of compliance reporting"
        ]
      },
      deliverables: [
        "Data classification and mapping",
        "Encryption implementation",
        "Data loss prevention policies",
        "Backup and recovery solution",
        "Compliance monitoring dashboard",
        "Incident response procedures"
      ]
    }
  };

  const handleLearnMore = (serviceKey) => {
    setSelectedService(servicesData[serviceKey]);
    setShowModal(true);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      const maxSlide = totalSlides - slidesToShow;
      return prev >= maxSlide ? 0 : prev + 1;
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      const maxSlide = totalSlides - slidesToShow;
      return prev <= 0 ? maxSlide : prev - 1;
    });
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <PageLayout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/cyber-hero-bg.jpg" 
              alt="Cyber Security Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-slate-900/80"></div>
          </div>

          <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-12 max-w-6xl">
            <div className="text-center space-y-8 pt-12">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8">
                <span className="text-[#f97316]">Cyber</span> Security
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Protect your digital assets with comprehensive security solutions designed to defend against modern cyber threats.
              </p>
              
              <div className="pt-8 flex justify-center mb-8">
                <a href="/contact" className="inline-flex items-center px-8 py-4 bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold rounded-full transition-all duration-300">
                  Get Security Assessment
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Unified Background Container for All Sections */}
        <div className="bg-white overflow-hidden">
        
          {/* Digital Security Solutions */}
          <section className="relative" style={{paddingTop: '30px', paddingBottom: '30px'}}>
            <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-6xl">
              <div className="text-center space-y-8 mb-10">
                <h2 className="text-4xl md:text-5xl font-bold">
                  <span className="text-[#1e3a8a]">Digital Security </span>
                  <span className="text-orange-500">Solutions</span>
                </h2>
                
                <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  Protect your digital ecosystem with our comprehensive cybersecurity solutions powered by AI and advanced threat intelligence.
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8 mb-10">
                
                <div className="lg:col-span-2 bg-white rounded-3xl p-8 border border-gray-200 hover:border-orange-300 transition-all duration-500 shadow-sm hover:shadow-lg">
                  <div className="flex items-start space-x-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Shield className="w-10 h-10 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4">AI-Powered Threat Detection</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        Advanced machine learning algorithms continuously monitor your digital infrastructure, identifying and neutralizing threats in real-time with 99.9% accuracy.
                      </p>
                      <div className="flex flex-wrap gap-3 mb-6">
                        <span className="px-3 py-1 bg-blue-100 text-[#1e3a8a] text-sm rounded-full border border-blue-200">24/7 Monitoring</span>
                        <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full border border-green-200">Real-time Response</span>
                        <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full border border-purple-200">AI-Driven</span>
                      </div>
                      <button 
                        onClick={() => handleLearnMore('threatDetection')}
                        className="inline-flex items-center px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors duration-300"
                      >
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-6 border border-gray-200 text-center shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                      <Eye className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-[#1e3a8a] mb-1">10M+</div>
                    <div className="text-gray-600 text-sm">Threats Blocked</div>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 border border-gray-200 text-center shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-[#1e3a8a] mb-1">&lt; 1s</div>
                    <div className="text-gray-600 text-sm">Response Time</div>
                  </div>
                </div>

              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                
                <div className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-orange-300 transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-lg">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Search className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-[#1e3a8a] mb-2 group-hover:text-orange-600 transition-colors">Penetration Testing</h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">Advanced vulnerability assessment and ethical hacking services.</p>
                  <button 
                    onClick={() => handleLearnMore('penetrationTesting')}
                    className="text-orange-500 hover:text-orange-600 font-semibold text-sm inline-flex items-center"
                  >
                    Learn More
                    <ArrowRight className="ml-1 w-3 h-3" />
                  </button>
                </div>

                <div className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-300 transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-lg">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Cloud className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-[#1e3a8a] mb-2 group-hover:text-[#1e3a8a] transition-colors">Cloud Security</h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">Comprehensive cloud infrastructure protection and compliance.</p>
                  <button 
                    onClick={() => handleLearnMore('cloudSecurity')}
                    className="text-[#1e3a8a] hover:text-[#1e3a8a] font-semibold text-sm inline-flex items-center"
                  >
                    Learn More
                    <ArrowRight className="ml-1 w-3 h-3" />
                  </button>
                </div>

                <div className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-green-300 transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-lg">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Key className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-[#1e3a8a] mb-2 group-hover:text-green-600 transition-colors">Identity Management</h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">Advanced authentication and access control solutions.</p>
                  <button 
                    onClick={() => handleLearnMore('identityManagement')}
                    className="text-green-500 hover:text-green-600 font-semibold text-sm inline-flex items-center"
                  >
                    Learn More
                    <ArrowRight className="ml-1 w-3 h-3" />
                  </button>
                </div>

                <div className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-purple-300 transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-lg">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Database className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-[#1e3a8a] mb-2 group-hover:text-purple-600 transition-colors">Data Protection</h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">Enterprise-grade encryption and data loss prevention.</p>
                  <button 
                    onClick={() => handleLearnMore('dataProtection')}
                    className="text-purple-500 hover:text-purple-600 font-semibold text-sm inline-flex items-center"
                  >
                    Learn More
                    <ArrowRight className="ml-1 w-3 h-3" />
                  </button>
                </div>

              </div>

            </div>
          </section>

          {/* Best Computer Security Services */}
          <section className="relative" style={{paddingTop: '30px', paddingBottom: '30px'}}>
            <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-6xl">
              
              {/* Section Header */}
              <div className="text-center mb-10">
                <h5 className="font-semibold mb-4 uppercase tracking-wider text-sm" style={{ color: '#f97316' }}>Best Computer Security Services</h5>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] leading-tight max-w-4xl mx-auto mb-6">
                  Akhee - Your Trusted Partner For Comprehensive Cyber Security Solutions
                </h2>
              </div>

              {/* Main Content - Side by Side Layout */}
              <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
                
                {/* Left Side - Image */}
                <div className="relative">
                  <div className="relative overflow-hidden rounded-2xl shadow-xl">
                    <img 
                      src="/cyber-security-team.jpg" 
                      alt="Cybersecurity Protection Services"
                      className="w-full h-[320px] lg:h-[360px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-800/50 to-cyan-800/70"></div>
                    
                    {/* Overlay Content */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white p-6">
                        <div className="w-20 h-20 mx-auto mb-4 bg-white/20 backdrop-blur rounded-full flex items-center justify-center border border-white/30">
                          <Shield className="w-10 h-10 text-white" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-2">Comprehensive Protection</h3>
                        <p className="text-lg opacity-90">24/7 Security Monitoring & Response</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Content */}
                <div className="flex flex-col justify-center space-y-6 h-full">
                  
                  {/* Introduction */}
                  <div className="space-y-6">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      We provide comprehensive managed security services with proactive threat detection, 24/7 monitoring, and expert incident response. Our MSSP specializes in threat mitigation, compliance, and risk management for businesses of all sizes.
                    </p>
                    
                    <p className="text-lg text-gray-700 leading-relaxed">
                      As a leading cybersecurity provider, we reduce security complexity, improve threat detection, and optimize your security investments. Whether you need complete security outsourcing or supplemental protection, we deliver scalable solutions tailored to your business needs.
                    </p>
                  </div>

                  {/* Call to Action */}
                  <div className="pt-2">
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-semibold transition-colors duration-300">
                      Get Started Today
                    </button>
                  </div>

                </div>
              </div>

            </div>
          </section>

          {/* Cybersecurity Process Steps Slideshow */}
          <section className="relative" style={{paddingTop: '30px', paddingBottom: '30px'}}>
            <div className="container mx-auto px-6 md:px-8 lg:px-16 xl:px-20 max-w-7xl xl:max-w-8xl">
              <div className="text-center mb-10">
                <h5 className="text-orange-500 font-semibold mb-4 uppercase tracking-wider text-sm">Industry recognized process</h5>
                <h3 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-6">
                  Steps to Professional Cybersecurity Implementation
                </h3>
              </div>

              {/* Slideshow Container */}
              <div className="relative">

                {/* Slider Cards */}
                <div 
                  className="overflow-x-hidden"
                  onTouchStart={onTouchStart}
                  onTouchMove={onTouchMove}
                  onTouchEnd={onTouchEnd}
                >
                  <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                      transform: slidesToShow === 1 
                        ? `translateX(-${currentSlide * 100}%)`
                        : slidesToShow === 2
                        ? `translateX(-${currentSlide * 50}%)`
                        : `translateX(-${currentSlide * 33.333}%)`
                    }}
                  >
                    
                    {/* Card 1 */}
                    <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-3">
                      <div className="bg-white rounded-3xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                        <div className="relative h-48 overflow-hidden">
                        <img 
                          src="/cyber-analytics-dash.jpg" 
                          alt="Cybersecurity Assessment and Analysis"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute top-6 left-6">
                          <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                            <span className="text-xl font-bold text-white">01</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-8 flex-grow">
                        <h4 className="text-xl font-bold text-[#1e3a8a] mb-3">Security Assessment and Analysis</h4>
                        <p className="text-gray-600 leading-relaxed">Comprehensive evaluation of your current cybersecurity posture to identify vulnerabilities and compliance gaps.</p>
                      </div>
                      </div>
                    </div>

                    {/* Card 2 */}
                    <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-3">
                      <div className="bg-white rounded-3xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                        <div className="relative h-48 overflow-hidden">
                        <img 
                          src="/cyber-network.jpg" 
                          alt="Customized Security Solutions"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute top-6 left-6">
                          <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                            <span className="text-xl font-bold text-white">02</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-8 flex-grow">
                        <h4 className="text-xl font-bold text-[#1e3a8a] mb-3">Customized Solutions Design</h4>
                        <p className="text-gray-600 leading-relaxed">Design tailored security solutions that align with your business goals and operational requirements.</p>
                      </div>
                      </div>
                    </div>

                    {/* Card 3 */}
                    <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-3">
                      <div className="bg-white rounded-3xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                        <div className="relative h-48 overflow-hidden">
                        <img 
                          src="/cyber-infra.jpg" 
                          alt="Implementation and Integration"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute top-6 left-6">
                          <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                            <span className="text-xl font-bold text-white">03</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-8 flex-grow">
                        <h4 className="text-xl font-bold text-[#1e3a8a] mb-3">Implementation and Integration</h4>
                        <p className="text-gray-600 leading-relaxed">Seamlessly implement security controls and integrate with existing systems for minimal disruption.</p>
                      </div>
                      </div>
                    </div>

                    {/* Card 4 */}
                    <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-3">
                      <div className="bg-white rounded-3xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                        <div className="relative h-48 overflow-hidden">
                        <img 
                          src="/cyber-monitoring.jpg" 
                          alt="24/7 Security Monitoring"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute top-6 left-6">
                          <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                            <span className="text-xl font-bold text-white">04</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-8 flex-grow">
                        <h4 className="text-xl font-bold text-[#1e3a8a] mb-3">24/7 Monitoring and Support</h4>
                        <p className="text-gray-600 leading-relaxed">Begin continuous monitoring with proactive threat detection and rapid response to incidents.</p>
                      </div>
                      </div>
                    </div>

                    {/* Card 5 */}
                    <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-3">
                      <div className="bg-white rounded-3xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                        <div className="relative h-48 overflow-hidden">
                        <img 
                          src="/cyber-security-team.jpg" 
                          alt="Security Optimization"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute top-6 left-6">
                          <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                            <span className="text-xl font-bold text-white">05</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-8 flex-grow">
                        <h4 className="text-xl font-bold text-[#1e3a8a] mb-3">Security Optimization</h4>
                        <p className="text-gray-600 leading-relaxed">Continuously optimize security measures for peak protection and implement efficiency improvements.</p>
                      </div>
                      </div>
                    </div>

                    {/* Card 6 */}
                    <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-3">
                      <div className="bg-white rounded-3xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                        <div className="relative h-48 overflow-hidden">
                        <img 
                          src="/cyber-coding.jpg" 
                          alt="User Training and Support"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute top-6 left-6">
                          <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                            <span className="text-xl font-bold text-white">06</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-8 flex-grow">
                        <h4 className="text-xl font-bold text-[#1e3a8a] mb-3">User Training and Support</h4>
                        <p className="text-gray-600 leading-relaxed">Provide comprehensive security training and ongoing awareness programs to maximize protection.</p>
                      </div>
                      </div>
                    </div>

                    {/* Card 7 */}
                    <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-3">
                      <div className="bg-white rounded-3xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                        <div className="relative h-48 overflow-hidden">
                        <img 
                          src="/cyber-network.jpg" 
                          alt="Incident Response and Recovery"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute top-6 left-6">
                          <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                            <span className="text-xl font-bold text-white">07</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-8 flex-grow">
                        <h4 className="text-xl font-bold text-[#1e3a8a] mb-3">Incident Response Planning</h4>
                        <p className="text-gray-600 leading-relaxed">Implement robust incident response procedures and test recovery plans to ensure business continuity.</p>
                      </div>
                      </div>
                    </div>

                    {/* Card 8 */}
                    <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-3">
                      <div className="bg-white rounded-3xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                        <div className="relative h-48 overflow-hidden">
                        <img 
                          src="/cyber-analytics-dash.jpg" 
                          alt="Strategic Security Planning"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute top-6 left-6">
                          <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                            <span className="text-xl font-bold text-white">08</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-8 flex-grow">
                        <h4 className="text-xl font-bold text-[#1e3a8a] mb-3">Strategic Security Planning</h4>
                        <p className="text-gray-600 leading-relaxed">Develop long-term security strategies and roadmaps aligned with your business growth objectives.</p>
                      </div>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Bottom Navigation */}
                <div className="flex items-center justify-center mt-12 lg:mt-8 space-x-8 lg:space-x-6">
                  <button 
                    onClick={prevSlide}
                    className="p-4 lg:p-3 rounded-full bg-blue-50 text-[#1e3a8a] hover:bg-orange-100 hover:text-orange-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={currentSlide === 0}
                  >
                    <ChevronLeft className="w-6 h-6 lg:w-5 lg:h-5" />
                  </button>
                  
                  <div className="flex space-x-2 lg:space-x-1.5">
                    {Array.from({ length: totalSlides - slidesToShow + 1 }, (_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 lg:w-2.5 lg:h-2.5 rounded-full transition-all duration-300 ${
                          currentSlide === index 
                            ? 'bg-orange-600' 
                            : 'bg-blue-300 hover:bg-blue-400'
                        }`}
                      />
                    ))}
                  </div>
                  
                  <button 
                    onClick={nextSlide}
                    className="p-4 lg:p-3 rounded-full bg-blue-50 text-[#1e3a8a] hover:bg-orange-100 hover:text-orange-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={currentSlide >= totalSlides - slidesToShow}
                  >
                    <ChevronRight className="w-6 h-6 lg:w-5 lg:h-5" />
                  </button>
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
                  <span className="text-[#1e3a8a]">Security Solution</span>{" "}
                  <span className="text-[#f97316]">Benefits</span>
                </h2>
                <p className="text-xl text-[#1e3a8a] max-w-3xl mx-auto leading-relaxed">
                  Discover how our cybersecurity solutions provide comprehensive protection and peace of mind for your business
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Advanced Threat Protection",
                    description: "Block <span className='text-[#f97316] font-semibold'>99.9%</span> of cyber threats with AI-powered detection systems that identify and neutralize attacks in real-time before they impact your business.",
                    icon: Shield,
                    color: "from-[#1e3a8a] to-[#1e40af]"
                  },
                  {
                    title: "<span className='text-[#f97316]'>24/7</span> Security Monitoring",
                    description: "Round-the-clock surveillance by our expert security team ensures threats are detected and responded to within seconds, not hours.",
                    icon: Eye,
                    color: "from-[#f97316] to-[#ea580c]"
                  },
                  {
                    title: "Compliance Assurance",
                    description: "Achieve and maintain compliance with GDPR, HIPAA, SOC 2, and other regulations through automated monitoring and reporting.",
                    icon: CheckCircle,
                    color: "from-[#1e3a8a] to-[#1e40af]"
                  },
                  {
                    title: "Zero Downtime Protection",
                    description: "Seamless security integration that protects your business without disrupting operations or affecting system performance.",
                    icon: Shield,
                    color: "from-[#f97316] to-[#ea580c]"
                  },
                  {
                    title: "Cost-Effective Security",
                    description: "Reduce security costs by up to <span className='text-[#f97316] font-semibold'>60%</span> compared to building an in-house security team while getting enterprise-grade protection.",
                    icon: DollarSign,
                    color: "from-[#1e3a8a] to-[#1e40af]"
                  },
                  {
                    title: "Rapid Incident Response",
                    description: "Average response time under <span className='text-[#f97316] font-semibold'>1 second</span> for automated threats and under <span className='text-[#f97316] font-semibold'>15 minutes</span> for complex incidents requiring human intervention.",
                    icon: Activity,
                    color: "from-[#f97316] to-[#ea580c]"
                  }
                ].map((benefit, index) => (
                  <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100">
                    <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1e3a8a] mb-4 group-hover:text-[#f97316] transition-colors" dangerouslySetInnerHTML={{__html: benefit.title}} />
                    <p className="text-black leading-relaxed" dangerouslySetInnerHTML={{__html: benefit.description}} />
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
                  <span className="text-[#1e3a8a]">Security Success</span>{" "}
                  <span className="text-[#f97316]">Stories</span>
                </h2>
                <p className="text-xl text-[#1e3a8a] max-w-3xl mx-auto leading-relaxed">
                  Real-world examples of how our cybersecurity solutions have protected businesses from cyber threats
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {[
                  {
                    industry: "Healthcare",
                    company: "Regional Medical Center",
                    challenge: "Facing 200+ daily cyber attack attempts and struggling with HIPAA compliance while protecting 50,000+ patient records.",
                    solution: "Deployed AI-powered threat detection, endpoint protection, and automated compliance monitoring with 24/7 SOC services.",
                    result: "Blocked 99.8% of attacks, achieved 100% HIPAA compliance, and reduced security incidents by 95% within 6 months.",
                    metrics: "99.8% Attack Prevention",
                    bgColor: "from-[#1e3a8a] to-[#1e40af]",
                    accentColor: "text-[#1e3a8a]"
                  },
                  {
                    industry: "Financial Services",
                    company: "Community Bank Network",
                    challenge: "Multiple branches vulnerable to ransomware attacks with outdated security systems and limited IT resources.",
                    solution: "Implemented comprehensive endpoint protection, network segmentation, and advanced threat intelligence with managed security services.",
                    result: "Zero successful ransomware attacks, 90% reduction in security alerts, and achieved PCI DSS compliance across all locations.",
                    metrics: "Zero Ransomware Hits",
                    bgColor: "from-[#f97316] to-orange-500",
                    accentColor: "text-[#1e3a8a]"
                  },
                  {
                    industry: "Manufacturing",
                    company: "Industrial Equipment Manufacturer",
                    challenge: "Legacy industrial systems exposed to cyber threats with production disruptions costing $100K per hour of downtime.",
                    solution: "Secured OT/IT networks with industrial-grade firewalls, network monitoring, and incident response planning specifically for manufacturing.",
                    result: "Eliminated production disruptions, improved network visibility by 100%, and prevented $2.4M in potential losses.",
                    metrics: "$2.4M Loss Prevention",
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
                            <div className="text-sm text-white/80">Result</div>
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
                          <h4 className="font-semibold text-[#1e3a8a] mb-2">Security Solution:</h4>
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
          <section className="relative overflow-hidden" style={{paddingTop: '30px', paddingBottom: '30px'}}>
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
                  Common questions about cybersecurity services and how we protect your business
                </p>
              </div>

              {/* FAQ Accordion */}
              <div className="space-y-3 sm:space-y-4">
                {[
                  {
                    question: "How quickly can you detect and respond to cyber threats?",
                    answer: "Our AI-powered systems detect threats in real-time with automated responses occurring within 1 second. For complex threats requiring human analysis, our 24/7 SOC team responds within 15 minutes. We maintain a 99.9% threat detection rate and can stop most attacks before they cause any damage."
                  },
                  {
                    question: "What types of businesses do you protect?",
                    answer: "We protect businesses of all sizes across industries including healthcare, finance, manufacturing, retail, and professional services. Our solutions scale from small businesses with 10 employees to large enterprises with 10,000+ users, with customized security strategies for each industry's specific compliance and risk requirements."
                  },
                  {
                    question: "How do you ensure compliance with industry regulations?",
                    answer: "We maintain expertise in major compliance frameworks including HIPAA, PCI DSS, SOC 2, GDPR, and SOX. Our compliance automation tools continuously monitor your security posture, generate required reports, and alert you to any compliance gaps. We also provide audit support and documentation to help you pass regulatory inspections."
                  },
                  {
                    question: "What happens if my business suffers a security breach?",
                    answer: "We provide comprehensive incident response services including immediate threat containment, forensic analysis, system recovery, and regulatory notification assistance. Our cyber insurance partnerships can help cover breach-related costs, and we work with legal teams to ensure proper disclosure and compliance with breach notification laws."
                  },
                  {
                    question: "How much do cybersecurity services cost?",
                    answer: "Our pricing varies based on your business size, industry, and security requirements. We offer flexible plans starting from $299/month for small businesses up to custom enterprise packages. Most clients save 40-60% compared to hiring in-house security staff while receiving 24/7 expert protection."
                  },
                  {
                    question: "Can you work with our existing IT infrastructure?",
                    answer: "Yes, our solutions integrate seamlessly with existing systems including Windows, Mac, Linux environments, cloud platforms (AWS, Azure, Google Cloud), and popular business applications. We perform a thorough assessment to ensure compatibility and can work around any constraints while strengthening your overall security posture."
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

        
        {/* Call to Action Section */}
        <section className="relative z-10">
          <div className="relative bg-slate-800 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img 
                src="/cyber-cta-bg.jpg" 
                alt="Cybersecurity Solutions Background"
                className="w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-black/75"></div>
            </div>
            
            <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-12 1.25xl:px-16 max-w-7xl pt-8 1366:pt-6 pb-8 1366:pb-6">
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
                  Partner With Leading <span className="text-[#f97316]">Cyber Security Experts</span> For Your Transformation Journey
                </h2>
                <p className="text-white/90 mb-10 text-lg leading-relaxed max-w-3xl mx-auto">
                  Connect with our cyber security specialists to accelerate your business growth. Get strategic guidance, technology insights, and implementation support from industry leaders in cyber security.
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