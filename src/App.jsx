import { useEffect, useState } from "react";
import { ThemeProvider } from "./theme.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Outcomes from "./components/Outcomes.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Education from "./components/Education.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const next = scrollable > 0 ? window.scrollY / scrollable : 0;
      setProgress(Math.min(1, Math.max(0, next)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="site">
        <div
          className="scroll-progress"
          style={{ transform: `scaleX(${progress})` }}
          aria-hidden="true"
        />
        <a className="skip" href="#content">
          Skip to content
        </a>
        <Header />
        <main id="content" tabIndex={-1}>
          <Hero />
          <Outcomes />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
