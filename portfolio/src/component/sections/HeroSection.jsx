import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

import TerminalUI from "../TerminalUI.jsx";

const HeroSection = () => {
  return (
    <section
      className="min-vh-100 d-flex align-items-center justify-content-center position-relative overflow-hidden"
      style={{ paddingTop: "80px" }}
    >
      {/* Background gradient orbs with enhanced glow */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden"
        style={{ pointerEvents: "none" }}
      >
        {/* Large ambient glow - left */}
        <motion.div
          className="position-absolute rounded-circle"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            top: "20%",
            left: "-15%",
            width: "clamp(300px, 60vw, 600px)",
            height: "clamp(300px, 60vw, 600px)",
            background:
              "radial-gradient(circle, rgba(85, 22, 134, 1) 0%, rgba(33, 16, 79, 1) 40%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        {/* Large ambient glow - right */}
        <motion.div
          className="position-absolute rounded-circle"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          style={{
            bottom: "15%",
            right: "-15%",
            width: "clamp(350px, 70vw, 700px)",
            height: "clamp(350px, 70vw, 700px)",
            background:
              "radial-gradient(circle, rgba(33, 16, 48, 0.28) 0%, rgba(93, 0, 255, 1) 40%, transparent 70%)",
            filter: "blur(70px)",
          }}
        />

        {/* Center radial gradient overlay */}
        <div
          className="position-absolute"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            height: "100%",
            background:
              "radial-gradient(ellipse at center, rgba(124, 58, 237, 0.08) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />
      </div>

      <div
        className="container-fluid px-3 px-md-4 position-relative"
        style={{ zIndex: 10 }}
      >
        <div className="row align-items-center g-4 g-md-5 gy-5">
          {/* Left content */}
          <div className="col-12 col-lg-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill border small text-secondary mb-4"
              style={{
                background: "rgba(0, 0, 0, 0)",
                borderColor: "rgba(124, 58, 237, 0.3)",
                boxShadow: "0 0 20px rgba(124, 58, 237, 0.2)",
                fontSize: "clamp(0.875rem, 2vw, 1rem)",
              }}
            >
              <span
                className="rounded-circle bg-success flex-shrink-0"
                style={{
                  width: "8px",
                  height: "8px",
                  animation: "pulse 1s infinite",
                  boxShadow: "0 0 8px rgba(0, 255, 17, 0.7)",
                }}
              />
              Available for opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="fw-bold mb-4"
              style={{
                fontSize: "clamp(1.75rem, 6vw, 4rem)",
                fontWeight: 900,
                letterSpacing: "-0.04em",
                lineHeight: "1.1",
              }}
            >
              Building{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: "drop-shadow(0 0 20px rgba(124, 58, 237, 0.3))",
                }}
              >
                Scalable Web Platforms
              </span>
              ,
              <br />
              Not Just Websites.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.25,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mb-4"
              style={{
                lineHeight: "1.6",
                fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
                color: "rgba(255, 255, 255, 0.5)",
              }}
            >
              Full-Stack Developer | System Designer | AI-Driven Builder
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.35,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="d-flex flex-column flex-sm-row flex-wrap gap-3 mb-5"
            >
              <a
                href="#projects"
                className="btn d-inline-flex align-items-center justify-content-center gap-2"
                style={{
                  fontSize: "clamp(0.9rem, 2vw, 1.125rem)",
                  background:
                    "linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)",
                  minHeight: "44px",
                  padding: "12px 20px",
                }}
              >
                View Projects
                <ArrowRight size={18} />
              </a>
              <a
                href="/Zeeshan_Resume2026.pdf"
                download="Resume.pdf"
                className="btn d-inline-flex align-items-center justify-content-center gap-2"
                style={{
                  fontSize: "clamp(0.9rem, 2vw, 1.125rem)",
                  color: "#7c3aed",
                  borderColor: "#7c3aed",
                  border: "2px solid",
                  minHeight: "44px",
                  padding: "12px 20px",
                }}
              >
                <Download size={18} />
                Download Resume
              </a>
            </motion.div>
          </div>

          {/* Right content - Terminal with enhanced glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="col-12 col-lg-6 position-relative"
          >
            {/* Terminal background glow */}
            <div
              className="position-absolute rounded-circle"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "120%",
                height: "120%",
                background:
                  "radial-gradient(circle, rgba(124, 58, 237, 0.25) 0%, rgba(124, 58, 237, 0.1) 40%, transparent 70%)",
                filter: "blur(50px)",
                zIndex: -1,
              }}
            />
            <TerminalUI />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - hidden on mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="position-absolute bottom-0 start-50 translate-middle-x mb-4 d-none d-md-flex"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="d-flex justify-content-center rounded-pill border border-secondary"
          style={{ width: "24px", height: "40px", paddingTop: "8px" }}
        >
          <div
            className="rounded-pill bg-secondary"
            style={{ width: "4px", height: "8px" }}
          />
        </motion.div>
      </motion.div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
