import React from "react";

import { ScrollProvider } from "../helpers/ScrollProvider";

import ContactSectionComponent from "../components/ContactSection";
import HeroSectionComponent from "../components/HeroSection";
import ProjectsSectionComponent from "../components/ProjectsSection";

export default function Home() {
  return (
    <ScrollProvider>
      <HeroSectionComponent />
      <ProjectsSectionComponent />
      <ContactSectionComponent />
    </ScrollProvider>
  );
}
