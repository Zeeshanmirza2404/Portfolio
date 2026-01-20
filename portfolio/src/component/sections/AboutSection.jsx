import { color, motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Layers, Lightbulb, Rocket } from "lucide-react";

const highlights = [
  {
    icon: Layers,
    title: "System Designer",
    description:
      "I architect real-world systems with multi-role dashboards, not just pretty UIs. Every feature is built to scale.",
  },
  {
    icon: Lightbulb,
    title: "Product Thinker",
    description:
      "I approach engineering like a product owner—understanding user needs, business goals, and technical constraints.",
  },
  {
    icon: Rocket,
    title: "Production Ready",
    description:
      "My code ships. From authentication flows to database design, everything is built for the real world.",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="py-5"
      style={{ paddingTop: "8rem", paddingBottom: "8rem" }}
    >
      <div className="container mt-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-5 mx-auto"
          style={{ maxWidth: "700px" }}
        >
          <h1 className="display-2 fw-bold mb-4" style={{ fontSize: "4rem" }}>
            Engineering Mindset. Real-World Execution.
          </h1>
          <p
            className="lh-lg"
            style={{ fontSize: "1.25rem", color: "rgba(255, 255, 255, 0.5)" }}
          >
            I’m Zeeshan Mirza, a full-stack developer who builds systems with
            long-term scalability in mind. While others build pages, I build
            platforms-complete with role-based access, scalable APIs, and
            production-grade architecture. My goal is to create software that
            solves real problems and can grow with the business.
          </p>
        </motion.div>

        <div className="row g-4">
          {highlights.map((item, index) => (
            <div key={item.title} className="col-md-4">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="card bg-dark bg-opacity-50 border-secondary h-100 p-4"
                style={{
                  backdropFilter: "blur(10px)",
                  transition: "all 0.3s ease",
                  borderRadius: "12px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 40px rgba(124, 58, 237, 0.25)";
                  e.currentTarget.style.borderColor = "rgba(124, 58, 237, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor =
                    "rgba(255, 255, 255, 0.1)";
                }}
              >
                <div
                  className="d-flex align-items-center justify-content-center rounded mb-4"
                  style={{
                    width: "64px",
                    height: "64px",
                    background:
                      "linear-gradient(135deg, rgba(124, 58, 237, 0.15), rgba(124, 58, 237, 0.05))",
                  }}
                >
                  <item.icon size={32} style={{ color: "#7c3aed" }} />
                </div>
                <h3
                  className="h5 fw-semibold mb-3"
                  style={{ fontSize: "1.5rem" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-secondary mb-0"
                  style={{ lineHeight: "1.5" }}
                >
                  {item.description}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
