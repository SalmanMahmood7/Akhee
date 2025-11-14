'use client';

// Intersection Observer for scroll reveal animations
export function initScrollReveal() {
  // Respect user's motion preferences
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion)').matches;
  
  if (prefersReducedMotion) {
    // For users who prefer reduced motion, immediately show all elements
    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach(el => el.classList.add('revealed'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          // Optional after reveal for better performance
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1, // Trigger when 10% of element is visible
      rootMargin: '0px 0px -50px 0px', // Trigger slightly before element is fully in view
    }
  );

  // Observe all elements with scroll-reveal class
  const elementsToReveal = document.querySelectorAll('.scroll-reveal');
  elementsToReveal.forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}

// Hook for easy integration with React components
export function useScrollReveal() {
  if (typeof window !== 'undefined') {
    // Initialize on mount
    const cleanup = initScrollReveal();
    
    // Return cleanup function
    return cleanup;
  }
  
  return () => {};
}