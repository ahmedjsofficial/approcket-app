import { Metadata } from "next";

export const metadataConfig: Metadata = {
  title: {
    default: "AppRocket",
    template: "%s | AppRocket",
  },
  description: "AppRocket - We build technologies that make a difference.",
  keywords: ["technology", "innovation", "software development", "web applications", "mobile apps"],
  authors: [{ name: "AppRocket Team" }],
  openGraph: {
    title: "AppRocket",
    description: "AppRocket - We build technologies that make a difference.",
    url: "https://approcket.com",
    siteName: "AppRocket",
    images: [
      {
        url: "https://res.cloudinary.com/dimjhiqnr/image/upload/v1743934728/logo_header_footer_20bc0208d1.svg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AppRocket",
    description: "AppRocket - We build technologies that make a difference.",
    images: ["https://res.cloudinary.com/dimjhiqnr/image/upload/v1743934728/logo_header_footer_20bc0208d1.svg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  metadataBase: new URL("https://approcket.com"),
}; 