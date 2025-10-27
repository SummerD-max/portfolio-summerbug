import {
  SiCss3,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import SectionHeader from "../ui/SectionHeader";
import SingleSkillCard from "../ui/SingleSkillCard";
import SkillsContainer from "../ui/SkillsContainer";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

function Skills() {
  const elementRef = useScrollAnimation();

  return (
    <section
      id="skills"
      className="border-b-1 border-gray-500/20"
      ref={elementRef}
    >
      <div className="@container px-4">
        <div className="mx-auto py-20 @5xl:max-w-5xl">
          <div>
            <SectionHeader part={2} title="Skills" />

            <div className="flex flex-col flex-wrap items-center justify-center gap-5 md:flex-row">
              <SkillsContainer>
                <SingleSkillCard
                  icon={<SiHtml5 size={48} className="text-orange-500" />}
                  skillName="HTML5"
                />
                <SingleSkillCard
                  icon={<SiCss3 size={48} className="text-blue-500" />}
                  skillName="CSS3"
                />
                <SingleSkillCard
                  icon={<SiJavascript size={48} className="text-yellow-400" />}
                  skillName="JavaScript"
                />
                <SingleSkillCard
                  icon={<SiTypescript size={48} className="text-blue-500" />}
                  skillName="TypeScript"
                />
              </SkillsContainer>

              <SkillsContainer>
                <SingleSkillCard
                  icon={<SiReact size={48} className="text-cyan-500" />}
                  skillName="React"
                />
                <SingleSkillCard
                  icon={
                    <img
                      src="React-Query-Icon.svg"
                      alt="React-Query-Icon"
                      className="h-12 w-12"
                    />
                  }
                  skillName="React Query"
                />

                <SingleSkillCard
                  icon={
                    <img src="Redux.svg" alt="Redux" className="h-12 w-12" />
                  }
                  skillName="Redux"
                />
              </SkillsContainer>

              <SkillsContainer>
                <SingleSkillCard
                  icon={<SiTailwindcss size={48} className="text-sky-400" />}
                  skillName="Tailwind CSS"
                />
                <SingleSkillCard
                  icon={
                    <img
                      src="styled-components.svg"
                      alt="Styled Components"
                      className="h-12 w-12"
                    />
                  }
                  skillName="Styled Components"
                />
              </SkillsContainer>

              <SkillsContainer>
                <SingleSkillCard
                  icon={<SiGit size={48} className="text-orange-500" />}
                  skillName="Git"
                />

                <SingleSkillCard
                  icon={<SiSupabase size={48} className="text-green-500" />}
                  skillName="Supabase"
                />
              </SkillsContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
