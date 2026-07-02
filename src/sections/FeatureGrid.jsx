import { ChaosProvider } from "../effects/ChaosContext";
import { useScrollSkew } from "../effects/useScrollSkew";
import { useZoomPulse } from "../effects/useZoomPulse";
import { useButtonDodge } from "../effects/useButtonDodge";
import ColorCycleBackground from "../effects/ColorCycleBackground";
import { Scanlines } from "../components/Texture";
import { CHAOS_LEVELS } from "../config/chaos";

const FEATURES = [
  { label: "become a legend", color: "bg-neon-green/20 text-neon-green border-neon-green" },
  { label: "SLIGHTLY CURSED", color: "bg-neon-magenta/20 text-neon-magenta border-neon-magenta" },
  { label: "why not?", color: "bg-neon-lavender/20 text-neon-lavender border-neon-lavender" },
  { label: "who doesn't want a keychain fidget?", color: "bg-neon-red/20 text-neon-red border-neon-red" },
];

function FeatureCard({ feature }) {
  const dodge = useButtonDodge({ maxAttempts: 2, dodgePx: 20 });
  return (
    <div
      ref={dodge.ref}
      style={dodge.style}
      className={`border-4 p-6 text-center font-terminal text-xl ${feature.color}`}
    >
      {feature.label}
    </div>
  );
}

function FeatureGridContent() {
  const skewRef = useScrollSkew();
  const pulse = useZoomPulse();

  return (
    <ColorCycleBackground className="px-6 py-16">
      <Scanlines />
      <div
        ref={skewRef}
        className={`mx-auto grid max-w-3xl gap-4 sm:grid-cols-2 ${pulse.className ?? ""}`}
        style={pulse.style}
      >
        {FEATURES.map((feature) => (
          <FeatureCard key={feature.label} feature={feature} />
        ))}
      </div>
    </ColorCycleBackground>
  );
}

export default function FeatureGrid() {
  return (
    <ChaosProvider level={CHAOS_LEVELS.featureGrid}>
      <FeatureGridContent />
    </ChaosProvider>
  );
}
