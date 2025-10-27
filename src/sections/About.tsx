import SectionHeader from "../ui/SectionHeader";
import AboutContent from "../ui/AboutContent";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

function About() {
  const elementRef = useScrollAnimation();

  return (
    <section
      id="about"
      className="border-b-1 border-gray-500/20"
      ref={elementRef}
    >
      <div className="@container px-4">
        <div className="mx-auto w-full py-20 @5xl:max-w-5xl">
          <div className="">
            <SectionHeader part={1} title="My Story" />
            <AboutContent />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
