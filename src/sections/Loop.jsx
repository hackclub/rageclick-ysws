import { ChaosProvider } from "../effects/ChaosContext";
import { useScrollSkew } from "../effects/useScrollSkew";
import { useZoomPulse } from "../effects/useZoomPulse";
import ColorCycleBackground from "../effects/ColorCycleBackground";
import { Scanlines, AsciiDivider, BeveledBox } from "../components/Texture";
import Marquee from "../components/Marquee";
import DeadlineStamp from "../components/DeadlineStamp";
import { CHAOS_LEVELS } from "../config/chaos";

const STEPS = [
  { n: 1, label: "Have a stupid idea", detail: "PS: Bonus points if it's fun" },
  { n: 2, label: "click clack...", detail: "make your idea into reality. log your hours via hackatime (details below)" },
  { n: 3, label: "deploy it!", detail: "share your creative garbage to the world! deploy it and fill out the submission form." },
  { n: 4, label: "GET THE 1-KEY KEYBOARD SHIPPED TO YOU", detail: "We mail you the prize." },
];

function LoopContent() {
  const skewRef = useScrollSkew();
  const pulse = useZoomPulse();

  return (
    <ColorCycleBackground className="px-6 py-16">
      <Scanlines />
      <Marquee
        text="Volume bar that turns down brightness · mouse that moves as you tilt · something stupid · something ridicious and fun ·"
        className="mb-6 font-terminal text-lg text-neon-green"
      />
      <div ref={skewRef} className={`mx-auto grid max-w-3xl gap-4 sm:grid-cols-2 ${pulse.className ?? ""}`} style={pulse.style}>
        {STEPS.map((step) => (
          <BeveledBox key={step.n} className="bg-terminal/60 p-4">
            <p className="font-terminal text-3xl text-neon-lavender">{step.n}</p>
            <p className="mt-1 font-clash text-lg text-paper">{step.label}</p>
            <p className="mt-1 font-type text-sm text-paper/80">{step.detail}</p>
            {step.n === 4 && (
              <div className="mt-3">
                <DeadlineStamp />
              </div>
            )}
          </BeveledBox>
        ))}
      </div>
      <div className="text-center mt-2">
        <p>In order to get your prize, you must track your hours via <a className="link underline" href="https://hackatime.hackclub.com">hackatime!</a></p>
      </div>
      <AsciiDivider className="mt-8 text-neon-green" />
    </ColorCycleBackground>
  );
}

export default function Loop() {
  return (
    <ChaosProvider level={CHAOS_LEVELS.loop}>
      <LoopContent />
    </ChaosProvider>
  );
}
