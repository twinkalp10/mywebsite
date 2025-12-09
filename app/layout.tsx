"use client";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { Outfit } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { NavProvider } from "@/context/NavContext";
import Footer from "@/components/Footer";

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: '--font-outfit',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} font-sans`}>
        <ThemeProvider enableSystem={true} attribute="class">
          <NavProvider>
            <Navbar />
            {children}
            <Footer />
          </NavProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
