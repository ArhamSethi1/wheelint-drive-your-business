import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BarChart3,
  Boxes,
  Building2,
  ClipboardList,
  Receipt,
  Users,
  Wrench,
} from "lucide-react";

import dashboardHero from "@/assets/dashboard-hero.jpg";
import workshopImage from "@/assets/workshop.jpg";
import screenAnalytics from "@/assets/screen-analytics.jpg";
import {
  CtaBand,
  FeatureCard,
  Reveal,
  ScreenFrame,
  Section,
  SectionHeading,
} from "@/components/site/primitives";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Wheelint — Automobile Business Management Software",
      },
      {
        name: "description",
        content:
          "Wheelint brings billing, job cards, inventory, customers and reporting for workshops, dealerships and automobile networks into one connected platform.",
      },
      {
        property: "og:title",
        content: "Wheelint — Automobile Business Management Software",
      },
      {
        property: "og:description",
        content:
          "Run service, sales, parts and accounts for your automobile business from a single platform built for workshops, dealerships and dealer networks.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const CAPABILITIES = [
  {
    icon: <Receipt className="h-5 w-5" />,
    title: "Billing & Invoicing",
    copy: "Raise service and parts invoices with tax handling, discounts and payment status tracked against every vehicle.",
  },
  {
    icon: <ClipboardList className="h-5 w-5" />,
    title: "Job Cards & Service",
    copy: "Move a vehicle from estimate to delivery with clear status, assigned technicians and a complete service record.",
  },
  {
    icon: <Boxes className="h-5 w-5" />,
    title: "Parts & Inventory",
    copy: "Track stock across stores, watch reorder levels and keep parts consumption tied to the job that used them.",
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Customers & Vehicles",
    copy: "Keep every owner, vehicle and past visit in one place so your team answers questions without digging.",
  },
  {
    icon: <Wrench className="h-5 w-5" />,
    title: "Workshop Operations",
    copy: "Plan appointments, bay load and technician workload so the day is organised before it starts.",
  },
  {
    icon: <BarChart3 className="h-5 w-5" />,
    title: "Reports & Analytics",
    copy: "See revenue, service throughput, parts movement and branch performance without building spreadsheets.",
  },
];

const AUDIENCES = [
  {
    title: "Workshops",
    copy: "Independent and multibrand service centres that need billing, job cards and inventory working together.",
  },
  {
    title: "Dealerships",
    copy: "Sales, service and spares under one roof, with clean records across departments.",
  },
  {
    title: "Dealer networks",
    copy: "Multi-location groups that need consistent processes and comparable numbers.",
  },
  {
    title: "OEM operations",
    copy: "Enterprise management across authorised outlets, with visibility of the whole network.",
  },
];

function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-hairline">
        <div
          aria-hidden="true"
          className="grid-lines pointer-events-none absolute inset-0 opacity-40"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-32 h-[28rem] w-[28rem] rounded-full bg-primary/15 blur-3xl"
        />
        <div className="relative mx-auto grid w-full max-w-7xl gap-14 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16 lg:py-28">
          <div>
            <Reveal>
              <p className="eyebrow">Automobile business management</p>
              <h1 className="mt-4 text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
                Run the whole{" "}
                <span className="text-ember">automobile business</span> from one
                platform
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Wheelint connects billing, job cards, spare parts, customers and
                reporting so workshops, dealerships and dealer networks work from
                one accurate source of information.
              </p>
            </Reveal>

            <Reveal delay={120} className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link to="/contact">Request a Demo</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full sm:w-auto"
              >
                <Link to="/features">Explore the platform</Link>
              </Button>
            </Reveal>

            <Reveal
              delay={200}
              className="mt-12 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-hairline pt-8 sm:grid-cols-4"
            >
              {[
                { label: "Service", note: "Job cards to delivery" },
                { label: "Sales", note: "Enquiries to invoices" },
                { label: "Spares", note: "Stock to consumption" },
                { label: "Accounts", note: "Billing to reporting" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="font-display text-sm font-semibold uppercase tracking-widest text-primary">
                    {item.label}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">{item.note}</p>
                </div>
              ))}
            </Reveal>
          </div>

          <Reveal delay={100}>
            <ScreenFrame
              src={dashboardHero}
              alt="Wheelint workshop dashboard showing job cards, revenue and technician workload"
              width={1600}
              height={1008}
              priority
            />
          </Reveal>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="What Wheelint is"
              title="Built for the way automobile businesses actually run"
              copy="Most automobile businesses run on a mix of billing software, registers, spreadsheets and memory. Wheelint replaces that patchwork with one system built around vehicles, jobs, parts and customers."
            />
            <Reveal
              delay={120}
              className="mt-10 grid gap-5 sm:grid-cols-2"
              as="div"
            >
              {AUDIENCES.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-hairline bg-surface p-5"
                >
                  <h3 className="font-display text-base font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.copy}
                  </p>
                </div>
              ))}
            </Reveal>
          </div>
          <Reveal delay={80}>
            <div className="surface-panel overflow-hidden rounded-2xl p-2">
              <img
                src={workshopImage}
                alt="Automobile service workshop with vehicles on lifts during evening shift"
                width={1600}
                height={912}
                loading="lazy"
                className="h-auto w-full rounded-xl object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="border-y border-hairline bg-sidebar">
        <SectionHeading
          eyebrow="Product breadth"
          title="Every core operation, connected"
          copy="A quick view of what Wheelint manages day to day. The Features page goes deeper into each area."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((item, index) => (
            <Reveal key={item.title} delay={index * 60}>
              <FeatureCard {...item} />
            </Reveal>
          ))}
        </div>
        <Reveal delay={120} className="mt-10">
          <Button asChild variant="outline" size="lg">
            <Link to="/features">See all features in detail</Link>
          </Button>
        </Reveal>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-center lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Operational visibility"
              title="Know where the business stands, today"
              copy="Wheelint turns everyday transactions into clear numbers: what came in, what is pending, what is moving and where attention is needed. One branch or many, the picture stays comparable."
            />
            <Reveal delay={100} className="mt-8 space-y-4">
              {[
                "Revenue, pending payments and service throughput at a glance",
                "Parts movement and stock exposure across locations",
                "Branch and outlet comparison for multi-location groups",
                "Exportable reports for accounts and management review",
              ].map((line) => (
                <div key={line} className="flex gap-3 text-sm text-muted-foreground">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                  />
                  <span>{line}</span>
                </div>
              ))}
            </Reveal>
          </div>
          <Reveal delay={80}>
            <ScreenFrame
              src={screenAnalytics}
              alt="Wheelint analytics screen comparing branch performance and service revenue trend"
              width={1408}
              height={1008}
            />
          </Reveal>
        </div>
      </Section>

      <Section className="border-t border-hairline bg-sidebar" tight>
        <SectionHeading
          align="center"
          eyebrow="Why teams choose Wheelint"
          title="Practical software, not a project"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {[
            {
              icon: <Wrench className="h-5 w-5" />,
              title: "Automobile-focused",
              copy: "Built around vehicles, job cards and parts rather than adapted from generic business software.",
            },
            {
              icon: <Building2 className="h-5 w-5" />,
              title: "Scales with you",
              copy: "Start with a single workshop and grow into a multi-location or enterprise setup on the same platform.",
            },
            {
              icon: <BarChart3 className="h-5 w-5" />,
              title: "Clear information",
              copy: "Records stay connected, so reports reflect what actually happened on the floor.",
            },
          ].map((item, index) => (
            <Reveal key={item.title} delay={index * 70}>
              <FeatureCard {...item} />
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Ready to see Wheelint on your business?"
        copy="Request a demo and we will walk through Wheelint with your workflows in mind, or start a free trial and explore it yourself."
      />
    </>
  );
}
