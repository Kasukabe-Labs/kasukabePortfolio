
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Calendar, User, Clock } from "lucide-react";
import { getProjectById } from "@/data/projects";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? getProjectById(id) : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <div className="pt-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-left">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <Link to="/" className="text-primary hover:underline">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            Back to Projects
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">{project.title}</h1>
              <p className="text-xl text-primary mb-6">{project.subtitle}</p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {project.longDescription}
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar size={16} />
                    Year
                  </div>
                  <div className="font-medium">{project.year}</div>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <User size={16} />
                    Role
                  </div>
                  <div className="font-medium">{project.role}</div>
                </div>
                {project.client && (
                  <div>
                    <div className="text-sm text-muted-foreground mb-2">Client</div>
                    <div className="font-medium">{project.client}</div>
                  </div>
                )}
                {project.duration && (
                  <div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Clock size={16} />
                      Duration
                    </div>
                    <div className="font-medium">{project.duration}</div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="lg:order-first">
              <div className="aspect-[4/3] bg-muted rounded-2xl overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Challenge */}
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-4 text-primary">Challenge</h3>
              <p className="text-muted-foreground leading-relaxed">
                {project.challenge}
              </p>
            </div>
            
            {/* Solution */}
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-4 text-primary">Solution</h3>
              <p className="text-muted-foreground leading-relaxed">
                {project.solution}
              </p>
            </div>
            
            {/* Results */}
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-4 text-primary">Results</h3>
              <ul className="space-y-2">
                {project.results.map((result, index) => (
                  <li key={index} className="text-muted-foreground leading-relaxed">
                    • {result}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-7xl mx-auto text-left">
          <h3 className="text-3xl font-bold mb-8">Technologies Used</h3>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-left">
          <h3 className="text-3xl font-bold mb-8">Project Gallery</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.images.map((image, index) => (
              <div key={index} className="aspect-[4/3] bg-muted rounded-xl overflow-hidden">
                <img 
                  src={image} 
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-7xl mx-auto text-left">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-lg font-medium text-primary hover:underline"
          >
            View All Projects
            <ExternalLink size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
