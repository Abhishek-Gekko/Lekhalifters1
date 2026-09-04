// Dummy quotation requests shown in the admin dashboard.
export type Quotation = {
  id: number;
  product: string;
  brand: string;
  model: string;
  customer: string;
  phone: string;
  email: string;
  company: string;
  quantity: number;
  requirements: string;
  date: string;
  status: "Pending" | "Approved" | "Closed";
};

export const quotations: Quotation[] = [
  {
    id: 1001,
    product: "TitanTrack 250",
    brand: "Liebherr",
    model: "LR 1250",
    customer: "Rajesh Menon",
    phone: "+91 98450 11223",
    email: "rajesh@meridianinfra.in",
    company: "Meridian Infra Pvt Ltd",
    quantity: 2,
    requirements: "Required for 6 month flyover project in Pune.",
    date: "18 Jul 2026",
    status: "Pending",
  },
  {
    id: 1002,
    product: "OmniLift 130",
    brand: "Grove",
    model: "GMK 5130",
    customer: "Anita Deshpande",
    phone: "+91 99870 45612",
    email: "anita@sunrisepower.com",
    company: "Sunrise Power Systems",
    quantity: 1,
    requirements: "Turbine erection, need luffing jib configuration.",
    date: "21 Jul 2026",
    status: "Approved",
  },
  {
    id: 1003,
    product: "RoadMaster 50",
    brand: "Escorts",
    model: "TRX 5022",
    customer: "Vikram Sethi",
    phone: "+91 90042 78341",
    email: "vikram@sethiconst.in",
    company: "Sethi Constructions",
    quantity: 3,
    requirements: "Monthly rental basis with operator.",
    date: "24 Jul 2026",
    status: "Pending",
  },
  {
    id: 1004,
    product: "SkyReach 40",
    brand: "Genie",
    model: "S-125",
    customer: "Farhan Qureshi",
    phone: "+91 88790 33210",
    email: "farhan@deccansteel.co.in",
    company: "Deccan Steel Works",
    quantity: 2,
    requirements: "Shutdown maintenance window in September.",
    date: "27 Jul 2026",
    status: "Closed",
  },
  {
    id: 1005,
    product: "TerraLift 70",
    brand: "Liebherr",
    model: "LRT 1070",
    customer: "Priya Nair",
    phone: "+91 97411 55890",
    email: "priya@coastalports.gov.in",
    company: "Coastal Ports Authority",
    quantity: 1,
    requirements: "Port side lifts, salt resistant coating preferred.",
    date: "30 Jul 2026",
    status: "Pending",
  },
  {
    id: 1006,
    product: "TitanTrack 400",
    brand: "Sany",
    model: "SCC4000A",
    customer: "Meera Kulkarni",
    phone: "+91 93720 66184",
    email: "meera@greenwind.in",
    company: "Greenwind Renewables",
    quantity: 1,
    requirements: "Wind farm erection in Gujarat, Q4 mobilisation.",
    date: "02 Aug 2026",
    status: "Pending",
  },
];
