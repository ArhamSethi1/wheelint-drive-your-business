import type { CountryCode } from "libphonenumber-js";
import { useState } from "react";
import { toast } from "sonner";

import {
  DEFAULT_COUNTRY,
  PhoneField,
  countryName,
  validatePhone,
} from "@/components/site/phone-field";
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

export const BUSINESS_TYPES = [
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

export function TextField({
  id,
  label,
  value,
  error,
  onChange,
  type = "text",
  required,
}: {
  id: string;
  label: string;
  value: string;
  error?: string | undefined;
  onChange: (value: string) => void;
  type?: string | undefined;
  required?: boolean;
}) {
  return (
    <div>
      <Label htmlFor={id}>
        {label}
        {required ? <span aria-hidden="true"> *</span> : null}
      </Label>
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
        <p id={`${id}-error`} className="mt-2 text-sm font-medium text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function LeadForm({
  idPrefix,
  submitLabel,
  onSuccess,
  className,
}: {
  idPrefix: string;
  submitLabel: string;
  onSuccess: () => void;
  className?: string;
}) {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [country, setCountry] = useState<CountryCode>(DEFAULT_COUNTRY);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string | undefined>>>({});
  const [submitting, setSubmitting] = useState(false);

  const set = (key: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const next: Partial<Record<keyof FormState, string | undefined>> = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.company.trim()) next.company = "Please enter your company name.";

    const phone = validatePhone(form.phone, country);
    if (!phone.ok) next.phone = phone.error;

    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim()))
      next.email = "Please enter a valid email address.";

    setErrors(next);
    if (Object.keys(next).length > 0) {
      toast.error("Please check the highlighted fields.");
      return;
    }

    setSubmitting(true);
    // Clean E.164 number ready for storage: phone.ok === true here
    void (phone.ok ? phone.e164 : "");
    await new Promise((resolve) => setTimeout(resolve, 500));
    setSubmitting(false);
    setForm(EMPTY);
    setCountry(DEFAULT_COUNTRY);
    onSuccess();
  };

  return (
    <form onSubmit={onSubmit} noValidate className={className}>
      <div className="grid gap-5 sm:grid-cols-2">
        <TextField
          id={`${idPrefix}-name`}
          label="Name"
          required
          value={form.name}
          error={errors.name}
          onChange={(value) => set("name", value)}
        />
        <TextField
          id={`${idPrefix}-company`}
          label="Company"
          required
          value={form.company}
          error={errors.company}
          onChange={(value) => set("company", value)}
        />
        <PhoneField
          id={`${idPrefix}-phone`}
          country={country}
          onCountryChange={(next) => {
            setCountry(next);
            setErrors((prev) => ({ ...prev, phone: undefined }));
          }}
          value={form.phone}
          onValueChange={(value) => set("phone", value)}
          error={errors.phone}
        />
        <TextField
          id={`${idPrefix}-email`}
          label="Email"
          type="email"
          value={form.email}
          error={errors.email}
          onChange={(value) => set("email", value)}
        />

        <div className="sm:col-span-2">
          <Label htmlFor={`${idPrefix}-businessType`}>Business Type</Label>
          <Select
            value={form.businessType}
            onValueChange={(value) => set("businessType", value)}
          >
            <SelectTrigger id={`${idPrefix}-businessType`} className="mt-2 w-full">
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
        </div>

        <div className="sm:col-span-2">
          <Label htmlFor={`${idPrefix}-details`}>Other Details (optional)</Label>
          <Textarea
            id={`${idPrefix}-details`}
            rows={4}
            value={form.details}
            onChange={(event) => set("details", event.target.value)}
            placeholder="Tell us about your locations, current setup or what you'd like to see."
            className="mt-2"
          />
        </div>
      </div>

      <p className="mt-4 text-sm text-muted-foreground">
        Name, company and a valid {countryName(country)} phone number are required.
      </p>

      <Button
        type="submit"
        size="lg"
        disabled={submitting}
        className="cta-anim mt-6 w-full sm:w-auto"
      >
        {submitting ? "Sending…" : submitLabel}
      </Button>
    </form>
  );
}
