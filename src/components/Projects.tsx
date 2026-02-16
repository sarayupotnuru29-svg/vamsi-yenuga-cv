import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Activity, ShieldCheck } from "lucide-react";

const projects = [
  {
    icon: Activity,
    title: "Patient Management Using RFID",
    subtitle: "Capstone Project",
    description:
      "Monitored patient information, diagnosis prescription, and encounters within health care organizations by leveraging RFID Tags. Analysed hospital equipment needed for patient while supporting patient in ambulance using RFID Tags. Led effective integration with Computer based medical record file tracking application system and monitored patient medical record file.",
    tags: ["Healthcare", "RFID", "IoT", "Medical Tracking", "Record Management"],
  },
  {
    icon: ShieldCheck,
    title: "Self Defensing Security System for Human",
    subtitle: "Embedded Systems Project",
    description:
      "Delivered improved information system security by using EMBEDDED technology. Protected system from threats by identifying condition of security breach and delivering security plans while using Arduino Uno.",
    tags: ["Arduino", "Security", "Embedded", "IoT", "Threat Detection"],
  },
];

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 lg:py-32 relative">
      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm uppercase tracking-[0.3em] mb-2">My Work</p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-16">
            IT <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="glass-card-hover group p-8 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors duration-500" />

              <div className="relative z-10">
                <div className="p-3 rounded-xl bg-primary/10 w-fit mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                  <project.icon size={28} className="text-primary" />
                </div>

                <h3 className="font-display text-2xl font-bold mb-1 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-primary/70 text-sm font-medium mb-4">{project.subtitle}</p>

                <p className="text-muted-foreground mb-5 leading-relaxed text-sm">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full border border-primary/20 text-primary/80 bg-primary/5"
                    >
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
