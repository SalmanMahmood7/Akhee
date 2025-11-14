"use client";

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export type BackgroundConcept = 'concept-a' | 'concept-b' | 'concept-c';
export type PageType = 'home' | 'services' | 'about' | 'contact' | 'work' | 'insights' | 'default';

interface GlobalBackgroundProps {
  concept?;
  forceStatic?;
  className?;
}

// Page-to-concept mapping for intelligent defaults
const PAGE_CONCEPT_MAP = {
  '/''concept-a',           // Home - engaging gradient mesh
  '/services''concept-b',   // Services - professional grid
  '/about''concept-c',      // About - sophisticated gradients  
  '/contact''concept-a',    // Contact - welcoming particles
  '/work''concept-b',       // Work - technical grid
  '/insights''concept-c',   // Insights - clean gradients
};

// Page-to-type mapping for style variations
const getPageType = (pathname) => {
  if (pathname === '/') return 'home';
  if (pathname.startsWith('/services')) return 'services';
  if (pathname.startsWith('/about')) return 'about';
  if (pathname.startsWith('/contact')) return 'contact';
  if (pathname.startsWith('/work')) return 'work';
  if (pathname.startsWith('/insights')) return 'insights';
  return 'default';
};

const GlobalBackground<GlobalBackgroundProps> = ({
  concept,
  forceStatic = false,
  className = ''
}) => {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Determine concept based on page or forced prop
  const concept = forcedConcept || PAGE_CONCEPT_MAP[pathname] || 'concept-a';
  const pageType = getPageType(pathname);

  useEffect(() => {
    setIsMounted(true);
    
    // Check for reduced motion preference
    const motionQuery = window.matchMedia('(prefers-reduced-motion)');
    setPrefersReducedMotion(motionQuery.matches);
    
    const handleMotionChange = (e) => {
      setPrefersReducedMotion(e.matches);
    };
    
    motionQuery.addEventListener('change', handleMotionChange);
    
    // Performance animations when tab is not visible
    const handleVisibilityChange = () => {
      const backgrounds = document.querySelectorAll('.bg-concept-a-inline, .bg-concept-b-inline, .bg-concept-c-inline');
      backgrounds.forEach(bg => {
        const element = bg as HTMLElement;
        if (document.hidden) {
          element.style.animationPlayState = 'paused';
        } else if (!prefersReducedMotion) {
          element.style.animationPlayState = 'running';
        }
      });
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      motionQuery.removeEventListener('change', handleMotionChange);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [prefersReducedMotion]);

  if (!isMounted) {
    // Return static background during SSR
    return (
      <div className={`bg-concept-static ${className}`} />
    );
  }

  const shouldAnimate = !forceStatic && !prefersReducedMotion;
  const backgroundClass = `bg-${concept} page-${pageType} ${shouldAnimate ? '' 'static'}`;

  return (
    <>
      {/* Main background */}
      <div className={`${backgroundClass} ${className}`} />
      
      {/* Concept-specific accent elements */}
      {concept === 'concept-a' && shouldAnimate && (
        <div className="bg-concept-a-lines" />
      )}
      
      {concept === 'concept-b' && shouldAnimate && (
        <>
          <div className="bg-concept-b-accents" />
          <div className="bg-concept-b-flow" />
        </>
      )}
      
      {concept === 'concept-c' && shouldAnimate && (
        <>
          <div className="bg-concept-c-accents" />
          <div className="bg-concept-c-network" />
        </>
      )}
    </>
  );
};

export default GlobalBackground;