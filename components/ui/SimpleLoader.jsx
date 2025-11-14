"use client";

import React from 'react';

interface SimpleLoaderProps {
  size?'sm' | 'md' | 'lg' | 'xl' | '2xl';
  theme?'orange' | 'blue' | 'gradient' | 'minimal';
  showText?;
  text?;
  className?;
}

const SimpleLoader<SimpleLoaderProps> = ({ 
  size = 'md', 
  theme = 'gradient',
  showText = false,
  text = 'Loading...',
  className = '' 
}) => {
  // Size configurations
  const sizes = {
    sm{ container'w-8 h-8', text'text-xs mt-2', dot'w-1 h-1' },
    md{ container'w-12 h-12', text'text-sm mt-3', dot'w-1.5 h-1.5' },
    lg{ container'w-16 h-16', text'text-base mt-4', dot'w-2 h-2' },
    xl{ container'w-20 h-20', text'text-lg mt-4', dot'w-2.5 h-2.5' },
    '2xl'{ container'w-24 h-24', text'text-xl mt-5', dot'w-3 h-3' }
  };

  const currentSize = sizes[size];

  // Theme configurations
  const themes = {
    orange{
      primary'border-orange-500',
      secondary'border-orange-300', 
      accent'bg-orange-500',
      text'text-orange-500'
    },
    blue{
      primary'border-blue-500',
      secondary'border-blue-300',
      accent'bg-blue-500',
      text'text-[#1e3a8a]'
    },
    gradient{
      primary'border-orange-500',
      secondary'border-blue-500',
      accent'bg-gradient-to-r from-orange-500 to-blue-500',
      text'text-orange-500'
    },
    minimal{
      primary'border-gray-400',
      secondary'border-gray-300',
      accent'bg-gray-400',
      text'text-gray-500'
    }
  };

  const currentTheme = themes[theme];

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      {/* Main loader container */}
      <div className={`relative ${currentSize.container} flex items-center justify-center`}>
        
        {/* Outer rotating ring */}
        <div className={`absolute inset-0 rounded-full border-2 border-transparent ${currentTheme.primary} border-t-transparent border-r-transparent animate-spin`} 
             style={{ animationDuration'1s' }} />

        {/* Middle rotating ring (opposite direction) */}
        <div className={`absolute inset-1 rounded-full border border-transparent ${currentTheme.secondary} border-b-transparent border-l-transparent animate-spin`} 
             style={{ animationDuration'1.5s', animationDirection'reverse' }} />

        {/* Inner pulsing core */}
        <div className={`absolute inset-3 rounded-full ${currentTheme.accent} animate-pulse opacity-80`} 
             style={{ animationDuration'2s' }} />

        {/* Center dot */}
        <div className={`absolute ${currentSize.dot} rounded-full bg-white shadow-lg`} />
      </div>

      {/* Loading text */}
      {showText && (
        <div className={`${currentSize.text} font-medium ${currentTheme.text} animate-pulse`}>
          {text}
        </div>
      )}
    </div>
  );
};

export default SimpleLoader;