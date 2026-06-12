"use client";
import { useRef } from "react";
import { motion } from "framer-motion";

const items = [
  "EMOTION",
  "PRESENCE",
  "LASTING MEMORY",
  "GENDERLESS BY DESIGN",
  "SOURCED FROM ITALY",
  "DUBAI BORN",
  "MORE THAN A SCENT",
  "A SIGNATURE",
];

export default function MarqueeTicker() {
  const trackRef = useRef<HTMLDivElement>(null);

  const setRate = (rate: number) => {
    const anims = trackRef.current?.getAnimations();
    anims?.forEach((a) => {
      a.playbackRate = rate;
    });
  };

  const doubled = [...items, ...items];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      onMouseEnter={() => setRate(0.2)}
      onMouseLeave={() => setRate(1)}
      style={{
        borderTop: "1px solid var(--color-border)",
        borderBottom: "1px solid var(--color-border)",
        overflow: "hidden",
        padding: "0.9rem 0",
        background: "var(--color-bg)",
        position: "relative",
        zIndex: 2,
      }}
    >
      <div ref={trackRef} className="marquee-track">
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              whiteSpace: "nowrap",
            }}
          >
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontSize: "0.8rem",
                fontWeight: 400,
                color: "var(--color-muted)",
                letterSpacing: "0.12em",
                padding: "0 1.25rem",
              }}
            >
              {item}
            </span>
            <span
              style={{
                color: "var(--color-accent)",
                fontSize: "0.3rem",
                opacity: 0.6,
                lineHeight: 1,
              }}
            >
              &#9679;
            </span>
          </span>
        ))}
      </div>
    </motion.div>
  );
}
