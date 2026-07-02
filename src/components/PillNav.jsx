const ITEMS = [
  { label: "home", href: "#top" },
  { label: "about", href: "#loop" },
  { label: "faq", href: "#faq" },
];

// Pill-style nav modeled on onekey.hackclub.com's home/about/faq convention.
export default function PillNav({ className = "" }) {
  return (
    <nav className={`flex flex-wrap justify-center gap-2 ${className}`}>
      {ITEMS.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="rounded-full border-2 border-paper/60 px-4 py-1 font-terminal text-lg text-paper hover:bg-paper/10"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
