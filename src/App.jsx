import "./styles/global.css";

import Cursor from "./components/Cursor";
import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Cursor />
      <NavBar scrollTo={scrollTo} />
      <Hero scrollTo={scrollTo} />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer scrollTo={scrollTo} />
    </>
  );
}