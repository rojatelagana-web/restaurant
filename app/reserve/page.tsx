import type { Metadata } from "next";
import { Reservation } from "@/components/sections/Reservation";

export const metadata: Metadata = {
  title: "Reserve a Table — Book Your Celebration",
  description:
    "Reserve your table at Celebrations Restaurant Visakhapatnam. Birthdays, anniversaries, family dinners and corporate gatherings — let us host your next celebration.",
};

export default function ReservePage() {
  return (
    <div className="pt-24 lg:pt-28">
      <Reservation />
    </div>
  );
}
