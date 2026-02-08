import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  onSelect: (project: Project) => void;
}

export const ProjectCard = ({ project, index, onSelect }: ProjectCardProps) => {
  const isEven = index % 2 === 0;

  return (
    <motion.article
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
        isEven ? "" : "lg:flex-row-reverse"
      }`}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: 0.1 }}
    >
      <div className={`${isEven ? "" : "lg:order-2"}`}>
        <div 
          className="gallery-card cursor-pointer group aspect-[4/3] lg:aspect-[3/2] overflow-hidden"
          onClick={() => onSelect(project)}
        >
          <img
            src={project.image}
            alt={project.title}
            className="gallery-card-image"
          />
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-500" />
        </div>
      </div>

      <div className={`${isEven ? "" : "lg:order-1"} space-y-6`}>
        <div className="flex items-center gap-4">
          <span className="text-subtitle">{project.category}</span>
          <span className="text-caption">—</span>
          <span className="text-caption">{project.year}</span>
        </div>

        <h2 
          className="text-title cursor-pointer hover:text-gallery-earth transition-colors duration-300"
          onClick={() => onSelect(project)}
        >
          {project.title}
        </h2>

        <p className="text-body text-muted-foreground">
          {project.description}
        </p>

        <button
          onClick={() => onSelect(project)}
          className="text-caption link-underline mt-4 hover:text-gallery-earth transition-colors"
        >
          View Details
        </button>
      </div>
    </motion.article>
  );
};
