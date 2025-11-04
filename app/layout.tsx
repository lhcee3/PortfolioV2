import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react"
import Navigation from "@/components/Navigation";
import ClientErrorHandler from "@/components/ClientErrorHandler";

const recoleta = localFont({
  src: "../public/fonts/Recoleta-Bold.ttf",
  variable: "--font-recoleta",
});

export const metadata: Metadata = {
  title: "Sai Aneesh",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${recoleta.variable}`}>
        <ClientErrorHandler />
        <Navigation />
        {children} 
        <Analytics />
      </body>
    </html>
  );
}
