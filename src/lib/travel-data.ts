export type Interest = "Culture" | "Food & drink" | "Nature" | "Design" | "Wellness";

export type Activity = {
  id: string;
  time: string;
  title: string;
  category: string;
  description: string;
  location: string;
  duration: string;
  cost: number;
  image: string;
  accent: string;
};

export type Trip = {
  destination: string;
  country: string;
  dates: string;
  travelers: number;
  budget: number;
  currency: string;
  pace: string;
  days: Array<{ id: number; label: string; date: string; activities: Activity[] }>;
};

export const destinationImage =
  "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1600&q=85";

export const kyotoTrip: Trip = {
  destination: "Kyoto",
  country: "Japan",
  dates: "Oct 14 – 20, 2025",
  travelers: 2,
  budget: 4200,
  currency: "USD",
  pace: "Balanced",
  days: [
    {
      id: 1,
      label: "Day 1",
      date: "Tue, Oct 14",
      activities: [
        { id: "fushimi", time: "10:00 AM", title: "Fushimi Inari Taisha", category: "Culture", description: "A gentle morning through Kyoto's most iconic vermilion torii gates, before the crowds arrive.", location: "Fushimi Ward", duration: "2 hrs", cost: 0, image: "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?auto=format&fit=crop&w=900&q=80", accent: "saffron" },
        { id: "tea", time: "1:00 PM", title: "Tea ceremony at Camellia", category: "Local experience", description: "Learn the quiet rituals of matcha with a local tea master in a 300-year-old machiya.", location: "Higashiyama", duration: "1.5 hrs", cost: 42, image: "https://images.unsplash.com/photo-1545048702-79362596cdc9?auto=format&fit=crop&w=900&q=80", accent: "sage" },
        { id: "gion", time: "4:30 PM", title: "Wander Gion backstreets", category: "Explore", description: "Lantern-lit lanes, tiny craft shops, and a sunset pause beside the Shirakawa canal.", location: "Gion", duration: "2 hrs", cost: 0, image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=900&q=80", accent: "plum" },
      ],
    },
    {
      id: 2,
      label: "Day 2",
      date: "Wed, Oct 15",
      activities: [
        { id: "arashiyama", time: "10:30 AM", title: "Arashiyama bamboo grove", category: "Nature", description: "Take the scenic route through the grove, then follow the river trail toward Okochi Sanso.", location: "Arashiyama", duration: "3 hrs", cost: 12, image: "https://images.unsplash.com/photo-1526481280695-3c687fd643ed?auto=format&fit=crop&w=900&q=80", accent: "sage" },
        { id: "soba", time: "2:00 PM", title: "Handmade soba lunch", category: "Food & drink", description: "A neighborhood favorite known for seasonal tempura and buckwheat noodles made fresh each morning.", location: "Saga-Tenryuji", duration: "1 hr", cost: 28, image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=900&q=80", accent: "saffron" },
        { id: "river", time: "4:00 PM", title: "Hozugawa riverside walk", category: "Slow travel", description: "A calm golden-hour walk with mountain views and time to stop for yatsuhashi sweets.", location: "Katsura River", duration: "1.5 hrs", cost: 0, image: "https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f?auto=format&fit=crop&w=900&q=80", accent: "blue" },
      ],
    },
    {
      id: 3,
      label: "Day 3",
      date: "Thu, Oct 16",
      activities: [
        { id: "philosopher", time: "10:00 AM", title: "Philosopher's Path", category: "Nature", description: "A leafy canal-side stroll connecting small temples, neighborhood coffee, and a local pottery studio.", location: "Sakyo Ward", duration: "3 hrs", cost: 18, image: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&fit=crop&w=900&q=80", accent: "sage" },
        { id: "nishiki", time: "2:30 PM", title: "Nishiki Market tasting walk", category: "Food & drink", description: "Taste Kyoto's pantry one stall at a time, guided by the makers who keep the market alive.", location: "Downtown Kyoto", duration: "2 hrs", cost: 35, image: "https://images.unsplash.com/photo-1554797589-7241bb691973?auto=format&fit=crop&w=900&q=80", accent: "plum" },
      ],
    },
  ],
};

export const recommendedDestinations = [
  { name: "Kyoto", country: "Japan", reason: "For slow mornings, craft, and incredible food", image: destinationImage },
  { name: "Lisbon", country: "Portugal", reason: "For golden light, design, and neighborhood energy", image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=900&q=80" },
  { name: "Copenhagen", country: "Denmark", reason: "For thoughtful design and easy city wandering", image: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?auto=format&fit=crop&w=900&q=80" },
];
