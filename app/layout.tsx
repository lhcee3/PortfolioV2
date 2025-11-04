import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react"
import Navigation from "@/components/Navigation";

const recoleta = localFont({
  src: "../public/fonts/Recoleta-Bold.ttf",
  variable: "--font-recoleta",
});

export const metadata: Metadata = {
  title: "Sai Aneesh",
  description: "Portfolio",
};

// Suppress wallet extension errors
if (typeof window !== "undefined") {
  const originalError = console.error;
  console.error = (...args) => {
    if (
      typeof args[0] === 'string' && 
      (args[0].includes('Receiving end does not exist') || 
       args[0].includes('chrome-extension'))
    ) {
      return; // Suppress wallet extension errors
    }
    originalError.apply(console, args);
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${recoleta.variable}`}>
        <Navigation />
        {children} 
        <Analytics />
      </body>
    </html>
  );
}
