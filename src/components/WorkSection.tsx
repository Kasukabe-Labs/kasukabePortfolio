
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Suitcase App",
    subtitle: "Your travel is always with you",
    description: "A comprehensive travel companion app that helps users organize their trips, track expenses, and discover new destinations.",
    image: "/lovable-uploads/20f8b9c7-117c-4c69-a7a3-048f09a87544.png",
    tags: ["Mobile App", "Travel", "UI/UX"]
  },
  {
    title: "Analytics Dashboard",
    subtitle: "Data visualization platform",
    description: "Modern dashboard interface for complex data visualization with real-time analytics and reporting capabilities.",
    image: "/api/placeholder/600/400",
    tags: ["Web App", "Dashboard", "Analytics"]
  },
  {
    title: "E-commerce Platform",
    subtitle: "Next-gen shopping experience",
    description: "Streamlined e-commerce platform with advanced filtering, personalized recommendations, and seamless checkout.",
    image: "/api/placeholder/600/400",
    tags: ["E-commerce", "Web App", "Mobile"]
  },
  {
    title: "Banking App",
    subtitle: "Financial management made simple",
    description: "Intuitive banking application with advanced security features, expense tracking, and investment tools.",
    image: "/api/placeholder/600/400",
    tags: ["Fintech", "Mobile App", "Security"]
  }
];

const WorkSection = () => {
  return (
    <section id="work" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-left">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Work</h2>
          <p className="text-lg text-gray-400 max-w-2xl">
            We create digital experiences that push boundaries and tell stories. 
            Each project represents our commitment to innovation and excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
