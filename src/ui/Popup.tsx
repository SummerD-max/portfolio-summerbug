import { createContext, useContext, useRef, useState } from "react";

type PopupContextType = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const PopupContext = createContext<PopupContextType | undefined>(undefined);

function Popup({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const timerRef = useRef<number | null>(null);

  function handleMouseLeave() {
    timerRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200);
  }

  function handleMouseEnter() {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setIsOpen(true);
  }

  return (
    <PopupContext.Provider value={{ isOpen, setIsOpen }}>
      {/* 1. 将事件处理程序移到这个父级 div 上 */}
      <div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>
    </PopupContext.Provider>
  );
}

type ToggleButtonProps = {
  children: React.ReactNode;
};

function ToggleButton({ children }: ToggleButtonProps) {
  // 2. ToggleButton 不再需要任何事件处理
  return <div className="block">{children}</div>;
}

function PopupContent({ children }: { children: React.ReactNode }) {
  const context = useContext(PopupContext);
  if (!context) {
    throw new Error("PopupContent must be used within a Popup");
  }
  const { isOpen } = context;

  // 3. PopupContent 也不再需要事件处理
  return (
    <div
      className={`absolute -top-48 left-10 z-10 w-80 rounded-md bg-white p-4 shadow-lg ${
        isOpen
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-2 opacity-0"
      } text-black transition-all duration-300`}
    >
      {children}
    </div>
  );
}

Popup.ToggleButton = ToggleButton;
Popup.Content = PopupContent;
export default Popup;
