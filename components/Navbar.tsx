"use client";
import { useState, useEffect } from "react";
import { Menu, X, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ContactModal from "./ContactModal";

const MAPS_URL =
  "https://www.google.com/maps/place/SCENTS+OF+LEGENDS/data=!4m2!3m1!1s0x0:0x31fb7fb8a39e1c3?sa=X&ved=1t:2428&ictx=111";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Collection", href: "#collection" },
    { label: "About", href: "#about" },
  ];

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: "1rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ position: "relative", maxWidth: "960px", width: "100%" }}>
          {/* Pill bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "0.75rem 1.5rem",
              borderRadius: "2px",
              background: scrolled ? "rgba(245,240,232,0.94)" : "transparent",
              backdropFilter: scrolled ? "blur(14px)" : "none",
              WebkitBackdropFilter: scrolled ? "blur(14px)" : "none",
              border: scrolled
                ? "1px solid var(--color-border)"
                : "1px solid transparent",
              transition:
                "background 0.35s ease, border-color 0.35s ease, backdrop-filter 0.35s ease",
            }}
          >
            {/* Desktop nav links */}
            <div
              style={{
                display: "flex",
                gap: "2rem",
                flex: 1,
                justifyContent: "center",
              }}
              className="hidden md:flex"
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    color: "var(--color-muted)",
                    textDecoration: "none",
                    fontSize: "0.72rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 400,
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--color-text)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--color-muted)")
                  }
                >
                  {link.label}
                </a>
              ))}
              {/* Contact — opens modal */}
              <button
                onClick={() => setContactOpen(true)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "var(--color-muted)",
                  fontSize: "0.72rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 400,
                  padding: 0,
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--color-text)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--color-muted)")
                }
              >
                Contact
              </button>
            </div>

            {/* Our Location CTA */}
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp hidden md:inline-flex"
            >
              <MapPin size={13} />
              Our Location
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden"
              style={{
                background: "none",
                border: "none",
                color: "var(--color-text)",
                marginLeft: "auto",
                padding: "0.25rem",
              }}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile menu */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
                style={{
                  position: "absolute",
                  top: "calc(100% + 0.5rem)",
                  left: 0,
                  right: 0,
                  background: "rgba(245,240,232,0.97)",
                  backdropFilter: "blur(14px)",
                  WebkitBackdropFilter: "blur(14px)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "2px",
                  padding: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                  willChange: "transform",
                  backfaceVisibility: "hidden",
                }}
              >
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    style={{
                      color: "var(--color-text)",
                      textDecoration: "none",
                      fontSize: "1rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    {link.label}
                  </a>
                ))}
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    setContactOpen(true);
                  }}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: "var(--color-text)",
                    fontSize: "1rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    fontFamily: "'DM Sans', sans-serif",
                    padding: 0,
                    textAlign: "left",
                  }}
                >
                  Contact
                </button>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  <MapPin size={13} />
                  Our Location
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
