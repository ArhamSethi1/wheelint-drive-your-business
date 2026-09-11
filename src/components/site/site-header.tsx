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
      className="inline-flex items-center rounded-xl bg-background px-3 py-1.5 shadow-md transition-shadow hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground/80"
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
              activeProps={{ className: "text-primary-foreground after:scale-x-100" }}
              inactiveProps={{ className: "text-primary-foreground/75" }}
              className="relative py-2 text-base font-semibold transition-colors after:absolute after:inset-x-0 after:bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:bg-background after:transition-transform after:duration-300 hover:text-primary-foreground hover:after:scale-x-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground/70"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <a
            href="tel:+919358002457"
            className="inline-flex h-12 items-center rounded-full border border-primary-foreground/40 px-6 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground/70"
          >
            Call Now
          </a>
          <RequestDemoDialog
            label="Request A Free Demo"
            className="h-12 rounded-full border-0 bg-background px-7 text-base text-primary hover:bg-background/90"
            size="default"
          />
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button
              variant="outline"
              size="icon"
              aria-label={open ? "Close menu" : "Open menu"}
              className="h-12 w-12 border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <span className="relative block h-6 w-6">
                <Menu
                  className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${open ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"}`}
                />
                <X
                  className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${open ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"}`}
                />
              </span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-none border-0 bg-background p-0 sm:max-w-md [&>button]:hidden">
            <SheetHeader className="bg-primary px-5 py-4">
              <div className="flex items-center justify-between">
                <SheetTitle className="inline-flex items-center rounded-xl bg-background px-3 py-1.5 shadow-md">
                  <img src={wheelintLogo} alt="Wheelint" className="h-9 w-auto" />
                </SheetTitle>
                <SheetClose asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label="Close menu"
                    className="h-11 w-11 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                  >
                    <X className="h-7 w-7" />
                  </Button>
                </SheetClose>
              </div>
            </SheetHeader>
            <nav aria-label="Mobile" className="mt-4 flex flex-col gap-2 px-5">
              {NAV.map((item, i) => (
                <SheetClose asChild key={item.to}>
                  <Link
                    to={item.to}
                    activeOptions={{ exact: item.to === "/" }}
                    activeProps={{ className: "bg-tint-blue text-primary" }}
                    className="animate-fade-in rounded-xl px-5 py-4 text-2xl font-bold text-foreground transition-colors hover:bg-tint-blue"
                    style={{ animationDelay: `${i * 60}ms` }}
                  >
                    {item.label}
                  </Link>
                </SheetClose>
              ))}
            </nav>
            <div className="mt-8 flex flex-col gap-3 px-5">
              <SheetClose asChild>
                <a
                  href="tel:+919358002457"
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-[#22c55e] text-lg font-bold text-white shadow-md transition-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <Phone className="h-5 w-5" />
                  Call Now
                </a>
              </SheetClose>
              <RequestDemoDialog
                label="Request A Free Demo"
                className="h-14 w-full rounded-xl border-0 bg-primary text-lg font-bold text-primary-foreground shadow-md transition-transform hover:scale-[1.02] hover:bg-primary/90"
                size="default"
              />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
