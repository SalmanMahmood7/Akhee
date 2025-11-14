"use client";

import React from 'react';

interface CustomLoaderProps {
  size?'small' | 'medium' | 'large' | 'xlarge';
  color?'orange' | 'blue' | 'white' | 'primary';
  variant?'spinner' | 'dots' | 'pulse' | 'orbit' | 'brillion';
  className?;
}

const CustomLoader<CustomLoaderProps> = ({ 
  size = 'medium', 
  color = 'orange', 
  variant = 'brillion',
  className = '' 
}) => {
  // Size configurations
  const sizeClasses = {
    small'w-6 h-6',
    medium'w-8 h-8',
    large'w-12 h-12',
    xlarge'w-16 h-16'
  };

  // Color configurations
  const colorClasses = {
    orange{
      primary'#f97316',
      secondary'#ea580c',
      accent'#fb923c'
    },
    blue{
      primary'#2563eb',
      secondary'#1d4ed8',
      accent'#3b82f6'
    },
    white{
      primary'#ffffff',
      secondary'#f8fafc',
      accent'#e2e8f0'
    },
    primary{
      primary'#f97316',
      secondary'#2563eb',
      accent'#fb923c'
    }
  };

  const colors = colorClasses[color];
  const sizeClass = sizeClasses[size];

  // Brillion Digital custom loader (default)
  if (variant === 'brillion') {
    return (
      <div className={`relative ${sizeClass} ${className}`}>
        <div className="absolute inset-0">
          {/* Outer rotating ring */}
          <div 
            className="w-full h-full rounded-full border-2 border-transparent animate-spin"
            style={{
              borderTopColor.primary,
              borderRightColor.primary,
              animationDuration'1s'
            }}
          />
          {/* Inner pulsing circle */}
          <div 
            className="absolute top-1/2 left-1/2 w-1/2 h-1/2 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse"
            style={{
              backgroundColor.secondary,
              animationDuration'1.5s'
            }}
          />
          {/* Center logo-like element */}
          <div 
            className="absolute top-1/2 left-1/2 w-1/4 h-1/4 rounded-full transform -translate-x-1/2 -translate-y-1/2"
            style={{ backgroundColor.accent }}
          />
        </div>
      </div>
    );
  }

  // Orbital loader
  if (variant === 'orbit') {
    return (
      <div className={`relative ${sizeClass} ${className}`}>
        <div className="absolute inset-0">
          {/* Central circle */}
          <div 
            className="absolute top-1/2 left-1/2 w-1/4 h-1/4 rounded-full transform -translate-x-1/2 -translate-y-1/2"
            style={{ backgroundColor.primary }}
          />
          
          {/* Orbiting elements */}
          <div className="w-full h-full animate-spin" style={{ animationDuration'2s' }}>
            <div 
              className="absolute top-0 left-1/2 w-2 h-2 rounded-full transform -translate-x-1/2"
              style={{ backgroundColor.secondary }}
            />
          </div>
          
          <div className="w-full h-full animate-spin" style={{ animationDuration'1.5s', animationDirection'reverse' }}>
            <div 
              className="absolute bottom-0 left-1/2 w-1.5 h-1.5 rounded-full transform -translate-x-1/2"
              style={{ backgroundColor.accent }}
            />
          </div>
          
          <div className="w-full h-full animate-spin" style={{ animationDuration'1s' }}>
            <div 
              className="absolute right-0 top-1/2 w-1 h-1 rounded-full transform -translate-y-1/2"
              style={{ backgroundColor.primary }}
            />
          </div>
        </div>
      </div>
    );
  }

  // Pulse loader
  if (variant === 'pulse') {
    return (
      <div className={`flex space-x-1 ${className}`}>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={`${size === 'small' ? 'w-1.5 h-1.5'  === 'medium' ? 'w-2 h-2'  === 'large' ? 'w-3 h-3' 'w-4 h-4'} rounded-full animate-pulse`}
            style={{ 
              backgroundColor.primary,
              animationDelay`${i * 0.2}s`,
              animationDuration'1s'
            }}
          />
        ))}
      </div>
    );
  }

  // Dots loader
  if (variant === 'dots') {
    return (
      <div className={`flex space-x-1 ${className}`}>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={`${size === 'small' ? 'w-1.5 h-1.5'  === 'medium' ? 'w-2 h-2'  === 'large' ? 'w-3 h-3' 'w-4 h-4'} rounded-full animate-bounce`}
            style={{ 
              backgroundColor.primary,
              animationDelay`${i * 0.1}s`,
              animationDuration'0.6s'
            }}
          />
        ))}
      </div>
    );
  }

  // Default spinner (improved version)
  return (
    <div className={`relative ${sizeClass} ${className}`}>
      <div 
        className="w-full h-full rounded-full border-2 border-transparent animate-spin"
        style={{
          borderTopColor.primary,
          borderRightColor.primary,
          borderBottomColor'transparent',
          borderLeftColor'transparent',
          animationDuration'0.8s'
        }}
      />
      <div 
        className="absolute top-1 left-1 right-1 bottom-1 rounded-full border border-transparent animate-spin"
        style={{
          borderTopColor.accent,
          animationDuration'1.2s',
          animationDirection'reverse'
        }}
      />
    </div>
  );
};

export default CustomLoader;