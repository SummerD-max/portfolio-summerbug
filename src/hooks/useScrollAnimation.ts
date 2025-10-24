import { useEffect, useRef } from "react";

export function useScrollAnimation() {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // 1. 为元素添加初始状态
    element.classList.add(
      "opacity-0",
      "transition-all",
      "duration-1000", // 统一动画时长
      "mt-10",
    );

    // 2. 创建观察者
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // 3. 当元素进入视口时，移除初始状态，触发动画
          entry.target.classList.remove("opacity-0", "mt-10");
          entry.target.classList.add("opacity-100", "mt-0");
          // 4. 动画执行一次后，停止观察
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: "-70% 0px -30% 0px",
      },
    );

    observer.observe(element);

    // 5. 组件卸载时清理
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return elementRef;
}
