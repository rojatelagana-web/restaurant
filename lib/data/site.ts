export const site = {
  name: "Celebrations Restaurant",
  tagline: "Where Every Meal Is an Occasion.",
  description:
    "Visakhapatnam's top-rated North Indian restaurant with 4.5★ and 6,600+ reviews. Authentic flavours, premium ambiance, dine-in / drive-through / delivery.",
  url: "https://celebrationsrestaurant.in",
  phone: "095813 40475",
  phoneRaw: "+919581340475",
  whatsapp: "https://wa.me/919581340475",
  address: {
    line1: "FCI Nagar, Railway Colony, Marripalem",
    line2: "Visakhapatnam, Andhra Pradesh 530018",
    locality: "Marripalem",
    region: "Andhra Pradesh",
    postalCode: "530018",
    country: "IN",
  },
  hours: "Open Daily · 11 AM – 11 PM",
  hoursShort: "Open until 11 PM",
  priceRange: "₹200–₹1,200",
  rating: 4.5,
  reviewCount: 6653,
  cuisine: "North Indian",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3801.0!2d83.18!3d17.74!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCelebrations%20Restaurant%20Marripalem!5e0!3m2!1sen!2sin!4v1700000000000",
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=Celebrations+Restaurant+Marripalem+Visakhapatnam",
  socials: {
    googleReviews:
      "https://www.google.com/search?q=Celebrations+Restaurant+Marripalem+Visakhapatnam+reviews",
    googlePhotos:
      "https://www.google.com/search?q=Celebrations+Restaurant+Marripalem+Visakhapatnam+photos",
    instagram: "#",
    facebook: "#",
  },
};

export const featureItems = [
  { icon: "🍽️", label: "Dine-In Experience" },
  { icon: "🚗", label: "Drive-Through" },
  { icon: "🛵", label: "No-Contact Delivery" },
  { icon: "📞", label: site.phone },
] as const;

export const stats = [
  { value: "6,653+", label: "Happy Diners Reviewed" },
  { value: "4.5 ★", label: "Average Rating" },
  { value: "10+ Yrs", label: "Serving Visakhapatnam" },
  { value: "₹200", label: "Starting Price" },
] as const;
