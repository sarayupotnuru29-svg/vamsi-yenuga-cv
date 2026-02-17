import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Mail, Phone, Linkedin, Send, Download } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:Vamsiyenuga1996@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}`;
    window.open(mailto);
  };

  return (
    <section id="contact" className="slide-section py-20">
      <span className="section-number">06</span>
      <div className="floating-shape w-72 h-72 top-10 right-10 animate-float-slow" />

      <div className="section-container relative z-10" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <p className="text-primary text-sm uppercase tracking-[0.3em] mb-2">Get in touch</p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-12">
            Contact <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2 }}
            className="space-y-5">
            {[
              { icon: MapPin, label: "Location", value: "Ballarat, VIC" },
              { icon: Mail, label: "Email", value: "Vamsiyenuga1996@gmail.com", href: "mailto:Vamsiyenuga1996@gmail.com" },
              { icon: Phone, label: "Phone", value: "+61 434 622 576", href: "tel:+61434622576" },
            ].map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="glass-card p-5 flex items-center gap-4 group hover:border-primary/30 transition-all duration-300">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Icon size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">{label}</p>
                  {href ? (
                    <a href={href} className="text-foreground hover:text-primary transition-colors">{value}</a>
                  ) : (
                    <p className="text-foreground">{value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="flex flex-wrap gap-3 pt-2">
              <a href="https://www.linkedin.com/in/vamsiyenuga/" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] hover:-translate-y-0.5">
                <Linkedin size={18} /> Connect on LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.3 }}
            className="glass-card p-8 space-y-5">
            {[
              { name: "name" as const, label: "Your Name", type: "text" },
              { name: "email" as const, label: "Your Email", type: "email" },
            ].map((field) => (
              <div key={field.name}>
                <label className="text-sm text-muted-foreground mb-1.5 block">{field.label}</label>
                <input type={field.type} required value={formData[field.name]}
                  onChange={(e) => setFormData((d) => ({ ...d, [field.name]: e.target.value }))}
                  className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors" />
              </div>
            ))}
            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Message</label>
              <textarea required rows={5} value={formData.message}
                onChange={(e) => setFormData((d) => ({ ...d, message: e.target.value }))}
                className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none" />
            </div>
            <button type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] hover:-translate-y-0.5">
              <Send size={18} /> Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
