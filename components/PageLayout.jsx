'use client';

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import { useEffect } from "react";
import { useScrollReveal } from "@/lib/scroll-reveal";


const PageLayout = ({ children }) => {
  // Initialize scroll reveal animations
  useEffect(() => {
    const cleanup = useScrollReveal();
    return cleanup;
  }, []);

  return (
    <div className="min-h-screen m-0 p-0">
      <Navigation />
      <main className="pt-0 m-0 p-0">
        {children}
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default PageLayout;