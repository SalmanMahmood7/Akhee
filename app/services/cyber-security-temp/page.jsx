"use client";

import PageLayout from "@/components/PageLayout";
import { Lock, CheckCircle, Shield, Eye, ArrowRight, Phone, Search, Database, Cloud, Key, Clock, Users, Globe, Zap, DollarSign, Activity, Plus, Minus } from "lucide-react";
import { useState } from "react";
import ServiceDetailModal from "@/components/ServiceDetailModal";

export default function CyberSecurity() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 8;
  const slidesToShow = 3;
  const [selectedService, setSelectedService] = useState<any>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const servicesData = {
    threatDetection{
      title"AI-Powered Threat Detection",
      description"Advanced machine learning algorithms continuously monitor your digital infrastructure"
    },
    penetrationTesting{
      title"Penetration Testing", 
      description"Advanced vulnerability assessment and ethical hacking services"
    },
    cloudSecurity{
      title"Cloud Security",
      description"Comprehensive cloud infrastructure protection and compliance"
    },
    identityManagement{
      title"Identity Management",
      description"Advanced authentication and access control solutions"
    },
    dataProtection{
      title"Data Protection",
      description"Enterprise-grade encryption and data loss prevention"
    }
  };

  const handleLearnMore = (serviceKey) => {
    setSelectedService(servicesData[serviceKey as keyof typeof servicesData]);
    setShowModal(true);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev >= totalSlides - slidesToShow ? 0  + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev <= 0 ? totalSlides - slidesToShow  - 1
    );
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
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
              alt="Cyber Security Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-slate-900/80"></div>
          </div>

          <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-12 max-w-6xl">
            <div className="text-center space-y-8 pt-12">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8">
                Cyber Security
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Protect your digital assets with comprehensive security solutions designed to defend against modern cyber threats.
              </p>
              
              <div className="pt-8 grid grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-[#f97316] mb-2">24/7</div>
                  <div className="text-gray-600 text-sm">Security Monitoring</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#f97316] mb-2">99.9%</div>
                  <div className="text-gray-600 text-sm">Threat Detection Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#f97316] mb-2">50+</div>
                  <div className="text-gray-600 text-sm">Protected Businesses</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-14 bg-white">
          <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-6xl">
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="text-[#1e3a8a]">Digital Security </span>
                <span className="text-orange-500">Solutions</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mt-4">
                Protect your digital ecosystem with our comprehensive cybersecurity solutions powered by AI and advanced threat intelligence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(servicesData).map(([key, service]) => (
                <div key={key} className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-orange-300 transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-lg">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-[#1e3a8a] mb-2 group-hover:text-orange-600 transition-colors">{service.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>
                  <button 
                    onClick={() => handleLearnMore(key)}
                    className="text-orange-500 hover:text-orange-600 font-semibold text-sm inline-flex items-center"
                  >
                    Learn More
                    <ArrowRight className="ml-1 w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative bg-slate-800 py-16">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
              alt="Cybersecurity Solutions Background"
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-black/75"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Secure Your Business?
              </h2>
              <p className="text-white/90 mb-10 text-lg leading-relaxed max-w-3xl mx-auto">
                Protect your business with our comprehensive cybersecurity solutions and expert security team.
              </p>
              <div className="flex justify-center">
                <a href="/contact" className="bg-transparent border-2 border-[#f97316] text-[#f97316] px-8 py-4 rounded-full font-semibold hover:bg-[#f97316] hover:text-white transition-all duration-300 text-lg">
                  Request A Proposal
                </a>
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