import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <a className="skip" href="#content">
        Skip to content
      </a>
      <Header />
      <main id="content" tabIndex={-1}>
        <Hero />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
