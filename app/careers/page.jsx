"use client";

import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, ArrowRight, Users, Target, Trophy, Heart, Lightbulb, Globe, DollarSign, BookOpen } from "lucide-react";
import { useState } from "react";

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState(null);

  const handleApplyClick = (job) => {
    // Redirect to contact page with job information
    window.location.href = `/contact?job=${encodeURIComponent(job.title)}&department=${encodeURIComponent(job.department)}`;
  };

  const jobOpenings = [
    {
      title: "Senior Digital Transformation Consultant",
      department: "Digital Advisory",
      location: "Toronto, ON",
      type: "Full-time",
      description: "Lead digital transformation initiatives for enterprise clients, providing strategic guidance and implementation support.",
      posted: "2 days ago"
    },
    {
      title: "Cloud Solutions Architect",
      department: "Cloud Services",
      location: "Vancouver, BC",
      type: "Full-time",
      description: "Design and implement scalable cloud solutions for clients across various industries.",
      posted: "1 week ago"
    },
    {
      title: "Cybersecurity Analyst",
      department: "Cyber Security & Privacy",
      location: "Calgary, AB",
      type: "Full-time",
      description: "Assess security risks, implement protective measures, and ensure compliance with industry standards.",
      posted: "3 days ago"
    },
    {
      title: "Data Analytics Specialist",
      department: "Applied Data & Analytics",
      location: "Montreal, QC",
      type: "Full-time",
      description: "Transform client data into actionable insights using advanced analytics and visualization tools.",
      posted: "5 days ago"
    },
    {
      title: "Application Developer",
      department: "Application Development",
      location: "Remote",
      type: "Full-time",
      description: "Develop custom applications using modern frameworks and best practices in software development.",
      posted: "1 day ago"
    },
    {
      title: "IT Infrastructure Manager",
      department: "Managed IT Services",
      location: "Ottawa, ON",
      type: "Full-time",
      description: "Oversee IT infrastructure for multiple clients, ensuring optimal performance and security.",
      posted: "1 week ago"
    },
    {
      title: "UX/UI Designer",
      department: "Digital Platforms",
      location: "Toronto, ON",
      type: "Full-time",
      description: "Create intuitive and engaging user experiences for web and mobile applications across various client projects.",
      posted: "4 days ago"
    }
  ];

  const benefits = [
    {
      title: "Competitive Compensation",
      description: "We offer industry-leading salaries that reflect your expertise and contributions. Our comprehensive compensation package includes performance-based bonuses, stock options, and annual salary reviews. We believe in rewarding excellence and ensuring our team members are compensated fairly for their valuable work.",
      icon: DollarSign
    },
    {
      title: "Professional Development", 
      description: "Your growth is our priority. We provide unlimited access to online learning platforms, certification programs, and technical conferences. Each team member receives a dedicated annual budget for professional development. We also offer mentorship programs and career coaching to help you reach your full potential.",
      icon: BookOpen
    },
    {
      title: "Flexible Work",
      description: "We understand that life happens outside of work. Choose from fully remote, hybrid, or in-office arrangements based on your preferences and role requirements. Our flexible hours policy allows you to work when you're most productive. We trust our team to deliver results while maintaining a healthy work-life balance.",
      icon: Clock
    },
    {
      title: "Health & Wellness",
      description: "Your health matters to us. We provide comprehensive medical, dental, and vision coverage for you and your family. Our wellness programs include gym memberships, mental health support, and regular wellness workshops. We also offer generous sick leave and personal days to ensure you can take care of yourself.",
      icon: Heart
    },
    {
      title: "Innovation Culture",
      description: "Be at the forefront of digital transformation. Work with the latest technologies including AI, cloud computing, and emerging tech stacks. We encourage experimentation and provide innovation time for personal projects. Join hackathons, contribute to open source, and shape the future of technology with us.",
      icon: Lightbulb
    },
    {
      title: "Team Environment",
      description: "Join a diverse team of passionate professionals who support each other's success. Our collaborative culture emphasizes knowledge sharing, cross-functional projects, and team celebrations. Regular team building events, social gatherings, and virtual coffee chats keep us connected. We believe great teams build great products.",
      icon: Users
    }
  ];

  return (
    <PageLayout>
      <div className="min-h-screen bg-white">
        
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center">
          <div className="absolute inset-0">
            <img 
              src="/career-hero-bg.jpg" 
              alt="Software Development Office"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/70"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-6 lg:px-12 max-w-6xl">
            <div className="text-center space-y-6">
              <div className="h-20 mb-6"></div>
              
              <h1 className="text-4xl md:text-5xl 1366:text-4xl lg:text-6xl 2xl:text-7xl font-bold text-white mb-6">
                Join Our <br />
                <span className="text-[#f97316]">Amazing Team</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Build your career with Akhee and help organizations transform through innovative technology solutions. Be part of a team that's shaping the future of digital transformation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                <Button 
                  asChild
                  className="bg-blue-900 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
                >
                  <a href="#openings">
                    View Open Positions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button 
                  asChild
                  variant="outline"
                  className="text-white hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
                  style={{borderColor: '#f97316', backgroundColor: '#f97316'}}
                >
                  <a href="#culture">
                    Download Our Guide
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Join Us */}
        <section id="culture" className="pt-8 1366:pt-8 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
            
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl 1366:text-4xl font-bold text-[#1e3a8a] mb-6">
                Why Join <span className="text-orange-500">Akhee?</span>
              </h2>
              <p className="text-xl text-[#1e3a8a] max-w-4xl mx-auto leading-relaxed mb-6">
                Be part of a dynamic team that's shaping the future of digital transformation across Canada.
              </p>
              <p className="text-lg text-gray-600 max-w-5xl mx-auto leading-relaxed">
                At Akhee, we're more than just a technology company – we're innovators, problem-solvers, and digital pioneers committed to making a real impact. 
                Our team members work on challenging projects that push the boundaries of what's possible, collaborating with Fortune 500 companies and emerging startups alike. 
                We invest heavily in our people through continuous learning programs, mentorship opportunities, and exposure to cutting-edge technologies. 
                Our culture celebrates diversity, encourages creative thinking, and rewards excellence, creating an environment where every voice is heard and valued. 
                With flexible work arrangements, competitive compensation, and a genuine focus on work-life balance, we ensure our team members thrive both professionally and personally. 
                Join us in building the digital future while advancing your career alongside some of the brightest minds in the industry.
              </p>
            </div>

            {/* Featured Quote Section */}
            <div className="relative max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-orange-600 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
                  <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full translate-x-20 translate-y-20"></div>
                  <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-orange-400 rounded-full"></div>
                </div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                    </svg>
                  </div>
                  <blockquote className="text-xl md:text-2xl font-medium text-white mb-6 leading-relaxed">
                    "At Akhee, we believe that our people are our greatest asset. We foster an environment of continuous learning, innovation, and collaboration where every team member can thrive and make a meaningful impact."
                  </blockquote>
                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">BD</span>
                    </div>
                    <div className="text-left">
                      <div className="text-white font-semibold">Akhee Team</div>
                      <div className="text-[#1e3a8a] text-sm">Leadership & Culture</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Job Openings */}
        <section id="openings" className="pt-20 1366:pt-20 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
            
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl 1366:text-4xl font-bold text-[#1e3a8a] mb-6">
                Current <span className="text-orange-500">Opportunities</span>
              </h2>
              <p className="text-xl text-[#1e3a8a] max-w-4xl mx-auto leading-relaxed">
                Discover exciting career opportunities across our various service areas and departments.
              </p>
            </div>


            {/* Job Cards with Images - Including General Application */}
            <div className="grid lg:grid-cols-2 gap-8 mb-10">
              {/* Regular Job Cards */}
              {jobOpenings.map((job, index) => {
                const jobImages = [
                  "/career-digital-transformation.jpg", // Digital Transformation
                  "/career-cloud-solutions.jpg", // Cloud Solutions
                  "/career-cybersecurity.jpg", // Cybersecurity
                  "/career-data-analytics.jpg", // Data Analytics
                  "/career-app-development.jpg", // Application Development
                  "/career-it-infrastructure.jpg", // IT Infrastructure
                  "/career-ux-ui-designer.jpg", // UX/UI Designer
                ];
                
                return (
                  <div key={index} className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-orange-200">
                    {/* Image Section */}
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={jobImages[index]} 
                        alt={job.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                      <div className="absolute top-4 left-4 flex gap-2">
                        <Badge className="bg-white/90 text-[#1e3a8a] hover:bg-white/90 backdrop-blur-sm">
                          {job.department}
                        </Badge>
                        <Badge variant="outline" className="border-orange-500 bg-orange-500/90 text-white hover:bg-orange-500/90">
                          {job.type}
                        </Badge>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8">
                      <div className="space-y-4">
                        <h3 className="text-xl font-bold text-[#1e3a8a] group-hover:text-orange-500 transition-colors duration-300 line-clamp-2">
                          {job.title}
                        </h3>
                        
                        <p className="text-gray-600 leading-relaxed text-sm line-clamp-2">
                          {job.description}
                        </p>
                        
                        <div className="flex items-center justify-between pt-4">
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2 text-gray-500">
                              <MapPin className="h-4 w-4 text-orange-500" />
                              <span className="font-medium text-sm">{job.location}</span>
                            </div>
                            <div className="flex items-center space-x-2 text-gray-500">
                              <Clock className="h-4 w-4 text-orange-500" />
                              <span className="font-medium text-sm">Posted {job.posted}</span>
                            </div>
                          </div>
                          
                          <Button 
                            onClick={() => handleApplyClick(job)}
                            className="bg-blue-900 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group/btn"
                          >
                            Apply
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* General Application Card - Same Size as Job Cards */}
              <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-orange-200">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src="/career-team.jpg" 
                    alt="Join Our Team"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge className="bg-white/90 text-[#1e3a8a] hover:bg-white/90 backdrop-blur-sm">
                      Various Departments
                    </Badge>
                    <Badge variant="outline" className="border-orange-500 bg-orange-500/90 text-white hover:bg-orange-500/90">
                      Open Application
                    </Badge>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-[#1e3a8a] group-hover:text-orange-500 transition-colors duration-300">
                      General Application
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed text-sm line-clamp-2">
                      Don't see the perfect role? Submit your profile for future opportunities and we'll reach out when suitable positions become available.
                    </p>
                    
                    <div className="flex items-center justify-between pt-4">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-gray-500">
                          <MapPin className="h-4 w-4 text-orange-500" />
                          <span className="font-medium text-sm">Multiple Locations</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-500">
                          <Clock className="h-4 w-4 text-orange-500" />
                          <span className="font-medium text-sm">Always Open</span>
                        </div>
                      </div>
                      
                      <Button 
                        onClick={() => handleApplyClick({ title: "General Application", department: "Various Departments", location: "Multiple Locations" })}
                        className="bg-blue-900 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group/btn"
                      >
                        Apply
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 1366:py-16 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src="/career-cta-bg.jpg" 
              alt="Team Success"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/70"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 container mx-auto px-6 lg:px-12 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Side - Text Content */}
              <div className="text-left">
                <h2 className="text-4xl md:text-5xl 1366:text-4xl font-bold text-[#f97316] mb-6 leading-tight">
                  Ready to Shape the <span className="text-orange-400">Future?</span>
                </h2>
                <p className="text-xl text-white mb-8 leading-relaxed">
                  Join our team and help organizations across Canada harness technology to achieve their goals and drive digital transformation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    asChild
                    className="bg-blue-900 hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <a href="#openings">
                      View All Positions
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                  <a 
                    href="/contact"
                    className="border-2 text-white hover:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:bg-[#f97316] inline-block text-center"
                    style={{borderColor: '#f97316', backgroundColor: 'transparent'}}
                  >
                    Contact HR Team
                  </a>
                </div>
              </div>
              
              {/* Right Side - Stats or Visual Element */}
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <div className="text-center text-white">
                    <h3 className="text-2xl font-bold mb-6">Join Our Growing Team</h3>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <div className="text-3xl font-bold text-[#f97316]">50+</div>
                        <div className="text-sm text-white">Team Members</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-[#f97316]">100+</div>
                        <div className="text-sm text-white">Projects Delivered</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-[#f97316]">8+</div>
                        <div className="text-sm text-white">Service Areas</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-[#f97316]">5+</div>
                        <div className="text-sm text-white">Years Experience</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </section>
      </div>
      
    </PageLayout>
  );
}