import { Globe, Home, Sparkles } from "lucide-react";

export const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Programs", href: "#programs" },
  { name "Pricing", href: "#pricing" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export const features = [
  {
    icon: <Home className="h-8 w-8 text-blue-500" />,
    title: "Trusted Homestays",
    desc: "Live with carefully vetted local families for a true cultural immersion.",
  },
  {
    icon: <Globe className="h-8 w-8 text-green-500" />,
    title: "Cultural Immersion",
    desc: "Go beyond the classroom with guided excursions and local activities.",
  },
  {
    icon: <Sparkles className="h-8 w-8 text-purple-500" />,
    title: "Transparent Pricing",
    desc: "No hidden fees. Our program costs cover tuition, housing, and more.",
  },
];

export const testimonials = [
  {
    quote:
      "My summer in Seoul was life-changing. The homestay family was so kind, and I made friends from all over the world.",
    name: "Emily R.",
    details: "2023, USA",
    rating: 5,
  },
  {
    quote:
      "LanguBridge organized everything perfectly. The classes were challenging but fun, and the cultural trips were amazing.",
    name: "Carlos G.",
    details: "2023, Spain",
    rating: 5,
  },
  {
    quote:
      "I was nervous about going alone, but the staff and other students were so welcoming. I learned so much Japanese in just a month!",
    name: "Aisha K.",
    details: "2022, Canada",
    rating: 4,
  },
];

const programDetails = {
  tuition: "✓ Tuition & Dorm",
  pickup: "✓ Airport Pickup",
  insurance: "✓ Insurance",
};

export const programs = {
  "high-school": [
    {
      title: "Korea Summer A (HS)",
      dates: "June 15 - July 13",
      price: 4200,
      duration: "4 Weeks",
      features: [programDetails.tuition, programDetails.pickup, programDetails.insurance],
    },
    {
      title: "Japan Summer B (HS)",
      dates: "July 20 - August 17",
      price: 4800,
      duration: "4 Weeks",
      features: [programDetails.tuition, programDetails.pickup, programDetails.insurance],
    },
  ],
  college: [
    {
      title: "China Intensive (College)",
      dates: "June 1 - July 27",
      price: 6500,
      duration: "8 Weeks",
      features: [programDetails.tuition, "✓ Advanced Credits", programDetails.insurance],
    },
    {
      title: "Korea Semester (College)",
      dates: "August 25 - December 15",
      price: 12500,
      duration: "1 Semester",
      features: [programDetails.tuition, "✓ University Credits", programDetails.insurance],
    },
  ],
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};