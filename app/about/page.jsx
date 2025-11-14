"use client"

import PageLayout from "@/components/PageLayout";
import { Users, Heart, Award, Target, Sparkles, ArrowRight, CheckCircle, User, Code, Palette, Shield, BarChart3, Layers, Settings, Monitor } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Passion-Driven",
      description: "We're passionate about creating digital experiences that make a real difference."
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Your success is our success. We work as an extension of your team."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We never settle for good enough. Excellence is our standard."
    },
    {
      icon: Target,
      title: "Results-Oriented",
      description: "Every decision we make is focused on delivering measurable results."
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      icon: User,
      bio: "15+ years of digital transformation experience"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      icon: Code,
      bio: "Former Google engineer, AI and cloud expert"
    },
    {
      name: "Emily Rodriguez",
      role: "Design Director",
      icon: Palette,
      bio: "Award-winning UX designer and creative strategist"
    },
    {
      name: "David Kim",
      role: "Security Lead",
      icon: Shield,
      bio: "Cybersecurity specialist with enterprise experience"
    }
  ];

  const milestones = [
    { year: "2019", title: "Company Founded", desc: "Started with a vision to transform businesses" },
    { year: "2020", title: "First 100 Clients", desc: "Reached our first major milestone" },
    { year: "2022", title: "Global Expansion", desc: "Expanded operations internationally" },
    { year: "2024", title: "500+ Projects", desc: "Delivered over 500 successful projects" }
  ];

  return (
    <PageLayout>
      <div className="min-h-screen bg-white">

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src="/about-hero-bg.jpg" 
              alt="About Us Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/70"></div>
          </div>

          <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-12 1366:px-8 max-w-6xl 1366:max-w-5xl">
            <div className="text-center space-y-8 pt-12">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8">
                About <span className="text-[#f97316]">Us</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                End-to-end digital solutions for businesses, enabling companies to deliver seamless experiences across modern platforms and devices.
              </p>
              
            </div>
          </div>
        </section>


        {/* Our Mission Section */}
        <section className="relative z-10 py-14 1366:py-14 bg-gray-50">
          <div className="container mx-auto px-6 md:px-8 lg:px-12 1366:px-8 max-w-6xl 1366:max-w-5xl">
            <div className="text-center space-y-8">
              <h2 className="text-4xl md:text-5xl 1366:text-4xl font-bold">
                <span className="text-[#1e3a8a]">Our </span>
                <span className="text-orange-500">Mission</span>
              </h2>
              
              <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                To empower businesses with cutting-edge digital solutions that drive growth, enhance efficiency, and create meaningful connections with customers. We're committed to turning your digital vision into reality.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-orange-100 rounded-xl flex items-center justify-center">
                    <Target className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1e3a8a]">Innovation</h3>
                  <p className="text-gray-600">Cutting-edge solutions for modern challenges</p>
                </div>
                
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-orange-100 rounded-xl flex items-center justify-center">
                    <Users className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1e3a8a]">Partnership</h3>
                  <p className="text-gray-600">Building lasting relationships with our clients</p>
                </div>
                
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-orange-100 rounded-xl flex items-center justify-center">
                    <Award className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1e3a8a]">Excellence</h3>
                  <p className="text-gray-600">Delivering exceptional results every time</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* IT Consultation Process Workflow */}
        <section className="relative py-14 1366:py-14 bg-gray-50">
          <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl 1366:text-4xl font-bold mb-6">
                <span className="text-[#1e3a8a]">Our Information Technology (IT) Consultation </span>
                <span className="text-orange-500">Process Workflow</span>
              </h2>
              
              <p className="text-lg md:text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
                For more than 11 years, our information technology consultation team has been assisting clients in different business verticals to speed up the digital transformation process. We follow a four-step information technology (IT) consultation process to provide maximum benefits quickly.
              </p>
            </div>

            {/* Timeline Process */}
            <div className="relative max-w-4xl mx-auto">
              {/* Vertical Timeline Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-orange-200 transform -translate-x-1/2 hidden md:block"></div>
              
              {/* Process Steps */}
              <div className="space-y-12">
                {/* Step 1 */}
                <div className="relative flex items-center md:justify-center">
                  <div className="flex flex-col md:flex-row items-center w-full">
                    {/* Left Content (Desktop) */}
                    <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0 order-2 md:order-1">
                      <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-xl shadow-sm border border-green-200">
                        <h3 className="text-2xl font-bold text-[#1e3a8a] mb-3">Analyze</h3>
                        <p className="text-gray-700">
                          We analyze business IT needs, key pain areas, digitalization goals, and objectives to understand your current technology landscape.
                        </p>
                      </div>
                    </div>
                    
                    {/* Center Icon */}
                    <div className="absolute md:relative left-8 md:left-auto order-1 md:order-2">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#f97316] to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                        <BarChart3 className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm">
                        <span className="text-xs font-bold text-orange-600">1</span>
                      </div>
                    </div>
                    
                    {/* Right Spacer (Desktop) */}
                    <div className="hidden md:block md:w-1/2 md:pl-8 order-3"></div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative flex items-center md:justify-center">
                  <div className="flex flex-col md:flex-row items-center w-full">
                    {/* Left Spacer (Desktop) */}
                    <div className="hidden md:block md:w-1/2 md:pr-8 order-1"></div>
                    
                    {/* Center Icon */}
                    <div className="absolute md:relative left-8 md:left-auto order-1 md:order-2">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] rounded-full flex items-center justify-center shadow-lg">
                        <Layers className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm">
                        <span className="text-xs font-bold text-[#1e3a8a]">2</span>
                      </div>
                    </div>
                    
                    {/* Right Content (Desktop) */}
                    <div className="md:w-1/2 md:pl-8 mb-8 md:mb-0 order-2 md:order-3">
                      <div className="bg-gradient-to-r from-[#1e3a8a]/5 to-[#1e3a8a]/10 p-6 rounded-xl shadow-sm border border-[#1e3a8a]/20">
                        <h3 className="text-2xl font-bold text-[#1e3a8a] mb-3">Strategize</h3>
                        <p className="text-gray-700">
                          We identify areas for improvement and strategize comprehensive solutions to achieve your desired digital transformation goals.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative flex items-center md:justify-center">
                  <div className="flex flex-col md:flex-row items-center w-full">
                    {/* Left Content (Desktop) */}
                    <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0 order-2 md:order-1">
                      <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-xl shadow-sm border border-green-200">
                        <h3 className="text-2xl font-bold text-[#1e3a8a] mb-3">Implement</h3>
                        <p className="text-gray-700">
                          We implement the solutions with precision and ensure seamless integration with your existing IT infrastructure and workflows.
                        </p>
                      </div>
                    </div>
                    
                    {/* Center Icon */}
                    <div className="absolute md:relative left-8 md:left-auto order-1 md:order-2">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#f97316] to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                        <Settings className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm">
                        <span className="text-xs font-bold text-[#f97316]">3</span>
                      </div>
                    </div>
                    
                    {/* Right Spacer (Desktop) */}
                    <div className="hidden md:block md:w-1/2 md:pl-8 order-3"></div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="relative flex items-center md:justify-center">
                  <div className="flex flex-col md:flex-row items-center w-full">
                    {/* Left Spacer (Desktop) */}
                    <div className="hidden md:block md:w-1/2 md:pr-8 order-1"></div>
                    
                    {/* Center Icon */}
                    <div className="absolute md:relative left-8 md:left-auto order-1 md:order-2">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] rounded-full flex items-center justify-center shadow-lg">
                        <Monitor className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm">
                        <span className="text-xs font-bold text-[#1e3a8a]">4</span>
                      </div>
                    </div>
                    
                    {/* Right Content (Desktop) */}
                    <div className="md:w-1/2 md:pl-8 mb-8 md:mb-0 order-2 md:order-3">
                      <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-xl shadow-sm border border-purple-200">
                        <h3 className="text-2xl font-bold text-[#1e3a8a] mb-3">Monitor</h3>
                        <p className="text-gray-700">
                          We continuously monitor the performance of IT solutions and make proactive adjustments to improve efficiency and ROI.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Call to Action Section */}
        <section className="relative z-10">
          <div className="relative bg-slate-800 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img 
                src="/developer-workspace-bg.jpg" 
                alt="Developer Workspace Setup Background"
                className="w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-black/70"></div>
            </div>
            
            <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-12 1.25xl:px-16 max-w-7xl py-16 1366:py-16">
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-white/90 mb-10 text-lg leading-relaxed max-w-3xl mx-auto">
                  Let our experienced IT consultation team guide you through your digital transformation journey.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-[#f97316] hover:bg-orange-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 text-lg inline-block text-center"
                  >
                    Download Our Guide
                  </a>
                  <a
                    href="/case-studies"
                    className="bg-transparent border-2 border-[#f97316] text-[#f97316] px-8 py-4 rounded-full font-semibold hover:bg-[#f97316] hover:text-white transition-all duration-300 text-lg inline-block text-center"
                  >
                    See Case Studies
                  </a>
                  <a
                    href="/contact"
                    className="bg-transparent border-2 border-[#f97316] text-[#f97316] px-8 py-4 rounded-full font-semibold hover:bg-[#f97316] hover:text-white transition-all duration-300 text-lg inline-block text-center"
                  >
                    Get a Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications & Partnerships Section */}
        <section className="py-14 1366:py-14 bg-gradient-to-br from-gray-50 to-blue-50/30">
          <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
            

            {/* Technology Partners */}
            <div className="mb-12">
              <div className="text-center mb-10">
                <h3 className="text-3xl md:text-4xl 1366:text-3xl font-bold mb-6">
                  <span className="text-orange-500">Technology </span>
                  <span className="text-[#1e3a8a]">Partners</span>
                </h3>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Partnered with industry-leading technology providers to deliver cutting-edge solutions
                </p>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="group text-center">
                  <div className="w-32 h-20 mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <img src="/microsoft-logo.png" alt="Microsoft" className="w-full h-full object-contain" />
                  </div>
                  <div className="text-lg font-bold text-gray-900">Microsoft</div>
                  <div className="text-sm text-gray-600 mt-2">Gold Partner - Dynamics 365, Azure, Microsoft 365</div>
                </div>
                
                <div className="group text-center">
                  <div className="w-32 h-20 mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <img src="/aws-logo.png" alt="Amazon AWS" className="w-full h-full object-contain" />
                  </div>
                  <div className="text-lg font-bold text-gray-900">Amazon AWS</div>
                  <div className="text-sm text-gray-600 mt-2">Advanced Partner - Cloud Infrastructure, Migration</div>
                </div>
                
                <div className="group text-center">
                  <div className="w-32 h-20 mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <img src="/azure-logo.png" alt="Microsoft Azure" className="w-full h-full object-contain" />
                  </div>
                  <div className="text-lg font-bold text-gray-900">Microsoft Azure</div>
                  <div className="text-sm text-gray-600 mt-2">Expert Partner - Cloud Platform, Security, DevOps</div>
                </div>
                
                <div className="group text-center">
                  <div className="w-32 h-20 mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <img src="/partner-logo-new.png" alt="Partner Logo" className="w-full h-full object-contain" />
                  </div>
                  <div className="text-lg font-bold text-gray-900">Maison</div>
                  <div className="text-sm text-gray-600 mt-2">Technology Solutions & Innovation</div>
                </div>
              </div>
            </div>


          </div>
        </section>

        {/* CSS Animations */}
        <style jsx>{`
          @keyframes float-slow {
            0%, 100% { transform(0px) translateX(0px); }
            33% { transform(-20px) translateX(10px); }
            66% { transform(10px) translateX(-5px); }
          }
          
          @keyframes wave {
            0% { transform(0); }
            100% { transform(-800px); }
          }
          
          .animate-float-slow {
            animation-slow ease-in-out infinite;
          }
          
          .animate-wave {
            animation 20s linear infinite;
          }
        `}</style>
      </div>
    </PageLayout>
  );
}