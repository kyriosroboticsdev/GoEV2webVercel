"use client";

import { useState } from "react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Kicker, primaryBtn } from "@/components/ui";

const fieldBase =
  "w-full rounded-sm border border-line bg-surface px-4 py-3 text-sm text-fg placeholder:text-muted/60 outline-none transition-colors focus:border-accent";

export default function PilotPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Nav />
      <main className="pt-28">
        <section className="mx-auto max-w-2xl px-5 pb-24">
          <Kicker>Pilot Program</Kicker>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">
            Apply to the pilot.
          </h1>
          <p className="mt-5 text-muted">
            We&apos;re onboarding a small first group of riders, resorts, and
            operators. Tell us who you are — applying takes a minute, and a
            founder reads every one.
          </p>

          {submitted ? (
            <div className="mt-10 rounded-sm border border-accent/40 bg-accent/10 p-8">
              <div className="kicker mb-2">Received</div>
              <p className="text-lg">
                Thanks — you&apos;re on the list. A founder will reach out
                directly to talk next steps.
              </p>
            </div>
          ) : (
            <form
              className="mt-10 space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm text-muted">Name</label>
                  <input required className={fieldBase} placeholder="Your name" />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-muted">Email</label>
                  <input
                    required
                    type="email"
                    className={fieldBase}
                    placeholder="you@email.com"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm text-muted">Phone</label>
                  <input
                    type="tel"
                    className={fieldBase}
                    placeholder="Optional"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-muted">
                    I&apos;m a…
                  </label>
                  <select required className={fieldBase} defaultValue="">
                    <option value="" disabled>
                      Choose one
                    </option>
                    <option>Rider / enthusiast</option>
                    <option>Resort / adventure park</option>
                    <option>Fleet operator / business</option>
                    <option>Just curious</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm text-muted">
                  What would you use EV² for?
                </label>
                <textarea
                  rows={4}
                  className={fieldBase}
                  placeholder="A sentence or two is plenty."
                />
              </div>

              <button type="submit" className={primaryBtn}>
                Submit application →
              </button>
              <p className="font-mono text-xs text-muted">
                {/* TODO: wire to email/CRM backend before launch */}
                // demo form — submissions are not yet sent anywhere.
              </p>
            </form>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
