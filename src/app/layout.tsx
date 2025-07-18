import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { cn } from "@/lib/utils";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Edu Genius",
  description:
    "Platform pembelajaran online yang menyediakan berbagai materi dan sumber daya untuk membantu siswa belajar dengan cara yang menyenangkan dan efektif.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={cn("antialiased", inter.variable)}>{children}</body>
    </html>
  );
}
