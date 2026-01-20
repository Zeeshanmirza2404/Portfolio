import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Mail, Download, ArrowUpRight } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/Zeeshanmirza2404",
    description: "View my code",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/zeeshanmirza24/",
    description: "Connect with me",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:zeeshanmirza1434@gmail.com",
    description: "Get in touch",
  },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-5 position-relative" style={{ paddingTop: "8rem", paddingBottom: "8rem" }}>
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mx-auto"
          style={{ maxWidth: "800px" }}
        >
          <h2 className="display-2 fw-bold mb-4" style={{ fontSize: "3.5rem" }}>Let's Build Something Together</h2>
          <p className="text-secondary mb-5" style={{ fontSize: "1.25rem", lineHeight: "1.6", color: "rgba(255, 255, 255, 0.65)" }}>
            I'm always open to discussing new opportunities, interesting projects,
            or just having a conversation about technology.
          </p>

          {/* Social Links */}
          <div className="row g-4 mb-5">
            {socialLinks.map((link, index) => (
              <div key={link.name} className="col-sm-4">
                <motion.a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card bg-dark bg-opacity-50 border-secondary h-100 p-5 text-decoration-none text-light d-flex flex-column align-items-center text-center"
                  style={{
                    backdropFilter: "blur(10px)",
                    transition: "all 0.3s ease",
                    borderRadius: "12px"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow = "0 20px 40px rgba(124, 58, 237, 0.25)";
                    e.currentTarget.style.borderColor = "rgba(124, 58, 237, 0.4)";
                    const arrow = e.currentTarget.querySelector('.arrow-icon');
                    if (arrow) {
                      arrow.style.opacity = '1';
                      arrow.style.transform = 'translate(4px, -4px)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                    const arrow = e.currentTarget.querySelector('.arrow-icon');
                    if (arrow) {
                      arrow.style.opacity = '0';
                      arrow.style.transform = 'translate(0, 0)';
                    }
                  }}
                >
                  <div
                    className="d-flex align-items-center justify-content-center rounded-circle mb-4"
                    style={{
                      width: "64px",
                      height: "64px",
                      background: "linear-gradient(135deg, rgba(124, 58, 237, 0.15), rgba(124, 58, 237, 0.05))"
                    }}
                  >
                    <link.icon size={28} style={{color: '#7c3aed'}} />
                  </div>
                  <div className="fw-medium mb-2 d-flex align-items-center gap-2" style={{ fontSize: "1.125rem" }}>
                    {link.name}
                    <ArrowUpRight 
                      size={18} 
                      className="arrow-icon" 
                      style={{ 
                        opacity: 0, 
                        transition: "all 0.3s ease",
                        transform: "translate(0, 0)"
                      }} 
                    />
                  </div>
                  <p className="text-secondary mb-0" style={{ fontSize: "0.9375rem" }}>{link.description}</p>
                </motion.a>
              </div>
            ))}
          </div>

          {/* Resume Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a href="/Zeeshan_Resume2026.pdf" download="Resume.pdf" className="btn btn-lg d-inline-flex align-items-center gap-2 px-5 py-3" 
            style={{ 
                  fontSize: "1.25rem",
                  background: "linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)"
                 }}>
              <Download size={22} />
              Download Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
