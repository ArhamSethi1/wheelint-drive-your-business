import { Mail, MapPin, Phone } from "lucide-react";

const ITEMS = [
  {
    icon: MapPin,
    label: "Address",
    tone: "tint-blue",
    chip: "chip-blue",
    href: undefined as string | undefined,
    text: "1st Floor, F-27, Gautam Marg, Sector 6, Vaishali Nagar, Jaipur, Rajasthan, 302021",
  },
  {
    icon: Phone,
    label: "Phone",
    tone: "tint-orange",
    chip: "chip-orange",
    href: "tel:+919358002457",
    text: "+91 93580 02457",
  },
  {
    icon: Mail,
    label: "Email",
    tone: "tint-cyan",
    chip: "chip-cyan",
    href: "mailto:teams@wheelint.com",
    text: "teams@wheelint.com",
  },
];

export function ContactDetails({ className }: { className?: string }) {
  return (
    <div className={`grid gap-3.5 ${className ?? ""}`}>
      {ITEMS.map((item) => (
        <div
          key={item.label}
          className={`hover-lift flex items-start gap-3.5 rounded-2xl p-4 shadow-[var(--shadow-panel)] ${item.tone}`}
        >
          <span
            className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${item.chip}`}
          >
            <item.icon aria-hidden="true" className="h-5 w-5" />
          </span>
          <div className="min-w-0">
            <span className="eyebrow block">{item.label}</span>
            {item.href ? (
              <a
                href={item.href}
                className="mt-1 block break-all text-base font-semibold leading-relaxed hover:underline"
              >
                {item.text}
              </a>
            ) : (
              <p className="mt-1 text-base font-medium leading-relaxed">
                {item.text}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
