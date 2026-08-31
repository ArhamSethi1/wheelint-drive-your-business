// Public marketing content exposed through the MCP server.
// Mirrors what the website already shows on /pricing, /features and /contact.

export const PLANS = [
  {
    id: "annual",
    name: "Annual",
    note: "1 year commitment",
    price: "₹12,000",
    unit: "per year, per business location",
    badge: null as string | null,
    savings: null as string | null,
  },
  {
    id: "two-year",
    name: "2-Year Plan",
    note: "Best balance of savings & flexibility",
    price: "₹19,200",
    unit: "per 2 years, per business location",
    listPrice: "₹24,000",
    badge: "Most Popular",
    savings: "Save 20% — you save ₹4,800",
  },
  {
    id: "three-year",
    name: "3-Year Plan",
    note: "Maximum savings for long-term growth",
    price: "₹25,200",
    unit: "per 3 years, per business location",
    listPrice: "₹36,000",
    badge: "Best Value",
    savings: "Save 30% — you save ₹10,800",
  },
  {
    id: "enterprise",
    name: "Enterprise ERP",
    note: "For OEMs and multi-location dealer networks",
    price: "Custom pricing",
    unit: "quoted per network",
    badge: null,
    savings: null,
  },
] as const;

export const FEATURE_CATEGORIES = [
  {
    id: "billing",
    title: "Billing & Invoicing",
    summary:
      "Create service, parts and combined invoices with tax and discount handling built in.",
    visibility:
      "Every invoice stays linked to the vehicle, job and payment status behind it.",
  },
  {
    id: "job-cards",
    title: "Job Cards & Service Management",
    summary:
      "Take a vehicle from estimate to job card to delivery with clear ownership at each step.",
    visibility:
      "Live status of every open job, assigned technician and pending approval.",
  },
  {
    id: "inventory",
    title: "Spare Parts & Inventory",
    summary:
      "Manage parts, stock locations, purchases and consumption in one register.",
    visibility: "Stock levels, reorder alerts and the value tied up in inventory.",
  },
  {
    id: "customers",
    title: "Customers & Vehicles",
    summary:
      "Maintain owners, vehicles, service history and follow-ups against a single record.",
    visibility: "Complete visit history and due services for any vehicle in seconds.",
  },
  {
    id: "workshop-operations",
    title: "Workshop Operations",
    summary:
      "Plan appointments, bay allocation and technician workload across the working day.",
    visibility: "Where capacity is free, where it is stretched and what is scheduled next.",
  },
  {
    id: "analytics",
    title: "Reports & Analytics",
    summary:
      "Turn daily activity into revenue, service, parts and performance reporting.",
    visibility: "Trends over time and comparison across branches or outlets.",
  },
] as const;

export const SOLUTIONS = [
  {
    id: "workshops",
    title: "Workshops",
    summary:
      "Independent service centres running billing, job cards and parts with a small team.",
    highlights: ["Faster billing at delivery", "Clear job status", "Parts usage per job"],
  },
  {
    id: "multibrand-networks",
    title: "Multibrand service networks",
    summary:
      "Service businesses handling many makes and models across one or more locations.",
    highlights: [
      "Consistent process across sites",
      "Shared customer and vehicle records",
      "Comparable location reporting",
    ],
  },
  {
    id: "dealerships",
    title: "Dealerships",
    summary:
      "Sales, service and spares departments that need to work from the same records.",
    highlights: [
      "Departmental clarity",
      "Connected customer history",
      "Accounts-ready documentation",
    ],
  },
  {
    id: "oems",
    title: "OEMs & dealer networks",
    summary: "Enterprise operations managing authorised outlets and network-wide standards.",
    highlights: [
      "Multi-location management",
      "Network-level visibility",
      "Standardised workflows",
    ],
  },
] as const;

export const CONTACT = {
  company: "Wheelint by Tylect Technologies",
  email: "teams@wheelint.com",
  phone: "+91 93580 02457",
  whatsapp: "https://wa.me/919358002457",
  address:
    "1st Floor, F-27, Gautam Marg, Sector 6, Vaishali Nagar, Jaipur, Rajasthan 302021, India",
  pages: {
    home: "/",
    features: "/features",
    pricing: "/pricing",
    about: "/about",
    contact: "/contact",
  },
} as const;
