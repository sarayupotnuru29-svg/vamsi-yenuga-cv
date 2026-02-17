import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, GraduationCap, ExternalLink } from "lucide-react";

const certifications = [
  { name: "Jira Fundamentals", issuer: "Atlassian University", date: "September 2021", icon: "🔧" },
  { name: "Confluence Fundamentals", issuer: "Atlassian University", date: "September 2021", icon: "📝" },
  { name: "Q Test Specialist", issuer: "Tricentis", date: "September 2021", icon: "🧪" },
  { name: "Google IT Support Professional Certificate", issuer: "Google", date: "2022", icon: "🎓" },
];

const education = [
  {
    degree: "Master's in Information Technology",
    institution: "Victorian Institute of Technology, Melbourne, Australia",
    year: "2021",
    description: "Gained in-depth knowledge of networks and software design, web programming, computer forensics, and information technology management.",
    coursework: [
      "Wireless Networks/Communication", "Database Systems", "IT Security", "IT Project Management",
      "Enterprise Resource Planning", "Software Engineering & Quality", "Change Management/Testing",
      "Knowledge Management", "Enterprise Systems", "Advanced Research Topics in IT",
      "Business Analytics", "Intelligent System for Analytics",
    ],
  },
  {
    degree: "Bachelor of Engineering (B.E) in Electronics and Communication",
    institution: "MIC College of Technology, India",
    year: "2014 – 2018",
    description: "",
    coursework: [
      "Network Analysis", "Data Structures", "Signals/Systems", "EM Waves/Transmission Lines",
      "Analog Communications", "Control Systems", "Digital System Design",
      "Antenna & Wave Propagation", "Microprocessor & Microcontroller", "Digital Signal Processing",
      "Digital Communications", "VLSI Design", "Computer Networks", "Radar Systems",
    ],
  },
];

const Certifications = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="slide-section py-20">
      <span className="section-number">04</span>
      <div className="floating-shape w-72 h-72 bottom-10 right-10 animate-float" />

      <div className="section-container relative z-10" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <p className="text-primary text-sm uppercase tracking-[0.3em] mb-2">Credentials</p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-12">
            Certifications & <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        {/* Certifications - horizontal cards */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }}
          className="mb-16">
          <h3 className="font-display text-xl font-bold mb-6 flex items-center gap-2">
            <Award size={20} className="text-primary" /> Professional Certifications
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, i) => (
              <motion.div key={cert.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="glass-card-hover p-5 text-center group cursor-default"
              >
                <div className="text-3xl mb-3">{cert.icon}</div>
                <h4 className="font-display font-bold text-sm text-foreground mb-1 group-hover:text-primary transition-colors">
                  {cert.name}
                </h4>
                <p className="text-muted-foreground text-xs mb-1">{cert.issuer}</p>
                <p className="text-primary/60 text-xs">{cert.date}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <div>
          <h3 className="font-display text-xl font-bold mb-6 flex items-center gap-2">
            <GraduationCap size={20} className="text-primary" /> Academic Background
          </h3>
          <div className="space-y-6">
            {education.map((edu, i) => (
              <motion.div key={edu.degree}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
                className="glass-card-hover p-6 lg:p-8"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 gap-2">
                  <div>
                    <h4 className="font-display text-lg font-bold text-foreground">{edu.degree}</h4>
                    <p className="text-primary font-medium text-sm">{edu.institution}</p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs border border-primary/20 text-primary/80 bg-primary/5 shrink-0">
                    {edu.year}
                  </span>
                </div>

                {edu.description && (
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{edu.description}</p>
                )}

                <p className="text-xs text-primary uppercase tracking-wider font-medium mb-3">Key Coursework</p>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course) => (
                    <span key={course}
                      className="px-3 py-1 text-xs rounded-full border border-border bg-secondary/50 text-muted-foreground hover:border-primary/30 transition-colors">
                      {course}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
