import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Cloud, Server } from "lucide-react";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "L2/L3", label: "Support Specialist" },
  { value: "Enterprise", label: "Infrastructure Expert" },
];

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="floating-shape w-64 h-64 top-0 right-0 animate-float-slow" />
      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm uppercase tracking-[0.3em] mb-2">Get to know me</p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-8">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Tech-savvy IT professional with a Master's in Information Technology, specializing in
              network troubleshooting, system optimization, and enterprise-level support.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: Server, text: "Cisco Networking" },
                { icon: Cloud, text: "Azure AD & Cloud" },
                { icon: Shield, text: "Firewall & Security" },
                { icon: Server, text: "Windows & Mac OS" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 glass-card px-4 py-3">
                  <Icon size={18} className="text-primary shrink-0" />
                  <span className="text-sm text-foreground">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-3 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.15 }}
                className="glass-card-hover p-6 text-center"
              >
                <div className="font-display text-2xl lg:text-3xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-xs uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
