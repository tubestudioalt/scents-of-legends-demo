"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqItems = [
  {
    question: "Are the fragrances unisex?",
    answer:
      "Every scent in our collection is genderless by design - built for self-expression, not labels.",
  },
  {
    question: "Where are the oils sourced?",
    answer:
      "Our fragrance oils are sourced from Italy and developed alongside experienced perfumers who understand depth, structure, and longevity.",
  },
  {
    question: "Why are fragrances numbered instead of named?",
    answer:
      "Names carry expectations. Numbers don't. We want you to experience the scent first - without being told what to feel.",
  },
  {
    question: "How do I order?",
    answer:
      "You can order directly via WhatsApp at +971 50 252 1021 or wait for our online store to go live. Pre-orders are open now.",
  },
  {
    question: "Where are you located?",
    answer:
      "We're based in Dubai. Walk-ins welcome Tuesday through Saturday, 12-10 PM. Closed Sundays.",
  },
  {
    question: "What's the price range?",
    answer:
      "Pricing will be announced at launch. Join the pre-order list for early access and first pricing.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="contact"
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
          style={{ marginBottom: "3.5rem", willChange: "transform", backfaceVisibility: "hidden" }}
        >
          <h2 className="section-title">Questions</h2>
          <span className="accent-line" />
        </motion.div>

        <div style={{ maxWidth: "720px" }}>
          {faqItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{
                borderBottom: "1px solid var(--color-border)",
                willChange: "transform",
                backfaceVisibility: "hidden",
              }}
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === i ? null : i)
                }
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  padding: "1.5rem 0",
                  background: "none",
                  border: "none",
                  color: "var(--color-text)",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.95rem",
                  fontWeight: 400,
                  textAlign: "left",
                  gap: "1rem",
                }}
              >
                <span>{item.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 45 : 0 }}
                  transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
                  style={{
                    flexShrink: 0,
                    willChange: "transform",
                    backfaceVisibility: "hidden",
                  }}
                >
                  <Plus
                    size={16}
                    style={{ color: "var(--color-accent)" }}
                  />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: 0.3,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                    style={{ overflow: "hidden" }}
                  >
                    <p
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.9rem",
                        lineHeight: 1.75,
                        color: "var(--color-muted)",
                        fontWeight: 300,
                        paddingBottom: "1.5rem",
                      }}
                    >
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
