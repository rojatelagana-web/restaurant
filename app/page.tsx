import { Hero } from "@/components/sections/Hero";
import { FeatureBar } from "@/components/sections/FeatureBar";
import { About } from "@/components/sections/About";
import { MenuHighlights } from "@/components/sections/MenuHighlights";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { Gallery } from "@/components/sections/Gallery";
import { Reservation } from "@/components/sections/Reservation";
import { CTABanner } from "@/components/sections/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeatureBar />
      <About />
      <MenuHighlights />
      <WhyChooseUs />
      <Testimonials />
      <Gallery />
      <Reservation />
      <CTABanner />
    </>
  );
}
