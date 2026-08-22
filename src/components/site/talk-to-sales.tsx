import { Mail, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

export const SALES_PHONE = "+919358002457";
export const SALES_PHONE_DISPLAY = "93580 02457";
export const SALES_EMAIL = "teams@wheelint.com";

export function TalkToSales({
  label = "Talk to sales",
  className,
  size = "lg",
  variant = "ghost",
}: {
  label?: string;
  className?: string;
  size?: "sm" | "default" | "lg";
  variant?: "default" | "outline" | "ghost";
}) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button size={size} variant={variant} className={cn("cta-anim", className)}>
          {label}
        </Button>
      </PopoverTrigger>
      <PopoverContent align="center" className="w-72 p-2">
        <p className="px-2 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
          How would you like to connect?
        </p>
        <a
          href={`tel:${SALES_PHONE}`}
          className="flex items-center gap-3 rounded-lg px-2 py-2.5 text-sm transition-colors hover:bg-muted"
        >
          <span className="chip-blue inline-flex h-9 w-9 items-center justify-center rounded-lg">
            <Phone aria-hidden="true" className="h-4 w-4" />
          </span>
          <span>
            <span className="block font-semibold">Call us</span>
            <span className="block text-xs text-muted-foreground">
              {SALES_PHONE_DISPLAY}
            </span>
          </span>
        </a>
        <a
          href={`mailto:${SALES_EMAIL}?subject=Talking%20to%20Wheelint%20Sales`}
          className="flex items-center gap-3 rounded-lg px-2 py-2.5 text-sm transition-colors hover:bg-muted"
        >
          <span className="chip-orange inline-flex h-9 w-9 items-center justify-center rounded-lg">
            <Mail aria-hidden="true" className="h-4 w-4" />
          </span>
          <span>
            <span className="block font-semibold">Email us</span>
            <span className="block text-xs text-muted-foreground">
              {SALES_EMAIL}
            </span>
          </span>
        </a>
      </PopoverContent>
    </Popover>
  );
}
