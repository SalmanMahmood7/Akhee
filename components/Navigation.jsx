"use client";

import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, Code2, Globe2, Brain, BarChart3, Shield, Cloud, Zap, Target, Layers, Database, Lock, Server } from "lucide-react";
import Link from "next/link";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const dropdownTimeoutRef = useRef(null);
  const dropdownRef = useRef(null);
  const isMouseOverDropdown = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 80);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle clicks outside of dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      const target = event.target;
      if (isServicesOpen && !target.closest('[data-dropdown="services"]')) {
        // Only close if mouse is not over dropdown
        if (!isMouseOverDropdown.current) {
          setIsServicesOpen(false);
        }
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isServicesOpen]);

  // Cleanup timeout on component unmount
  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  // Updated navigation items
  const navItems = [
    { name: "Case Studies", href: "/case-studies" },
    { name: "Our Products", href: "/products" },
    { name: "Insights", href: "/insights" },
    { name: "Careers", href: "/careers" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];


  const serviceItems = [
    { 
      name: "AI & Smart Solutions", 
      href: "/services/ai-smart-solutions",
      description: "Intelligent automation and AI",
      icon: Brain,
      color: "from-pink-500 to-rose-600"
    },
    { 
      name: "Digital Advisory", 
      href: "/services/digital-advisory",
      description: "Strategic guidance for digital transformation",
      icon: Target,
      color: "from-indigo-500 to-purple-600"
    },
    { 
      name: "Data & Analytics", 
      href: "/services/applied-data-analytics",
      description: "Transform data into actionable insights",
      icon: BarChart3,
      color: "from-green-500 to-teal-600"
    },
    { 
      name: "Software Development", 
      href: "/services/software-development",
      description: "Custom software solutions for your business",
      icon: Code2,
      color: "from-yellow-500 to-orange-600"
    },
    { 
      name: "Digital Platforms", 
      href: "/services/digital-platforms",
      description: "Scalable digital ecosystems",
      icon: Layers,
      color: "from-blue-500 to-cyan-600"
    },
    { 
      name: "Cyber Security", 
      href: "/services/cyber-security",
      description: "Advanced threat protection and compliance",
      icon: Shield,
      color: "from-red-500 to-pink-600"
    },
    { 
      name: "Cloud Services", 
      href: "/services/cloud-services",
      description: "Scalable cloud infrastructure solutions",
      icon: Cloud,
      color: "from-purple-500 to-indigo-600"
    },
    { 
      name: "Managed IT Services", 
      href: "/services/managed-it-services",
      description: "Comprehensive IT management and support",
      icon: Server,
      color: "from-orange-500 to-red-600"
    }
  ];

  return (
    <nav className="fixed top-0 w-full z-50" style={{ border: 'none', outline: 'none', boxShadow: 'none' }}>
      {/* Background layer */}
      <div className={`absolute inset-0 transition-all duration-700 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-2xl shadow-sm' 
          : 'bg-white/90 backdrop-blur-xl'
      }`}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 1366:px-6 1.25xl:px-12">
        <div className="flex justify-between items-center h-16 sm:h-20 1366:h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center group">
              <img 
                src="/AKHEE LOGO-09.svg" 
                alt="Akhee" 
                className="h-44 sm:h-48 w-auto transition-all duration-300 group-hover:scale-105"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {/* Services Dropdown */}
              <div 
                ref={dropdownRef}
                className="relative"
                data-dropdown="services"
                onMouseEnter={() => {
                  isMouseOverDropdown.current = true;
                  // Clear any existing timeout
                  if (dropdownTimeoutRef.current) {
                    clearTimeout(dropdownTimeoutRef.current);
                    dropdownTimeoutRef.current = null;
                  }
                  setIsServicesOpen(true);
                }}
                onMouseLeave={() => {
                  isMouseOverDropdown.current = false;
                  // Add a longer delay before closing
                  dropdownTimeoutRef.current = setTimeout(() => {
                    // Double check mouse is not over dropdown
                    if (!isMouseOverDropdown.current) {
                      setIsServicesOpen(false);
                    }
                  }, 800); // Increased to 800ms delay
                }}
              >
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    // Clear any existing timeout
                    if (dropdownTimeoutRef.current) {
                      clearTimeout(dropdownTimeoutRef.current);
                      dropdownTimeoutRef.current = null;
                    }
                    // Toggle on click for better UX
                    setIsServicesOpen(!isServicesOpen);
                  }}
                  className={`${isScrolled ? 'text-[#1e3a8a] hover:text-[#1e3a8a]' : 'text-[#1e3a8a] hover:text-orange-600'} transition-all duration-300 px-4 py-2 text-sm font-semibold flex items-center rounded-full ${isScrolled ? 'hover:bg-blue-50' : 'hover:bg-blue-50'} relative group`}
                >
                  Services
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Modern Glassmorphism Dropdown */}
                <div 
                  className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 transition-all duration-300 ${
                    isServicesOpen ? 'opacity-100 translate-y-0 pointer-events-auto visible' : 'opacity-0 -translate-y-2 pointer-events-none invisible'
                  }`}
                  onMouseEnter={() => {
                    isMouseOverDropdown.current = true;
                    // Clear timeout when entering dropdown
                    if (dropdownTimeoutRef.current) {
                      clearTimeout(dropdownTimeoutRef.current);
                      dropdownTimeoutRef.current = null;
                    }
                    setIsServicesOpen(true);
                  }}
                  onMouseLeave={() => {
                    isMouseOverDropdown.current = false;
                    // Add longer delay when leaving dropdown
                    dropdownTimeoutRef.current = setTimeout(() => {
                      // Double check mouse is not over dropdown
                      if (!isMouseOverDropdown.current) {
                        setIsServicesOpen(false);
                      }
                    }, 800); // Increased to 800ms delay
                  }}
                >
                  <div 
                    className="relative w-[480px] bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden"
                  >
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/95 to-slate-900/90"></div>
                    
                    {/* Content */}
                    <div className="relative z-10 p-2">
                      {/* Grid Layout - 2 columns for 8 items */}
                      <div className="grid grid-cols-2 gap-1">
                        {serviceItems.map((service, index) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            onClick={() => {
                              // Close dropdown on link click
                              setIsServicesOpen(false);
                              // Clear any pending timeouts
                              if (dropdownTimeoutRef.current) {
                                clearTimeout(dropdownTimeoutRef.current);
                                dropdownTimeoutRef.current = null;
                              }
                            }}
                            className="group relative flex items-start space-x-3 p-4 rounded-xl hover:bg-white/10 transition-all duration-300 overflow-hidden"
                            style={{
                              animationDelay: `${index * 50}ms`
                            }}
                          >
                            {/* Hover gradient effect */}
                            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r ${service.color}`} style={{ mixBlendMode: 'overlay' }}></div>
                            
                            {/* Icon with glow effect */}
                            <div className="relative">
                              <div className={`w-10 h-10 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                                <service.icon className="w-5 h-5 text-white" />
                              </div>
                              {/* Glow effect */}
                              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300`}></div>
                            </div>
                            
                            {/* Text Content */}
                            <div className="relative flex-1 min-w-0">
                              <h4 className="text-sm font-semibold text-white group-hover:text-white transition-colors duration-300">
                                {service.name}
                              </h4>
                              <p className="text-xs text-gray-400 mt-0.5 line-clamp-2 group-hover:text-gray-300 transition-colors duration-300">
                                {service.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                      
                      {/* Footer with gradient border */}
                      <div className="mt-2 p-1 bg-gradient-to-r from-orange-500/30 via-orange-600/30 to-orange-500/30 rounded-xl">
                        <Link
                          href="/services"
                          onClick={() => {
                            // Close dropdown on link click
                            setIsServicesOpen(false);
                            // Clear any pending timeouts
                            if (dropdownTimeoutRef.current) {
                              clearTimeout(dropdownTimeoutRef.current);
                              dropdownTimeoutRef.current = null;
                            }
                          }}
                          className="block text-center text-sm font-semibold bg-slate-900/70 text-white hover:text-white py-3 rounded-lg hover:bg-orange-600/20 transition-all duration-300 group"
                        >
                          <span className="relative">
                            Explore All Services
                            <span className="inline-block ml-1 transition-transform duration-300 group-hover:translate-x-1 text-orange-200">→</span>
                          </span>
                        </Link>
                      </div>
                    </div>
                    
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/20 to-transparent rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full blur-3xl"></div>
                  </div>
                </div>
              </div>

              
              {/* Other Nav Items */}
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`${isScrolled ? 'text-[#1e3a8a] hover:text-[#1e3a8a]' : 'text-[#1e3a8a] hover:text-orange-600'} transition-all duration-300 px-4 py-2 text-sm font-semibold rounded-full ${isScrolled ? 'hover:bg-blue-50' : 'hover:bg-blue-50'}`}
                >
                  {item.name}
                </Link>
              ))}
              
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className={`${isScrolled ? 'text-[#1e3a8a] hover:text-[#1e3a8a] hover:bg-blue-50' : 'text-[#1e3a8a] hover:text-orange-600 hover:bg-blue-50'} transition-colors duration-300 font-semibold`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className={`md:hidden transition-colors duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-xl border-t border-gray-200' 
            : 'bg-white/95 backdrop-blur-xl border-t border-gray-200'
        }`}>
          <div className="px-4 pt-4 pb-4 space-y-2">
            {/* Services Section */}
            <div className="space-y-1">
              <Link
                href="/services"
                className={`${isScrolled ? 'text-[#1e3a8a] hover:text-[#1e3a8a] hover:bg-blue-50' : 'text-[#1e3a8a] hover:text-orange-600 hover:bg-blue-50'} block px-4 py-3 text-base font-semibold transition-all duration-300 rounded-xl`}
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <div className="ml-4 space-y-1">
                {serviceItems.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    className={`flex items-center ${isScrolled ? 'text-[#1e3a8a] hover:text-[#1e3a8a] hover:bg-blue-50' : 'text-[#1e3a8a] hover:text-orange-600 hover:bg-blue-50'} px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-xl`}
                    onClick={() => setIsOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            
            {/* Other Nav Items */}
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`${isScrolled ? 'text-[#1e3a8a] hover:text-[#1e3a8a] hover:bg-blue-50' : 'text-[#1e3a8a] hover:text-orange-600 hover:bg-blue-50'} block px-4 py-3 text-base font-semibold transition-all duration-300 rounded-xl`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;