"use client";

import React from 'react';

interface BrillionLoaderProps {
  size?'sm' | 'md' | 'lg' | 'xl' | '2xl';
  theme?'orange' | 'blue' | 'gradient' | 'minimal';
  showText?;
  text?;
  className?;
}

const BrillionLoader<BrillionLoaderProps> = ({ 
  size = 'md', 
  theme = 'gradient',
  showText = false,
  text = 'Loading...',
  className = '' 
}) => {
  // Size configurations
  const sizes = {
    sm{ container'w-8 h-8', text'text-xs mt-2' },
    md{ container'w-12 h-12', text'text-sm mt-3' },
    lg{ container'w-16 h-16', text'text-base mt-4' },
    xl{ container'w-20 h-20', text'text-lg mt-4' },
    '2xl'{ container'w-24 h-24', text'text-xl mt-5' }
  };

  const currentSize = sizes[size];

  // Theme configurations
  const themes = {
    orange{
      primary'#f97316',
      secondary'#ea580c', 
      accent'#fb923c',
      background'rgba(249, 115, 22, 0.1)'
    },
    blue{
      primary'#2563eb',
      secondary'#1d4ed8',
      accent'#3b82f6', 
      background'rgba(37, 99, 235, 0.1)'
    },
    gradient{
      primary'#f97316',
      secondary'#2563eb',
      accent'#fb923c',
      background'linear-gradient(45deg, rgba(249, 115, 22, 0.1), rgba(37, 99, 235, 0.1))'
    },
    minimal{
      primary'#6b7280',
      secondary'#9ca3af',
      accent'#d1d5db',
      background'rgba(107, 114, 128, 0.05)'
    }
  };

  const currentTheme = themes[theme];

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      {/* Main loader container */}
      <div className={`relative ${currentSize.container} flex items-center justify-center`}>
        
        {/* Background glow effect */}
        <div 
          className="absolute inset-0 rounded-full blur-sm opacity-30"
          style={{ 
            background.background,
            animation'pulse 2s ease-in-out infinite'
          }}
        />

        {/* Outer rotating ring */}
        <div 
          className="absolute inset-0 rounded-full border-2 border-transparent"
          style={{
            borderTopColor.primary,
            borderRightColor.primary,
            animation'spin 1.5s linear infinite'
          }}
        />

        {/* Middle rotating ring (opposite direction) */}
        <div 
          className="absolute inset-1 rounded-full border border-transparent"
          style={{
            borderBottomColor.secondary,
            borderLeftColor.secondary,
            animation'spin 1s linear infinite reverse'
          }}
        />

        {/* Inner pulsing core */}
        <div 
          className="absolute inset-3 rounded-full"
          style={{
            background === 'gradient' 
              ? `linear-gradient(45deg, ${currentTheme.primary}, ${currentTheme.secondary})`
              .accent,
            animation'pulse 1.5s ease-in-out infinite'
          }}
        />

        {/* Center dot */}
        <div 
          className="absolute w-1 h-1 rounded-full"
          style={{
            backgroundColor'#ffffff',
            boxShadow`0 0 4px ${currentTheme.primary}`
          }}
        />

        {/* Orbiting particles */}
        <div className="absolute inset-0">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                backgroundColor.accent,
                top'50%',
                left'50%',
                transform'translate(-50%, -50%)',
                animation`orbit-${size} 2s linear infinite`,
                animationDelay`${i * 0.6}s`,
                transformOrigin`0 ${size === 'sm' ? '16px'  === 'md' ? '24px'  === 'lg' ? '32px'  === 'xl' ? '40px' '48px'}`
              }}
            />
          ))}
        </div>
      </div>

      {/* Loading text */}
      {showText && (
        <div 
          className={`${currentSize.text} font-medium animate-pulse`}
          style={{ color.primary }}
        >
          {text}
        </div>
      )}

      {/* Custom CSS animations as inline style */}
      <style dangerouslySetInnerHTML={{
        __html`
          @keyframes orbit-${size} {
            0% {
              transform(-50%, -50%) rotate(0deg) translateY(-${size === 'sm' ? '16px'  === 'md' ? '24px'  === 'lg' ? '32px'  === 'xl' ? '40px' '48px'}) rotate(0deg);
            }
            100% {
              transform(-50%, -50%) rotate(360deg) translateY(-${size === 'sm' ? '16px'  === 'md' ? '24px'  === 'lg' ? '32px'  === 'xl' ? '40px' '48px'}) rotate(-360deg);
            }
          }
        `
      }} />
    </div>
  );
};

export default BrillionLoader;