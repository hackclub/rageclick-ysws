import { ChaosProvider } from "../effects/ChaosContext";
import { useScrollSkew } from "../effects/useScrollSkew";
import { useZoomPulse } from "../effects/useZoomPulse";
import ColorCycleBackground from "../effects/ColorCycleBackground";
import { Scanlines, AsciiDivider } from "../components/Texture";
import Marquee from "../components/Marquee";
import DeadlineStamp from "../components/DeadlineStamp";
import HitCounter from "../components/HitCounter";
import LastUpdatedStamp from "../components/LastUpdatedStamp";
import { CHAOS_LEVELS } from "../config/chaos";

function FooterContent() {
  const skewRef = useScrollSkew();
  const pulse = useZoomPulse();

  return (
    <ColorCycleBackground className="px-6 py-16">
      <Scanlines />
      <Marquee
        text="HACK CLUB / YSWS · made by yours truly, plastuchino (sebastian hernandez-tavares) · HACK CLUB / YSWS ·"
        className="mb-6 font-terminal text-neon-magenta"
      />
      <div ref={skewRef} className={`mx-auto max-w-3xl text-center ${pulse.className ?? ""}`} style={pulse.style}>
        <AsciiDivider className="text-neon-lavender" />
        <nav className="mt-6 flex flex-wrap justify-center gap-4 font-terminal text-lg text-paper">
          <a href="https://hackclub.com" className="underline">Hack Club Home</a>
          {/* <a href="#faq" className="underline">The Manifesto</a> */}
          <a href="#loop" className="underline">Ship Logs</a>
          <a href="#faq" className="underline">Cursed UI Gallery</a>
        </nav>
        <div className="mt-6">
          <DeadlineStamp />
        </div>
        <p className="mt-6 font-type text-xs text-paper/60">
          &copy; 2026 HACK CLUB. BUILT BY TEENS FOR TEENS. POWERED BY WEIRD
          ENERGY.
        </p>
        <div className="mt-4 flex items-center justify-center gap-6">
          <HitCounter />
          <LastUpdatedStamp />
        </div>
      </div>
    </ColorCycleBackground>
  );
}

export default function Footer() {
  return (
    <ChaosProvider level={CHAOS_LEVELS.footer}>
      <FooterContent />
    </ChaosProvider>
  );
}
