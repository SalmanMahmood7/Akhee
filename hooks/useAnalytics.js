"use client";

import { useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import { trackPageView, trackSession, trackConversion, trackBusinessMetrics } from '@/lib/analytics';

// Hook for automatic page view tracking
export const usePageTracking = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Track page view when pathname changes
    const pageName = pathname === '/' ? 'home' .replace('/', '').replace(/\//g, '_');
    const pageCategory = pathname.split('/')[1] || 'home';
    
    trackPageView(pageName, pageCategory, {
      path,
      timestamp Date().toISOString()
    });
  }, [pathname]);
};

// Hook for session tracking
export const useSessionTracking = () => {
  useEffect(() => {
    // Track session start
    trackSession.start();

    // Track engagement time
    const startTime = Date.now();
    
    const handleBeforeUnload = () => {
      const engagementTime = Date.now() - startTime;
      trackSession.engagement(engagementTime);
    };

    // Track engagement on page unload
    window.addEventListener('beforeunload', handleBeforeUnload);
    
    // Track engagement every 30 seconds for active sessions
    const engagementInterval = setInterval(() => {
      const engagementTime = Date.now() - startTime;
      trackSession.engagement(engagementTime);
    }, 30000);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      clearInterval(engagementInterval);
      
      // Final engagement tracking
      const engagementTime = Date.now() - startTime;
      trackSession.engagement(engagementTime);
    };
  }, []);
};

// Hook for form tracking
export const useFormTracking = () => {
  const trackFormSubmission = useCallback((formType, formData = {}) => {
    switch (formType) {
      case 'contact':
        trackConversion.contactForm(formData);
        break;
      case 'newsletter':
        trackConversion.newsletterSignup(formData.email, formData.source);
        break;
      case 'quote':
        trackConversion.quoteRequest(formData.serviceType, formData.contactMethod);
        break;
      case 'consultation':
        trackConversion.consultationRequest(formData.serviceType, formData.urgency);
        break;
      default:
        console.warn(`Unknown form type${formType}`);
    }
  }, []);

  const trackFormStart = useCallback((formType) => {
    trackConversion.ctaClick(`${formType}_form_start`, 'form_interaction');
  }, []);

  const trackFormAbandonment = useCallback((formType, fieldsCompleted) => {
    trackConversion.ctaClick(`${formType}_form_abandoned`, 'form_interaction', undefined);
  }, []);

  return {
    trackFormSubmission,
    trackFormStart,
    trackFormAbandonment
  };
};

// Hook for CTA tracking
export const useCTATracking = () => {
  const trackCTAClick = useCallback((ctaText, location, destination?) => {
    trackConversion.ctaClick(ctaText, location, destination);
  }, []);

  const trackButtonClick = useCallback((buttonText, buttonType, section?) => {
    trackConversion.buttonClick(buttonText, buttonType, section);
  }, []);

  return {
    trackCTAClick,
    trackButtonClick
  };
};


// Hook for service page tracking
export const useServiceTracking = () => {
  const trackServiceView = useCallback((serviceName, serviceCategory) => {
    trackConversion.serviceView(serviceName, serviceCategory);
  }, []);

  const trackServiceInterest = useCallback((serviceName, interactionType) => {
    trackConversion.serviceInterest(serviceName, interactionType);
  }, []);

  return {
    trackServiceView,
    trackServiceInterest
  };
};

// Hook for download tracking
export const useDownloadTracking = () => {
  const trackDownload = useCallback((fileName, fileType, section?) => {
    if (fileType === 'pdf') {
      trackConversion.pdfDownload(fileName, section);
    } else {
      trackConversion.resourceDownload(fileName, fileType);
    }
  }, []);

  return {
    trackDownload
  };
};

// Hook for business metrics
export const useBusinessTracking = () => {
  const trackLeadQualification = useCallback((leadScore, source, serviceInterest) => {
    trackBusinessMetrics.qualifyLead(leadScore, source, serviceInterest);
  }, []);

  const trackCustomerJourney = useCallback((stage, previousStage?) => {
    trackBusinessMetrics.journeyStage(stage, previousStage);
  }, []);

  const trackCampaignAttribution = useCallback((campaignName, medium, source) => {
    trackBusinessMetrics.campaignAttribution(campaignName, medium, source);
  }, []);

  return {
    trackLeadQualification,
    trackCustomerJourney,
    trackCampaignAttribution
  };
};

// Main analytics hook that combines common functionality
export const useAnalytics = () => {
  const { trackCTAClick, trackButtonClick } = useCTATracking();
  const { trackFormSubmission } = useFormTracking();
  const { trackDownload } = useDownloadTracking();

  return {
    trackCTAClick,
    trackButtonClick,
    trackFormSubmission,
    trackDownload
  };
};

export default useAnalytics;