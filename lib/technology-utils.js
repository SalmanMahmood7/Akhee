// Utility functions for technology pages

export function generateTechnologySlug(technologyName) {
  return technologyName
    .toLowerCase()
    .replace(/[&\s]+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/--+/g, '-')
    .replace(/^-|-$/g, '');
}

export function getTechnologyUrl(technologyName) {
  const slug = getTechnologySlugFromName(technologyName);
  return `/technology/${slug}`;
}

// Technology mapping for service pages
export const TECHNOLOGY_MAPPINGS = {
  // Digital Advisory Technologies
  "Digital Strategy Tools": "digital-strategy-tools",
  "Analytics & BI Platforms": "analytics-bi-platforms", 
  "Cloud Infrastructure": "cloud-infrastructure",
  "Process Automation": "process-automation",
  "Digital Security": "digital-security",
  "Collaboration Platforms": "collaboration-platforms",
  "AI & Machine Learning": "ai-machine-learning",
  "Digital Experience": "digital-experience",

  // Applied Data Analytics Technologies
  "Advanced Analytics": "advanced-analytics",
  "Machine Learning Platforms": "machine-learning-platforms",
  "Big Data Processing": "big-data-processing",
  "Real-time Analytics": "real-time-analytics",
  "Data Visualization": "data-visualization",
  "Predictive Analytics": "predictive-analytics",
  "AWS & Azure ML": "aws-azure-ml",
  "Python & R": "python-r",
  "TensorFlow & PyTorch": "tensorflow-pytorch",
  "Apache Spark & Kafka": "apache-spark-kafka",
  "Tableau & Power BI": "tableau-power-bi",
  "Elasticsearch & MongoDB": "elasticsearch-mongodb",
  "Jupyter & Apache Airflow": "jupyter-apache-airflow",

  // AI Smart Solutions Technologies
  "TensorFlow": "tensorflow",
  "PyTorch": "pytorch",
  "Microsoft Azure AI": "microsoft-azure-ai",
  "Google Cloud AI": "google-cloud-ai",
  "Amazon Web Services AI": "aws-ai",
  "OpenAI GPT": "openai-gpt",

  // Cloud Services Technologies
  "Microsoft Azure": "microsoft-azure",
  "Amazon Web Services": "amazon-web-services",
  "Google Cloud Platform": "google-cloud-platform",
  "Docker": "docker",
  "Kubernetes": "kubernetes",
  "Serverless Computing": "serverless-computing",

  // Application Development Technologies
  "React": "react",
  "Angular": "angular",
  "Vue.js": "vuejs",
  "Node.js": "nodejs",
  "Python": "python",
  ".NET": "dotnet",
  "Java": "java",
  "SQL Server": "sql-server",
  "React & Next.js": "react-nextjs",
  "Node.js & Python": "nodejs-python", 
  "PostgreSQL & MongoDB": "postgresql-mongodb",
  "AWS & Azure": "amazon-web-services", // Redirect to existing AWS page
  "Docker & Kubernetes": "cloud-infrastructure", // Redirect to cloud infrastructure 
  "React Native & Flutter": "react-native-flutter", // This one exists
  "AI/ML Integration": "ai-machine-learning", // Redirect to existing AI/ML page
  "Blockchain": "blockchain", // This one exists

  // Cyber Security Technologies
  "SIEM Platforms": "siem-platforms",
  "Endpoint Protection": "endpoint-protection",
  "Network Security": "network-security",
  "Identity Management": "identity-management",
  "Vulnerability Assessment": "vulnerability-assessment",
  "Threat Intelligence": "threat-intelligence",

  // Digital Platforms Technologies
  "Dynamics 365": "dynamics-365",
  "Salesforce": "salesforce",
  "SharePoint": "sharepoint",
  "WordPress": "wordpress",
  "Drupal": "drupal",
  "Magento": "magento",

  // Managed IT Services Technologies
  "Microsoft System Center": "microsoft-system-center",
  "VMware": "vmware",
  "Cisco": "cisco",
  "Fortinet": "fortinet",
  "Acronis": "acronis",
  "Veeam": "veeam"
};

export function getTechnologySlugFromName(technologyName) {
  // First check if we have a predefined mapping
  if (TECHNOLOGY_MAPPINGS[technologyName]) {
    return TECHNOLOGY_MAPPINGS[technologyName];
  }
  
  // Otherwise generate from name
  return generateTechnologySlug(technologyName);
}