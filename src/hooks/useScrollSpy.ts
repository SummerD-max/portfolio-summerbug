import { useState, useEffect } from "react";

/**
 * 一个自定义 Hook，用于根据滚动位置确定哪个 section 在视口中处于活动状态。
 * @param sectionIds - 一个包含所有要监视的 section 元素 ID 的数组。
 * @param rootMargin - IntersectionObserver 的 rootMargin 选项，用于调整触发边界。
 *                     例如 "-20% 0px -80% 0px" 表示只有当 section 在视口垂直方向的中间 60% 区域时才被视为活动。
 */
export function useScrollspy(sectionIds: string[], rootMargin: string = "0px") {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin }, // 使用传入的 rootMargin
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    // 组件卸载时停止观察
    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [sectionIds, rootMargin]); // 当 sectionIds 或 rootMargin 变化时重新运行 effect

  return activeSection;
}
