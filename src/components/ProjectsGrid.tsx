import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { natureProjects, type Project } from "@/data/projects";

export const ProjectsGrid = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 lg:mb-24">
          <div className="gallery-divider mb-8" />
          <div className="flex items-end justify-between">
            <h2 className="text-headline">Selected Works</h2>
            <span className="text-caption hidden sm:block">
              {natureProjects.length} Projects
            </span>
          </div>
        </div>

        {/* Projects */}
        <div className="space-y-24 lg:space-y-34">
          {natureProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onSelect={setSelectedProject}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
