import { useEffect, useRef } from "react";
import { HiArrowDownRight } from "react-icons/hi2";
import ContactIcons from "./ContactIcons";
import LazyImage from "./LazyImage";

function HomeContent() {
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(function () {
    const imgEl = imageRef.current;
    if (!imgEl) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const realSrc = imgEl.getAttribute("data-src");
        if (!realSrc) return;

        // 创建一个临时 Image 对象来预加载
        const loader = new Image();

        loader.onload = function () {
          // ✅ 只有当真实图片加载成功后，才替换 src
          imgEl.src = realSrc;
          imgEl.removeAttribute("data-src");
        };

        loader.onerror = function () {
          console.error("Failed to load image:", realSrc);
          // 可选：加载失败时的处理，比如保持占位图或显示错误图
        };

        // 开始预加载真实图片
        loader.src = realSrc;

        observer.unobserve(entry.target);
      }
    });

    observer.observe(imgEl);
  }, []);

  useEffect(function () {
    const contentEl = contentRef.current;
    if (!contentEl) return;
    setTimeout(() => {
      contentEl.classList.remove("opacity-0", "mt-10");
      contentEl.classList.add("opacity-100", "mt-0");
    }, 100);
  }, []);

  return (
    <div
      className="mt-10 w-full max-w-6xl px-10 opacity-0 transition-all duration-1500"
      ref={contentRef}
    >
      <div className="grid grid-cols-1 items-center gap-x-50 gap-y-10 md:grid-cols-2">
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

        {/* lazy load img */}
        <div className="order-1 md:order-none">
          <LazyImage
            placeholder="/photo-placeholder.jpg"
            src="/photo.jpg"
            alt="photo"
            className="rounded-xl md:scale-120"
          />
        </div>
      </div>
    </div>
  );
}

export default HomeContent;
