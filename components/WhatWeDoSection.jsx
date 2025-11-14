"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Brain, BarChart3, Code, Globe, Shield, Cloud, ChevronLeft, ChevronRight, Settings } from "lucide-react";
import Image from "next/image";

const WhatWeDoSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const getCardsPerSlide = () => {
    if (isMobile) return 1;
    if (isTablet) return 2;
    return 3;
  };

  const getTotalSlides = () => {
    return Math.ceil(services.length / getCardsPerSlide());
  };

  const services = [
    {
      id: 'digital-advisory',
      title: 'Digital Advisory',
      description: 'Understand, anticipate, and accelerate with confidence.',
      fullDescription: 'Strategic guidance to accelerate your digital transformation journey with expert consulting and roadmap development.',
      features: ['Digital Strategy Development', 'Technology Assessment & Planning', 'Change Management Support', 'Digital Transformation Roadmaps'],
      benefits: ['Accelerated Innovation', '25% Faster Implementation', 'Reduced Risk', 'Strategic Alignment'],
      icon: Brain,
      image: '/images/digital-advisory-hero.jpg',
      href: '/services/digital-advisory'
    },
    {
      id: 'data-analytics',
      title: 'Applied Data & Analytics',
      description: 'Harness your data to fuel digital transformation.',
      fullDescription: 'Transform raw data into actionable intelligence that drives business growth through advanced analytics and machine learning.',
      features: ['Advanced Analytics Solutions', 'Machine Learning Implementation', 'Data Science Consulting', 'Business Intelligence Systems'],
      benefits: ['Data-Driven Decisions', '40% Better Insights', 'Predictive Capabilities', 'Automated Reporting'],
      icon: BarChart3,
      image: '/data-analytics-background.jpg',
      href: '/services/applied-data-analytics'
    },
    {
      id: 'application-development',
      title: 'Application Development',
      description: 'Upgrade the way you work and captivate your customers.',
      fullDescription: 'Custom applications built with modern technologies to solve unique business challenges and drive innovation.',
      features: ['Custom Application Development', 'Modern Technology Stack', 'API Development & Integration', 'Scalable Architecture Design'],
      benefits: ['Enhanced User Experience', '60% Faster Performance', 'Seamless Integration', 'Future-Ready Solutions'],
      icon: Code,
      image: '/images/work-hero.jpg',
      href: '/services/software-development'
    },
    {
      id: 'digital-platforms',
      title: 'Digital Platforms',
      description: 'Boost your growth and productivity using modern platforms and tools.',
      fullDescription: 'Boost growth and productivity using ERP, CRM, and CMS platforms tailored to your business needs.',
      features: ['ERP System Implementation', 'CRM Platform Development', 'Content Management Solutions', 'Platform Integration Services'],
      benefits: ['Streamlined Operations', '35% Productivity Gain', 'Unified Data Management', 'Automated Workflows'],
      icon: Globe,
      image: '/digital-platforms-hero-bg-new.jpg',
      href: '/services/digital-platforms'
    },
    {
      id: 'cyber-security',
      title: 'Cyber Security & Privacy',
      description: 'Minimize threats and proactively protect your most valuable assets.',
      fullDescription: 'Comprehensive security solutions to protect your digital assets and ensure compliance with privacy regulations.',
      features: ['Advanced Threat Protection', 'Privacy Compliance Management', 'Security Assessment & Auditing', 'Incident Response Planning'],
      benefits: ['99.9% Threat Prevention', 'Regulatory Compliance', '24/7 Monitoring', 'Rapid Response'],
      icon: Shield,
      image: '/images/cyber-security-hero.jpg',
      href: '/services/cyber-security-privacy'
    },
    {
      id: 'cloud-services',
      title: 'Cloud Services',
      description: 'Gain efficiencies and amplify innovation by leveraging the cloud.',
      fullDescription: 'Cloud migration and optimization services to accelerate digital transformation and improve scalability.',
      features: ['Cloud Migration Strategy', 'Infrastructure Optimization', 'Multi-Cloud Management', 'Cost Optimization Solutions'],
      benefits: ['50% Cost Reduction', 'Enhanced Scalability', 'Improved Performance', 'Global Accessibility'],
      icon: Cloud,
      image: '/images/cloud-services-hero.jpg',
      href: '/services/cloud-services'
    },
    {
      id: 'ai-smart-solutions',
      title: 'AI & Smart Solutions',
      description: 'Harness AI to automate processes and unlock intelligent insights.',
      fullDescription: 'Leverage artificial intelligence and machine learning to automate processes and create competitive advantages.',
      features: ['Machine Learning Models', 'Intelligent Automation', 'Predictive Analytics', 'Natural Language Processing'],
      benefits: ['60% Process Automation', '85% Accuracy Improvement', '40% Cost Reduction', 'Real-time Insights'],
      icon: Brain,
      image: '/insight-3.jpg',
      href: '/services/ai-smart-solutions'
    },
    {
      id: 'managed-it-services',
      title: 'Managed IT Services',
      description: 'Reliable IT infrastructure management to keep your business running smoothly.',
      fullDescription: 'Complete IT infrastructure management and support services to ensure optimal performance and reliability.',
      features: ['24/7 IT Monitoring', 'Help Desk Support', 'Infrastructure Management', 'Backup & Recovery'],
      benefits: ['99.9% Uptime', '24/7 Support', '30% Cost Savings', 'Proactive Maintenance'],
      icon: Settings,
      image: '/managed-it-services-hero.jpg',
      href: '/services/managed-it-services'
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const cardsPerSlide = getCardsPerSlide();
        const maxSlide = services.length - cardsPerSlide;
        return prev >= maxSlide ? 0 : prev + cardsPerSlide;
      });
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, services.length, isMobile, isTablet]);

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      const cardsPerSlide = getCardsPerSlide();
      const maxSlide = services.length - cardsPerSlide;
      return prev >= maxSlide ? 0 : prev + cardsPerSlide;
    });
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      const cardsPerSlide = getCardsPerSlide();
      const maxSlide = services.length - cardsPerSlide;
      return prev <= 0 ? maxSlide : prev - cardsPerSlide;
    });
    setIsAutoPlaying(false);
  };

  const goToSlide = (slideIndex) => {
    const cardsPerSlide = getCardsPerSlide();
    setCurrentSlide(slideIndex * cardsPerSlide);
    setIsAutoPlaying(false);
  };

  const BarChartVisualization = () => (
    <div className="absolute inset-0 opacity-30">
      <div className="absolute right-0 top-0 w-2/3 h-full">
        <div className="flex items-end justify-end h-full gap-1 pr-4 pb-8">
          {[0.3, 0.6, 0.4, 0.8, 0.5, 0.7, 0.6, 0.9, 0.4, 0.7, 0.5, 0.8, 0.3, 0.6, 0.9].map((height, i) => (
            <div
              key={i}
              className={`w-1.5 rounded-t transition-all duration-300 ${
                i < 8 ? 'bg-gradient-to-t from-teal-400 to-cyan-300' :
                i < 12 ? 'bg-gradient-to-t from-orange-400 to-red-300' :
                'bg-gradient-to-t from-purple-400 to-pink-300'
              }`}
              style={{ height: `${height * 80}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );

  const DotMatrixPattern = () => (
    <div className="absolute inset-0 opacity-40">
      <div className="absolute left-0 top-0 w-2/3 h-full">
        <div className="grid grid-cols-10 gap-2 h-full items-center pl-4 pt-8">
          {Array.from({ length: 100 }, (_, i) => {
            const row = Math.floor(i / 10);
            const col = i % 10;
            const baseColors = [
              'bg-pink-400', 'bg-rose-400', 'bg-orange-400', 'bg-amber-400',
              'bg-yellow-400', 'bg-teal-400', 'bg-cyan-400', 'bg-blue-400',
              'bg-indigo-400', 'bg-purple-400'
            ];
            const color = baseColors[(row + col) % baseColors.length];
            const sizes = ['w-1 h-1', 'w-1.5 h-1.5', 'w-2 h-2'];
            const size = sizes[i % sizes.length];
            const opacity = 0.3 + (Math.sin(i * 0.1) * 0.4);
            return (
              <div
                key={i}
                className={`${color} ${size} rounded-full transition-all duration-500`}
                style={{ opacity: Math.abs(opacity) }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );

  const NetworkPattern = () => (
    <div className="absolute inset-0 opacity-30">
      <div className="absolute left-0 top-0 w-3/4 h-full">
        <svg className="w-full h-full" viewBox="0 0 200 150">
          <defs>
            <linearGradient id="netGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#14b8a6" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
            <linearGradient id="netGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#ef4444" />
            </linearGradient>
          </defs>
          
          {/* Connection lines */}
          <line x1="20" y1="30" x2="180" y2="30" stroke="url(#netGrad1)" strokeWidth="1.5" opacity="0.4"/>
          <line x1="20" y1="30" x2="20" y2="120" stroke="url(#netGrad1)" strokeWidth="1.5" opacity="0.4"/>
          <line x1="180" y1="30" x2="180" y2="120" stroke="url(#netGrad2)" strokeWidth="1.5" opacity="0.4"/>
          <line x1="20" y1="120" x2="180" y2="120" stroke="url(#netGrad2)" strokeWidth="1.5" opacity="0.4"/>
          <line x1="20" y1="30" x2="100" y2="75" stroke="url(#netGrad1)" strokeWidth="1.5" opacity="0.4"/>
          <line x1="180" y1="30" x2="100" y2="75" stroke="url(#netGrad2)" strokeWidth="1.5" opacity="0.4"/>
          <line x1="20" y1="120" x2="100" y2="75" stroke="url(#netGrad1)" strokeWidth="1.5" opacity="0.4"/>
          <line x1="180" y1="120" x2="100" y2="75" stroke="url(#netGrad2)" strokeWidth="1.5" opacity="0.4"/>
          <line x1="60" y1="50" x2="140" y2="100" stroke="url(#netGrad1)" strokeWidth="1" opacity="0.3"/>
          <line x1="140" y1="50" x2="60" y2="100" stroke="url(#netGrad2)" strokeWidth="1" opacity="0.3"/>
          
          {/* Nodes */}
          <circle cx="20" cy="30" r="5" fill="url(#netGrad1)"/>
          <circle cx="180" cy="30" r="5" fill="url(#netGrad2)"/>
          <circle cx="100" cy="75" r="6" fill="url(#netGrad1)"/>
          <circle cx="20" cy="120" r="5" fill="url(#netGrad2)"/>
          <circle cx="180" cy="120" r="5" fill="url(#netGrad1)"/>
          <circle cx="60" cy="50" r="4" fill="url(#netGrad2)"/>
          <circle cx="140" cy="100" r="4" fill="url(#netGrad1)"/>
          <circle cx="140" cy="50" r="3" fill="url(#netGrad2)"/>
          <circle cx="60" cy="100" r="3" fill="url(#netGrad1)"/>
        </svg>
      </div>
    </div>
  );

  const CloudPattern = () => (
    <div className="absolute inset-0 opacity-30">
      <div className="absolute left-0 top-0 w-3/4 h-full">
        <div className="relative w-full h-full flex items-center justify-start pl-8">
          {/* Background circles */}
          <div className="absolute w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-300 rounded-full opacity-20 top-8 left-12"></div>
          <div className="absolute w-16 h-16 bg-gradient-to-br from-indigo-400 to-purple-300 rounded-full opacity-25 top-4 left-24"></div>
          <div className="absolute w-24 h-24 bg-gradient-to-br from-teal-400 to-green-300 rounded-full opacity-15 bottom-8 left-8"></div>
          <div className="absolute w-12 h-12 bg-gradient-to-br from-orange-400 to-yellow-300 rounded-full opacity-30 bottom-12 left-20"></div>
          
          {/* Main cloud */}
          <svg className="w-32 h-32 text-white/40" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
          </svg>
          
          {/* Secondary clouds */}
          <svg className="absolute w-20 h-20 text-white/20 top-12 left-32" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
          </svg>
          
          <svg className="absolute w-16 h-16 text-white/15 bottom-16 left-36" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
          </svg>
        </div>
      </div>
    </div>
  );

  const ShieldPattern = () => (
    <div className="absolute inset-0 opacity-30">
      <div className="absolute right-0 top-0 w-2/3 h-full flex items-center justify-center">
        <div className="relative">
          {/* Multiple shield layers */}
          <svg className="w-24 h-24 absolute" viewBox="0 0 100 100">
            <defs>
              <linearGradient id="shieldGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#14b8a6" />
              </linearGradient>
            </defs>
            <path
              d="M50 10 L75 22 L75 45 C75 65 50 85 50 85 C50 85 25 65 25 45 L25 22 Z"
              fill="url(#shieldGrad1)"
              opacity="0.4"
            />
            <polyline
              points="35,42 45,52 65,32"
              stroke="white"
              strokeWidth="2"
              fill="none"
              opacity="0.8"
            />
          </svg>
          
          {/* Secondary shields */}
          <svg className="w-16 h-16 absolute top-8 -left-4" viewBox="0 0 100 100">
            <path
              d="M50 15 L70 25 L70 45 C70 60 50 80 50 80 C50 80 30 60 30 45 L30 25 Z"
              fill="url(#shieldGrad1)"
              opacity="0.2"
            />
          </svg>
          
          <svg className="w-12 h-12 absolute -top-2 right-2" viewBox="0 0 100 100">
            <path
              d="M50 20 L65 28 L65 45 C65 58 50 75 50 75 C50 75 35 58 35 45 L35 28 Z"
              fill="url(#shieldGrad1)"
              opacity="0.3"
            />
          </svg>
        </div>
      </div>
    </div>
  );

  const CodePattern = () => (
    <div className="absolute inset-0 opacity-25">
      <div className="absolute right-0 top-0 w-3/4 h-full">
        <div className="relative w-full h-full flex items-center justify-end pr-6">
          <div className="font-mono text-xs space-y-2 text-white">
            <div className="opacity-80">
              <span className="text-pink-300">function</span>{' '}
              <span className="text-[#1e3a8a]">buildApp</span>
              <span className="text-yellow-300">()</span>{' '}
              <span className="text-white">{'{'}</span>
            </div>
            <div className="pl-4 opacity-70">
              <span className="text-green-300">const</span>{' '}
              <span className="text-cyan-300">data</span>{' '}
              <span className="text-white">=</span>{' '}
              <span className="text-orange-300">fetch</span>
              <span className="text-yellow-300">()</span>
              <span className="text-white">;</span>
            </div>
            <div className="pl-4 opacity-60">
              <span className="text-purple-300">return</span>{' '}
              <span className="text-teal-300">process</span>
              <span className="text-yellow-300">(data)</span>
              <span className="text-white">;</span>
            </div>
            <div className="opacity-80">
              <span className="text-white">{'}'}</span>
            </div>
            <div className="opacity-50">
              <span className="text-gray-400">// Transform ideas to reality</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section>
      <div className="container mx-auto px-6 md:px-8 lg:px-12 1366:px-8 max-w-7xl 1366:max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-16 1366:mb-12">
          <h2 className="text-5xl md:text-6xl 1366:text-5xl font-bold mb-6 1366:mb-4">
            <span className="text-[#1e3a8a]">What we</span> <span className="text-[#f97316]">do</span>
          </h2>
          <p className="text-lg 1366:text-base text-[#1e3a8a] leading-relaxed max-w-3xl 1366:max-w-2xl mx-auto">
            We combine inspiration and expertise to deliver purpose-driven strategies and solutions that transform your business.
          </p>
        </div>

        {/* Services Slider Container */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${(currentSlide / getCardsPerSlide()) * 100}%)`,
              }}
            >
              {services.map((service, index) => {
                const IconComponent = service.icon;
                
                return (
                  <div
                    key={service.id}
                    className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4 1366:px-3"
                  >
                    <a href={service.href} className="block">
                      <div className="flip-box h-80 md:h-96 1366:h-72">
                        <div 
                          className={`flip-box-inner ${hoveredCard === index ? 'flipped' : ''}`}
                          onMouseEnter={() => setHoveredCard(index)}
                          onMouseLeave={() => setHoveredCard(null)}
                        >
                          {/* Front Side - Image */}
                          <div className="flip-box-front">
                            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg">
                              {/* Service Image */}
                              <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                              />
                              
                              {/* Service-specific overlay */}
                              {service.id === 'cyber-security' ? (
                                <div className="absolute inset-0">
                                  {/* Cybersecurity themed overlay */}
                                  <div className="absolute inset-0 bg-gradient-to-t from-red-900/80 via-purple-900/40 to-blue-900/20"></div>
                                  
                                  {/* Security-themed elements */}
                                  <div className="absolute inset-0 opacity-30">
                                    {/* Shield icons */}
                                    <div className="absolute top-4 left-4 w-8 h-10 border-2 border-green-400/60 rounded-t-lg">
                                      <div className="w-3 h-3 bg-green-400/80 rounded-full mx-auto mt-2"></div>
                                    </div>
                                    <div className="absolute top-6 right-6 w-6 h-8 border-2 border-green-400/40 rounded-t-lg">
                                      <div className="w-2 h-2 bg-green-400/60 rounded-full mx-auto mt-1"></div>
                                    </div>
                                    
                                    {/* Lock elements */}
                                    <div className="absolute bottom-12 left-6 w-4 h-6 border-2 border-yellow-400/60 rounded-t-md">
                                      <div className="w-2 h-2 bg-yellow-400/80 rounded-full mx-auto mt-1"></div>
                                    </div>
                                    
                                    {/* Binary code pattern */}
                                    <div className="absolute top-8 left-12 text-green-400/40 text-xs font-mono">
                                      <div>101010</div>
                                      <div>110011</div>
                                    </div>
                                    <div className="absolute bottom-8 right-8 text-green-400/30 text-xs font-mono">
                                      <div>001101</div>
                                      <div>101110</div>
                                    </div>
                                    
                                    {/* Security bars/alerts */}
                                    <div className="absolute top-12 right-12 space-y-1">
                                      <div className="w-12 h-1 bg-red-400/60 rounded"></div>
                                      <div className="w-8 h-1 bg-yellow-400/50 rounded"></div>
                                      <div className="w-10 h-1 bg-green-400/40 rounded"></div>
                                    </div>
                                    
                                    {/* Network security nodes */}
                                    <div className="absolute bottom-16 left-12 w-2 h-2 bg-blue-400/70 rounded-full"></div>
                                    <div className="absolute bottom-20 left-16 w-1.5 h-1.5 bg-blue-400/50 rounded-full"></div>
                                    <div className="absolute bottom-14 left-20 w-1 h-1 bg-blue-400/40 rounded-full"></div>
                                    
                                    {/* Connection lines */}
                                    <svg className="absolute bottom-14 left-12 w-12 h-8" viewBox="0 0 48 32">
                                      <line x1="0" y1="16" x2="16" y2="8" stroke="rgba(96, 165, 250, 0.3)" strokeWidth="1"/>
                                      <line x1="0" y1="16" x2="32" y2="24" stroke="rgba(96, 165, 250, 0.2)" strokeWidth="1"/>
                                    </svg>
                                  </div>
                                  
                                  {/* Text readability gradient at bottom */}
                                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/80 to-transparent"></div>
                                </div>
                              ) : (
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10"></div>
                              )}
                              
                              {/* Title at bottom */}
                              <div className="absolute bottom-0 left-0 right-0 p-6 1366:p-4">
                                <h4 className="text-white text-xl 1366:text-lg font-bold drop-shadow-lg">
                                  {service.title}
                                </h4>
                              </div>
                            </div>
                          </div>

                          {/* Back Side - Details */}
                          <div className="flip-box-back">
                            <div className={`w-full h-full rounded-2xl shadow-lg p-6 1366:p-4 flex flex-col justify-center text-white ${
                              index % 3 === 0 ? 'bg-gradient-to-br from-[#1e3a8a] to-[#1e40af]' :
                              index % 3 === 1 ? 'bg-gradient-to-br from-purple-600 to-purple-800' :
                              'bg-gradient-to-br from-green-600 to-green-800'
                            }`}>
                              <div className="mb-4 1366:mb-3">
                                <h4 className="text-xl 1366:text-lg font-bold mb-3 1366:mb-2">
                                  {service.title}
                                </h4>
                              </div>
                              <p className="text-white/90 text-base 1366:text-sm leading-relaxed">
                                {service.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Title below card */}
                      <h4 className="text-center mt-6 1366:mt-4 text-lg 1366:text-base font-semibold text-[#1e3a8a]">
                        {service.title}
                      </h4>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex items-center justify-center mt-12 1366:mt-8 space-x-8 1366:space-x-6">
            <button
              onClick={prevSlide}
              className="p-4 1366:p-3 rounded-full bg-blue-50 text-[#1e3a8a] hover:bg-orange-100 hover:text-orange-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={currentSlide === 0}
            >
              <ChevronLeft className="w-6 h-6 1366:w-5 1366:h-5" />
            </button>
            
            {/* Slide Indicators */}
            <div className="flex space-x-2 1366:space-x-1.5">
              {Array.from({ length: getTotalSlides() }, (_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 1366:w-2.5 1366:h-2.5 rounded-full transition-all duration-300 ${
                    Math.floor(currentSlide / getCardsPerSlide()) === index
                      ? 'bg-orange-600' 
                      : 'bg-blue-300 hover:bg-blue-400'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              className="p-4 1366:p-3 rounded-full bg-blue-50 text-[#1e3a8a] hover:bg-orange-100 hover:text-orange-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={currentSlide >= services.length - getCardsPerSlide()}
            >
              <ChevronRight className="w-6 h-6 1366:w-5 1366:h-5" />
            </button>
          </div>
        </div>
        
      </div>
      
      {/* Custom CSS for Flip Card Slider */}
      <style jsx>{`
        /* Flip Card Styles */
        .flip-box {
          perspective: 1000px;
        }
        
        .flip-box-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }
        
        .flip-box-inner.flipped {
          transform: rotateY(180deg);
        }
        
        .flip-box-front,
        .flip-box-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 1rem;
        }
        
        .flip-box-back {
          transform: rotateY(180deg);
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .text-4xl {
            font-size: 2rem !important;
          }
          
          .md\\:text-5xl {
            font-size: 2.5rem !important;
          }
          
          .text-lg {
            font-size: 1rem !important;
          }
          
          .h-80 {
            height: 18rem !important;
          }
          
          .md\\:h-96 {
            height: 20rem !important;
          }
          
          .p-6 {
            padding: 1rem !important;
          }
        }
        
        @media (max-width: 640px) {
          .mb-16 {
            margin-bottom: 2rem !important;
          }
          
          .py-20 {
            padding-top: 3rem !important;
            padding-bottom: 3rem !important;
          }
          
          .mt-12 {
            margin-top: 2rem !important;
          }
          
          .space-x-8 > :not([hidden]) ~ :not([hidden]) {
            margin-left: 1rem !important;
          }
          
          .px-4 {
            padding-left: 0.5rem !important;
            padding-right: 0.5rem !important;
          }
          
          .h-80 {
            height: 16rem !important;
          }
          
          .md\\:h-96 {
            height: 18rem !important;
          }
          
          .text-xl {
            font-size: 1.125rem !important;
          }
          
          .w-16 {
            width: 3rem !important;
          }
          
          .h-16 {
            height: 3rem !important;
          }
        }
        
        /* Hover effects */
        .flip-box:hover .flip-box-inner {
          transform: rotateY(180deg);
        }
        
        /* Smooth transitions */
        .flip-box-front,
        .flip-box-back {
          transition: opacity 0.3s ease;
        }
      `}</style>
    </section>
  );
};

export default WhatWeDoSection;