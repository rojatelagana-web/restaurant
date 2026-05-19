import { Star } from "lucide-react";
import type { Testimonial } from "@/lib/data/testimonials";

export function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <article className="shrink-0 w-[340px] md:w-[400px] bg-cream-light rounded-2xl p-7 border border-border-warm/60 shadow-[0_8px_24px_-12px_rgba(26,26,26,0.12)]">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-gold text-gold" />
        ))}
      </div>
      <blockquote className="font-accent text-lg leading-relaxed text-charcoal/85">
        &ldquo;{t.quote}&rdquo;
      </blockquote>
      <footer className="mt-5 pt-5 border-t border-border-warm/70">
        <p className="text-sm font-medium text-charcoal">{t.name}</p>
        <p className="text-xs text-muted mt-0.5">{t.meta}</p>
      </footer>
    </article>
  );
}
