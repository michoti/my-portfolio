import type { Metadata, Viewport } from "next";
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
  title: 'Emmanuel Michoti — Software Engineer',
  description:
    'Fullstack Developer based in Nairobi, Kenya. Specializing in Laravel, React, Next.js, and cloud-native web applications.',
  keywords: ['Fullstack Developer', 'Laravel', 'React', 'Next.js', 'Nairobi', 'Kenya'],
  authors: [{ name: 'Emmanuel Michoti Mogendi' }],
  openGraph: {
    title: 'Emmanuel Michoti — Software Engineer',
    description: 'Building resilient, scalable web systems with meticulous attention to craft.',
    type: 'website',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
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
        "scroll-smooth",
        geist.variable,
        orbitron.variable,
        rajdhani.variable,
        roboto.variable
      )}
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
}