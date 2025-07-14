
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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Selected Projects</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A showcase of our recent work across various industries and platforms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {showcaseProjects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-gradient-to-br from-purple-900/10 to-blue-900/10 rounded-xl p-6 border border-gray-800 hover:border-purple-500/50 transition-all duration-300">
                <div className="aspect-[4/3] bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/10 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-blue-400 rounded"></div>
                    </div>
                    <span className="text-xs text-gray-400">{project.category}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-sm text-gray-400 leading-relaxed">
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
