import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Kicker } from "@/components/ui";

export const metadata: Metadata = {
  title: "Specs & Tech — EV²",
  description:
    "The engineering behind EV²: drive system, power, battery, capacity, terrain capability, and autonomy stack.",
};

const specGroups = [
  {
    group: "Drive system",
    rows: [
      ["Configuration", "Quad-motor all-wheel drive"],
      ["Motors", "Four independent in-wheel motors"],
      ["Peak power / wheel", "~5 kW"],
      ["Rated power / wheel", "~4 kW"],
      ["Max torque / wheel", "210 Nm"],
    ],
  },
  {
    group: "Performance",
    rows: [
      ["Top speed", "Up to 40 mph"],
      ["Range", "~55 mi (approx., 4 packs)"],
    ],
  },
  {
    group: "Battery",
    rows: [
      ["Chemistry", "Safe LFP"],
      ["Capacity", "15 kWh"],
      ["Rating", "IP67 waterproof"],
    ],
  },
  {
    group: "Capacity",
    rows: [
      ["Towing", "1,000–2,500 lbs"],
      ["Payload", "Up to 800 lbs"],
    ],
  },
  {
    group: "Terrain",
    rows: [
      ["Water fording", "Up to 2 ft"],
      ["Tipping angle", "~35°"],
    ],
  },
];

const techStack = [
  {
    title: "Sensing & perception",
    items: [
      "360° terrain mapping (LiDAR + ultrasonic + stereo cameras)",
      "IMU, wheel encoders, shock sensors",
      "Thermal / infrared for all-weather vision",
      "Sensor fusion for terrain classification",
    ],
  },
  {
    title: "Autonomy & control",
    items: [
      "Real-time terrain modeling & adaptive suspension",
      "Dynamic stability control + torque vectoring",
      "Return-to-Base, Follow-Me, A-to-B navigation",
      "Obstacle avoidance + remote override",
    ],
  },
  {
    title: "Connectivity & fleet",
    items: [
      "High-performance onboard compute",
      "OTA updates & predictive maintenance",
      "Telemetry, data logging & analytics",
      "Fleet management with geofencing",
    ],
  },
];

export default function SpecsPage() {
  return (
    <>
      <Nav />
      <main className="pt-28">
        <section className="mx-auto max-w-6xl px-5 pb-12">
          <Kicker>Specs &amp; Tech</Kicker>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
            The engineering, for whoever wants the proof.
          </h1>
          <p className="mt-5 max-w-2xl text-muted">
            EV²&apos;s real edge isn&apos;t raw horsepower — it&apos;s{" "}
            <span className="text-fg">
              remote operation, an autonomous-ready stack, a step-on design, and
              a revenue-ready fleet model
            </span>
            . Here are the numbers underneath that.
          </p>
        </section>

        {/* Spec table */}
        <section className="mx-auto max-w-6xl px-5 pb-20">
          <div className="grid gap-px overflow-hidden rounded-sm border border-line bg-line md:grid-cols-2">
            {specGroups.map((g) => (
              <div key={g.group} className="bg-surface p-6">
                <div className="kicker mb-4">{g.group}</div>
                <dl className="divide-y divide-line">
                  {g.rows.map(([k, v]) => (
                    <div
                      key={k}
                      className="flex items-baseline justify-between gap-4 py-2.5"
                    >
                      <dt className="text-sm text-muted">{k}</dt>
                      <dd className="text-right font-mono text-sm">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>
          <p className="mt-4 font-mono text-xs text-muted">
            // figures are engineering targets — final specs confirmed at pilot
            delivery.
          </p>
        </section>

        {/* Tech stack */}
        <section className="border-t border-line py-20">
          <div className="mx-auto max-w-6xl px-5">
            <Kicker>Deep tech</Kicker>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              What makes it autonomous-ready.
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {techStack.map((col) => (
                <div
                  key={col.title}
                  className="rounded-sm border border-line bg-surface/40 p-6"
                >
                  <h3 className="text-lg font-semibold">{col.title}</h3>
                  <ul className="mt-4 space-y-3">
                    {col.items.map((it) => (
                      <li
                        key={it}
                        className="flex gap-2.5 text-sm text-muted"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-6 font-mono text-xs text-muted">
              // autonomy modes (Return-to-Base, Follow-Me, A-to-B) ship
              progressively through the pilot program.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
