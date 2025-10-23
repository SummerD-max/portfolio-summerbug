import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

function MobileNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 点击链接后关闭菜单
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    // 使用 md:hidden 来控制可见性
    <div className="md:hidden">
      {/* 汉堡菜单按钮 */}
      <div
        className="cursor-pointer"
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        {isMenuOpen ? <HiX size={30} /> : <HiMenu size={30} />}
      </div>

      {/* 菜单面板 */}

      <div
        className={`${isMenuOpen ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-10 opacity-0"} absolute right-0 left-0 mx-4 mt-2 rounded-xl bg-white/80 p-6 text-center text-stone-700 shadow-lg backdrop-blur-lg transition-all`}
      >
        <ul className="flex flex-col items-center gap-6 text-xl">
          <li className="transition-colors duration-300 hover:text-cyan-600">
            <a href="#home" onClick={handleLinkClick}>
              Home
            </a>
          </li>
          <li className="transition-colors duration-300 hover:text-cyan-600">
            <a href="#about" onClick={handleLinkClick}>
              About
            </a>
          </li>
          <li className="transition-colors duration-300 hover:text-cyan-600">
            <a href="#skills" onClick={handleLinkClick}>
              Skills
            </a>
          </li>
          <li className="transition-colors duration-300 hover:text-cyan-600">
            <a href="#projects" onClick={handleLinkClick}>
              Projects
            </a>
          </li>
          <li className="transition-colors duration-300 hover:text-cyan-600">
            <a href="#contact" onClick={handleLinkClick}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MobileNav;
