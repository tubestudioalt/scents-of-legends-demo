"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    quote:
      "This store is a great concept! The scents are lovely and arranged in an original yet logical way so that you can really find one that you like based on type of scent.",
    name: "Joy Afif",
  },
  {
    quote:
      "Visited Scents two days ago and tried a few fragrances. I took the testing strips home, and the scent spread beautifully through the room - it smelled amazing and lasted for a full two days.",
    name: "Ruchi Mehta",
  },
  {
    quote: "Incredible scents, I've purchased for myself and family!",
    name: "Cynthia Bayigamba",
  },
  {
    quote:
      "Amazing store with plenty of options to choose from. Will definitely be coming back again!",
    name: "Ameen Saleh",
  },
  {
    quote: "Tried out their Amber collection, it was amazing, and lasted so long.",
    name: "Vanya Dang",
  },
];

function TestimonialCard({ quote, name }: { quote: string; name: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "#F5F0E4" : "var(--color-card)",
        border: "1px solid var(--color-border)",
        borderRadius: "8px",
        padding: "1.75rem 1.875rem",
        minWidth: "300px",
        maxWidth: "360px",
        flex: "0 0 auto",
        scrollSnapAlign: "start",
        display: "flex",
        flexDirection: "column",
        gap: "1.125rem",
        transform: hovered ? "translateY(-8px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 24px 64px rgba(26,24,20,0.15)"
          : "0 2px 8px rgba(26,24,20,0.04)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease",
      }}
    >
      {/* 5-star rating */}
      <div style={{ display: "flex", gap: "0.2rem" }}>
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={14} fill="#C8A96E" color="#C8A96E" />
        ))}
      </div>

      {/* Quote */}
      <p
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: "italic",
          fontSize: "1.05rem",
          lineHeight: 1.7,
          color: "var(--color-text)",
          flex: 1,
        }}
      >
        &ldquo;{quote}&rdquo;
      </p>

      {/* Attribution */}
      <div>
        <div
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.78rem",
            fontWeight: 500,
            color: "var(--color-text)",
            letterSpacing: "0.02em",
          }}
        >
          {name}
        </div>
        <div
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.68rem",
            color: "var(--color-muted)",
            marginTop: "0.2rem",
            letterSpacing: "0.04em",
          }}
        >
          Google Review
        </div>
      </div>
    </div>
  );
}

function NavButton({
  onClick,
  disabled,
  children,
}: {
  onClick: () => void;
  disabled: boolean;
  children: React.ReactNode;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flexShrink: 0,
        width: "2.5rem",
        height: "2.5rem",
        borderRadius: "50%",
        border: "1px solid var(--color-border)",
        background: hovered && !disabled ? "var(--color-border)" : "var(--color-card)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: disabled ? "default" : "pointer",
        opacity: disabled ? 0.3 : 1,
        transition: "opacity 0.2s ease, background 0.2s ease",
        color: "var(--color-text)",
      }}
    >
      {children}
    </button>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const goTo = (index: number) => {
    const clamped = Math.max(0, Math.min(index, reviews.length - 1));
    setCurrent(clamped);
    if (trackRef.current) {
      const child = trackRef.current.children[clamped] as HTMLElement;
      if (child) {
        trackRef.current.scrollTo({ left: child.offsetLeft, behavior: "smooth" });
      }
    }
  };

  return (
    <section
      style={{
        padding: "6rem 0",
        background: "var(--color-bg)",
      }}
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            marginBottom: "3.5rem",
            willChange: "transform",
            backfaceVisibility: "hidden",
          }}
        >
          <h2 className="section-title">What people say</h2>
          <span className="accent-line" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Carousel row with arrow buttons */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <NavButton onClick={() => goTo(current - 1)} disabled={current === 0}>
              <ChevronLeft size={16} />
            </NavButton>

            {/* Track */}
            <div style={{ flex: 1, overflow: "hidden" }}>
              <div
                ref={trackRef}
                className="testimonials-carousel"
                style={{
                  display: "flex",
                  gap: "1.25rem",
                  overflowX: "scroll",
                  scrollSnapType: "x mandatory",
                  scrollbarWidth: "none",
                  paddingBottom: "4px",
                }}
              >
                {reviews.map((review, i) => (
                  <TestimonialCard key={i} {...review} />
                ))}
              </div>
            </div>

            <NavButton
              onClick={() => goTo(current + 1)}
              disabled={current === reviews.length - 1}
            >
              <ChevronRight size={16} />
            </NavButton>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
