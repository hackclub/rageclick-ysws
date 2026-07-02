import { useState } from "react";
import { ChaosProvider } from "../effects/ChaosContext";
import { useScrollSkew } from "../effects/useScrollSkew";
import { useZoomPulse } from "../effects/useZoomPulse";
import { useCursorGag } from "../effects/useCursorGag";
import ColorCycleBackground from "../effects/ColorCycleBackground";
import { Scanlines, Vignette } from "../components/Texture";
import WindowFrame from "../components/WindowFrame";
import SafeZone from "../effects/SafeZone";
import Blink from "../components/Blink";
import { SHIP_FORM_URL } from "../config/links";
import { CHAOS_LEVELS } from "../config/chaos";

function ShipFormContent() {
  const skewRef = useScrollSkew();
  const pulse = useZoomPulse();
  const inputJitterRef = useCursorGag();
  const [url, setUrl] = useState("");

  return (
    <ColorCycleBackground className="px-6 py-16">
      <Scanlines />
      <Vignette />
      <div
        ref={skewRef}
        className={`relative mx-auto max-w-xl ${pulse.className ?? ""}`}
        style={pulse.style}
      >
        <WindowFrame title="ESC_LOCALHOST.EXE">
          <p className="font-clash text-center text-lg text-neon-magenta">
            Your project is lonely on your hard drive. Set it free.
          </p>
{/* 
          <label className="mt-4 block font-terminal text-sm text-neon-lavender">
            PROJECT_URL_HERE
            <input
              ref={inputJitterRef}
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://your-project.example"
              className="mt-1 block w-full border-2 border-neon-green bg-black px-3 py-2 font-type text-paper outline-none"
            />
          </label> */}

          <SafeZone className="mt-6 text-center">
            <a
              href={SHIP_FORM_URL}
              className="inline-block border-4 border-neon-red bg-neon-red/20 px-8 py-4 font-terminal text-2xl tracking-wide text-neon-red"
            >
              SHIP NOW!!!
            </a>
          </SafeZone>

          <p className="mt-4 text-center font-type text-xs text-paper/70">
            <Blink>WARNING: SHIPPING MAY CAUSE EXTREME PERSONAL GROWTH.</Blink>
          </p>
        </WindowFrame>
      </div>
    </ColorCycleBackground>
  );
}

export default function ShipForm() {
  return (
    <ChaosProvider level={CHAOS_LEVELS.shipForm}>
      <ShipFormContent />
    </ChaosProvider>
  );
}
