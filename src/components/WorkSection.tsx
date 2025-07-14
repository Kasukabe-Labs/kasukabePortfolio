import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

const WorkSection = () => {
  return (
    <section id="work" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-left">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 ">Work</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            We create digital experiences that push boundaries and tell stories.
            Each project represents our commitment to innovation and excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
