import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface/40">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-xs">
            <div className="font-mono text-xl font-bold">
              EV<span className="text-accent">²</span>
            </div>
            <p className="mt-3 text-sm text-muted">
              Electric, remote, autonomous-ready all-terrain vehicles. Built for
              families, resorts, and operators.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 text-sm">
            <div>
              <div className="kicker mb-3">Explore</div>
              <ul className="space-y-2 text-muted">
                <li>
                  <Link href="/#capabilities" className="hover:text-fg">
                    Capabilities
                  </Link>
                </li>
                <li>
                  <Link href="/specs" className="hover:text-fg">
                    Specs &amp; Tech
                  </Link>
                </li>
                <li>
                  <Link href="/pilot" className="hover:text-fg">
                    Pilot Program
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="hover:text-fg">
                    Team
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <div className="kicker mb-3">Contact</div>
              <ul className="space-y-2 text-muted">
                <li>San Diego, CA</li>
                <li>Chennai, India</li>
                <li>
                  <a href="/contact" className="hover:text-fg">
                    Get in touch
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 font-mono text-xs text-muted md:flex-row md:justify-between">
          <span>© 2026 EV². All rights reserved.</span>
          <span>Electric. Remote. Autonomous-Ready.</span>
        </div>
      </div>
    </footer>
  );
}
