import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed-top transition-all ${
        isScrolled ? "bg-dark bg-opacity-75 backdrop-blur border-bottom" : ""
      }`}
      style={{
        zIndex: 1050,
        borderBottomColor: isScrolled
          ? "rgba(124, 58, 237, 0.2)"
          : "transparent",
        transition: "all 0.3s ease",
      }}
    >
      <nav className="navbar navbar-expand-md navbar-dark container py-3">
        
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="d-flex align-items-center fs-4 gap-2"
          >
            <span style={{ color: "#a855f7", textShadow: "0 0 10px rgba(124, 58, 237, 0.5)" }}>❯</span>
            <a
          href="#"
          className="navbar-brand fw-bold fs-4"
          style={{
            background: "linear-gradient(135deg, #7c3aed, #a855f7)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            transition: "all 0.3s ease",
            animation: "blink 1s step-end infinite",
          }}
        >
          _ZM
        </a>
          </motion.div>

        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={() => setIsNavOpen(!isNavOpen)}
          aria-controls="navbarNav"
          aria-expanded={isNavOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto align-items-center gap-3">
            {navItems.map((item, index) => (
              <motion.li
                key={item.href}
                className="nav-item"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <a
                  href={item.href}
                  className="nav-link text-secondary-emphasis"
                  onClick={() => setIsNavOpen(false)}
                  style={{
                    transition: "color 0.25s ease",
                    position: "relative",
                  }}
                >
                  {item.label}
                </a>
              </motion.li>
            ))}
            <motion.li
              className="nav-item"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              <a
                href="/Zeeshan_Resume2026.pdf"
                download="Resume.pdf"
                className="btn fs-6 px-4"
                style={{
                  background: "linear-gradient(135deg, #7c3aed, #a855f7)",
                }}
              >
                Resume
              </a>
            </motion.li>
          </ul>
        </div>
      </nav>
    </motion.header>
  );
};

export default Navigation;
