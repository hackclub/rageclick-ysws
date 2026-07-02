import { ChaosProvider } from "../effects/ChaosContext";
import { useScrollSkew } from "../effects/useScrollSkew";
import { useZoomPulse } from "../effects/useZoomPulse";
import ColorCycleBackground from "../effects/ColorCycleBackground";
import { Scanlines } from "../components/Texture";
import WindowFrame from "../components/WindowFrame";
import DeadlineStamp from "../components/DeadlineStamp";
import { CHAOS_LEVELS } from "../config/chaos";

function HeroContent() {
  const skewRef = useScrollSkew();
  const pulse = useZoomPulse();

  return (
    <ColorCycleBackground className="px-6 py-16">
      <Scanlines />
      <div
        ref={skewRef}
        className={`relative mx-auto max-w-2xl ${pulse.className ?? ""}`}
        style={pulse.style}
      >
        <WindowFrame title="rageclick.EXE">
          <h1 className="font-terminal text-5xl leading-none text-neon-green">
            rageclick!
          </h1>
          <p className="mt-4 font-clash text-2xl text-neon-magenta">
            make bad ui, get a one click keyboard keychain
          </p>
          <p className="mt-2 font-type text-base text-neon-lavender">
            literally any s*** ui works
          </p>
          <p className="mt-6 font-type text-sm text-paper/90">
            real prizes for completely free. confused, look at <a className="link underline" href="https://hackclub.com">what hackclub is all about.</a>
          </p>

          <p className="mt-3 text-sm font-extrabold">only takes 1-3 hours!</p>
          <div className="mt-2">
            <DeadlineStamp />

          </div>

          <div>
            <p className="font-type text-sm mt-1">created by yours truly, sebastian h (plastuchino)</p>
          </div>
        </WindowFrame>
      </div>
    </ColorCycleBackground>
  );
}

export default function Hero() {
  return (
    <ChaosProvider level={CHAOS_LEVELS.hero}>
      <HeroContent />
    </ChaosProvider>
  );
}
