import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans, Playfair_Display, JetBrains_Mono } from "next/font/google";
import { NavBar } from "@/components/ui/NavBar";
import { Footer } from "@/components/ui/Footer";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";
import { site } from "@/lib/data/site";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const accent = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["italic"],
  variable: "--font-accent",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#1A1A1A",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default:
      "Celebrations Restaurant Visakhapatnam | Best North Indian Food | Dine-In & Delivery",
    template: "%s · Celebrations Restaurant Visakhapatnam",
  },
  description:
    "Visakhapatnam's top-rated North Indian restaurant with 4.5★ and 6,600+ reviews. Enjoy Chicken Dum Biryani, Butter Naan, Kebabs & more. Dine-in, drive-through or delivery. Open until 11 PM daily. Reserve your table now.",
  keywords: [
    "North Indian restaurant Visakhapatnam",
    "Best restaurant Marripalem Visakhapatnam",
    "Chicken Biryani Visakhapatnam",
    "Celebrations restaurant Visakhapatnam",
    "Restaurant near FCI Nagar Vizag",
    "Birthday dinner Visakhapatnam",
  ],
  authors: [{ name: "Celebrations Restaurant" }],
  openGraph: {
    title:
      "Celebrations Restaurant — Visakhapatnam's Most Celebrated North Indian Kitchen",
    description:
      "4.5★ · 6,653 verified reviews · Authentic North Indian flavours, dine-in / drive-through / delivery. Open until 11 PM daily in Marripalem, Visakhapatnam.",
    url: site.url,
    siteName: site.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1633945274405-b6c8a47f6d1d?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Celebrations Restaurant signature dish",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Celebrations Restaurant Visakhapatnam",
    description:
      "4.5★ · 6,653 reviews · North Indian classics, premium ambiance, three ways to enjoy.",
    images: [
      "https://images.unsplash.com/photo-1633945274405-b6c8a47f6d1d?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  alternates: {
    canonical: site.url,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: site.name,
  image: [
    "https://images.unsplash.com/photo-1633945274405-b6c8a47f6d1d?auto=format&fit=crop&w=1200&q=80",
  ],
  "@id": site.url,
  url: site.url,
  telephone: site.phoneRaw,
  priceRange: site.priceRange,
  servesCuisine: ["North Indian", "Indian", "Indo-Chinese"],
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.line1,
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 17.7411,
    longitude: 83.1851,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "11:00",
    closes: "23:00",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: site.rating,
    reviewCount: site.reviewCount,
    bestRating: 5,
  },
  acceptsReservations: "True",
  hasMenu: `${site.url}/menu`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${accent.variable} ${mono.variable}`}
    >
      <body className="bg-cream-light text-charcoal antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }}
        />
        <NavBar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
