// Dummy customer reviews.
export type Review = {
  id: number;
  name: string;
  company: string;
  rating: number;
  date: string;
  text: string;
  photo: string;
  status: "Approved" | "Pending";
};

const photo = (seed: string) =>
  `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(seed)}&backgroundColor=111111&textColor=FFC107`;

export const reviews: Review[] = [
  {
    id: 1,
    name: "Rajesh Menon",
    company: "Meridian Infra Pvt Ltd",
    rating: 5,
    date: "12 Mar 2026",
    text: "We rented two 150t crawlers for a flyover project. Machines arrived on schedule and the operators were extremely professional. Zero downtime across four months.",
    photo: photo("Rajesh Menon"),
    status: "Approved",
  },
  {
    id: 2,
    name: "Anita Deshpande",
    company: "Sunrise Power Systems",
    rating: 5,
    date: "02 Mar 2026",
    text: "Lekha Lifters handled our turbine erection lift plan end to end. Documentation, certification and safety briefing were all spotless.",
    photo: photo("Anita Deshpande"),
    status: "Approved",
  },
  {
    id: 3,
    name: "Vikram Sethi",
    company: "Sethi Constructions",
    rating: 4,
    date: "24 Feb 2026",
    text: "Good pricing and genuine equipment. Delivery took a day longer than promised but the team kept us informed throughout.",
    photo: photo("Vikram Sethi"),
    status: "Approved",
  },
  {
    id: 4,
    name: "Farhan Qureshi",
    company: "Deccan Steel Works",
    rating: 5,
    date: "18 Feb 2026",
    text: "Bought a used Tadano 80t through them. Inspection report matched reality exactly, which is rare in this market.",
    photo: photo("Farhan Qureshi"),
    status: "Approved",
  },
  {
    id: 5,
    name: "Priya Nair",
    company: "Coastal Ports Authority",
    rating: 4,
    date: "09 Feb 2026",
    text: "Reliable service partner for our port maintenance contracts. Their pan India support network is a real advantage.",
    photo: photo("Priya Nair"),
    status: "Approved",
  },
  {
    id: 6,
    name: "Harpreet Singh",
    company: "Northline Logistics",
    rating: 3,
    date: "28 Jan 2026",
    text: "Equipment quality is solid. Would like faster responses on quotation follow ups during peak season.",
    photo: photo("Harpreet Singh"),
    status: "Approved",
  },
  {
    id: 7,
    name: "Suresh Iyer",
    company: "Iyer Engineering",
    rating: 5,
    date: "15 Jan 2026",
    text: "Fifteen years of dealing with crane suppliers and this is the most transparent one we have worked with.",
    photo: photo("Suresh Iyer"),
    status: "Approved",
  },
  {
    id: 8,
    name: "Meera Kulkarni",
    company: "Greenwind Renewables",
    rating: 4,
    date: "04 Jan 2026",
    text: "Their all terrain fleet made our wind farm schedule possible. Operators knew the sites better than we did.",
    photo: photo("Meera Kulkarni"),
    status: "Pending",
  },
];
