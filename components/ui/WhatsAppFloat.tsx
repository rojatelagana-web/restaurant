import { MessageCircle } from "lucide-react";
import { site } from "@/lib/data/site";

export function WhatsAppFloat() {
  return (
    <a
      href={site.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="whatsapp-bounce fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-gold text-charcoal shadow-[0_10px_30px_-6px_rgba(201,149,58,0.55)] hover:scale-110 hover:shadow-[0_14px_40px_-6px_rgba(201,149,58,0.7)] transition-all"
    >
      <MessageCircle className="w-6 h-6" fill="currentColor" strokeWidth={1.5} />
      <span className="absolute right-full mr-3 px-3 py-1.5 rounded-full bg-charcoal text-cream-light text-xs whitespace-nowrap opacity-0 translate-x-2 pointer-events-none transition-all duration-300 group-hover:opacity-100 hidden md:block">
        Chat with us
      </span>
    </a>
  );
}
