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
import phoneApp from "@/assets/phone-app.jpg";
import workshopImage from "@/assets/workshop.jpg";
import screenAnalytics from "@/assets/screen-analytics.jpg";
import { DeviceMockup } from "@/components/site/device-mockup";
import {
  CtaBand,
  FeatureCard,
  TONES,
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
        title: "Wheelint — Automobile Operations, Built for Clarity",
      },
      {
        name: "description",
        content:
          "Wheelint is a software for Automobile Billing, job cards, spare parts, customers and reporting in one connected platform — for workshops, dealerships and dealer networks.",
      },
      {
        property: "og:title",
        content: "Wheelint — Automobile Operations, Built for Clarity",
      },
      {
        property: "og:description",
        content:
          "Wheelint is a software for Automobile Billing, job cards, spare parts, customers and reporting in one connected platform — for workshops, dealerships and dealer networks.",
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
    icon: <Receipt className="h-7 w-7" />,
    title: "Billing & Invoicing",
    copy: "Raise service and parts invoices with tax handling, discounts and payment status tracked against every vehicle.",
  },
  {
    icon: <ClipboardList className="h-7 w-7" />,
    title: "Job Cards & Service",
    copy: "Move a vehicle from estimate to delivery with clear status, assigned technicians and a complete service record.",
  },
  {
    icon: <Boxes className="h-7 w-7" />,
    title: "Parts & Inventory",
    copy: "Track stock across stores, watch reorder levels and keep parts consumption tied to the job that used them.",
  },
  {
    icon: <Users className="h-7 w-7" />,
    title: "Customers & Vehicles",
    copy: "Keep every owner, vehicle and past visit in one place so your team answers questions without digging.",
  },
  {
    icon: <Wrench className="h-7 w-7" />,
    title: "Workshop Operations",
    copy: "Plan appointments, bay load and technician workload so the day is organised before it starts.",
  },
  {
    icon: <BarChart3 className="h-7 w-7" />,
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

const PILLARS = [
  {
    tone: "blue" as const,
    icon: <Wrench className="h-7 w-7" />,
    title: "Service",
    copy: "Job cards to delivery, with live status on every vehicle in the workshop.",
  },
  {
    tone: "orange" as const,
    icon: <Receipt className="h-7 w-7" />,
    title: "Sales",
    copy: "Enquiries to invoices, with tax, discounts and payments all handled.",
  },
  {
    tone: "navy" as const,
    icon: <Boxes className="h-7 w-7" />,
    title: "Spares",
    copy: "Stock to consumption, tied to the exact job that used each part.",
  },
  {
    tone: "cyan" as const,
    icon: <BarChart3 className="h-7 w-7" />,
    title: "Accounts",
    copy: "Billing to reporting, with numbers that match the floor every day.",
  },
];

function HomePage() {
  return (
    <>
      <section className="bg-sky-wash relative overflow-hidden">
        <div
          aria-hidden="true"
          className="grid-lines pointer-events-none absolute inset-0 opacity-30"
        />
        <div className="relative mx-auto grid w-full max-w-[88rem] items-center gap-14 px-5 pb-20 pt-16 sm:px-8 sm:pb-24 sm:pt-24 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div>
            <p className="eyebrow rise-in">Automobile business management</p>
            <h1
              className="rise-in mt-6 text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
              style={{ animationDelay: "90ms" }}
            >
              Automobile Operations,
              <br />
              <span className="text-ember">Built for Clarity</span>
            </h1>
            <p
              className="rise-in mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
              style={{ animationDelay: "180ms" }}
            >
              Wheelint is a software for Automobile Billing, job cards, spare
              parts, customers and reporting in one connected platform — for
              workshops, dealerships and dealer networks.
            </p>
            <div
              className="rise-in mt-10 flex flex-col gap-4 sm:flex-row"
              style={{ animationDelay: "260ms" }}
            >
              <Button
                asChild
                size="lg"
                className="h-16 w-full rounded-full px-10 text-lg sm:w-auto"
              >
                <Link to="/contact">Request a demo</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-16 w-full rounded-full px-10 text-lg sm:w-auto"
              >
                <Link to="/features">Explore the platform</Link>
              </Button>
            </div>
            <div
              className="rise-in mt-10 flex flex-wrap gap-3"
              style={{ animationDelay: "340ms" }}
            >
              {["Workshops", "Dealerships", "Dealer networks", "OEM outlets"].map(
                (chip, i) => (
                  <span
                    key={chip}
                    className={`rounded-full px-5 py-2.5 text-sm font-semibold ${
                      ["tint-blue", "tint-orange", "tint-cyan", "tint-navy"][i]
                    }`}
                  >
                    {chip}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="rise-in" style={{ animationDelay: "300ms" }}>
            <div className="float-slow">
              <DeviceMockup
                laptopSrc={dashboardHero}
                phoneSrc={phoneApp}
                alt="Wheelint workshop dashboard shown on a laptop with the mobile app alongside"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <Section tight>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((item, index) => (
            <Reveal key={item.title} delay={index * 80}>
              <FeatureCard {...item} tone={TONES[index % TONES.length]!} />
            </Reveal>
          ))}
        </div>
      </Section>


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
              className="mt-10 grid gap-6 sm:grid-cols-2"
              as="div"
            >
              {AUDIENCES.map((item, index) => (
                <div
                  key={item.title}
                  className={`hover-lift rounded-3xl p-7 shadow-[var(--shadow-panel)] ${
                    ["tint-blue", "tint-orange", "tint-cyan", "tint-navy"][index % 4]
                  }`}
                >
                  <h3 className="font-display text-2xl font-semibold">
                    {item.title}
                  </h3>
                  <p
                    className={`mt-3 text-base leading-relaxed ${
                      index % 4 === 3 ? "opacity-80" : "text-muted-foreground"
                    }`}
                  >
                    {item.copy}
                  </p>
                </div>
              ))}
            </Reveal>
          </div>
          <Reveal delay={80}>
            <div className="surface-panel overflow-hidden rounded-3xl p-3">
              <img
                src={workshopImage}
                alt="Automobile service workshop with vehicles on lifts during evening shift"
                width={1600}
                height={912}
                loading="lazy"
                className="h-auto w-full rounded-2xl object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-sand-wash border-y border-hairline">
        <SectionHeading
          eyebrow="Product breadth"
          title="Every core operation, connected"
          copy="A quick view of what Wheelint manages day to day. The Features page goes deeper into each area."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((item, index) => (
            <Reveal key={item.title} delay={index * 60}>
              <FeatureCard {...item} tone={TONES[index % TONES.length]!} />
            </Reveal>
          ))}
        </div>
        <Reveal delay={120} className="mt-12">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-14 rounded-full px-9 text-base"
          >
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
                <div
                  key={line}
                  className="tint-blue flex items-start gap-3 rounded-2xl px-5 py-4 text-base"
                >
                  <span
                    aria-hidden="true"
                    className="chip-blue mt-1 h-2.5 w-2.5 shrink-0 rounded-full"
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

      <Section className="bg-sand-wash border-t border-hairline" tight>
        <SectionHeading
          align="center"
          eyebrow="Why teams choose Wheelint"
          title="Practical software, not a project"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {[
            {
              icon: <Wrench className="h-7 w-7" />,
              title: "Automobile-focused",
              copy: "Built around vehicles, job cards and parts rather than adapted from generic business software.",
            },
            {
              icon: <Building2 className="h-7 w-7" />,
              title: "Scales with you",
              copy: "Start with a single workshop and grow into a multi-location or enterprise setup on the same platform.",
            },
            {
              icon: <BarChart3 className="h-7 w-7" />,
              title: "Clear information",
              copy: "Records stay connected, so reports reflect what actually happened on the floor.",
            },
          ].map((item, index) => (
            <Reveal key={item.title} delay={index * 70}>
              <FeatureCard {...item} tone={TONES[index % TONES.length]!} />
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
