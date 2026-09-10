import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const SALES_PHONE = "+919358002457";

export function FloatingCallButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const threshold = window.innerHeight || 600;
      setVisible(window.scrollY > threshold * 0.8);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={`tel:${SALES_PHONE}`}
      aria-label="Call Wheelint sales"
      className={cn(
        "fixed z-40 inline-flex items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg transition-all duration-300 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2",
        "bottom-5 left-5 h-12 w-12 sm:bottom-24 sm:right-7 sm:left-auto sm:h-14 sm:w-auto sm:px-5",
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"
      )}
    >
      <Phone aria-hidden="true" className="h-5 w-5 sm:h-5 sm:w-5" />
      <span className="ml-2 hidden text-sm font-semibold sm:inline">Call now</span>
    </a>
  );
}
