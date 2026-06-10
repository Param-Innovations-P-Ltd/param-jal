import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';

const stages = [
  {
    n: '01',
    title: 'Aeration',
    desc: 'Raw mine water is exposed to air in a cascade aerator. Dissolved ferrous iron (Fe²⁺) is oxidised to ferric iron (Fe³⁺), which precipitates as ferric hydroxide — a solid that can be filtered out. pH begins to rise. Dissolved gases are also volatilised at this stage.',
    role: 'Oxidises Fe²⁺ → Fe³⁺; raises pH; removes dissolved gases',
    chemistry: 'Atmospheric oxygen — cascade aerator',
    indigenous: true,
  },
  {
    n: '02',
    title: 'Coagulation',
    desc: 'Alum (aluminium sulphate) is dosed at controlled pH. Aluminium ions neutralise the negative surface charge on suspended particles and colloids, causing them to clump together. Without this step, fine particles remain suspended and pass through later filters.',
    role: 'Destabilises suspended particles; prepares floc formation',
    chemistry: 'Alum (Al₂(SO₄)₃) — controlled pH dosing',
    indigenous: true,
  },
  {
    n: '03',
    title: 'Flocculation',
    desc: 'Slow mechanical mixing (50–300 RPM) allows the destabilised particles to collide and grow into larger, visible flocs. These flocs carry adsorbed heavy metal ions — lead, arsenic, zinc, copper — with them as they settle.',
    role: 'Grows micro-aggregates into settleable flocs carrying heavy metals',
    chemistry: 'Slow mix: 50–300 RPM · floc carries Pb, As, Zn, Cu',
    indigenous: true,
  },
  {
    n: '04',
    title: 'Sequential Filtration',
    desc: 'Patented pre-treatment: water passes through activated carbon, multi-media, and ion exchange resin beds in sequence. Activated carbon removes organics and residual chlorine. Multi-media removes particulates. Resin captures metal-organic complexes. This stage protects the RO membrane from fouling — extending its life 2–3×. Subject of Patent Application 202531084570.',
    role: 'Patented core — removes organics, particulates, metal-organic complexes',
    chemistry: 'Activated carbon → multi-media → ion exchange resin',
    indigenous: true,
  },
  {
    n: '05',
    title: 'Reverse Osmosis',
    desc: 'Treated water is forced under pressure through a semi-permeable RO membrane with pore size 0.0001 microns. Heavy metal ions are physically larger than this pore size and cannot pass — size exclusion is unconditional and input-independent. Ward-7 test: TDS reduced from 653 mg/L to 47 mg/L.',
    role: 'Physical size exclusion — 95–99% ion rejection',
    chemistry: 'Pore size 0.0001 µm · ion rejection 95–99%',
    indigenous: false,
  },
  {
    n: '06',
    title: 'UV Disinfection',
    desc: 'UV light at 254 nm wavelength disrupts the DNA of any remaining microorganisms, preventing reproduction. This stage addresses bacteriological safety. Ward-7 test result: Total Coliforms — Absent. E. Coli — Absent.',
    role: 'Biological safety — pathogen inactivation',
    chemistry: 'UV 254 nm · 40 mJ/cm² dose',
    indigenous: false,
  },
  {
    n: '07',
    title: 'Sludge Management',
    desc: 'Approximately 0.2–0.3 kg dry weight of sludge per kilolitre treated. Sludge is collected, dewatered, and managed per CPCB solid waste guidelines. Reject water (∼20–30% of inlet volume) is collected — not discharged — and evaluated for coal mine haul road dust suppression and municipal street sprinkling.',
    role: 'Contained, compliant waste handling — zero discharge',
    chemistry: 'Sludge: 0.2–0.3 kg/kL · reject water collected, not discharged',
    indigenous: true,
  },
];

const materials = [
  { label: 'PAC (Poly-Aluminium Chloride)',   source: 'Sourced within 100 km of Dhanbad',   role: 'Primary coagulant' },
  { label: 'Anionic PAM',                     source: 'Indian manufacturers, multiple',     role: 'Flocculation aid' },
  { label: 'Hydrated Lime (Ca(OH)₂)',         source: 'Local suppliers, Jharkhand',         role: 'pH neutralisation' },
  { label: 'Sodium Hypochlorite',             source: 'Indian industrial grade',            role: 'Disinfection' },
  { label: 'Filter Sand + Activated Carbon',  source: 'Indian media suppliers',             role: 'Polishing filtration' },
  { label: 'SS-304 vessels, MS skids',        source: 'Fabricated locally',                 role: 'Pressure vessels, frames' },
  { label: 'RO membrane (TFC)',               source: 'DuPont / Toray / LG (imported)',     role: 'Dissolved salt removal' },
  { label: 'UV lamp + quartz sleeve',         source: 'Partially imported',                 role: 'Final disinfection' },
];

const comparison = [
  { feature: 'Handles acidic feed (pH 2–4)', us: 'Yes', conv: 'No — requires large pre-neutralisation' },
  { feature: 'Deployment time',              us: '15–20 days (skid)', conv: '6–18 months (civil + commissioning)' },
  { feature: 'Capital cost per 1,000 LPD',   us: '₹8–12 L', conv: '₹25–40 L' },
  { feature: 'Operator skill required',      us: 'One technician, 1–2 hr/day', conv: 'Full-time operator + chemist' },
  { feature: 'Last-mile ATM dispensing',     us: 'Native', conv: 'Requires separate infrastructure' },
  { feature: 'Modular, relocatable',         us: 'Yes', conv: 'No — fixed civil structure' },
];

export default function Technology() {
  return (
    <>
      <SEO
        title="Technology"
        description="The seven-stage modular water treatment process behind PARAM JAL — aeration, coagulation, flocculation, patented sequential filtration, RO, UV disinfection, sludge management. Five of seven stages 100% indigenous."
        path="/technology"
      />
      <PageHero
        eyebrow="Technology"
        title="Seven stages. Each with a precise engineering role."
        subtitle="Each stage has a specific role. Their sequence is the invention. The patented synergy between stages 2–4 (coagulation, flocculation, sequential filtration) is what distinguishes PARAM JAL from a standard RO plant — and extends RO membrane life 2–3×."
        sanskrit="जलं जीवनम् अमृतम् च · Water is life, and nectar."
      />

      {/* Flow strip */}
      <section className="border-b border-brand-sky/10 bg-white">
        <div className="container-x py-10">
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
            {stages.map((s, i) => (
              <div key={s.n} className="flex items-center gap-2 md:gap-3">
                <div className="flex flex-col items-center rounded-xl border border-brand-sky/15 bg-gradient-to-b from-jal-50 to-white px-3 py-2 md:px-4">
                  <span className="font-mono text-[10px] font-semibold text-brand-gold">Stage {s.n}</span>
                  <span className="text-xs font-semibold text-brand-sky md:text-sm">{s.title}</span>
                </div>
                {i < stages.length - 1 && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F5B800" strokeWidth="2" aria-hidden><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stage detail cards */}
      <section className="container-x py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {stages.map((s) => (
            <article key={s.n} className="relative overflow-hidden rounded-2xl border border-brand-sky/10 bg-white p-7 shadow-soft transition hover:shadow-[0_24px_48px_-20px_rgba(10,37,64,0.18)]">
              <div className="absolute -right-6 -top-6 font-display text-[6rem] font-semibold text-brand-gold/10">{s.n}</div>
              <div className="relative flex items-center justify-between">
                <div className="font-mono text-sm font-semibold text-brand-gold">Stage {s.n}</div>
                {s.indigenous ? (
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-emerald-700">Indigenous</span>
                ) : (
                  <span className="rounded-full bg-amber-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-amber-700">Imported membrane</span>
                )}
              </div>
              <h3 className="relative mt-3 font-display text-2xl font-semibold text-brand-sky">{s.title}</h3>
              <p className="relative mt-3 text-brand-sky/80">{s.desc}</p>
              <div className="relative mt-5 space-y-2">
                <div className="rounded-lg bg-brand-sky/5 px-4 py-3 text-sm font-medium text-brand-sky">
                  {s.role}
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-brand-sky/60">
                  <span className="uppercase tracking-wider">Chemistry</span>
                  <span className="text-brand-sky/80">{s.chemistry}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Why this order */}
      <section className="border-y border-brand-sky/10 bg-jal-50/50">
        <div className="container-x py-20">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <span className="eyebrow">The Sequence is the Invention</span>
              <h2 className="headline-deco mt-4 font-display text-4xl font-semibold text-brand-sky md:text-5xl">
                Why these stages, in this order?
              </h2>
              <p className="mt-5 text-lg text-brand-sky/75">
                A water treatment plant is only as smart as the order of its steps.
                Param Jal&apos;s sequencing was developed to solve three specific failure
                modes we saw in every other attempt to treat acidic mine water.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { k: 'Coagulation first',         v: 'Without removing suspended solids, every downstream stage fouls within days. We front-load flocculation so the rest of the chain stays clean.' },
                { k: 'Chlorination before filtration', v: 'Applying NaOCl before the sand-carbon bed lets the media polish out residual chlorine, delivering disinfected water without a chlorine taste.' },
                { k: 'RO membrane at the end',    v: 'Membranes only perform well on already-clean feed. Putting RO last is what extends membrane life from 2–3 years to 5–7 years.' },
              ].map((r) => (
                <div key={r.k} className="rounded-2xl border border-brand-sky/10 bg-white p-5">
                  <div className="font-display text-xl font-semibold text-brand-sky">{r.k}</div>
                  <p className="mt-2 text-brand-sky/75">{r.v}</p>
                </div>
              ))}
              <p className="pt-4 text-brand-sky/70">
                The patent protects the <strong>integrated sequence</strong>, not any single
                stage — which makes the process membrane-chemistry agnostic. The day
                CSIR-CSMCRI&apos;s indigenous TFC membrane scales, Param Jal is a ready customer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Materials of Construction */}
      <section className="bg-white">
        <div className="container-x py-20">
          <span className="eyebrow">Materials of Construction</span>
          <h2 className="headline-deco mt-4 font-display text-4xl font-semibold text-brand-sky md:text-5xl">
            Indigenous by design.
          </h2>
          <p className="mt-5 max-w-3xl text-lg text-brand-sky/70">
            Out of every line item in the bill of materials, only two are imported — and
            both are the part of the system that our pre-treatment chain is designed to
            stretch further.
          </p>
          <div className="mt-10 overflow-hidden rounded-2xl border border-brand-sky/10 bg-white shadow-soft">
            <table className="w-full text-left text-sm">
              <thead className="bg-brand-sky text-white">
                <tr>
                  <th className="px-5 py-4 font-semibold">Material</th>
                  <th className="px-5 py-4 font-semibold">Source</th>
                  <th className="px-5 py-4 font-semibold">Role</th>
                </tr>
              </thead>
              <tbody>
                {materials.map((m, i) => (
                  <tr key={m.label} className={i % 2 ? 'bg-jal-50/40' : ''}>
                    <td className="px-5 py-3.5 font-medium text-brand-sky">{m.label}</td>
                    <td className="px-5 py-3.5 text-brand-sky/80">{m.source}</td>
                    <td className="px-5 py-3.5 text-brand-sky/80">{m.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Comparison vs conventional */}
      <section className="border-y border-brand-sky/10 bg-brand-sky text-white">
        <div className="container-x py-20">
          <span className="eyebrow-dark">Versus Conventional WTPs</span>
          <h2 className="mt-4 font-display text-4xl font-semibold text-white md:text-5xl">
            A different class of machine.
          </h2>
          <p className="mt-5 max-w-3xl text-lg text-jal-100">
            Conventional water treatment plants were engineered for a different problem.
            Param Jal is purpose-built for decentralised, acid-feed, last-mile delivery —
            and it shows up in every dimension of the system.
          </p>
          <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/10">
                <tr>
                  <th className="px-5 py-4 font-semibold">Dimension</th>
                  <th className="px-5 py-4 font-semibold text-brand-gold">Param Jal</th>
                  <th className="px-5 py-4 font-semibold">Conventional WTP / ETP</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((c, i) => (
                  <tr key={c.feature} className={i % 2 ? 'bg-white/5' : ''}>
                    <td className="px-5 py-3.5 font-medium">{c.feature}</td>
                    <td className="px-5 py-3.5 text-brand-gold">{c.us}</td>
                    <td className="px-5 py-3.5 text-jal-100">{c.conv}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x py-20">
        <div className="grid gap-6 md:grid-cols-3">
          <Link to="/impact" className="card group">
            <div className="text-xs uppercase tracking-[0.18em] text-brand-gold">Field Evidence</div>
            <h3 className="mt-3 font-display text-2xl text-brand-sky">See the lab report →</h3>
            <p className="mt-2 text-sm text-brand-sky/70">Before and after readings on actual mine water — Government of Jharkhand DWSD lab, 09 Jun 2026.</p>
          </Link>
          <Link to="/assured" className="card group">
            <div className="text-xs uppercase tracking-[0.18em] text-brand-gold">Evaluation</div>
            <h3 className="mt-3 font-display text-2xl text-brand-sky">ASSURED scorecard →</h3>
            <p className="mt-2 text-sm text-brand-sky/70">How Param Jal performs across Affordability, Scalability, Sustainability and more.</p>
          </Link>
          <Link to="/atmanirbhar" className="card group">
            <div className="text-xs uppercase tracking-[0.18em] text-brand-gold">Strategy</div>
            <h3 className="mt-3 font-display text-2xl text-brand-sky">The Atmanirbhar case →</h3>
            <p className="mt-2 text-sm text-brand-sky/70">Why this technology cuts India&apos;s RO-membrane import exposure by ~60% per unit.</p>
          </Link>
        </div>
      </section>
    </>
  );
}
