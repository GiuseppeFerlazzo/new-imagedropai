import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Image Drop AI - Generatore di Immagini con OpenAI",
  description:
    "Image Drop AI è un generatore di immagini basato su OpenAI. Descrivi l'immagine che vuoi creare e lascia che l'IA faccia il resto!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <div className="bg-yellow-100 border-l-4 border-yellow-400 p-4 w-full text-center">
          <p className="font-bold">SITO IN MANUTENZIONE</p>
        </div>
        {children}
      </body>
    </html>
  );
}
