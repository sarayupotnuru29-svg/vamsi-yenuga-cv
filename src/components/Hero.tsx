import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Briefcase, Download, ChevronDown } from "lucide-react";
import profileImg from "@/assets/vamsi_pic.jpeg";

const typingTexts = [
  "IT Support Analyst (L2/L3)",
  "Network & Cloud Specialist",
  "Enterprise Infrastructure Expert",
];

const expertiseAreas = [
  "Network Engineering", "Help Desk Support", "System Planning & Analysis",
  "Technical Troubleshooting", "System Deployment & Management",
  "Web Server Administration", "Cross-team Collaboration",
];

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = typingTexts[textIndex];
    const timeout = deleting ? 40 : 80;
    const timer = setTimeout(() => {
      if (!deleting && charIndex < current.length) setCharIndex((c) => c + 1);
      else if (!deleting && charIndex === current.length) setTimeout(() => setDeleting(true), 1500);
      else if (deleting && charIndex > 0) setCharIndex((c) => c - 1);
      else if (deleting && charIndex === 0) { setDeleting(false); setTextIndex((t) => (t + 1) % typingTexts.length); }
    }, timeout);
    return () => clearTimeout(timer);
  }, [charIndex, deleting, textIndex]);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="slide-section">
      <div className="floating-shape w-72 h-72 -top-20 -right-20 animate-float" />
      <div className="floating-shape w-96 h-96 -bottom-32 -left-32 animate-float-slow" />
      <div className="floating-shape w-48 h-48 top-1/3 right-1/4 animate-pulse-glow" />
      <span className="section-number">01</span>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              className="text-primary text-sm font-medium uppercase tracking-[0.3em] mb-4">
              Senior IT Support Analyst
            </motion.p>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
              Hi, I'm{" "}<span className="gradient-text glow-text">Vamsi Yenuga</span>
            </motion.h1>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
              className="text-xl md:text-2xl text-muted-foreground mb-2 h-10">
              <span>{typingTexts[textIndex].substring(0, charIndex)}</span>
              <span className="border-r-2 ml-0.5 animate-typing-cursor">&nbsp;</span>
            </motion.div>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
              className="text-muted-foreground leading-relaxed mt-4 mb-6 max-w-2xl">
              Tech-savvy professional with a Master's degree in Information Technology, leveraging talents in troubleshooting network resources and evaluating technical alternatives to increase system performance. Knowledgeable in configuring Cisco routers, switches, LAN/WAN networks and proficient in qualifying, integrating, and upgrading hardware, software, and networks.
            </motion.p>

            {/* Expertise pills */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
              className="flex flex-wrap gap-2 mb-8">
              {expertiseAreas.map((area) => (
                <span key={area}
                  className="px-3 py-1.5 rounded-full text-xs border border-border bg-secondary/50 text-muted-foreground">
                  {area}
                </span>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }}
              className="flex flex-wrap gap-4">
              <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] hover:-translate-y-0.5">
                <Mail size={18} /> Contact Me
              </a>
              <a href="#experience" onClick={(e) => { e.preventDefault(); scrollTo("experience"); }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium transition-all duration-300 hover:border-primary hover:text-primary hover:-translate-y-0.5">
                <Briefcase size={18} /> View Experience
              </a>
              <a href="#resume" onClick={(e) => { e.preventDefault(); scrollTo("resume"); }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary/30 text-primary font-medium transition-all duration-300 hover:bg-primary/10 hover:-translate-y-0.5">
                <Download size={18} /> Download CV
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-primary/10 blur-2xl animate-pulse-glow" />
              <div className="relative w-72 h-80 md:w-80 md:h-96 lg:w-96 lg:h-[28rem] rounded-2xl overflow-hidden border-2 border-primary/20 glow-border animate-float">
                <img src={profileImg} alt="Vamsi Yenuga" className="w-full h-full object-cover object-top" />
              </div>
              {/* Floating stats */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3 }}
                className="absolute -bottom-4 -left-8 glass-card px-4 py-3 flex items-center gap-3">
                <div className="font-display text-2xl font-bold gradient-text">3+</div>
                <div className="text-xs text-muted-foreground leading-tight">Years<br/>Experience</div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5 }}
                className="absolute -top-4 -right-6 glass-card px-4 py-3 flex items-center gap-3">
                <div className="font-display text-2xl font-bold gradient-text">L2/L3</div>
                <div className="text-xs text-muted-foreground leading-tight">Support<br/>Specialist</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => scrollTo("experience")}
      >
        <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
        <ChevronDown size={20} className="text-primary animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;
