import { Check, Copy, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(SALES_EMAIL);
      setCopied(true);
      toast.success("Email copied", { description: SALES_EMAIL });
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Couldn't copy the email address.");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={size} variant={variant} className={cn("cta-anim", className)}>
          {label}
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[calc(100vw-1.5rem)] max-w-md rounded-2xl p-5 sm:p-6">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold">Talk to our sales team</DialogTitle>
          <DialogDescription>
            Choose the easiest way to reach us. We usually respond within one business day.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-2 grid gap-4">
          <a
            href={`tel:${SALES_PHONE}`}
            className="group plan-card flex flex-wrap items-center gap-3 rounded-2xl border border-hairline bg-background p-4 transition-colors hover:border-primary/30 hover:bg-primary/5 sm:gap-4"
          >
            <span className="chip-blue inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:rotate-3">
              <Phone aria-hidden="true" className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <span className="block text-base font-semibold">Call us</span>
              <span className="block text-sm text-muted-foreground">
                {SALES_PHONE_DISPLAY}
              </span>
            </div>
            <Button
              size="sm"
              className="cta-anim ml-auto h-10 shrink-0 px-4 text-sm"
            >
              Call now
            </Button>
          </a>
          <div className="group plan-card flex flex-wrap items-center gap-3 rounded-2xl border border-hairline bg-background p-4 transition-colors hover:border-primary/30 hover:bg-primary/5 sm:gap-4">
            <span className="chip-orange inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:rotate-3">
              <Mail aria-hidden="true" className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <span className="block text-base font-semibold">Email us</span>
              <span className="block truncate text-sm text-muted-foreground">
                {SALES_EMAIL}
              </span>
            </div>
            <Button
              size="sm"
              variant="outline"
              onClick={copyEmail}
              className="cta-anim ml-auto h-10 shrink-0 gap-1.5 px-4 text-sm"
            >
              {copied ? (
                <Check aria-hidden="true" className="h-4 w-4" />
              ) : (
                <Copy aria-hidden="true" className="h-4 w-4" />
              )}
              {copied ? "Copied" : "Copy email"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
