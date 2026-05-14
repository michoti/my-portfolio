import type { Metadata } from "next";
import "./globals.css";
import { Geist, Orbitron, Rajdhani, Roboto } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-orbitron",
});

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rajdhani",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Alex Cipher | Software Engineer",
  description:
    "Full-stack engineer building systems that scale. Open to opportunities.",
  keywords: [
    "software engineer",
    "full-stack",
    "TypeScript",
    "Go",
    "React",
    "Next.js",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "scroll-smooth font-sans",
        geist.variable,
        orbitron.variable,
        rajdhani.variable,
        roboto.variable
      )}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}