import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NICO PATRIO - Air Minum Isi Ulang Berkualitas Tinggi",
  description: "NICO PATRIO menyediakan air minum isi ulang berkualitas tinggi di Peninjauan, Ogan Komering Ulu. Air bersih, sehat, dan terjangkau untuk keluarga Anda.",
  keywords: ["NICO PATRIO", "air minum isi ulang", "air bersih", "depot air", "Ogan Komering Ulu", "Sumatera Selatan", "air sehat"],
  authors: [{ name: "NICO PATRIO" }],
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "NICO PATRIO - Air Minum Isi Ulang Berkualitas",
    description: "Depot air minum isi ulang terpercaya di Peninjauan, Ogan Komering Ulu",
    url: "https://nicopatrio.com",
    siteName: "NICO PATRIO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NICO PATRIO - Air Minum Isi Ulang",
    description: "Air minum isi ulang berkualitas tinggi di Ogan Komering Ulu",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <meta name="facebook-domain-verification" content="zh3bapycyvs9cvamqo9btjipzk6jcn" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
