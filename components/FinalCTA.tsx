"use client";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function FinalCTA() {
  return (
    <section
      style={{
        position: "relative",
        padding: "8rem 0",
        background: "var(--color-bg)",
        overflow: "hidden",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      {/* Ambient orbs */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <motion.div
          animate={{ x: [0, 50, -35, 0], y: [0, -60, 30, 0] }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: "800px",
            height: "800px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(200,169,110,0.12) 0%, transparent 70%)",
            filter: "blur(90px)",
            willChange: "transform",
            backfaceVisibility: "hidden",
          }}
        />
      </div>
      <div
        className="hidden md:block"
        style={{
          position: "absolute",
          right: "10%",
          top: "20%",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <motion.div
          animate={{ x: [0, -30, 20, 0], y: [0, 45, -25, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(200,169,110,0.08) 0%, transparent 70%)",
            filter: "blur(70px)",
            willChange: "transform",
            backfaceVisibility: "hidden",
          }}
        />
      </div>

      {/* Content */}
      <div className="section-container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ willChange: "transform", backfaceVisibility: "hidden" }}
        >
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2.75rem, 7vw, 6rem)",
              fontWeight: 400,
              lineHeight: 1.08,
              color: "var(--color-text)",
              marginBottom: "1.5rem",
            }}
          >
            Your signature
            <br />
            starts here.
          </h2>

          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.95rem",
              lineHeight: 1.75,
              color: "var(--color-muted)",
              maxWidth: "440px",
              margin: "0 auto 2.5rem",
              fontWeight: 300,
            }}
          >
            Available in store and via WhatsApp. Online ordering coming soon.
          </p>

          <a
            href="#"
            className="btn-accent"
            style={{ fontSize: "0.78rem", padding: "1rem 2.5rem" }}
          >
            <MessageCircle size={15} />
            Order via WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
