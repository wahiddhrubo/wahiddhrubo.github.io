import { Mail } from "lucide-react";
import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import News from "../components/news";
import ResearchPapers from "../components/researchPapers";
import Skills from "../components/skills";
import Bio from "../components/bio";
import Projects from "../components/projects";

export default function LandingPage() {
  return (
    <div className="min-h-screen  dark:text-white  ">
      <Navbar />
      {/* HERO SECTION */}
      <section>
        <Hero />
      </section>

      <div className=" lg:p-20 lg:w-3/4 p-12 space-y-12 lg:space-y-28 mx-auto">
        {/* NEWS SECTION */}
        <section id="news">
          <News />
        </section>
        {/* BIO SECTION */}
        <section id="bio">
          <Bio />
        </section>
        {/* FEATURED PUBLICATIONS */}
        <section id="publications">
          <ResearchPapers />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <Skills />
        </section>
      </div>
    </div>
  );
}
