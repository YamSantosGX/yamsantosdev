import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Companies from "@/components/Companies";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import ResumeDownload from "@/components/ResumeDownload";
import CareerTimeline from "@/components/CareerTimeline";
import Footer from "@/components/Footer";

const Index = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'about' || hash === 'companies') {
        setActiveSection(hash);
      } else {
        setActiveSection(null);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (activeSection === 'about') {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <About />
        </main>
        <Footer />
      </div>
    );
  }

  if (activeSection === 'companies') {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Companies />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <div id="hero">
          <Hero />
        </div>
        <Experience />
        <Projects />
        <Education />
        <Skills />
        <CareerTimeline />
        <Contact />
        <ResumeDownload />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
