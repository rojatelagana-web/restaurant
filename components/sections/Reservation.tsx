"use client";

import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import {
  CalendarDays,
  Clock,
  MapPin,
  Phone,
  Sparkles,
  Users,
  CheckCircle2,
  ArrowRight,
  CarFront,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/data/site";

type FormValues = {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  occasion: string;
  notes: string;
};

const TIME_SLOTS = [
  "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
  "3:00 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM",
  "8:30 PM", "9:00 PM", "9:30 PM", "10:00 PM", "10:30 PM",
];

const OCCASIONS = [
  "Casual Dining",
  "Birthday",
  "Anniversary",
  "Corporate",
  "Family Get-Together",
  "Other",
];

export function Reservation() {
  const [submitted, setSubmitted] = useState(false);
  const [mapVisible, setMapVisible] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    defaultValues: {
      name: "",
      phone: "",
      date: "",
      time: "",
      guests: "2",
      occasion: "Casual Dining",
      notes: "",
    },
  });

  // Lazy-load map iframe when section comes into view
  useEffect(() => {
    if (!mapRef.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMapVisible(true);
          obs.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    obs.observe(mapRef.current);
    return () => obs.disconnect();
  }, []);

  const onSubmit = async (data: FormValues) => {
    // Simulate a reservation request — wire to your backend / WhatsApp link as needed.
    await new Promise((r) => setTimeout(r, 800));
    console.info("Reservation submitted:", data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-cream-light">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Reservations"
          title={
            <>
              Your Table is
              <br />
              <span className="text-gold-gradient">Waiting.</span>
            </>
          }
          description="Weekends fill up fast — book your table early to avoid the wait. Tell us when, who and what we're celebrating, and we'll take care of the rest."
        />

        <div className="mt-14 grid lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Form */}
          <div className="lg:col-span-3 relative">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  className="bg-cream rounded-2xl border border-gold/40 p-10 text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/15 text-gold mb-5">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-3xl text-charcoal">
                    Reservation Received!
                  </h3>
                  <p className="mt-3 text-muted">
                    Thank you — we&rsquo;ll call you on{" "}
                    <span className="font-mono">{site.phone}</span> within the hour
                    to confirm your table. Looking forward to hosting you.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit(onSubmit)}
                  className="bg-cream rounded-2xl border border-border-warm p-6 sm:p-8 lg:p-10"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field
                      label="Full Name"
                      error={errors.name?.message}
                      htmlFor="name"
                    >
                      <input
                        id="name"
                        type="text"
                        placeholder="Your name"
                        className="form-field"
                        {...register("name", {
                          required: "Please enter your name",
                          minLength: { value: 2, message: "Name is too short" },
                        })}
                      />
                    </Field>

                    <Field
                      label="Phone Number"
                      error={errors.phone?.message}
                      htmlFor="phone"
                    >
                      <input
                        id="phone"
                        type="tel"
                        placeholder="10-digit mobile"
                        inputMode="numeric"
                        className="form-field"
                        {...register("phone", {
                          required: "Phone number is required",
                          pattern: {
                            value: /^[0-9+\-\s]{10,15}$/,
                            message: "Enter a valid phone number",
                          },
                        })}
                      />
                    </Field>

                    <Field
                      label="Date"
                      error={errors.date?.message}
                      htmlFor="date"
                      icon={<CalendarDays className="w-4 h-4" />}
                    >
                      <input
                        id="date"
                        type="date"
                        className="form-field"
                        min={new Date().toISOString().split("T")[0]}
                        {...register("date", { required: "Please pick a date" })}
                      />
                    </Field>

                    <Field
                      label="Time"
                      error={errors.time?.message}
                      htmlFor="time"
                      icon={<Clock className="w-4 h-4" />}
                    >
                      <select
                        id="time"
                        className="form-field"
                        {...register("time", { required: "Please pick a time" })}
                      >
                        <option value="">Select a time</option>
                        {TIME_SLOTS.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </Field>

                    <Field
                      label="Guests"
                      error={errors.guests?.message}
                      htmlFor="guests"
                      icon={<Users className="w-4 h-4" />}
                    >
                      <input
                        id="guests"
                        type="number"
                        min={1}
                        max={50}
                        className="form-field"
                        {...register("guests", {
                          required: "Number of guests is required",
                          min: { value: 1, message: "At least 1 guest" },
                          max: { value: 50, message: "For larger groups, call us" },
                        })}
                      />
                    </Field>

                    <Field
                      label="Occasion"
                      htmlFor="occasion"
                      icon={<Sparkles className="w-4 h-4" />}
                    >
                      <select
                        id="occasion"
                        className="form-field"
                        {...register("occasion")}
                      >
                        {OCCASIONS.map((o) => (
                          <option key={o} value={o}>
                            {o}
                          </option>
                        ))}
                      </select>
                    </Field>
                  </div>

                  <Field label="Special Requests" htmlFor="notes" className="mt-5">
                    <textarea
                      id="notes"
                      rows={3}
                      placeholder="Cake order, seating preference, dietary needs…"
                      className="form-field resize-none"
                      {...register("notes")}
                    />
                  </Field>

                  <div className="mt-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <p className="text-xs text-muted">
                      By submitting, you agree to be contacted for booking
                      confirmation.
                    </p>
                    <Button size="lg" type="submit" disabled={isSubmitting}>
                      {isSubmitting ? "Confirming…" : "Confirm Reservation"}
                      {!isSubmitting && <ArrowRight className="w-4 h-4" />}
                    </Button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          {/* Contact info + map */}
          <aside className="lg:col-span-2 space-y-6">
            <div className="bg-charcoal text-cream-light rounded-2xl p-7 lg:p-8 shadow-[0_20px_50px_-20px_rgba(26,26,26,0.4)]">
              <p className="eyebrow !text-gold mb-5">Find Us</p>
              <ul className="space-y-5">
                <InfoItem Icon={MapPin}>
                  <p>{site.address.line1}</p>
                  <p className="text-cream-light/70">{site.address.line2}</p>
                </InfoItem>
                <InfoItem Icon={Phone}>
                  <a
                    href={`tel:${site.phoneRaw}`}
                    className="font-mono hover:text-gold transition-colors"
                  >
                    {site.phone}
                  </a>
                  <p className="text-xs text-cream-light/60 mt-0.5">
                    Tap to call on mobile
                  </p>
                </InfoItem>
                <InfoItem Icon={Clock}>
                  <p>{site.hours}</p>
                </InfoItem>
                <InfoItem Icon={CarFront}>
                  <p>Dine-In · Drive-Through · Delivery</p>
                </InfoItem>
              </ul>
            </div>

            <div
              ref={mapRef}
              className="aspect-[4/3] rounded-2xl overflow-hidden border border-border-warm bg-cream"
            >
              {mapVisible && (
                <iframe
                  src={site.mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Celebrations Restaurant location on Google Maps"
                />
              )}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
  icon,
  className,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label
        htmlFor={htmlFor}
        className="flex items-center gap-2 text-xs uppercase tracking-widest text-charcoal/70 mb-2"
      >
        {icon}
        {label}
      </label>
      {children}
      {error && <p className="mt-1.5 text-xs text-red-600">{error}</p>}
    </div>
  );
}

function InfoItem({
  Icon,
  children,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-4">
      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gold/15 text-gold shrink-0">
        <Icon className="w-4 h-4" />
      </span>
      <div className="text-sm leading-relaxed pt-1.5">{children}</div>
    </li>
  );
}
