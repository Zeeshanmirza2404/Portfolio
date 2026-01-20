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
    liveDemo: "https://volunteer-coordination-platform.vercel.app/",
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
    liveDemo: "https://campusride.vercel.app/",
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
      style={{ paddingTop: "8rem", paddingBottom: "8rem" }}
    >
      {/* Background accent */}
      <div
        className="position-absolute top-50 start-50 translate-middle"
        style={{ pointerEvents: "none" }}
      >
        <div
          className="rounded-circle"
          style={{
            width: "1000px",
            height: "1000px",
            background: "rgba(124, 58, 237, 0.05)",
            filter: "blur(100px)",
          }}
        />
      </div>

      <div className="container position-relative mt-4" style={{ zIndex: 10 }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-5"
        >
          <h2 className="display-2 fw-bold mb-3" style={{ fontSize: "4rem" }}>
            Featured Projects
          </h2>
          <p
            className="text-secondary mx-auto"
            style={{
              maxWidth: "700px",
              fontSize: "1.25rem",
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
              <div className="card-body p-4 p-lg-5">
                <div className="row g-4">
                  {/* Left - Project Info */}
                  <div className="col-lg-7">
                    <div className="d-flex align-items-start gap-3 mb-4">
                      <div
                        className="d-flex align-items-center justify-content-center rounded flex-shrink-0"
                        style={{
                          width: "64px",
                          height: "64px",
                          background: "rgba(124, 58, 237, 0.1)",
                        }}
                      >
                        <project.icon size={32} style={{ color: "#7c3aed" }} />
                      </div>
                      <div>
                        <h3 className="h3 fw-bold mb-1">{project.title}</h3>
                        <p className="text-secondary fs-5 mb-0">
                          {project.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4
                        className="text-uppercase small fw-semibold text-secondary mb-2"
                        style={{ letterSpacing: "0.1em" }}
                      >
                        The Problem
                      </h4>
                      <p className="text-light fs-6 opacity-75">
                        {project.problem}
                      </p>
                    </div>

                    <div className="mb-4">
                      <h4
                        className="text-uppercase small fw-semibold text-secondary mb-2"
                        style={{ letterSpacing: "0.1em" }}
                      >
                        The Solution
                      </h4>
                      <p className="text-light fs-6 opacity-75">
                        {project.solution}
                      </p>
                    </div>

                    <div className="d-flex flex-wrap gap-2 mb-4">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="badge bg-secondary bg-opacity-50 text-light fw-normal px-3 py-2"
                          style={{
                            borderRadius: "6px",
                            fontSize: "0.875rem",
                            transition: "all 0.2s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background =
                              "rgba(124, 58, 237, 0.2)";
                            e.currentTarget.style.transform =
                              "translateY(-2px)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background =
                              "rgba(255, 255, 255, 0.1)";
                            e.currentTarget.style.transform = "translateY(0)";
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="d-flex gap-3">
                      <a
                        href="#"
                        className="btn d-inline-flex align-items-center gap-2 px-4 py-2"
                        style={{
                          transition: "all 0.25s ease",
                          fontSize: "1rem",
                          backgroundColor: "#7c3aed",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "scale(1.1)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "scale(1)";
                        }}
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                      <a
                        href={project.sourceCode}
                        className="btn btn-outline-light d-inline-flex align-items-center gap-2 px-4 py-2"
                        style={{
                          transition: "all 0.25s ease",
                          fontSize: "1rem",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "scale(1.1)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "scale(1)";
                        }}
                      >
                        <Github size={18} />
                        Source Code
                      </a>
                    </div>
                  </div>

                  {/* Right - Features */}
                  <div className="col-lg-5">
                    <div className="bg-secondary bg-opacity-10 rounded p-4 h-100">
                      <h4
                        className="text-uppercase small fw-semibold text-secondary mb-4"
                        style={{ letterSpacing: "0.1em" }}
                      >
                        Key Features
                      </h4>
                      <ul className="list-unstyled mb-4">
                        {project.features.map((feature, i) => (
                          <li
                            key={i}
                            className="d-flex align-items-center gap-3 mb-3"
                          >
                            <span
                              className="rounded-circle flex-shrink-0"
                              style={{
                                width: "6px",
                                height: "6px",
                                backgroundColor: "#7c3aed",
                              }}
                            />
                            <span className="text-light opacity-75">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <hr className="border-secondary opacity-25" />

                      <div className="d-flex gap-4 small text-secondary">
                        <span className="d-flex align-items-center border border-secondary rounded-pill px-2 py-1 gap-2">
                          <Shield size={16} />
                          Auth
                        </span>
                        <span className="d-flex align-items-center border border-secondary rounded-pill px-2 py-1 gap-2">
                          <Database size={16} />
                          Database
                        </span>
                        <span className="d-flex align-items-center border border-secondary rounded-pill px-2 py-1 gap-2">
                          <Layers size={16} />
                          REST API
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
