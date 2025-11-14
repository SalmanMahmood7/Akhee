"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { BackgroundConcept } from './GlobalBackground';

interface BackgroundContextType {
  concept;
  setConcept(concept) => void;
  forceStatic;
  setForceStatic(force) => void;
  isTransitioning;
  setIsTransitioning(transitioning) => void;
}

const BackgroundContext = createContext<BackgroundContextType | undefined>(undefined);

interface BackgroundProviderProps {
  children;
  defaultConcept?;
  defaultStatic?;
}

export const BackgroundProvider<BackgroundProviderProps> = ({
  children,
  defaultConcept = 'concept-a',
  defaultStatic = false
}) => {
  const [concept, setConcept] = useState<BackgroundConcept>(defaultConcept);
  const [forceStatic, setForceStatic] = useState(defaultStatic);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const value = {
    concept,
    setConcept,
    forceStatic,
    setForceStatic,
    isTransitioning,
    setIsTransitioning,
  };

  return (
    <BackgroundContext.Provider value={value}>
      {children}
    </BackgroundContext.Provider>
  );
};

export const useBackground = () => {
  const context = useContext(BackgroundContext);
  if (context === undefined) {
    throw new Error('useBackground must be used within a BackgroundProvider');
  }
  return context;
};

// Hook for smooth background transitions between pages
export const useBackgroundTransition = () => {
  const { setConcept, setIsTransitioning } = useBackground();

  const transitionTo = async (newConcept, duration = 300) => {
    setIsTransitioning(true);
    
    // Small delay to allow current background to fade
    await new Promise(resolve => setTimeout(resolve, duration / 2));
    setConcept(newConcept);
    await new Promise(resolve => setTimeout(resolve, duration / 2));
    
    setIsTransitioning(false);
  };

  return { transitionTo };
};