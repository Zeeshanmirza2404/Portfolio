import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

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

  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isNavOpen]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed-top transition-all w-100 ${
        isScrolled || isNavOpen
          ? "bg-dark bg-opacity-75 backdrop-blur border-bottom"
          : ""
      }`}
      style={{
        zIndex: 1050,
        borderBottomColor: isScrolled
          ? "rgba(124, 58, 237, 0.2)"
          : "transparent",
        transition: "all 0.3s ease",
      }}
    >
    <nav className="navbar navbar-expand-lg navbar-dark w-100 py-3 py-lg-4">
        <div className="container-fluid px-4 px-lg-5">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="d-flex align-items-center gap-2"
          >
            <span
              style={{
                color: "#a855f7",
                textShadow: "0 0 10px rgba(124, 58, 237, 0.5)",
                fontSize: "1.25rem",
              }}
            >
              ❯
            </span>
            <a
              href="#"
              className="navbar-brand fw-bold fs-4 fs-lg-3 m-0"
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
            style={{ minHeight: "44px", minWidth: "44px" }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}
            id="navbarNav"
            style={{
              transition: "all 0.3s ease",
            }}
          >
            <ul className="navbar-nav ms-auto align-items-center gap-3 gap-lg-4 mt-lg-0 mt-4 pb-4 pb-lg-0">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.href}
                  className="nav-item w-100 w-lg-auto"
                  initial={{ opacity: 0, y: -10 }}
                  animate={
                    isNavOpen ? { opacity: 1, y: 0 } : { opacity: 1, y: -10 }
                  }
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={item.href}
                    className="nav-link text-secondary-emphasis d-block mt-3"
                    onClick={() => setIsNavOpen(false)}
                    style={{
                      transition: "color 0.25s ease",
                      position: "relative",
                      minHeight: "44px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                className="nav-item w-100 w-lg-auto"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={
                  isNavOpen
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 1, scale: 1 }
                }
                transition={{ delay: 0.4 }}
              >
                <a
                  href="/Zeeshan_Resume2026.pdf"
                  download="Resume.pdf"
                  className="btn w-100 w-lg-auto d-flex align-items-center gap-2"
                  style={{
                    background: "linear-gradient(135deg, #7c3aed, #a855f7)",
                    minHeight: "44px",
                  }}
                  onClick={() => setIsNavOpen(false)}
                >
                  <Download size={18} />
                  Resume
                </a>
              </motion.li>
            </ul>
          </div>
        </div>
      </nav>
    </motion.header>
  );
};

export default Navigation;
