import PageHero from '../components/PageHero';
import SEO from '../components/SEO';

const levers = [
  { title: 'Indigenous pre-treatment chain', body: 'Five of six stages are one-hundred-percent Indian. No foreign IP, no import exposure. Chemicals and media sourceable within 100 km of Dhanbad.' },
  { title: 'Membrane life extended 2–3×',    body: 'Clean feed water to the RO stage reduces fouling. Typical membrane replacement cycle moves from 2–3 years to 5–7 years. Per unit deployed, imports drop roughly 60%.' },
  { title: 'Membrane-chemistry agnostic',    body: 'Our process patent covers the integrated sequence, not a specific membrane brand. The day CSIR-CSMCRI\u2019s indigenous TFC membrane scales commercially, Param Jal is a ready customer.' },
  { title: 'Fills the PLI white space',      body: 'Water treatment membranes are absent from the fourteen current PLI sectors. Param Jal creates the deployment pipeline that justifies a future PLI for indigenous membrane manufacturing.' },
];

const timeline = [
  { d: '2020',      t: 'Indian RO market ~₹8,400 Cr',        s: 'Import dependence already 80%+. Volume growth outpaces local production.' },
  { d: '2023',      t: 'Trade deficit widens sharply',       s: 'Chinese industrial inputs cross 70% of top-8 category imports.' },
  { d: 'Sep 2025',  t: 'Param Jal provisional patent filed', s: 'Priority date for the integrated six-stage process secured.' },
  { d: 'Early 2026',t: 'Ward-7 Dhanbad pilot live',          s: 'First operational proof of the pre-treatment thesis on acid-feed water.' },
  { d: 'Mar 2026',  t: 'Press Note 2 reopens China FDI',     s: 'Government formally concedes scale depends on foreign industrial inputs today.' },
  { d: 'FY26',      t: 'India\u2013China trade deficit crosses USD 112 B', s: 'Record high. A concrete supply-chain response is a national-security imperative.' },
];

export default function Atmanirbhar() {
  return (
    <>
      <SEO
        title="The Atmanirbhar Case"
        description="Same imported membrane, three times the water. How Param Jal's indigenous six-stage pre-treatment cuts India's RO-membrane import exposure by ~60% per deployed unit."
        path="/atmanirbhar"
      />
      <PageHero
        eyebrow="The Strategic Case"
        title="Tied in chains from both sides."
        subtitle="Param Jal is not just a water technology. It is a concrete, deployable Atmanirbhar solution — same imported membrane, three times the water, triple the national return."
        sanskrit="स्वावलम्बनम् राष्ट्रस्य बलम् · Self-reliance is the strength of a nation."
      />

      {/* The bind */}
      <section className="container-x py-20">
        <span className="eyebrow">The Structural Bind</span>
        <h2 className="headline-deco mt-4 font-display text-4xl font-semibold text-brand-sky md:text-5xl">
          Where India&apos;s water-purifier supply chain hurts.
        </h2>
        <p className="mt-5 max-w-3xl text-lg text-brand-sky/70">
          The United States holds the intellectual property. China holds the volume.
          Between them, India&apos;s water sector is tied in chains from both sides.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <RedCard
            headline="USD 112.16 B"
            label="Trade deficit with China · FY26"
            body="Record high. China is India's top supplier in all eight major industrial input categories."
          />
          <RedCard
            headline="85 – 95%"
            label="RO membrane import dependence"
            body="The active polyamide layer is imported from DuPont (US), Toray (Japan), LG (Korea), and increasingly Chinese producers."
          />
          <RedCard
            headline="Press Note 2"
            label="Of March 2026"
            body="India has officially reopened FDI from China in priority manufacturing — a formal acknowledgement that scale requires foreign inputs today."
          />
        </div>
      </section>

      {/* The pivot */}
      <section className="relative overflow-hidden bg-brand-sky text-white">
        <div className="absolute -right-40 -top-40 size-[40rem] rounded-full bg-brand-gold/10 blur-3xl" aria-hidden />
        <div className="container-x relative py-20">
          <span className="eyebrow-dark">The Atmanirbhar Pivot</span>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-white md:text-5xl">
            We will not replace DuPont overnight.<br />
            <span className="italic text-brand-gold">That is not what Atmanirbharta requires.</span>
          </h2>
          <p className="mt-6 max-w-3xl text-lg text-jal-100">
            What we <em>can</em> do is stretch each imported membrane two to three times
            further — through an indigenous pre-treatment chain that is one hundred
            percent Indian-sourceable.
          </p>
          <p className="mt-3 max-w-3xl text-lg text-jal-100">That is what Param Jal does.</p>
        </div>
      </section>

      {/* Four levers */}
      <section className="container-x py-20">
        <span className="eyebrow">The Four Levers</span>
        <h2 className="headline-deco mt-4 font-display text-4xl font-semibold text-brand-sky md:text-5xl">
          How Param Jal moves the number.
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {levers.map((l, i) => (
            <article key={l.title} className="rounded-2xl border border-brand-sky/10 bg-white p-7 shadow-soft">
              <div className="flex items-start justify-between">
                <div className="font-mono text-sm font-semibold text-brand-gold">0{i + 1}</div>
                <div className="size-8 rounded-full bg-brand-gold/10" />
              </div>
              <h3 className="mt-4 font-display text-2xl font-semibold text-brand-sky">{l.title}</h3>
              <p className="mt-3 text-brand-sky/75">{l.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="border-y border-brand-sky/10 bg-jal-50/40">
        <div className="container-x py-20">
          <span className="eyebrow">The Timeline</span>
          <h2 className="headline-deco mt-4 font-display text-4xl font-semibold text-brand-sky md:text-5xl">
            How we got here — and why the moment is now.
          </h2>
          <ol className="mt-12 relative border-l-2 border-brand-gold/40 pl-8">
            {timeline.map((m) => (
              <li key={m.d} className="mb-10 last:mb-0">
                <span className="absolute -left-[9px] mt-1.5 size-4 rounded-full border-2 border-brand-gold bg-white" />
                <div className="font-mono text-xs font-semibold uppercase tracking-wider text-brand-gold">{m.d}</div>
                <h3 className="mt-1 font-display text-xl font-semibold text-brand-sky">{m.t}</h3>
                <p className="mt-1 text-brand-sky/75">{m.s}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* The line */}
      <section className="container-x py-20">
        <blockquote className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-sky to-brand-skysoft px-8 py-16 text-center md:px-16 md:py-24">
          <div className="absolute -right-20 -top-20 size-72 rounded-full bg-brand-gold/20 blur-3xl" aria-hidden />
          <div className="relative">
            <div className="mx-auto mb-6 size-12 rounded-full bg-brand-gold text-brand-sky flex items-center justify-center font-display text-2xl">“</div>
            <p className="font-display text-3xl font-semibold leading-snug italic text-white md:text-4xl">
              Param Jal is the essential supplement that makes RO work better —
              and makes India less dependent while doing it.<br />
              <span className="text-brand-gold">Same imported membrane — three times the water.</span><br />
              <span className="text-brand-gold">Same rupees — triple the national return.</span>
            </p>
            <div className="mt-8 text-sm uppercase tracking-[0.18em] text-white/60">— The Param Jal thesis</div>
          </div>
        </blockquote>
      </section>
    </>
  );
}

function RedCard({ headline, label, body }: { headline: string; label: string; body: string }) {
  return (
    <article className="rounded-2xl border-2 border-red-200 bg-red-50/60 p-6">
      <div className="font-display text-3xl font-semibold text-red-700">{headline}</div>
      <div className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-red-600">{label}</div>
      <p className="mt-3 text-sm text-red-900/80">{body}</p>
    </article>
  );
}
