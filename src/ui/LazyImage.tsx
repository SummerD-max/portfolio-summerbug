import { useEffect, useRef, useState } from "react";

type LazyImageProps = {
  src: string;
  placeholder: string;
  alt: string;
  className?: string;
};

function LazyImage({ src, placeholder, alt, className }: LazyImageProps) {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(
    function () {
      const imageEl = imageRef.current;
      if (!imageEl) return;

      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          const img = new Image();
          img.onload = () => {
            imageEl.src = src;
          };
          img.src = src;
        }
      });

      observer.observe(imageEl);
    },
    [src],
  );

  return (
    <>
      <img ref={imageRef} src={placeholder} alt={alt} className={className} />
    </>
  );
}

export default LazyImage;
