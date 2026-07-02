// Reusable zero-asset Y2K texture helpers: CRT scanlines, a corner vignette,
// beveled (Windows-95-ish) borders, and ASCII/box-drawing dividers. Everything
// here is CSS-only — no image files, no icon library.

export function Scanlines({ className = "" }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={{
        backgroundImage:
          "repeating-linear-gradient(0deg, rgba(0,0,0,0.25) 0px, rgba(0,0,0,0.25) 1px, transparent 1px, transparent 3px)",
      }}
    />
  );
}

export function Vignette({ className = "" }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={{
        backgroundImage:
          "radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.55) 100%)",
      }}
    />
  );
}

export function BeveledBox({ children, className = "", outset = true }) {
  return (
    <div
      className={`border-4 ${className}`}
      style={{ borderStyle: outset ? "outset" : "inset", borderColor: "#8a8a8a" }}
    >
      {children}
    </div>
  );
}

export function AsciiDivider({ char = "=", className = "" }) {
  return (
    <div
      aria-hidden="true"
      className={`select-none overflow-hidden whitespace-nowrap font-terminal opacity-60 ${className}`}
    >
      {char.repeat(200)}
    </div>
  );
}
