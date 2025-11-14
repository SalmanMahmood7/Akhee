"use client"

import { useState, useEffect } from "react";
import Image from "next/image";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  BarChart3, 
  Code, 
  Globe, 
  Shield, 
  Cloud,
  Settings,
  ArrowRight,
  Lightbulb,
  Zap,
  Lock
} from "lucide-react";
import servicesBg from "@/assets/services-bg.jpg";

// Service type definition
interface Service {
  title;
  description;
  icon;
  href;
  order;
}

// Icon mapping for dynamic icon rendering
const iconMapping = {
  Brain,
  BarChart3,
  Code,
  Globe,
  Shield,
  Cloud,
  Settings,
  Lightbulb,
  Zap,
  Lock
};

export default function Services() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadServices();
  }, []);

  const loadServices = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Use static services data
      const fallbackServices = [
        {
          title"Digital Advisory",
          description"Understand, anticipate, and accelerate with confidence.",
          icon"Lightbulb",
          href"/services/digital-advisory",
          order1
        },
        {
          title"Data & Analytics", 
          description"Transform raw data into actionable insights that drive business growth.",
          icon"BarChart3",
          href"/services/applied-data-analytics",
          order2
        },
        {
          title"App Development",
          description"Custom applications built with modern technologies to solve unique challenges.",
          icon"Zap",
          href"/services/software-development",
          order3
        },
        {
          title"Digital Platforms",
          description"Boost growth and productivity using ERP, CRM, and CMS platforms.",
          icon"Settings",
          href"/services/digital-platforms",
          order4
        },
        {
          title"Cyber Security",
          description"Minimize threats and proactively protect your most valuable assets.",
          icon"Shield",
          href"/services/cyber-security",
          order5
        },
        {
          title"Cloud Services",
          description"Cloud migration and optimization services to accelerate transformation.",
          icon"Cloud",
          href"/services/cloud-services",
          order6
        },
        {
          title"Managed IT",
          description"Reliable IT infrastructure management to keep your business running smoothly.",
          icon"Settings",
          href"/services/managed-it-services",
          order7
        },
        {
          title"Artificial Intelligence and Smart Solutions",
          description"Harness AI to automate processes and unlock intelligent insights.",
          icon"Brain",
          href"/services/ai-smart-solutions",
          order8
        }
      ];
      setServices(fallbackServices);
    } catch (error) {
      console.error('Error loading services:', error);
      setError('Failed to load services.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <PageLayout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="relative w-20 h-20 mx-auto mb-6">
              {/* Outer rotating ring */}
              <div className="absolute inset-0 rounded-full border-3 border-transparent border-t-orange-500 border-r-orange-500 animate-spin" style={{animationDuration'1.5s'}}></div>
              {/* Middle rotating ring (opposite direction) */}
              <div className="absolute inset-2 rounded-full border-2 border-transparent border-b-blue-500 border-l-blue-500 animate-spin" style={{animationDuration'1s', animationDirection'reverse'}}></div>
              {/* Inner pulsing core */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-orange-500 to-blue-500 animate-pulse opacity-80" style={{animationDuration'2s'}}></div>
              {/* Center dot */}
              <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-lg"></div>
            </div>
            <p className="text-gray-600 animate-pulse font-medium text-lg">Loading services...</p>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="min-h-screen bg-white">

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
              alt="Services Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/70"></div>
          </div>

          <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-12 1366:px-8 max-w-6xl 1366:max-w-5xl">
            <div className="text-center space-y-8 pt-12">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8">
                Our <span className="text-orange-500">Services</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Our scalable team of expert advisors, problem solvers, and builders ensure you receive the specific skills and guidance you need to succeed.
              </p>
              
              {/* Error Message */}
              {error && (
                <div className="bg-yellow-50/10 border border-yellow-500/30 text-yellow-300 px-4 py-3 rounded-lg mx-auto max-w-lg">
                  <p className="text-sm">{error}</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="bg-gray-50 py-14 1366:py-14">
          <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = iconMapping[service.icon] || Settings;
                return (
                  <div key={service.id || index} className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                    <div className="space-y-6">
                      <div className={`inline-flex p-4 rounded-xl shadow-lg ${
                        index % 2 === 0 
                          ? 'bg-gradient-to-r from-[#1e3a8a] to-[#1e40af]' 
                          'bg-gradient-to-r from-[#f97316] to-[#ea580c]'
                      }`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-[#1e3a8a] font-['Poppins',sans-serif]">
                        {service.title}
                      </h3>
                      <p className="text-[#1e3a8a] leading-relaxed font-['Inter',sans-serif] min-h-[80px]">
                        {service.description}
                      </p>
                      <a 
                        href={service.href}
                        
                        className="w-full bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 font-['Poppins',sans-serif] flex items-center justify-center"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 transition-all duration-300 group-hover:translate-x-1" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-slate-900 py-14 1366:py-14">
          <div className="container mx-auto px-6 lg:px-12 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl 1366:text-3xl font-bold text-white mb-6 font-['Poppins',sans-serif]">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-300 mb-8 font-['Inter',sans-serif]">
              Let's discuss how our services can help you achieve your digital goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                
                className="bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 font-['Poppins',sans-serif]"
              >
                Download Our Guide
              </a>
              <Button 
                asChild
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-[#1e3a8a] font-semibold py-3 px-8 rounded-lg transition-all duration-300 font-['Poppins',sans-serif]"
              >
                <a href="/work">
                  See Case Studies
                  <ArrowRight className="ml-2 h-4 w-4 inline" />
                </a>
              </Button>
              <a 
                href="/contact"
                
                className="bg-transparent border-white text-white hover:bg-white hover:text-[#1e3a8a] font-semibold py-3 px-8 rounded-lg transition-all duration-300 font-['Poppins',sans-serif]"
              >
                Get a Quote
              </a>
            </div>
          </div>
        </section>

      </div>
    </PageLayout>
  );
}