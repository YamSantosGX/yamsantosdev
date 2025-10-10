import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import ResumeDownload from "@/components/ResumeDownload";
import CareerTimeline from "@/components/CareerTimeline";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <div id="hero">
          <Hero />
        </div>
        <Experience />
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
