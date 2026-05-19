import type { Metadata } from "next";
import { Gallery } from "@/components/sections/Gallery";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Gallery — Food, Ambiance & Celebrations",
  description:
    "A visual tour of Celebrations Restaurant Visakhapatnam — our signature dishes, warm interiors, and the celebrations our guests have hosted with us.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="relative pt-36 lg:pt-48 pb-12 bg-cream-light overflow-hidden">
        <div
          aria-hidden
          className="absolute top-0 inset-x-0 h-[60vh] opacity-30 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at top, rgba(201,149,58,0.25), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <SectionHeader
            eyebrow="Gallery"
            title={
              <>
                Moments, Plates &
                <br />
                <span className="text-gold-gradient">Memories in Motion.</span>
              </>
            }
            description="Every photograph is a real moment from our kitchen, our dining room, and the celebrations you've trusted us with."
            align="center"
          />
        </div>
      </section>
      <Gallery />
    </>
  );
}
