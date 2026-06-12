"use client";
import { motion } from "framer-motion";
export default function PackagingSection() {
  return (
    <section
      style={{
        padding: "5rem 40px",
        background: "var(--color-bg)",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.85 }}
        style={{
          width: "100%",
          willChange: "transform",
          backfaceVisibility: "hidden",
        }}
      >
        <img
          src="/images/packaging.jpg?v=2"
          alt="Five Scents of Legends packaging boxes with color-coded inserts"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            borderRadius: "2px",
            boxShadow: "0 8px 40px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.06)",
          }}
        />
      </motion.div>
    </section>
  );
}
