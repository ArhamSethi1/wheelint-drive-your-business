import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { useState } from "react";

import logoMark from "@/assets/logo-mark.png";
import { Button } from "@/components/ui/button";
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
      className="flex items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
    >
      <img
        src={logoMark}
        alt="Wheelint logo"
        width={44}
        height={44}
        className="h-11 w-11"
      />
      <span className="font-display text-2xl font-bold tracking-tight text-white lg:text-3xl">Wheelint</span>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy/95 backdrop-blur-xl transition-colors">
      <div className="mx-auto flex h-20 w-full max-w-[88rem] items-center gap-4 px-5 sm:px-8 lg:h-24">
        <div className="min-w-0 flex-1">
          <Wordmark />
        </div>

        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-white" }}
              inactiveProps={{ className: "text-white/70" }}
              className="relative py-2 text-base font-semibold text-white/70 transition-colors after:absolute after:inset-x-0 after:bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:text-white hover:after:scale-x-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-7 hidden shrink-0 lg:block">
          <Button asChild size="lg" className="h-12 rounded-full px-7 text-base bg-white text-navy hover:bg-white/90">
            <Link to="/contact">Get started</Link>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="outline" size="icon" aria-label="Open menu" className="h-12 w-12 border-white/20 bg-navy text-white hover:bg-white/10 hover:text-white">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[86vw] max-w-sm border-white/10 bg-navy">
            <SheetHeader>
              <SheetTitle className="font-display text-white">Wheelint</SheetTitle>
            </SheetHeader>
            <nav aria-label="Mobile" className="mt-6 flex flex-col gap-1 px-4">
              {NAV.map((item) => (
                <SheetClose asChild key={item.to}>
                  <Link
                    to={item.to}
                    activeOptions={{ exact: item.to === "/" }}
                    activeProps={{ className: "bg-white/10 text-white" }}
                    className="rounded-lg px-4 py-3 text-base font-medium text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    {item.label}
                  </Link>
                </SheetClose>
              ))}
            </nav>
            <div className="mt-6 px-4">
              <SheetClose asChild>
                <Button asChild className="w-full bg-white text-navy hover:bg-white/90">
                  <Link to="/contact">Request a Demo</Link>
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
