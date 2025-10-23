import { FiGithub } from "react-icons/fi";
import { IoLogoWechat } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import Popup from "./Popup";
import { useRef, useState } from "react";

function ContactIcons() {
  const [isCopied, setIsCopied] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const handleCopyWechat = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    navigator.clipboard.writeText("wdj862677188");
    setIsCopied(true);
    timeoutRef.current = window.setTimeout(() => setIsCopied(false), 1500);
  };

  return (
    <div className="mt-12 flex">
      <div className="flex items-center gap-2 rounded-full bg-cyan-700 px-4 py-2">
        <a
          href="https://github.com/SummerD-max"
          target="_blank"
          className="rounded-full bg-gray-100 p-2 text-cyan-800 transition-all duration-300 hover:scale-110 hover:bg-cyan-600"
        >
          <FiGithub />
        </a>

        <a
          href="mailto:862677188@qq.com"
          target="_blank"
          className="rounded-full bg-gray-100 p-2 text-cyan-800 transition-all duration-300 hover:scale-110 hover:bg-cyan-600"
        >
          <MdOutlineEmail />
        </a>

        <div className="hidden md:block">
          <Popup>
            <Popup.ToggleButton>
              <div className="cursor-pointer rounded-full bg-gray-100 p-2 text-cyan-800 transition-all duration-300 hover:scale-110 hover:bg-cyan-600">
                <IoLogoWechat />
              </div>
            </Popup.ToggleButton>
            <Popup.Content>
              <img src="/wechat.jpg" className="" />
            </Popup.Content>
          </Popup>
        </div>

        <div className="md:hidden" onClick={handleCopyWechat}>
          <div className="cursor-pointer rounded-full bg-gray-100 p-2 text-cyan-800 transition-all duration-300 hover:scale-110 hover:bg-cyan-600">
            <IoLogoWechat />
          </div>
        </div>

        <div
          className={`fixed top-10 left-1/2 z-50 -translate-x-1/2 ${isCopied ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"} transition-all duration-300`}
        >
          <span className="w-48 rounded-2xl bg-gray-100 px-3 py-1 font-semibold text-cyan-800">
            Copied WeChat ID!
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactIcons;
