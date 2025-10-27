import { useScrollAnimation } from "../hooks/useScrollAnimation";
import ContactContent from "../ui/ContactContent";
import SectionHeader from "../ui/SectionHeader";

function Contact() {
  const elementRef = useScrollAnimation();

  return (
    <section
      id="contact"
      className="border-b-1 border-gray-500/20"
      ref={elementRef}
    >
      <div className="@container bg-gray-100 px-4 dark:bg-gray-800">
        <div className="mx-auto w-full py-20 @5xl:max-w-5xl">
          <SectionHeader part={4} title="Contact" />
          <ContactContent />
        </div>
      </div>
    </section>
  );
}

export default Contact;
