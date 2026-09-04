import { cn } from "@/lib/utils";

/**
 * Presentational device composition: the product screenshot shown open on a
 * laptop with a phone overlapping the lower-right corner.
 */
export function DeviceMockup({
  laptopSrc,
  phoneSrc,
  alt,
  className,
  priority,
}: {
  laptopSrc: string;
  phoneSrc?: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={cn("relative w-full pb-14 pr-6 sm:pb-16 sm:pr-10", className)}>
      {/* Laptop */}
      <div className="relative">
        <div
          className="rounded-[1.5rem] border border-hairline bg-navy p-2.5 shadow-[var(--shadow-float)] sm:rounded-[1.75rem] sm:p-3"
        >
          <div className="relative overflow-hidden rounded-[1rem] bg-background sm:rounded-[1.25rem]">
            <span
              aria-hidden="true"
              className="absolute left-1/2 top-1.5 z-10 h-1.5 w-16 -translate-x-1/2 rounded-full bg-navy/70"
            />
            <img
              src={laptopSrc}
              fetchPriority="high"
              decoding="async"
              alt={alt}
              width={1600}
              height={1008}
              loading={priority ? "eager" : "lazy"}
              className="h-auto w-full"
            />
          </div>
        </div>
        {/* Laptop base */}
        <div className="mx-auto h-3 w-[86%] rounded-b-2xl bg-navy/90 sm:h-4" />
        <div className="mx-auto h-1.5 w-[46%] rounded-b-full bg-navy/60" />
      </div>

      {/* Phone */}
      {phoneSrc ? (
        <div className="absolute bottom-0 right-0 w-[28%] max-w-[190px] sm:w-[26%]">
          <div className="rounded-[1.4rem] border border-hairline bg-navy p-1.5 shadow-[var(--shadow-float)] sm:rounded-[1.75rem] sm:p-2">
            <div className="relative overflow-hidden rounded-[1.1rem] bg-background sm:rounded-[1.4rem]">
              <span
                aria-hidden="true"
                className="absolute left-1/2 top-1 z-10 h-1.5 w-8 -translate-x-1/2 rounded-full bg-navy/70"
              />
              <img
                src={phoneSrc}
                decoding="async"
                alt=""
                aria-hidden="true"
                width={420}
                height={880}
                loading={priority ? "eager" : "lazy"}
                className="aspect-[9/19] h-auto w-full object-cover object-left-top"
              />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
