import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sanket Shreemal | Digital HQ",
  description: "Operator, Builder, Capital Allocator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans overflow-x-hidden bg-bone relative" suppressHydrationWarning>
        {/* Global Markboard noise / dot-pattern background across page and footer */}
        <div
          className="pointer-events-none fixed inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-100 z-0"
          aria-hidden="true"
        />
        <div className="relative z-10 flex flex-col min-h-screen flex-1">
          <Navigation />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}


