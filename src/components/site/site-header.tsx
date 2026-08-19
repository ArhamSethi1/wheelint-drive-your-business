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
      className="flex items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <img
        src={logoMark}
        alt="Wheelint logo"
        width={32}
        height={32}
        className="h-8 w-8"
      />
      <span className="font-display text-lg font-bold tracking-tight">
        Wheelint
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center gap-4 px-5 sm:px-8 lg:h-18">
        <div className="min-w-0 flex-1">
          <Wordmark />
        </div>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-foreground" }}
              inactiveProps={{ className: "text-muted-foreground" }}
              className="rounded-md px-3.5 py-2 text-sm font-medium transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 lg:block">
          <Button asChild>
            <Link to="/contact">Request a Demo</Link>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="outline" size="icon" aria-label="Open menu">
              <Menu className="h-5 w-5" />
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
              <SheetClose asChild>
                <Button asChild className="w-full">
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
