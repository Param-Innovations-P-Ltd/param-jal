import PageHero from '../components/PageHero';

const stages = [
  {
    n: '01',
    title: 'Coagulation & Flocculation',
    desc: 'Polyaluminium chloride (PAC) and anionic polyacrylamide (PAM) cause suspended solids and heavy-metal particles to clump together into dense flocs that settle out of the water column.',
    role: 'Removes ≥95% suspended solids before downstream stages',
    indigenous: true,
  },
  {
    n: '02',
    title: 'pH Neutralisation',
    desc: 'Controlled lime dosing raises the raw feed from pH 2–4 to a neutral pH of 7. The water is no longer acidic and can safely pass through subsequent stages.',
    role: 'Neutralises acidity; initiates precipitation chemistry',
    indigenous: true,
  },
  {
    n: '03',
    title: 'Heavy Metal Precipitation',
    desc: 'Iron, manganese, arsenic and lead are chemically precipitated out of solution as insoluble hydroxides and removed with the settled sludge.',
    role: 'Removes regulated heavy metals to below BIS limits',
    indigenous: true,
  },
  {
    n: '04',
    title: 'Disinfection by Chlorination',
    desc: 'Sodium hypochlorite inactivates pathogens and breaks down residual organics. Applied before filtration so the sand-carbon bed polishes out the chlorine.',
    role: 'Kills bacteria and viruses; oxidises organics',
    indigenous: true,
  },
  {
    n: '05',
    title: 'Sand & Carbon Filtration',
    desc: 'A dual-media filter bed removes residual turbidity, free chlorine, colour and odour. Output is visually clear and organoleptically clean.',
    role: 'Turbidity below 1 NTU; removes residual chlorine',
    indigenous: true,
  },
  {
    n: '06',
    title: 'RO + UV Final Polishing',
    desc: 'Reverse osmosis removes dissolved salts; UV disinfection ensures zero E. coli. Output meets BIS IS 10500:2012 for potable water across all 30 parameters.',
    role: 'Final polishing — meets BIS drinking-water standard',
    indigenous: false,
  },
];

export default function Technology() {
  return (
    <>
      <PageHero
        eyebrow="Technology"
        title="A six-stage modular treatment process."
        subtitle="Each stage has a specific role. Their sequence is the invention. Five of the six stages use materials we can source within 100 km of Dhanbad — only the final RO membrane is imported, and our pre-treatment extends its life by 2–3×."
      />

      {/* Flow diagram strip */}
      <section className="border-b border-jal-100 bg-white">
        <div className="container-x py-10">
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
            {stages.map((s, i) => (
              <div key={s.n} className="flex items-center gap-2 md:gap-3">
                <div className="flex flex-col items-center rounded-xl border border-jal-200 bg-jal-50 px-3 py-2 md:px-4">
                  <span className="font-mono text-xs text-jal-600">Stage {s.n}</span>
                  <span className="text-xs font-semibold text-jal-900 md:text-sm">{s.title}</span>
                </div>
                {i < stages.length - 1 && (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#02619f" strokeWidth="2" aria-hidden><path d="M5 12h14M13 6l6 6-6 6"/></svg>
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
            <article key={s.n} className="relative rounded-2xl border border-jal-100 bg-white p-7 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="font-mono text-3xl font-bold text-jal-200">{s.n}</div>
                {s.indigenous ? (
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-emerald-700">Indigenous</span>
                ) : (
                  <span className="rounded-full bg-amber-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-amber-700">Imported membrane</span>
                )}
              </div>
              <h3 className="mt-2 text-xl font-semibold text-jal-950">{s.title}</h3>
              <p className="mt-3 text-jal-700">{s.desc}</p>
              <div className="mt-5 rounded-lg bg-jal-50 px-4 py-3 text-sm font-medium text-jal-800">
                {s.role}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Why this order */}
      <section className="border-t border-jal-100 bg-jal-50/60">
        <div className="container-x py-20">
          <div className="mx-auto max-w-3xl">
            <span className="eyebrow">The Sequence is the Invention</span>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Why these stages, in this order?</h2>
            <ul className="mt-6 space-y-4 text-lg text-jal-800">
              <li className="flex gap-3"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-jal-600" /> <span><strong>Coagulation first</strong> — without removing suspended solids, every downstream stage fouls within days.</span></li>
              <li className="flex gap-3"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-jal-600" /> <span><strong>Chlorination before sand-carbon</strong> — the sand-carbon bed then polishes out the residual chlorine, leaving clean, disinfected water.</span></li>
              <li className="flex gap-3"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-jal-600" /> <span><strong>RO last</strong> — membranes only work well on already-clean feed. This is what extends membrane life from 2–3 years to 5–7 years.</span></li>
            </ul>
            <p className="mt-6 text-jal-700">
              The patent protects the <em>integrated sequence</em>, not any single stage — which makes the process membrane-chemistry agnostic. The day CSIR-CSMCRI&apos;s indigenous TFC membrane scales, Param Jal is a ready customer.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
