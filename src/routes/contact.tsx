import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { ContactDetails } from "@/components/site/contact-details";
import { LeadForm } from "@/components/site/lead-form";
import { Reveal, Section } from "@/components/site/primitives";
import { RequestDemoDialog } from "@/components/site/request-demo";
import { TalkToSales } from "@/components/site/talk-to-sales";
import { ThankYouDialog } from "@/components/site/thank-you-dialog";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Wheelint — Request Free Demo or Talk to Sales" },
      {
        name: "description",
        content:
          "Talk to the Wheelint team about your workshop, dealership, multibrand service network or OEM operation. Request a free demo or send an enquiry.",
      },
      { property: "og:title", content: "Contact Wheelint" },
      {
        property: "og:description",
        content:
          "Let's talk about your automobile business. Request a free demonstration of Wheelint or discuss your requirements with our team.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [thanks, setThanks] = useState(false);

  return (
    <>
      <section className="bg-sky-wash wheel-section relative overflow-hidden">
        <div className="relative z-10 mx-auto w-full max-w-3xl px-5 py-16 text-center sm:px-8 sm:py-20">
          <Reveal>
            <p className="eyebrow eyebrow-hero">Contact</p>
            <h1 className="mt-4 text-5xl font-semibold leading-[1.03] sm:text-6xl lg:text-7xl">
              Let's talk about your automobile business
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Request a free demonstration, ask a question, or tell us what your
              workshop, dealership or network needs. Our team will take it from
              there.
            </p>
          </Reveal>
        </div>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
          <Reveal>
            <div id="enquiry" className="surface-panel scroll-mt-28 rounded-2xl p-6 sm:p-9">
              <h2 className="text-2xl sm:text-3xl">Request an enquiry</h2>
              <p className="mt-3 text-base text-muted-foreground">
                Fill in a few details and we will be in touch.
              </p>
              <LeadForm
                idPrefix="enquiry"
                submitLabel="Send Enquiry"
                className="mt-8"
                onSuccess={() => setThanks(true)}
              />
            </div>
          </Reveal>

          <Reveal delay={90} className="space-y-6">
            <div className="surface-panel rounded-2xl p-6 sm:p-8">
              <h2 className="font-display text-lg font-semibold">Contact details</h2>
              <p className="mt-4 font-display text-base font-semibold">
                Tylect Technologies Pvt. Ltd.
              </p>
              <div className="mt-5">
                <ContactDetails />
              </div>
            </div>

            <div className="surface-panel rounded-2xl p-6 sm:p-8">
              <h2 className="font-display text-lg font-semibold">
                Prefer to speak directly?
              </h2>
              <p className="mt-3 text-base text-muted-foreground">
                Book a walkthrough of Wheelint, or talk to our team about an
                enterprise rollout across your network.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <RequestDemoDialog
                  label="Request Free Demo"
                  size="default"
                  className="w-full sm:w-auto"
                />
                <TalkToSales
                  label="Talk to Sales"
                  size="default"
                  variant="outline"
                  className="w-full sm:w-auto"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <ThankYouDialog
        open={thanks}
        onOpenChange={setThanks}
        title="Thank you!"
        message="Your enquiry has been received. Our team will get back to you shortly."
      />
    </>
  );
}
