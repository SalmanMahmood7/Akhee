"use client";

import React from 'react';
import { X, CheckCircle, ArrowRight, Clock, Users, Shield, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';


const ServiceDetailModal = ({
  isOpen,
  onClose,
  service
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-2xl">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-3xl font-bold text-[#1e3a8a] mb-2">{service.title}</h2>
              <p className="text-lg text-gray-600">{service.description}</p>
            </div>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="p-6 space-y-8">
          
          {/* Full Description */}
          {service.fullDescription && (
            <div>
              <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4">Overview</h3>
              <p className="text-gray-700 leading-relaxed text-lg">{service.fullDescription}</p>
            </div>
          )}

          {/* Key Features */}
          {service.features && service.features.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold text-[#1e3a8a] mb-6">Key Features</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="p-2 bg-blue-50 rounded-lg">
                      {feature.icon ? (
                        <feature.icon className="w-6 h-6 text-[#1e3a8a]" />
                      ) : (
                        <CheckCircle className="w-6 h-6 text-[#1e3a8a]" />
                      )}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-[#1e3a8a] mb-2">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Benefits */}
          {service.benefits && service.benefits.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold text-[#1e3a8a] mb-6">Benefits</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="bg-green-50 rounded-xl p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <Star className="w-5 h-5 text-green-600" />
                      <h4 className="text-lg font-semibold text-[#1e3a8a]">{benefit.title}</h4>
                    </div>
                    <p className="text-gray-700 mb-2">{benefit.description}</p>
                    {benefit.metric && (
                      <div className="text-2xl font-bold text-green-600">{benefit.metric}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Process */}
          {service.process && service.process.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold text-[#1e3a8a] mb-6">Our Process</h3>
              <div className="space-y-6">
                {service.process.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-semibold text-[#1e3a8a]">{step.title}</h4>
                        {step.duration && (
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="w-4 h-4 mr-1" />
                            {step.duration}
                          </div>
                        )}
                      </div>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies */}
          {service.technologies && service.technologies.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold text-[#1e3a8a] mb-6">Technologies We Use</h3>
              <div className="flex flex-wrap gap-3">
                {service.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Case Study */}
          {service.caseStudy && (
            <div>
              <h3 className="text-2xl font-bold text-[#1e3a8a] mb-6">Case Study</h3>
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-[#1e3a8a] mb-2">Client</h4>
                    <p className="text-gray-700 mb-4">{service.caseStudy.client}</p>
                    
                    <h4 className="text-lg font-semibold text-[#1e3a8a] mb-2">Challenge</h4>
                    <p className="text-gray-700">{service.caseStudy.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#1e3a8a] mb-2">Solution</h4>
                    <p className="text-gray-700 mb-4">{service.caseStudy.solution}</p>
                    
                    <h4 className="text-lg font-semibold text-[#1e3a8a] mb-2">Results</h4>
                    {service.caseStudy.results ? (
                      <ul className="space-y-2">
                        {service.caseStudy.results.map((result, index) => (
                          <li key={index} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span className="text-gray-700">{result}</span>
                          </li>
                        ))}
                      </ul>
                    ) : service.caseStudy.result ? (
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-gray-700">{service.caseStudy.result}</span>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Deliverables */}
          {service.deliverables && service.deliverables.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold text-[#1e3a8a] mb-6">What You'll Get</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {service.deliverables.map((deliverable, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">{deliverable}</span>
                  </div>
                ))}
              </div>
            </div>
          )}


          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
            <Link
              href="/contact"
              className="flex-1 bg-[#1e3a8a] hover:bg-[#1e40af] text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="flex-1 border border-blue-600 text-[#1e3a8a] hover:bg-blue-50 py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center"
            >
              <Users className="mr-2 w-5 h-5" />
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailModal;