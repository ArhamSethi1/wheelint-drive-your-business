import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

import logoMark from "@/assets/logo-mark.png";

export function SiteFooter() {
  return (
    <footer className="border-t border-hairline bg-sidebar">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[1.4fr_1fr_1.2fr] lg:py-20">
        <div>
          <div className="flex items-center gap-2.5">
            <img
              src={logoMark}
              alt="Wheelint logo"
              width={32}
              height={32}
              loading="lazy"
              className="h-8 w-8"
            />
            <span className="font-display text-lg font-bold">Wheelint</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Automobile business management software for workshops, dealerships,
            multibrand service networks and OEM operations.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-foreground">
            Explore
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            {[
              { to: "/", label: "Home" },
              { to: "/features", label: "Features" },
              { to: "/pricing", label: "Pricing" },
              { to: "/about", label: "About" },
              { to: "/contact", label: "Contact" },
            ].map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-foreground">
            Contact
          </h2>
          <address className="mt-4 space-y-3 text-sm not-italic text-muted-foreground">
            <p className="font-medium text-foreground">
              Tylect Technologies Pvt. Ltd.
            </p>
            <p className="flex gap-2.5">
              <MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>
                1st Floor, F-27, Gautam Marg, Sector 6, Vaishali Nagar, Jaipur,
                Rajasthan, 302021
              </span>
            </p>
            <p className="flex items-center gap-2.5">
              <Phone aria-hidden="true" className="h-4 w-4 shrink-0 text-primary" />
              <a href="tel:+919358002457" className="hover:text-foreground">
                +91 93580 02457
              </a>
            </p>
            <p className="flex items-center gap-2.5">
              <Mail aria-hidden="true" className="h-4 w-4 shrink-0 text-primary" />
              <a href="mailto:teams@wheelint.com" className="hover:text-foreground">
                teams@wheelint.com
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-hairline">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} Wheelint. All rights reserved.</p>
          <p>Automobile billing, workshop, dealership and ERP management.</p>
        </div>
      </div>
    </footer>
  );
}
