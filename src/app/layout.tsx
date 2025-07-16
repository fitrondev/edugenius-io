import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { cn } from "@/lib/utils";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tripnesia",
  description: "Tripnesia - Discover Your Next Adventure",
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
