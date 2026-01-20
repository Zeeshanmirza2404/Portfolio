import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Server, Boxes, Zap } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Engineering",
    icon: Code2,
    skills: [
      "React & Component Architecture",
      "Protected Routes & Role-Based UI",
      "Responsive Design Systems",
      "State Management (Context, Redux)",
      "Modern CSS & Bootstrap",
    ],
  },
  {
    title: "Backend Engineering",
    icon: Server,
    skills: [
      "Node.js & Express APIs",
      "JWT Authentication",
      "Role-Based Access Control",
      "RESTful API Design",
      "Database Design (MongoDB)",
    ],
  },
  {
    title: "System Architecture",
    icon: Boxes,
    skills: [
      "Multi-Dashboard Architecture",
      "Scalable Project Structure",
      "API-Driven Development",
      "Security Best Practices",
      "Performance Optimization",
    ],
  },
  {
    title: "Developer Tools",
    icon: Zap,
    skills: [
      "Git Version Control",
      "VS Code & DevTools",
      "Postman API Testing",
      "npm & Package Management",
      "CI/CD Workflows",
    ],
  },
];

const SkillSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      className="py-5 position-relative"
      style={{ paddingTop: "8rem", paddingBottom: "8rem", background: "rgba(255,255,255,0.02)" }}
    >
      <div className="container mt-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-5"
        >
          <h2 className="display-2 fw-bold mb-3" style={{ fontSize: "4rem" }}>Engineering Skills</h2>
          <p className="text-secondary mx-auto" style={{ maxWidth: "700px", fontSize: "1.25rem", color: "rgba(255, 255, 255, 0.65)" }}>
            Organized by real engineering domains—not just a list of logos.
            Every skill is applied in production projects.
          </p>
        </motion.div>

        <div className="row g-4">
          {skillCategories.map((category, index) => (
            <div key={category.title} className="col-md-6 col-lg-3">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card bg-dark bg-opacity-50 border-secondary h-100 p-4"
                style={{
                  backdropFilter: "blur(10px)",
                  transition: "all 0.3s ease",
                  borderRadius: "12px"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(124, 58, 237, 0.25)";
                  e.currentTarget.style.borderColor = "rgba(124, 58, 237, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                }}
              >
                <div className="d-flex align-items-center gap-3 mb-4">
                  <div
                    className="d-flex align-items-center justify-content-center rounded"
                    style={{
                      width: "52px",
                      height: "52px",
                      background: "linear-gradient(135deg, rgba(124, 58, 237, 0.15), rgba(124, 58, 237, 0.05))"
                    }}
                  >
                    <category.icon size={26} style={{color: '#7c3aed'}}/>
                  </div>
                  <h3 className="h6 fw-semibold mb-0" style={{ fontSize: "1.125rem" }}>{category.title}</h3>
                </div>

                <ul className="list-unstyled mb-0">
                  {category.skills.map((skill, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: index * 0.1 + i * 0.05 }}
                      className="d-flex align-items-start gap-2 mb-2 small text-secondary"
                      style={{
                        transition: "all 0.2s ease",
                        padding: "4px 0",
                        cursor: "default"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "rgba(168, 85, 247, 0.9)";
                        e.currentTarget.style.transform = "translateX(4px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "";
                        e.currentTarget.style.transform = "translateX(0)";
                      }}
                    >
                      <span
                        className="rounded-circle mt-2 flex-shrink-0"
                        style={{ width: "4px", height: "4px", backgroundColor: '#7c3aed' }}
                      />
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
