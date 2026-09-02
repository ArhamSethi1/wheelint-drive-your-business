import { useState, type ReactNode } from "react";

import { LeadForm } from "@/components/site/lead-form";
import { ThankYouDialog } from "@/components/site/thank-you-dialog";
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

export function RequestDemoDialog({
  label = "Request Free Demo",
  className,
  size = "lg",
  variant = "default",
  trigger,
}: {
  label?: string;
  className?: string;
  size?: "sm" | "default" | "lg";
  variant?: "default" | "outline" | "ghost";
  trigger?: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [thanks, setThanks] = useState(false);

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          {trigger ?? (
            <Button size={size} variant={variant} className={cn("cta-anim", className)}>
              {label}
            </Button>
          )}
        </DialogTrigger>
        <DialogContent className="max-h-[90vh] w-[calc(100vw-1.5rem)] overflow-y-auto rounded-2xl sm:max-w-xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-semibold">Request Free Demo</DialogTitle>
            <DialogDescription>
              Fill in a few details and we will be in touch to schedule your
              walkthrough.
            </DialogDescription>
          </DialogHeader>

          <LeadForm
            idPrefix="demo"
            submitLabel="Request Free Demo"
            className="mt-2"
            onSuccess={() => {
              setOpen(false);
              setThanks(true);
            }}
          />
        </DialogContent>
      </Dialog>

      <ThankYouDialog
        open={thanks}
        onOpenChange={setThanks}
        title="Thank you!"
        message="Your free demo request has been received. Our team will reach out shortly to schedule your walkthrough."
      />
    </>
  );
}
