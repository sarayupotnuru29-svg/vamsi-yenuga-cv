import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "Master's in Information Technology",
    institution: "Victorian Institute of Technology, Melbourne, Australia",
    year: "2021",
    description:
      "Gained in-depth knowledge of networks and software design, web programming, computer forensics, and information technology management. Demonstrated understanding of computer software and systems to design and repair software for corporations and businesses.",
    coursework: [
      "Wireless Networks/Communication",
      "Database Systems",
      "IT Security",
      "IT Project Management",
      "Enterprise Resource Planning",
      "Software Engineering & Quality",
      "Change Management/Testing",
      "Knowledge Management",
      "Enterprise Systems",
      "Advanced Research Topics in IT",
      "Business Analytics",
      "Intelligent System for Analytics",
    ],
  },
  {
    degree: "Bachelor of Engineering (B.E) in Electronics and Communication",
    institution: "MIC College of Technology, India",
    year: "2014 – 2018",
    description: "",
    coursework: [
      "Network Analysis",
      "Data Structures",
      "Signals/Systems",
      "EM Waves/Transmission Lines",
      "Analog Communications",
      "Control Systems",
      "Digital System Design",
      "Antenna & Wave Propagation",
      "Microprocessor & Microcontroller",
      "Digital Signal Processing",
      "Digital Communications",
      "VLSI Design",
      "Computer Networks",
      "Radar Systems",
    ],
  },
];

const certifications = [
  { name: "Jira Fundamentals", issuer: "Atlassian University", date: "September 2021" },
  { name: "Confluence Fundamentals", issuer: "Atlassian University", date: "September 2021" },
  { name: "Q Test Specialist", issuer: "Tricentis", date: "September 2021" },
  { name: "Google IT Support Professional Certificate", issuer: "Google", date: "2022" },
];

const Education = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 lg:py-32 relative">
      <div className="floating-shape w-72 h-72 bottom-10 right-10 animate-float" />
      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm uppercase tracking-[0.3em] mb-2">Academic Background</p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-16">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
        </motion.div>

        {/* Education */}
        <div className="space-y-8 mb-16">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="glass-card-hover p-6 lg:p-8"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                  <GraduationCap size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground">{edu.degree}</h3>
                  <p className="text-primary font-medium text-sm">{edu.institution}</p>
                  <p className="text-muted-foreground text-sm">{edu.year}</p>
                </div>
              </div>

              {edu.description && (
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{edu.description}</p>
              )}

              <p className="text-xs text-primary uppercase tracking-wider font-medium mb-3">Key Coursework</p>
              <div className="flex flex-wrap gap-2">
                {edu.coursework.map((course) => (
                  <span
                    key={course}
                    className="px-3 py-1 text-xs rounded-full border border-border bg-secondary/50 text-muted-foreground"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="font-display text-2xl font-bold mb-6">
            Professional <span className="gradient-text">Certifications</span>
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="glass-card p-5 flex items-start gap-4"
              >
                <div className="p-2.5 rounded-lg bg-primary/10 shrink-0">
                  <Award size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-foreground text-sm">{cert.name}</h4>
                  <p className="text-muted-foreground text-xs">{cert.issuer}</p>
                  <p className="text-muted-foreground text-xs">{cert.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
