// Fake "windowed app" chrome (title bar + corner brackets) shared by the hero
// (YSWS_INTRO.EXE) and ship form (ESC_LOCALHOST.EXE) sections. CSS-only.
export default function WindowFrame({ title, children, className = "" }) {
  return (
    <div className={`relative border-4 border-neon-green bg-black/70 ${className}`}>
      <div className="flex items-center justify-between border-b-4 border-neon-green bg-neon-green/10 px-3 py-1 font-terminal text-xl text-neon-green">
        <span>{title}</span>
        <span aria-hidden="true" className="flex gap-1">
          <span className="inline-block h-3 w-3 border border-neon-green" />
          <span className="inline-block h-3 w-3 border border-neon-green" />
          <span className="inline-block h-3 w-3 border border-neon-red" />
        </span>
      </div>
      <div className="p-6">{children}</div>

      {/* corner brackets, Stasis-style */}
      <span aria-hidden="true" className="absolute -left-1 -top-1 h-4 w-4 border-l-4 border-t-4 border-neon-magenta" />
      <span aria-hidden="true" className="absolute -right-1 -top-1 h-4 w-4 border-r-4 border-t-4 border-neon-magenta" />
      <span aria-hidden="true" className="absolute -bottom-1 -left-1 h-4 w-4 border-b-4 border-l-4 border-neon-magenta" />
      <span aria-hidden="true" className="absolute -bottom-1 -right-1 h-4 w-4 border-b-4 border-r-4 border-neon-magenta" />
    </div>
  );
}
