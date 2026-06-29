import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Kicker } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contact — EV²",
  description: "Direct founder contact. No complicated forms.",
};

const offices = [
  {
    region: "USA",
    address: "10745 Fenwick Rd, San Diego, CA 92126",
    phone: "+1 (217) 520-8243",
    tel: "+12175208243",
  },
  {
    region: "India",
    address: "9A, Bharathi Street, Radha Nagar, Chennai 600044",
    phone: "+91 80722 80522",
    tel: "+918072280522",
  },
];

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="pt-28">
        <section className="mx-auto max-w-4xl px-5 pb-24">
          <Kicker>Contact</Kicker>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">
            Talk to the founder directly.
          </h1>
          <p className="mt-5 max-w-xl text-muted">
            No complicated forms, no ticket queue. Email or call and you&apos;ll
            hear back from a real person.
          </p>

          <a
            href="mailto:hello@goev2.com"
            className="mt-10 inline-block rounded-sm border border-accent/40 bg-accent/10 px-6 py-4 transition-colors hover:bg-accent hover:text-bg"
          >
            <div className="kicker mb-1">Email</div>
            <div className="text-lg font-semibold">hello@goev2.com</div>
          </a>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {offices.map((o) => (
              <div
                key={o.region}
                className="rounded-sm border border-line bg-surface/40 p-6"
              >
                <div className="kicker mb-3">{o.region}</div>
                <p className="text-sm text-muted">{o.address}</p>
                <a
                  href={`tel:${o.tel}`}
                  className="mt-3 inline-block font-mono text-sm hover:text-accent"
                >
                  {o.phone}
                </a>
              </div>
            ))}
          </div>

          <p className="mt-10 font-mono text-xs text-muted">
            // confirm the public-facing email address before launch.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
