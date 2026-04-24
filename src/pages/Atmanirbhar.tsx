import PageHero from '../components/PageHero';

export default function Atmanirbhar() {
  return (
    <>
      <PageHero
        eyebrow="The Strategic Case"
        title="Tied in chains from both sides."
        subtitle="Param Jal is not just a water technology. It is a concrete, deployable Atmanirbhar solution — same imported membrane, three times the water, triple the national return."
      />

      {/* The bind */}
      <section className="container-x py-20">
        <span className="eyebrow">The Structural Bind</span>
        <h2 className="mt-3 text-3xl font-bold md:text-4xl">Where India&apos;s water-purifier supply chain hurts.</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <RedCard
            headline="USD 112.16 B"
            label="Trade deficit with China, FY26"
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
        <p className="mt-8 max-w-3xl text-lg text-jal-700">
          The United States holds the intellectual property. China holds the volume. Between them, India&apos;s water sector is tied in chains from both sides.
        </p>
      </section>

      {/* The pivot */}
      <section className="bg-gradient-to-br from-jal-900 to-jal-950 text-white">
        <div className="container-x py-20">
          <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-jal-100">The Atmanirbhar Pivot</span>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            We will not replace DuPont overnight. That is not what Atmanirbharta requires.
          </h2>
          <p className="mt-5 max-w-3xl text-lg text-jal-100">
            What we <em>can</em> do is stretch each imported membrane two to three times further — through an indigenous pre-treatment chain that is one hundred percent Indian-sourceable.
          </p>
          <p className="mt-3 max-w-3xl text-lg text-jal-100">That is what Param Jal does.</p>
        </div>
      </section>

      {/* Four levers */}
      <section className="container-x py-20">
        <div className="grid gap-5 md:grid-cols-2">
          {levers.map((l, i) => (
            <article key={l.title} className="rounded-2xl border border-jal-100 bg-white p-7 shadow-sm">
              <div className="font-mono text-sm font-semibold text-jal-500">0{i + 1}</div>
              <h3 className="mt-2 text-xl font-semibold text-jal-950">{l.title}</h3>
              <p className="mt-3 text-jal-700">{l.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Land the line */}
      <section className="container-x pb-20">
        <blockquote className="overflow-hidden rounded-3xl bg-jal-950 px-8 py-14 text-center md:px-16 md:py-20">
          <p className="font-display text-2xl font-semibold leading-relaxed text-white md:text-3xl">
            &ldquo;Param Jal is the essential supplement that makes RO work better — and makes India less dependent while doing it. Same imported membrane — three times the water. Same rupees — triple the national return.&rdquo;
          </p>
          <div className="mt-6 text-sm uppercase tracking-widest text-jal-300">— The Param Jal thesis</div>
        </blockquote>
      </section>
    </>
  );
}

const levers = [
  {
    title: 'Indigenous pre-treatment chain',
    body: 'Five of six stages are 100% Indian. No foreign IP, no import exposure. Chemicals and media sourceable within 100 km of Dhanbad.',
  },
  {
    title: 'Membrane life extended 2–3×',
    body: 'Clean feed water to the RO stage reduces fouling. Typical membrane replacement cycle moves from 2–3 years to 5–7 years. Per unit deployed, imports drop roughly 60%.',
  },
  {
    title: 'Membrane-chemistry agnostic',
    body: 'Our process patent covers the integrated sequence, not a specific membrane brand. The day CSIR-CSMCRI\u2019s indigenous TFC membrane scales commercially, Param Jal is a ready customer.',
  },
  {
    title: 'Fills the PLI white space',
    body: 'Water treatment membranes are absent from the 14 current PLI sectors. Param Jal creates the deployment pipeline that justifies a future PLI for indigenous membrane manufacturing.',
  },
];

function RedCard({ headline, label, body }: { headline: string; label: string; body: string }) {
  return (
    <article className="rounded-2xl border-2 border-red-200 bg-red-50/50 p-6">
      <div className="font-display text-3xl font-bold text-red-700">{headline}</div>
      <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-red-600">{label}</div>
      <p className="mt-3 text-sm text-red-900/80">{body}</p>
    </article>
  );
}
