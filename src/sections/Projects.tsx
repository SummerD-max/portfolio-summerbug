import { useScrollAnimation } from "../hooks/useScrollAnimation";
import ProjectsContent from "../ui/ProjectsContent";
import SectionHeader from "../ui/SectionHeader";

function Projects() {
  const elementRef = useScrollAnimation();

  return (
    <section
      id="projects"
      className="border-b-1 border-gray-500/20"
      ref={elementRef}
    >
      <div className="@container px-4">
        <div className="mx-auto w-full py-20 @5xl:max-w-5xl">
          <SectionHeader part={3} title="Projects" />
          <ProjectsContent />
        </div>
      </div>
    </section>
  );
}

export default Projects;
