import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Download, FileText, Sparkles } from "lucide-react";

const ResumeDownload = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="resume" className="py-24 relative">
      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="glass-card p-12 text-center relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ delay: 0.2, type: "spring" }}
              className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center"
            >
              <FileText size={36} className="text-primary" />
            </motion.div>

            <span className="section-number !relative !inset-auto !text-6xl !opacity-[0.03] block mb-2">07</span>

            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-3">
              Download My <span className="gradient-text">Resume</span>
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-8">
              Get a detailed overview of my experience, skills, certifications, and education in a professionally formatted PDF.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/Vamsi_Yenuga_Resume.pdf"
                download
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg transition-all duration-300 hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)] hover:-translate-y-1 group"
              >
                <Download size={22} className="group-hover:animate-bounce" />
                Download CV
                <Sparkles size={16} className="text-primary-foreground/60" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeDownload;
