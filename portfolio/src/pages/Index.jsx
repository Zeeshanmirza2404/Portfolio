import { useEffect } from "react";
import Navigation from "../component/layout/Navigation.jsx";
import HeroSection from "../component/sections/HeroSection.jsx";
import AboutSection from "../component/sections/AboutSection.jsx";
import ProjectSection from "../component/sections/ProjectSection.jsx";
import SkillSection from "../component/sections/SkillSection.jsx";
import NextSection from "../component/sections/NextSection.jsx";
import ContactSection from "../component/sections/ContactSection.jsx";
import Footer from "../component/layout/Footer.jsx";

const Index = () => {
  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", "dark");
  }, []);

  return (
    <div
      className="min-vh-100 bg-dark text-light"
      style={{ width: "100%", maxWidth: "100%", overflowX: "hidden" }}
    >
      <Navigation />
      <main style={{ width: "100%" }}>
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <SkillSection />
        <NextSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
