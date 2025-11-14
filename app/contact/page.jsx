"use client";

import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, MessageCircle, Calendar, Sparkles, ArrowRight, Zap, Target, Lightbulb, HandHeart, TrendingUp, Facebook, Linkedin, Twitter, Instagram } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: ["hello@akhee.com", "support@akhee.com"],
      action: "Send Email"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+92 332 4444411", "+92 51 400 0001"],
      action: "Call Now"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["17 Hills Appartement, Near Barakahu", "Islamabad, Pakistan"],
      action: "Get Directions"
    }
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');
  const [formStarted, setFormStarted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Track form start on first input
    if (!formStarted && value.length > 0) {
      setFormStarted(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate form submission

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would normally send the form data to your backend
      console.log('Form submitted:', {
        ...formData,
        userEmail: formData.email,
        userId: Date.now()
      });
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setFormStarted(false);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageLayout>
      <div className="min-h-screen bg-white">

        {/* Hero Section */}
        <section className="relative min-h-screen sm:min-h-[80vh] flex items-center justify-center">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src="/contact-hero-bg.jpg" 
              alt="Contact Us Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/70"></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 1366:px-8 max-w-6xl 1366:max-w-5xl">
            <div className="text-center space-y-6 sm:space-y-8 pt-8 sm:pt-12 pb-8 sm:pb-0">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-8">
                Contact <span className="text-[#f97316]">Us</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
                Ready to transform your business? We're here to help you every step of the way. Let's discuss your project and make your digital vision a reality.
              </p>
              
            </div>
          </div>
        </section>

        {/* Transition Background Section */}
        <div className="relative">
          
          {/* Bottom Background - Different Color */}
          <div className="bg-gray-50 h-32"></div>
          
          {/* Overlapping Get in Touch Card */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 1366:-top-[170px] 1366:translate-y-0 z-10 w-full max-w-7xl px-4 sm:px-6">
            <div className="flex justify-center">
              {/* Two-column Contact Card */}
              <div className="w-full max-w-5xl bg-white rounded-[12px] sm:rounded-[20px] shadow-2xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Left Dark Navy Section */}
                  <div className="bg-[#1d2230] p-6 sm:p-8 lg:p-10">
                    <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-white mb-6 sm:mb-8 font-['Poppins',sans-serif]">
                      Get in Touch
                    </h2>
                    
                    <div className="space-y-4 sm:space-y-6">
                      {/* Phone */}
                      <a 
                        href="tel:+923324444411" 
                        className="flex items-center space-x-4 text-[#f2f2f2] hover:text-white transition-colors duration-200 group"
                      >
                        <div className="w-5 h-5 flex items-center justify-center">
                          <Phone className="w-5 h-5" strokeWidth={1.5} />
                        </div>
                        <span className="text-base font-['Inter',sans-serif]">+92 332 4444411</span>
                      </a>

                      {/* Email */}
                      <a 
                        href="mailto:hello@akhee.com" 
                        className="flex items-center space-x-4 text-[#f2f2f2] hover:text-white transition-colors duration-200 group"
                      >
                        <div className="w-5 h-5 flex items-center justify-center">
                          <Mail className="w-5 h-5" strokeWidth={1.5} />
                        </div>
                        <span className="text-base font-['Inter',sans-serif]">hello@akhee.com</span>
                      </a>

                      {/* Address */}
                      <div className="flex items-start space-x-4 text-[#f2f2f2]">
                        <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                          <MapPin className="w-5 h-5" strokeWidth={1.5} />
                        </div>
                        <div className="text-base leading-relaxed font-['Inter',sans-serif]">
                          17 Hills Appartement, Near Barakahu<br />
                          Islamabad, Pakistan
                        </div>
                      </div>
                    </div>

                    {/* Social Media Icons with Orange Background */}
                    <div className="flex space-x-3 mt-10">
                      <a 
                        href="https://www.facebook.com/akheetech/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center hover:bg-orange-600 transition-all duration-200 group"
                      >
                        <Facebook className="w-5 h-5 text-white" fill="currentColor" strokeWidth={0} />
                      </a>
                      <a 
                        href="https://www.linkedin.com/company/akhee-tech/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center hover:bg-orange-600 transition-all duration-200 group"
                      >
                        <Linkedin className="w-5 h-5 text-white" fill="currentColor" strokeWidth={0} />
                      </a>
                      <a 
                        href="https://www.instagram.com/akhee.tech/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center hover:bg-orange-600 transition-all duration-200 group"
                      >
                        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                          <path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                      </a>
                      <a 
                        href="https://twitter.com/akhee_tech" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center hover:bg-orange-600 transition-all duration-200 group"
                      >
                        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Right White Section for Form */}
                  <div className="bg-white p-6 sm:p-8 lg:p-10">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#1e3a8a] mb-3 sm:mb-4 font-['Poppins',sans-serif]">
                      Send us a message
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 font-['Inter',sans-serif]">
                      We're here to help and answer any questions you might have.
                    </p>
                    
                    {submitStatus === 'success' && (
                      <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                        <p className="text-green-700 font-medium">Message sent successfully! We'll get back to you soon.</p>
                      </div>
                    )}
                    
                    {submitStatus === 'error' && (
                      <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                        <p className="text-red-700 font-medium">Error sending message. Please try again.</p>
                      </div>
                    )}
                    
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <input 
                          type="text" 
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your Name"
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 font-['Inter',sans-serif]"
                          required
                        />
                      </div>
                      <div>
                        <input 
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Your Email"
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 font-['Inter',sans-serif]"
                          required
                        />
                      </div>
                      <div>
                        <textarea 
                          rows={4} 
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Your Message"
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 resize-none font-['Inter',sans-serif]"
                          required
                        ></textarea>
                      </div>
                      <Button 
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#f97316] text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-200 font-['Poppins',sans-serif] disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <>
                            Sending...
                          </>
                        ) : (
                          'Send Message'
                        )}
                      </Button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Spacer to account for overlapping card */}
        <div className="bg-gray-50 pb-16 sm:pb-24 lg:pb-32"></div>

        {/* Map Section */}
        <section className="relative pt-[55px] sm:pt-10 1366:pt-[55px] pb-12 sm:pb-16 lg:pb-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 1366:px-8 max-w-7xl 1366:max-w-6xl">
            <div className="text-center mb-6 sm:mb-8 lg:mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 1366:text-4xl font-bold mb-3 sm:mb-4">
                <span className="text-[#1e3a8a]">Find </span>
                <span className="text-orange-500">Us</span>
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-xl sm:max-w-2xl mx-auto px-4 sm:px-0">
                Visit our office or get in touch with our team. We are located in the heart of Islamabad.
              </p>
            </div>

            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
              {/* Map Container */}
              <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] bg-gray-200">
                {/* Using Google Maps Embed */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.7!2d73.1333!3d33.7294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s17%20Hills%20Appartement%2C%20Near%20Barakahu%2C%20Islamabad%2C%20Pakistan!5e0!3m2!1sen!2spk!4v1699999999999"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>

                {/* Overlay Card */}
                <div className="absolute top-8 left-8 bg-white rounded-xl shadow-xl p-6 max-w-sm z-10">
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-4">Akhee HQ</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <div className="text-sm text-gray-600">
                        17 Hills Appartement<br />
                        Near Barakahu, Islamabad<br />
                        Pakistan
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-orange-500" />
                      <a href="tel:+923324444411" className="text-sm text-gray-600 hover:text-orange-500 transition-colors">
                        +92 332 4444411
                      </a>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-orange-500" />
                      <a href="mailto:hello@akhee.com" className="text-sm text-gray-600 hover:text-orange-500 transition-colors">
                        hello@akhee.com
                      </a>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <h4 className="text-sm font-semibold text-[#1e3a8a] mb-2">Business Hours</h4>
                    <div className="text-xs text-gray-600 space-y-1">
                      <div className="flex justify-between">
                        <span>Monday - Friday:</span>
                        <span className="font-medium">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday:</span>
                        <span className="font-medium">10:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday:</span>
                        <span className="font-medium">Closed</span>
                      </div>
                    </div>
                  </div>

                  <button className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                    Get Directions
                  </button>
                </div>

                {/* Map Marker Overlay */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full">
                  <div className="relative">
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                      <MapPin className="w-6 h-6 text-white" fill="white" />
                    </div>
                    <div className="absolute top-10 left-1/2 -translate-x-1/2 w-3 h-3 bg-orange-500 rounded-full shadow-lg"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info Cards */}
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-lg font-bold text-[#1e3a8a] mb-2">Visit Our Office</h3>
                <p className="text-sm text-gray-600">
                  Located in Islamabad, Pakistan near Barakahu, with convenient access to the main city areas.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-[#1e3a8a]" />
                </div>
                <h3 className="text-lg font-bold text-[#1e3a8a] mb-2">Schedule a Meeting</h3>
                <p className="text-sm text-gray-600">
                  Book an appointment with our team for in-person consultations and project discussions.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <MessageCircle className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="text-lg font-bold text-[#1e3a8a] mb-2">24/7 Support</h3>
                <p className="text-sm text-gray-600">
                  Our support team is available round the clock to assist you with any queries or urgent requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>

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
    </PageLayout>
  );
}