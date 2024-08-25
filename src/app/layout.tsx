import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TT Points Counter",
  description: "🏓 Easily count points in your table tennis game",
  icons: [
    {
      rel: "icon",
      href: "/logo.ico",
      url: "/logo.ico",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("h-full", inter.className)}>{children}</body>
    </html>
  );
}
