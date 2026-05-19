export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  meta: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Best management, best interior, wonderful staff and absolutely tasty food.",
    name: "Google Reviewer",
    meta: "Visakhapatnam",
    rating: 5,
  },
  {
    id: "t2",
    quote:
      "Good service, delicious food priced reasonably, wonderful atmosphere. Will visit again.",
    name: "Google Reviewer",
    meta: "Local Guide",
    rating: 5,
  },
  {
    id: "t3",
    quote:
      "Starters are very delicious. Mutton Keema Biryani and Chicken Dum are mouth-watering. African Delight Ice Cream is truly awesome!",
    name: "Siva Krishna Reddy",
    meta: "6 months ago",
    rating: 5,
  },
  {
    id: "t4",
    quote:
      "Veg Fried Rice was delicious — full of veggies and sweet corn, perfect for two. Paneer dish was excellent too.",
    name: "Sayan Chatterjee",
    meta: "Local Guide",
    rating: 5,
  },
  {
    id: "t5",
    quote:
      "Chicken Dum Biryani here is on another level. Rich, fragrant and absolutely filling.",
    name: "Google Reviewer",
    meta: "Visakhapatnam",
    rating: 5,
  },
  {
    id: "t6",
    quote:
      "The apricot delight is what dreams are made of. Come for the food, stay for the desserts.",
    name: "Google Reviewer",
    meta: "Marripalem",
    rating: 5,
  },
  {
    id: "t7",
    quote:
      "Hosted my daughter's birthday here — the staff went above and beyond. Memories made for life.",
    name: "Priya Reddy",
    meta: "Local Guide",
    rating: 5,
  },
  {
    id: "t8",
    quote:
      "Drive-through is super convenient on weekdays. Quality stays the same as dine-in. Impressed.",
    name: "Ravi Tej",
    meta: "Verified Diner",
    rating: 5,
  },
];
