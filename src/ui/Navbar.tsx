import { useEffect, useRef, useState } from "react";
import { HiOutlineSun } from "react-icons/hi";
import { useNavIsTop } from "../hooks/useNavIsTop";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

function Navbar() {
  const { isTop, observeRef } = useNavIsTop();

  const styleStr = isTop
    ? "bg-transparent text-slate-50"
    : "bg-slate-50/50 text-stone-700 shadow-md backdrop-blur-md";

  return (
    <>
      <div className="h-0" ref={observeRef}></div>
      <nav className={`fixed top-2 z-20 w-full px-4 py-2`}>
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between rounded-full ${styleStr} px-6 py-1 transition-all duration-500`}
        >
          {/* Logo - 在所有屏幕上都可见 */}
          <div className="text-3xl font-bold opacity-50 select-none">S.B</div>

          <DesktopNav />

          <MobileNav />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
