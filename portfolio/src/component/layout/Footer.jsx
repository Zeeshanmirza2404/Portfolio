import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer
      className="py-4 border-top"
      style={{
        borderTopColor: "rgba(124, 58, 237, 0.15) !important",
        fontSize: "clamp(0.875rem, 1.8vw, 1rem)",
      }}
    >
      <div className="container-fluid px-3 px-md-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-3 text-secondary"
        >
          <p className="mb-0">
            © 2026 Zeeshan Mirza. Building scalable systems.
          </p>
          <p className="mb-0 d-flex align-items-center gap-2 flex-wrap justify-content-center justify-content-md-end">
            Designed & Built with
            <span className="text-secondary-emphasis fw-medium">precision</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
