import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download, Mail, Briefcase } from "lucide-react";
import profileImg from "@/assets/vamsi_pic.jpeg";

const typingTexts = [
  "Senior IT Support Analyst",
  "Network & Cloud Specialist",
  "L2/L3 Support Expert",
];

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = typingTexts[textIndex];
    const timeout = deleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!deleting && charIndex < current.length) {
        setCharIndex((c) => c + 1);
      } else if (!deleting && charIndex === current.length) {
        setTimeout(() => setDeleting(true), 1500);
      } else if (deleting && charIndex > 0) {
        setCharIndex((c) => c - 1);
      } else if (deleting && charIndex === 0) {
        setDeleting(false);
        setTextIndex((t) => (t + 1) % typingTexts.length);
      }
    }, timeout);

    return () => clearTimeout(timer);
  }, [charIndex, deleting, textIndex]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Floating shapes */}
      <div className="floating-shape w-72 h-72 -top-20 -right-20 animate-float" />
      <div className="floating-shape w-96 h-96 -bottom-32 -left-32 animate-float-slow" />
      <div className="floating-shape w-48 h-48 top-1/3 right-1/4 animate-pulse-glow" />

      <div className="section-container w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-primary text-sm font-medium uppercase tracking-[0.3em] mb-4"
            >
              Welcome to my portfolio
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4"
            >
              Hi, I'm{" "}
              <span className="gradient-text glow-text">Vamsi Yenuga</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-xl md:text-2xl text-muted-foreground mb-2 h-10"
            >
              <span>{typingTexts[textIndex].substring(0, charIndex)}</span>
              <span className="border-r-2 ml-0.5 animate-typing-cursor">&nbsp;</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="text-muted-foreground text-lg mt-4 mb-8 max-w-lg"
            >
              Delivering secure, scalable, and reliable IT solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] hover:-translate-y-0.5"
              >
                <Mail size={18} /> Contact Me
              </a>
              <a
                href="#experience"
                onClick={(e) => { e.preventDefault(); scrollTo("experience"); }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium transition-all duration-300 hover:border-primary hover:text-primary hover:-translate-y-0.5"
              >
                <Briefcase size={18} /> View Experience
              </a>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-primary/10 blur-2xl animate-pulse-glow" />
              <div className="relative w-72 h-80 md:w-80 md:h-96 lg:w-96 lg:h-[28rem] rounded-2xl overflow-hidden border-2 border-primary/20 glow-border animate-float">
                <img
                  src={profileImg}
                  alt="Vamsi Yenuga"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
