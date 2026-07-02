import { useEffect, useRef } from "react";
import { useChaos } from "./ChaosContext";

// Cursor "lag" gag: on hover the element jitters away from the pointer, but
// snaps back to its true position immediately on pointerdown, so a click/tap
// always lands where the user expects — the gag never actually blocks input.
export function useCursorGag(pxPerLevel = 6, maxOffsetPx = 24) {
  const ref = useRef(null);
  const { level, interactive } = useChaos();

  useEffect(() => {
    const el = ref.current;
    if (!el || !interactive || level <= 0) return undefined;

    const offset = Math.min(pxPerLevel * level, maxOffsetPx);

    const jitter = () => {
      const dx = (Math.random() - 0.5) * 2 * offset;
      const dy = (Math.random() - 0.5) * 2 * offset;
      el.style.transition = "transform 0.15s ease-out";
      el.style.transform = `translate(${dx}px, ${dy}px)`;
    };

    const settle = () => {
      el.style.transform = "translate(0, 0)";
    };

    el.addEventListener("mouseenter", jitter);
    el.addEventListener("mouseleave", settle);
    // capture: true so this fires before the click/press is processed by the control.
    el.addEventListener("pointerdown", settle, { capture: true });

    return () => {
      el.removeEventListener("mouseenter", jitter);
      el.removeEventListener("mouseleave", settle);
      el.removeEventListener("pointerdown", settle, { capture: true });
    };
  }, [interactive, level, pxPerLevel, maxOffsetPx]);

  return ref;
}
