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
  metadataBase: new URL('https://www.eduaccessabroad.com'),
  title: "EduAccess Abroad - Your Global Education Journey Starts Here",
  description: "Expert guidance for studying in the UK, USA, Canada, Australia, Germany, Sweden, and other top destinations.",
  openGraph: {
    title: "EduAccess Abroad",
    description: "Expert guidance for studying in the UK, USA, Canada, Australia, Germany, Sweden, and other top destinations.",
    url: 'https://www.eduaccessabroad.com',
    siteName: 'EduAccess Abroad',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'EduAccess Abroad - Global Education Journey',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "EduAccess Abroad",
    description: "Expert guidance for studying in the UK, USA, Canada, Australia, Germany, Sweden, and other top destinations.",
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
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
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
        />
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
