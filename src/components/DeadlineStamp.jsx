import SafeZone from "../effects/SafeZone";

// Self-wraps in SafeZone so every instance is guaranteed legible/stable
// regardless of the ambient chaos level of whatever section it's dropped into.
export default function DeadlineStamp({ className = "" }) {
  return (
    <SafeZone
      className={`inline-block border-2 border-neon-red bg-void px-3 py-1 font-terminal text-lg tracking-widest text-neon-red ${className}`}
    >
      STATUS: SUBMISSIONS CLOSE JUL 6 — NO EXTENSIONS
    </SafeZone>
  );
}
