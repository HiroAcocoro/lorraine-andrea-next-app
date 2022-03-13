import React from "react";
import ContactSectionComponent from "../components/ContactSection";
import HeroSectionComponent from "../components/HeroSection";
import ProjectsSectionComponent from "../components/ProjectsSection";

const Home = () => {
  return (
    <div>
      <HeroSectionComponent />
      <ProjectsSectionComponent />
      <ContactSectionComponent />
    </div>
  );
};

export default Home;
