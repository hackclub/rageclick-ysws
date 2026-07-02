import { useChaos } from "./ChaosContext";

// Slow hue-rotate cycle behind content. Purely decorative: stays active at a
// section's full chaos level regardless of the interactive flag, so the FAQ can
// stay visually loud while its interaction-affecting effects are disabled.
// Cycle duration never drops below 8s, well outside photosensitive flash ranges.
export default function ColorCycleBackground({ children, className = "" }) {
  const { level } = useChaos();
  const duration = Math.max(8, 20 - level * 2);

  return (
    <div
      className={`relative ${className}`}
      style={
        level > 0
          ? { animation: `cursed-hue-cycle ${duration}s linear infinite` }
          : undefined
      }
    >
      {children}
    </div>
  );
}
