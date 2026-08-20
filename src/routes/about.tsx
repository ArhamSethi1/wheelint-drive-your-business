import { createFileRoute } from "@tanstack/react-router";
import {
  Eye,
  Gauge,
  Layers,
  Settings2,
  Wrench,
} from "lucide-react";

import workshopImage from "@/assets/workshop.jpg";
import {
  CtaBand,
  TONES,
  FeatureCard,
  Reveal,
  Section,
  SectionHeading,
} from "@/components/site/primitives";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Wheelint — Automobile Business Management Platform" },
      {
        name: "description",
        content:
          "Wheelint exists to make automobile business management simpler, clearer and more connected for workshops, dealerships and larger automobile networks.",
      },
      { property: "og:title", content: "About Wheelint" },
      {
        property: "og:description",
        content:
          "Our purpose: making automobile business management simpler, clearer and more connected — designed around real operational needs.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const PHILOSOPHY = [
  {
    icon: <Settings2 className="h-7 w-7" />,
    title: "Practical technology",
    copy: "Software should fit the working day of a service floor, not demand that the floor change to fit it.",
  },
  {
    icon: <Layers className="h-7 w-7" />,
    title: "Clear information",
    copy: "One record for a vehicle, a job, a part and a customer — so the same answer holds everywhere.",
  },
  {
    icon: <Eye className="h-7 w-7" />,
    title: "Better operational visibility",
    copy: "What is open, what is pending and what needs attention should be obvious, not investigated.",
  },
  {
    icon: <Gauge className="h-7 w-7" />,
    title: "Scalable management",
    copy: "A single workshop and a multi-location network should be manageable on the same foundation.",
  },
  {
    icon: <Wrench className="h-7 w-7" />,
    title: "Automobile-focused workflows",
    copy: "Job cards, estimates, spares and service history are first-class, not adapted afterthoughts.",
  },
];

function AboutPage() {
  return (
    <>
      <section className="bg-sky-wash relative overflow-hidden">
        <div
          aria-hidden="true"
          className="grid-lines pointer-events-none absolute inset-0 opacity-30"
        />
        <div className="relative mx-auto w-full max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
          <Reveal>
            <p className="eyebrow">About Wheelint</p>
            <h1 className="mt-4 text-5xl font-semibold leading-[1.03] sm:text-6xl lg:text-7xl">
              Making automobile business management simpler, clearer and more
              connected
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Wheelint is a management platform for the automobile industry. It
              exists because running a workshop, a dealership or a service network
              involves far more coordination than most business software accounts
              for.
            </p>
          </Reveal>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Our purpose"
              title="Designed around real operational needs"
              copy="Wheelint is built around how automobile businesses actually work: vehicles arriving, estimates approved, parts issued, jobs closed, invoices raised and customers returning."
            />
            <Reveal delay={100} className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-base">
              <p>
                Workshops, dealerships and larger automobile networks share the
                same underlying problem: the information needed to run the
                business is spread across registers, spreadsheets, billing tools
                and individual memory. That gap costs time, accuracy and trust.
              </p>
              <p>
                Wheelint closes that gap by keeping service, billing, spares,
                customers and reporting in one connected platform — so a decision
                taken at the counter, in the bay or in the manager's office rests
                on the same information.
              </p>
              <p>
                As a business grows from one location to several, the platform
                grows with it rather than being replaced.
              </p>
            </Reveal>
          </div>
          <Reveal delay={80}>
            <div className="surface-panel overflow-hidden rounded-2xl p-2">
              <img
                src={workshopImage}
                alt="Service bays of an automobile workshop with vehicles under maintenance"
                width={1600}
                height={912}
                loading="lazy"
                className="h-auto w-full rounded-xl object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-sand-wash border-y border-hairline">
        <SectionHeading
          eyebrow="Product philosophy"
          title="What guides how we build Wheelint"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PHILOSOPHY.map((item, index) => (
            <Reveal key={item.title} delay={index * 60}>
              <FeatureCard {...item} tone={TONES[index % TONES.length]!} />
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand
        title="See Wheelint in action"
        copy="Request a demo and see how Wheelint would handle your service, billing and inventory workflows."
      />
    </>
  );
}
