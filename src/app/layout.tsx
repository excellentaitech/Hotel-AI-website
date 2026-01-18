import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import CookieConsent from "@/components/CookieConsent";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  display: "optional",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Hotel AI Agents",
  description: "Get more direct bookings and handle guest inquiries automatically. Three AI agents designed for boutique hotels. €150/month.",
  metadataBase: new URL("https://hotelai.tech"),
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Hotel AI — More Direct Bookings, Fewer Interruptions",
    description: "Three AI agents for independent hotels. €150/month.",
    type: "website",
    url: "https://hotelai.tech/",
    siteName: "Hotel AI",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hotel AI - AI Agents for Hotels",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel AI — AI for Independent Hotels",
    description: "More direct bookings. Guest inquiries handled automatically. €150/month.",
    images: ["/twitter-card.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "google": "notranslate",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google" content="notranslate" />
        <JsonLd />
      </head>
      <body className={`${nunitoSans.variable} antialiased`}>
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
