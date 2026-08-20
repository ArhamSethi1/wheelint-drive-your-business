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

type TermTone = "plain" | "blue" | "green";

const TERM_STYLES: Record<
  TermTone,
  { card: string; price: string; check: string; badge: string; save: string; cta: string }
> = {
  plain: {
    card: "border-hairline",
    price: "text-foreground",
    check: "text-brand",
    badge: "",
    save: "",
    cta: "",
  },
  blue: {
    card: "border-brand/35 ring-1 ring-brand/25",
    price: "text-brand",
    check: "text-brand",
    badge: "bg-brand text-primary-foreground",
    save: "tint-blue text-brand",
    cta: "",
  },
  green: {
    card: "border-[oklch(0.5_0.13_165_/_40%)] ring-1 ring-[oklch(0.5_0.13_165_/_25%)]",
    price: "text-[oklch(0.45_0.13_165)]",
    check: "text-[oklch(0.5_0.13_165)]",
    badge: "chip-green",
    save: "tint-green text-[oklch(0.42_0.12_165)]",
    cta: "",
  },
};

const TERMS: Array<{
  name: string;
  note: string;
  price: string;
  was?: string;
  unit: string;
  save?: string;
  badge?: string;
  tone: TermTone;
}> = [
  {
    name: "Annual",
    note: "1 year commitment",
    price: "₹12,000",
    unit: "/ year",
    tone: "plain",
  },
  {
    name: "2-Year Plan",
    note: "Best balance of savings & flexibility",
    price: "₹19,200",
    was: "₹24,000",
    unit: "/ 2 years",
    save: "Save 20% — you save ₹4,800",
    badge: "Most Popular",
    tone: "blue",
  },
  {
    name: "3-Year Plan",
    note: "Maximum savings for long-term growth",
    price: "₹25,200",
    was: "₹36,000",
    unit: "/ 3 years",
    save: "Save 30% — you save ₹10,800",
    badge: "Best Value",
    tone: "green",
  },
];

function TermCard({ term }: { term: (typeof TERMS)[number] }) {
  const s = TERM_STYLES[term.tone];
  return (
    <div
      className={`hover-glow relative flex h-full flex-col rounded-2xl border bg-card p-6 shadow-[var(--shadow-panel)] sm:p-7 ${s.card}`}
    >
      {term.badge ? (
        <span
          className={`absolute -top-3 left-6 rounded-full px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.12em] ${s.badge}`}
        >
          {term.badge}
        </span>
      ) : null}

      <h3 className="mt-2 text-2xl font-semibold sm:text-3xl">{term.name}</h3>
      <p className="mt-2 text-base text-muted-foreground">{term.note}</p>

      <div className="mt-6 border-t border-hairline pt-6">
        <p className="flex flex-wrap items-baseline gap-2">
          {term.was ? (
            <span className="text-base text-muted-foreground line-through">
              {term.was}
            </span>
          ) : null}
          <span className={`font-display text-4xl font-bold sm:text-5xl ${s.price}`}>
            {term.price}
          </span>
          <span className="text-base text-muted-foreground">{term.unit}</span>
        </p>
        <p className="mt-2 text-sm text-muted-foreground">per business location</p>
        {term.save ? (
          <p
            className={`mt-4 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-sm font-semibold ${s.save}`}
          >
            <ArrowDown aria-hidden="true" className="h-4 w-4" />
            {term.save}
          </p>
        ) : null}
      </div>

      <ul className="mt-7 space-y-3 text-base text-muted-foreground">
        {STANDARD_INCLUDES.map((item) => (
          <li key={item} className="flex gap-3">
            <CheckCircle2
              aria-hidden="true"
              className={`mt-0.5 h-5 w-5 shrink-0 ${s.check}`}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-col gap-3 pt-8">
        <Button asChild size="lg">
          <Link to="/contact">Start Free Trial</Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link to="/contact">Request a Demo</Link>
        </Button>
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
            <h1 className="mt-4 text-5xl font-semibold leading-[1.03] sm:text-6xl lg:text-7xl">
              Two ways to run Wheelint
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Commit annually, or lock in longer terms and save. Enterprise ERP
              stays custom-priced for OEMs, dealer networks and multi-location
              operations.
            </p>
          </Reveal>
        </div>
      </section>

      <Section>
        <div className="grid gap-6 xl:grid-cols-[3fr_1fr]">
          <Reveal className="rounded-3xl border border-hairline bg-surface p-5 sm:p-7">
            <span className="tint-blue inline-block rounded-full px-3.5 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-brand">
              Single business setup
            </span>
            <p className="mt-3 text-base text-muted-foreground">
              Flexible terms for one workshop, service centre or dealership.
              Commit longer, save more.
            </p>
            <div className="mt-7 grid gap-6 lg:grid-cols-3">
              {TERMS.map((term, index) => (
                <Reveal key={term.name} delay={index * 140}>
                  <TermCard term={term} />
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal
            delay={220}
            className="rounded-3xl border border-orange/40 bg-[oklch(0.985_0.02_70)] p-5 sm:p-7"
          >
            <span className="tint-orange inline-block rounded-full px-3.5 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-[oklch(0.5_0.14_48)]">
              Multi-location setup
            </span>
            <p className="mt-3 text-base text-muted-foreground">
              Tailored setup for dealer networks and OEM operations.
            </p>

            <div className="hover-glow mt-7 flex h-[calc(100%-6.5rem)] flex-col rounded-2xl border border-orange/40 bg-card p-6 shadow-[var(--shadow-panel)] sm:p-7">
              <h3 className="text-2xl font-semibold sm:text-3xl">Enterprise ERP</h3>
              <p className="mt-2 text-base text-muted-foreground">
                For OEMs, dealer networks and multi-location enterprises
              </p>
              <div className="mt-6 border-t border-hairline pt-6">
                <p className="font-display text-3xl font-bold text-[oklch(0.62_0.18_45)] sm:text-4xl">
                  Custom Pricing
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Scoped to your network size, locations and requirements.
                </p>
              </div>
              <ul className="mt-7 space-y-3 text-base text-muted-foreground">
                {ENTERPRISE_INCLUDES.map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle2
                      aria-hidden="true"
                      className="mt-0.5 h-5 w-5 shrink-0 text-[oklch(0.62_0.18_45)]"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-8">
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-[oklch(0.66_0.18_45)] text-[oklch(0.99_0_0)] hover:bg-[oklch(0.6_0.18_45)]"
                >
                  <Link to="/contact">Talk to Sales</Link>
                </Button>
              </div>
            </div>
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
                <p className="mt-3 text-base text-muted-foreground">{item.copy}</p>
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
          <table className="w-full min-w-[36rem] text-left text-base">
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
