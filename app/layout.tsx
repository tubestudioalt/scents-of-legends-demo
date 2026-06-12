import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Scents of Legends | Luxury Fragrance - Dubai",
  description:
    "Genderless luxury fragrances from Dubai. Fragrance oils sourced from Italy, developed alongside experienced perfumers. Each scent identified by number for a pure emotional experience. Pre-order now.",
  keywords: ["luxury fragrance", "Dubai perfume", "genderless fragrance", "Italian fragrance oils", "pre-order perfume"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
