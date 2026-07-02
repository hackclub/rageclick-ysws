import { ChaosProvider } from "./ChaosContext";

// Structural guarantee, not a convention: anything inside SafeZone always sees
// level 0 / non-interactive chaos, so the primary CTA and deadline stamps stay
// clickable and legible no matter how high the ambient chaos level is tuned.
export default function SafeZone({ children, className = "" }) {
  return (
    <ChaosProvider level={0} interactive={false}>
      <div className={className}>{children}</div>
    </ChaosProvider>
  );
}
