import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import ResumeDownload from "@/components/ResumeDownload";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

const Index = () => {
  return (
    <div className="relative">
      <ScrollProgress />
      <Navbar />
      <main className="lg:pl-24">
        <Hero />
        <Experience />
        <Skills />
        <Certifications />
        <Projects />
        <Contact />
        <ResumeDownload />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
