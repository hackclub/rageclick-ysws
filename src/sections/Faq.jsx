import { ChaosProvider } from "../effects/ChaosContext";
import ColorCycleBackground from "../effects/ColorCycleBackground";
import { Scanlines } from "../components/Texture";
import PillNav from "../components/PillNav";
import DeadlineStamp from "../components/DeadlineStamp";
import { CHAOS_LEVELS } from "../config/chaos";

// Placeholder copy — real program details go here before launch.
const FAQ_ITEMS = [
  {
    q: "who is eligible?",
    // TODO: real copy
    a: "as long as ur 13-18, you're okay!",
  },
  {
    q: "how much does it cost?",
    // TODO: real copy
    a: "zero. you bring the code, we bring the prizes. that simple",
  },
  {
    q: "what counts as a project?",
    // TODO: real copy
    a: "your code must be accessible via the open internet (deployed url). screenshots alone aren't enough.",
  },
  {
    q: "when's the deadline?",
    // TODO: real copy
    a: "ends july 6th, so be quick. lets get creative.",
  },
  {
    q: "can i use ai?",
    // TODO: real copy
    a: "you can use ai, however less than 10% of your project should be ai. this should be a fun project, not something you are rolling your eyes to accomplish.",
  },
];

function FaqContent() {
  return (
    <ColorCycleBackground className="px-6 py-16">
      <Scanlines />
      <div id="faq" className="mx-auto max-w-3xl">
        <h2 className="text-center font-terminal text-4xl text-neon-green">faq</h2>
        <PillNav className="mt-4" />

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {FAQ_ITEMS.map((item) => (
            <div
              key={item.q}
              className="border-2 border-paper/60 bg-black/60 p-5"
            >
              <p className="font-clash text-lg text-neon-lavender">{item.q}</p>
              <p className="mt-2 font-type text-sm text-paper/85">{item.a}</p>
            </div>
          ))}

          <div className="border-2 border-dotted border-neon-magenta bg-black/60 p-5 sm:col-span-2">
            <p className="font-clash text-lg text-neon-magenta">
              is this legit? what's hack club?
            </p>
            {/* TODO: real copy */}
            <p className="mt-2 font-type text-sm text-paper/85">
              we're legit! Hack Club is the world's largest
              community of teen makers and a 501(c)(3) nonprofit. We've run
              programs like High Seas and Summer of Making that gave out
              prizes for shipping projects. We're supported by donations from
              companies and individuals. check us out <a className="link underline" href="https://hackclub.com/">here.</a>
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <DeadlineStamp />
        </div>

        <div>
          
        </div>
      </div>
    </ColorCycleBackground>
  );
}

export default function Faq() {
  return (
    <ChaosProvider level={CHAOS_LEVELS.faq} interactive={false}>
      <FaqContent />
    </ChaosProvider>
  );
}
