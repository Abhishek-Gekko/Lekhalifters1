// Dummy product catalogue. Replace with API data later.
import crawler from "@/assets/crawler-crane.jpg";
import truck from "@/assets/truck-crane.jpg";
import rough from "@/assets/rough-terrain.jpg";
import allTerrain from "@/assets/all-terrain.jpg";
import boomLift from "@/assets/boom-lift.jpg";

export const categoryImages: Record<string, string> = {
  "Crawler Crane": crawler,
  "Truck Crane": truck,
  "Rough Terrain": rough,
  "All Terrain": allTerrain,
  "Boom Lift": boomLift,
};

export type Product = {
  id: number;
  name: string;
  brand: string;
  model: string;
  type: string;
  capacity: number; // tonnes
  price: number; // INR
  availability: "In Stock" | "On Request" | "Rental Only";
  image: string;
  gallery: string[];
  description: string;
  specs: Record<string, string>;
  features: string[];
  applications: string[];
};

const g = (t: string): string[] => [categoryImages[t] as string, crawler, truck, allTerrain];

export const products: Product[] = [
  {
    id: 1,
    name: "TitanTrack 250",
    brand: "Liebherr",
    model: "LR 1250",
    type: "Crawler Crane",
    capacity: 250,
    price: 42500000,
    availability: "In Stock",
    image: crawler,
    gallery: g("Crawler Crane"),
    description:
      "A heavy duty lattice boom crawler crane engineered for sustained high-capacity lifts on refinery, power and infrastructure projects.",
    specs: {
      "Max Capacity": "250 t",
      "Boom Length": "84 m",
      "Engine": "Diesel 400 kW",
      "Travel Speed": "1.2 km/h",
      "Operating Weight": "218 t",
      "Year": "2022",
    },
    features: ["Lattice boom system", "Variable counterweight", "Load moment indicator", "Cold weather package"],
    applications: ["Refinery erection", "Power plants", "Bridge construction"],
  },
  {
    id: 2,
    name: "TitanTrack 150",
    brand: "Kobelco",
    model: "CKE1350",
    type: "Crawler Crane",
    capacity: 150,
    price: 26800000,
    availability: "On Request",
    image: crawler,
    gallery: g("Crawler Crane"),
    description:
      "Compact crawler crane balancing lift capacity with quick site mobilisation, ideal for congested urban worksites.",
    specs: {
      "Max Capacity": "150 t",
      "Boom Length": "68 m",
      "Engine": "Diesel 250 kW",
      "Travel Speed": "1.4 km/h",
      "Operating Weight": "142 t",
      "Year": "2021",
    },
    features: ["Self assembly system", "Free fall winch", "Eco mode", "Camera assisted cabin"],
    applications: ["Urban towers", "Industrial sheds", "Precast handling"],
  },
  {
    id: 3,
    name: "RoadMaster 80",
    brand: "Tadano",
    model: "GT-800EX",
    type: "Truck Crane",
    capacity: 80,
    price: 15900000,
    availability: "In Stock",
    image: truck,
    gallery: g("Truck Crane"),
    description:
      "Highway-legal truck mounted crane offering rapid deployment between sites without additional transport equipment.",
    specs: {
      "Max Capacity": "80 t",
      "Boom Length": "47 m",
      "Engine": "Diesel 210 kW",
      "Road Speed": "75 km/h",
      "Operating Weight": "42 t",
      "Year": "2023",
    },
    features: ["Telescopic boom", "Outrigger monitoring", "Hydraulic jib", "Air conditioned cabin"],
    applications: ["Utility maintenance", "Steel erection", "Equipment shifting"],
  },
  {
    id: 4,
    name: "RoadMaster 50",
    brand: "Escorts",
    model: "TRX 5022",
    type: "Truck Crane",
    capacity: 50,
    price: 8400000,
    availability: "Rental Only",
    image: truck,
    gallery: g("Truck Crane"),
    description:
      "Economical mid-range truck crane widely used for warehouse, plant and general contracting lifts across India.",
    specs: {
      "Max Capacity": "50 t",
      "Boom Length": "34 m",
      "Engine": "Diesel 150 kW",
      "Road Speed": "70 km/h",
      "Operating Weight": "28 t",
      "Year": "2020",
    },
    features: ["4 section boom", "Load chart display", "Anti two-block", "Low fuel burn"],
    applications: ["Warehousing", "Plant maintenance", "General contracting"],
  },
  {
    id: 5,
    name: "TerraLift 45",
    brand: "Terex",
    model: "RT 45",
    type: "Rough Terrain",
    capacity: 45,
    price: 11200000,
    availability: "In Stock",
    image: rough,
    gallery: g("Rough Terrain"),
    description:
      "Four wheel drive rough terrain crane built for unprepared ground, slopes and remote project sites.",
    specs: {
      "Max Capacity": "45 t",
      "Boom Length": "33 m",
      "Engine": "Diesel 160 kW",
      "Gradeability": "70%",
      "Operating Weight": "31 t",
      "Year": "2022",
    },
    features: ["All wheel steering", "Crab mode", "Off-road tyres", "Tilting cabin"],
    applications: ["Mining support", "Wind farms", "Pipeline projects"],
  },
  {
    id: 6,
    name: "TerraLift 70",
    brand: "Liebherr",
    model: "LRT 1070",
    type: "Rough Terrain",
    capacity: 70,
    price: 17600000,
    availability: "On Request",
    image: rough,
    gallery: g("Rough Terrain"),
    description:
      "High capacity rough terrain crane with long telescopic boom and excellent stability on challenging terrain.",
    specs: {
      "Max Capacity": "70 t",
      "Boom Length": "50 m",
      "Engine": "Diesel 190 kW",
      "Gradeability": "65%",
      "Operating Weight": "45 t",
      "Year": "2023",
    },
    features: ["VarioBase outriggers", "Boom nose extension", "Digital load chart", "Safety cage access"],
    applications: ["Oil and gas", "Heavy civil", "Port maintenance"],
  },
  {
    id: 7,
    name: "OmniLift 130",
    brand: "Grove",
    model: "GMK 5130",
    type: "All Terrain",
    capacity: 130,
    price: 29500000,
    availability: "In Stock",
    image: allTerrain,
    gallery: g("All Terrain"),
    description:
      "Five axle all terrain crane combining road mobility with heavy lifting for nationwide project deployment.",
    specs: {
      "Max Capacity": "130 t",
      "Boom Length": "60 m",
      "Engine": "Diesel 320 kW",
      "Road Speed": "80 km/h",
      "Operating Weight": "60 t",
      "Year": "2023",
    },
    features: ["Megatrak suspension", "Twin engine option", "Luffing jib ready", "Remote diagnostics"],
    applications: ["Metro projects", "Telecom towers", "Heavy transport"],
  },
  {
    id: 8,
    name: "OmniLift 200",
    brand: "Liebherr",
    model: "LTM 1200",
    type: "All Terrain",
    capacity: 200,
    price: 51000000,
    availability: "On Request",
    image: allTerrain,
    gallery: g("All Terrain"),
    description:
      "Flagship all terrain crane for extreme reach and capacity, deployed on the country's largest infrastructure works.",
    specs: {
      "Max Capacity": "200 t",
      "Boom Length": "72 m",
      "Engine": "Diesel 400 kW",
      "Road Speed": "80 km/h",
      "Operating Weight": "96 t",
      "Year": "2024",
    },
    features: ["Telescopic 7 section boom", "Wind speed monitoring", "Automatic levelling", "Operator assist system"],
    applications: ["Wind turbine erection", "Refineries", "Long span bridges"],
  },
  {
    id: 9,
    name: "SkyReach 22",
    brand: "JLG",
    model: "E450AJ",
    type: "Boom Lift",
    capacity: 2,
    price: 3200000,
    availability: "In Stock",
    image: boomLift,
    gallery: g("Boom Lift"),
    description:
      "Articulating electric boom lift for clean indoor access work with zero emissions and quiet operation.",
    specs: {
      "Platform Height": "22 m",
      "Platform Capacity": "230 kg",
      "Power": "Electric 48 V",
      "Machine Width": "1.5 m",
      "Operating Weight": "6.4 t",
      "Year": "2023",
    },
    features: ["Non marking tyres", "Articulating jib", "Proportional controls", "Fast charge battery"],
    applications: ["Facility maintenance", "Airport hangars", "Retail fit-out"],
  },
  {
    id: 10,
    name: "SkyReach 40",
    brand: "Genie",
    model: "S-125",
    type: "Boom Lift",
    capacity: 3,
    price: 5600000,
    availability: "Rental Only",
    image: boomLift,
    gallery: g("Boom Lift"),
    description:
      "Telescopic diesel boom lift delivering exceptional working height and outreach for outdoor industrial access.",
    specs: {
      "Platform Height": "40 m",
      "Platform Capacity": "300 kg",
      "Power": "Diesel 4WD",
      "Machine Width": "2.5 m",
      "Operating Weight": "19 t",
      "Year": "2022",
    },
    features: ["4WD rough terrain", "Oscillating axle", "Platform rotation", "Self levelling"],
    applications: ["Plant shutdowns", "Shipyards", "Structural inspection"],
  },
  {
    id: 11,
    name: "TitanTrack 400",
    brand: "Sany",
    model: "SCC4000A",
    type: "Crawler Crane",
    capacity: 400,
    price: 68000000,
    availability: "On Request",
    image: crawler,
    gallery: g("Crawler Crane"),
    description:
      "Super heavy lift crawler crane for the most demanding erection tasks including wind and petrochemical sectors.",
    specs: {
      "Max Capacity": "400 t",
      "Boom Length": "108 m",
      "Engine": "Diesel 480 kW",
      "Travel Speed": "1.0 km/h",
      "Operating Weight": "352 t",
      "Year": "2023",
    },
    features: ["Superlift attachment", "Modular transport", "Dual winch drive", "Advanced safety limiter"],
    applications: ["Wind turbine erection", "Petrochemical", "Mega structures"],
  },
  {
    id: 12,
    name: "RoadMaster 120",
    brand: "Tadano",
    model: "GT-1200XL",
    type: "Truck Crane",
    capacity: 120,
    price: 24300000,
    availability: "In Stock",
    image: truck,
    gallery: g("Truck Crane"),
    description:
      "Long boom truck crane for high reach lifts with fast setup and dependable Japanese build quality.",
    specs: {
      "Max Capacity": "120 t",
      "Boom Length": "56 m",
      "Engine": "Diesel 280 kW",
      "Road Speed": "72 km/h",
      "Operating Weight": "54 t",
      "Year": "2024",
    },
    features: ["Sideways superlift", "Smart chart", "Hook rest camera", "Auto outrigger set"],
    applications: ["Infrastructure", "Cement plants", "Heavy fabrication"],
  },
];

export const brands = Array.from(new Set(products.map((p) => p.brand))).sort();
export const types = Array.from(new Set(products.map((p) => p.type)));
export const availabilities = ["In Stock", "On Request", "Rental Only"];

export const formatPrice = (v: number) =>
  "₹" + (v >= 10000000 ? (v / 10000000).toFixed(2) + " Cr" : (v / 100000).toFixed(1) + " L");
