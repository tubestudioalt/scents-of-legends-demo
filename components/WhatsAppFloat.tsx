"use client";
import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  return (
    <a
      href="#"
      aria-label="Chat on WhatsApp"
      style={{
        position: "fixed",
        bottom: "1.75rem",
        right: "1.75rem",
        zIndex: 9000,
        width: "56px",
        height: "56px",
        borderRadius: "50%",
        background: "#C8A96E",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        boxShadow: "0 4px 20px rgba(200,169,110,0.45)",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        textDecoration: "none",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.1)";
        (e.currentTarget as HTMLAnchorElement).style.boxShadow =
          "0 6px 28px rgba(200,169,110,0.55)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)";
        (e.currentTarget as HTMLAnchorElement).style.boxShadow =
          "0 4px 20px rgba(200,169,110,0.45)";
      }}
    >
      <MessageCircle size={24} />
    </a>
  );
}
