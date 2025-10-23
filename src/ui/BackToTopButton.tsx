import { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 1. 监听整个窗口的滚动事件
    const toggleVisibility = () => {
      // 2. 如果页面滚动的距离大于 300px，就显示按钮
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    // 3. 组件卸载时，移除事件监听，防止内存泄漏
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // 平滑滚动到顶部的处理函数
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`fixed right-8 bottom-8 z-30 cursor-pointer transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      onClick={scrollToTop}
    >
      <FaArrowCircleUp
        size={48}
        className="rounded-full bg-white text-sky-700 transition-all duration-200 hover:shadow-lg active:scale-95"
      />
    </button>
  );
}

export default BackToTopButton;
