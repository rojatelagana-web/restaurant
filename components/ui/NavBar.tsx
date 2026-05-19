"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, Star, X } from "lucide-react";
import { Button } from "./Button";
import { site } from "@/lib/data/site";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/#about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reserve", label: "Reserve" },
  { href: "/#contact", label: "Contact" },
];

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 32);
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setProgress(total > 0 ? (h.scrollTop / total) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 h-[3px] z-[60] pointer-events-none">
        <div
          className="h-full bg-gold transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-cream-light/85 backdrop-blur-md border-b border-border-warm/60 py-3"
            : "bg-transparent py-5"
        )}
      >
        <nav className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-display text-2xl lg:text-[1.65rem] tracking-tight text-charcoal">
              Celebrations
            </span>
            <span className="hidden sm:inline-block h-1.5 w-1.5 rounded-full bg-gold group-hover:scale-150 transition-transform" />
          </Link>

          <ul className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="relative text-sm font-medium text-charcoal/80 hover:text-charcoal transition-colors group"
                >
                  {l.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-gold transition-all group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-1 text-xs text-charcoal/70">
              <Star className="w-3.5 h-3.5 fill-gold text-gold" />
              <span className="font-mono">4.5</span>
            </div>
            <Button href="/reserve" size="md">
              Reserve Table
            </Button>
          </div>

          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="lg:hidden p-2 rounded-md hover:bg-cream transition-colors text-charcoal"
          >
            <Menu className="w-6 h-6" />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[70] bg-charcoal text-cream-light lg:hidden"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
              <span className="font-display text-2xl">Celebrations</span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="p-2 hover:bg-white/10 rounded-md"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
              }}
              className="flex flex-col px-6 py-10 gap-6"
            >
              {links.map((l) => (
                <motion.li
                  key={l.href}
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-3xl text-cream-light hover:text-gold transition-colors"
                  >
                    {l.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10 flex flex-col gap-4">
              <a
                href={`tel:${site.phoneRaw}`}
                className="flex items-center gap-3 text-cream-light/90"
              >
                <Phone className="w-5 h-5 text-gold" />
                <span className="font-mono">{site.phone}</span>
              </a>
              <div className="flex items-center gap-2 text-cream-light/70 text-sm">
                <Star className="w-4 h-4 fill-gold text-gold" />
                <span>4.5 · 6,653 reviews on Google</span>
              </div>
              <Button href="/reserve" size="lg" className="w-full justify-center">
                Reserve Table
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
