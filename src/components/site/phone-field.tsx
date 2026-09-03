import {
  AsYouType,
  getCountries,
  getCountryCallingCode,
  parsePhoneNumberFromString,
  type CountryCode,
} from "libphonenumber-js";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const PRIORITY: CountryCode[] = [
  "IN",
  "US",
  "GB",
  "AE",
  "AU",
  "SG",
  "DE",
  "FR",
  "JP",
  "ZA",
];


const REGION_NAMES =
  typeof Intl !== "undefined" && "DisplayNames" in Intl
    ? new Intl.DisplayNames(["en"], { type: "region" })
    : undefined;

export function countryName(code: string) {
  return REGION_NAMES?.of(code) ?? code;
}

export function flagEmoji(code: string) {
  return code
    .toUpperCase()
    .replace(/./g, (char) =>
      String.fromCodePoint(127397 + char.charCodeAt(0)),
    );
}

const ALL = getCountries();
export const COUNTRY_OPTIONS: CountryCode[] = PRIORITY.filter((c) =>
  ALL.includes(c),
);

export const DEFAULT_COUNTRY: CountryCode = "IN";

/** Strips spaces, dashes and local leading zeros; returns clean E.164 or an error. */
export function validatePhone(
  national: string,
  country: CountryCode,
): { ok: true; e164: string } | { ok: false; error: string } {
  const digits = national.replace(/[^\d]/g, "").replace(/^0+/, "");
  if (!digits) return { ok: false, error: "Please enter your phone number." };
  if (digits.length < 9 || digits.length > 11) {
    return {
      ok: false,
      error: "Phone number must be 9, 10 or 11 digits.",
    };
  }
  const parsed = parsePhoneNumberFromString(digits, country);

  if (!parsed || !parsed.isValid()) {
    return {
      ok: false,
      error: `Invalid phone number for ${countryName(country)}.`,
    };
  }
  return { ok: true, e164: parsed.number };
}

export function formatAsYouType(value: string, country: CountryCode) {
  const digits = value.replace(/[^\d]/g, "").replace(/^0+/, "");
  return new AsYouType(country).input(digits);
}

export function PhoneField({
  id,
  label = "Phone",
  country,
  onCountryChange,
  value,
  onValueChange,
  error,
}: {
  id: string;
  label?: string;
  country: CountryCode;
  onCountryChange: (country: CountryCode) => void;
  value: string;
  onValueChange: (value: string) => void;
  error?: string | undefined;
}) {
  return (
    <div>
      <Label htmlFor={id}>
        {label} <span aria-hidden="true">*</span>
      </Label>
      <div className="mt-2 flex gap-2">
        <Select
          value={country}
          onValueChange={(next) => onCountryChange(next as CountryCode)}
        >
          <SelectTrigger
            aria-label="Country calling code"
            className="w-[7.5rem] shrink-0"
          >
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="max-h-72">
            {COUNTRY_OPTIONS.map((code) => (
              <SelectItem key={code} value={code}>
                <span className="mr-1.5">{flagEmoji(code)}</span>+
                {getCountryCallingCode(code)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Input
          id={id}
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          value={value}
          onChange={(event) =>
            onValueChange(formatAsYouType(event.target.value, country))
          }
          placeholder={`${countryName(country)} phone number`}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
        />
      </div>
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm font-medium text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}
