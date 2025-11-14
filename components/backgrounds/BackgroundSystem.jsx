"use client";

import { useEffect, useState } from "react";

export type BackgroundConcept = "concept-a" | "concept-b" | "concept-c";
export type BackgroundIntensity = "subtle" | "medium" | "bold";
export type PageContext = "home" | "services" | "about" | "contact" | "work" | "insights";

interface BackgroundSystemProps {
  concept;
  intensity?;
  pageContext?;
  className?;
  overlay?;
}

const BackgroundSystem = ({
  concept,
  intensity = "medium",
  pageContext = "home",
  className = "",
  overlay = true
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!isMounted) {
    return <div className={`fixed inset-0 -z-10 ${className}`} />;
  }

  const getIntensityClasses = () => {
    const intensityMap = {
      subtle"opacity-30",
      medium"opacity-50", 
      bold"opacity-70"
    };
    return intensityMap[intensity];
  };

  const getPageContextStyles = () => {
    // Disabled - return transparent for no background effects
    return "from-transparent to-transparent";
  };

  const getSVGPath = () => {
    const basePath = "/backgrounds/assets/";
    const mobileSuffix = isMobile ? "-mobile" "";
    return `${basePath}${concept}${mobileSuffix}.svg`;
  };

  return (
    <div className={`fixed inset-0 -z-10 overflow-hidden ${className}`}>
      {/* Primary Background SVG */}
      <div 
        className={`absolute inset-0 ${getIntensityClasses()}`}
        style={{
          backgroundImage`url("${getSVGPath()}")`,
          backgroundSize'cover',
          backgroundPosition'center',
          backgroundRepeat'no-repeat'
        }}
      />
      
      {/* Page Context Overlay */}
      {overlay && (
        <div className={`absolute inset-0 bg-gradient-to-br ${getPageContextStyles()}`} />
      )}
      
      {/* CSS-Only Fallback Patterns */}
      <div className="absolute inset-0">
        {concept === "concept-a" && <ConceptAFallback />}
        {concept === "concept-b" && <ConceptBFallback />} 
        {concept === "concept-c" && <ConceptCFallback />}
      </div>
    </div>
  );
};

// Static Components - No Movement
const ConceptAFallback = () => (
  <div className="absolute inset-0 opacity-0">
    {/* Disabled - no patterns */}
  </div>
);

const ConceptBFallback = () => (
  <div className="absolute inset-0 opacity-0">
    {/* Disabled - no patterns */}
  </div>
);

const ConceptCFallback = () => (
  <div className="absolute inset-0 opacity-0">
    {/* Disabled - no patterns */}
  </div>
);

export default BackgroundSystem;