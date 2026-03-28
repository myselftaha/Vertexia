const socials = [
  { label: "LinkedIn", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "X", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "Instagram", href: "#" }
];

export default function Footer() {
  return (
    <footer className="bg-[#050505] px-6 pb-10 text-white/60" id="company">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-6 text-sm">
        <span>© 2022–2026 Vertexia All rights reserved</span>
        <div className="flex items-center gap-6 text-white/70">
          {socials.map((item) => (
            <a key={item.label} href={item.href} className="hover:text-white">
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

