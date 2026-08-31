import { useEffect } from "react";

/**
 * Drives the `--wheel-spin` custom property from scroll position so every
 * section watermark rotates as the page scrolls. One passive listener plus a
 * single rAF write per frame — cheap enough for low-end devices.
 */
export function WheelScroll() {
  useEffect(() => {
    const root = document.documentElement;
    let frame = 0;
    let last = -1;

    const write = () => {
      frame = 0;
      const deg = Math.round(window.scrollY * 0.06 * 10) / 10;
      if (deg === last) return;
      last = deg;
      root.style.setProperty("--wheel-spin", `${deg}deg`);
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(write);
    };

    write();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
