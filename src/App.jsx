import "./styles/global.css";

import { lazy, Suspense, useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Loader from "./components/Loader";
import Cursor from "./components/Cursor";
import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

// project pages load only when someone opens one
const CaseStudy = lazy(() => import("./components/CaseStudy"));

function HomePage({ scrollTo }) {
  const { state } = useLocation();

  // coming back from a project page → land on the Projects section
  useEffect(() => {
    if (state?.scrollTo) {
      requestAnimationFrame(() => document.getElementById(state.scrollTo)?.scrollIntoView());
    }
  }, [state]);

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
        <Suspense fallback={null}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage scrollTo={scrollTo} />} />
            <Route path="/projects/:slug" element={<CaseStudy />} />
          </Routes>
        </Suspense>
      )}
    </>
  );
}