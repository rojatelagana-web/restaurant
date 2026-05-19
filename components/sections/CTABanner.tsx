"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/data/site";

export function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-charcoal-deep">
      <motion.div
        aria-hidden
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(201,149,58,0.25), transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(201,149,58,0.25), transparent 50%)",
            "radial-gradient(circle at 50% 30%, rgba(201,149,58,0.25), transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(201,149,58,0.25), transparent 50%)",
          ],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0"
      />
      <div className="absolute inset-0 bg-grain pointer-events-none" />

      <div className="relative mx-auto max-w-5xl px-6 lg:px-10 py-24 lg:py-32 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="font-display text-cream-light leading-[1.05]"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
        >
          Life is Short.
          <br />
          <span className="text-gold-gradient font-accent">
            Eat Something Extraordinary.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-7 text-base lg:text-lg text-cream-light/70 max-w-xl mx-auto"
        >
          Join over 6,000 families who&rsquo;ve made Celebrations their table of choice.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button href="/reserve" size="lg">
            Reserve Now
            <ArrowRight className="w-4 h-4" />
          </Button>
          <a
            href={`tel:${site.phoneRaw}`}
            className="inline-flex items-center gap-2 text-cream-light/90 hover:text-gold transition-colors text-base font-medium"
          >
            <Phone className="w-4 h-4" />
            Call Us: <span className="font-mono">{site.phone}</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
