import { useEffect, useRef, useState } from "react";

type LazyImageProps = {
  src: string;
  placeholder: string;
  alt: string;
  className?: string;
};

function LazyImage({ src, placeholder, alt, className }: LazyImageProps) {
  const imageRef = useRef<HTMLImageElement>(null);
  const [status, setStatus] = useState("loading");

  useEffect(
    function () {
      const imageEl = imageRef.current;
      if (!imageEl) return;

      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          imageEl.src = src;
          imageEl.onload = () => {
            setStatus("loaded");
          };
        }
      });

      observer.observe(imageEl);
    },
    [src],
  );

  return (
    <>
      <img
        ref={imageRef}
        src={placeholder}
        alt={alt}
        className={`${className} ${status === "loading" ? "blur-2xl" : "translate-0 blur-none"} transition-all duration-300`}
      />
    </>
  );
}

export default LazyImage;
