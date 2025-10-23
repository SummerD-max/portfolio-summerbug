import { useEffect, useRef, useState } from "react";

export function useNavIsTop() {
  const [isTop, setIsTop] = useState(true);
  const observeRef = useRef<HTMLDivElement>(null);
  useEffect(function () {
    const divEl = observeRef.current;
    if (!divEl) return;
    const observer = new IntersectionObserver(([entry]) => {
      setIsTop(entry.isIntersecting);
    });

    observer.observe(divEl);

    return () => {
      observer.unobserve(divEl);
    };
  }, []);

  return { isTop, observeRef };
}
