import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mallard Creative — Pittsburgh Web Development Agency",
  description:
    "Custom websites, SEO, and digital strategy for Pittsburgh businesses ready to grow. Built in Pittsburgh. Built to Perform.",
  keywords: [
    "web development Pittsburgh",
    "Pittsburgh web design",
    "SEO Pittsburgh",
    "custom websites Pittsburgh",
    "Mallard Creative",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-navy text-white font-sans antialiased">{children}</body>
    </html>
  );
}
