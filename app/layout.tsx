import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "WHYBE.AI - AI Projects & Experiments",
    template: "%s | WHYBE.AI",
  },
  description: "A sandbox for white-label coding tools and AI experiments. Part repository, part portfolio, all curiosity.",
  keywords: ["AI", "machine learning", "prototypes", "LLM", "developer tools", "white-label", "Gemini API", "React", "Next.js"],
  authors: [{ name: "WHYBE.AI" }],
  creator: "WHYBE.AI",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://whybe.ai",
    siteName: "WHYBE.AI",
    title: "WHYBE.AI - AI Projects & Experiments",
    description: "A sandbox for white-label coding tools and AI experiments. Part repository, part portfolio, all curiosity.",
  },
  twitter: {
    card: "summary_large_image",
    title: "WHYBE.AI - AI Projects & Experiments",
    description: "A sandbox for white-label coding tools and AI experiments.",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "icon", url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { rel: "icon", url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  metadataBase: new URL("https://whybe.ai"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
