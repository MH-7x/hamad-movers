import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import { APP } from "@/lib/App";
import ActionButton from "@/components/ActionButtons";
const HeroFont = localFont({
  src: "./HeroLight-Bold.woff2",
  display: "swap",
  variable: "--font-hero",
  preload: true,
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400"],
  preload: true,
  adjustFontFallback: true,
  display: "swap",
});

export const metadata: Metadata = {
  applicationName: APP.name,
  robots: {
    "max-image-preview": "large",
    follow: true,
    googleBot: {
      notranslate: true,
      "max-image-preview": "large",
      index: true,
      follow: true,
    },
    index: true,
    notranslate: true,
  },
  icons: {
    icon: [
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/icons/apple-touch-icon.png",
    shortcut: "/icons/favicon-32x32.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={cn(
        "h-full",
        "antialiased",

        inter.className,
        HeroFont.variable,
      )}
    >
      <body>
        <Navbar />
        {children}
        <ActionButton />
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
