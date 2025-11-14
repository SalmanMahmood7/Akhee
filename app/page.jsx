'use client';

import Hero from "@/components/Hero";
import PageLayout from "@/components/PageLayout";
import { useEffect } from "react";
import { useScrollReveal } from "@/lib/scroll-reveal";
import dynamic from "next/dynamic";

// Lazy load components below the fold
const WorkHighlights = dynamic(() => import("@/components/WorkHighlights"), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100" />
});
const WhyChooseUs = dynamic(() => import("@/components/WhyChooseUs"), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100" />
});
const WhatWeDoSection = dynamic(() => import("@/components/WhatWeDoSection"), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100" />
});
const InsightsSection = dynamic(() => import("@/components/InsightsSection"), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100" />
});
const FinalCTA = dynamic(() => import("@/components/FinalCTA"), {
  loading: () => <div className="h-64 animate-pulse bg-gray-100" />
});

export default function Home() {
  // Initialize scroll reveal animations
  useEffect(() => {
    const cleanup = useScrollReveal();
    return cleanup;
  }, []);

  return (
    <PageLayout>
      <div className="min-h-screen bg-white">

        {/* Page Content */}
        <div className="relative z-10">
          <Hero />
          
          {/* Unified Background Container for Middle Sections */}
          <div className="bg-gradient-to-br from-blue-50 via-white to-orange-50 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
              <div className="absolute top-20 left-10 w-64 h-64 bg-[#1e3a8a]/5 rounded-full blur-2xl"></div>
              <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#f97316]/5 rounded-full blur-3xl"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1e3a8a]/3 rounded-full blur-3xl"></div>
            </div>
            
            {/* Content Sections */}
            <div className="relative z-10">
              <WorkHighlights />
              <WhyChooseUs />
              <WhatWeDoSection />
              <InsightsSection />
            </div>
          </div>
          
          <FinalCTA />
        </div>

        {/* CSS Animations */}
        <style jsx>{`
          @keyframes float-slow {
            0%, 100% { transform: translateY(0px) translateX(0px); }
            33% { transform: translateY(-20px) translateX(10px); }
            66% { transform: translateY(10px) translateX(-5px); }
          }
          
          @keyframes wave {
            0% { transform: translateX(0); }
            100% { transform: translateX(-800px); }
          }
          
          .animate-float-slow {
            animation: float-slow 6s ease-in-out infinite;
          }
          
          .animate-wave {
            animation: wave 20s linear infinite;
          }
        `}</style>
      </div>
    </PageLayout>
  );
}