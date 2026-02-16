import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Network, Cloud, Wrench, Users, Monitor, Shield } from "lucide-react";

const skillCategories = [
  {
    icon: Network,
    title: "Networking",
    skills: ["Cisco Routers & Switches", "LAN/WAN", "DNS", "Firewalls", "TCP/IP", "Cabling & Switch Configuration"],
  },
  {
    icon: Cloud,
    title: "Cloud & Systems",
    skills: ["Azure AD", "Microsoft 365", "Hyper-V", "Citrix", "Windows Server", "SharePoint", "Exchange", "Teams"],
  },
  {
    icon: Monitor,
    title: "OS & Deployment",
    skills: ["Windows OS (Client/Server)", "Mac OS", "iOS", "MDM (Windows Connect)", "Intelligent Hub", "Active Directory"],
  },
  {
    icon: Wrench,
    title: "Tools & Platforms",
    skills: ["ServiceNow", "Jira", "Selenium", "Postman", "Putty", "Soap UI", "Virtual Servers"],
  },
  {
    icon: Shield,
    title: "Security",
    skills: ["Firewall Management", "Password Policies", "Access Controls", "Root Cause Analysis", "Vulnerability Testing", "System Hardening"],
  },
  {
    icon: Users,
    title: "Soft Skills",
    skills: ["Communication", "Cross-team Collaboration", "Problem Solving", "Documentation", "Relationship Building", "Data Analysis"],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 lg:py-32 relative">
      <div className="floating-shape w-80 h-80 bottom-0 left-0 animate-float" />
      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm uppercase tracking-[0.3em] mb-2">What I know</p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-16">
            Technical <span className="gradient-text">Skills</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="glass-card-hover p-6"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-lg bg-primary/10">
                  <cat.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold">{cat.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full text-xs border border-border bg-secondary/50 text-muted-foreground transition-all duration-300 hover:border-primary hover:text-primary hover:bg-primary/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
