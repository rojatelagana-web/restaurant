import Link from "next/link";
import { MapPin, Phone, Star } from "lucide-react";
import { site } from "@/lib/data/site";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/#about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reserve", label: "Reserve" },
  { href: "/#contact", label: "Contact" },
];

const offerings = [
  "Dine-In",
  "Drive-Through",
  "Delivery",
  "Private Events",
  "Birthday Packages",
];

export function Footer() {
  return (
    <footer className="bg-charcoal-black text-cream-light/80">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="font-display text-3xl text-cream-light leading-tight">
              Celebrations<br />Restaurant
            </h3>
            <p className="font-accent text-gold mt-3">{site.tagline}</p>
            <div className="divider-gold w-16 my-6" />
            <p className="text-sm leading-relaxed text-cream-light/60 max-w-xs">
              {site.description}
            </p>
          </div>

          <div>
            <h4 className="eyebrow mb-5 !text-cream-light/50">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm hover:text-gold transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="eyebrow mb-5 !text-cream-light/50">Our Offerings</h4>
            <ul className="space-y-3">
              {offerings.map((o) => (
                <li key={o} className="text-sm">
                  {o}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="eyebrow mb-5 !text-cream-light/50">Connect</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span>
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-gold" />
                <a
                  href={`tel:${site.phoneRaw}`}
                  className="font-mono hover:text-gold transition-colors"
                >
                  {site.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Star className="w-4 h-4 fill-gold text-gold" />
                <span>4.5 on Google · 6,653 reviews</span>
              </li>
            </ul>
            <div className="mt-6 flex gap-3">
              <a
                href={site.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 text-xs border border-cream-light/20 rounded-full hover:border-gold hover:text-gold transition-colors"
              >
                Google Maps
              </a>
              <a
                href={site.socials.instagram}
                className="px-3 py-1.5 text-xs border border-cream-light/20 rounded-full hover:border-gold hover:text-gold transition-colors"
              >
                Instagram
              </a>
              <a
                href={site.socials.facebook}
                className="px-3 py-1.5 text-xs border border-cream-light/20 rounded-full hover:border-gold hover:text-gold transition-colors"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="divider-gold mt-16 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-cream-light/40">
          <p>© {new Date().getFullYear()} Celebrations Restaurant · All Rights Reserved</p>
          <p>Visakhapatnam, India · Crafted with care.</p>
        </div>
      </div>
    </footer>
  );
}
