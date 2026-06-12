"use client";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Browse the collection by scent family. Each number tells you nothing about the name — everything about the feeling.",
  },
  {
    number: "02",
    title: "Order",
    description:
      "Available in store and via WhatsApp. Online ordering coming soon.",
  },
  {
    number: "03",
    title: "Wear",
    description:
      "Your scent becomes your signature. The kind people remember you by.",
  },
];

export default function Process() {
  return (
    <section
      style={{
        padding: "6rem 0",
        background: "var(--color-bg)",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: "4.5rem", willChange: "transform", backfaceVisibility: "hidden" }}
        >
          <h2 className="section-title">How it works</h2>
          <span className="accent-line" />
        </motion.div>

        {/* Desktop: steps with full-width line behind numbers */}
        <div className="hidden md:block" style={{ position: "relative" }}>

          {/* Single horizontal gradient line sitting behind all three steps.
              top: 2.5rem = midpoint of the 5rem number (lineHeight 1 → 5rem tall → center at 2.5rem). */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: "2.5rem",
              left: 0,
              right: 0,
              height: "2px",
              background: "linear-gradient(to right, #C8A96E, #E8D9BC)",
              zIndex: 0,
            }}
          />

          <div style={{ display: "flex", alignItems: "flex-start" }}>
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.18 }}
                whileHover={{ y: -12, transition: { duration: 0.25, ease: "easeOut" as const } }}
                style={{
                  flex: 1,
                  position: "relative",
                  zIndex: 1,
                  willChange: "transform",
                  backfaceVisibility: "hidden",
                }}
              >
                {/* Number: cream background so the line passes visually behind it */}
                <div
                  style={{
                    display: "inline-block",
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "5rem",
                    fontWeight: 300,
                    lineHeight: 1,
                    color: "var(--color-accent)",
                    marginBottom: "1.5rem",
                    letterSpacing: "-0.02em",
                    position: "relative",
                    zIndex: 2,
                    background: "var(--color-bg)",
                    padding: "0 1rem 0 0.25rem",
                  }}
                >
                  {step.number}
                </div>

                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.5rem",
                    fontWeight: 500,
                    color: "var(--color-text)",
                    marginBottom: "0.75rem",
                    letterSpacing: "0.02em",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.88rem",
                    lineHeight: 1.75,
                    color: "var(--color-muted)",
                    fontWeight: 300,
                    maxWidth: "260px",
                  }}
                >
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: stacked */}
        <div className="flex flex-col gap-10 md:hidden">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              style={{ willChange: "transform", backfaceVisibility: "hidden" }}
            >
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "4rem",
                  fontWeight: 300,
                  lineHeight: 1,
                  color: "var(--color-accent)",
                  marginBottom: "1rem",
                }}
              >
                {step.number}
              </div>
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.4rem",
                  fontWeight: 500,
                  color: "var(--color-text)",
                  marginBottom: "0.6rem",
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.88rem",
                  lineHeight: 1.75,
                  color: "var(--color-muted)",
                  fontWeight: 300,
                }}
              >
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
