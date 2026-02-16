import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Cloud, Server, Wrench, Users, Monitor } from "lucide-react";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "L2/L3", label: "Support Specialist" },
  { value: "MITS", label: "Master's Degree" },
];

const areasOfExpertise = [
  "Network Engineering",
  "Help Desk Support",
  "System Planning & Analysis",
  "Technical Troubleshooting",
  "Technical Support",
  "System Deployment & Management",
  "Web Server Administration",
  "Superior Customer Service",
  "Relationship Building",
  "Effective Communication",
  "Cross-team Collaboration",
  "Data Analysis",
  "Problems & Issue Resolution",
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
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Tech-savvy professional with a Master's degree in Information Technology pursuing career in MITS, leveraging talents in troubleshooting network resources and evaluating technical alternatives to increase system performance.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Knowledgeable in configuring and installing multiple network devices and services such as Cisco routers, switches, and LAN/WAN networks and proficient in qualifying, integrating, troubleshooting, and upgrading hardware, software, and networks. Conducts root cause analysis, testing vulnerabilities, and hardening business-critical systems.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              With exceptional interpersonal and communication skills, communicates complex technical information to non-technical users and stakeholders at all levels and collaborates well to achieve organisation goals.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: Server, text: "Cisco Networking" },
                { icon: Cloud, text: "Azure AD & Cloud" },
                { icon: Shield, text: "Firewall & Security" },
                { icon: Monitor, text: "Windows & Mac OS" },
                { icon: Wrench, text: "ServiceNow & Jira" },
                { icon: Users, text: "Cross-team Collaboration" },
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
            className="space-y-6"
          >
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.15 }}
                  className="glass-card-hover p-5 text-center"
                >
                  <div className="font-display text-xl lg:text-2xl font-bold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-xs uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="glass-card p-6"
            >
              <h3 className="font-display text-lg font-bold mb-4 text-foreground">Areas of Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {areasOfExpertise.map((area) => (
                  <span
                    key={area}
                    className="px-3 py-1.5 rounded-full text-xs border border-border bg-secondary/50 text-muted-foreground transition-all duration-300 hover:border-primary hover:text-primary hover:bg-primary/5"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
