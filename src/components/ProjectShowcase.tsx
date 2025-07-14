const showcaseProjects = [
  {
    title: "Mobile Banking App",
    category: "Fintech",
    description:
      "Secure and intuitive banking experience with advanced features",
  },
  {
    title: "Travel Companion",
    category: "Travel Tech",
    description: "Your perfect travel partner for planning and exploration",
  },
  {
    title: "Analytics Platform",
    category: "Data Visualization",
    description: "Complex data made simple through intelligent design",
  },
  {
    title: "E-commerce Solution",
    category: "Retail",
    description: "Next-generation shopping experience across all devices",
  },
  {
    title: "Healthcare Dashboard",
    category: "Healthcare",
    description: "Patient care management system with real-time insights",
  },
  {
    title: "Educational Platform",
    category: "EdTech",
    description: "Interactive learning experience for modern education",
  },
];

const ProjectShowcase = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-left mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 ">
            Selected Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A showcase of our recent work across various industries and
            platforms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {showcaseProjects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300">
                <div className="aspect-[4/3] bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-left">
                    <div className="w-16 h-16 bg-primary/20 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <div className="w-8 h-8 bg-primary rounded"></div>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {project.category}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors text-left ">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed text-left">
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
