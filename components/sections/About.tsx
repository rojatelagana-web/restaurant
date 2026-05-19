"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StatCard } from "@/components/ui/StatCard";
import { stats } from "@/lib/data/site";

export function About() {
  return (
    <section id="about" className="relative py-24 lg:py-36 bg-cream-light">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[0_30px_70px_-20px_rgba(26,26,26,0.3)]">
              <Image
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85"
                alt="Warm interior of Celebrations Restaurant"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            {/* Floating quote card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-8 -right-4 lg:-right-12 max-w-xs bg-charcoal text-cream-light p-6 rounded-2xl shadow-[0_20px_40px_-12px_rgba(26,26,26,0.4)]"
            >
              <p className="font-accent text-xl leading-relaxed">
                &ldquo;Where your best moments become memories.&rdquo;
              </p>
              <div className="divider-gold w-10 mt-4" />
              <p className="text-xs text-cream-light/60 mt-3 uppercase tracking-widest">
                Our Promise · Since Day One
              </p>
            </motion.div>
          </motion.div>

          {/* Right — content */}
          <div>
            <SectionHeader
              eyebrow="Our Story"
              title={
                <>
                  Born to Host
                  <br />
                  <span className="text-gold-gradient">Your Best Moments.</span>
                </>
              }
            />
            <div className="mt-8 space-y-5 text-base lg:text-lg text-muted leading-relaxed">
              <p>
                Celebrations Restaurant isn&rsquo;t just a place to eat — it&rsquo;s where
                Visakhapatnam comes to mark its milestones.
              </p>
              <p>
                From quiet weekday lunches to full-house birthday feasts, we&rsquo;ve been
                the backdrop to over 6,600 stories, each one ending with satisfied
                smiles and empty plates.
              </p>
              <p>
                Our kitchen breathes North India — slow-cooked gravies, smoky tandoor
                meats, rich biryanis layered with love — served in an ambiance
                designed to make every visit feel special.
              </p>
              <p>
                Located in the heart of Marripalem, we&rsquo;re your neighborhood
                restaurant that never settles for ordinary.
              </p>
            </div>
          </div>
        </div>

        {/* Stat cards */}
        <div className="mt-20 lg:mt-28 grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((s, i) => (
            <StatCard key={s.label} value={s.value} label={s.label} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
