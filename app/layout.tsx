import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "700", "800"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://github.com/yansh07"),

  title: "Priyanshu Kumar Singh - Full Stack Developer | Go, Python, TypeScript",

  description:
    "Full-stack developer building production-grade systems with Go and Python. Expert in TypeScript, React, and modern web technologies.",

  keywords: [
    "Full Stack Developer",
    "Go Developer",
    "Python Developer",
    "TypeScript",
    "React",
    "Software Engineer",
    "Priyanshu",
  ],

  authors: [{ name: "Priyanshu Kumar Singh" }],
  creator: "Priyanshu Kumar Singh",
  publisher: "Priyanshu",

  robots: "index, follow",

  alternates: {
    canonical: "https://github.com/yansh07",
  },

  // ← THIS WAS MISSING
  icons: {
    icon: "/image.png",
    shortcut: "/image.png",
    apple: "/image.png",
  },

  openGraph: {
    title: "Priyanshu Kumar Singh - Full Stack Developer",

    description:
      "I build production-grade systems using Go and Python, with TypeScript for beautification.",

    url: "https://github.com/yansh07",

    siteName: "Priyanshu Portfolio",

    type: "website",

    locale: "en_US",

    images: [
      {
        url: "/image.png",
        width: 800,
        height: 800,
        alt: "Priyanshu Kumar Singh - Full Stack Developer",
        type: "image/png",
      },
      {
        url: "/bg.png",
        width: 1200,
        height: 630,
        alt: "Priyanshu Portfolio Background",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Priyanshu Kumar Singh - Full Stack Developer",

    description:
      "Building production-grade systems with Go, Python & TypeScript",

    creator: "@yansh_08",
    site: "@yansh_08",

    images: {
      url: "/image.png",
      alt: "Priyanshu Kumar Singh",
    },
  },

  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Priyanshu - Full Stack Dev",
  },

  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${mono.variable} font-mono h-full antialiased`}
    >
      <body className="bg-background text-white">
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}