import { HiOutlineSun } from "react-icons/hi";

function DesktopNav() {
  return (
    // 使用 hidden 和 md:flex 来控制可见性
    <div className="hidden items-center gap-7 md:flex">
      <ul className="flex items-center gap-7 p-2 text-lg">
        <li className="transition-colors duration-300 hover:text-cyan-600">
          <a href="#home">Home</a>
        </li>
        <li className="transition-colors duration-300 hover:text-cyan-600">
          <a href="#about">About</a>
        </li>
        <li className="transition-colors duration-300 hover:text-cyan-600">
          <a href="#skills">Skills</a>
        </li>
        <li className="transition-colors duration-300 hover:text-cyan-600">
          <a href="#projects">Projects</a>
        </li>
        <li className="transition-colors duration-300 hover:text-cyan-600">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="flex items-center gap-4">
        <button className="cursor-pointer rounded-full border-1 border-slate-300 bg-slate-100/60 p-2 text-stone-700 transition-all duration-300 hover:bg-gray-200 hover:text-stone-900">
          <span>
            <HiOutlineSun size={24} className="z-10" />
          </span>
        </button>
        <a
          href="#contact"
          className="rounded-full bg-cyan-700 px-4 py-2 text-slate-50 transition-colors hover:bg-cyan-600"
        >
          Say Hi
        </a>
      </div>
    </div>
  );
}

export default DesktopNav;
