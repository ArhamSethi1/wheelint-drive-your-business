import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { useState } from "react";

import { wheelintLogo } from "@/assets/photos";
import { Button } from "@/components/ui/button";
import { RequestDemoDialog } from "@/components/site/request-demo";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/features", label: "Features" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

function Wordmark() {
  return (
    <Link
      to="/"
      className="inline-flex items-center rounded-xl bg-white px-3 py-1.5 shadow-md transition-shadow hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
    >
      <img
        src={wheelintLogo}
        alt="Wheelint"
        className="h-10 w-auto lg:h-12"
      />
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-primary shadow-md transition-colors">
      <div className="relative mx-auto flex h-20 w-full max-w-[88rem] items-center gap-4 px-5 sm:px-8 lg:h-24">
        <div className="min-w-0 flex-1">
          <Wordmark />
        </div>

        <nav
          aria-label="Main"
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 lg:flex"
        >
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-white after:scale-x-100" }}
              inactiveProps={{ className: "text-white/75" }}
              className="relative py-2 text-base font-semibold transition-colors after:absolute after:inset-x-0 after:bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:text-white hover:after:scale-x-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <a
            href="tel:+919358002457"
            className="inline-flex h-12 items-center rounded-full border border-white/40 px-6 text-base font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            Call Now
          </a>
          <RequestDemoDialog
            label="Request A Free Demo"
            className="h-12 rounded-full border-0 bg-white px-7 text-base text-primary hover:bg-white/90"
            size="default"
          />
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="outline" size="icon" aria-label="Open menu" className="h-12 w-12">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[86vw] max-w-sm border-hairline">
            <SheetHeader>
              <SheetTitle className="font-display">Wheelint</SheetTitle>
            </SheetHeader>
            <nav aria-label="Mobile" className="mt-6 flex flex-col gap-1 px-4">
              {NAV.map((item) => (
                <SheetClose asChild key={item.to}>
                  <Link
                    to={item.to}
                    activeOptions={{ exact: item.to === "/" }}
                    activeProps={{ className: "bg-secondary text-foreground" }}
                    className="rounded-lg px-4 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </SheetClose>
              ))}
            </nav>
            <div className="mt-6 px-4">
              <RequestDemoDialog
                className="w-full"
                size="default"
              />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
