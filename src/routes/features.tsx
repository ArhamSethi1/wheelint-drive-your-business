import { createFileRoute } from "@tanstack/react-router";
import {
  BarChart3,
  Boxes,
  ClipboardList,
  Receipt,
  Users,
  Wrench,
} from "lucide-react";

import dashboardHero from "@/assets/dashboard-hero.jpg";
import screenAnalytics from "@/assets/screen-analytics.jpg";
import screenBilling from "@/assets/screen-billing.jpg";
import screenInventory from "@/assets/screen-inventory.jpg";
import {
  CtaBand,
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
          "Billing, job cards, spare parts inventory, customer and vehicle records, workshop operations and analytics — the capabilities inside Wheelint.",
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
};

const CATEGORIES: Category[] = [
  {
    icon: <Receipt className="h-5 w-5" />,
    title: "Billing & Invoicing",
    copy: "Create service, parts and combined invoices with tax and discount handling built in.",
    visibility: "Every invoice stays linked to the vehicle, job and payment status behind it.",
    matters: "Billing stops being a separate exercise from the work that was done.",
    image: screenBilling,
    alt: "Automobile tax invoice screen with parts and labour line items and payment summary",
  },
  {
    icon: <ClipboardList className="h-5 w-5" />,
    title: "Job Cards & Service Management",
    copy: "Take a vehicle from estimate to job card to delivery with clear ownership at each step.",
    visibility: "Live status of every open job, assigned technician and pending approval.",
    matters: "Nothing sits unnoticed and customers get honest answers on timelines.",
  },
  {
    icon: <Boxes className="h-5 w-5" />,
    title: "Spare Parts & Inventory",
    copy: "Manage parts, stock locations, purchases and consumption in one register.",
    visibility: "Stock levels, reorder alerts and the value tied up in inventory.",
    matters: "Fewer stock-outs, less dead inventory and accurate parts costing on each job.",
    image: screenInventory,
    alt: "Spare parts inventory screen with stock levels, low stock alerts and supplier details",
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Customers & Vehicles",
    copy: "Maintain owners, vehicles, service history and follow-ups against a single record.",
    visibility: "Complete visit history and due services for any vehicle in seconds.",
    matters: "Repeat business becomes easier because the relationship is documented.",
  },
  {
    icon: <Wrench className="h-5 w-5" />,
    title: "Workshop Operations",
    copy: "Plan appointments, bay allocation and technician workload across the working day.",
    visibility: "Where capacity is free, where it is stretched and what is scheduled next.",
    matters: "The floor runs to a plan instead of reacting to whatever arrives.",
  },
  {
    icon: <BarChart3 className="h-5 w-5" />,
    title: "Reports & Analytics",
    copy: "Turn daily activity into revenue, service, parts and performance reporting.",
    visibility: "Trends over time and comparison across branches or outlets.",
    matters: "Decisions rest on records from the business, not on estimates.",
    image: screenAnalytics,
    alt: "Analytics dashboard comparing branch performance and service revenue for a dealer network",
  },
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
        <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-16 lg:py-24">
          <Reveal>
            <p className="eyebrow">Features & solutions</p>
            <h1 className="mt-4 text-4xl leading-[1.04] sm:text-5xl">
              The major operations of an automobile business, in one platform
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Wheelint covers billing, service, spare parts, customers and
              reporting as one connected system — so information entered once is
              useful everywhere else.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <ScreenFrame
              src={dashboardHero}
              alt="Wheelint dashboard showing service jobs, revenue overview and technician allocation"
              width={1600}
              height={1008}
              priority
            />
          </Reveal>
        </div>
      </section>

      <Section>
        <SectionHeading
          eyebrow="Core capabilities"
          title="Six areas that carry the business"
          copy="Each area answers the same three questions: what it does, what it makes visible and why that matters on the floor."
        />

        <div className="mt-14 space-y-16 lg:space-y-24">
          {CATEGORIES.map((item, index) => (
            <Reveal key={item.title}>
              <div
                className={`grid gap-8 lg:items-center lg:gap-14 ${
                  item.image ? "lg:grid-cols-[1fr_1.1fr]" : "lg:grid-cols-2"
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : undefined}>
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-hairline bg-surface-2 text-foreground">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl sm:text-3xl">{item.title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    {item.copy}
                  </p>
                  <dl className="mt-7 space-y-5 border-t border-hairline pt-6">
                    <div>
                      <dt className="eyebrow">
                        Visibility
                      </dt>
                      <dd className="mt-1.5 text-sm text-muted-foreground">
                        {item.visibility}
                      </dd>
                    </div>
                    <div>
                      <dt className="eyebrow">
                        Why it matters
                      </dt>
                      <dd className="mt-1.5 text-sm text-muted-foreground">
                        {item.matters}
                      </dd>
                    </div>
                  </dl>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : undefined}>
                  {item.image ? (
                    <ScreenFrame
                      src={item.image}
                      alt={item.alt ?? item.title}
                      width={1408}
                      height={1008}
                    />
                  ) : (
                    <div className="surface-panel grid-lines rounded-xl p-8 sm:p-10">
                      <p className="eyebrow">
                        In practice
                      </p>
                      <p className="mt-4 text-lg leading-relaxed sm:text-xl">
                        {item.visibility}
                      </p>
                      <p className="mt-4 text-sm text-muted-foreground">
                        {item.matters}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-sand-wash border-y border-hairline">
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
