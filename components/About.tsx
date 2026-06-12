"use client";
import { motion } from "framer-motion";

const blocks = [
  {
    number: "01",
    text: "Every fragrance starts with a feeling. Something quiet but certain. Something recognizable to you before you can name it. We build around that. Not around trends, not around what sells - around the feeling itself. Something that stays long after you've left the room.",
  },
  {
    number: "02",
    text: "Our oils are sourced from Italy, crafted with experienced perfumers who understand depth, structure, and longevity. Each scent is numbered, not named. That choice is deliberate - shifting attention away from expectation and toward something more honest. You smell it. You decide what it means.",
  },
  {
    number: "03",
    text: "Genderless by design. Not as a trend, but as a belief. Fragrance should belong to the person wearing it - not to a category, not to a demographic. Built for people who want it to feel like a natural extension of who they are. Not a statement. Not a performance. Just scent.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "9rem 0 8rem",
        background: "var(--color-bg)",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      {/* Ambient orb */}
      <div
        style={{
          position: "absolute",
          right: "-120px",
          top: "40%",
          transform: "translateY(-50%)",
          pointerEvents: "none",
        }}
      >
        <motion.div
          animate={{ x: [0, 20, -12, 0], y: [0, -30, 15, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(200,169,110,0.06) 0%, transparent 70%)",
            filter: "blur(80px)",
            willChange: "transform",
            backfaceVisibility: "hidden",
          }}
        />
      </div>

      <div className="section-container" style={{ position: "relative", zIndex: 1 }}>

        {/* Editorial headline block */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            maxWidth: "820px",
            marginBottom: "5rem",
            willChange: "transform",
            backfaceVisibility: "hidden",
          }}
        >
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.64rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--color-accent)",
              marginBottom: "1.75rem",
            }}
          >
            About
          </p>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2.8rem, 6vw, 5rem)",
              fontWeight: 400,
              lineHeight: 1.1,
              color: "var(--color-text)",
              letterSpacing: "-0.01em",
            }}
          >
            More than a perfume.
            <br />
            <em style={{ fontStyle: "italic", color: "var(--color-accent)" }}>
              A signature.
            </em>
          </h2>
        </motion.div>

        {/* Two-column: text blocks left, video right */}
        <div
          style={{ display: "grid", gap: "4rem", alignItems: "start" }}
          className="grid-cols-1 md:grid-cols-2"
        >
          {/* Left column: three editorial text blocks */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            {blocks.map((block, i) => (
              <motion.div
                key={block.number}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                style={{
                  display: "grid",
                  gridTemplateColumns: "4rem 1fr",
                  gap: "2.5rem",
                  padding: "2rem 0",
                  borderTop: "1px solid var(--color-border)",
                  willChange: "transform",
                  backfaceVisibility: "hidden",
                  alignItems: "start",
                }}
              >
                {/* Number */}
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.05rem",
                    fontWeight: 300,
                    color: "var(--color-accent)",
                    letterSpacing: "0.12em",
                    paddingTop: "0.35rem",
                  }}
                >
                  {block.number}
                </div>

                {/* Text */}
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "1.05rem",
                    fontWeight: 300,
                    lineHeight: 1.85,
                    color: "var(--color-text)",
                  }}
                >
                  {block.text}
                </p>
              </motion.div>
            ))}

            {/* Bottom border */}
            <div style={{ borderTop: "1px solid var(--color-border)" }} />
          </div>

          {/* Right column: video — shifted slightly right within column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25 }}
            style={{
              borderRadius: "12px",
              overflow: "hidden",
              willChange: "transform",
              backfaceVisibility: "hidden",
              marginLeft: "8%",
            }}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
            >
              <source src="/videos/clip.mp4" type="video/mp4" />
            </video>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
