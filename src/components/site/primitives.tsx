import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article";
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            observer.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      // @ts-expect-error polymorphic ref
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transition-all duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform motion-reduce:transition-none",
        shown
          ? "translate-y-0 scale-100 opacity-100 blur-0"
          : "translate-y-8 scale-[0.985] opacity-0 blur-[6px]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}


export function Section({
  children,
  className,
  id,
  tight,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tight?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative px-5 sm:px-8",
        tight ? "py-14 sm:py-18" : "py-18 sm:py-24 lg:py-28",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-[88rem]">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  copy?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="mt-4 text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {copy ? (
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
          {copy}
        </p>
      ) : null}
    </Reveal>
  );
}

export type CardTone = "blue" | "orange" | "navy" | "cyan";

export type CardTone = "blue" | "orange" | "navy" | "cyan" | "green";

export const TONES: CardTone[] = ["blue", "orange", "navy", "cyan"];

const TONE_SURFACE: Record<CardTone, string> = {
  blue: "tint-blue",
  orange: "tint-orange",
  navy: "tint-navy",
  cyan: "tint-cyan",
  green: "tint-green",
};

const TONE_CHIP: Record<CardTone, string> = {
  blue: "chip-blue",
  orange: "chip-orange",
  navy: "chip-navy",
  cyan: "chip-cyan",
  green: "chip-green",
};


export function FeatureCard({
  icon,
  title,
  copy,
  points,
  className,
  tone = "blue",
}: {
  icon?: ReactNode;
  title: string;
  copy: string;
  points?: string[];
  className?: string;
  tone?: CardTone;
}) {
  const dim = tone === "navy" ? "opacity-80" : "text-muted-foreground";
  return (
    <div
      className={cn(
        "hover-lift group h-full rounded-3xl p-7 shadow-[var(--shadow-panel)] sm:p-9",
        TONE_SURFACE[tone],
        className,
      )}
    >
      {icon ? (
        <div
          className={cn(
            "mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-3",
            TONE_CHIP[tone],
          )}
        >
          {icon}
        </div>
      ) : null}
      <h3 className="text-2xl font-semibold sm:text-3xl">{title}</h3>
      <p className={cn("mt-4 text-base leading-relaxed sm:text-lg", dim)}>{copy}</p>
      {points?.length ? (
        <ul className={cn("mt-6 space-y-3 text-base", dim)}>
          {points.map((point) => (
            <li key={point} className="flex gap-2.5">
              <span
                aria-hidden="true"
                className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-current opacity-70"
              />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export function CtaBand({
  title = "See Wheelint in action",
  copy = "Walk through Wheelint with our team, or start a free trial and set up your first workshop, branch or dealership in minutes.",
}: {
  title?: string;
  copy?: string;
}) {
  return (
    <Section className="bg-sand-wash border-t border-hairline">
      <Reveal className="relative overflow-hidden px-2 py-6 text-center sm:px-12">
        <div className="relative">
          <h2 className="mx-auto max-w-3xl text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
            {title}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            {copy}
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-14 w-full px-8 text-base sm:w-auto">
              <Link to="/contact">Request a demo</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-14 w-full px-8 text-base sm:w-auto"
            >
              <Link to="/pricing">Start free trial</Link>
            </Button>
            <Button asChild size="lg" variant="ghost" className="h-14 w-full px-8 text-base sm:w-auto">
              <Link to="/contact">Talk to sales</Link>
            </Button>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

export function ScreenFrame({
  src,
  alt,
  width,
  height,
  priority,
  className,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "surface-panel hover-lift overflow-hidden rounded-3xl p-3",
        className,
      )}
    >
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        className="h-auto w-full rounded-2xl"
      />
    </div>
  );
}
