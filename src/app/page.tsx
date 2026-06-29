import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { MediaSlot, Kicker, primaryBtn, ghostBtn } from "@/components/ui";

const moments = [
  { label: "ATV in motion", caption: "The ATV moves." },
  { label: "Family riding", caption: "The family rides." },
  { label: "Phone remote", caption: "You take the controls — or hand them over." },
  { label: "Return to base", caption: "It finds its own way back." },
];

const capabilities = [
  {
    name: "Ride",
    body: "Step on and go. Instant electric torque, quiet enough to hear the trail.",
    tag: "Manual",
  },
  {
    name: "Remote Operate",
    body: "Drive it from your phone. Load it, park it, move it — without being on it.",
    tag: "Teleop",
  },
  {
    name: "Return to Base",
    body: "Send it home. EV² finds its own way back to where it started.",
    tag: "Autonomous · In pilot",
  },
];

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        {/* ---------- HERO ---------- */}
        <section className="relative flex min-h-screen items-center overflow-hidden pt-16">
          <div className="absolute inset-0">
            <div className="absolute inset-0 grid-hint" />
            <div className="absolute inset-0 bg-gradient-to-b from-bg/50 via-bg/40 to-bg" />
            <div className="scanline" />
            <div className="absolute bottom-5 right-5 font-mono text-[0.6rem] uppercase tracking-[0.22em] text-muted">
              Hero reel // footage pending
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-6xl px-5">
            <Kicker>Autonomous-ready electric ATV</Kicker>
            <h1 className="mt-5 max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">
              Electric. Remote.{" "}
              <span className="text-accent">Autonomous-Ready.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted">
              An all-terrain EV you can ride, run from your phone, or send home
              on its own.
            </p>

            <div className="mt-7 inline-flex items-center gap-3 rounded-sm border border-line bg-surface/60 px-4 py-2 font-mono text-xs tracking-wider text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              55 MI RANGE · QUAD-MOTOR AWD · IP67
            </div>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/pilot" className={primaryBtn}>
                Apply to the Pilot →
              </Link>
              <a href="#experience" className={ghostBtn}>
                Watch it move
              </a>
            </div>
          </div>
        </section>

        {/* ---------- 01 EXPERIENCE ---------- */}
        <section id="experience" className="border-t border-line py-24">
          <div className="mx-auto max-w-6xl px-5">
            <Kicker>01 / Experience</Kicker>
            <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight sm:text-5xl">
              Experience EV²
            </h2>
            <p className="mt-4 max-w-xl text-muted">Four moments, one machine.</p>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {moments.map((m) => (
                <div key={m.caption}>
                  <MediaSlot label={m.label} className="aspect-[4/5]" />
                  <p className="mt-3 text-sm">{m.caption}</p>
                </div>
              ))}
            </div>

            <p className="mt-10 font-mono text-sm text-muted">
              // mostly, it&apos;s just fun.
            </p>
          </div>
        </section>

        {/* ---------- 02 CAPABILITIES ---------- */}
        <section id="capabilities" className="border-t border-line py-24">
          <div className="mx-auto max-w-6xl px-5">
            <Kicker>02 / Capabilities</Kicker>
            <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight sm:text-5xl">
              Three things it does.
            </h2>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {capabilities.map((c) => (
                <div
                  key={c.name}
                  className="flex flex-col rounded-sm border border-line bg-surface/40 p-3"
                >
                  <MediaSlot label={c.name} className="aspect-video" />
                  <div className="p-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold">{c.name}</h3>
                      <span className="font-mono text-[0.6rem] uppercase tracking-[0.15em] text-accent">
                        {c.tag}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-muted">{c.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- STATS BOX (links to specs) ---------- */}
        <section className="border-t border-line py-16">
          <div className="mx-auto max-w-6xl px-5">
            <Link
              href="/specs"
              className="group block rounded-sm border border-line bg-surface/40 p-6 transition-colors hover:border-accent/50 hover:bg-surface-2/60 sm:p-8"
            >
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="kicker">// stats for nerds</div>
                  <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                    Here&apos;s what EV² can do for you.
                  </h2>
                  <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs uppercase tracking-wider text-muted">
                    <span>Quad-motor AWD</span>
                    <span className="text-line">/</span>
                    <span>~55 mi range</span>
                    <span className="text-line">/</span>
                    <span>2,500 lb towing</span>
                    <span className="text-line">/</span>
                    <span>IP67</span>
                  </div>
                </div>
                <span className="inline-flex shrink-0 items-center gap-2 font-mono text-sm text-accent transition-transform duration-200 group-hover:translate-x-1">
                  See full specs →
                </span>
              </div>
            </Link>
          </div>
        </section>

        {/* ---------- 03 PILOT ---------- */}
        <section
          id="pilot"
          className="relative overflow-hidden border-t border-line py-28"
        >
          <div className="absolute inset-0 grid-hint opacity-40" />
          <div className="relative mx-auto max-w-4xl px-5 text-center">
            <Kicker>03 / Pilot Program</Kicker>
            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
              We&apos;re onboarding our first pilot customers.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-muted">
              A small group of riders, resorts, and operators shaping EV² before
              everyone else.
            </p>
            <Link href="/pilot" className={`${primaryBtn} mt-10`}>
              Apply to the Pilot →
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
