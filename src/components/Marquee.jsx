// CSS keyframe marquee — deliberately not the real <marquee> tag, so speed and
// direction can be tied to chaos level. Purely decorative.
export default function Marquee({ text, speedSeconds = 12, className = "" }) {
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <span
        className="inline-block"
        style={{ animation: `cursed-marquee ${speedSeconds}s linear infinite` }}
      >
        {text}
      </span>
    </div>
  );
}
