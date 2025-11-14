"use client";

import PageLayout from "@/components/PageLayout";
import { ArrowLeft, CheckCircle, Star, TrendingUp, Users, Shield, Zap, Clock, Globe, Database, Code2, Brain, BarChart3, Server } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// Technology data structure
const technologiesData = {
  "digital-strategy-tools"{
    title"Digital Strategy Tools",
    category"Strategic Planning",
    description"Advanced strategic planning and roadmapping platforms that enable organizations to develop comprehensive digital transformation strategies.",
    fullDescription"Digital strategy tools are essential platforms that help organizations navigate their digital transformation journey through systematic planning, analysis, and roadmapping. These tools provide frameworks for assessing digital maturity, identifying opportunities, and creating actionable implementation plans.",
    features[
      {
        title"Strategic Assessment",
        description"Comprehensive evaluation of current digital capabilities and market position",
        icon
      },
      {
        title"Roadmap Creation",
        description"Visual timeline development with milestones, dependencies, and resource allocation",
        icon
      },
      {
        title"ROI Analysis",
        description"Financial modeling and return on investment calculations for digital initiatives",
        icon
      },
      {
        title"Stakeholder Alignment",
        description"Collaborative planning tools that ensure organizational buy-in and commitment",
        icon
      }
    ],
    benefits[
      "Accelerated decision-making process by 60%",
      "Improved strategic alignment across departments",
      "Enhanced visibility into transformation progress",
      "Reduced implementation risks through proper planning",
      "Better resource allocation and budget management"
    ],
    useCases[
      {
        title"Enterprise Digital Transformation",
        description"Large organizations planning comprehensive digital overhauls",
        industry"Enterprise"
      },
      {
        title"Market Expansion Strategy",
        description"Companies entering new digital markets or channels",
        industry"Retail & E-commerce"
      },
      {
        title"Technology Modernization",
        description"Organizations upgrading legacy systems and processes",
        industry"Manufacturing"
      }
    ],
    technologies["Microsoft Visio", "Miro", "Lucidchart", "Tableau", "Power BI", "SWOT Analysis Frameworks"],
    caseStudy{
      client"Fortune 500 Manufacturing Company",
      challenge"Needed comprehensive digital transformation strategy to compete in modern marketplace",
      solution"Implemented strategic planning platform with custom assessment frameworks",
      results[
        "Reduced planning time from 6 months to 6 weeks",
        "Achieved 95% stakeholder alignment on digital initiatives",
        "Identified $5M in cost optimization opportunities",
        "Accelerated time-to-market by 40% for new digital products"
      ]
    },
    implementation{
      phases[
        {
          title"Assessment & Discovery",
          duration"2-3 weeks",
          description"Current state analysis and strategic goal definition"
        },
        {
          title"Strategy Development",
          duration"3-4 weeks", 
          description"Comprehensive digital strategy creation with stakeholder input"
        },
        {
          title"Roadmap Planning",
          duration"2-3 weeks",
          description"Detailed implementation roadmap with timelines and resources"
        },
        {
          title"Execution Support",
          duration"Ongoing",
          description"Continuous monitoring and strategy refinement"
        }
      ]
    },
    relatedServices["Digital Advisory", "Technology Assessment", "Change Management"]
  },
  "analytics-bi-platforms"{
    title"Analytics & BI Platforms", 
    category"Business Intelligence",
    description"Comprehensive business intelligence and analytics solutions that transform raw data into actionable insights for strategic decision-making.",
    fullDescription"Analytics and Business Intelligence platforms are powerful tools that help organizations collect, process, and analyze vast amounts of data to uncover trends, patterns, and insights. These platforms enable data-driven decision making across all levels of an organization.",
    features[
      {
        title"Real-time Analytics",
        description"Live data processing and visualization for immediate insights",
        icon
      },
      {
        title"Interactive Dashboards", 
        description"Customizable visual interfaces for data exploration and monitoring",
        icon
      },
      {
        title"Predictive Modeling",
        description"Advanced algorithms for forecasting and trend prediction",
        icon
      },
      {
        title"Data Integration",
        description"Seamless connection to multiple data sources and systems",
        icon
      }
    ],
    benefits[
      "Improved decision-making speed by 75%",
      "Enhanced data accuracy and reliability",
      "Reduced manual reporting time by 80%",
      "Better understanding of customer behavior patterns",
      "Increased operational efficiency through data insights"
    ],
    useCases[
      {
        title"Sales Performance Analysis",
        description"Track sales metrics, pipeline performance, and revenue forecasting",
        industry"Sales & Marketing"
      },
      {
        title"Customer Behavior Analytics",
        description"Analyze customer journeys, preferences, and lifetime value",
        industry"Retail & E-commerce"
      },
      {
        title"Operational Intelligence",
        description"Monitor KPIs, track performance, and optimize business processes",
        industry"Manufacturing"
      }
    ],
    technologies["Power BI", "Tableau", "Qlik Sense", "Google Analytics", "Microsoft Azure Analytics", "SQL Server Reporting Services"],
    caseStudy{
      client"Global Retail Chain",
      challenge"Needed unified view of sales, inventory, and customer data across 500+ locations",
      solution"Implemented comprehensive BI platform with real-time dashboards and automated reporting",
      results[
        "Reduced reporting time from days to minutes",
        "Improved inventory management efficiency by 35%",
        "Increased sales conversion rates by 22%",
        "Enhanced customer satisfaction through data-driven personalization"
      ]
    },
    implementation{
      phases[
        {
          title"Data Assessment",
          duration"1-2 weeks",
          description"Evaluation of existing data sources and quality assessment"
        },
        {
          title"Platform Setup",
          duration"2-4 weeks",
          description"BI platform configuration and data integration"
        },
        {
          title"Dashboard Development",
          duration"3-5 weeks",
          description"Custom dashboard and report creation"
        },
        {
          title"Training & Deployment",
          duration"2-3 weeks",
          description"User training and system rollout"
        }
      ]
    },
    relatedServices["Applied Data Analytics", "Digital Advisory", "Cloud Services"]
  },
  "cloud-infrastructure"{
    title"Cloud Infrastructure",
    category"Technology",
    description"Scalable cloud computing platforms that enable flexible, secure, and cost-effective digital transformation.",
    fullDescription"Cloud infrastructure provides the foundation for modern digital transformation by offering scalable, secure, and cost-effective computing resources. Our cloud solutions enable organizations to modernize their IT infrastructure, improve agility, and reduce operational costs.",
    features[
      {
        title"Scalable Computing",
        description"Auto-scaling resources based on demand to optimize performance and costs",
        icon
      },
      {
        title"High Availability", 
        description"Redundant infrastructure ensuring 99.99% uptime and reliability",
        icon
      },
      {
        title"Security & Compliance",
        description"Enterprise-grade security with compliance certifications",
        icon
      },
      {
        title"Cost Optimization",
        description"Pay-as-you-use model with intelligent resource management",
        icon
      }
    ],
    benefits[
      "Reduced infrastructure costs by up to 50%",
      "Improved scalability and flexibility", 
      "Enhanced disaster recovery capabilities",
      "Faster deployment and time-to-market",
      "Global reach and availability"
    ],
    useCases[
      {
        title"Application Hosting",
        description"Host web applications and services with high availability",
        industry"Technology"
      },
      {
        title"Data Storage & Backup",
        description"Secure data storage with automated backup solutions", 
        industry"Enterprise"
      },
      {
        title"Development & Testing",
        description"Flexible environments for development and testing",
        industry"Software Development"
      }
    ],
    technologies["Amazon AWS", "Microsoft Azure", "Google Cloud Platform", "Docker", "Kubernetes", "Terraform"],
    caseStudy{
      client"Global Manufacturing Company",
      challenge"Legacy on-premises infrastructure limiting growth and increasing costs",
      solution"Comprehensive cloud migration with hybrid architecture and automation",
      results[
        "Reduced infrastructure costs by 45%",
        "Improved application performance by 60%", 
        "Enhanced disaster recovery capabilities",
        "Increased development deployment speed by 80%"
      ]
    },
    implementation{
      phases[
        {
          title"Cloud Assessment",
          duration"1-2 weeks",
          description"Evaluate current infrastructure and cloud readiness"
        },
        {
          title"Migration Planning", 
          duration"2-3 weeks",
          description"Design cloud architecture and migration strategy"
        },
        {
          title"Migration Execution",
          duration"4-8 weeks",
          description"Execute migration with minimal downtime"
        },
        {
          title"Optimization",
          duration"Ongoing",
          description"Continuous monitoring and cost optimization"
        }
      ]
    },
    relatedServices["Cloud Services", "Digital Advisory", "Managed IT Services"]
  },
  "process-automation"{
    title"Process Automation",
    category"Efficiency", 
    description"Workflow automation and optimization tools that streamline business processes and improve operational efficiency.",
    fullDescription"Process automation technologies help organizations eliminate manual, repetitive tasks while improving accuracy and efficiency. Our automation solutions integrate with existing systems to create seamless, intelligent workflows.",
    features[
      {
        title"Workflow Design",
        description"Visual workflow builder for creating complex automation processes",
        icon
      },
      {
        title"System Integration",
        description"Seamless integration with existing business applications",
        icon
      },
      {
        title"Rule Engine",
        description"Intelligent decision-making based on business rules", 
        icon
      },
      {
        title"Real-time Monitoring",
        description"Live monitoring and reporting of automated processes",
        icon
      }
    ],
    benefits[
      "Reduced processing time by up to 80%",
      "Improved accuracy and consistency",
      "Lower operational costs",
      "Enhanced employee productivity",
      "Better compliance and audit trails"
    ],
    useCases[
      {
        title"Invoice Processing",
        description"Automated invoice approval and payment workflows",
        industry"Finance"
      },
      {
        title"Customer Onboarding",
        description"Streamlined customer registration and verification processes",
        industry"Banking"
      },
      {
        title"HR Processes",
        description"Automated employee onboarding and performance reviews",
        industry"Human Resources"
      }
    ],
    technologies["Microsoft Power Automate", "UiPath", "Blue Prism", "Automation Anywhere", "Zapier", "Microsoft Logic Apps"],
    caseStudy{
      client"Financial Services Company",
      challenge"Manual loan processing taking 3-5 days with high error rates",
      solution"Implemented end-to-end loan processing automation with intelligent document processing",
      results[
        "Reduced processing time from days to hours",
        "Decreased error rates by 95%",
        "Improved customer satisfaction scores by 40%",
        "Freed up 60% of staff time for higher-value activities"
      ]
    },
    implementation{
      phases[
        {
          title"Process Analysis",
          duration"1-2 weeks",
          description"Analyze current processes and identify automation opportunities"
        },
        {
          title"Solution Design",
          duration"2-3 weeks", 
          description"Design automated workflows and integration points"
        },
        {
          title"Development & Testing",
          duration"3-6 weeks",
          description"Build and test automation solutions"
        },
        {
          title"Deployment & Support",
          duration"1-2 weeks",
          description"Deploy solutions and provide user training"
        }
      ]
    },
    relatedServices["Digital Advisory", "Application Development", "Managed IT Services"]
  },
  "digital-security"{
    title"Digital Security",
    category"Protection",
    description"Cybersecurity and data protection solutions that safeguard digital assets and ensure business continuity.",
    fullDescription"Digital security solutions protect organizations from cyber threats through comprehensive security frameworks, advanced threat detection, and proactive defense mechanisms. Our security approach covers people, processes, and technology.",
    features[
      {
        title"Threat Detection",
        description"Advanced AI-powered threat detection and response systems",
        icon
      },
      {
        title"Identity Management",
        description"Secure identity and access management solutions",
        icon
      },
      {
        title"Data Protection",
        description"Encryption and data loss prevention technologies",
        icon
      },
      {
        title"Compliance Management",
        description"Automated compliance monitoring and reporting",
        icon
      }
    ],
    benefits[
      "99.9% threat detection accuracy",
      "Reduced security incidents by 75%",
      "Improved compliance posture",
      "Faster incident response times",
      "Enhanced business continuity"
    ],
    useCases[
      {
        title"Endpoint Protection",
        description"Secure all devices and endpoints across the organization",
        industry"Enterprise"
      },
      {
        title"Data Privacy",
        description"Protect sensitive customer and business data",
        industry"Healthcare"
      },
      {
        title"Network Security",
        description"Secure network infrastructure and communications",
        industry"Financial Services"
      }
    ],
    technologies["Microsoft Sentinel", "CrowdStrike", "Palo Alto Networks", "Fortinet", "Okta", "Azure Active Directory"],
    caseStudy{
      client"Healthcare Organization",
      challenge"Protecting patient data while meeting HIPAA compliance requirements",
      solution"Implemented comprehensive security framework with advanced threat protection",
      results[
        "Achieved 100% HIPAA compliance",
        "Reduced security incidents by 85%",
        "Improved threat detection time by 90%",
        "Enhanced patient data protection"
      ]
    },
    implementation{
      phases[
        {
          title"Security Assessment",
          duration"1-2 weeks",
          description"Comprehensive security posture evaluation"
        },
        {
          title"Strategy Development",
          duration"2-3 weeks",
          description"Create tailored security strategy and roadmap"
        },
        {
          title"Implementation",
          duration"4-8 weeks",
          description"Deploy security solutions and controls"
        },
        {
          title"Monitoring & Support",
          duration"Ongoing",
          description"24/7 security monitoring and incident response"
        }
      ]
    },
    relatedServices["Cyber Security", "Digital Advisory", "Managed IT Services"]
  },
  "collaboration-platforms"{
    title"Collaboration Platforms",
    category"Communication",
    description"Team collaboration and communication tools that enable seamless remote work and productivity.",
    fullDescription"Modern collaboration platforms integrate communication, file sharing, project management, and productivity tools to create unified digital workspaces. These solutions enable teams to work effectively regardless of location or device.",
    features[
      {
        title"Unified Communication",
        description"Integrated chat, video, and voice communication",
        icon
      },
      {
        title"Document Collaboration",
        description"Real-time document editing and sharing capabilities",
        icon
      },
      {
        title"Project Management",
        description"Built-in project planning and task management tools",
        icon
      },
      {
        title"Mobile Access",
        description"Full functionality across all devices and platforms",
        icon
      }
    ],
    benefits[
      "Improved team productivity by 40%",
      "Reduced email volume by 60%",
      "Enhanced remote work capabilities",
      "Better project visibility and tracking",
      "Streamlined decision-making processes"
    ],
    useCases[
      {
        title"Remote Teams",
        description"Enable effective collaboration for distributed teams",
        industry"Technology"
      },
      {
        title"Project Coordination",
        description"Coordinate complex projects with multiple stakeholders",
        industry"Construction"
      },
      {
        title"Knowledge Sharing",
        description"Create centralized knowledge bases and wikis",
        industry"Consulting"
      }
    ],
    technologies["Microsoft Teams", "Slack", "Zoom", "Asana", "Trello", "Notion"],
    caseStudy{
      client"Global Consulting Firm",
      challenge"Coordinating projects across multiple time zones with inefficient communication",
      solution"Implemented integrated collaboration platform with project management features",
      results[
        "Improved project delivery time by 35%",
        "Enhanced client communication satisfaction",
        "Reduced meeting time by 50%",
        "Increased employee engagement scores"
      ]
    },
    implementation{
      phases[
        {
          title"Requirements Analysis",
          duration"1 week",
          description"Assess collaboration needs and current tools"
        },
        {
          title"Platform Setup",
          duration"2-3 weeks",
          description"Configure platform and integrate with existing systems"
        },
        {
          title"User Training",
          duration"2-3 weeks",
          description"Train users and establish best practices"
        },
        {
          title"Optimization",
          duration"Ongoing",
          description"Monitor usage and optimize workflows"
        }
      ]
    },
    relatedServices["Digital Advisory", "Managed IT Services", "Application Development"]
  },
  "ai-machine-learning"{
    title"AI & Machine Learning",
    category"Innovation",
    description"Artificial intelligence and machine learning solutions that enable intelligent automation and data-driven insights.",
    fullDescription"AI and Machine Learning technologies transform business operations by enabling intelligent automation, predictive analytics, and enhanced decision-making. Our AI solutions are designed to integrate seamlessly with existing business processes.",
    features[
      {
        title"Predictive Analytics",
        description"Advanced algorithms for forecasting and trend analysis",
        icon
      },
      {
        title"Natural Language Processing",
        description"Understanding and processing human language",
        icon
      },
      {
        title"Computer Vision",
        description"Automated image and video analysis capabilities",
        icon
      },
      {
        title"Intelligent Automation",
        description"AI-powered process automation and decision making",
        icon
      }
    ],
    benefits[
      "Improved decision accuracy by 85%",
      "Reduced operational costs by 30%",
      "Enhanced customer experience",
      "Automated complex processes",
      "Real-time insights and predictions"
    ],
    useCases[
      {
        title"Demand Forecasting",
        description"Predict customer demand and optimize inventory",
        industry"Retail"
      },
      {
        title"Fraud Detection",
        description"Identify fraudulent transactions in real-time",
        industry"Financial Services"
      },
      {
        title"Quality Control",
        description"Automated quality inspection using computer vision",
        industry"Manufacturing"
      }
    ],
    technologies["TensorFlow", "PyTorch", "Microsoft Azure AI", "Google Cloud AI", "Amazon SageMaker", "OpenAI"],
    caseStudy{
      client"E-commerce Platform",
      challenge"Needed personalized product recommendations to improve sales",
      solution"Implemented AI-powered recommendation engine with real-time learning",
      results[
        "Increased sales conversion by 45%",
        "Improved customer engagement by 60%",
        "Reduced cart abandonment by 25%",
        "Enhanced customer satisfaction scores"
      ]
    },
    implementation{
      phases[
        {
          title"Data Assessment",
          duration"1-2 weeks",
          description"Evaluate data quality and AI readiness"
        },
        {
          title"Model Development",
          duration"4-8 weeks",
          description"Develop and train AI models"
        },
        {
          title"Integration & Testing",
          duration"3-4 weeks",
          description"Integrate models with business systems"
        },
        {
          title"Deployment & Monitoring",
          duration"Ongoing",
          description"Deploy models and continuous performance monitoring"
        }
      ]
    },
    relatedServices["AI Smart Solutions", "Applied Data Analytics", "Digital Advisory"]
  },
  "digital-experience"{
    title"Digital Experience",
    category"Customer",
    description"Customer experience and engagement platforms that create seamless, personalized digital interactions.",
    fullDescription"Digital experience platforms enable organizations to create cohesive, personalized customer journeys across all digital touchpoints. These solutions integrate content management, personalization, and analytics to optimize customer engagement.",
    features[
      {
        title"Personalization Engine",
        description"AI-powered content and experience personalization",
        icon
      },
      {
        title"Omnichannel Integration",
        description"Consistent experience across all customer touchpoints",
        icon
      },
      {
        title"Real-time Analytics",
        description"Live customer behavior tracking and insights",
        icon
      },
      {
        title"Content Management",
        description"Dynamic content delivery and management",
        icon
      }
    ],
    benefits[
      "Increased customer satisfaction by 50%",
      "Improved conversion rates by 35%",
      "Enhanced customer retention",
      "Better brand consistency",
      "Reduced customer service costs"
    ],
    useCases[
      {
        title"E-commerce Personalization",
        description"Personalized shopping experiences and recommendations",
        industry"Retail"
      },
      {
        title"Digital Banking",
        description"Seamless digital banking experiences across channels",
        industry"Financial Services"
      },
      {
        title"Patient Portals",
        description"User-friendly healthcare portals and appointment systems",
        industry"Healthcare"
      }
    ],
    technologies["Adobe Experience Manager", "Sitecore", "Salesforce Experience Cloud", "Optimizely", "ContentStack", "Contentful"],
    caseStudy{
      client"Retail Chain",
      challenge"Fragmented customer experience across online and offline channels",
      solution"Implemented unified digital experience platform with personalization",
      results[
        "Unified customer data across all channels",
        "Increased online sales by 40%",
        "Improved customer satisfaction scores by 30%",
        "Enhanced brand loyalty and retention"
      ]
    },
    implementation{
      phases[
        {
          title"Experience Audit",
          duration"1-2 weeks",
          description"Assess current customer experience across touchpoints"
        },
        {
          title"Platform Design",
          duration"3-4 weeks",
          description"Design integrated experience architecture"
        },
        {
          title"Implementation",
          duration"6-10 weeks",
          description"Implement platform and integrate systems"
        },
        {
          title"Optimization",
          duration"Ongoing",
          description"Continuous testing and experience optimization"
        }
      ]
    },
    relatedServices["Digital Platforms", "Application Development", "Digital Advisory"]
  },
  // Applied Data Analytics Technologies
  "python-r"{
    title"Python & R",
    category"Analytics",
    description"Advanced statistical computing and data analysis programming languages for comprehensive data science workflows.",
    fullDescription"Python and R are the leading programming languages for data science, offering extensive libraries, statistical capabilities, and machine learning frameworks. These languages enable data scientists to perform complex analyses, build predictive models, and create sophisticated data visualizations.",
    features[
      {
        title"Statistical Analysis",
        description"Comprehensive statistical functions and hypothesis testing capabilities",
        icon
      },
      {
        title"Machine Learning Libraries",
        description"Extensive ML libraries including scikit-learn, pandas, and numpy",
        icon
      },
      {
        title"Data Visualization",
        description"Advanced plotting and visualization capabilities with matplotlib and ggplot",
        icon3
      },
      {
        title"Big Data Integration",
        description"Seamless integration with big data platforms and databases",
        icon
      }
    ],
    benefits[
      "Faster data analysis and model development",
      "Access to extensive open-source libraries",
      "Strong community support and documentation",
      "Cross-platform compatibility",
      "Integration with enterprise systems"
    ],
    useCases[
      {
        title"Predictive Analytics",
        description"Build forecasting models for business planning",
        industry"Finance"
      },
      {
        title"Customer Segmentation",
        description"Analyze customer behavior and create targeted segments",
        industry"Marketing"
      },
      {
        title"Risk Assessment",
        description"Develop risk models for insurance and lending",
        industry"Insurance"
      }
    ],
    technologies["Python", "R", "Jupyter", "RStudio", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
    caseStudy{
      client"Insurance Company",
      challenge"Needed accurate risk assessment models for underwriting decisions",
      solution"Developed Python-based predictive models using historical claims data",
      results[
        "Improved risk prediction accuracy by 35%",
        "Reduced claim processing time by 50%",
        "Enhanced underwriting decision quality",
        "Decreased manual review requirements by 60%"
      ]
    },
    implementation{
      phases[
        {
          title"Environment Setup",
          duration"1 week",
          description"Configure Python/R environments and data infrastructure"
        },
        {
          title"Data Preparation",
          duration"2-3 weeks",
          description"Clean, transform, and prepare data for analysis"
        },
        {
          title"Model Development",
          duration"3-5 weeks",
          description"Build and validate analytical models"
        },
        {
          title"Deployment",
          duration"1-2 weeks",
          description"Deploy models and create monitoring systems"
        }
      ]
    },
    relatedServices["Applied Data Analytics", "AI Smart Solutions", "Digital Advisory"]
  },
  "tensorflow-pytorch"{
    title"TensorFlow & PyTorch",
    category"Machine Learning",
    description"Leading deep learning and neural network frameworks for building sophisticated AI applications.",
    fullDescription"TensorFlow and PyTorch are the most popular frameworks for developing deep learning models and neural networks. These platforms provide the tools and infrastructure needed to build, train, and deploy advanced AI systems at scale.",
    features[
      {
        title"Deep Learning Models",
        description"Build complex neural networks for various AI applications",
        icon
      },
      {
        title"GPU Acceleration",
        description"Leverage GPU computing for faster model training",
        icon
      },
      {
        title"Model Deployment",
        description"Deploy models across cloud, mobile, and edge devices",
        icon
      },
      {
        title"Pre-trained Models",
        description"Access to extensive libraries of pre-trained models",
        icon
      }
    ],
    benefits[
      "Accelerated AI development lifecycle",
      "Scalable model training and deployment",
      "Strong ecosystem and community support",
      "Production-ready model serving",
      "Cross-platform compatibility"
    ],
    useCases[
      {
        title"Computer Vision",
        description"Image recognition and automated visual inspection",
        industry"Manufacturing"
      },
      {
        title"Natural Language Processing",
        description"Text analysis and language understanding applications",
        industry"Technology"
      },
      {
        title"Recommendation Systems",
        description"Personalized content and product recommendations",
        industry"E-commerce"
      }
    ],
    technologies["TensorFlow", "PyTorch", "Keras", "TensorBoard", "ONNX", "CUDA", "Docker", "Kubernetes"],
    caseStudy{
      client"E-commerce Platform",
      challenge"Needed sophisticated recommendation engine to improve customer engagement",
      solution"Implemented deep learning recommendation system using TensorFlow",
      results[
        "Increased click-through rates by 40%",
        "Improved customer engagement by 55%",
        "Enhanced personalization accuracy",
        "Boosted revenue per visitor by 25%"
      ]
    },
    implementation{
      phases[
        {
          title"Infrastructure Setup",
          duration"1-2 weeks",
          description"Configure ML infrastructure and GPU resources"
        },
        {
          title"Data Preparation",
          duration"2-3 weeks",
          description"Prepare and preprocess training datasets"
        },
        {
          title"Model Development",
          duration"4-6 weeks",
          description"Design, train, and validate deep learning models"
        },
        {
          title"Production Deployment",
          duration"2-3 weeks",
          description"Deploy models with monitoring and scaling"
        }
      ]
    },
    relatedServices["AI Smart Solutions", "Applied Data Analytics", "Application Development"]
  },
  // Application Development Technologies
  "react-nextjs"{
    title"React & Next.js",
    category"Frontend Development",
    description"Modern JavaScript frameworks for building responsive, high-performance web applications and user interfaces.",
    fullDescription"React and Next.js form a powerful combination for modern web development, enabling the creation of fast, SEO-friendly, and highly interactive web applications. These frameworks provide the foundation for scalable frontend development with server-side rendering capabilities.",
    features[
      {
        title"Component-Based Architecture",
        description"Reusable UI components for consistent and maintainable interfaces",
        icon
      },
      {
        title"Server-Side Rendering",
        description"Improved SEO and faster initial page loads with Next.js",
        icon
      },
      {
        title"State Management",
        description"Efficient state handling with React hooks and context",
        icon
      },
      {
        title"Performance Optimization",
        description"Built-in optimization features for fast loading applications",
        icon
      }
    ],
    benefits[
      "Faster development with reusable components",
      "Improved SEO and page performance",
      "Strong ecosystem and community support",
      "Mobile-responsive design capabilities",
      "Easy maintenance and updates"
    ],
    useCases[
      {
        title"E-commerce Platforms",
        description"Build fast, interactive online shopping experiences",
        industry"Retail"
      },
      {
        title"Dashboard Applications",
        description"Create data-rich admin panels and analytics dashboards",
        industry"Enterprise"
      },
      {
        title"Content Management",
        description"Develop flexible content management systems",
        industry"Media"
      }
    ],
    technologies["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "React Router", "Webpack", "Vercel"],
    caseStudy{
      client"SaaS Platform",
      challenge"Needed modern, responsive web application with excellent performance",
      solution"Built scalable React/Next.js application with server-side rendering",
      results[
        "Improved page load times by 65%",
        "Enhanced user engagement by 40%",
        "Reduced development time by 50%",
        "Achieved 98+ Google Lighthouse scores"
      ]
    },
    implementation{
      phases[
        {
          title"Project Setup",
          duration"1 week",
          description"Configure development environment and project structure"
        },
        {
          title"UI Development",
          duration"4-6 weeks",
          description"Build components and user interface"
        },
        {
          title"Integration",
          duration"2-3 weeks",
          description"Integrate with APIs and backend services"
        },
        {
          title"Testing & Deployment",
          duration"1-2 weeks",
          description"Test application and deploy to production"
        }
      ]
    },
    relatedServices["Application Development", "Digital Platforms", "Digital Experience"]
  },
  // Cloud Services Technologies  
  "amazon-web-services"{
    title"Amazon Web Services",
    category"Cloud Platform",
    description"Comprehensive cloud computing platform offering scalable infrastructure, storage, and advanced services.",
    fullDescription"Amazon Web Services (AWS) is the world's most comprehensive cloud platform, offering over 200 services from global data centers. AWS provides the infrastructure and tools needed to build, deploy, and scale applications efficiently while reducing costs.",
    features[
      {
        title"Compute Services",
        description"Scalable virtual servers and container services",
        icon
      },
      {
        title"Storage Solutions",
        description"Secure, durable, and scalable storage options",
        icon
      },
      {
        title"Security & Compliance",
        description"Enterprise-grade security with compliance certifications",
        icon
      },
      {
        title"AI/ML Services",
        description"Pre-built AI services and machine learning platforms",
        icon
      }
    ],
    benefits[
      "Pay-as-you-use pricing model",
      "Global availability and reliability",
      "Extensive service ecosystem",
      "Strong security and compliance",
      "Rapid scaling capabilities"
    ],
    useCases[
      {
        title"Web Applications",
        description"Host scalable web applications with auto-scaling",
        industry"Technology"
      },
      {
        title"Data Analytics",
        description"Process and analyze large datasets in the cloud",
        industry"Enterprise"
      },
      {
        title"Backup & Recovery",
        description"Reliable backup and disaster recovery solutions",
        industry"All Industries"
      }
    ],
    technologies["EC2", "S3", "RDS", "Lambda", "CloudFront", "VPC", "IAM", "CloudWatch"],
    caseStudy{
      client"Growing Startup",
      challenge"Needed scalable infrastructure to handle rapid user growth",
      solution"Migrated to AWS with auto-scaling and managed services",
      results[
        "Reduced infrastructure costs by 40%",
        "Improved application availability to 99.9%",
        "Scaled to handle 10x user growth",
        "Decreased deployment time by 80%"
      ]
    },
    implementation{
      phases[
        {
          title"Assessment & Planning",
          duration"1-2 weeks",
          description"Evaluate current infrastructure and plan AWS architecture"
        },
        {
          title"Migration Setup",
          duration"2-4 weeks",
          description"Configure AWS services and migration tools"
        },
        {
          title"Migration Execution",
          duration"3-6 weeks",
          description"Migrate applications and data to AWS"
        },
        {
          title"Optimization",
          duration"Ongoing",
          description"Monitor performance and optimize costs"
        }
      ]
    },
    relatedServices["Cloud Services", "Digital Advisory", "Application Development"]
  },
  "apache-spark-kafka"{
    title"Apache Spark & Kafka",
    category"Big Data",
    description"Large-scale data processing and real-time streaming platforms for handling massive datasets efficiently.",
    fullDescription"Apache Spark and Kafka form a powerful combination for big data processing and real-time streaming. Spark provides fast, distributed computing for large-scale data processing, while Kafka serves as a high-throughput, fault-tolerant streaming platform for real-time data feeds.",
    features[
      {
        title"Distributed Computing",
        description"Process large datasets across multiple machines for superior performance",
        icon
      },
      {
        title"Real-time Streaming",
        description"Handle millions of events per second with low latency",
        icon
      },
      {
        title"Fault Tolerance",
        description"Built-in resilience and automatic recovery from failures",
        icon
      },
      {
        title"Scalable Architecture",
        description"Horizontally scale to handle growing data volumes",
        icon
      }
    ],
    benefits[
      "Process petabytes of data with sub-second latency",
      "Handle real-time analytics and streaming workloads",
      "Reduce data processing costs by up to 70%",
      "Enable real-time decision making capabilities",
      "Seamless integration with existing data infrastructure"
    ],
    useCases[
      {
        title"Real-time Analytics",
        description"Process streaming data for immediate insights and alerts",
        industry"Finance"
      },
      {
        title"ETL Processing",
        description"Transform and load large datasets efficiently",
        industry"Enterprise"
      },
      {
        title"IoT Data Processing",
        description"Handle sensor data streams from millions of devices",
        industry"Manufacturing"
      }
    ],
    technologies["Apache Spark", "Apache Kafka", "Scala", "Python", "Hadoop", "HDFS", "Zookeeper", "Kubernetes"],
    caseStudy{
      client"Global E-commerce Platform",
      challenge"Needed to process billions of customer interactions daily for real-time recommendations",
      solution"Implemented Spark and Kafka pipeline for real-time data processing and analytics",
      results[
        "Reduced data processing latency from hours to seconds",
        "Increased recommendation accuracy by 40%",
        "Handled 10x increase in data volume without performance degradation",
        "Enabled real-time fraud detection saving $5M annually"
      ]
    },
    implementation{
      phases[
        {
          title"Infrastructure Assessment",
          duration"1-2 weeks",
          description"Evaluate current data infrastructure and processing requirements"
        },
        {
          title"Cluster Setup",
          duration"2-3 weeks",
          description"Configure Spark and Kafka clusters with optimal settings"
        },
        {
          title"Pipeline Development",
          duration"4-6 weeks",
          description"Build data processing pipelines and streaming applications"
        },
        {
          title"Performance Optimization",
          duration"2-3 weeks",
          description"Tune performance and implement monitoring systems"
        }
      ]
    },
    relatedServices["Applied Data Analytics", "Cloud Services", "Digital Advisory"]
  },
  "tableau-power-bi"{
    title"Tableau & Power BI",
    category"Visualization",
    description"Interactive dashboards and data visualization platforms for transforming complex data into actionable insights.",
    fullDescription"Tableau and Power BI are leading business intelligence platforms that enable organizations to visualize data, create interactive dashboards, and share insights across teams. These tools democratize data analytics by making it accessible to business users without technical expertise.",
    features[
      {
        title"Interactive Dashboards",
        description"Create dynamic, drill-down dashboards with real-time data updates",
        icon
      },
      {
        title"Self-Service Analytics",
        description"Empower business users to create their own reports and analysis",
        icon
      },
      {
        title"Data Connectivity",
        description"Connect to hundreds of data sources and APIs seamlessly",
        icon
      },
      {
        title"Mobile Access",
        description"Access dashboards and reports on any device, anywhere",
        icon
      }
    ],
    benefits[
      "Reduce report creation time by 80%",
      "Improve data-driven decision making across organization",
      "Increase user adoption with intuitive interfaces",
      "Lower total cost of ownership compared to custom solutions",
      "Enable real-time monitoring of business KPIs"
    ],
    useCases[
      {
        title"Executive Dashboards",
        description"High-level KPI monitoring for leadership teams",
        industry"Executive"
      },
      {
        title"Sales Analytics",
        description"Track sales performance, pipeline, and forecasting",
        industry"Sales"
      },
      {
        title"Financial Reporting",
        description"Automated financial reports and budget analysis",
        industry"Finance"
      }
    ],
    technologies["Tableau", "Power BI", "DAX", "SQL", "Python", "R", "Azure", "AWS"],
    caseStudy{
      client"Healthcare System",
      challenge"Needed unified view of patient outcomes and operational metrics across 50+ facilities",
      solution"Implemented Power BI solution with automated data refresh and mobile access",
      results[
        "Reduced reporting time from weeks to hours",
        "Improved patient outcome tracking by 60%",
        "Increased data accessibility for 500+ users",
        "Enhanced decision-making speed by 45%"
      ]
    },
    implementation{
      phases[
        {
          title"Data Assessment",
          duration"1-2 weeks",
          description"Evaluate data sources and visualization requirements"
        },
        {
          title"Dashboard Design",
          duration"2-4 weeks",
          description"Create wireframes and design interactive dashboards"
        },
        {
          title"Development",
          duration"3-5 weeks",
          description"Build dashboards and configure data connections"
        },
        {
          title"Training & Rollout",
          duration"2-3 weeks",
          description"Train users and deploy to production environment"
        }
      ]
    },
    relatedServices["Applied Data Analytics", "Digital Advisory", "Business Intelligence"]
  },
  "aws-azure-ml"{
    title"AWS & Azure ML",
    category"Cloud Analytics",
    description"Cloud-based machine learning platforms providing scalable AI/ML services for enterprise applications.",
    fullDescription"AWS and Azure ML platforms offer comprehensive machine learning services that enable organizations to build, train, and deploy ML models at scale. These cloud platforms provide pre-built AI services, custom model development tools, and managed infrastructure for enterprise AI initiatives.",
    features[
      {
        title"AutoML Capabilities",
        description"Automated machine learning for rapid model development and deployment",
        icon
      },
      {
        title"Pre-built AI Services",
        description"Ready-to-use APIs for vision, language, and speech recognition",
        icon
      },
      {
        title"Scalable Infrastructure",
        description"Elastic compute resources for training and inference workloads",
        icon
      },
      {
        title"MLOps Integration",
        description"End-to-end ML lifecycle management with CI/CD pipelines",
        icon
      }
    ],
    benefits[
      "Reduce time-to-market for AI solutions by 60%",
      "Lower ML infrastructure costs with pay-per-use model",
      "Access to enterprise-grade security and compliance",
      "Seamless integration with existing cloud services",
      "Global availability and low-latency inference"
    ],
    useCases[
      {
        title"Predictive Maintenance",
        description"Forecast equipment failures and optimize maintenance schedules",
        industry"Manufacturing"
      },
      {
        title"Customer Analytics",
        description"Analyze customer behavior and predict churn patterns",
        industry"Retail"
      },
      {
        title"Fraud Detection",
        description"Real-time fraud detection for financial transactions",
        industry"Finance"
      }
    ],
    technologies["AWS SageMaker", "Azure ML Studio", "AWS Rekognition", "Azure Cognitive Services", "TensorFlow", "PyTorch", "Docker", "Kubernetes"],
    caseStudy{
      client"Global Bank",
      challenge"Needed scalable fraud detection system handling millions of transactions daily",
      solution"Implemented AWS SageMaker solution with real-time inference and automated retraining",
      results[
        "Reduced fraud detection time from hours to milliseconds",
        "Improved accuracy by 45% with ensemble models",
        "Prevented $15M in fraudulent transactions annually",
        "Achieved 99.99% system availability"
      ]
    },
    implementation{
      phases[
        {
          title"Platform Assessment",
          duration"1-2 weeks",
          description"Evaluate ML requirements and select optimal cloud platform"
        },
        {
          title"Environment Setup",
          duration"2-3 weeks",
          description"Configure ML infrastructure and development environments"
        },
        {
          title"Model Development",
          duration"4-8 weeks",
          description"Build, train, and validate machine learning models"
        },
        {
          title"Production Deployment",
          duration"2-4 weeks",
          description"Deploy models with monitoring and automated scaling"
        }
      ]
    },
    relatedServices["AI Smart Solutions", "Applied Data Analytics", "Cloud Services"]
  },
  "elasticsearch-mongodb"{
    title"Elasticsearch & MongoDB",
    category"Data Storage",
    description"NoSQL databases and search engines for flexible data storage and lightning-fast search capabilities.",
    fullDescription"Elasticsearch and MongoDB provide modern data storage solutions that handle unstructured data, complex queries, and real-time search at scale. These technologies enable organizations to build flexible, scalable applications with powerful search and analytics capabilities.",
    features[
      {
        title"Full-Text Search",
        description"Lightning-fast search across massive datasets with relevance scoring",
        icon
      },
      {
        title"Flexible Schema",
        description"Store and query JSON documents without rigid schema constraints",
        icon
      },
      {
        title"Real-time Analytics",
        description"Analyze data as it arrives with aggregation and visualization",
        icon
      },
      {
        title"High Availability",
        description"Built-in replication and clustering for fault tolerance",
        icon
      }
    ],
    benefits[
      "Handle millions of search queries per second",
      "Reduce data query response time by 90%",
      "Scale horizontally to petabyte-scale datasets",
      "Enable real-time analytics and monitoring",
      "Simplify application development with flexible schemas"
    ],
    useCases[
      {
        title"E-commerce Search",
        description"Power product search and recommendations for online stores",
        industry"E-commerce"
      },
      {
        title"Log Analytics",
        description"Centralize and analyze application logs for monitoring",
        industry"Technology"
      },
      {
        title"Content Management",
        description"Store and search large volumes of documents and media",
        industry"Media"
      }
    ],
    technologies["Elasticsearch", "MongoDB", "Kibana", "Logstash", "Node.js", "Python", "Java", "Docker"],
    caseStudy{
      client"Media Company",
      challenge"Needed to search through millions of articles and videos in real-time",
      solution"Implemented Elasticsearch with MongoDB for content storage and fast search",
      results[
        "Reduced search response time from 5 seconds to 50ms",
        "Enabled semantic search across 10M+ documents",
        "Improved user engagement by 35%",
        "Scaled to handle 100K concurrent search requests"
      ]
    },
    implementation{
      phases[
        {
          title"Data Architecture",
          duration"1-2 weeks",
          description"Design data models and search architecture"
        },
        {
          title"Cluster Setup",
          duration"2-3 weeks",
          description"Configure database and search clusters"
        },
        {
          title"Data Migration",
          duration"3-5 weeks",
          description"Migrate existing data and build indexing pipelines"
        },
        {
          title"Application Integration",
          duration"2-4 weeks",
          description"Integrate with applications and optimize performance"
        }
      ]
    },
    relatedServices["Applied Data Analytics", "Application Development", "Cloud Services"]
  },
  "jupyter-apache-airflow"{
    title"Jupyter & Apache Airflow",
    category"Data Science",
    description"Interactive development environment and workflow orchestration platform for data science and analytics workflows.",
    fullDescription"Jupyter and Apache Airflow create a powerful ecosystem for data science and workflow automation. Jupyter provides interactive notebooks for exploratory data analysis and model development, while Airflow orchestrates complex data pipelines and ML workflows with scheduling and monitoring capabilities.",
    features[
      {
        title"Interactive Development",
        description"Live coding environment for data exploration and visualization",
        icon2
      },
      {
        title"Workflow Orchestration",
        description"Schedule and monitor complex data pipelines with dependencies",
        icon
      },
      {
        title"Version Control",
        description"Track changes and collaborate on notebooks and workflows",
        icon
      },
      {
        title"Scalable Execution",
        description"Execute workflows across distributed computing environments",
        icon
      }
    ],
    benefits[
      "Accelerate data science development by 50%",
      "Automate complex data pipeline execution",
      "Enable reproducible research and analysis",
      "Improve collaboration between data teams",
      "Reduce manual workflow management overhead"
    ],
    useCases[
      {
        title"Data Pipeline Automation",
        description"Automate ETL processes and data transformations",
        industry"Enterprise"
      },
      {
        title"ML Model Training",
        description"Schedule and monitor machine learning model training",
        industry"Technology"
      },
      {
        title"Research & Development",
        description"Interactive analysis and experimentation workflows",
        industry"Research"
      }
    ],
    technologies["Jupyter", "Apache Airflow", "Python", "Pandas", "NumPy", "Docker", "Kubernetes", "PostgreSQL"],
    caseStudy{
      client"Research Institute",
      challenge"Needed automated data processing pipeline for daily genomic analysis",
      solution"Implemented Airflow workflows with Jupyter notebooks for analysis automation",
      results[
        "Reduced analysis time from days to hours",
        "Automated 90% of repetitive data tasks",
        "Improved research reproducibility by 100%",
        "Enabled 24/7 pipeline monitoring and alerting"
      ]
    },
    implementation{
      phases[
        {
          title"Environment Setup",
          duration"1-2 weeks",
          description"Configure Jupyter and Airflow environments"
        },
        {
          title"Workflow Design",
          duration"2-4 weeks",
          description"Design data pipelines and analysis workflows"
        },
        {
          title"Development",
          duration"3-6 weeks",
          description"Build notebooks and orchestration workflows"
        },
        {
          title"Production Deployment",
          duration"1-3 weeks",
          description"Deploy and monitor production workflows"
        }
      ]
    },
    relatedServices["Applied Data Analytics", "AI Smart Solutions", "Digital Advisory"]
  },
  "nodejs-python"{
    title"Node.js & Python",
    category"Backend Development",
    description"Modern server-side programming languages for building scalable web applications and APIs.",
    fullDescription"Node.js and Python are leading technologies for backend development, offering excellent performance, extensive libraries, and strong community support. These languages enable rapid development of scalable web applications, APIs, and microservices architectures.",
    features[
      {
        title"Asynchronous Processing",
        description"Handle thousands of concurrent connections efficiently",
        icon
      },
      {
        title"Extensive Libraries",
        description"Access to millions of packages and frameworks",
        icon
      },
      {
        title"Cross-platform",
        description"Deploy applications across different operating systems",
        icon
      },
      {
        title"API Development",
        description"Build RESTful and GraphQL APIs with ease",
        icon
      }
    ],
    benefits[
      "Rapid application development and prototyping",
      "Excellent performance for I/O intensive applications",
      "Strong ecosystem and community support",
      "Easy integration with databases and cloud services",
      "Cost-effective development and maintenance"
    ],
    useCases[
      {
        title"Web Applications",
        description"Build dynamic web applications with server-side rendering",
        industry"Technology"
      },
      {
        title"API Development",
        description"Create RESTful APIs for mobile and web applications",
        industry"Enterprise"
      },
      {
        title"Data Processing",
        description"Process and analyze large datasets efficiently",
        industry"Analytics"
      }
    ],
    technologies["Node.js", "Python", "Express.js", "FastAPI", "Django", "Flask", "MongoDB", "PostgreSQL"],
    caseStudy{
      client"Fintech Startup",
      challenge"Needed scalable backend for payment processing platform",
      solution"Built microservices architecture using Node.js and Python",
      results[
        "Handled 1M+ transactions per day",
        "Achieved 99.99% uptime reliability",
        "Reduced development time by 40%",
        "Scaled to support 500K+ users"
      ]
    },
    implementation{
      phases[
        {
          title"Architecture Design",
          duration"1-2 weeks",
          description"Design system architecture and technology stack"
        },
        {
          title"API Development",
          duration"3-6 weeks",
          description"Build core APIs and business logic"
        },
        {
          title"Integration",
          duration"2-4 weeks",
          description"Integrate with databases and external services"
        },
        {
          title"Testing & Deployment",
          duration"2-3 weeks",
          description"Test thoroughly and deploy to production"
        }
      ]
    },
    relatedServices["Application Development", "Digital Platforms", "Cloud Services"]
  },
  "postgresql-mongodb"{
    title"PostgreSQL & MongoDB",
    category"Database",
    description"Robust relational and NoSQL database systems for diverse data storage and management needs.",
    fullDescription"PostgreSQL and MongoDB provide complementary database solutions for modern applications. PostgreSQL offers ACID compliance and complex querying for structured data, while MongoDB provides flexible document storage for unstructured data and rapid development.",
    features[
      {
        title"ACID Compliance",
        description"Ensure data consistency and reliability with transactions",
        icon
      },
      {
        title"Flexible Schema",
        description"Adapt to changing data requirements without migration",
        icon
      },
      {
        title"Advanced Querying",
        description"Complex queries with joins, aggregations, and full-text search",
        icon
      },
      {
        title"Horizontal Scaling",
        description"Scale across multiple servers for high availability",
        icon
      }
    ],
    benefits[
      "Support both structured and unstructured data",
      "Excellent performance for read and write operations",
      "Strong consistency and reliability guarantees",
      "Extensive ecosystem and tooling support",
      "Cost-effective compared to enterprise databases"
    ],
    useCases[
      {
        title"E-commerce Platforms",
        description"Handle product catalogs, orders, and customer data",
        industry"E-commerce"
      },
      {
        title"Content Management",
        description"Store and manage articles, media, and metadata",
        industry"Media"
      },
      {
        title"Analytics Applications",
        description"Store and query large volumes of analytical data",
        industry"Analytics"
      }
    ],
    technologies["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "Node.js", "Python", "Docker", "Kubernetes"],
    caseStudy{
      client"Social Media Platform",
      challenge"Needed database solution for user profiles and content feeds",
      solution"Implemented hybrid approach with PostgreSQL for users and MongoDB for content",
      results[
        "Supported 10M+ active users",
        "Achieved sub-100ms query response times",
        "Reduced storage costs by 30%",
        "Enabled real-time content recommendations"
      ]
    },
    implementation{
      phases[
        {
          title"Data Modeling",
          duration"1-2 weeks",
          description"Design database schemas and data models"
        },
        {
          title"Database Setup",
          duration"2-3 weeks",
          description"Configure databases with replication and clustering"
        },
        {
          title"Migration",
          duration"3-5 weeks",
          description"Migrate existing data and build indexing strategies"
        },
        {
          title"Optimization",
          duration"2-3 weeks",
          description"Performance tuning and monitoring setup"
        }
      ]
    },
    relatedServices["Application Development", "Cloud Services", "Digital Platforms"]
  },
  "react-native-flutter"{
    title"React Native & Flutter",
    category"Mobile Development",
    description"Cross-platform mobile development frameworks for building native iOS and Android applications.",
    fullDescription"React Native and Flutter are leading frameworks for cross-platform mobile development, enabling developers to create high-performance native mobile applications for both iOS and Android from a single codebase. These frameworks reduce development time and costs while maintaining native performance.",
    features[
      {
        title"Single Codebase",
        description"Write once, deploy to both iOS and Android platforms",
        icon2
      },
      {
        title"Native Performance",
        description"Achieve near-native performance with optimized rendering",
        icon
      },
      {
        title"Hot Reload",
        description"See changes instantly during development without recompiling",
        icon
      },
      {
        title"Rich Ecosystem",
        description"Access to extensive libraries and third-party integrations",
        icon
      }
    ],
    benefits[
      "Reduce development time by 50% compared to native development",
      "Lower maintenance costs with unified codebase",
      "Faster time-to-market for mobile applications",
      "Consistent user experience across platforms",
      "Access to device-specific features and APIs"
    ],
    useCases[
      {
        title"E-commerce Apps",
        description"Build shopping apps with payment integration and catalogs",
        industry"E-commerce"
      },
      {
        title"Social Media",
        description"Create engaging social platforms with real-time features",
        industry"Social"
      },
      {
        title"Business Apps",
        description"Develop productivity and enterprise mobile applications",
        industry"Enterprise"
      }
    ],
    technologies["React Native", "Flutter", "Dart", "JavaScript", "TypeScript", "Firebase", "Redux", "Native APIs"],
    caseStudy{
      client"Food Delivery Startup",
      challenge"Needed mobile app for iOS and Android with limited development resources",
      solution"Built cross-platform app using React Native with real-time tracking",
      results[
        "Launched on both platforms simultaneously",
        "Reduced development cost by 60%",
        "Achieved 4.8+ app store ratings",
        "Scaled to 100K+ active users"
      ]
    },
    implementation{
      phases[
        {
          title"Requirements Analysis",
          duration"1-2 weeks",
          description"Define app requirements and platform specifications"
        },
        {
          title"UI/UX Design",
          duration"2-3 weeks",
          description"Design user interface and user experience flows"
        },
        {
          title"Development",
          duration"6-10 weeks",
          description"Build application features and integrate APIs"
        },
        {
          title"Testing & Launch",
          duration"2-3 weeks",
          description"Test thoroughly and publish to app stores"
        }
      ]
    },
    relatedServices["Application Development", "Digital Experience", "Digital Platforms"]
  },
  "ai-ml-integration"{
    title"AI/ML Integration",
    category"Integration",
    description"Seamless integration of artificial intelligence and machine learning capabilities into existing business applications.",
    fullDescription"AI/ML Integration services help organizations incorporate intelligent capabilities into their existing systems and applications. This includes implementing pre-trained models, custom AI solutions, and automated decision-making systems that enhance business processes and user experiences.",
    features[
      {
        title"API Integration",
        description"Connect with leading AI services and platforms seamlessly",
        icon
      },
      {
        title"Custom Models",
        description"Deploy custom-trained models for specific business needs",
        icon
      },
      {
        title"Real-time Processing",
        description"Process and analyze data in real-time for immediate insights",
        icon
      },
      {
        title"Scalable Architecture",
        description"Design systems that scale with growing AI workloads",
        icon
      }
    ],
    benefits[
      "Enhanced decision-making with intelligent insights",
      "Automated processes reduce manual workload by 70%",
      "Improved user experience with personalization",
      "Reduced operational costs through automation",
      "Competitive advantage through AI-powered features"
    ],
    useCases[
      {
        title"Smart Recommendations",
        description"Personalized product and content recommendations",
        industry"E-commerce"
      },
      {
        title"Intelligent Automation",
        description"Automate document processing and data entry",
        industry"Enterprise"
      },
      {
        title"Predictive Analytics",
        description"Forecast trends and predict customer behavior",
        industry"Finance"
      }
    ],
    technologies["TensorFlow", "PyTorch", "Azure AI", "AWS AI", "Google AI", "OpenAI", "REST APIs", "GraphQL"],
    caseStudy{
      client"Insurance Company",
      challenge"Needed to automate claims processing and fraud detection",
      solution"Integrated ML models for document analysis and fraud scoring",
      results[
        "Reduced claims processing time by 80%",
        "Improved fraud detection accuracy by 65%",
        "Decreased operational costs by $2M annually",
        "Enhanced customer satisfaction with faster processing"
      ]
    },
    implementation{
      phases[
        {
          title"AI Assessment",
          duration"1-2 weeks",
          description"Evaluate AI opportunities and integration requirements"
        },
        {
          title"Model Selection",
          duration"2-3 weeks",
          description"Select appropriate AI models and services"
        },
        {
          title"Integration Development",
          duration"4-8 weeks",
          description"Develop and integrate AI capabilities"
        },
        {
          title"Testing & Optimization",
          duration"2-4 weeks",
          description"Test performance and optimize for production"
        }
      ]
    },
    relatedServices["AI Smart Solutions", "Application Development", "Digital Advisory"]
  },
  "blockchain"{
    title"Blockchain",
    category"Security",
    description"Distributed ledger technology for secure, transparent, and immutable digital transactions and record-keeping.",
    fullDescription"Blockchain technology provides a secure, decentralized approach to digital transactions and data storage. Our blockchain solutions enable trust, transparency, and security for various business applications including supply chain, finance, and digital identity management.",
    features[
      {
        title"Decentralization",
        description"Eliminate single points of failure with distributed networks",
        icon
      },
      {
        title"Immutable Records",
        description"Ensure data integrity with tamper-proof transaction records",
        icon
      },
      {
        title"Smart Contracts",
        description"Automate agreements and processes with programmable contracts",
        icon2
      },
      {
        title"Transparency",
        description"Provide full audit trails and transparent operations",
        icon
      }
    ],
    benefits[
      "Enhanced security and fraud prevention",
      "Reduced transaction costs and intermediaries",
      "Improved transparency and trust",
      "Automated processes through smart contracts",
      "Global accessibility and 24/7 operations"
    ],
    useCases[
      {
        title"Supply Chain Tracking",
        description"Track products from origin to consumer with transparency",
        industry"Manufacturing"
      },
      {
        title"Digital Identity",
        description"Secure identity verification and credential management",
        industry"Government"
      },
      {
        title"Financial Services",
        description"Enable secure peer-to-peer transactions and settlements",
        industry"Finance"
      }
    ],
    technologies["Ethereum", "Hyperledger", "Solidity", "Web3.js", "IPFS", "Node.js", "Smart Contracts", "DApps"],
    caseStudy{
      client"Supply Chain Company",
      challenge"Needed transparent tracking of products through global supply chain",
      solution"Implemented blockchain solution for end-to-end supply chain visibility",
      results[
        "Achieved 100% supply chain transparency",
        "Reduced counterfeit products by 95%",
        "Improved customer trust and brand reputation",
        "Streamlined compliance and auditing processes"
      ]
    },
    implementation{
      phases[
        {
          title"Use Case Analysis",
          duration"2-3 weeks",
          description"Identify blockchain opportunities and requirements"
        },
        {
          title"Platform Selection",
          duration"1-2 weeks",
          description"Choose appropriate blockchain platform and architecture"
        },
        {
          title"Development",
          duration"6-12 weeks",
          description"Build smart contracts and blockchain applications"
        },
        {
          title"Deployment & Testing",
          duration"3-4 weeks",
          description"Deploy to blockchain network and conduct security testing"
        }
      ]
    },
    relatedServices["Digital Security", "Application Development", "Digital Advisory"]
  },
  "microsoft-azure"{
    title"Microsoft Azure",
    category"Cloud Platform", 
    description"Comprehensive cloud computing platform offering infrastructure, platform, and software services.",
    fullDescription"Microsoft Azure provides a complete cloud computing platform with over 200 services spanning compute, storage, networking, databases, analytics, and AI. Azure enables organizations to build, deploy, and manage applications across a global network of data centers.",
    features[
      {
        title"Hybrid Cloud",
        description"Seamless integration between on-premises and cloud environments",
        icon
      },
      {
        title"AI & ML Services",
        description"Built-in artificial intelligence and machine learning capabilities",
        icon
      },
      {
        title"Enterprise Security",
        description"Advanced security features with compliance certifications",
        icon
      },
      {
        title"DevOps Integration",
        description"Integrated development and operations toolchain",
        icon2
      }
    ],
    benefits[
      "99.99% availability SLA with global reach",
      "Integrated with Microsoft 365 and Office suite",
      "Strong enterprise security and compliance",
      "Cost-effective with flexible pricing options",
      "Extensive partner ecosystem and support"
    ],
    useCases[
      {
        title"Enterprise Applications",
        description"Host mission-critical business applications",
        industry"Enterprise"
      },
      {
        title"Data Analytics",
        description"Process and analyze big data with Azure Synapse",
        industry"Analytics"
      },
      {
        title"AI Solutions",
        description"Build and deploy AI applications at scale",
        industry"Technology"
      }
    ],
    technologies["Azure VMs", "Azure SQL", "Azure Functions", "Azure Kubernetes", "Power BI", "Azure AD", "Logic Apps", "Cosmos DB"],
    caseStudy{
      client"Manufacturing Corporation",
      challenge"Needed to modernize legacy systems and improve global operations",
      solution"Migrated to Azure with hybrid architecture and IoT integration",
      results[
        "Reduced IT costs by 35% annually",
        "Improved application performance by 70%", 
        "Enabled real-time global operations monitoring",
        "Achieved 99.9% system availability"
      ]
    },
    implementation{
      phases[
        {
          title"Cloud Readiness Assessment",
          duration"2-3 weeks",
          description"Evaluate current infrastructure and cloud readiness"
        },
        {
          title"Migration Planning",
          duration"3-4 weeks",
          description"Design Azure architecture and migration strategy"
        },
        {
          title"Migration Execution",
          duration"6-12 weeks",
          description"Migrate applications and data to Azure"
        },
        {
          title"Optimization",
          duration"Ongoing",
          description"Monitor, optimize, and enhance cloud operations"
        }
      ]
    },
    relatedServices["Cloud Services", "Digital Advisory", "Application Development"]
  },
  "google-cloud"{
    title"Google Cloud",
    category"Cloud Platform",
    description"Advanced cloud computing platform with leading AI/ML capabilities and global infrastructure.",
    fullDescription"Google Cloud Platform (GCP) offers cutting-edge cloud services built on Google's infrastructure, providing advanced analytics, machine learning, and data processing capabilities. GCP enables organizations to leverage Google's innovation in AI and big data technologies.",
    features[
      {
        title"AI & ML Leadership",
        description"Industry-leading AI services and TensorFlow integration",
        icon
      },
      {
        title"Data Analytics",
        description"BigQuery for serverless data warehouse and analytics",
        icon
      },
      {
        title"Global Network",
        description"Google's private global network for fast, reliable connections",
        icon
      },
      {
        title"Kubernetes Native",
        description"Native Kubernetes support with Google Kubernetes Engine",
        icon2
      }
    ],
    benefits[
      "Access to Google's AI and ML innovations",
      "Exceptional performance for data analytics workloads",
      "Competitive pricing with sustained use discounts",
      "Strong commitment to open source technologies",
      "Advanced security with Google's expertise"
    ],
    useCases[
      {
        title"Data Analytics",
        description"Process massive datasets with BigQuery and Dataflow",
        industry"Enterprise"
      },
      {
        title"Machine Learning",
        description"Build and deploy ML models with Vertex AI",
        industry"Technology"
      },
      {
        title"Application Modernization",
        description"Containerize applications with Google Kubernetes Engine",
        industry"All Industries"
      }
    ],
    technologies["BigQuery", "Vertex AI", "Google Kubernetes Engine", "Cloud Functions", "Firestore", "Cloud Storage", "Cloud Run", "TensorFlow"],
    caseStudy{
      client"Media Streaming Service",
      challenge"Needed to analyze billions of user interactions and personalize content",
      solution"Implemented Google Cloud with BigQuery for analytics and Vertex AI for recommendations",
      results[
        "Processed 100TB+ of data daily",
        "Improved recommendation accuracy by 50%",
        "Reduced infrastructure costs by 40%",
        "Achieved real-time personalization at scale"
      ]
    },
    implementation{
      phases[
        {
          title"Cloud Strategy",
          duration"2-3 weeks",
          description"Define cloud strategy and assess current infrastructure"
        },
        {
          title"Architecture Design",
          duration"3-4 weeks",
          description"Design Google Cloud architecture and migration plan"
        },
        {
          title"Migration & Development",
          duration"8-16 weeks",
          description"Migrate workloads and develop cloud-native applications"
        },
        {
          title"Optimization",
          duration"Ongoing",
          description"Continuous optimization and cost management"
        }
      ]
    },
    relatedServices["Cloud Services", "AI Smart Solutions", "Applied Data Analytics"]
  },
  "multi-cloud-strategy"{
    title"Multi-Cloud Strategy",
    category"Cloud Architecture",
    description"Strategic approach to using multiple cloud providers for optimal performance, cost, and risk management.",
    fullDescription"Multi-cloud strategy involves distributing workloads across multiple cloud providers to avoid vendor lock-in, optimize costs, and enhance resilience. This approach enables organizations to leverage the best services from each cloud provider while maintaining flexibility and reducing risk.",
    features[
      {
        title"Vendor Independence",
        description"Avoid vendor lock-in with flexible multi-provider architecture",
        icon
      },
      {
        title"Cost Optimization",
        description"Optimize costs by selecting best-priced services from each provider",
        icon
      },
      {
        title"Risk Mitigation",
        description"Reduce single points of failure with distributed architecture",
        icon
      },
      {
        title"Best-of-Breed",
        description"Choose optimal services from each cloud provider",
        icon
      }
    ],
    benefits[
      "Improved resilience and disaster recovery",
      "Enhanced negotiating power with cloud providers",
      "Optimal performance through strategic workload placement",
      "Reduced costs through competitive pricing",
      "Compliance with data sovereignty requirements"
    ],
    useCases[
      {
        title"Global Operations",
        description"Deploy applications across regions with optimal cloud providers",
        industry"Enterprise"
      },
      {
        title"Disaster Recovery",
        description"Implement robust DR strategies across multiple clouds",
        industry"Financial Services"
      },
      {
        title"Data Residency",
        description"Meet regulatory requirements with strategic data placement",
        industry"Healthcare"
      }
    ],
    technologies["AWS", "Azure", "Google Cloud", "Kubernetes", "Terraform", "Istio", "Consul", "Prometheus"],
    caseStudy{
      client"Global Financial Institution",
      challenge"Required global deployment with strict regulatory compliance",
      solution"Implemented multi-cloud strategy with AWS, Azure, and Google Cloud",
      results[
        "Achieved 99.99% global availability",
        "Reduced cloud costs by 25%",
        "Met all regional compliance requirements",
        "Improved disaster recovery capabilities"
      ]
    },
    implementation{
      phases[
        {
          title"Strategy Development",
          duration"3-4 weeks",
          description"Develop multi-cloud strategy and governance framework"
        },
        {
          title"Architecture Design",
          duration"4-6 weeks",
          description"Design multi-cloud architecture and integration patterns"
        },
        {
          title"Implementation",
          duration"12-20 weeks",
          description"Implement multi-cloud infrastructure and applications"
        },
        {
          title"Management & Optimization",
          duration"Ongoing",
          description"Continuous monitoring and optimization across clouds"
        }
      ]
    },
    relatedServices["Cloud Services", "Digital Advisory", "DevOps Integration"]
  },
  "private-cloud"{
    title"Private Cloud",
    category"Cloud Infrastructure",
    description"Dedicated cloud infrastructure providing enhanced security, control, and compliance for enterprise workloads.",
    fullDescription"Private cloud solutions offer dedicated infrastructure that provides the benefits of cloud computing while maintaining complete control over security, compliance, and performance. Ideal for organizations with strict regulatory requirements or sensitive data handling needs.",
    features[
      {
        title"Enhanced Security",
        description"Dedicated infrastructure with customizable security controls",
        icon
      },
      {
        title"Regulatory Compliance",
        description"Meet strict compliance requirements with controlled environments",
        icon
      },
      {
        title"Performance Control",
        description"Predictable performance with dedicated resources",
        icon
      },
      {
        title"Custom Configuration",
        description"Tailored infrastructure to meet specific business needs",
        icon
      }
    ],
    benefits[
      "Complete control over infrastructure and data",
      "Enhanced security and privacy protection",
      "Predictable performance and costs",
      "Simplified compliance and audit processes",
      "Customizable to specific business requirements"
    ],
    useCases[
      {
        title"Financial Services",
        description"Handle sensitive financial data with regulatory compliance",
        industry"Finance"
      },
      {
        title"Healthcare Systems",
        description"Protect patient data while enabling digital transformation",
        industry"Healthcare"
      },
      {
        title"Government Agencies",
        description"Secure cloud infrastructure for sensitive government operations",
        industry"Government"
      }
    ],
    technologies["VMware vSphere", "OpenStack", "Hyper-V", "KVM", "Kubernetes", "Docker", "Ansible", "Terraform"],
    caseStudy{
      client"Healthcare Network",
      challenge"Needed cloud benefits while maintaining HIPAA compliance and data control",
      solution"Implemented private cloud with VMware vSphere and enhanced security controls",
      results[
        "Achieved 100% HIPAA compliance",
        "Reduced infrastructure costs by 30%",
        "Improved system availability to 99.9%",
        "Enhanced data security and privacy protection"
      ]
    },
    implementation{
      phases[
        {
          title"Requirements Assessment",
          duration"2-3 weeks",
          description"Assess security, compliance, and performance requirements"
        },
        {
          title"Infrastructure Design",
          duration"3-5 weeks",
          description"Design private cloud architecture and security controls"
        },
        {
          title"Deployment",
          duration"8-12 weeks",
          description"Deploy and configure private cloud infrastructure"
        },
        {
          title"Management & Support",
          duration"Ongoing",
          description"Ongoing management and optimization of private cloud"
        }
      ]
    },
    relatedServices["Cloud Services", "Digital Security", "Managed IT Services"]
  },
  "edge-computing"{
    title"Edge Computing",
    category"Infrastructure",
    description"Distributed computing paradigm bringing computation closer to data sources for reduced latency and improved performance.",
    fullDescription"Edge computing enables processing and analysis of data at or near the source of data generation, reducing latency and bandwidth usage. This approach is critical for IoT applications, real-time analytics, and applications requiring immediate response times.",
    features[
      {
        title"Low Latency",
        description"Minimize response times with local data processing",
        icon
      },
      {
        title"Bandwidth Optimization",
        description"Reduce bandwidth usage by processing data locally",
        icon
      },
      {
        title"Real-time Processing",
        description"Enable immediate data analysis and decision making",
        icon
      },
      {
        title"Distributed Architecture",
        description"Scale processing across multiple edge locations",
        icon
      }
    ],
    benefits[
      "Reduced latency for real-time applications",
      "Lower bandwidth costs and network traffic",
      "Improved reliability with distributed processing",
      "Enhanced data privacy with local processing",
      "Better user experience with faster response times"
    ],
    useCases[
      {
        title"IoT Applications",
        description"Process sensor data from industrial equipment in real-time",
        industry"Manufacturing"
      },
      {
        title"Autonomous Vehicles",
        description"Enable real-time decision making for self-driving cars",
        industry"Automotive"
      },
      {
        title"Smart Cities",
        description"Process traffic and infrastructure data for city optimization",
        industry"Government"
      }
    ],
    technologies["AWS Greengrass", "Azure IoT Edge", "Google Cloud IoT", "Kubernetes", "Docker", "OpenFaaS", "MQTT", "InfluxDB"],
    caseStudy{
      client"Smart Manufacturing Plant",
      challenge"Needed real-time processing of machine data for predictive maintenance",
      solution"Deployed edge computing infrastructure with local AI processing",
      results[
        "Reduced machine downtime by 60%",
        "Achieved sub-10ms response times",
        "Decreased bandwidth usage by 80%",
        "Improved production efficiency by 25%"
      ]
    },
    implementation{
      phases[
        {
          title"Edge Assessment",
          duration"2-3 weeks",
          description"Assess edge computing requirements and infrastructure needs"
        },
        {
          title"Architecture Design",
          duration"3-4 weeks",
          description"Design edge computing architecture and deployment strategy"
        },
        {
          title"Deployment",
          duration"6-10 weeks",
          description"Deploy edge infrastructure and applications"
        },
        {
          title"Monitoring & Optimization",
          duration"Ongoing",
          description"Monitor performance and optimize edge deployments"
        }
      ]
    },
    relatedServices["Cloud Services", "AI Smart Solutions", "IoT Solutions"]
  },
  "devops-integration"{
    title"DevOps Integration",
    category"Development",
    description"Integration of development and operations practices for faster, more reliable software delivery and deployment.",
    fullDescription"DevOps integration brings together development and operations teams through shared practices, tools, and cultural changes. This approach enables continuous integration, continuous deployment, and faster delivery of high-quality software solutions.",
    features[
      {
        title"Continuous Integration",
        description"Automated code integration and testing workflows",
        icon2
      },
      {
        title"Automated Deployment",
        description"Streamlined deployment pipelines with zero-downtime releases",
        icon
      },
      {
        title"Infrastructure as Code",
        description"Manage infrastructure through version-controlled code",
        icon
      },
      {
        title"Monitoring & Feedback",
        description"Comprehensive monitoring with real-time feedback loops",
        icon
      }
    ],
    benefits[
      "Faster time-to-market with automated processes",
      "Improved software quality through continuous testing",
      "Reduced deployment risks with automated rollbacks",
      "Enhanced collaboration between teams",
      "Increased operational efficiency and reliability"
    ],
    useCases[
      {
        title"Software Development",
        description"Accelerate application development and deployment cycles",
        industry"Technology"
      },
      {
        title"Enterprise Applications",
        description"Modernize legacy application deployment processes",
        industry"Enterprise"
      },
      {
        title"Microservices",
        description"Manage complex microservices architectures efficiently",
        industry"All Industries"
      }
    ],
    technologies["Jenkins", "GitLab CI/CD", "Docker", "Kubernetes", "Terraform", "Ansible", "Prometheus", "Grafana"],
    caseStudy{
      client"SaaS Platform",
      challenge"Needed to accelerate feature delivery while maintaining system reliability",
      solution"Implemented comprehensive DevOps pipeline with automated testing and deployment",
      results[
        "Reduced deployment time from days to minutes",
        "Increased release frequency by 500%",
        "Decreased production incidents by 70%",
        "Improved team productivity by 40%"
      ]
    },
    implementation{
      phases[
        {
          title"Current State Assessment",
          duration"1-2 weeks",
          description"Evaluate existing development and deployment processes"
        },
        {
          title"Pipeline Design",
          duration"2-4 weeks",
          description"Design CI/CD pipelines and infrastructure automation"
        },
        {
          title"Implementation",
          duration"6-10 weeks",
          description"Implement DevOps tools and processes"
        },
        {
          title"Culture & Training",
          duration"4-8 weeks",
          description"Train teams and establish DevOps culture"
        }
      ]
    },
    relatedServices["Application Development", "Cloud Services", "Digital Advisory"]
  }
};

interface TechnologyPageProps {
  params{
    slug;
  };
}

export default function TechnologyPage({ params }) {
  const technology = technologiesData[params.slug as keyof typeof technologiesData];

  if (!technology) {
    notFound();
  }

  return (
    <PageLayout>
      <div className="min-h-screen bg-white">
        
        {/* Header Section */}
        <section className="relative bg-gradient-to-r from-slate-900 to-slate-700 pt-32 pb-20">
          <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
            
            <div className="max-w-4xl">
              {/* Category Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-[#f97316] text-white rounded-full font-medium mb-6">
                {technology.category}
              </div>

              {/* Title and Description */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                {technology.title}
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                {technology.description}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold rounded-full transition-all duration-300"
                >
                  Get Started
                  <CheckCircle className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-[#1e3a8a] font-semibold rounded-full transition-all duration-300"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-8">Overview</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {technology.fullDescription}
              </p>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-4">Key Features</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Powerful capabilities that drive business transformation and competitive advantage.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {technology.features.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-[#f97316] rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-8 text-center">Benefits</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {technology.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-4">Use Cases</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Real-world applications across different industries and business scenarios.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {technology.useCases.map((useCase, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="text-sm text-[#f97316] font-medium mb-2">{useCase.industry}</div>
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-3">{useCase.title}</h3>
                  <p className="text-gray-600">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-12 text-center">Case Study</h2>
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4">Client</h3>
                    <p className="text-gray-700 mb-6">{technology.caseStudy.client}</p>
                    
                    <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4">Challenge</h3>
                    <p className="text-gray-700">{technology.caseStudy.challenge}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4">Solution</h3>
                    <p className="text-gray-700 mb-6">{technology.caseStudy.solution}</p>
                    
                    <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4">Results</h3>
                    <ul className="space-y-3">
                      {technology.caseStudy.results.map((result, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                          <span className="text-gray-700">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Process */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-4">Implementation Process</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our proven methodology ensures successful technology implementation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {technology.implementation.phases.map((phase, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="w-12 h-12 bg-[#f97316] rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">{phase.title}</h3>
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Clock className="w-4 h-4 mr-1" />
                    {phase.duration}
                  </div>
                  <p className="text-gray-600">{phase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Used */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-4">Technologies We Use</h2>
            </div>

            <div className="flex flex-wrap gap-4 justify-center max-w-4xl mx-auto">
              {technology.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-6 py-3 bg-gray-100 text-gray-800 rounded-full font-medium hover:bg-[#f97316] hover:text-white transition-colors cursor-pointer"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-4">Related Services</h2>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              {technology.relatedServices.map((service, index) => (
                <Link 
                  key={index}
                  href="/services"
                  className="px-6 py-3 bg-white border-2 border-[#f97316] text-[#f97316] rounded-full font-medium"
                >
                  {service}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#f97316]">
          <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Implement {technology.title}?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Let our experts help you leverage this technology to transform your business operations and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-[#f97316] font-semibold rounded-full hover:bg-gray-100 transition-colors"
              >
                Get Started Today
                <CheckCircle className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-[#f97316] font-semibold rounded-full transition-colors"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </section>

      </div>
    </PageLayout>
  );
}