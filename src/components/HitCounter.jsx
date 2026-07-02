// Fake Y2K-style hit counter, digits generated in markup — no image/asset digits.
export default function HitCounter({ count = 4013, className = "" }) {
  const digits = String(count).padStart(6, "0").split("");
  return (
    <div className={`inline-flex items-center gap-2 font-terminal text-sm ${className}`}>
      <span className="opacity-70">visitors:</span>
      <span className="flex border border-paper/40 bg-black px-1 text-neon-green">
        {digits.map((digit, i) => (
          <span key={i} className="w-4 border-r border-paper/20 text-center last:border-r-0">
            {digit}
          </span>
        ))}
      </span>
    </div>
  );
}
