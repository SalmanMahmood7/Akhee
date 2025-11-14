"use client";

import { ReactNode } from "react";
import BackgroundSystem, { BackgroundConcept, BackgroundIntensity, PageContext } from "./BackgroundSystem";

interface PageBackgroundWrapperProps {
  children;
  concept?;
  intensity?;
  pageContext?;
  className?;
}

// Recommended combinations for different page types
const PAGE_RECOMMENDATIONS = {
  home{
    concept"concept-a" as BackgroundConcept,
    intensity"medium" as BackgroundIntensity,
    description"Engaging gradient mesh for landing impact"
  },
  services{
    concept"concept-b" as BackgroundConcept,
    intensity"subtle" as BackgroundIntensity,
    description"Professional grid pattern for service credibility"
  },
  about{
    concept"concept-c" as BackgroundConcept,
    intensity"medium" as BackgroundIntensity,
    description"Sophisticated gradients for company story"
  },
  contact{
    concept"concept-a" as BackgroundConcept,
    intensity"subtle" as BackgroundIntensity,
    description"Gentle particles to encourage contact"
  },
  work{
    concept"concept-b" as BackgroundConcept,
    intensity"medium" as BackgroundIntensity,
    description"Technical grid for portfolio showcase"
  },
  insights{
    concept"concept-c" as BackgroundConcept,
    intensity"subtle" as BackgroundIntensity,
    description"Clean gradients for content focus"
  }
};

const PageBackgroundWrapper = ({
  children,
  concept,
  intensity,
  pageContext = "home",
  className = ""
}) => {
  // Use provided values or fall back to recommendations
  const recommendation = PAGE_RECOMMENDATIONS[pageContext];
  const finalConcept = concept || recommendation.concept;
  const finalIntensity = intensity || recommendation.intensity;

  return (
    <div className={`relative min-h-screen ${className}`}>
      <BackgroundSystem
        concept={finalConcept}
        intensity={finalIntensity}
        pageContext={pageContext}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default PageBackgroundWrapper;
export { PAGE_RECOMMENDATIONS };