import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nayan Portfolio",
  description:
    "Nayan: video editing, motion design, and color. Cinematic edits for brands, artists, and creators.",
  icons: {
    icon: "/Hero.jpg",
    apple: "/Hero.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full scroll-smooth antialiased`}>
      <body className="min-h-full bg-[#030306] text-zinc-100">{children}</body>
    </html>
  );
}
