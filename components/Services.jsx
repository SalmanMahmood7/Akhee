"use client";

import React from "react";
import { 
  Lightbulb, 
  BarChart3, 
  Zap, 
  Shield, 
  Cloud,
  Settings,
  ArrowRight,
  Sparkles,
  Award,
  TrendingUp,
  Rocket
} from "lucide-react";
import Link from "next/link";

const Services = () => {
  const services = [
    {
      icon: Lightbulb,
      title: "Digital Advisory",
      description: "Strategic guidance to transform your business digitally",
      href: "/services/digital-advisory",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: BarChart3,
      title: "Data & Analytics", 
      description: "Transform data into actionable business insights",
      href: "/services/applied-data-analytics",
      gradient: "from-emerald-500 to-emerald-700"
    },
    {
      icon: Zap,
      title: "App Development",
      description: "Custom mobile and web applications built to scale",
      href: "/services/software-development", 
      gradient: "from-[#1e3a8a] to-[#1e40af]"
    },
    {
      icon: Settings,
      title: "Digital Platforms",
      description: "Modern platforms that drive innovation and growth",
      href: "/services/digital-platforms",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: Shield,
      title: "Cyber Security",
      description: "Comprehensive security solutions to protect your assets",
      href: "/services/cyber-security",
      gradient: "from-[#1e3a8a] to-[#1e40af]"
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "Scalable cloud infrastructure and migration services",
      href: "/services/cloud-services",
      gradient: "from-sky-500 to-blue-600"
    },
  ];

  return (
    <section className="relative min-h-screen py-20 bg-gray-50">
      {/* Clean professional background */}

      <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl py-16 md:py-24">
        {/* Professional Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-blue-50 rounded-full border border-blue-200 mb-8">
            <span className="text-[#1e3a8a] text-sm font-semibold tracking-wide">DIGITAL SOLUTIONS</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 md:mb-8">
            <span className="text-[#1e3a8a]">What We</span>{" "}
            <span className="text-[#1e3a8a]">Do</span>
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-12">
            Transforming businesses through cutting-edge technology solutions and strategic digital innovation.
          </p>
          
          {/* Stats Row */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#1e3a8a] mb-1">150+</div>
              <div className="text-sm text-gray-500">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-1">98%</div>
              <div className="text-sm text-gray-500">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-1">24/7</div>
              <div className="text-sm text-gray-500">Support Available</div>
            </div>
          </div>
        </div>

        {/* Responsive Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 md:mb-16">
          {services.map((service, index) => (
            <Link
              key={service.title}
              href={service.href}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${service.gradient} transform hover:scale-105 transition-all duration-500 cursor-pointer min-h-[280px] sm:min-h-[320px] lg:min-h-[360px] p-6 sm:p-8`}
            >
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.2) 2px, transparent 2px),
                                 radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                backgroundSize: '40px 40px, 20px 20px'
              }}></div>
              
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                    <service.icon className="w-3 h-3 text-white mr-2" />
                    <span className="text-xs font-semibold text-white">SERVICE</span>
                  </div>
                  <service.icon className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-white mb-4" />
                </div>
                
                <div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white mb-2 sm:mb-3">
                    {service.title}
                  </h3>
                  <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center text-white font-semibold text-sm hover:text-white/80 transition-colors">
                    <span>Get Free Quote</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Professional Footer */}
        <div className="text-center">
          <div className="inline-flex items-center px-8 py-4 bg-blue-50 border border-blue-200 rounded-xl mb-8">
            <Award className="h-6 w-6 text-[#1e3a8a] mr-3" />
            <span className="text-[#1e3a8a] font-semibold">Industry-Leading Solutions</span>
            <TrendingUp className="h-6 w-6 text-[#1e3a8a] ml-3" />
          </div>
          
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Each service is designed with scalability, security, and performance in mind, ensuring your business stays ahead in the digital landscape.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;