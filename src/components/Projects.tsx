import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Activity, ShieldCheck, ArrowRight } from "lucide-react";

const projects = [
  {
    icon: Activity,
    title: "Patient Management Using RFID",
    subtitle: "Capstone Project",
    description:
      "Monitored patient information, diagnosis prescription, and encounters within health care organizations by leveraging RFID Tags. Analysed hospital equipment needed for patient while supporting patient in ambulance using RFID Tags. Led effective integration with Computer based medical record file tracking application system and monitored patient medical record file.",
    tags: ["Healthcare", "RFID", "IoT", "Medical Tracking", "Record Management"],
    gradient: "from-blue-500/10 via-cyan-500/10 to-transparent",
  },
  {
    icon: ShieldCheck,
    title: "Self Defensing Security System for Human",
    subtitle: "Embedded Systems Project",
    description:
      "Delivered improved information system security by using EMBEDDED technology. Protected system from threats by identifying condition of security breach and delivering security plans while using Arduino Uno.",
    tags: ["Arduino", "Security", "Embedded", "IoT", "Threat Detection"],
    gradient: "from-purple-500/10 via-pink-500/10 to-transparent",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <section id="projects" className="slide-section py-20">
      <span className="section-number">05</span>

      <div className="section-container relative z-10" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <p className="text-primary text-sm uppercase tracking-[0.3em] mb-2">My Work</p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-12">
            IT <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              onMouseEnter={() => setActiveProject(i)}
              onMouseLeave={() => setActiveProject(null)}
              className="glass-card-hover group relative overflow-hidden"
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10 p-8">
                <div className="flex items-start justify-between mb-5">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <project.icon size={28} className="text-primary" />
                  </div>
                  <motion.div
                    animate={{ x: activeProject === i ? 0 : -10, opacity: activeProject === i ? 1 : 0 }}
                    className="p-2 rounded-lg bg-primary/10">
                    <ArrowRight size={16} className="text-primary" />
                  </motion.div>
                </div>

                <h3 className="font-display text-2xl font-bold mb-1 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-primary/70 text-sm font-medium mb-4">{project.subtitle}</p>
                <p className="text-muted-foreground mb-6 leading-relaxed text-sm">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs rounded-full border border-primary/20 text-primary/80 bg-primary/5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
