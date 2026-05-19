"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

interface Props {
  value: string;
  label: string;
  index: number;
}

// Extracts a numeric value (if any) from the start of a string and returns the rest.
function splitValue(value: string): { num: number | null; suffix: string } {
  const match = value.match(/^([\d,]+(?:\.\d+)?)/);
  if (!match) return { num: null, suffix: value };
  const num = parseFloat(match[1].replace(/,/g, ""));
  const suffix = value.slice(match[0].length);
  return { num, suffix };
}

export function StatCard({ value, label, index }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-30%" });

  const { num, suffix } = splitValue(value);
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => {
    if (num === null) return value;
    const isFloat = !Number.isInteger(num);
    const out = isFloat ? latest.toFixed(1) : Math.round(latest).toLocaleString("en-IN");
    return `${out}${suffix}`;
  });

  useEffect(() => {
    if (!inView || num === null) return;
    const controls = animate(motionValue, num, {
      duration: 1.8,
      ease: [0.21, 0.47, 0.32, 0.98],
      delay: index * 0.12,
    });
    return () => controls.stop();
  }, [inView, num, motionValue, index]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="relative bg-cream-light rounded-2xl p-7 border-t-2 border-gold shadow-[0_8px_24px_-16px_rgba(26,26,26,0.18)]"
    >
      <motion.p className="font-display text-5xl text-charcoal leading-none">
        {num === null ? value : <motion.span>{rounded}</motion.span>}
      </motion.p>
      <p className="text-sm text-muted mt-3 uppercase tracking-wider">{label}</p>
    </motion.div>
  );
}
