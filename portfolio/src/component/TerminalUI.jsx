import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const commands = [
  { text: "npm install zeeshan-mirza", delay: 0 },
  { text: "Building Projects...", delay: 1.5 },
  { text: "Deploying Projects...", delay: 3 },
  { text: "Ready for production 🚀", delay: 4.5 },
];

const TerminalUI = () => {
  const [visibleLines, setVisibleLines] = useState([]);

  useEffect(() => {
    commands.forEach((cmd, index) => {
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, index]);
      }, cmd.delay * 1000);
    });
  }, []);

  return (
    <motion.div
      className="card bg-dark border overflow-hidden position-relative"
      style={{
        backdropFilter: "blur(20px)",
        background: "rgba(20, 20, 30, 0.8)",
        boxShadow: `
          0 0 80px rgba(124, 58, 237, 0.5),
          0 20px 60px rgba(0, 0, 0, 0.6),
          0 0 0 1px rgba(124, 58, 237, 0.3),
          inset 0 0 0 1px rgba(255, 255, 255, 0.05)
        `,
        border: "1px solid rgba(124, 58, 237, 0.3)",
        borderRadius: "12px",
        transition: "all 0.3s ease",
        maxWidth: "100%",
        overflowX: "auto",
      }}
      whileHover={{
        y: -4,
        boxShadow: `
          0 0 100px rgba(124, 58, 237, 0.6),
          0 24px 70px rgba(0, 0, 0, 0.7),
          0 0 0 1px rgba(124, 58, 237, 0.4),
          inset 0 0 0 1px rgba(255, 255, 255, 0.08)
        `,
      }}
    >
      {/* Terminal header */}
      <div
        className="d-flex align-items-center gap-2 px-3 py-2 border-bottom flex-wrap"
        style={{
          background: "rgba(255,255,255,0.03)",
          borderBottomColor: "rgba(124, 58, 237, 0.2) !important",
          minHeight: "44px",
        }}
      >
        <div className="d-flex gap-2 flex-shrink-0">
          <span
            className="rounded-circle"
            style={{
              width: "12px",
              height: "12px",
              background: "rgba(239, 68, 68, 0.9)",
              flexShrink: 0,
            }}
          />
          <span
            className="rounded-circle"
            style={{
              width: "12px",
              height: "12px",
              background: "rgba(234, 179, 8, 0.9)",
              flexShrink: 0,
            }}
          />
          <span
            className="rounded-circle"
            style={{
              width: "12px",
              height: "12px",
              background: "rgba(34, 197, 94, 0.9)",
              flexShrink: 0,
            }}
          />
        </div>
        <span
          className="small text-secondary ms-2"
          style={{
            fontFamily: "var(--bs-font-monospace)",
            opacity: 0.7,
            fontSize: "clamp(0.75rem, 1.5vw, 0.875rem)",
          }}
        >
          terminal — zsh
        </span>
      </div>

      {/* Terminal body */}
      <div
        className="p-3 p-md-4"
        style={{
          fontFamily: "var(--bs-font-monospace)",
          fontSize: "clamp(12px, 1.5vw, 14px)",
          minHeight: "200px",
          background: "rgba(0,0,0,0.4)",
          overflowX: "auto",
        }}
      >
        {commands.map((cmd, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={
              visibleLines.includes(index)
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: -10 }
            }
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="d-flex align-items-start gap-2 mb-2 word-break"
            style={{ minHeight: "24px" }}
          >
            <span
              style={{
                color: "#a855f7",
                textShadow: "0 0 10px rgba(124, 58, 237, 0.5)",
                flexShrink: 0,
              }}
            >
              ❯
            </span>
            <span
              className={
                index === commands.length - 1 ? "text-success" : "text-light"
              }
              style={{
                textShadow:
                  index === commands.length - 1
                    ? "0 0 10px rgba(34, 197, 94, 0.4)"
                    : "none",
                overflow: "auto",
                wordBreak: "break-word",
              }}
            >
              {cmd.text}
            </span>
          </motion.div>
        ))}

        {/* Cursor */}
        {visibleLines.length >= 4 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4.5 }}
            className="d-flex align-items-center gap-2"
            style={{ minHeight: "24px" }}
          >
            <span
              style={{
                color: "#a855f7",
                textShadow: "0 0 10px rgba(124, 58, 237, 0.5)",
                flexShrink: 0,
              }}
            >
              ❯
            </span>
            <span
              style={{
                color: "#a855f7",
                background: "linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)",
                width: "8px",
                height: "20px",
                animation: "blink 1s step-end infinite",
                flexShrink: 0,
              }}
            />
          </motion.div>
        )}
      </div>

      <style>{`
        @keyframes blink {
          50% { opacity: 0; }
        }
      `}</style>
    </motion.div>
  );
};

export default TerminalUI;
