"use client";
import { motion } from "framer-motion";

export default function VideoSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      style={{
        padding: "5rem 1.5rem",
        background: "var(--color-bg)",
        display: "flex",
        justifyContent: "center",
        borderBottom: "1px solid var(--color-border)",
        willChange: "transform",
        backfaceVisibility: "hidden",
      }}
    >
      <div style={{ width: "100%", maxWidth: "400px" }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            borderRadius: "2px",
          }}
        >
          <source src="/videos/clip.mp4" type="video/mp4" />
        </video>
      </div>
    </motion.section>
  );
}
