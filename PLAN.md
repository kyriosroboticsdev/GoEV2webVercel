# EV² Website — Full Site Plan

> Repositioning the current Goev2.com from an engineering spec sheet into a video-led
> customer-experience site. The test for every decision: **"Does a stranger watch the
> homepage and say 'I want to try this'?"** (the Tesla-reservation lesson).

---

## 1. The diagnosis (where we're starting)

The current Goev2.com is structured like a **spec sheet / fleet-buyer pitch**: 9 dense
sections — feature cards, deep-tech sensor lists, a 4-column tech grid, a full spec table,
a comparison grid vs Polaris/Can-Am/Volcon/Tomcar, a "Coming Soon" booking app, and a
"Why B2B should switch from IC to EV" essay, ending in a long contact form.

It's **proof-heavy and feeling-light**, and it speaks to an investor or fleet operator —
not to "customers and people." The owner's note asks us to flip that.

**Strategy: don't delete the proof — demote it.** Homepage sells the *feeling*; a deeper
"Specs & Tech" page catches the people who get excited and want to verify. Front door =
emotion. Back room = engineering.

---

## 2. Decisions locked

- **Build:** Fresh static site, deployed on **Vercel**.
- **Video:** Still being captured → design around video *slots* with image/placeholder
  fallbacks that upgrade to footage later with zero layout changes.
- **Scope:** Full site blueprint first, then build.

### Recommended stack
- **Next.js (App Router)** — most native Vercel path, great video support, easy to grow.
  - Alternative: **Astro** if we want near-zero JS and max performance for heavy video.
- Tailwind CSS for fast, consistent styling. Minimal dependencies.
- Video: self-hosted MP4/WebM for short loops; consider Mux/Cloudflare Stream if files
  get large. Always a poster image so nothing is blank before play.

---

## 3. Brand & design direction

**Guiding principle — split the job:** the human footage carries the *warmth and mass
appeal* (families riding = approachable); the *interface* carries the *futuristic
precision* (telemetry, scan cues, restrained accent). That contrast lets us be advanced
**and** broadly appealing at once, the way Rivian / Polestar / Tesla do it. The product
feels next-gen; the people in it feel like the customer.

- **Wordmark: "EV²"** (the site currently mixes Goev2 / GoEV2 / GOEV² / EV² — we pick one).
  Domain stays goev2.com. *→ owner sign-off needed.*
- **"Not bubbly" = concrete rules:** no pill shapes, no bright gradients, no bouncy
  motion, no rounded playful fonts. Instead: sharp / barely-rounded corners (2–4px),
  precise easing, disciplined color.
- **Palette:** near-black base (slightly cool, not pure #000), one restrained accent
  (electric cyan/teal — reads "EV + autonomy"), high-contrast white type.
- **Type:** precise grotesk for headlines (e.g. Space Grotesk / Neue Montreal feel),
  **monospace for data/specs** (telemetry cue). Big confident headlines, short lines.
- **Futuristic cues — used sparingly, a few signature moments only:** thin HUD lines,
  telemetry-style data readouts, a subtle hero "scan" animation, fine grid overlays.
  Restraint keeps it clean and readable; overuse makes it cold and confusing.
- **Motion:** quiet and precise. Video does the talking; UI gets out of the way.
### Chosen visual direction: **C — "Signal"**

Clean, restrained base + a *few* signature tech cues used sparingly. Warmth comes from the
footage; precision comes from the chrome. Concrete system:

- **Base:** near-black `#0A0C10` (cool charcoal), surfaces a step lighter for depth.
- **Accent:** single electric cyan/teal (~`#3DE0D0`), used only for CTAs, active states,
  and the hero scan line. Never as large fills.
- **Type:** Space Grotesk (or similar precise grotesk) for headlines; system/Inter for
  body; **monospace (e.g. JetBrains Mono) for all data readouts** — the telemetry cue.
- **Signature cues (the whole budget — don't add more):**
  1. Hero: one thin animated **scan line** sweeping the footage on load.
  2. A small **monospace data readout** under the hero (`55 mi · AWD · IP67`).
  3. Section labels as tiny mono kickers (`02 / CAPABILITIES`).
  4. Fine 1px hairline rules / sparse grid hints, low opacity.
- **Everywhere else:** restraint. Big type, deep negative space, sharp 2–4px corners,
  precise easing. Readability first.

---

## 4. Site map

| Page | Job | Audience |
|------|-----|----------|
| **Home** | Make them feel it → "I want to try this" → apply to pilot | Everyone |
| **Specs & Tech** | Prove it. Demoted spec table + deep tech + honest comparison | The convinced skeptic |
| **Pilot** | Capture the raised hand. Simple application | Early adopters |
| **Team** | "Small. Credible. Real." Build trust | Due-diligence riders/operators |
| **Contact** | Direct founder contact, no complicated forms | Serious leads |

Minimal nav: **EV²** · Experience · Capabilities · Specs · Pilot · **[Apply]** (button)

---

## 5. Homepage blueprint (section by section)

### 0 — Nav
Transparent over hero, sticky on scroll. Logo + minimal links + accent "Apply to Pilot" button.

### 1 — Hero (full-bleed video)
- **Background:** muted looping clip — ATV moving → family riding → phone remote → return-to-base.
- **Headline (the One Line):** `Electric. Remote. Autonomous-Ready.`
- **Sub:** "An all-terrain EV you can ride, run from your phone, or send home on its own."
- **Primary CTA:** Apply to the Pilot → **Secondary:** Watch it move (play/scroll)
- *Placeholder until footage lands:* strong still + play affordance, same layout.

### 2 — Experience EV² (four micro-moments)
A short scroll sequence of captioned clips. Copy:
> This is EV².
> The ATV moves. The family rides.
> You take the controls — or hand them over.
> It finds its own way back.
> Mostly, it's just fun.

### 3 — Three Capabilities
Each = one clip + name + one sentence.
- **Ride** — "Step on and go. Instant electric torque, quiet enough to hear the trail."
- **Remote Operate** — "Drive it from your phone. Load it, park it, move it — without being on it."
- **Return to Base** — "Send it home. EV² finds its own way back." *(badge: Autonomous-ready · in pilot)*

### 4 — Pilot Program (the Tesla-reservation moment)
- **Headline:** "We're onboarding our first pilot customers."
- **Sub:** "A small group of riders, resorts, and operators shaping EV² before everyone else."
- **CTA:** Apply to the Pilot →

### 5 — Proof strip (demoted, one line)
Quiet row: `Quad-motor AWD · ~55 mi range · 2,500 lb towing · IP67` + "See full specs →".
Keeps credibility present without burying the feeling.

### 6 — Team teaser
"Small. Credible. Real." + one line + link to Team.

### 7 — Contact / Founder
"Talk to the founder directly. No complicated forms." + email + phone.

### Footer
EV² wordmark · San Diego + Chennai offices · email · © 2026.

---

## 6. Other pages

### Specs & Tech (the demoted proof)
Reuse the current site's real content, made skimmable:
- Full spec table (drive, power, performance, battery, capacity, terrain).
- Deep-tech capabilities (sensors, autonomy, connectivity, safety/UI) — condensed.
- **Comparison: reframe, don't lead with horsepower.** The current grid shows EV² behind
  Polaris on most raw metrics and reads defensively. Lead instead on EV²'s real edge —
  **remote operation, autonomous-ready, step-on design, revenue-ready model** — and keep
  the honest numbers below.

### Pilot
Short intro + minimal form: name, email, phone, "who are you?" (rider / resort / operator),
one free-text line. Honest confirmation message. This replaces the long 9-field contact form.

### Team
Founder + core team. Photos, one-line credibility each. Real, not corporate.

### Contact
Founder direct contact, both offices. No marketing form.

---

## 7. Things to resolve with the owner before publishing

1. **Brand name** — confirm "EV²" as the public wordmark.
2. **Spec inconsistencies in current site** — reconcile real numbers:
   - Range: "50+ mi" vs "~55 mi (4 packs)"
   - Towing: "2,500 lbs" vs "1,000–2,500 lbs"
   - Torque: "210 Nm/wheel" (specs) vs "600 lb-ft" (comparison)
   - Battery: "15 kWh fixed" vs "approx. with 4 packs" (fixed or swappable?)
3. **Autonomy honesty** — "Return to Base / Follow-Me / A-to-B" are listed as live in places
   and "Coming Soon" in others. We should label clearly what's shipping vs in pilot.
4. **Video shot list** — what's being captured so hero + 3 capabilities have real footage.
5. **Pilot logistics** — what does applying actually get someone? (deposit? free trial?)

---

## 8. Build sequence (after plan sign-off)

1. Scaffold Next.js + Tailwind, deploy empty site to Vercel (get the pipeline working).
2. Build homepage with placeholder media + final copy.
3. Build Specs & Tech (port + reframe existing content).
4. Build Pilot, Team, Contact.
5. Swap placeholders for real footage as it arrives.
6. Polish, responsive pass, ship.
