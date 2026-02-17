import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Building2, ChevronRight } from "lucide-react";

const experiences = [
  {
    role: "Senior IT Support Analyst OSS",
    company: "Shell",
    period: "September 2025 – Present",
    color: "from-yellow-500/20 to-red-500/20",
    description:
      "Managed IT assets across the organization, provided end-user support for applications, mobile connectivity issues and hardware-related issues, and ensured smooth operation of meeting room AV systems.",
    points: [
      "Supported and troubleshot network connectivity issues, ensuring stable and secure access for users.",
      "Triaged, investigated, and resolved incidents and service requests within agreed service levels.",
      "Implemented and managed network security measures, including firewalls, password policies, and access controls.",
      "Maintained accurate hardware inventory records, overseeing asset documentation and lifecycle management.",
      "Delivered end-user technical support, incident resolution, OS configuration Windows and MAC.",
      "Administered user applications via Intelligent Hub, managed asset records and user profile group policies through Windows Connect(MDM), and maintained AD authentication/security.",
      "Supported and troubleshot network connectivity, performed cabling and switch configurations, and implemented network security (firewalls, access controls, DNS/protocols).",
      "Provided advanced Windows OS (client/server) and iOS support, along with cloud-based services and enterprise applications.",
      "Authored documentation, guided Service Desk teams, and contributed to infrastructure stability with L2/L3-level troubleshooting expertise.",
      "Implement and manage network security measures, protect network with systems like firewall and password protection and experienced with Microsoft 365, Microsoft Azure, SharePoint, Exchange, and Teams.",
    ],
  },
  {
    role: "IT Support Analyst (Level-3)",
    company: "Kantar",
    period: "December 2022 – August 2025",
    color: "from-blue-500/20 to-cyan-500/20",
    description:
      "Streamlined networking activities by operating virtual servers and checking the network connections in the server room. Providing 2nd/3rd Level Technical support.",
    points: [
      "Efficiently resolved technical issues and provided support to end-users, ensuring minimal downtime SLAs and maximum productivity.",
      "Provide technical support and troubleshooting for network-related problems, assisting users with connectivity issues.",
      "Create comprehensive documentation to enable self-service resolution by customers and Service Desk teams.",
      "Respond, triage, investigate, and resolve incidents and service requests within defined service levels.",
      "Implement and manage network security measures, protect network with systems like firewall and password protection.",
      "Maintained accurate inventory of hardware assets, ensuring proper documentation and lifecycle management.",
      "Applied operating systems concepts, including Active Directory and security protocols.",
      "Utilized networking concepts like DNS, protocols, and devices.",
      "Demonstrated strong knowledge of Windows OS, client and server systems, and cloud services.",
    ],
  },
  {
    role: "Sr. Customer Care Representative",
    company: "Commonwealth Bank Australia",
    period: "February 2022 – December 2022",
    color: "from-purple-500/20 to-pink-500/20",
    description:
      "Delivers proactive support to 60-70 customers on daily basis. Provides technical support in recovering hacked customer accounts and ensures data integrity.",
    points: [
      "Maximised customer satisfaction rates by 100% by addressing incoming queries and processing inbound mail.",
      "Improved customers experience by identifying, analysing, and meeting needs.",
    ],
  },
  {
    role: "Agile Software Tester",
    company: "FR Consultancy",
    period: "August 2021 – October 2021",
    color: "from-green-500/20 to-emerald-500/20",
    description:
      "Formulated test scenarios and cases, conducted manual execution of test cases to ensure seamless working of software.",
    points: [
      "Led manual test case execution, including system testing, integration testing, and regression testing.",
      "Leveraged Selenium Web driver to conduct automation testing while performing back-end testing with SQL queries.",
    ],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeExp, setActiveExp] = useState(0);

  return (
    <section id="experience" className="slide-section py-20">
      <span className="section-number">02</span>
      <div className="floating-shape w-80 h-80 -bottom-20 -right-20 animate-float-slow" />

      <div className="section-container relative z-10" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <p className="text-primary text-sm uppercase tracking-[0.3em] mb-2">Career Journey</p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-12">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-8">
          {/* Company selector tabs - vertical */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2 }}
            className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {experiences.map((exp, i) => (
              <button key={exp.company} onClick={() => setActiveExp(i)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-300 shrink-0 ${
                  activeExp === i
                    ? "glass-card border-primary/40 shadow-[0_0_20px_hsl(var(--primary)/0.1)]"
                    : "hover:bg-secondary/30"
                }`}>
                <div className={`p-2 rounded-lg bg-gradient-to-br ${exp.color} shrink-0`}>
                  <Building2 size={18} className={activeExp === i ? "text-primary" : "text-muted-foreground"} />
                </div>
                <div>
                  <p className={`font-display font-bold text-sm ${activeExp === i ? "text-foreground" : "text-muted-foreground"}`}>
                    {exp.company}
                  </p>
                  <p className="text-xs text-muted-foreground">{exp.period.split("–")[0].trim()}</p>
                </div>
                {activeExp === i && <ChevronRight size={16} className="text-primary ml-auto hidden lg:block" />}
              </button>
            ))}
          </motion.div>

          {/* Experience detail panel */}
          <div className="relative min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeExp}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
                className="glass-card p-8"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-foreground">{experiences[activeExp].role}</h3>
                    <p className="text-primary font-medium">{experiences[activeExp].company}</p>
                  </div>
                  <span className="px-4 py-1.5 rounded-full text-xs font-medium border border-primary/30 text-primary bg-primary/5 shrink-0">
                    {experiences[activeExp].period}
                  </span>
                </div>

                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{experiences[activeExp].description}</p>

                <p className="text-xs text-primary uppercase tracking-wider font-medium mb-4">Key Achievements</p>
                <ul className="space-y-3">
                  {experiences[activeExp].points.map((point, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + idx * 0.05 }}
                      className="flex items-start gap-3 text-muted-foreground text-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="leading-relaxed">{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
