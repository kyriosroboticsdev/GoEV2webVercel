import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { MediaSlot, Kicker, Link } from "@/components/ui";

export const metadata: Metadata = {
  title: "Team — EV²",
  description: "The small, credible team building EV².",
};

// Placeholder roster — swap names, photos, and one-liners once the founder
// confirms who to feature.
const team = [
  { name: "Founder", role: "Founder & CEO" },
  { name: "Engineering Lead", role: "Hardware & Autonomy" },
  { name: "Operations", role: "Pilot & Partnerships" },
];

export default function TeamPage() {
  return (
    <>
      <Nav />
      <main className="pt-28">
        <section className="mx-auto max-w-6xl px-5 pb-24">
          <Kicker>Team</Kicker>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">
            Small. Credible. Real.
          </h1>
          <p className="mt-5 max-w-xl text-muted">
            A focused team building a new kind of all-terrain vehicle. No layers,
            no call centers — talk to the people actually making it.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m) => (
              <div
                key={m.role}
                className="rounded-sm border border-line bg-surface/40 p-3"
              >
                <MediaSlot label={m.name} className="aspect-[4/5]" />
                <div className="p-3">
                  <h3 className="text-lg font-semibold">{m.name}</h3>
                  <p className="font-mono text-xs uppercase tracking-[0.15em] text-accent">
                    {m.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-10 font-mono text-xs text-muted">
            // bios + photos to be added once the founder confirms the roster.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-block text-sm text-accent hover:underline"
          >
            Talk to us →
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
