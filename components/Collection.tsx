"use client";
import { motion } from "framer-motion";

const fragrances = [
  {
    number: "101",
    family: "Fresh",
    accent: "#A8C9C4",
    wash: "rgba(168,201,196,0.22)",
    description: "Light. Airy. Like the first hour of the morning.",
  },
  {
    number: "202",
    family: "Woody",
    accent: "#7A9E7E",
    wash: "rgba(122,158,126,0.18)",
    description: "Grounded. Warm. The kind that stays close to skin.",
  },
  {
    number: "303",
    family: "Floral",
    accent: "#E8C4B8",
    wash: "rgba(232,196,184,0.28)",
    description: "Soft presence. The scent people lean in for.",
  },
  {
    number: "404",
    family: "Amber",
    accent: "#C8A96E",
    wash: "rgba(200,169,110,0.20)",
    description: "Unhurried. Rich. Lingers long after you leave.",
  },
  {
    number: "505",
    family: "Musk",
    accent: "#C8C4BE",
    wash: "rgba(232,228,222,0.40)",
    description: "Clean. Effortless. Feels like second skin.",
  },
];

type Fragrance = (typeof fragrances)[0];

function FragranceCard({ frag, index }: { frag: Fragrance; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{ willChange: "transform", backfaceVisibility: "hidden" }}
    >
      <motion.div
        initial="rest"
        whileHover="hover"
        animate="rest"
        className="frag-card"
        style={{
          position: "relative",
          overflow: "hidden",
          background: "var(--color-card)",
          border: "1px solid var(--color-border)",
          borderRadius: "2px",
          padding: "0",
          minHeight: "320px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Accent color wash — top fade */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "55%",
            background: `linear-gradient(to bottom, ${frag.wash} 0%, transparent 100%)`,
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        {/* Decorative large number */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: "-0.75rem",
            right: "0.5rem",
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "9rem",
            fontWeight: 300,
            lineHeight: 1,
            color: frag.accent,
            opacity: 0.12,
            userSelect: "none",
            pointerEvents: "none",
            letterSpacing: "-0.05em",
            zIndex: 0,
          }}
        >
          {frag.number}
        </div>

        {/* Card content */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            flex: 1,
            display: "flex",
            flexDirection: "column",
            padding: "2.25rem 2.25rem 3.5rem",
          }}
        >
          {/* Number label */}
          <div
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.6rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--color-muted)",
              marginBottom: "0.5rem",
            }}
          >
            No. {frag.number}
          </div>

          {/* Scent family in accent color */}
          <div
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.68rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: frag.accent,
              marginBottom: "auto",
              paddingBottom: "1.25rem",
              fontVariant: "small-caps",
            }}
          >
            {frag.family}
          </div>

          {/* Description */}
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: "1.2rem",
              fontWeight: 400,
              color: "var(--color-text)",
              lineHeight: 1.55,
              marginTop: "auto",
            }}
          >
            {frag.description}
          </p>
        </div>

        {/* Pre-Order button — slides up on hover */}
        <motion.div
          variants={{
            rest: { y: "100%" },
            hover: { y: "0%" },
          }}
          transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            willChange: "transform",
            backfaceVisibility: "hidden",
          }}
        >
          <a
            href="#"
            style={{
              display: "block",
              background: frag.accent,
              color: "var(--color-text)",
              textAlign: "center",
              padding: "0.875rem",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.7rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              textDecoration: "none",
              fontWeight: 500,
              borderRadius: 0,
            }}
          >
            Order via WhatsApp
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function Collection() {
  return (
    <section
      id="collection"
      style={{
        padding: "6rem 0",
        background: "var(--color-bg)",
      }}
    >
      <div className="section-container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: "3.5rem", willChange: "transform", backfaceVisibility: "hidden" }}
        >
          <h2 className="section-title">The Collection</h2>
          <span className="accent-line" />
        </motion.div>

        {/* 3-col desktop / 2-col tablet / 1-col mobile */}
        <div
          style={{ display: "grid", gap: "1.25rem" }}
          className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {fragrances.map((frag, i) => (
            <FragranceCard key={frag.number} frag={frag} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
