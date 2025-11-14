"use client";

import React, { useEffect, useState, useRef } from "react";
import { ArrowRight, Play, CheckCircle, Users, TrendingUp } from "lucide-react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [nextVideoIndex, setNextVideoIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [videosReady, setVideosReady] = useState(false);
  const videoRef = useRef(null);
  const nextVideoRef = useRef(null);
  const heroRef = useRef(null);

  // Defer video loading for performance
  const videos = [
    '/videos/1851190-uhd_3840_2160_25fps.mp4',
    '/videos/3969423-uhd_3840_2160_25fps.mp4',
    '/videos/5240956-uhd_3840_2160_30fps.mp4',
    '/videos/8084622-uhd_3840_2160_25fps.mp4'
  ];
  
  

  // Slideshow data
  const slides = [
    {
      id: 1,
      title: "Empower Your Microsoft 365 Ecosystem",
      subtitle: "Microsoft Solutions",
      description: "Complete Microsoft ecosystem implementation and optimization for modern workplaces",
      trustPoints: [
        { icon: CheckCircle, text: "Microsoft Gold Partner" },
        { icon: Users, text: "Expert Implementation" },
        { icon: TrendingUp, text: "Seamless Integration" }
      ]
    },
    {
      id: 2,
      title: "Navigate Digital Transformation with Confidence",
      subtitle: "Strategic Digital Guidance",
      description: "Strategic guidance to transform your business digitally with expert consulting",
      trustPoints: [
        { icon: CheckCircle, text: "Strategic Planning" },
        { icon: Users, text: "Expert Consultants" },
        { icon: TrendingUp, text: "Digital Transformation" }
      ]
    },
    {
      id: 3,
      title: "Unlock the Power of Your Data",
      subtitle: "Data-Driven Insights",
      description: "Transform data into actionable business insights with advanced analytics",
      trustPoints: [
        { icon: CheckCircle, text: "Advanced Analytics" },
        { icon: Users, text: "Data Scientists" },
        { icon: TrendingUp, text: "Business Intelligence" }
      ]
    },
    {
      id: 4,
      title: "Build Software That Scales",
      subtitle: "Custom Applications",
      description: "Custom mobile and web applications built to scale with modern technology",
      trustPoints: [
        { icon: CheckCircle, text: "Custom Solutions" },
        { icon: Users, text: "Expert Developers" },
        { icon: TrendingUp, text: "Scalable Architecture" }
      ]
    },
    {
      id: 5,
      title: "Modernize with Next-Gen Digital Platforms",
      subtitle: "Modern Platform Solutions",
      description: "Modern platforms that drive innovation and growth for your business",
      trustPoints: [
        { icon: CheckCircle, text: "Platform Development" },
        { icon: Users, text: "Innovation Focus" },
        { icon: TrendingUp, text: "Growth Enablement" }
      ]
    },
    {
      id: 6,
      title: "Fortify Your Digital Fortress",
      subtitle: "Protected & Secure",
      description: "Comprehensive security solutions for enterprise protection and regulatory compliance",
      trustPoints: [
        { icon: CheckCircle, text: "Zero Security Breaches" },
        { icon: Users, text: "SOC 2 Compliant" },
        { icon: TrendingUp, text: "Advanced Threat Detection" }
      ]
    },
    {
      id: 7,
      title: "Scale Limitlessly in the Cloud",
      subtitle: "Scalable Cloud Infrastructure",
      description: "Secure, reliable cloud infrastructure that scales with your business growth",
      trustPoints: [
        { icon: CheckCircle, text: "99.9% Uptime SLA" },
        { icon: Users, text: "24/7 Expert Support" },
        { icon: TrendingUp, text: "40% Cost Reduction" }
      ]
    },
    {
      id: 8,
      title: "Revolutionize with Intelligent AI",
      subtitle: "Intelligent Automation",
      description: "Automate processes and unlock new opportunities with cutting-edge AI technology",
      trustPoints: [
        { icon: CheckCircle, text: "AI-Powered Analytics" },
        { icon: Users, text: "Smart Process Automation" },
        { icon: TrendingUp, text: "300% Efficiency Gains" }
      ]
    },
    {
      id: 9,
      title: "Simplify IT, Amplify Results",
      subtitle: "Complete IT Management",
      description: "Comprehensive IT support and management services for seamless business operations",
      trustPoints: [
        { icon: CheckCircle, text: "24/7 Monitoring" },
        { icon: Users, text: "Dedicated Support" },
        { icon: TrendingUp, text: "Proactive Management" }
      ]
    },
    {
      id: 10,
      title: "Accelerate Your Digital Success",
      subtitle: "Award-Winning Digital Solutions",
      description: "Accelerate growth with enterprise-grade solutions that deliver measurable results",
      trustPoints: [
        { icon: CheckCircle, text: "500+ Projects Delivered" },
        { icon: Users, text: "50+ Enterprise Clients" },
        { icon: TrendingUp, text: "99.9% Success Rate" }
      ]
    }
  ];

  // Intersection Observer for performance
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Initialize videos immediately for better performance
  useEffect(() => {
    setVideosReady(true);
  }, []);


  // Auto-play functionality for slideshow
  useEffect(() => {
    if (!isInView) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000); // 8 seconds per slide

    return () => clearInterval(interval);
  }, [slides.length, isInView]);

  // Simplified video rotation to prevent blinking
  useEffect(() => {
    if (!isInView || !videosReady) return;
    
    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
    }, 15000); // Simple rotation every 15 seconds

    return () => clearInterval(interval);
  }, [isInView, videosReady, videos.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Videos with Crossfade */}
      <div className="absolute inset-0 bg-gray-900">
        
        {/* Current Video */}
        {!videoError && videosReady && (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            key={`video-${currentVideoIndex}`}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectFit: 'cover' }}
            onError={() => {
              setVideoError(true);
            }}
            onLoadedData={() => {
              setVideoError(false);
            }}
          >
            <source src={videos[currentVideoIndex]} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-900/70 to-black/60"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-[#f97316]/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float delay-1000"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-12 1366:px-8 max-w-7xl 1366:max-w-6xl">
        <div className="text-center text-white space-y-8 1366:space-y-6 min-h-screen flex flex-col justify-center py-20 1366:py-16">
          
          {/* Content */}
          <div className="max-w-4xl 1366:max-w-3xl mx-auto space-y-8 1366:space-y-6">
            <div className="space-y-6 1366:space-y-4">
              
              {/* Main Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl 1366:text-5xl font-light leading-tight text-white">
                {slides[currentSlide].title}
              </h1>
              
              {/* Subtitle */}
              <p className="text-xl md:text-2xl 1366:text-xl text-[#f97316] leading-relaxed max-w-3xl 1366:max-w-2xl mx-auto">
                {slides[currentSlide].description}
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-6 1366:gap-4 py-4 1366:py-3">
              {slides[currentSlide].trustPoints.map((point, index) => (
                <div key={index} className="flex items-center text-white/90">
                  <point.icon className="w-5 h-5 1366:w-4 1366:h-4 text-[#f97316] mr-2" />
                  <span className="text-sm 1366:text-xs font-medium">{point.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 1366:gap-3 justify-center pt-4 1366:pt-3">
              <a
                href="/contact"
                className="group bg-[#f97316] hover:bg-orange-500 text-white px-8 1366:px-6 py-4 1366:py-3 rounded-2xl font-bold text-lg 1366:text-base transition-all duration-300 hover:scale-105 hover:shadow-2xl inline-flex items-center justify-center"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="ml-3 w-5 h-5 1366:w-4 1366:h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a
                href="/case-studies"
                className="group bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white hover:text-[#1e3a8a] text-white px-8 1366:px-6 py-4 1366:py-3 rounded-2xl font-bold text-lg 1366:text-base transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
              >
                <Play className="mr-3 w-5 h-5 1366:w-4 1366:h-4 group-hover:scale-110 transition-transform" />
                <span>See Case Studies</span>
              </a>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 1366:space-x-1.5 mt-12 1366:mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 1366:w-2.5 1366:h-2.5 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-[#f97316] scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

      </div>

      {/* Enhanced Animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform(0px); }
          50% { transform(-10px); }
        }
        
        @keyframes spin-slow {
          from { transform(0deg); }
          to { transform(360deg); }
        }
        
        @keyframes spin-reverse {
          from { transform(360deg); }
          to { transform(0deg); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { 
            transform(0px) rotate(45deg);
            animation-timing-function-bezier(0.8, 0, 1, 1);
          }
          50% { 
            transform(-10px) rotate(45deg);
            animation-timing-function-bezier(0, 0, 0.2, 1);
          }
        }
        
        .animate-float {
          animation 4s ease-in-out infinite;
        }
        
        .delay-300 {
          animation-delay300ms;
        }
        
        .delay-500 {
          animation-delay500ms;
        }
        
        .delay-1000 {
          animation-delay1000ms;
        }
        
        .animate-spin-slow {
          animation-slow 20s linear infinite;
        }
        
        .animate-spin-reverse {
          animation-reverse 15s linear infinite;
        }
        
        .animate-bounce-slow {
          animation-slow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;