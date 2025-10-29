import { createContext, useContext, useEffect, useRef, useState } from "react";

type NavTopContextType = {
  isTop: boolean;
  navElementRef: React.RefObject<HTMLDivElement | null>;
};

const Context = createContext<NavTopContextType | undefined>(undefined);

type NavTopContextProps = {
  children: React.ReactNode;
};

function NavTopContext({ children }: NavTopContextProps) {
  const [isTop, setIsTop] = useState(true);
  const navElementRef = useRef<HTMLDivElement>(null);

  useEffect(function () {
    const divEl = navElementRef.current;
    if (!divEl) return;
    const observer = new IntersectionObserver(([entry]) => {
      setIsTop(entry.isIntersecting);
    });

    observer.observe(divEl);

    return () => {
      observer.unobserve(divEl);
    };
  }, []);

  return (
    <Context.Provider value={{ isTop, navElementRef }}>
      {children}
    </Context.Provider>
  );
}

export function useNavTopContext() {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error("useNavTopContext must be used within a NavTopContext");
  }
  return context;
}

export default NavTopContext;
