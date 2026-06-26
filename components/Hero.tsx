"use client";
import { motion } from "framer-motion";

const orbConfigs = [
  {
    w: 900, h: 900, left: "-15%", top: "-20%",
    animX: [0, 60, -40, 0], animY: [0, -80, 40, 0],
    duration: 28, opacity: 0.11, mobileHide: false,
  },
  {
    w: 700, h: 700, left: "50%", top: "15%",
    animX: [0, -50, 35, 0], animY: [0, 70, -35, 0],
    duration: 33, opacity: 0.08, mobileHide: false,
  },
  {
    w: 600, h: 600, left: "30%", top: "-10%",
    animX: [0, 40, -25, 0], animY: [0, -55, 28, 0],
    duration: 22, opacity: 0.07, mobileHide: true,
  },
  {
    w: 400, h: 400, left: "-5%", top: "60%",
    animX: [0, -30, 20, 0], animY: [0, 45, -22, 0],
    duration: 38, opacity: 0.06, mobileHide: true,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.25 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: "easeOut" as const },
  },
};

export default function Hero() {
  return (
    <section
      className="min-h-0 md:min-h-[90vh] items-start md:items-end pb-8 md:pb-0"
      style={{
        position: "relative",
        display: "flex",
        overflow: "hidden",
        background: "var(--color-bg)",
      }}
    >
      {/* Ambient orbs */}
      {orbConfigs.map((orb, i) => (
        <div
          key={i}
          className={orb.mobileHide ? "hidden md:block" : ""}
          style={{ position: "absolute", left: orb.left, top: orb.top, zIndex: 0 }}
        >
          <motion.div
            animate={{ x: orb.animX, y: orb.animY }}
            transition={{ duration: orb.duration, repeat: Infinity, ease: "easeInOut" }}
            style={{
              width: orb.w,
              height: orb.h,
              borderRadius: "50%",
              background: `radial-gradient(circle, rgba(200,169,110,${orb.opacity}) 0%, transparent 70%)`,
              filter: "blur(90px)",
              willChange: "transform",
              backfaceVisibility: "hidden",
            }}
          />
        </div>
      ))}

      {/* Bottle image — decorative right element, blends into cream background */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.3, delay: 0.5, ease: "easeOut" }}
        className="hidden md:block"
        style={{
          position: "absolute",
          right: "3%",
          top: "38%",
          transform: "translateY(-50%)",
          width: "clamp(400px, 50vw, 700px)",
          zIndex: 0,
          maskImage: "linear-gradient(to right, transparent, black 15%, black 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 100%)",
          pointerEvents: "none",
        }}
      >
        <img
          src="/images/bottle.jpg"
          alt="Four Scents of Legends frosted glass fragrance bottles lined up in a row"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
          }}
        />
      </motion.div>

      {/* Main content — text on left, vertically centered */}
      <div
        className="pt-20 md:pt-20 md:pb-16"
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          maxWidth: "1280px",
          margin: "0 auto",
          paddingRight: "2rem",
          paddingLeft: "2rem",
        }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center md:text-left"
          style={{
            maxWidth: "600px",
            willChange: "transform",
            backfaceVisibility: "hidden",
          }}
        >
          <motion.div
            variants={itemVariants}
            className="mt-4 md:mt-0"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.68rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--color-accent)",
              marginBottom: "1.75rem",
              willChange: "transform",
              backfaceVisibility: "hidden",
            }}
          >
            Dubai, UAE
          </motion.div>

          <motion.h1
            variants={itemVariants}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2.75rem, 7vw, 6.5rem)",
              fontWeight: 400,
              lineHeight: 1.06,
              color: "var(--color-text)",
              marginBottom: "1.5rem",
              willChange: "transform",
              backfaceVisibility: "hidden",
            }}
          >
            A scent becomes
            <br />
            a signature.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(0.88rem, 1.8vw, 1.05rem)",
              lineHeight: 1.8,
              color: "var(--color-muted)",
              maxWidth: "480px",
              marginBottom: "2.25rem",
              fontWeight: 300,
              willChange: "transform",
              backfaceVisibility: "hidden",
            }}
            className="mx-auto md:mx-0"
          >
            Fragrance built around emotion, presence, and lasting memory.
            Genderless by design. Numbered by intention.
          </motion.p>

          <motion.div
            variants={itemVariants}
            style={{
              display: "flex",
              gap: "0.875rem",
              flexWrap: "wrap",
              willChange: "transform",
              backfaceVisibility: "hidden",
            }}
            className="justify-center md:justify-start"
          >
            <a href="#collection" className="btn-outline">
              Explore the Collection
            </a>
            <a
              href="#"
              className="btn-accent"
            >
              Order via WhatsApp
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
