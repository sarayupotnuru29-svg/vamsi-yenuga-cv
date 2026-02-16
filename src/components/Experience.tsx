import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    role: "Senior IT Support Analyst OSS",
    company: "Shell",
    period: "September 2025 – Present",
    description:
      "Managed IT assets across the organization, provided end-user support for applications, mobile connectivity issues and hardware-related issues, and ensured smooth operation of meeting room AV systems. Generated ServiceNow reports to monitor incidents and performance, built and deployed Windows and iOS images, and coordinated with vendors to resolve technical issues efficiently.",
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
    description:
      "Streamlined networking activities by operating virtual servers and checking the network connections in the server room and checking the updates of the software's, address user tickets regarding the hardware, software and networking. Providing 2nd/3rd Level Technical support.",
    points: [
      "Efficiently resolved technical issues and provided support to end-users, ensuring minimal downtime SLAs and maximum productivity. Providing analytical and technical support for enterprise applications, primarily ServiceNow.",
      "Provide technical support and troubleshooting for network-related problems, assisting users with connectivity issues and ensuring minimal downtime.",
      "Create comprehensive documentation to enable self-service resolution by customers and Service Desk teams.",
      "Respond, triage, investigate, and resolve incidents and service requests within defined service levels.",
      "Implement and manage network security measures, protect network with systems like firewall and password protection and experienced with Microsoft 365, Microsoft Azure, SharePoint, Exchange, and Teams.",
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
    description:
      "Delivers proactive support to 60-70 customers on daily basis to meet and exceed customers need. Provides technical support to customer in recovering hacked customer account by monitoring bank registered devices in software, checking unknown devices, and issuing new customer ID and Banking password. Ensures data integrity and accuracy by processing data requests and utilising multiple computer systems.",
    points: [
      "Maximised customer satisfaction rates by 100% by addressing incoming queries and processing inbound mail.",
      "Improved customers experience by identifying, analysing, and meeting needs.",
    ],
  },
  {
    role: "Agile Software Tester (Training / Workshop)",
    company: "FR Consultancy",
    period: "August 2021 – October 2021",
    description:
      "Formulated test scenarios and cases, conducted manual execution of test cases, and prepared test conditions/cases as per the specifications to ensure seamless working of software.",
    points: [
      "Led manual test case execution, including system testing, integration testing, and regression testing to provide report on system performance.",
      "Leveraged Selenium Web driver to conduct automation testing while performing back-end testing with SQL queries.",
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
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
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

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {exp.description}
                </p>

                <p className="text-xs text-primary uppercase tracking-wider font-medium mb-3">Key Achievements</p>
                <ul className="space-y-2">
                  {exp.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-muted-foreground text-sm">
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
