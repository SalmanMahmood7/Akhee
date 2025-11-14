"use client";

import React from "react";
import { ArrowRight, TrendingUp, Shield, Cloud } from "lucide-react";

const CaseStudiesSection = () => {
  const caseStudies = [
    {
      icon,
      company"Manufacturing Enterprise",
      problem"Legacy systems causing 40% downtime",
      solution"Cloud migration & modernization",
      outcome"30% cost reduction, 99.9% uptime",
      metrics"30% Cost Savings",
      color"from-[#1e3a8a] to-[#1e40af]"
    },
    {
      icon,
      company"Financial Services Firm",
      problem"Security compliance challenges",
      solution"Enterprise cybersecurity implementation",
      outcome"100% compliance, zero breaches",
      metrics"Zero Security Incidents",
      color"from-green-600 to-green-800"
    },
    {
      icon,
      company"Healthcare Organization",
      problem"Manual processes slowing growth",
      solution"AI-powered automation platform",
      outcome"50% faster processing, 25% cost savings",
      metrics"50% Efficiency Gain",
      color"from-purple-600 to-purple-800"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Proven Results for Real Businesses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how we've helped companies like yours achieve measurable success with our digital solutions.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className={`bg-gradient-to-r ${study.color} p-6 text-white`}>
                <study.icon className="w-10 h-10 mb-4" />
                <h3 className="text-xl font-bold mb-2">{study.company}</h3>
                <div className="text-3xl font-bold text-white/90">{study.metrics}</div>
              </div>
              
              <div className="p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Problem:</h4>
                    <p className="text-gray-600">{study.problem}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Solution:</h4>
                    <p className="text-gray-600">{study.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Result:</h4>
                    <p className="text-gray-600 font-medium">{study.outcome}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <a 
            href="/contact"
            className="inline-flex items-center bg-[#1e3a8a] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#1e40af] transition-all duration-300 hover:scale-105 hover:shadow-lg group"
          >
            See Your Success Story
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;