import Link from "next/link";

const links = [
  { href: "/#experience", label: "Experience" },
  { href: "/#capabilities", label: "Capabilities" },
  { href: "/specs", label: "Specs" },
  { href: "/pilot", label: "Pilot" },
];

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/60 bg-bg/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link
          href="/"
          className="font-mono text-lg font-bold tracking-tight text-fg"
        >
          EV<span className="text-accent">²</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-muted transition-colors hover:text-fg"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/pilot"
          className="rounded-sm border border-accent/50 bg-accent/10 px-4 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-bg"
        >
          Apply
        </Link>
      </div>
    </header>
  );
}
