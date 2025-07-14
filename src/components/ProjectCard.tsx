
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
}

const ProjectCard = ({ title, subtitle, description, image, tags }: ProjectCardProps) => {
  return (
    <div className="group cursor-pointer">
      <div className="bg-gray-900 rounded-2xl p-6 mb-6 hover:bg-gray-800 transition-all duration-300">
        <div className="aspect-[4/3] bg-gray-700 rounded-xl mb-4 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover rounded-xl opacity-80 group-hover:opacity-100 transition-opacity duration-300"
          />
        </div>
        
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <ArrowUpRight size={20} className="text-gray-400 group-hover:text-white transition-colors" />
        </div>
        
        <p className="text-sm text-gray-400 mb-3">{subtitle}</p>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="text-xs px-3 py-1 bg-gray-800 text-gray-300 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <p className="text-sm text-gray-400 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default ProjectCard;
