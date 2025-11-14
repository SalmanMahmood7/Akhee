"use client";

import { ReactNode } from "react";

export type CSSBackgroundVariant = "mesh" | "grid" | "gradient";
export type CSSBackgroundPage = "home" | "services" | "about" | "contact" | "work" | "insights";

interface CSSBackgroundSystemProps {
  children;
  variant?;
  page?;
  intensity?"light" | "medium" | "bold";
  className?;
}

const CSSBackgroundSystem = ({
  children,
  variant = "mesh",
  page = "home",
  intensity = "medium",
  className = ""
}) => {
  const getBackgroundClasses = () => {
    const baseClasses = "fixed inset-0 -z-10";
    
    // Variant classes
    const variantClasses = {
      mesh"bg-concept-a",
      grid"bg-concept-b", 
      gradient"bg-concept-c"
    };
    
    // Page context classes
    const pageClasses = {
      home"bg-context-home",
      services"bg-context-services",
      about"bg-context-about",
      contact"bg-context-contact", 
      work"bg-context-work",
      insights"bg-context-insights"
    };
    
    // Intensity classes
    const intensityClasses = {
      light"bg-intensity-subtle",
      medium"bg-intensity-medium",
      bold"bg-intensity-bold"
    };
    
    return `${baseClasses} ${variantClasses[variant]} ${pageClasses[page]} ${intensityClasses[intensity]}`;
  };

  return (
    <div className={`relative min-h-screen ${className}`}>
      {/* CSS-Only Background */}
      <div className={getBackgroundClasses()} />
      
      {/* Page Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default CSSBackgroundSystem;