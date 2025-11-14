"use client";

import React from "react";
import { Shield, Award, Users, Clock, CheckCircle, Star, TrendingUp, Zap } from "lucide-react";

const TrustElements = () => {
  const stats = [
    { number"500+", label"Projects Delivered", icon, color"from-[#1e3a8a] to-[#1e40af]" },
    { number"50+", label"Enterprise Clients", icon, color"from-orange-500 to-orange-600" },
    { number"99.9%", label"Uptime Guarantee", icon, color"from-[#1e3a8a] to-orange-500" },
    { number"24/7", label"Support Available", icon, color"from-orange-500 to-[#1e3a8a]" },
  ];

  const certifications = [
    { name"ISO 27001", description"Information Security", icon, color"from-[#1e3a8a] to-[#1e40af]" },
    { name"Microsoft Gold", description"Certified Partner", icon, color"from-orange-500 to-orange-600" },
    { name"SOC 2 Type II", description"Security Compliance", icon, color"from-[#1e3a8a] to-orange-500" },
    { name"PIPEDA", description"Privacy Compliant", icon, color"from-orange-500 to-[#1e3a8a]" },
  ];

  const partners = [
    { name"Microsoft", shortName"MS", color"from-[#1e3a8a] to-[#1e40af]" },
    { name"Amazon AWS", shortName"AWS", color"from-orange-500 to-orange-600" },
    { name"Microsoft Azure", shortName"Az", color"from-[#1e3a8a] to-orange-500" },
    { name"Google Cloud", shortName"GC", color"from-orange-500 to-[#1e3a8a]" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-[#1e3a8a]/5">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
        
        {/* Trust Statistics */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#1e3a8a] to-orange-500 bg-clip-text text-transparent mb-6">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven track record of delivering exceptional results across enterprise-level digital transformations
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${stat.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <stat.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-4xl font-black text-gray-900 mb-3">{stat.number}</div>
                  <div className="text-gray-600 font-semibold text-lg">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-500 to-[#1e3a8a] bg-clip-text text-transparent mb-6">
              Certifications & Compliance
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Industry-leading security and quality standards ensuring your business stays protected
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${cert.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <cert.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{cert.name}</h4>
                  <p className="text-gray-600 font-medium">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Partners */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#1e3a8a] to-orange-500 bg-clip-text text-transparent mb-6">
              Technology Partners
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Partnered with industry-leading technology providers to deliver cutting-edge solutions
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 text-center">
                  <div className={`w-20 h-20 bg-gradient-to-br ${partner.color} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <span className="text-white font-bold text-xl">{partner.shortName}</span>
                  </div>
                  <div className="text-lg font-bold text-gray-900">{partner.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Testimonial */}
        <div className="bg-gradient-to-br from-[#1e3a8a] to-orange-500 rounded-3xl p-12 md:p-16 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full translate-y-24 -translate-x-24"></div>
          </div>
          
          <div className="relative max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-orange-200 fill-current mx-1" />
              ))}
            </div>
            <blockquote className="text-2xl md:text-3xl font-bold text-white mb-8 leading-relaxed">
              "Akhee transformed our entire IT infrastructure. Their expertise in cloud migration and security implementation exceeded our expectations."
            </blockquote>
            <div className="flex items-center justify-center space-x-6">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                <span className="text-[#1e3a8a] font-bold text-xl">JD</span>
              </div>
              <div className="text-left">
                <div className="text-xl font-bold text-white">John Doe</div>
                <div className="text-[#1e3a8a] text-lg">CTO, Enterprise Corp</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TrustElements;