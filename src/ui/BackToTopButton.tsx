import { useNavTopContext } from "../contexts/NavTopContext";
import { PiRocketDuotone } from "react-icons/pi";

function BackToTopButton() {
  const { isTop } = useNavTopContext();

  // 平滑滚动到顶部的处理函数
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`fixed z-30 cursor-pointer transition-all duration-500 ${
        !isTop
          ? "right-8 bottom-8 opacity-100"
          : "pointer-events-none right-8 -bottom-10 opacity-0"
      }`}
      onClick={scrollToTop}
    >
      <PiRocketDuotone
        size={48}
        className="rounded-full bg-sky-700 p-2 text-sky-50 transition-all duration-200 hover:shadow-lg active:scale-95"
      />
    </button>
  );
}

export default BackToTopButton;
