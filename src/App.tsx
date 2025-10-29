import About from "./sections/About";
import Contact from "./sections/Contact";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Navbar from "./ui/Navbar";
import BackToTopButton from "./ui/BackToTopButton";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router";
import DarkModeContext from "./contexts/DarkModeContext";
import NavTopContext from "./contexts/NavTopContext";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <DarkModeContext>
        <NavTopContext>
          <BrowserRouter>
            <div className="bg-sky-100 transition-colors duration-200 dark:bg-slate-800 dark:text-slate-50">
              <Navbar />
              <Home />
              <About />
              <Skills />
              <Projects />
              <Contact />
              <BackToTopButton />
            </div>
          </BrowserRouter>
          <Toaster />
        </NavTopContext>
      </DarkModeContext>
    </QueryClientProvider>
  );
}

export default App;
