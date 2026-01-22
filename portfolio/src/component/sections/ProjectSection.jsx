import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ExternalLink,
  Github,
  Users,
  Car,
  Shield,
  Database,
  Layers,
} from "lucide-react";

const projects = [
  {
    title: "Volunteer Coordination Platform",
    subtitle: "Multi-Role Dashboard System",
    problem:
      "Organizations struggled to manage volunteers, events, and donations across multiple stakeholders with varying access levels.",
    solution:
      "Built a comprehensive platform with role-based dashboards for admins, organizers, and volunteers. Implemented secure JWT authentication and event management workflows.",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Bootstrap"],
    features: [
      "Role-based access control",
      "Event management system",
      "Donation tracking",
      "Volunteer scheduling",
    ],
    icon: Users,
    liveDemo: "#",
    sourceCode:
      "https://github.com/Zeeshanmirza2404/Volunteer-Coordination-Platform",
  },
  {
    title: "CampusRide",
    subtitle: "Community Ride-Sharing Platform",
    problem:
      "Students needed a reliable, safe way to share rides to campus while reducing costs and environmental impact.",
    solution:
      "Designed a scalable ride-sharing system with user verification, route matching, and real-time availability. Built for high traffic with efficient database queries.",
    stack: ["React", "Node.js", "Express", "MongoDB", "REST API"],
    features: [
      "User verification system",
      "Smart route matching",
      "Real-time availability",
      "Rating & review system",
    ],
    icon: Car,
    liveDemo: "#",
    sourceCode: "https://github.com/Zeeshanmirza2404/CampusRide",
  },
];

const ProjectSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      className="py-5 position-relative"
      style={{
        paddingTop: "clamp(4rem, 8vw, 8rem)",
        paddingBottom: "clamp(4rem, 8vw, 8rem)",
      }}
    >
      {/* Background accent */}
      <div
        className="position-absolute top-50 start-50 translate-middle d-none d-md-block"
        style={{ pointerEvents: "none" }}
      >
        <div
          className="rounded-circle"
          style={{
            width: "clamp(600px, 80vw, 1000px)",
            height: "clamp(600px, 80vw, 1000px)",
            background: "rgba(124, 58, 237, 0.05)",
            filter: "blur(100px)",
          }}
        />
      </div>

      <div
        className="container-fluid px-3 px-md-4 position-relative"
        style={{ zIndex: 10 }}
      >
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-5"
        >
          <h2
            className="fw-bold mb-3"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
          >
            Featured Projects
          </h2>
          <p
            className="text-secondary mx-auto"
            style={{
              maxWidth: "700px",
              fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
              color: "rgba(255, 255, 255, 0.65)",
            }}
          >
            Real-world platforms built with scalable architecture and
            production-ready code. Each project represents system-level thinking
            and engineering maturity.
          </p>
        </motion.div>

        <div className="d-flex flex-column gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="card bg-dark bg-opacity-50 border-secondary overflow-hidden"
              style={{
                backdropFilter: "blur(10px)",
                transition: "all 0.3s ease",
                borderRadius: "16px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow =
                  "0 24px 48px rgba(124, 58, 237, 0.2), 0 0 0 1px rgba(124, 58, 237, 0.3)";
                e.currentTarget.style.borderColor = "rgba(124, 58, 237, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
              }}
            >
              <div className="card-body p-3 p-md-4 p-lg-5">
                <div className="row g-4">
                  {/* Left - Project Info */}
                  <div className="col-12 col-lg-7">
                    <div className="d-flex align-items-start gap-3 mb-4">
                      <div
                        className="d-flex align-items-center justify-content-center rounded flex-shrink-0"
                        style={{
                          width: "clamp(48px, 10vw, 64px)",
                          height: "clamp(48px, 10vw, 64px)",
                          background: "rgba(124, 58, 237, 0.1)",
                          minWidth: "48px",
                          minHeight: "48px",
                        }}
                      >
                        <project.icon size={32} style={{ color: "#7c3aed" }} />
                      </div>
                      <div className="min-w-0">
                        <h3 className="h4 h-md-3 fw-bold mb-1">
                          {project.title}
                        </h3>
                        <p
                          className="text-secondary mb-0"
                          style={{ fontSize: "clamp(0.95rem, 2vw, 1.125rem)" }}
                        >
                          {project.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4
                        className="text-uppercase small fw-semibold text-secondary mb-2"
                        style={{
                          letterSpacing: "0.1em",
                          fontSize: "clamp(0.75rem, 1.5vw, 0.875rem)",
                        }}
                      >
                        The Problem
                      </h4>
                      <p
                        className="text-light opacity-75"
                        style={{ fontSize: "clamp(0.9rem, 2vw, 1rem)" }}
                      >
                        {project.problem}
                      </p>
                    </div>

                    <div className="mb-4">
                      <h4
                        className="text-uppercase small fw-semibold text-secondary mb-2"
                        style={{
                          letterSpacing: "0.1em",
                          fontSize: "clamp(0.75rem, 1.5vw, 0.875rem)",
                        }}
                      >
                        The Solution
                      </h4>
                      <p
                        className="text-light opacity-75"
                        style={{ fontSize: "clamp(0.9rem, 2vw, 1rem)" }}
                      >
                        {project.solution}
                      </p>
                    </div>

                    <div className="d-flex flex-wrap gap-2 mb-4">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="badge text-light fw-normal px-3 py-2"
                          style={{
                            background: "rgba(255, 255, 255, 0.05)",
                            border: "1px solid rgba(255, 255, 255, 0.1)",
                            borderRadius: "6px",
                            fontSize: "clamp(0.75rem, 1.5vw, 0.875rem)",
                            transition: "all 0.3s ease",
                            cursor: "default",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = "rgba(124, 58, 237, 0.2)";
                            e.currentTarget.style.borderColor = "rgba(124, 58, 237, 0.5)";
                            e.currentTarget.style.transform = "translateY(-2px)";
                            e.currentTarget.style.boxShadow = "0 4px 12px rgba(124, 58, 237, 0.15)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.boxShadow = "none";
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="d-flex gap-2 flex-column flex-sm-row">
                      <a
                        href={project.liveDemo}
                        className="btn d-inline-flex align-items-center justify-content-center gap-2 flex-grow-1"
                        style={{
                          transition: "all 0.3s ease",
                          fontSize: "clamp(0.9rem, 2vw, 1rem)",
                          background: "linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)",
                          minHeight: "44px",
                          border: "none",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "translateY(-2px)";
                          e.currentTarget.style.boxShadow = "0 10px 20px rgba(124, 58, 237, 0.4)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "translateY(0)";
                          e.currentTarget.style.boxShadow = "none";
                        }}
                      >
                        <ExternalLink size={18} />
                        <span>Live Demo</span>
                      </a>
                      <a
                        href={project.sourceCode}
                        className="btn btn-outline-light d-inline-flex align-items-center justify-content-center gap-2 flex-grow-1"
                        style={{
                          transition: "all 0.3s ease",
                          fontSize: "clamp(0.9rem, 2vw, 1rem)",
                          minHeight: "44px",
                          border: "1px solid rgba(255, 255, 255, 0.2)",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                          e.currentTarget.style.transform = "translateY(-2px)";
                          e.currentTarget.style.borderColor = "#fff";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "transparent";
                          e.currentTarget.style.transform = "translateY(0)";
                          e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
                        }}
                      >
                        <Github size={18} />
                        <span>Source Code</span>
                      </a>
                    </div>
                  </div>

                  {/* Right - Features */}
                  <div className="col-12 col-lg-5">
                    <div className="bg-secondary bg-opacity-10 rounded p-4 h-auto h-lg-100">
                      <h4
                        className="text-uppercase small fw-semibold text-secondary mb-4"
                        style={{
                          letterSpacing: "0.1em",
                          fontSize: "clamp(0.75rem, 1.5vw, 0.875rem)",
                        }}
                      >
                        Key Features
                      </h4>
                      <ul className="list-unstyled mb-4">
                        {project.features.map((feature, i) => (
                          <li
                            key={i}
                            className="d-flex align-items-start gap-3 mb-3"
                          >
                            <span
                              className="rounded-circle flex-shrink-0"
                              style={{
                                width: "6px",
                                height: "6px",
                                backgroundColor: "#7c3aed",
                                marginTop: "8px",
                              }}
                            />
                            <span
                              className="text-light opacity-75"
                              style={{ fontSize: "clamp(0.9rem, 2vw, 1rem)" }}
                            >
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <hr className="border-secondary opacity-25" />

                      <div className="d-flex gap-2 flex-wrap small text-secondary">
                        <span className="d-flex align-items-center border border-secondary rounded-pill px-2 py-1 gap-2">
                          <Shield size={16} />
                          <span className="d-none d-sm-inline">Auth</span>
                        </span>
                        <span className="d-flex align-items-center border border-secondary rounded-pill px-2 py-1 gap-2">
                          <Database size={16} />
                          <span className="d-none d-sm-inline">Database</span>
                        </span>
                        <span className="d-flex align-items-center border border-secondary rounded-pill px-2 py-1 gap-2">
                          <Layers size={16} />
                          <span className="d-none d-sm-inline">REST API</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
