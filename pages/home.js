import Head from "next/head";

import React from "react";

import { ScrollProvider } from "../helpers/ScrollProvider";

import ContactSectionComponent from "../components/ContactSection";
import HeroSectionComponent from "../components/HeroSection";
import ProjectsSectionComponent from "../components/ProjectsSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lorraine Andrea</title>
        <meta name="description" content="Lorraine Andrea Portfolio" />
        <link rel="icon" href="/lorraine-andrea-logo.png" />
      </Head>
      <ScrollProvider>
        <HeroSectionComponent />
        <ProjectsSectionComponent />
        <ContactSectionComponent />
      </ScrollProvider>
    </>
  );
}
