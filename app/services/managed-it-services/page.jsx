"use client";

import PageLayout from "@/components/PageLayout";
import { CheckCircle, Shield, ArrowRight, Monitor, Server, HeadphonesIcon, Wrench, Clock, Database, Zap, DollarSign, Activity, Plus, Minus, BookOpen, TrendingUp, BarChart, Search, Settings, Eye, Users, Globe, Network, Cloud, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function ManagedITServices() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const totalSlides = 8;

  // Update slides to show based on screen size
  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1); // Mobile 1 slide
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2); // Tablet 2 slides
      } else {
        setSlidesToShow(3); // Desktop 3 slides
      }
      // Reset current slide when changing slide count
      setCurrentSlide(0);
    };

    updateSlidesToShow();
    window.addEventListener('resize', updateSlidesToShow);
    return () => window.removeEventListener('resize', updateSlidesToShow);
  }, []);

  // Touch/swipe functionality
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
    // Prevent page scrolling during swipe on mobile
    e.preventDefault();
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  const [openFAQ, setOpenFAQ] = useState(null);



  const nextSlide = () => {
    setCurrentSlide((prev) => {
      const maxSlide = totalSlides - slidesToShow;
      return prev >= maxSlide ? 0 : prev + 1;
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      const maxSlide = totalSlides - slidesToShow;
      return prev <= 0 ? maxSlide : prev - 1;
    });
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <PageLayout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/managed-it-services-hero.jpg" 
              alt="Managed IT Services Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-slate-900/80"></div>
          </div>

          <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-12 max-w-6xl">
            <div className="text-center space-y-8 pt-12">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8">
                Managed <span className="text-orange-500">IT Services</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Comprehensive IT support and infrastructure management to keep your business running smoothly with expert monitoring and proactive maintenance.
              </p>
              
              <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="inline-flex items-center px-8 py-4 bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold rounded-full transition-all duration-300">
                  Get IT Assessment
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a href="/work" className="inline-flex items-center px-8 py-4 border-2 border-[#f97316] text-[#f97316] hover:bg-[#f97316] hover:text-white font-semibold rounded-full transition-all duration-300">
                  View Case Studies
                </a>
              </div>
              
            </div>
          </div>
        </section>

        {/* Unified Background Container for All Sections */}
        <div className="bg-white overflow-hidden">
        
          {/* IT Management Solutions */}
          <section className="relative" style={{paddingTop: '30px', paddingBottom: '30px'}}>
            <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-6xl">
              <div className="text-center space-y-8 mb-10">
                <h2 className="text-4xl md:text-5xl font-bold">
                  <span className="text-[#1e3a8a]">IT Management </span>
                  <span className="text-orange-500">Solutions</span>
                </h2>
                
                <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  Comprehensive managed IT services designed to optimize your technology infrastructure while reducing costs and complexity.
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8 mb-10">
                
                <div className="lg:col-span-2 bg-white rounded-3xl p-8 border border-gray-200 hover:border-orange-300 transition-all duration-500 shadow-sm hover:shadow-lg">
                  <div className="flex items-start space-x-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Monitor className="w-10 h-10 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4">24/7 IT Support & Monitoring</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        Round-the-clock monitoring and support services that ensure your systems are always running optimally, with immediate response to issues and proactive maintenance.
                      </p>
                      <div className="flex flex-wrap gap-3 mb-6">
                        <span className="px-3 py-1 bg-blue-100 text-[#1e3a8a] text-sm rounded-full border border-blue-200">24/7 Monitoring</span>
                        <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full border border-green-200">Proactive Support</span>
                        <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full border border-purple-200">Remote Resolution</span>
                      </div>
                      <Link 
                        href="/services/managed-it-services"
                        className="inline-flex items-center px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors duration-300"
                      >
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-6 border border-gray-200 text-center shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-[#1e3a8a] mb-1">99.9%</div>
                    <div className="text-gray-600 text-sm">Uptime Guarantee</div>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 border border-gray-200 text-center shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-[#1e3a8a] mb-1">&lt; 15min</div>
                    <div className="text-gray-600 text-sm">Response Time</div>
                  </div>
                </div>

              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                
                <div className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-orange-300 transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-lg">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Cloud className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-[#1e3a8a] mb-2 group-hover:text-[#1e3a8a] transition-colors">Cloud Services</h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">Cloud migration and optimization services to accelerate digital transformation.</p>
                  <Link 
                    href="/services/cloud-services"
                    className="text-[#1e3a8a] hover:text-[#1e3a8a] font-semibold text-sm inline-flex items-center"
                  >
                    Learn More
                    <ArrowRight className="ml-1 w-3 h-3" />
                  </Link>
                </div>

                <div className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-green-300 transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-lg">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Settings className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-[#1e3a8a] mb-2 group-hover:text-green-600 transition-colors">IT Support Services</h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">Comprehensive IT support and maintenance to keep your systems running smoothly.</p>
                  <Link 
                    href="/services/managed-it-services"
                    className="text-green-500 hover:text-green-600 font-semibold text-sm inline-flex items-center"
                  >
                    Learn More
                    <ArrowRight className="ml-1 w-3 h-3" />
                  </Link>
                </div>

                <div className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-purple-300 transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-lg">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Wrench className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-[#1e3a8a] mb-2 group-hover:text-purple-600 transition-colors">System Maintenance</h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">Proactive maintenance and monitoring to prevent issues before they occur.</p>
                  <Link 
                    href="/services/managed-it-services"
                    className="text-purple-500 hover:text-purple-600 font-semibold text-sm inline-flex items-center"
                  >
                    Learn More
                    <ArrowRight className="ml-1 w-3 h-3" />
                  </Link>
                </div>

                <div className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-red-300 transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-lg">
                  <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-[#1e3a8a] mb-2 group-hover:text-red-600 transition-colors">Cyber Security</h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">Advanced security solutions to protect your business from cyber threats.</p>
                  <Link 
                    href="/services/cyber-security"
                    className="text-red-500 hover:text-red-600 font-semibold text-sm inline-flex items-center"
                  >
                    Learn More
                    <ArrowRight className="ml-1 w-3 h-3" />
                  </Link>
                </div>

              </div>

            </div>
          </section>

          {/* Best Managed IT Services */}
          <section className="relative" style={{paddingTop: '30px', paddingBottom: '30px'}}>
            <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-6xl">
              
              {/* Section Header */}
              <div className="text-center mb-10">
                <h5 className="font-semibold mb-4 uppercase tracking-wider text-sm" style={{ color: '#f97316' }}>Best Managed IT Services</h5>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] leading-tight max-w-4xl mx-auto mb-6">
                  Akhee - Your Trusted Partner For Comprehensive Managed IT Solutions
                </h2>
              </div>

              {/* Main Content - Side by Side Layout */}
              <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
                
                {/* Left Side - Image */}
                <div className="relative">
                  <div className="relative overflow-hidden rounded-2xl shadow-xl">
                    <img 
                      src="/managed-it/team-working.jpg" 
                      alt="Managed IT Services Team"
                      className="w-full h-[320px] lg:h-[360px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-800/50 to-cyan-800/70"></div>
                    
                    {/* Overlay Content */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white p-6">
                        <div className="w-20 h-20 mx-auto mb-4 bg-white/20 backdrop-blur rounded-full flex items-center justify-center border border-white/30">
                          <Settings className="w-10 h-10 text-white" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-2">Complete IT Management</h3>
                        <p className="text-lg opacity-90">24/7 Support & Proactive Monitoring</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Content */}
                <div className="flex flex-col justify-center space-y-6 h-full">
                  
                  {/* Introduction */}
                  <div className="space-y-6">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      We provide comprehensive managed IT services with proactive monitoring, maintenance, and 24/7 support. Our expert team manages your entire IT infrastructure while you focus on core business operations.
                    </p>
                    
                    <p className="text-lg text-gray-700 leading-relaxed">
                      As a leading MSP, we reduce IT complexity, improve system reliability, and optimize technology investments. Whether you need complete IT outsourcing or supplemental support, we deliver scalable solutions tailored to your budget and business needs.
                    </p>
                  </div>

                  {/* Call to Action */}
                  <div className="pt-2">
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-semibold transition-colors duration-300">
                      Get Started Today
                    </button>
                  </div>

                </div>
              </div>

            </div>
          </section>

          {/* IT Management Process Steps Slideshow */}
          <section className="relative" style={{paddingTop: '30px', paddingBottom: '30px'}}>
            <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
              <div className="text-center mb-10">
                <h5 className="text-orange-500 font-semibold mb-4 uppercase tracking-wider text-sm">Industry recognized process</h5>
                <h3 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-6">
                  Steps to Professional IT Management
                </h3>
              </div>

              {/* Slideshow Container */}
              <div className="relative">

                {/* Slider Cards */}
                <div 
                  className="overflow-x-hidden"
                  onTouchStart={onTouchStart}
                  onTouchMove={onTouchMove}
                  onTouchEnd={onTouchEnd}
                >
                  <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                      transform: slidesToShow === 1 
                        ? `translateX(-${currentSlide * 100}%)`
                        : slidesToShow === 2
                        ? `translateX(-${currentSlide * 50}%)`
                        : `translateX(-${currentSlide * 33.333}%)`
                    }}
                  >
                    
                    {/* Card 1 */}
                    <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-3">
                      <div className="bg-white rounded-3xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                        <div className="relative h-48 overflow-hidden">
                        <img 
                          src="/managed-it/process-step-1.jpg" 
                          alt="IT Assessment and Analysis"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute top-6 left-6">
                          <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                            <span className="text-xl font-bold text-white">01</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-8 flex-grow">
                        <h4 className="text-xl font-bold text-[#1e3a8a] mb-3">IT Assessment and Analysis</h4>
                        <p className="text-gray-600 leading-relaxed">Complete IT infrastructure evaluation to identify optimization opportunities and risks.</p>
                      </div>
                      </div>
                    </div>

                    {/* Card 2 */}
                    <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-3">
                      <div className="bg-white rounded-3xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                        <div className="relative h-48 overflow-hidden">
                        <img 
                          src="/managed-it/process-step-2.jpg" 
                          alt="Customized IT Solutions"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute top-6 left-6">
                          <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                            <span className="text-xl font-bold text-white">02</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-8 flex-grow">
                        <h4 className="text-xl font-bold text-[#1e3a8a] mb-3">Customized Solutions Design</h4>
                        <p className="text-gray-600 leading-relaxed">Design tailored IT management solutions that align with your business goals and operational requirements.</p>
                      </div>
                      </div>
                    </div>

                    {/* Card 3 */}
                    <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-3">
                      <div className="bg-white rounded-3xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                        <div className="relative h-48 overflow-hidden">
                        <img 
                          src="/managed-it/process-step-3.jpg" 
                          alt="Implementation and Integration"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute top-6 left-6">
                          <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                            <span className="text-xl font-bold text-white">03</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-8 flex-grow">
                        <h4 className="text-xl font-bold text-[#1e3a8a] mb-3">Implementation and Integration</h4>
                        <p className="text-gray-600 leading-relaxed">Seamlessly implement monitoring tools and management systems with minimal disruption to your operations.</p>
                      </div>
                      </div>
                    </div>

                    {/* Card 4 */}
                    <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-3">
                      <div className="bg-white rounded-3xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                        <div className="relative h-48 overflow-hidden">
                        <img 
                          src="/managed-it/process-step-4.jpg" 
                          alt="24/7 Monitoring and Support"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute top-6 left-6">
                          <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                            <span className="text-xl font-bold text-white">04</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-8 flex-grow">
                        <h4 className="text-xl font-bold text-[#1e3a8a] mb-3">24/7 Monitoring and Support</h4>
                        <p className="text-gray-600 leading-relaxed">Begin continuous monitoring with proactive maintenance and rapid response to issues.</p>
                      </div>
                      </div>
                    </div>

                    {/* Card 5 */}
                    <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-3">
                      <div className="bg-white rounded-3xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                        <div className="relative h-48 overflow-hidden">
                        <img 
                          src="/managed-it/process-step-5.jpg" 
                          alt="Performance Optimization"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute top-6 left-6">
                          <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                            <span className="text-xl font-bold text-white">05</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-8 flex-grow">
                        <h4 className="text-xl font-bold text-[#1e3a8a] mb-3">Performance Optimization</h4>
                        <p className="text-gray-600 leading-relaxed">Continuously optimize systems for peak performance and implement efficiency improvements.</p>
                      </div>
                      </div>
                    </div>

                    {/* Card 6 */}
                    <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-3">
                      <div className="bg-white rounded-3xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                        <div className="relative h-48 overflow-hidden">
                        <img 
                          src="/managed-it/process-step-6.jpg" 
                          alt="User Training and Support"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute top-6 left-6">
                          <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                            <span className="text-xl font-bold text-white">06</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-8 flex-grow">
                        <h4 className="text-xl font-bold text-[#1e3a8a] mb-3">User Training and Support</h4>
                        <p className="text-gray-600 leading-relaxed">Provide comprehensive user training and ongoing help desk support to maximize productivity.</p>
                      </div>
                      </div>
                    </div>

                    {/* Card 7 */}
                    <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-3">
                      <div className="bg-white rounded-3xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                        <div className="relative h-48 overflow-hidden">
                        <img 
                          src="/managed-it/process-step-7.jpg" 
                          alt="Backup and Recovery"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute top-6 left-6">
                          <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                            <span className="text-xl font-bold text-white">07</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-8 flex-grow">
                        <h4 className="text-xl font-bold text-[#1e3a8a] mb-3">Backup and Recovery</h4>
                        <p className="text-gray-600 leading-relaxed">Implement robust backup solutions and test recovery procedures to ensure business continuity.</p>
                      </div>
                      </div>
                    </div>

                    {/* Card 8 */}
                    <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-3">
                      <div className="bg-white rounded-3xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                        <div className="relative h-48 overflow-hidden">
                        <img 
                          src="/managed-it/process-step-8.jpg" 
                          alt="Strategic IT Planning"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        <div className="absolute top-6 left-6">
                          <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                            <span className="text-xl font-bold text-white">08</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-8 flex-grow">
                        <h4 className="text-xl font-bold text-[#1e3a8a] mb-3">Strategic IT Planning</h4>
                        <p className="text-gray-600 leading-relaxed">Develop long-term IT strategies and roadmaps aligned with your business growth objectives.</p>
                      </div>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Bottom Navigation */}
                <div className="flex items-center justify-center mt-12 lg:mt-8 space-x-8 lg:space-x-6">
                  <button 
                    onClick={prevSlide}
                    className="p-4 lg:p-3 rounded-full bg-blue-50 text-[#1e3a8a] hover:bg-orange-100 hover:text-orange-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={currentSlide === 0}
                  >
                    <ChevronLeft className="w-6 h-6 lg:w-5 lg:h-5" />
                  </button>
                  
                  <div className="flex space-x-2 lg:space-x-1.5">
                    {Array.from({ length: totalSlides - slidesToShow + 1 }, (_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 lg:w-2.5 lg:h-2.5 rounded-full transition-all duration-300 ${
                          currentSlide === index 
                            ? 'bg-orange-600' 
                            : 'bg-blue-300 hover:bg-blue-400'
                        }`}
                      />
                    ))}
                  </div>
                  
                  <button 
                    onClick={nextSlide}
                    className="p-4 lg:p-3 rounded-full bg-blue-50 text-[#1e3a8a] hover:bg-orange-100 hover:text-orange-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={currentSlide >= totalSlides - slidesToShow}
                  >
                    <ChevronRight className="w-6 h-6 lg:w-5 lg:h-5" />
                  </button>
                </div>

              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="relative" style={{paddingTop: '30px', paddingBottom: '30px'}}>
            <div className="absolute inset-0">
              <div className="absolute top-20 left-10 w-64 h-64 bg-[#1e3a8a]/5 rounded-full blur-2xl"></div>
              <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#f97316]/5 rounded-full blur-3xl"></div>
            </div>
            
            <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl relative z-10">
              <div className="text-center mb-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-[#1e3a8a]">IT Management</span>{" "}
                  <span className="text-[#f97316]">Benefits</span>
                </h2>
                <p className="text-xl text-[#1e3a8a] max-w-3xl mx-auto leading-relaxed">
                  Discover how our managed IT services provide comprehensive support and peace of mind for your business operations
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Proactive IT Support",
                    description: "24/7 monitoring and proactive maintenance prevent 95% of potential issues before they impact your business operations.",
                    icon: Monitor,
                    color: "from-[#1e3a8a] to-[#1e40af]"
                  },
                  {
                    title: "Guaranteed Uptime",
                    description: "99.9% uptime guarantee ensures your systems are always available when you need them most, maximizing productivity.",
                    icon: Monitor,
                    color: "from-[#f97316] to-orange-500"
                  },
                  {
                    title: "Cost Optimization",
                    description: "Reduce IT costs by up to 40% while improving service quality through efficient resource management and planning.",
                    icon: Monitor,
                    color: "from-[#1e3a8a] to-[#1e40af]"
                  },
                  {
                    title: "Expert IT Team",
                    description: "Access to certified IT professionals and specialists without the overhead of hiring full-time staff.",
                    icon: Monitor,
                    color: "from-[#f97316] to-orange-500"
                  },
                  {
                    title: "Scalable Solutions",
                    description: "Easily scale your IT infrastructure up or down based on business needs without major capital investments.",
                    icon: Monitor,
                    color: "from-[#1e3a8a] to-[#1e40af]"
                  },
                  {
                    title: "Rapid Response",
                    description: "Average response time under 15 minutes for critical issues with immediate escalation procedures.",
                    icon: Monitor,
                    color: "from-[#f97316] to-orange-500"
                  }
                ].map((benefit, index) => (
                  <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100">
                    <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1e3a8a] mb-4 group-hover:text-[#f97316] transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Use Cases Section */}
          <section className="relative" style={{paddingTop: '30px', paddingBottom: '30px'}}>
            <div className="absolute inset-0">
              <div className="absolute top-20 right-10 w-64 h-64 bg-[#f97316]/5 rounded-full blur-2xl"></div>
              <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#1e3a8a]/5 rounded-full blur-3xl"></div>
            </div>
            
            <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl relative z-10">
              <div className="text-center mb-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="text-[#1e3a8a]">IT Management</span>{" "}
                  <span className="text-[#f97316]">Success Stories</span>
                </h2>
                <p className="text-xl text-[#1e3a8a] max-w-3xl mx-auto leading-relaxed">
                  Real-world examples of how our managed IT services have transformed business operations
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {[
                  {
                    industry: "Healthcare",
                    company: "Regional Medical Practice",
                    challenge: "Frequent IT issues disrupting patient care with outdated systems and no dedicated IT support staff.",
                    solution: "Implemented comprehensive managed IT services with 24/7 monitoring, EMR system optimization, and HIPAA compliance.",
                    result: "Eliminated system downtime, improved patient satisfaction by 40%, and achieved full HIPAA compliance.",
                    metrics: "Zero Downtime",
                    bgColor: "from-[#1e3a8a] to-[#1e40af]",
                    accentColor: "text-[#1e3a8a]"
                  },
                  {
                    industry: "Manufacturing",
                    company: "Industrial Equipment Manufacturer",
                    challenge: "Legacy systems causing production delays with equipment costing $50K per hour of downtime.",
                    solution: "Modernized IT infrastructure with proactive monitoring, automated backups, and rapid response protocols.",
                    result: "Reduced downtime by 98%, improved production efficiency by 35%, and prevented $2M in potential losses.",
                    metrics: "98% Downtime Reduction",
                    bgColor: "from-[#f97316] to-orange-500",
                    accentColor: "text-[#1e3a8a]"
                  },
                  {
                    industry: "Professional Services",
                    company: "Accounting Firm Network",
                    challenge: "Multiple office locations with inconsistent IT support leading to productivity issues and security concerns.",
                    solution: "Standardized IT infrastructure across all locations with centralized monitoring and unified security protocols.",
                    result: "Improved productivity by 50%, enhanced security posture, and reduced IT costs by 35% across all locations.",
                    metrics: "50% Productivity Gain",
                    bgColor: "from-[#1e3a8a] to-[#1e40af]",
                    accentColor: "text-[#1e3a8a]"
                  }
                ].map((useCase, index) => (
                  <div key={index} className="bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
                    <div className={`bg-gradient-to-r ${useCase.bgColor} p-6 text-white relative overflow-hidden h-32`}>
                      <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                      </div>
                      
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-4">
                          <div className="text-sm font-semibold text-white/80">{useCase.industry}</div>
                          <div className="text-right">
                            <div className="text-2xl font-bold">{useCase.metrics}</div>
                            <div className="text-sm text-white/80">Result</div>
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-white">
                          {useCase.company}
                        </h3>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-[#1e3a8a] mb-2">Challenge:</h4>
                          <p className="text-gray-600 text-sm leading-relaxed">{useCase.challenge}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-[#1e3a8a] mb-2">IT Solution:</h4>
                          <p className="text-gray-600 text-sm leading-relaxed">{useCase.solution}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-[#1e3a8a] mb-2">Result:</h4>
                          <p className={`${useCase.accentColor} font-semibold text-sm leading-relaxed`}>
                            {useCase.result}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="relative overflow-hidden" style={{paddingTop: '30px', paddingBottom: '30px'}}>
            {/* Background Elements */}
            <div className="absolute inset-0">
              <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-64 h-48 sm:h-64 bg-[#f97316]/5 rounded-full blur-2xl"></div>
              <div className="absolute bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-[#1e3a8a]/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 max-w-4xl relative z-10">
              {/* Header */}
              <div className="text-center mb-12 sm:mb-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                  <span className="text-[#1e3a8a]">Frequently Asked</span>{" "}
                  <span className="text-[#f97316]">Questions</span>
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
                  Common questions about managed IT services and how we can help your business
                </p>
              </div>

              {/* FAQ Accordion */}
              <div className="space-y-3 sm:space-y-4">
                {[
                  {
                    question: "What is included in your managed IT services?",
                    answer: "Our managed IT services include 24/7 monitoring and support, network management, cybersecurity protection, data backup and recovery, software updates and patch management, help desk support, IT consulting, and strategic technology planning. We provide comprehensive coverage for all your IT infrastructure needs."
                  },
                  {
                    question: "How quickly can you respond to IT issues?",
                    answer: "We offer tiered response times based on issue severity. Critical issues receive immediate response (within 15 minutes), high-priority issues within 1 hour, medium-priority within 4 hours, and low-priority within 24 hours. Our 24/7 monitoring helps us identify and resolve many issues before they impact your business."
                  },
                  {
                    question: "Do you work with businesses of all sizes?",
                    answer: "Yes, we provide managed IT services for businesses ranging from small startups with 5-10 employees to large enterprises with 1000+ users. Our services are scalable and customizable to meet the specific needs and budget of each organization, regardless of size."
                  },
                  {
                    question: "How do you ensure data security and compliance?",
                    answer: "We implement multi-layered security including firewalls, antivirus protection, encryption, access controls, and regular security audits. We help maintain compliance with industry standards like HIPAA, PCI DSS, and GDPR through proper documentation, monitoring, and security protocols tailored to your industry requirements."
                  },
                  {
                    question: "What are the costs for managed IT services?",
                    answer: "Our pricing is typically based on a per-user, per-month model or a flat monthly fee depending on your needs. Costs vary based on the number of users, complexity of your IT environment, and level of service required. We provide transparent pricing with no hidden fees and can often reduce your overall IT costs by 20-40%."
                  },
                  {
                    question: "Can you work with our existing IT infrastructure?",
                    answer: "Absolutely. We perform a comprehensive assessment of your current IT infrastructure and work with your existing systems, hardware, and software. We identify optimization opportunities and recommend upgrades only when necessary for security, performance, or cost-effectiveness."
                  }
                ].map((faq, index) => (
                  <div 
                    key={index} 
                    className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                      className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 text-left focus:outline-none focus:ring-2 focus:ring-[#f97316]/20 focus:ring-offset-2 group"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#1e3a8a] group-hover:text-[#f97316] transition-colors duration-300 pr-4 leading-tight">
                          {faq.question}
                        </h3>
                        <div className="flex-shrink-0 ml-2">
                          <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-[#f97316] to-orange-500 flex items-center justify-center transition-transform duration-300 ${
                            openFAQ === index ? 'rotate-180' : 'rotate-0'
                          }`}>
                            {openFAQ === index ? (
                              <Minus className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                            ) : (
                              <Plus className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                            )}
                          </div>
                        </div>
                      </div>
                    </button>
                    
                    <div className={`transition-all duration-300 ease-in-out ${
                      openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    } overflow-hidden`}>
                      <div className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-5 lg:pb-6">
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-4"></div>
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </section>

        </div>

        
        {/* Call to Action Section */}
        <section className="relative z-10">
          <div className="relative bg-slate-800 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img 
                src="/managed-it/cta-background.jpg" 
                alt="Managed IT Services Background"
                className="w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-black/75"></div>
            </div>
            
            <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-12 1.25xl:px-16 max-w-7xl pt-8 1366:pt-6 pb-8 1366:pb-6">
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
                  Partner With Leading <span className="text-[#f97316]">Managed IT Services Experts</span> For Your Transformation Journey
                </h2>
                <p className="text-white/90 mb-10 text-lg leading-relaxed max-w-3xl mx-auto">
                  Connect with our managed IT specialists to accelerate your business growth. Get strategic guidance, technology insights, and implementation support from industry leaders in managed IT services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/contact" className="bg-[#f97316] hover:bg-orange-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
                    Download Our Guide
                  </a>
                  <a href="/work" className="bg-transparent border-2 border-[#f97316] text-[#f97316] hover:bg-[#f97316] hover:text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300">
                    See Case Studies
                  </a>
                  <a href="/contact" className="bg-transparent border-2 border-[#f97316] text-[#f97316] hover:bg-[#f97316] hover:text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300">
                    Get a Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </PageLayout>
  );
}