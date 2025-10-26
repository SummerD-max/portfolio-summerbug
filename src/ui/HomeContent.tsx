import { useEffect, useRef } from "react";
import { HiArrowDownRight } from "react-icons/hi2";
import ContactIcons from "./ContactIcons";

function HomeContent() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(function () {
    const contentEl = contentRef.current;
    if (!contentEl) return;

    setTimeout(() => {
      contentEl.classList.remove("opacity-0");
      contentEl.classList.add("opacity-100");
    }, 100);
  }, []);

  return (
    <div
      className="w-full max-w-5xl px-2 opacity-0 transition-all duration-1500 md:mt-0"
      ref={contentRef}
    >
      <div className="grid grid-cols-1 items-center justify-items-center gap-x-50 gap-y-10 md:grid-cols-2">
        <div className="order-2 md:order-none">
          <p className="text-base">Hi,</p>
          <p className="text-5xl/20 font-semibold">I'm Summerbug</p>
          <p className="text-gray-400">Front-end developer</p>
          <p className="mt-7">
            I build beautiful and functional web applications.
          </p>

          <ContactIcons />

          <a
            className="group mt-10 flex w-fit cursor-pointer items-center gap-4 rounded-full bg-cyan-700 px-6 py-3 text-white transition-all duration-300 hover:bg-cyan-800"
            href="#about"
          >
            <span>About me</span>
            <span className="transition-all group-hover:translate-1">
              <HiArrowDownRight />
            </span>
          </a>
        </div>

        <div className="order-1 md:order-none">
          <div className="relative max-w-96 md:ml-auto">
            <img
              loading="lazy"
              src="/photo.jpg"
              alt="photo"
              className="relative z-10 rounded-2xl"
            />
            <div className="absolute -top-1 -left-1 h-24 w-24 rounded-lg bg-sky-600"></div>
            <div className="absolute -top-1 -right-1 h-24 w-24 rounded-lg bg-purple-600"></div>
            <div className="absolute -bottom-1 -left-1 h-24 w-24 rounded-lg bg-yellow-600"></div>
            <div className="absolute -right-1 -bottom-1 h-24 w-24 rounded-lg bg-green-600"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeContent;
