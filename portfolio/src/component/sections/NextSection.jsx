import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Sparkles, Bot, Cpu } from "lucide-react";

const NextSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const focusAreas = [
    { icon: Bot, label: "AI Agents" },
    { icon: Cpu, label: "Automation" },
    { icon: Sparkles, label: "Smart Systems" },
  ];

  return (
    <section
      className="py-5 position-relative overflow-hidden"
      style={{
        paddingTop: "clamp(4rem, 8vw, 8rem)",
        paddingBottom: "clamp(4rem, 8vw, 8rem)",
      }}
    >
      {/* Gradient background */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background:
            "linear-gradient(180deg, transparent, rgba(124, 58, 237, 0.05), transparent)",
          pointerEvents: "none",
        }}
      />

      <div
        className="container-fluid px-3 px-md-4 position-relative"
        style={{ zIndex: 10 }}
      >
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto"
          style={{ maxWidth: "900px" }}
        >
          <div
            className="card bg-dark bg-opacity-50 border-secondary p-3 p-md-4 p-lg-5"
            style={{
              backdropFilter: "blur(20px)",
              boxShadow: "0 0 60px rgba(124, 58, 237, 0.2)",
              borderRadius: "16px",
              border: "1px solid rgba(124, 58, 237, 0.2)",
            }}
          >
            <div className="d-flex flex-column flex-md-row align-items-start gap-4">
              {/* Icon */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="d-flex align-items-center justify-content-center rounded flex-shrink-0"
                style={{
                  width: "clamp(60px, 10vw, 80px)",
                  height: "clamp(60px, 10vw, 80px)",
                  minWidth: "60px",
                  minHeight: "60px",
                  background:
                    "linear-gradient(135deg, rgba(124, 58, 237, 0.2), rgba(124, 58, 237, 0.05))",
                }}
              >
                <Brain size={40} style={{ color: "#7c3aed" }} />
              </motion.div>

              {/* Content */}
              <div className="flex-grow-1">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.3 }}
                  className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill small fw-medium mb-3"
                  style={{
                    background: "rgba(124, 58, 237, 0.1)",
                    color: "#7c3aed",
                  }}
                >
                  <Sparkles size={14} />
                  Future Focus
                </motion.div>

                <h2
                  className="fw-bold mb-3"
                  style={{ fontSize: "clamp(1.25rem, 4vw, 1.75rem)" }}
                >
                  AI-Driven Development
                </h2>
                <p
                  className="text-secondary lh-lg mb-4"
                  style={{ fontSize: "clamp(0.95rem, 2.5vw, 1.125rem)" }}
                >
                  Currently integrating AI agents into web platforms for
                  automation and smart systems. From intelligent form processing
                  to predictive user experiences—I'm building the next
                  generation of web applications.
                </p>

                {/* AI Focus Areas */}
                <div className="row g-2 g-md-3">
                  {focusAreas.map((item, i) => (
                    <div key={item.label} className="col-12 col-sm-6 col-lg-4">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.4 + i * 0.1 }}
                        className="d-flex align-items-center gap-3 p-3 rounded"
                        style={{
                          background: "rgba(255,255,255,0.05)",
                          transition: "all 0.2s ease",
                        }}
                      >
                        <item.icon size={20} style={{ color: "#7c3aed" }} />
                        <span className="medium fw-medium">{item.label}</span>
                      </motion.div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NextSection;
