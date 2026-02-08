import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-background/95 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Content */}
          <motion.div
            className="relative z-10 w-full max-w-6xl max-h-[90vh] overflow-y-auto mx-4 lg:mx-8"
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="fixed top-6 right-6 lg:top-8 lg:right-8 z-20 w-12 h-12 flex items-center justify-center hover:bg-secondary transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 p-4 lg:p-0">
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Details */}
              <div className="flex flex-col justify-center space-y-8 py-8">
                <div>
                  <p className="text-subtitle mb-4">{project.category}</p>
                  <h2 className="text-headline mb-2">{project.title}</h2>
                  <p className="text-caption">{project.year}</p>
                </div>

                <div className="gallery-divider" />

                <div>
                  <p className="text-body text-muted-foreground leading-relaxed">
                    {project.longDescription}
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-subtitle mb-1">Medium</p>
                    <p className="text-body text-muted-foreground">{project.medium}</p>
                  </div>
                  {project.dimensions && (
                    <div>
                      <p className="text-subtitle mb-1">Dimensions</p>
                      <p className="text-body text-muted-foreground">{project.dimensions}</p>
                    </div>
                  )}
                </div>

                <a
                  href="https://www.orlan.eu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-caption link-underline mt-4 hover:text-gallery-earth transition-colors w-fit"
                >
                  Visit ORLAN's Official Website
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
