"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="relative z-10">
      <div className="relative bg-slate-800 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/team-coding.jpg" 
            alt="Technology Solutions Background"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-12 1.25xl:px-16 max-w-7xl py-24">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <div className="flex justify-center">
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center bg-transparent border-2 border-[#f97316] text-[#f97316] px-8 py-4 rounded-full font-semibold hover:bg-[#f97316] hover:text-white transition-all duration-300 text-lg group"
              >
                <span>Talk to an Expert</span>
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;