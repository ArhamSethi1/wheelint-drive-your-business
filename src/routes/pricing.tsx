import { createFileRoute, Link } from "@tanstack/react-router";
import { Building2, Check, Wrench } from "lucide-react";

import {
  CtaBand,
  Reveal,
  Section,
  SectionHeading,
} from "@/components/site/primitives";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Standard Plan & Enterprise ERP | Wheelint" },
      {
        name: "description",
        content:
          "Wheelint pricing: one annual Standard Plan for individual automobile businesses, and custom-priced Enterprise ERP for OEMs, dealer networks and multi-location groups.",
      },
      { property: "og:title", content: "Wheelint Pricing — Standard & Enterprise ERP" },
      {
        property: "og:description",
        content:
          "Choose the annual Standard Plan for a workshop or dealership, or Enterprise ERP for dealer networks and OEM operations.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/pricing" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: PricingPage,
});

const STANDARD_INCLUDES = [
  "Billing and invoicing with tax handling",
  "Job cards and service management",
  "Spare parts and inventory tracking",
  "Customer and vehicle records with service history",
  "Appointments and technician allocation",
  "Core reports on revenue, service and stock",
];

const ENTERPRISE_INCLUDES = [
  "Everything in the Standard Plan",
  "Multi-location and multi-outlet management",
  "Network-level roles and access control",
  "Consolidated reporting across branches",
  "Workflow configuration for OEM standards",
  "Onboarding and implementation support",
];

function PlanCard({
  name,
  audience,
  price,
  priceNote,
  includes,
  primary,
  primaryHref,
  secondary,
  featured,
}: {
  name: string;
  audience: string;
  price: string;
  priceNote: string;
  includes: string[];
  primary: string;
  primaryHref: "/contact" | "/pricing";
  secondary?: string;
  featured?: boolean;
}) {
  return (
    <div
      className={`surface-panel relative flex h-full flex-col rounded-2xl p-7 sm:p-9 ${
        featured ? "ring-1 ring-primary/40" : ""
      }`}
    >
      <p className="eyebrow">{name}</p>
      <p className="mt-3 text-sm text-muted-foreground">{audience}</p>
      <p className="mt-7 font-display text-3xl sm:text-4xl">{price}</p>
      <p className="mt-2 text-xs text-muted-foreground">{priceNote}</p>

      <ul className="mt-8 space-y-3 border-t border-hairline pt-7 text-sm text-muted-foreground">
        {includes.map((item) => (
          <li key={item} className="flex gap-3">
            <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-foreground" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-9 flex flex-col gap-3 pt-2">
        <Button asChild size="lg">
          <Link to={primaryHref}>{primary}</Link>
        </Button>
        {secondary ? (
          <Button asChild size="lg" variant="outline">
            <Link to="/contact">{secondary}</Link>
          </Button>
        ) : null}
      </div>
    </div>
  );
}

function PricingPage() {
  return (
    <>
      <section className="bg-sky-wash relative overflow-hidden">
        <div
          aria-hidden="true"
          className="grid-lines pointer-events-none absolute inset-0 opacity-30"
        />
        <div className="relative mx-auto w-full max-w-3xl px-5 py-16 text-center sm:px-8 sm:py-24">
          <Reveal>
            <p className="eyebrow">Pricing</p>
            <h1 className="mt-4 text-4xl leading-[1.04] sm:text-5xl">
              Two ways to run Wheelint
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              One annual subscription for an individual automobile business, and
              an enterprise ERP path for OEMs, dealer networks and multi-location
              operations.
            </p>
          </Reveal>
        </div>
      </section>

      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <PlanCard
              featured
              name="Standard Plan"
              audience="For individual workshops, service centres and dealerships."
              price="₹XX,XXX / year"
              priceNote="Placeholder price — final pricing to be announced."
              includes={STANDARD_INCLUDES}
              primary="Start Free Trial"
              primaryHref="/contact"
              secondary="Request a Demo"
            />
          </Reveal>
          <Reveal delay={90}>
            <PlanCard
              name="Enterprise ERP"
              audience="For OEMs, dealer networks and multi-location enterprises."
              price="Custom Pricing"
              priceNote="Scoped to your network size, locations and requirements."
              includes={ENTERPRISE_INCLUDES}
              primary="Talk to Sales"
              primaryHref="/contact"
            />
          </Reveal>
        </div>
      </Section>

      <Section className="bg-sand-wash border-y border-hairline">
        <SectionHeading
          align="center"
          eyebrow="Which plan is right for you?"
          title="Pick by how your business is structured"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {[
            {
              icon: <Wrench className="h-7 w-7" />,
              label: "Workshop or dealership",
              arrow: "Standard Plan",
              copy: "A single business location running service, billing and parts.",
            },
            {
              icon: <Building2 className="h-7 w-7" />,
              label: "OEM, dealer network or multi-location enterprise",
              arrow: "Enterprise ERP",
              copy: "Several outlets or branches that need network-wide management.",
            },
          ].map((item, index) => (
            <Reveal key={item.arrow} delay={index * 80}>
              <div className="surface-panel h-full rounded-xl p-7">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-hairline bg-surface-2 text-foreground">
                  {item.icon}
                </div>
                <p className="mt-5 text-base font-medium">{item.label}</p>
                <p className="mt-4 font-display text-2xl text-ember">
                  → {item.arrow}
                </p>
                <p className="mt-3 text-sm text-muted-foreground">{item.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="What's included"
          title="The important differences"
          copy="Both paths run on the same Wheelint platform. Enterprise ERP adds what a network needs beyond a single location."
        />
        <Reveal delay={80} className="mt-12 overflow-hidden rounded-2xl border border-hairline">
          <table className="w-full min-w-[36rem] text-left text-sm">
            <caption className="sr-only">
              Comparison of the Wheelint Standard Plan and Enterprise ERP
            </caption>
            <thead className="bg-surface-2">
              <tr>
                <th scope="col" className="px-5 py-4 font-display font-semibold">
                  Area
                </th>
                <th scope="col" className="px-5 py-4 font-display font-semibold">
                  Standard Plan
                </th>
                <th scope="col" className="px-5 py-4 font-display font-semibold">
                  Enterprise ERP
                </th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              {[
                ["Billing, job cards, parts, customers", "Included", "Included"],
                ["Locations", "Single business location", "Multi-location and outlet network"],
                ["Reporting", "Core business reports", "Consolidated network reporting"],
                ["Roles and access", "Team roles", "Network-level roles and controls"],
                ["Workflow configuration", "Standard workflows", "Configured to network standards"],
                ["Commercials", "Annual subscription", "Custom pricing"],
              ].map(([area, standard, enterprise]) => (
                <tr key={area} className="border-t border-hairline">
                  <th scope="row" className="px-5 py-4 font-medium text-foreground">
                    {area}
                  </th>
                  <td className="px-5 py-4">{standard}</td>
                  <td className="px-5 py-4">{enterprise}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </Section>

      <CtaBand
        title="Start where it makes sense for you"
        copy="Try Wheelint on your own, see a guided demo, or talk to our team about an enterprise rollout."
      />
    </>
  );
}
