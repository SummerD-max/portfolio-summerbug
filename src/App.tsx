import { useEffect } from "react";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Navbar from "./ui/Navbar";
import BackToTopButton from "./ui/BackToTopButton";

function App() {
  return (
    <div className="bg-sky-100">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <BackToTopButton />
    </div>
  );
}

export default App;
