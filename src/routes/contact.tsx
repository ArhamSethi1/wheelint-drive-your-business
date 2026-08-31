import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { Reveal, Section } from "@/components/site/primitives";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Wheelint — Request a Demo or Talk to Sales" },
      {
        name: "description",
        content:
          "Talk to the Wheelint team about your workshop, dealership, multibrand service network or OEM operation. Request a demo or send an enquiry.",
      },
      { property: "og:title", content: "Contact Wheelint" },
      {
        property: "og:description",
        content:
          "Let's talk about your automobile business. Request a demonstration of Wheelint or discuss your requirements with our team.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const BUSINESS_TYPES = [
  "Workshop",
  "Authorised Dealer",
  "Multibrand Workshop",
  "Dealership",
  "OEM",
  "Dealer Network",
  "Other",
];

type FormState = {
  name: string;
  company: string;
  phone: string;
  email: string;
  businessType: string;
  details: string;
};

const EMPTY: FormState = {
  name: "",
  company: "",
  phone: "",
  email: "",
  businessType: "",
  details: "",
};

function ContactPage() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitting, setSubmitting] = useState(false);

  const set = (key: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validate = () => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.company.trim()) next.company = "Please enter your company name.";
    if (!/^[\d+\s()-]{8,}$/.test(form.phone.trim()))
      next.phone = "Please enter a valid phone number.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      next.email = "Please enter a valid email address.";
    if (!form.businessType) next.businessType = "Please select a business type.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) {
      toast.error("Please check the highlighted fields.");
      return;
    }
    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 600));
    setSubmitting(false);
    setForm(EMPTY);
    toast.success("Enquiry sent", {
      description: "Our team will get back to you shortly.",
    });
  };

  return (
    <>
      <section className="bg-sky-wash wheel-section relative overflow-hidden">
        <div className="relative mx-auto w-full max-w-3xl px-5 py-16 text-center sm:px-8 sm:py-20">
          <Reveal>
            <p className="eyebrow eyebrow-hero">Contact</p>
            <h1 className="mt-4 text-5xl font-semibold leading-[1.03] sm:text-6xl lg:text-7xl">
              Let's talk about your automobile business
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Request a demonstration, ask a question, or tell us what your
              workshop, dealership or network needs. Our team will take it from
              there.
            </p>
          </Reveal>
        </div>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
          <Reveal>
            <form
              onSubmit={onSubmit}
              noValidate
              className="surface-panel rounded-2xl p-6 sm:p-9"
            >
              <h2 className="text-2xl sm:text-3xl">Request an enquiry</h2>
              <p className="mt-3 text-base text-muted-foreground">
                Fill in a few details and we will be in touch.
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <Field
                  id="name"
                  label="Name"
                  value={form.name}
                  error={errors.name}
                  onChange={(value) => set("name", value)}
                />
                <Field
                  id="company"
                  label="Company"
                  value={form.company}
                  error={errors.company}
                  onChange={(value) => set("company", value)}
                />
                <Field
                  id="phone"
                  label="Phone"
                  type="tel"
                  value={form.phone}
                  error={errors.phone}
                  onChange={(value) => set("phone", value)}
                />
                <Field
                  id="email"
                  label="Email"
                  type="email"
                  value={form.email}
                  error={errors.email}
                  onChange={(value) => set("email", value)}
                />

                <div className="sm:col-span-2">
                  <Label htmlFor="businessType">Business Type</Label>
                  <Select
                    value={form.businessType}
                    onValueChange={(value) => set("businessType", value)}
                  >
                    <SelectTrigger
                      id="businessType"
                      className="mt-2 w-full"
                      aria-invalid={Boolean(errors.businessType)}
                      aria-describedby={
                        errors.businessType ? "businessType-error" : undefined
                      }
                    >
                      <SelectValue placeholder="Select your business type" />
                    </SelectTrigger>
                    <SelectContent>
                      {BUSINESS_TYPES.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.businessType ? (
                    <p id="businessType-error" className="mt-2 text-sm text-destructive">
                      {errors.businessType}
                    </p>
                  ) : null}
                </div>

                <div className="sm:col-span-2">
                  <Label htmlFor="details">Other Details (optional)</Label>
                  <Textarea
                    id="details"
                    rows={4}
                    value={form.details}
                    onChange={(event) => set("details", event.target.value)}
                    placeholder="Tell us about your locations, current setup or what you'd like to see."
                    className="mt-2"
                  />
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={submitting}
                className="mt-8 w-full sm:w-auto"
              >
                {submitting ? "Sending…" : "Send Enquiry"}
              </Button>
            </form>
          </Reveal>

          <Reveal delay={90} className="space-y-6">
            <div className="surface-panel rounded-2xl p-6 sm:p-8">
              <h2 className="font-display text-lg font-semibold">Contact details</h2>
              <address className="mt-5 space-y-4 text-base not-italic text-muted-foreground">
                <p className="font-display text-base font-semibold text-foreground">
                  Tylect Technologies Pvt. Ltd.
                </p>
                <p className="flex gap-3">
                  <MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-foreground" />
                  <span>
                    1st Floor, F-27, Gautam Marg, Sector 6, Vaishali Nagar,
                    Jaipur, Rajasthan, 302021
                  </span>
                </p>
                <p className="flex items-center gap-3">
                  <Phone aria-hidden="true" className="h-4 w-4 shrink-0 text-foreground" />
                  <a href="tel:+919358002457" className="hover:text-foreground">
                    +91 93580 02457
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <Mail aria-hidden="true" className="h-4 w-4 shrink-0 text-foreground" />
                  <a href="mailto:teams@wheelint.com" className="hover:text-foreground">
                    teams@wheelint.com
                  </a>
                </p>
              </address>
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
                <Button asChild className="w-full sm:w-auto">
                  <a href="mailto:teams@wheelint.com?subject=Request%20a%20Demo">
                    Request a Demo
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full sm:w-auto">
                  <a href="tel:+919358002457">Talk to Sales</a>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}

function Field({
  id,
  label,
  value,
  error,
  onChange,
  type = "text",
}: {
  id: string;
  label: string;
  value: string;
  error?: string | undefined;
  onChange: (value: string) => void;
  type?: string | undefined;
}) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className="mt-2"
      />
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}
