// Opacity-cycling "blink" — never drops to 0 opacity and never cycles faster
// than ~2s, staying well clear of the 3-60Hz photosensitive flash range.
export default function Blink({ children, speedSeconds = 2.5, className = "" }) {
  const safeSpeed = Math.max(2, speedSeconds);
  return (
    <span
      className={className}
      style={{ animation: `cursed-blink ${safeSpeed}s ease-in-out infinite` }}
    >
      {children}
    </span>
  );
}
