"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, Camera } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function ContactModal({ open, onClose }: Props) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop — covers full screen */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={onClose}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(26,24,20,0.45)",
              backdropFilter: "blur(4px)",
              WebkitBackdropFilter: "blur(4px)",
              zIndex: 9100,
            }}
          />

          {/* Modal — perfectly centered via Framer Motion x/y */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.26, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              x: "-50%",
              y: "-50%",
              zIndex: 9200,
              background: "var(--color-bg)",
              border: "1px solid var(--color-border)",
              borderRadius: "16px",
              padding: "2.5rem 2.25rem",
              width: "min(92vw, 380px)",
            }}
          >
            {/* Close */}
            <button
              onClick={onClose}
              aria-label="Close"
              style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "var(--color-muted)",
                padding: "0.25rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--color-text)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--color-muted)")
              }
            >
              <X size={18} />
            </button>

            {/* Heading */}
            <div style={{ marginBottom: "2rem" }}>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.62rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "var(--color-accent)",
                  marginBottom: "0.6rem",
                }}
              >
                Get in touch
              </p>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.85rem",
                  fontWeight: 400,
                  color: "var(--color-text)",
                  lineHeight: 1.2,
                }}
              >
                Reach us directly.
              </h2>
            </div>

            {/* Buttons */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              <a
                href="#"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.875rem",
                  padding: "1rem 1.25rem",
                  border: "1px solid var(--color-border)",
                  borderRadius: "8px",
                  textDecoration: "none",
                  color: "var(--color-text)",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.88rem",
                  letterSpacing: "0.06em",
                  background: "var(--color-card)",
                  transition: "border-color 0.2s, background 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-accent)";
                  e.currentTarget.style.background = "var(--color-bg)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-border)";
                  e.currentTarget.style.background = "var(--color-card)";
                }}
              >
                <MessageCircle size={18} style={{ color: "var(--color-accent)", flexShrink: 0 }} />
                <span>WhatsApp</span>
              </a>

              <a
                href="#"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.875rem",
                  padding: "1rem 1.25rem",
                  border: "1px solid var(--color-border)",
                  borderRadius: "8px",
                  textDecoration: "none",
                  color: "var(--color-text)",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.88rem",
                  letterSpacing: "0.06em",
                  background: "var(--color-card)",
                  transition: "border-color 0.2s, background 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-accent)";
                  e.currentTarget.style.background = "var(--color-bg)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-border)";
                  e.currentTarget.style.background = "var(--color-card)";
                }}
              >
                <Camera size={18} style={{ color: "var(--color-accent)", flexShrink: 0 }} />
                <span>Instagram</span>
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
