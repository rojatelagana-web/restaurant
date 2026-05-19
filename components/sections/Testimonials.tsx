"use client";

import { ArrowRight, Star } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { Button } from "@/components/ui/Button";
import { testimonials } from "@/lib/data/testimonials";
import { site } from "@/lib/data/site";

export function Testimonials() {
  const rowOne = testimonials.slice(0, 4);
  const rowTwo = testimonials.slice(4);

  return (
    <section className="relative py-24 lg:py-32 bg-cream-light overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="From Our Diners"
          title={
            <>
              Straight From
              <br />
              <span className="font-accent text-gold">Our Guests&rsquo; Hearts.</span>
            </>
          }
          align="center"
        />
      </div>

      <div className="mt-16 space-y-6 marquee-pause">
        {/* Row 1 — left scroll */}
        <div className="overflow-hidden">
          <div className="flex gap-6 w-max marquee-left">
            {[...rowOne, ...rowOne].map((t, i) => (
              <TestimonialCard key={`r1-${i}`} t={t} />
            ))}
          </div>
        </div>

        {/* Row 2 — right scroll */}
        <div className="overflow-hidden">
          <div className="flex gap-6 w-max marquee-right">
            {[...rowTwo, ...rowTwo].map((t, i) => (
              <TestimonialCard key={`r2-${i}`} t={t} />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-14 flex flex-col sm:flex-row gap-4 justify-center items-center px-6">
        <Button href={site.socials.googleReviews} variant="secondary" size="md">
          Read More on Google
          <ArrowRight className="w-4 h-4" />
        </Button>
        <div className="flex items-center gap-2 text-sm text-charcoal/70">
          <Star className="w-4 h-4 fill-gold text-gold" />
          <span className="font-mono font-medium">4.5</span>
          <span>·</span>
          <span>6,653 Verified Reviews</span>
        </div>
      </div>
    </section>
  );
}
