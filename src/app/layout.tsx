import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "WeEngage - AI Powered Guest Engagement and Hospitality Platform",
    template: "%s | WeEngage",
  },
  description:
    "Boost bookings, delight guests, and streamline operations with WeEngage – an AI-powered hospitality platform for independent hotels, homestays, and B&Bs. From digital check-in to personalized upselling, engage every guest at every step.",
  keywords: [
    "AI hospitality software",
    "hotel guest engagement platform",
    "independent hotel software",
    "smart hotel PMS",
    "digital concierge",
    "contactless check-in",
    "hotel upselling tools",
    "automated guest messaging",
    "hotel revenue optimization",
    "hospitality CRM",
    "AI for hotels",
    "hospitality automation",
    "personalized guest experience",
    "hotel software India",
    "WeEngage platform",
  ],
  authors: [{ name: "WeEngage" }],
  creator: "WeEngage",
  publisher: "WeEngage",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://weengage.in"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    title: "WeEngage - AI Powered Guest Engagement and Hospitality Platform",
    description:
      "WeEngage empowers independent properties with AI-driven tools for seamless check-in, guest messaging, personalization, and smart operations. All-in-one solution for homestays, boutique hotels & B&Bs.",
    url: "https://weengage.in",
    siteName: "WeEngage",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "WeEngage - AI Powered Guest Engagement and Hospitality Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WeEngage - AI Powered Guest Engagement and Hospitality Platform",
    description:
      "Deliver smarter hospitality with AI-powered automation, guest engagement, and property management — all in one platform for independent hotels.",
    creator: "@weengage",
    images: ["/opengraph-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "_azVqt1tjHVzG_TXWPA7bi-dmBp5FVGP3I7cdNJ1cjw",
    // yandex: "yandex-verification-code",
    // yahoo: "yahoo-verification-code",
    other: {
      me: ["support@weengage.in"],
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/favicon-16x16.png",
      },
    ],
  },
  manifest: "/site.webmanifest",
  category: "hospitality technology",
  applicationName: "WeEngage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Toaster richColors position="top-center" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
