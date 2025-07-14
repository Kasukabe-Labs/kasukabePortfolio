
const showcaseProjects = [
  {
    title: "Mobile Banking App",
    category: "Fintech",
    description: "Secure and intuitive banking experience with advanced features"
  },
  {
    title: "Travel Companion",
    category: "Travel Tech",
    description: "Your perfect travel partner for planning and exploration"
  },
  {
    title: "Analytics Platform",
    category: "Data Visualization",
    description: "Complex data made simple through intelligent design"
  },
  {
    title: "E-commerce Solution",
    category: "Retail",
    description: "Next-generation shopping experience across all devices"
  },
  {
    title: "Healthcare Dashboard",
    category: "Healthcare",
    description: "Patient care management system with real-time insights"
  },
  {
    title: "Educational Platform",
    category: "EdTech",
    description: "Interactive learning experience for modern education"
  }
];

const ProjectShowcase = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-left mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Selected Projects</h2>
          <p className="text-lg text-gray-400 max-w-2xl">
            A showcase of our recent work across various industries and platforms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {showcaseProjects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-500 transition-all duration-300">
                <div className="aspect-[4/3] bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-left">
                    <div className="w-16 h-16 bg-gray-600 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <div className="w-8 h-8 bg-white rounded"></div>
                    </div>
                    <span className="text-xs text-gray-400">{project.category}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-gray-300 transition-colors text-left">
                  {project.title}
                </h3>
                
                <p className="text-sm text-gray-400 leading-relaxed text-left">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
