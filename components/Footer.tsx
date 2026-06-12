"use client";
import { Camera, MessageCircle } from "lucide-react";

const hours = [
  { day: "Monday - Friday", time: "12:00 - 10:00 PM" },
  { day: "Saturday", time: "12:00 - 9:00 PM" },
  { day: "Sunday", time: "Closed" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--color-card)",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      {/* Main footer content */}
      <div className="section-container" style={{ padding: "4rem 2rem 3rem" }}>

        {/*
          4-column grid: [Logo/Brand] [Navigate] [Hours] [Connect]
          Content cols use pt-0 md:pt-10 so their headings align with
          the location text on desktop (logo is 40px = 2.5rem = pt-10).
        */}
        <div
          className="grid-cols-1 md:grid-cols-4"
          style={{ display: "grid", gap: "2rem 2.5rem" }}
        >
          {/* Col 1: Logo + Location */}
          <div>
            <img
              src="/images/logo1.png"
              alt="Scents of Legends"
              style={{
                height: "55px",
                width: "auto",
                display: "block",
                marginLeft: "-4px",
                marginBottom: 0,
              }}
            />
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "1rem",
                fontWeight: 500,
                color: "var(--color-muted)",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                marginTop: "0",
              }}
            >
              Majan, Dubai, UAE
            </p>
          </div>

          {/* Col 2: Navigate */}
          <div className="pt-0 md:pt-10">
            <h4
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.62rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--color-muted)",
                marginBottom: "1.25rem",
              }}
            >
              Navigate
            </h4>
            <nav style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                { label: "Collection", href: "#collection" },
                { label: "About", href: "#about" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    color: "var(--color-muted)",
                    textDecoration: "none",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.85rem",
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
            </nav>
          </div>

          {/* Col 3: Hours */}
          <div className="pt-0 md:pt-10">
            <h4
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.62rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--color-muted)",
                marginBottom: "1.25rem",
              }}
            >
              Hours
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {hours.map((h) => (
                <div key={h.day} style={{ display: "flex", flexDirection: "column", gap: "0.1rem" }}>
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.8rem",
                      color: "var(--color-muted)",
                    }}
                  >
                    {h.day}
                  </span>
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.8rem",
                      color: h.time === "Closed" ? "var(--color-muted)" : "var(--color-text)",
                      opacity: h.time === "Closed" ? 0.5 : 1,
                    }}
                  >
                    {h.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Col 4: Connect */}
          <div className="pt-0 md:pt-10">
            <h4
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.62rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--color-muted)",
                marginBottom: "1.25rem",
              }}
            >
              Connect
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <a
                href="https://instagram.com/scentsoflegends"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  color: "var(--color-muted)",
                  textDecoration: "none",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.82rem",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--color-text)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--color-muted)")
                }
              >
                <Camera size={16} />
                Instagram
              </a>
              <a
                href="https://wa.me/971502521021"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  color: "var(--color-muted)",
                  textDecoration: "none",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.82rem",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--color-text)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--color-muted)")
                }
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid var(--color-border)", padding: "1.25rem 2rem" }}>
        <div
          className="section-container"
          style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.72rem",
              color: "var(--color-muted)",
              letterSpacing: "0.06em",
            }}
          >
            &copy; 2025 Scents of Legends. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
