import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
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

const technicalProfile = [
  "ServiceNow", "Jira", "Soap UI", "Selenium", "Postman", "Virtual Servers",
  "Hyper-V", "MDM", "Azure AD", "Citrix", "Putty",
];

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredCat, setHoveredCat] = useState<number | null>(null);

  return (
    <section id="skills" className="slide-section py-20">
      <span className="section-number">03</span>
      <div className="floating-shape w-80 h-80 bottom-0 left-0 animate-float" />

      <div className="section-container relative z-10" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <p className="text-primary text-sm uppercase tracking-[0.3em] mb-2">What I know</p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
        </motion.div>

        {/* Technical profile toolbar */}
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-2 mb-12">
          {technicalProfile.map((tool, i) => (
            <motion.span key={tool}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4 + i * 0.05 }}
              className="px-4 py-2 rounded-lg text-xs font-medium border border-primary/20 text-primary bg-primary/5 hover:bg-primary/10 transition-colors cursor-default">
              {tool}
            </motion.span>
          ))}
        </motion.div>

        {/* Skill categories - bento grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              onMouseEnter={() => setHoveredCat(i)}
              onMouseLeave={() => setHoveredCat(null)}
              className="glass-card-hover p-6 relative overflow-hidden group"
            >
              {/* Background glow on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent transition-opacity duration-500 ${hoveredCat === i ? 'opacity-100' : 'opacity-0'}`} />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <cat.icon size={22} className="text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-bold">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, si) => (
                    <motion.span key={skill}
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : {}}
                      transition={{ delay: 0.5 + si * 0.05 }}
                      className="px-3 py-1.5 rounded-full text-xs border border-border bg-secondary/50 text-muted-foreground transition-all duration-300 hover:border-primary hover:text-primary hover:bg-primary/5">
                      {skill}
                    </motion.span>
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

export default Skills;
