import { useEffect, useRef, useState } from "react";
import { useChaos } from "./ChaosContext";

// Button dodges the cursor for a handful of hover attempts, then gives up and
// stays put — the control is always reachable eventually, never permanently
// unclickable, satisfying the "gag never actually blocks conversion" rule.
export function useButtonDodge({ maxAttempts = 3, dodgePx = 40 } = {}) {
  const ref = useRef(null);
  const attemptsRef = useRef(0);
  const { level, interactive } = useChaos();
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el || !interactive || level <= 0) return undefined;

    const onMouseEnter = () => {
      if (attemptsRef.current >= maxAttempts) return;
      attemptsRef.current += 1;
      const dx = (Math.random() - 0.5) * 2 * dodgePx;
      const dy = (Math.random() - 0.5) * 2 * dodgePx;
      setOffset({ x: dx, y: dy });
    };

    el.addEventListener("mouseenter", onMouseEnter);
    return () => el.removeEventListener("mouseenter", onMouseEnter);
  }, [interactive, level, maxAttempts, dodgePx]);

  return {
    ref,
    style: {
      transform: `translate(${offset.x}px, ${offset.y}px)`,
      transition: "transform 0.2s ease-out",
    },
  };
}
