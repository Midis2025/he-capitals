import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "HE Capital Markets | Strategic Capital Markets Advisory & Investor Relations",
  description:
    "We help ambitious companies navigate capital markets, strengthen investor relationships, and build lasting market visibility through strategic communications and financial expertise.",
  keywords: [
    "HE Capital Markets",
    "Investor Relations",
    "Capital Markets Advisory",
    "Strategic Communications",
    "Financial PR",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} scroll-smooth antialiased`}>
      <body className="min-h-screen bg-white text-[#0B1A30] font-sans flex flex-col selection:bg-[#B99A5E] selection:text-white">
        {children}
      </body>
    </html>
  );
}
