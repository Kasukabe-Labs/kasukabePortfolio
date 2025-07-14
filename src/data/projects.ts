
export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  category: string;
  year: string;
  client?: string;
  duration?: string;
  role: string;
  challenge: string;
  solution: string;
  results: string[];
  images: string[];
  technologies: string[];
}

export const projects: Project[] = [
  {
    id: "suitcase-app",
    title: "Suitcase App",
    subtitle: "Your travel is always with you",
    description: "A comprehensive travel companion app that helps users organize their trips, track expenses, and discover new destinations.",
    longDescription: "The Suitcase App revolutionizes how travelers plan and manage their journeys. By combining intelligent itinerary planning with real-time expense tracking and personalized destination recommendations, we created a seamless travel experience that adapts to each user's preferences and travel style.",
    image: "/lovable-uploads/20f8b9c7-117c-4c69-a7a3-048f09a87544.png",
    tags: ["Mobile App", "Travel", "UI/UX"],
    category: "Mobile Application",
    year: "2024",
    client: "TravelTech Inc.",
    duration: "4 months",
    role: "Lead Product Designer",
    challenge: "Travelers struggle with fragmented planning tools and lack of real-time assistance during their trips. Existing solutions are either too complex or too simplistic, failing to provide the right balance of functionality and ease of use.",
    solution: "We designed an intuitive mobile app that consolidates all travel needs into one platform. The app features smart itinerary creation, expense tracking with receipt scanning, offline maps, and AI-powered recommendations based on user preferences and behavior patterns.",
    results: [
      "40% increase in user engagement compared to competitor apps",
      "4.8/5 average rating on app stores",
      "Featured as 'App of the Month' by travel publications",
      "50,000+ downloads in first quarter"
    ],
    images: [
      "/lovable-uploads/20f8b9c7-117c-4c69-a7a3-048f09a87544.png",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600"
    ],
    technologies: ["React Native", "Node.js", "MongoDB", "Google Maps API", "Firebase"]
  },
  {
    id: "analytics-dashboard",
    title: "Analytics Dashboard",
    subtitle: "Data visualization platform",
    description: "Modern dashboard interface for complex data visualization with real-time analytics and reporting capabilities.",
    longDescription: "A sophisticated analytics platform that transforms complex datasets into actionable insights through intuitive visualizations and real-time monitoring capabilities.",
    image: "/api/placeholder/600/400",
    tags: ["Web App", "Dashboard", "Analytics"],
    category: "Web Application",
    year: "2024",
    client: "DataCorp Analytics",
    duration: "6 months",
    role: "Senior UI/UX Designer",
    challenge: "Enterprise clients needed a way to visualize complex data patterns and make informed decisions quickly. Existing tools were either too technical for business users or too simplified for data analysts.",
    solution: "We created a modular dashboard system with customizable widgets, real-time data streaming, and intuitive drill-down capabilities. The interface adapts to different user roles and expertise levels.",
    results: [
      "60% reduction in time-to-insight for business users",
      "Deployed across 200+ enterprise clients",
      "99.9% uptime achieved",
      "25% increase in data-driven decision making"
    ],
    images: [
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600"
    ],
    technologies: ["React", "D3.js", "WebSocket", "PostgreSQL", "Redis"]
  },
  {
    id: "ecommerce-platform",
    title: "E-commerce Platform",
    subtitle: "Next-gen shopping experience",
    description: "Streamlined e-commerce platform with advanced filtering, personalized recommendations, and seamless checkout.",
    longDescription: "A comprehensive e-commerce solution that combines modern design principles with powerful functionality to create engaging shopping experiences that drive conversions.",
    image: "/api/placeholder/600/400",
    tags: ["E-commerce", "Web App", "Mobile"],
    category: "E-commerce Platform",
    year: "2023",
    client: "RetailMax Solutions",
    duration: "8 months",
    role: "Product Design Lead",
    challenge: "Traditional e-commerce platforms suffer from high cart abandonment rates and poor mobile experiences. Users need personalized shopping experiences that work seamlessly across all devices.",
    solution: "We designed a responsive platform with AI-powered recommendations, one-click checkout, advanced search and filtering, and social shopping features. The design emphasizes visual product discovery and frictionless purchasing.",
    results: [
      "35% reduction in cart abandonment rate",
      "Mobile conversion rates increased by 45%",
      "Average order value increased by 28%",
      "Customer satisfaction score: 4.7/5"
    ],
    images: [
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600"
    ],
    technologies: ["Next.js", "Shopify", "Stripe", "Algolia", "Contentful"]
  },
  {
    id: "banking-app",
    title: "Banking App",
    subtitle: "Financial management made simple",
    description: "Intuitive banking application with advanced security features, expense tracking, and investment tools.",
    longDescription: "A secure and user-friendly banking application that simplifies financial management through intelligent automation and comprehensive security measures.",
    image: "/api/placeholder/600/400",
    tags: ["Fintech", "Mobile App", "Security"],
    category: "Financial Technology",
    year: "2023",
    client: "SecureBank Digital",
    duration: "10 months",
    role: "Lead UX Designer",
    challenge: "Traditional banking apps are often complex and intimidating for users. Security requirements must be balanced with usability, and financial data needs to be presented in an understandable way.",
    solution: "We created an intuitive interface with biometric authentication, smart categorization of expenses, investment recommendations, and clear financial insights. The design prioritizes trust and transparency while maintaining ease of use.",
    results: [
      "80% of users adopted mobile-first banking",
      "Customer support calls reduced by 50%",
      "Security incidents reduced to near zero",
      "Net Promoter Score increased to 72"
    ],
    images: [
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600"
    ],
    technologies: ["React Native", "Node.js", "PostgreSQL", "AWS", "Plaid API"]
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};
