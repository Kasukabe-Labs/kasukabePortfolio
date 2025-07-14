import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
}

const ProjectCard = ({
  id,
  title,
  subtitle,
  description,
  image,
  tags,
}: ProjectCardProps) => {
  return (
    <Link to={`/project/${id}`} className="group cursor-pointer block">
      <div className="bg-card rounded-2xl p-6 mb-6 hover:bg-muted/20 transition-all duration-300 border border-border hover:border-primary/20">
        <div className="aspect-[4/3] bg-muted rounded-xl mb-4 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-xl opacity-80 group-hover:opacity-100 transition-opacity duration-300"
          />
        </div>

        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-semibold text-foreground ">{title}</h3>
          <ArrowUpRight
            size={20}
            className="text-muted-foreground group-hover:text-primary transition-colors"
          />
        </div>

        <p className="text-sm text-primary mb-3 font-medium">{subtitle}</p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs px-3 py-1 bg-muted text-muted-foreground rounded-full border border-border"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </Link>
  );
};

export default ProjectCard;
