import { Link } from "@tanstack/react-router";

import { ContactDetails } from "@/components/site/contact-details";
import { wheelintLogo, wheelintWordmark } from "@/assets/photos";

export function SiteFooter() {
  return (
    <footer className="border-t border-hairline bg-sand-wash">
      <div className="overflow-hidden bg-white">
        <img
          src={wheelintWordmark}
          alt="Wheelint"
          loading="lazy"
          className="mx-auto block w-full max-w-[88rem] px-4 py-8"
        />
      </div>
      <div className="mx-auto grid w-full max-w-[88rem] gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[1.4fr_1fr_1.2fr] lg:py-20">
        <div>
          <div className="flex items-center">
            <img
              src={wheelintLogo}
              alt="Wheelint"
              loading="lazy"
              className="h-12 w-auto"
            />
          </div>
          <p className="mt-5 max-w-sm text-base leading-relaxed text-muted-foreground">
            Automobile business management software for workshops, dealerships,
            multibrand service networks and OEM operations.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="eyebrow">
            Explore
          </h2>
          <ul className="mt-5 space-y-3 text-base text-muted-foreground">
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
          <h2 className="eyebrow">
            Contact
          </h2>
          <p className="mt-5 font-display text-base font-semibold text-foreground">
            Tylect Technologies Pvt. Ltd.
          </p>
          <ContactDetails className="mt-4" />
        </div>
      </div>

      <div className="border-t border-hairline">
        <div className="mx-auto flex w-full max-w-[88rem] flex-col gap-2 px-5 py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} Wheelint. All rights reserved.</p>
          <p>Automobile billing, workshop, dealership and ERP management.</p>
        </div>
      </div>
    </footer>
  );
}
