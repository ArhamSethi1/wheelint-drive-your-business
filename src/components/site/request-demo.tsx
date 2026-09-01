import { useState, type ReactNode } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
import { cn } from "@/lib/utils";

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

export function RequestDemoDialog({
  label = "Request a Demo",
  className,
  size = "lg",
  variant = "default",
  trigger,
}: {
  label?: string;
  className?: string;
  size?: "sm" | "default" | "lg";
  variant?: "default" | "outline" | "ghost";
  trigger?: ReactNode;
}) {
  const [open, setOpen] = useState(false);
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
    setOpen(false);
    toast.success("Demo requested", {
      description: "Our team will reach out to schedule your walkthrough.",
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger ?? (
          <Button size={size} variant={variant} className={cn("cta-anim", className)}>
            {label}
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold">Request a Demo</DialogTitle>
          <DialogDescription>
            Fill in a few details and we will be in touch to schedule your
            walkthrough.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={onSubmit} noValidate className="mt-2">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              id="demo-name"
              label="Name"
              value={form.name}
              error={errors.name}
              onChange={(value) => set("name", value)}
            />
            <Field
              id="demo-company"
              label="Company"
              value={form.company}
              error={errors.company}
              onChange={(value) => set("company", value)}
            />
            <Field
              id="demo-phone"
              label="Phone"
              type="tel"
              value={form.phone}
              error={errors.phone}
              onChange={(value) => set("phone", value)}
            />
            <Field
              id="demo-email"
              label="Email"
              type="email"
              value={form.email}
              error={errors.email}
              onChange={(value) => set("email", value)}
            />

            <div className="sm:col-span-2">
              <Label htmlFor="demo-businessType">Business Type</Label>
              <Select
                value={form.businessType}
                onValueChange={(value) => set("businessType", value)}
              >
                <SelectTrigger
                  id="demo-businessType"
                  className="mt-2 w-full"
                  aria-invalid={Boolean(errors.businessType)}
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
                <p className="mt-2 text-sm text-destructive">{errors.businessType}</p>
              ) : null}
            </div>

            <div className="sm:col-span-2">
              <Label htmlFor="demo-details">Other Details (optional)</Label>
              <Textarea
                id="demo-details"
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
            className="cta-anim mt-8 w-full sm:w-auto"
          >
            {submitting ? "Sending…" : "Request Demo"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
