import { useEffect, useRef } from "react";
import { useChaos } from "./ChaosContext";

const SUPPORTS_SCROLL_TIMELINE =
  typeof CSS !== "undefined" && CSS.supports?.("animation-timeline: scroll()");

// Ties a tilt/skew transform to scroll position, intensity scaled by chaos level.
// Disabled entirely when the section is flagged non-interactive (FAQ, SafeZone).
export function useScrollSkew(degreesPerLevel = 0.6) {
  const ref = useRef(null);
  const { level, interactive } = useChaos();

  useEffect(() => {
    const el = ref.current;
    if (!el || !interactive || level <= 0) return undefined;

    const maxDeg = degreesPerLevel * level;

    if (SUPPORTS_SCROLL_TIMELINE) {
      el.style.setProperty("--skew-max", `${maxDeg}deg`);
      el.classList.add("cursed-scroll-skew");
      return () => el.classList.remove("cursed-scroll-skew");
    }

    // Fallback for browsers without CSS scroll-driven animations.
    let raf = null;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = null;
        const rect = el.getBoundingClientRect();
        const viewportCenter = window.innerHeight / 2;
        const distance =
          (rect.top + rect.height / 2 - viewportCenter) / viewportCenter;
        const clamped = Math.max(-1, Math.min(1, distance));
        el.style.transform = `skewY(${clamped * maxDeg}deg)`;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [interactive, level, degreesPerLevel]);

  return ref;
}
