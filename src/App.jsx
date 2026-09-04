import "./styles/global.css";

import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Loader from "./components/Loader";
import Cursor from "./components/Cursor";
import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ColourBlind from "./components/ColourBlind";

function HomePage({ scrollTo }) {
  return (
    <div className="page-fade">
      <NavBar scrollTo={scrollTo} />
      <Hero scrollTo={scrollTo} />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer scrollTo={scrollTo} />
    </div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {loading && <Loader onDone={() => setLoading(false)} />}
      <Cursor />
      {!loading && (
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage scrollTo={scrollTo} />} />
          <Route path="/projects/colour-blind" element={<ColourBlind />} />
        </Routes>
      )}
    </>
  );
}