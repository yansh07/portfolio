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
  title: "Priyanshu - Full Stack Dev",
  description: "I build production grade systems using Go and Python, and typescript for beautification.",
  openGraph: {
    title: "Priyanshu - Full Stack Dev",
    description: "I build production grade systems using Go and Python, and typescript for beautification.",
    url: "https://github.com/yansh07",
    siteName: "Priyanshu",
    images: [
      {
        url: "/image.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Priyanshu - Full Stack Dev",
    description: "I build production grade systems using Go and Python, and typescript for beautification.",
    creator: "@yansh_08",
    images: ["/image.png"],
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
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
