import * as DialogPrimitive from "@radix-ui/react-dialog";
import { CheckCircle2, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogPortal } from "@/components/ui/dialog";

export function ThankYouDialog({
  open,
  onOpenChange,
  title = "Thank you!",
  message = "Your request has been received. Our team will reach out to you shortly.",
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  message?: string;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPortal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-[60] bg-black/70 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content className="fixed left-1/2 top-1/2 z-[60] w-[calc(100vw-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-3xl border-2 border-emerald-500 bg-emerald-50 p-8 text-center shadow-2xl duration-200 data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:zoom-in-95">
          <DialogPrimitive.Close
            aria-label="Close"
            className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-emerald-600 text-white shadow-md transition-transform hover:scale-105 hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2"
          >
            <X className="h-6 w-6" strokeWidth={3} />
          </DialogPrimitive.Close>

          <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg">
            <CheckCircle2 className="h-11 w-11" aria-hidden="true" />
          </span>
          <DialogPrimitive.Title className="mt-6 font-display text-3xl font-semibold text-emerald-900">
            {title}
          </DialogPrimitive.Title>
          <DialogPrimitive.Description className="mt-3 text-base leading-relaxed text-emerald-800">
            {message}
          </DialogPrimitive.Description>
          <Button
            onClick={() => onOpenChange(false)}
            className="cta-anim mt-7 h-12 w-full rounded-full bg-emerald-600 text-base text-white hover:bg-emerald-700"
          >
            Done
          </Button>
        </DialogPrimitive.Content>
      </DialogPortal>
    </Dialog>
  );
}
