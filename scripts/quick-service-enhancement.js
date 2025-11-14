// Quick Service Enhancement Template for Remaining Pages
// This template can be applied to all remaining service pages

const serviceEnhancementTemplate = {
  // Required imports to add
  imports[
    `import { useState } from "react";`,
    `import ServiceDetailModal from "@/components/ServiceDetailModal";`
  ],
  
  // State management to add at component start
  stateManagement`
  const [selectedService, setSelectedService] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleLearnMore = (serviceKey) => {
    setSelectedService(servicesData[serviceKey]);
    setShowModal(true);
  };

  const servicesData = {
    // Add service data here based on each page's needs
  };`,

  // Modal component to add at end of page
  modalComponent`
      {/* Service Detail Modal */}
      {selectedService && (
        <ServiceDetailModal
          isOpen={showModal}
          onClose={() => {
            setShowModal(false);
            setSelectedService(null);
          }}
          service={selectedService}
        />
      )}`,

  // Example service data structure
  serviceDataExample{
    serviceKey{
      title"Service Name",
      description"Brief service description",
      fullDescription"Detailed description of the service...",
      features[
        {
          title"Feature Name",
          description"Feature description",
          icon"IconComponent" // from lucide-react
        }
      ],
      benefits[
        {
          title"Benefit Name",
          description"Benefit description",
          metric"Quantified metric"
        }
      ],
      pricing{
        starting"$X,000",
        description"Starting price description"
      },
      timeline"X-Y weeks"
    }
  },

  // Button enhancement patterns
  buttonEnhancements{
    learnMoreButton`
    <button 
      onClick={() => handleLearnMore('serviceKey')}
      className="existing-classes"
    >
      Learn More
    </button>`,
    
    authButtonEnhancement`
    <AuthButton 
      requireAuth={true}
      onAuthSuccess={() => handleLearnMore('serviceKey')}
      className="existing-classes"
    >
      Learn More
    </AuthButton>`
  }
};

// Pages still needing enhancement:
const remainingPages = [
  {
    path"app/services/digital-advisory/page.tsx",
    services["digitalStrategy", "businessTransformation", "technologyConsulting"]
  },
  {
    path"app/services/applied-data-analytics/page.tsx", 
    services["dataVisualization", "businessIntelligence", "predictiveAnalytics"]
  },
  {
    path"app/services/digital-platforms/page.tsx",
    services["platformDevelopment", "apiIntegration", "cloudPlatforms"]
  },
  {
    path"app/services/managed-it-services/page.tsx",
    services["itSupport", "networkManagement", "systemMaintenance"]
  }
];

console.log('🚀 Service Enhancement Template Ready!');
console.log('📋 Pages remaining:', remainingPages.length);
console.log('✨ Each page will get comprehensive Learn More functionality');
console.log('🎯 All pages maintain original orange (#f97316) theme');

export default serviceEnhancementTemplate;