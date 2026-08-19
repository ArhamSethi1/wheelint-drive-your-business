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
        "transition-all duration-700 ease-out will-change-transform motion-reduce:transition-none",
        shown ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
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
        tight ? "py-14 sm:py-20" : "py-20 sm:py-28 lg:py-32",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-7xl">{children}</div>
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
      <h2 className="mt-3 text-3xl font-bold leading-[1.08] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {copy ? (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {copy}
        </p>
      ) : null}
    </Reveal>
  );
}

export function FeatureCard({
  icon,
  title,
  copy,
  points,
  className,
}: {
  icon?: ReactNode;
  title: string;
  copy: string;
  points?: string[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "surface-panel hover-lift group h-full rounded-2xl p-6 sm:p-7",
        className,
      )}
    >
      {icon ? (
        <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-hairline bg-surface-2 text-foreground transition-colors group-hover:citron-mark group-hover:border-transparent">
          {icon}
        </div>
      ) : null}
      <h3 className="text-xl sm:text-2xl">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{copy}</p>
      {points?.length ? (
        <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
          {points.map((point) => (
            <li key={point} className="flex gap-2.5">
              <span
                aria-hidden="true"
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
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
    <Section className="bg-surface border-t border-hairline">
      <Reveal className="relative overflow-hidden px-2 py-6 text-center sm:px-12">
        <div className="relative">
          <h2 className="mx-auto max-w-2xl text-3xl leading-tight sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm text-muted-foreground sm:text-base">
            {copy}
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="sm" className="w-full sm:w-auto">
              <Link to="/contact">Request a demo</Link>
            </Button>
            <Button
              asChild
              size="sm"
              variant="outline"
              className="w-full sm:w-auto"
            >
              <Link to="/pricing">Start free trial</Link>
            </Button>
            <Button asChild size="sm" variant="ghost" className="w-full sm:w-auto">
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
        "surface-panel hover-lift overflow-hidden rounded-2xl p-2",
        className,
      )}
    >
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        className="h-auto w-full rounded-xl"
      />
    </div>
  );
}
