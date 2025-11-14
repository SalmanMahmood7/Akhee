"use client";

import PageLayout from "@/components/PageLayout";
import { Database, CheckCircle, BarChart3, Brain, TrendingUp, ArrowRight, Search, Palette, Wrench, Target, Eye, Zap, Users, Shield, Monitor, LineChart, PieChart, Activity, Settings, Code2, Server, Cloud, Box, Link, Cpu, Rocket, Plus, Minus } from "lucide-react";
import { useState } from "react";
import ServiceDetailModal from "@/components/ServiceDetailModal";
import { getTechnologyUrl } from "@/lib/technology-utils";

export default function AppliedDataAnalytics() {
  const [selectedService, setSelectedService] = useState(null);
  const [openFAQ, setOpenFAQ] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const servicesData = {
    advancedAnalytics: {
      title: "Advanced Analytics Solutions",
      description: "Transform raw data into powerful business insights",
      fullDescription: "Transform raw data into powerful business insights with comprehensive analytics platforms featuring real-time dashboards, predictive modeling, and custom reporting. Our advanced analytics solutions help you make data-driven decisions that accelerate growth and provide competitive advantage through intelligent data processing.",
      features: [
        {
          title: "Real-time Dashboards",
          description: "Interactive dashboards that provide live insights into your business metrics",
          icon: BarChart3
        },
        {
          title: "Predictive Analytics",
          description: "Machine learning models that forecast future trends and behaviors",
          icon: BarChart3
        },
        {
          title: "Custom Reporting",
          description: "Tailored reports that deliver insights specific to your business needs",
          icon: Brain
        }
      ],
      benefits: [
        {
          title: "Data-Driven Decisions",
          description: "Make informed decisions based on comprehensive data analysis",
          metric: "85% better decision accuracy"
        },
        {
          title: "Operational Efficiency",
          description: "Streamline operations through automated analytics and insights",
          metric: "40% efficiency improvement"
        }
      ],
      process: [
        {
          step: 1,
          title: "Data Analysis",
          description: "Analyze your data sources and identify analytics opportunities",
          duration: "1-2 weeks"
        },
        {
          step: 2,
          title: "Dashboard Development",
          description: "Create real-time dashboards and reporting systems",
          duration: "2-3 weeks"
        },
        {
          step: 3,
          title: "Predictive Modeling",
          description: "Develop and train predictive analytics models",
          duration: "3-4 weeks"
        },
        {
          step: 4,
          title: "Deployment & Training",
          description: "Deploy solutions and train your team",
          duration: "1-2 weeks"
        }
      ],
      technologies: ["Python", "R", "Tableau", "Power BI", "SQL", "Apache Spark", "TensorFlow", "Jupyter"],
      caseStudy: {
        client: "Retail Analytics Corp",
        challenge: "Disconnected data sources preventing comprehensive business insights",
        solution: "Integrated analytics platform with real-time dashboards and predictive models",
        results: [
          "25% increase in sales through data-driven insights",
          "30% reduction in inventory costs",
          "Real-time visibility into business performance",
          "Predictive analytics for demand forecasting"
        ]
      },
      deliverables: [
        "Real-time analytics dashboards",
        "Predictive modeling solutions",
        "Custom reporting systems",
        "Data visualization tools",
        "Analytics training program",
        "Ongoing support and optimization"
      ]
    },
    machineLearning: {
      title: "Machine Learning Implementation",
      description: "End-to-end ML solutions to automate processes and enhance experiences",
      fullDescription: "End-to-end machine learning solutions that automate complex processes and enhance customer experiences through intelligent algorithms. Our ML experts develop custom models that learn and adapt to your business needs, providing automated decision-making and intelligent process optimization.",
      features: [
        {
          title: "Algorithm Development",
          description: "Custom machine learning algorithms tailored to your specific use cases",
          icon: BarChart3
        },
        {
          title: "Model Training & Optimization",
          description: "Continuous model training and performance optimization for maximum accuracy",
          icon: BarChart3
        },
        {
          title: "AI Integration",
          description: "Seamless integration of AI capabilities into your existing systems",
          icon: BarChart3
        }
      ],
      benefits: [
        {
          title: "Process Automation",
          description: "Automate complex decision-making processes with intelligent algorithms",
          metric: "60% process automation"
        },
        {
          title: "Accuracy Improvement",
          description: "Enhance accuracy of predictions and classifications",
          metric: "95% prediction accuracy"
        }
      ],
      process: [
        {
          step: 1,
          title: "ML Strategy",
          description: "Define machine learning objectives and use cases",
          duration: "1-2 weeks"
        },
        {
          step: 2,
          title: "Data Preparation",
          description: "Clean and prepare datasets for machine learning",
          duration: "2-3 weeks"
        },
        {
          step: 3,
          title: "Model Development",
          description: "Build and train custom ML algorithms",
          duration: "4-6 weeks"
        },
        {
          step: 4,
          title: "Integration & Optimization",
          description: "Integrate models and optimize performance",
          duration: "2-3 weeks"
        }
      ],
      technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "AWS SageMaker", "Azure ML", "Python", "Docker", "Kubernetes"],
      caseStudy: {
        client: "FinTech Solutions Ltd",
        challenge: "Manual fraud detection causing delays and missed threats",
        solution: "AI-powered fraud detection system with real-time threat analysis",
        results: [
          "70% reduction in false positives",
          "98% fraud detection accuracy",
          "Real-time threat analysis",
          "Automated decision-making processes"
        ]
      },
      deliverables: [
        "Custom ML algorithms",
        "Trained and optimized models",
        "AI integration systems",
        "Performance monitoring tools",
        "Model documentation",
        "Ongoing model maintenance"
      ]
    },
    businessIntelligence: {
      title: "Business Intelligence Systems",
      description: "Comprehensive BI systems with consolidated dashboards and KPI monitoring",
      fullDescription: "Comprehensive business intelligence systems with consolidated dashboards, KPI monitoring, and executive reporting that provide 360-degree visibility into your business performance. Our BI solutions integrate data from multiple sources to deliver unified insights for strategic decision-making.",
      features: [
        {
          title: "Data Integration",
          description: "Consolidate data from multiple sources into unified BI platform",
          icon: BarChart3
        },
        {
          title: "Interactive Dashboards",
          description: "Dynamic dashboards that allow drill-down analysis and exploration",
          icon: Brain
        },
        {
          title: "Executive Reporting",
          description: "High-level reports designed for executive decision-making",
          icon: BarChart3
        }
      ],
      benefits: [
        {
          title: "360-Degree Visibility",
          description: "Complete view of business performance across all departments",
          metric: "100% data visibility"
        },
        {
          title: "Strategic Insights",
          description: "Executive-level insights that drive strategic planning",
          metric: "50% faster strategic decisions"
        }
      ],
      process: [
        {
          step: 1,
          title: "BI Assessment",
          description: "Evaluate current data sources and BI requirements",
          duration: "1-2 weeks"
        },
        {
          step: 2,
          title: "Data Integration",
          description: "Consolidate data from multiple sources",
          duration: "2-4 weeks"
        },
        {
          step: 3,
          title: "Dashboard Creation",
          description: "Build interactive dashboards and KPI monitoring",
          duration: "3-4 weeks"
        },
        {
          step: 4,
          title: "Reporting Automation",
          description: "Implement automated reporting and alerts",
          duration: "2-3 weeks"
        }
      ],
      technologies: ["Power BI", "Tableau", "QlikView", "SQL Server", "Oracle", "SAP", "Looker", "Snowflake"],
      caseStudy: {
        client: "Manufacturing Excellence Inc",
        challenge: "Siloed data preventing comprehensive performance analysis",
        solution: "Enterprise BI platform with integrated dashboards and automated reporting",
        results: [
          "80% improvement in operational visibility",
          "90% reduction in reporting time",
          "360-degree business performance view",
          "Executive-level strategic insights"
        ]
      },
      deliverables: [
        "Integrated BI platform",
        "Interactive dashboards",
        "KPI monitoring systems",
        "Automated reporting",
        "Executive summaries",
        "User training and support"
      ]
    },
    dataEngineering: {
      title: "Data Engineering & ETL Solutions",
      description: "Robust data pipeline solutions for efficient data processing",
      fullDescription: "Robust data engineering solutions that design efficient pipelines, extract data from multiple sources, transform it according to business rules, and load it into unified systems. Our ETL solutions ensure data quality, consistency, and availability for advanced analytics and business intelligence.",
      features: [
        {
          title: "Data Pipeline Design",
          description: "Scalable and efficient data pipelines for automated data processing",
          icon: BarChart3
        },
        {
          title: "ETL Processes",
          description: "Extract, transform, and load processes optimized for performance",
          icon: BarChart3
        },
        {
          title: "Data Warehousing",
          description: "Modern data warehouse solutions for centralized data storage",
          icon: BarChart3
        }
      ],
      benefits: [
        {
          title: "Data Quality",
          description: "Ensure high-quality, consistent data across all systems",
          metric: "99.9% data accuracy"
        },
        {
          title: "Processing Speed",
          description: "Fast data processing for real-time analytics and reporting",
          metric: "10x faster processing"
        }
      ],
      process: [
        {
          step: 1,
          title: "Data Architecture",
          description: "Design scalable data pipeline architecture",
          duration: "1-2 weeks"
        },
        {
          step: 2,
          title: "ETL Development",
          description: "Build extract, transform, and load processes",
          duration: "3-4 weeks"
        },
        {
          step: 3,
          title: "Data Warehousing",
          description: "Implement modern data warehouse solutions",
          duration: "2-3 weeks"
        },
        {
          step: 4,
          title: "Quality & Monitoring",
          description: "Implement data quality and monitoring systems",
          duration: "1-2 weeks"
        }
      ],
      technologies: ["Apache Airflow", "Apache Spark", "Kafka", "Snowflake", "AWS Redshift", "Azure Synapse", "dbt", "Great Expectations"],
      caseStudy: {
        client: "E-commerce Platform Pro",
        challenge: "Slow data processing affecting real-time customer insights",
        solution: "Modern ETL pipeline with real-time data streaming and automated quality checks",
        results: [
          "95% reduction in data processing time",
          "Real-time customer personalization",
          "Improved data quality and consistency",
          "Scalable data infrastructure"
        ]
      },
      deliverables: [
        "Scalable data pipelines",
        "ETL automation systems",
        "Modern data warehouse",
        "Data quality monitoring",
        "Real-time processing capabilities",
        "Performance optimization"
      ]
    }
  };

  const services = [
    {
      icon: Brain,
      title: "Advanced Analytics Solutions",
      description: "Comprehensive data analytics platforms with real-time insights and predictive modeling that transform raw data into actionable business intelligence.",
      features: ["Real-time Dashboards", "Predictive Analytics", "Custom Reporting", "Data Visualization"]
    },
    {
      icon: BarChart3,
      title: "Machine Learning Implementation", 
      description: "End-to-end ML solutions to automate processes, enhance customer experiences, and drive intelligent decision-making across your organization.",
      features: ["Algorithm Development", "Model Training", "Performance Optimization", "AI Integration"]
    },
    {
      icon: BarChart3,
      title: "Business Intelligence Systems",
      description: "Consolidated dashboards and KPI monitoring systems that provide comprehensive insights for informed strategic decision making.",
      features: ["Data Integration", "Interactive Dashboards", "KPI Monitoring", "Executive Reporting"]
    },
    {
      icon: BarChart3,
      title: "Data Engineering & ETL",
      description: "Robust data pipeline solutions that extract, transform, and load data efficiently from multiple sources into unified systems.",
      features: ["Data Pipeline Design", "ETL Processes", "Data Warehousing", "Real-time Processing"]
    }
  ];

  const technologies = [
    { 
      name: "Python & R", 
      category: "Analytics",
      icon: Database,
      color: "bg-[#1e3a8a]",
      description: "Advanced statistical computing and data analysis"
    },
    { 
      name: "TensorFlow & PyTorch", 
      category: "Machine Learning",
      icon: BarChart3,
      color: "bg-[#f97316]",
      description: "Deep learning and neural network frameworks"
    },
    { 
      name: "Apache Spark & Kafka", 
      category: "Big Data",
      icon: BarChart3,
      color: "bg-[#1e3a8a]",
      description: "Large-scale data processing and streaming"
    },
    { 
      name: "Tableau & Power BI", 
      category: "Visualization",
      icon: Brain,
      color: "bg-[#f97316]",
      description: "Interactive dashboards and data visualization"
    },
    { 
      name: "AWS & Azure ML", 
      category: "Cloud Analytics",
      icon: BarChart3,
      color: "bg-[#1e3a8a]",
      description: "Cloud-based machine learning platforms"
    },
    { 
      name: "Elasticsearch & MongoDB", 
      category: "Data Storage",
      icon: BarChart3,
      color: "bg-[#f97316]",
      description: "NoSQL databases and search engines"
    },
    { 
      name: "Docker & Kubernetes", 
      category: "MLOps",
      icon: BarChart3,
      color: "bg-[#1e3a8a]",
      description: "Containerized ML model deployment"
    },
    { 
      name: "Jupyter & Apache Airflow", 
      category: "Development",
      icon: BarChart3,
      color: "bg-[#f97316]",
      description: "Data science notebooks and workflow orchestration"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Data Discovery & Assessment",
      description: "We analyze your data sources, quality, and business objectives to create a comprehensive analytics strategy.",
      icon: BarChart3,
      color: "bg-[#1e3a8a]",
      features: ["Data Audit", "Business Requirements", "Feasibility Analysis", "ROI Planning"]
    },
    {
      step: "02", 
      title: "Data Engineering & Preparation",
      description: "Building robust data pipelines and preparing clean, structured datasets for advanced analytics and modeling.",
      icon: BarChart3,
      color: "bg-[#f97316]",
      features: ["Data Cleaning", "ETL Development", "Data Integration", "Quality Assurance"]
    },
    {
      step: "03",
      title: "Analytics & Model Development",
      description: "Developing sophisticated analytics models and machine learning algorithms tailored to your business needs.",
      icon: BarChart3,
      color: "bg-[#1e3a8a]",
      features: ["Statistical Modeling", "ML Algorithms", "Model Training", "Validation Testing"]
    },
    {
      step: "04",
      title: "Deployment & Optimization",
      description: "Deploying analytics solutions with continuous monitoring and optimization for maximum business impact.",
      icon: BarChart3,
      color: "bg-[#f97316]",
      features: ["Model Deployment", "Performance Monitoring", "Continuous Learning", "Scalable Infrastructure"]
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
              src="/data-analytics-background.jpg" 
              alt="Data & Analytics Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/75"></div>
          </div>

          <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-12 max-w-6xl">
            <div className="text-center space-y-8 pt-12">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8">
                Applied <span className="text-[#f97316]">Data & Analytics</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Transform raw data into actionable intelligence that drives business growth through advanced analytics, machine learning, and AI-powered insights. From predictive modeling to real-time dashboards, we unlock the full potential of your data.
              </p>
              
              <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="inline-flex items-center px-8 py-4 bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold rounded-full transition-all duration-300">
                  Get Data Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a href="/work" className="inline-flex items-center px-8 py-4 border-2 border-[#f97316] text-[#f97316] hover:bg-[#f97316] hover:text-white font-semibold rounded-full transition-all duration-300">
                  View Analytics Portfolio
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Unified Background Container for All Sections */}
        <div className="bg-gradient-to-br from-blue-50 via-white to-orange-50 overflow-hidden">
        
        {/* Services Section */}
        <section className="relative z-10" style={{paddingTop: '30px', paddingBottom: '30px'}}>
          <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
            
            {/* Header Section */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl 1366:text-4xl font-bold mb-6">
                <span className="text-[#f97316]">Transform Your Business </span>
                <span className="text-[#1e3a8a]">With Our Advanced Data Analytics Services</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                As a leading data analytics service provider, we believe "Your Data Success = Our Success." We analyze your business requirements and deliver comprehensive analytics solutions that drive measurable growth and competitive advantage.
              </p>
            </div>

            {/* Services Section - Side by Side Layout */}
            <div className="space-y-16">
              
              {/* Service 1 - Advanced Analytics Solutions */}
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1">
                  <div className="flex items-center mb-4">
                    <div className="w-14 h-14 mr-4 rounded-full bg-[#1e3a8a] flex items-center justify-center">
                      <BarChart3 className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">
                      <span className="text-[#1e3a8a]">Advanced Analytics </span>
                      <span className="text-[#f97316]">Solutions</span>
                    </h3>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    Transform raw data into powerful business insights with real-time dashboards, predictive modeling, and custom reporting. Our advanced analytics solutions help you make data-driven decisions that accelerate growth.
                  </p>
                  <div className="flex flex-wrap gap-3 mb-6">
                    <span className="px-4 py-2 bg-blue-100 text-[#1e3a8a] rounded-full text-sm font-medium">Real-time Dashboards</span>
                    <span className="px-4 py-2 bg-blue-100 text-[#1e3a8a] rounded-full text-sm font-medium">Predictive Analytics</span>
                    <span className="px-4 py-2 bg-blue-100 text-[#1e3a8a] rounded-full text-sm font-medium">Custom Reporting</span>
                  </div>
                  <button 
                    onClick={() => handleLearnMore('advancedAnalytics')}
                    className="text-[#f97316] font-semibold flex items-center group/btn"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="relative h-72 rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src="/data-analytics-hero-bg.jpg"
                      alt="Advanced Analytics Dashboard"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Service 2 - Machine Learning Implementation */}
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="relative h-72 rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src="/data-visualization.jpg"
                      alt="Machine Learning Models"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-14 h-14 mr-4 rounded-full bg-[#f97316] flex items-center justify-center">
                      <Brain className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">
                      <span className="text-[#1e3a8a]">Machine Learning </span>
                      <span className="text-[#f97316]">Implementation</span>
                    </h3>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    End-to-end machine learning solutions that automate complex processes and enhance customer experiences through intelligent algorithms. Our ML experts develop custom models that learn and adapt to your business needs.
                  </p>
                  <div className="flex flex-wrap gap-3 mb-6">
                    <span className="px-4 py-2 bg-orange-100 text-[#f97316] rounded-full text-sm font-medium">Algorithm Development</span>
                    <span className="px-4 py-2 bg-orange-100 text-[#f97316] rounded-full text-sm font-medium">Model Training</span>
                    <span className="px-4 py-2 bg-orange-100 text-[#f97316] rounded-full text-sm font-medium">AI Integration</span>
                  </div>
                  <button 
                    onClick={() => handleLearnMore('machineLearning')}
                    className="text-[#f97316] font-semibold flex items-center group/btn"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Service 3 - Business Intelligence Systems */}
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1">
                  <div className="flex items-center mb-4">
                    <div className="w-14 h-14 mr-4 rounded-full bg-[#1e3a8a] flex items-center justify-center">
                      <TrendingUp className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">
                      <span className="text-[#1e3a8a]">Business Intelligence </span>
                      <span className="text-[#f97316]">Systems</span>
                    </h3>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    Comprehensive business intelligence systems with consolidated dashboards, KPI monitoring, and executive reporting that provide 360-degree visibility into your business performance.
                  </p>
                  <div className="flex flex-wrap gap-3 mb-6">
                    <span className="px-4 py-2 bg-blue-100 text-[#1e3a8a] rounded-full text-sm font-medium">Data Integration</span>
                    <span className="px-4 py-2 bg-blue-100 text-[#1e3a8a] rounded-full text-sm font-medium">KPI Monitoring</span>
                    <span className="px-4 py-2 bg-blue-100 text-[#1e3a8a] rounded-full text-sm font-medium">Executive Reporting</span>
                  </div>
                  <button 
                    onClick={() => handleLearnMore('businessIntelligence')}
                    className="text-[#f97316] font-semibold flex items-center group/btn"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="relative h-72 rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src="/data-monitoring.jpg"
                      alt="Business Intelligence Dashboard"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Service 4 - Data Engineering & ETL */}
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="relative h-72 rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src="/data-intelligence.jpg"
                      alt="Data Engineering Pipeline"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-14 h-14 mr-4 rounded-full bg-[#f97316] flex items-center justify-center">
                      <Database className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">
                      <span className="text-[#1e3a8a]">Data Engineering </span>
                      <span className="text-[#f97316]">& </span>
                      <span className="text-[#1e3a8a]">ETL Solutions</span>
                    </h3>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    Robust data engineering solutions that design efficient pipelines, extract data from multiple sources, transform it according to business rules, and load it into unified systems.
                  </p>
                  <div className="flex flex-wrap gap-3 mb-6">
                    <span className="px-4 py-2 bg-orange-100 text-[#f97316] rounded-full text-sm font-medium">Data Pipelines</span>
                    <span className="px-4 py-2 bg-orange-100 text-[#f97316] rounded-full text-sm font-medium">ETL Processes</span>
                    <span className="px-4 py-2 bg-orange-100 text-[#f97316] rounded-full text-sm font-medium">Data Warehousing</span>
                  </div>
                  <button 
                    onClick={() => handleLearnMore('dataEngineering')}
                    className="text-[#f97316] font-semibold flex items-center group/btn"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
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
                <span className="text-[#1e3a8a]">Advanced Analytics </span>
                <span className="text-[#f97316]">Technologies</span>
              </h2>
              
              <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We leverage cutting-edge technologies and frameworks to build robust, scalable, and intelligent analytics solutions.
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
                  <div className={`h-1 bg-gradient-to-r ${tech.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Analytics Process */}
        <section className="relative z-10" style={{paddingTop: '30px', paddingBottom: '30px'}}>
          <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
            <div className="text-center space-y-8 mb-10">
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="text-[#1e3a8a]">Our Analytics </span>
                <span className="text-[#f97316]">Process</span>
              </h2>
              
              <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                A proven methodology that transforms raw data into actionable insights through systematic analysis and intelligent processing.
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
                        <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
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
                Common questions about data analytics services and how we can help extract insights from your data
              </p>
            </div>

            {/* FAQ Accordion */}
            <div className="space-y-3 sm:space-y-4">
              {[
                {
                  question: "What types of data analytics services do you provide?",
                  answer: "We offer comprehensive data analytics services including business intelligence, predictive analytics, data visualization, statistical analysis, machine learning models, data mining, performance dashboards, and custom analytics solutions. Our services cover the entire data journey from collection to actionable insights."
                },
                {
                  question: "How long does it take to implement a data analytics solution?",
                  answer: "Implementation timelines vary based on complexity and data sources. Simple dashboard projects can be completed in 4-6 weeks, while comprehensive analytics platforms may take 12-20 weeks. We often deliver initial insights within the first few weeks using agile methodology and iterative development."
                },
                {
                  question: "Can you work with our existing data sources and systems?",
                  answer: "Yes, we specialize in integrating with diverse data sources including databases, CRM systems, ERP platforms, spreadsheets, APIs, cloud storage, and real-time data streams. We ensure seamless data integration while maintaining data quality and security throughout the process."
                },
                {
                  question: "What tools and technologies do you use for data analytics?",
                  answer: "We use industry-leading tools including Python, R, SQL, Tableau, Power BI, Apache Spark, TensorFlow, AWS Analytics services, Google Cloud Analytics, and Azure Analytics. Our technology selection is based on your specific requirements, existing infrastructure, and long-term scalability needs."
                },
                {
                  question: "How do you ensure data security and privacy?",
                  answer: "Data security is our top priority. We implement encryption at rest and in transit, role-based access controls, data anonymization when needed, secure data pipelines, and compliance with regulations like GDPR, HIPAA, and SOX. We also conduct regular security audits and maintain strict data governance practices."
                },
                {
                  question: "Do you provide training and ongoing support for analytics solutions?",
                  answer: "Absolutely. We provide comprehensive training for your team including hands-on workshops, documentation, and best practices. Our ongoing support includes system maintenance, performance optimization, model updates, troubleshooting, and strategic guidance to maximize the value of your analytics investment."
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
                src="/data-analytics-cta-bg.jpg" 
                alt="Data Analytics Team"
                className="w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-black/75"></div>
            </div>
            
            <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-12 1.25xl:px-16 max-w-7xl py-16">
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
                  Partner With Leading <span className="text-[#f97316]">Data Analytics Experts</span> For Your Transformation Journey
                </h2>
                <p className="text-white/90 mb-10 text-lg leading-relaxed max-w-3xl mx-auto">
                  Connect with our data analytics specialists to accelerate your business growth. Get strategic guidance, technology insights, and implementation support from industry leaders in data analytics.
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