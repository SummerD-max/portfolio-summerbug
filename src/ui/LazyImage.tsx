import { useEffect, useRef, useState } from "react";

type LazyImageProps = {
  src: string;
  placeholder: string;
  alt: string;
  className?: string;
};

function LazyImage({ src, placeholder, className }: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(
    function () {
      const imageEl = imageRef.current;
      if (!imageEl) return;
      const img = new Image();
      img.onload = () => {
        setIsLoaded(true);
      };
      img.src = src;
    },
    [src],
  );

  return (
    <>
      <img
        ref={imageRef}
        src={isLoaded ? src : placeholder}
        alt={isLoaded ? "image" : "placeholder"}
        className={className}
      />
    </>
  );
}

export default LazyImage;
