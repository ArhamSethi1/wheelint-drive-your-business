import { createFileRoute } from "@tanstack/react-router";
import {
  BarChart3,
  Bell,
  Boxes,
  CalendarClock,
  Car,
  ClipboardList,
  Receipt,
  ShieldCheck,
  Truck,
  Users,
  Wallet,
  Wrench,
} from "lucide-react";

import dashboardHero from "@/assets/dashboard-hero.jpg";
import phoneApp from "@/assets/phone-app.jpg";
import screenAnalytics from "@/assets/screen-analytics.jpg";
import screenBilling from "@/assets/screen-billing.jpg";
import screenInventory from "@/assets/screen-inventory.jpg";
import { customerPhoto, jobCardPhoto, workshopOpsPhoto } from "@/assets/photos";
import { DeviceMockup } from "@/components/site/device-mockup";
import {
  CtaBand,
  TONES,
  FeatureCard,
  Reveal,
  ScreenFrame,
  Section,
  SectionHeading,
} from "@/components/site/primitives";


export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "Features — Workshop & Dealership Management | Wheelint" },
      {
        name: "description",
        content:
          "Wheelint is a software for Automobile Billing, job cards, spare parts, customers and reporting in one connected platform — for workshops, dealerships and dealer networks.",
      },
      {
        property: "og:title",
        content: "Wheelint Features — Workshop & Dealership Management",
      },
      {
        property: "og:description",
        content:
          "See how Wheelint handles automobile billing, service job cards, parts inventory, customer records and multi-location reporting.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/features" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/features" }],
  }),
  component: FeaturesPage,
});

type Category = {
  icon: React.ReactNode;
  title: string;
  copy: string;
  visibility: string;
  matters: string;
  image?: string;
  alt?: string;
  photo?: boolean;

};

const CATEGORIES: Category[] = [
  {
    icon: <Receipt className="h-7 w-7" />,
    title: "Billing & Invoicing",
    copy: "Create service, parts and combined invoices with tax and discount handling built in.",
    visibility: "Every invoice stays linked to the vehicle, job and payment status behind it.",
    matters: "Billing stops being a separate exercise from the work that was done.",
    image: screenBilling,
    alt: "Automobile tax invoice screen with parts and labour line items and payment summary",
  },
  {
    icon: <ClipboardList className="h-7 w-7" />,
    title: "Job Cards & Service Management",
    copy: "Take a vehicle from estimate to job card to delivery with clear ownership at each step.",
    visibility: "Live status of every open job, assigned technician and pending approval.",
    matters: "Nothing sits unnoticed and customers get honest answers on timelines.",
    image: jobCardPhoto,
    alt: "Service advisor reviewing a digital job card with customers beside a lifted vehicle",
    photo: true,
  },
  {
    icon: <Boxes className="h-7 w-7" />,
    title: "Spare Parts & Inventory",
    copy: "Manage parts, stock locations, purchases and consumption in one register.",
    visibility: "Stock levels, reorder alerts and the value tied up in inventory.",
    matters: "Fewer stock-outs, less dead inventory and accurate parts costing on each job.",
    image: screenInventory,
    alt: "Spare parts inventory screen with stock levels, low stock alerts and supplier details",
  },
  {
    icon: <Users className="h-7 w-7" />,
    title: "Customers & Vehicles",
    copy: "Maintain owners, vehicles, service history and follow-ups against a single record.",
    visibility: "Complete visit history and due services for any vehicle in seconds.",
    matters: "Repeat business becomes easier because the relationship is documented.",
    image: customerPhoto,
    alt: "Sales advisor speaking with a couple seated in a car at a dealership",
    photo: true,
  },
  {
    icon: <Wrench className="h-7 w-7" />,
    title: "Workshop Operations",
    copy: "Plan appointments, bay allocation and technician workload across the working day.",
    visibility: "Where capacity is free, where it is stretched and what is scheduled next.",
    matters: "The floor runs to a plan instead of reacting to whatever arrives.",
    image: workshopOpsPhoto,
    alt: "Two technicians inspecting the underside of a vehicle on a workshop lift",
    photo: true,
  },
  {
    icon: <BarChart3 className="h-7 w-7" />,
    title: "Reports & Analytics",
    copy: "Turn daily activity into revenue, service, parts and performance reporting.",
    visibility: "Trends over time and comparison across branches or outlets.",
    matters: "Decisions rest on records from the business, not on estimates.",
    image: screenAnalytics,
    alt: "Analytics dashboard comparing branch performance and service revenue for a dealer network",
  },
];

const CAPABILITY_ICONS = [
  { icon: <Receipt className="h-6 w-6" />, label: "Invoices", chip: "chip-blue" },
  { icon: <ClipboardList className="h-6 w-6" />, label: "Job cards", chip: "chip-orange" },
  { icon: <Boxes className="h-6 w-6" />, label: "Parts", chip: "chip-cyan" },
  { icon: <Users className="h-6 w-6" />, label: "Customers", chip: "chip-navy" },
  { icon: <Car className="h-6 w-6" />, label: "Vehicles", chip: "chip-green" },
  { icon: <CalendarClock className="h-6 w-6" />, label: "Scheduling", chip: "chip-blue" },
  { icon: <Truck className="h-6 w-6" />, label: "Purchases", chip: "chip-orange" },
  { icon: <ShieldCheck className="h-6 w-6" />, label: "Warranty", chip: "chip-cyan" },
  { icon: <Wallet className="h-6 w-6" />, label: "Payments", chip: "chip-navy" },
  { icon: <Bell className="h-6 w-6" />, label: "Reminders", chip: "chip-green" },
  { icon: <Wrench className="h-6 w-6" />, label: "Technicians", chip: "chip-blue" },
  { icon: <BarChart3 className="h-6 w-6" />, label: "Reports", chip: "chip-orange" },
];


const SOLUTIONS = [
  {
    title: "Workshops",
    copy: "Independent service centres running billing, job cards and parts with a small team.",
    points: ["Faster billing at delivery", "Clear job status", "Parts usage per job"],
  },
  {
    title: "Multibrand service networks",
    copy: "Service businesses handling many makes and models across one or more locations.",
    points: [
      "Consistent process across sites",
      "Shared customer and vehicle records",
      "Comparable location reporting",
    ],
  },
  {
    title: "Dealerships",
    copy: "Sales, service and spares departments that need to work from the same records.",
    points: [
      "Departmental clarity",
      "Connected customer history",
      "Accounts-ready documentation",
    ],
  },
  {
    title: "OEMs & dealer networks",
    copy: "Enterprise operations managing authorised outlets and network-wide standards.",
    points: [
      "Multi-location management",
      "Network-level visibility",
      "Standardised workflows",
    ],
  },
];

function FeaturesPage() {
  return (
    <>
      <section className="bg-sky-wash relative overflow-hidden">
        <div
          aria-hidden="true"
          className="grid-lines pointer-events-none absolute inset-0 opacity-30"
        />
        <div className="relative mx-auto grid w-full max-w-[88rem] items-center gap-14 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div>
            <p className="eyebrow rise-in">Features &amp; solutions</p>
            <h1
              className="rise-in mt-6 text-5xl font-semibold leading-[1.03] sm:text-6xl lg:text-7xl"
              style={{ animationDelay: "90ms" }}
            >
              Every Operation,{" "}
              <span className="text-bulge">
                <span className="text-ember">One Platform</span>
              </span>

            </h1>
            <p
              className="rise-in mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
              style={{ animationDelay: "180ms" }}
            >
              Wheelint covers billing, service, spare parts, customers and
              reporting as one connected system — so information entered once is
              useful everywhere else.
            </p>
            <div
              className="rise-in mt-10 flex flex-wrap gap-3"
              style={{ animationDelay: "260ms" }}
            >
              {["Billing", "Job cards", "Inventory", "Analytics"].map((chip, i) => (
                <span
                  key={chip}
                  className={`rounded-full px-5 py-2.5 text-base font-semibold ${
                    ["tint-blue", "tint-orange", "tint-cyan", "tint-navy"][i]
                  }`}
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
          <div className="rise-in" style={{ animationDelay: "300ms" }}>
            <div className="float-slow">
              <DeviceMockup
                laptopSrc={dashboardHero}
                phoneSrc={phoneApp}
                alt="Wheelint dashboard on a laptop with the mobile app alongside"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <Section>
        <SectionHeading
          eyebrow="Core capabilities"
          title="Six areas that carry the business"
          copy="Each area answers the same three questions: what it does, what it makes visible and why that matters on the floor."
        />

        <Reveal delay={80} className="mt-10">
          <div className="flex flex-wrap gap-3">
            {CAPABILITY_ICONS.map((item) => (
              <span
                key={item.label}
                className="hover-lift surface-panel flex items-center gap-2.5 rounded-2xl px-4 py-3 text-sm font-semibold"
              >
                <span
                  aria-hidden="true"
                  className={`inline-flex h-9 w-9 items-center justify-center rounded-xl ${item.chip}`}
                >
                  {item.icon}
                </span>
                {item.label}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="mt-14 space-y-16 lg:space-y-24">
          {CATEGORIES.map((item, index) => (
            <Reveal key={item.title}>
              <div
                className={`grid gap-8 lg:items-center lg:gap-14 ${
                  item.image ? "lg:grid-cols-[1fr_1.1fr]" : "lg:grid-cols-2"
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : undefined}>
                  <div
                    className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl chip-${TONES[index % TONES.length]}`}
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-3xl font-semibold sm:text-4xl">{item.title}</h3>
                  <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                    {item.copy}
                  </p>
                  <dl className="mt-7 space-y-5 border-t border-hairline pt-6">
                    <div>
                      <dt className="eyebrow">
                        Visibility
                      </dt>
                      <dd className="mt-2 text-base text-muted-foreground">
                        {item.visibility}
                      </dd>
                    </div>
                    <div>
                      <dt className="eyebrow">
                        Why it matters
                      </dt>
                      <dd className="mt-2 text-base text-muted-foreground">
                        {item.matters}
                      </dd>
                    </div>
                  </dl>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : undefined}>
                  {item.image ? (
                    item.photo ? (
                      <div className="surface-panel hover-lift overflow-hidden rounded-3xl p-3">
                        <img
                          src={item.image}
                          alt={item.alt ?? item.title}
                          width={800}
                          height={533}
                          loading="lazy"
                          className="h-auto w-full rounded-2xl object-cover"
                        />
                      </div>
                    ) : (
                      <ScreenFrame
                        src={item.image}
                        alt={item.alt ?? item.title}
                        width={1408}
                        height={1008}
                      />
                    )
                  ) : null}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="solutions" className="bg-sand-wash border-y border-hairline">
        <SectionHeading
          eyebrow="Solutions"
          title="Shaped to the kind of business you run"
          copy="The same platform, configured for the scale and structure of your operation."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">

          {SOLUTIONS.map((item, index) => (
            <Reveal key={item.title} delay={index * 60}>
              <FeatureCard
                title={item.title}
                copy={item.copy}
                points={item.points}
                tone={TONES[index % TONES.length]!}
              />
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Go deeper with a guided walkthrough"
        copy="We will show Wheelint against your own service, billing and inventory workflows."
      />
    </>
  );
}
