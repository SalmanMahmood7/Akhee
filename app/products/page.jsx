"use client";

import React from "react";
import PageLayout from "@/components/PageLayout";
import { ArrowRight, Building2, Heart, Banknote, Factory, GraduationCap, ShoppingCart, CheckCircle, Users, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function OurProducts() {
  const products = [
    {
      icon: Building2,
      name: "Enterprise Management Suite",
      description: "Comprehensive business management platform for large organizations",
      features: ["Project Management", "Resource Planning", "Analytics Dashboard"],
      stats: "500+ Organizations",
      color: "blue-900",
      image: "/product-enterprise.jpg"
    },
    {
      icon: Heart,
      name: "Healthcare Management System",
      description: "Complete healthcare solution with patient management and telemedicine",
      features: ["Patient Records", "Appointment Scheduling", "Telehealth Platform"],
      stats: "2M+ Patients",
      color: "[#f97316]",
      image: "/product-healthcare.jpg"
    },
    {
      icon: Banknote,
      name: "Financial Management Platform",
      description: "Secure financial management system with advanced analytics",
      features: ["Payment Processing", "Financial Analytics", "Compliance Tracking"],
      stats: "$50B+ Processed",
      color: "blue-900",
      image: "/product-financial.jpg"
    },
    {
      icon: Factory,
      name: "Manufacturing Control System",
      description: "Smart manufacturing solution with IoT integration and automation",
      features: ["Production Monitoring", "Quality Control", "Inventory Management"],
      stats: "300+ Installations",
      color: "[#f97316]",
      image: "/product-manufacturing.jpg"
    },
    {
      icon: GraduationCap,
      name: "Studee",
      description: "Advanced educational platform for modern learning environments",
      features: ["Course Management", "Student Portal", "Performance Analytics"],
      stats: "1M+ Students",
      color: "blue-900",
      image: "/product-education.jpg"
    },
    {
      icon: ShoppingCart,
      name: "E-commerce Platform",
      description: "Complete e-commerce solution with advanced features and integrations",
      features: ["Online Store", "Payment Gateway", "Customer Analytics"],
      stats: "$100M+ Sales",
      color: "[#f97316]",
      image: "/product-ecommerce.jpg"
    }
  ];

  return (
    <PageLayout>
      <div className="min-h-screen bg-white">
        
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src="/images/cityscape-bg.jpg" 
              alt="Products background"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Black Shade Overlay */}
          <div className="absolute inset-0 bg-black/70"></div>
          
          {/* Background Pattern */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-64 h-64 bg-[#f97316]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
            <div className="text-center text-white">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="text-white">Our</span>{" "}
                <span className="text-[#f97316]">Products</span>
              </h1>
              <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed mb-12">
                Innovative software solutions designed to transform your business operations with cutting-edge technology and proven results
              </p>
              
              {/* Stats */}
              <div className="flex flex-wrap justify-center gap-12">
                <div className="text-center">
                  <p className="text-4xl font-bold text-[#f97316]">50+</p>
                  <p className="text-white mt-1">Industries Served</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-[#f97316]">500+</p>
                  <p className="text-white mt-1">Projects Delivered</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-[#f97316]">99.9%</p>
                  <p className="text-white mt-1">Success Rate</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="pt-16 pb-12 relative bg-white overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-64 h-64 bg-blue-900/5 rounded-full blur-2xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#f97316]/5 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-900/5 to-[#f97316]/5 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-8xl relative z-10">
            
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-[#1e3a8a]">Product</span>{" "}
                <span className="text-[#f97316]">Portfolio</span>
              </h2>
              <p className="text-xl text-[#1e3a8a] max-w-3xl mx-auto leading-relaxed">
                Comprehensive software solutions designed to streamline operations, enhance productivity, and drive business growth
              </p>
            </div>

            {/* Products Grid with Images */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {products.map((product, index) => {
                const isOrange = product.color === "[#f97316]";
                return (
                  <div key={index} className="group relative">
                    <div className="relative rounded-2xl h-full transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden">
                      {/* Background Image */}
                      <div className="absolute inset-0">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30"></div>
                      </div>
                      
                      {/* Content */}
                      <div className="relative z-10 p-8 h-full flex flex-col min-h-[400px]">
                        {/* Icon */}
                        <div className={`w-16 h-16 rounded-2xl ${isOrange ? 'bg-gradient-to-br from-[#f97316] to-orange-400' : 'bg-gradient-to-br from-[#1e3a8a] to-[#1e40af]'} p-1 shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110 mb-6`}>
                          <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                            <product.icon className={`w-8 h-8 ${isOrange ? 'text-[#f97316]' : 'text-[#1e3a8a]'}`} />
                          </div>
                        </div>

                        <h3 className="text-2xl font-bold mb-4 text-white">
                          {product.name}
                        </h3>
                        
                        <p className="text-white/90 mb-6 leading-relaxed text-sm flex-grow">
                          {product.description}
                        </p>
                        
                        {/* Stats Badge */}
                        <div className={`inline-block px-3 py-1 ${isOrange ? 'bg-[#f97316]' : 'bg-[#1e3a8a]'} rounded-full mb-6 self-start`}>
                          <span className="text-xs font-bold text-white">{product.stats}</span>
                        </div>
                        
                        {/* Features List */}
                        <div className="space-y-2 mb-6">
                          {product.features.slice(0, 2).map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center">
                              <div className={`w-2 h-2 rounded-full ${isOrange ? 'bg-[#f97316]' : 'bg-blue-500'} mr-3`}></div>
                              <span className="text-xs text-white/80 font-medium">{feature}</span>
                            </div>
                          ))}
                          {product.features.length > 2 && (
                            <div className="text-xs text-white/60">+{product.features.length - 2} more</div>
                          )}
                        </div>
                        
                        {/* CTA Button */}
                        <Link 
                          href="/contact"
                          className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                            isOrange 
                              ? 'bg-[#f97316] hover:bg-orange-500 text-white' 
                              : 'bg-white text-[#1e3a8a] hover:bg-blue-50'
                          } inline-flex items-center justify-center`}
                        >
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden">
          <div className="relative bg-slate-900">
            <div className="absolute inset-0">
              <img 
                src="/industry-cta-bg.jpg" 
                alt="Business Meeting Background"
                className="w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
            
            <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl py-16">
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-white/90 mb-10 text-lg leading-relaxed max-w-3xl mx-auto">
                  Discover how our comprehensive product suite can revolutionize your operations and accelerate your digital transformation journey.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 bg-[#f97316] hover:bg-orange-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 text-lg"
                  >
                    Schedule Demo
                  </Link>
                  <Link
                    href="/work"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 bg-transparent border-2 border-[#f97316] text-[#f97316] px-8 py-4 rounded-full font-semibold hover:bg-[#f97316] hover:text-white transition-all duration-300 text-lg"
                  >
                    View Portfolio
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 bg-transparent border-2 border-[#f97316] text-[#f97316] px-8 py-4 rounded-full font-semibold hover:bg-[#f97316] hover:text-white transition-all duration-300 text-lg"
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </PageLayout>
  );
}