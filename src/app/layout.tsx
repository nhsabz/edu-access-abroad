import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EduAccess Abroad - Your Global Education Journey Starts Here",
  description: "Expert guidance for studying in the UK, USA, Canada, and Australia.",
};

import { AuthProvider } from "@/context/AuthContext";
import { ConsultationModalProvider } from "@/context/ConsultationModalContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased light`}
    >
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground pt-20 overflow-x-hidden">
        <AuthProvider>
          <ConsultationModalProvider>
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </ConsultationModalProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
