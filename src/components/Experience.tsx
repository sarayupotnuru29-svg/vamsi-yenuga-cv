import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    role: "Senior IT Support Analyst OSS",
    company: "Shell",
    period: "2025 – Present",
    points: [
      "Managed IT assets across enterprise infrastructure",
      "Windows/iOS deployment and configuration",
      "ServiceNow reporting and ticket management",
      "Network troubleshooting and diagnostics",
      "Azure, M365, AD management",
    ],
  },
  {
    role: "IT Support Analyst L3",
    company: "Kantar",
    period: "2022 – 2025",
    points: [
      "SLA-driven incident resolution",
      "Network diagnostics and infrastructure support",
      "Enterprise application support",
      "Documentation & self-service guides",
    ],
  },
  {
    role: "Technical Customer Support",
    company: "Commonwealth Bank Australia",
    period: "",
    points: [
      "Technical customer support and issue resolution",
      "Security & fraud resolution",
    ],
  },
  {
    role: "Agile Software Tester",
    company: "FR Consultancy",
    period: "",
    points: [
      "Agile software testing methodologies",
      "Selenium automation testing",
    ],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 lg:py-32 relative">
      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm uppercase tracking-[0.3em] mb-2">My Journey</p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-16">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <div className="relative pl-12 lg:pl-16">
          <div className="timeline-line" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="relative mb-12 last:mb-0"
            >
              <div className="timeline-dot" style={{ top: "1.5rem" }} />

              <div className="glass-card-hover p-6 lg:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground">{exp.role}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  {exp.period && (
                    <span className="text-muted-foreground text-sm mt-1 sm:mt-0 shrink-0">
                      {exp.period}
                    </span>
                  )}
                </div>

                <ul className="space-y-2">
                  {exp.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-muted-foreground text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
