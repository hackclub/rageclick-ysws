import { useChaos } from "./ChaosContext";

// Returns className/style for a slow scale pulse, intensity scaled by chaos level.
// A no-op object when the section is flagged non-interactive.
export function useZoomPulse(basePulse = 0.015) {
  const { level, interactive } = useChaos();
  if (!interactive || level <= 0) return {};

  const scale = 1 + basePulse * level;
  const duration = Math.max(2.5, 6 - level * 0.5);

  return {
    className: "cursed-zoom-pulse",
    style: {
      "--zoom-scale": scale,
      animationDuration: `${duration}s`,
    },
  };
}
