import {
  createContext,
  useContext,
  useEffect,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";

type ContextType = {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
};

const DarkContext = createContext<ContextType | undefined>(undefined);

type DarkModeContextProps = {
  children: ReactNode;
};

function DarkModeContext({ children }: DarkModeContextProps) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(
    function () {
      const html = document.documentElement;
      if (darkMode) html.classList.add("dark");
      else html.classList.remove("dark");
    },
    [darkMode],
  );

  return (
    <DarkContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkContext.Provider>
  );
}

export function useDarkModeContext() {
  const context = useContext(DarkContext);
  if (!context) {
    throw new Error(
      "useDarkModeContext must be used within a DarkModeContextProvider",
    );
  }
  return context;
}

export default DarkModeContext;
