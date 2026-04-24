import PageHero from '../components/PageHero';

const indicators = [
  { letter: 'A', label: 'Affordability', line: '₹0.50 per litre to the end consumer. Capital cost 60–70% below conventional Water Treatment Plants at equivalent capacity.' },
  { letter: 'S', label: 'Scalability', line: 'Modular skid systems from 50,000 LPD to 5,00,000 LPD. Over 600 active coal-mine sites form the immediate addressable market.' },
  { letter: 'S', label: 'Sustainability', line: 'Gravity-assisted flow reduces energy demand. Sludge co-processed with mine overburden under existing environmental clearance. Solar-ready power architecture.' },
  { letter: 'U', label: 'Universality', line: 'Validated on acid mine drainage, high-TDS groundwater and surface water. Process parameters adapt across input chemistries.' },
  { letter: 'R', label: 'Rapidity', line: 'Skid systems are deployable within 15–20 days of order. An ATM kiosk is operational within one week of commissioning at the host site.' },
  { letter: 'E', label: 'Excellence', line: 'NABL-accredited lab validation on actual feed: pH 2.8 → 7.2, Iron 48.2 → 0.28 mg/L, Turbidity < 1 NTU, Coliform Nil. All 30 BIS parameters passed.' },
  { letter: 'D', label: 'Distinctiveness', line: 'To our knowledge, the only field-deployed technology in India converting coal-mine acid drainage to BIS-standard potable water at decentralised ATM scale.' },
];

export default function Assured() {
  return (
    <>
      <PageHero
        eyebrow="Evaluation Framework"
        title="The ASSURED case for Param Jal."
        subtitle="SPM NIWAS evaluates water technologies against seven indicators. Here is where Param Jal lands on each."
      />

      <section className="container-x py-16">
        <div className="grid gap-4">
          {indicators.map((i) => (
            <article key={i.label} className="flex flex-col gap-4 rounded-2xl border border-jal-100 bg-white p-6 shadow-sm md:flex-row md:items-center">
              <div className="flex size-16 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-jal-600 to-jal-900 font-display text-3xl font-bold text-white">
                {i.letter}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-jal-950">{i.label}</h3>
                <p className="mt-1.5 text-jal-700">{i.line}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Compliance block */}
      <section className="border-t border-jal-100 bg-jal-50/60">
        <div className="container-x py-20">
          <div className="mx-auto max-w-4xl">
            <span className="eyebrow">Assured Metrics — Compliance Status</span>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Every item submitted or confirmed.</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {[
                { k: 'NABL Lab Test Report', v: 'Passed IS 10500:2012 on all 30 parameters. Independent NABL-accredited laboratory.' },
                { k: 'Provisional Patent', v: '202531084570 — filed September 2025. Complete specification due September 2026.' },
                { k: 'SISFS Grant', v: '₹9 Lakh from ACIC IIT(ISM) Dhanbad under Startup India Seed Fund Scheme.' },
                { k: 'DPIIT Recognition', v: 'Param Innovations Pvt. Ltd. is DPIIT-recognised.' },
                { k: 'MSME Registration', v: 'UDYAM-JH-04-0066916' },
                { k: 'Field Deployment', v: 'Ward-7 Dhanbad Water ATM operational. DMC Technical Sanction received.' },
              ].map((row) => (
                <div key={row.k} className="rounded-xl border border-jal-100 bg-white p-5">
                  <div className="text-sm font-semibold text-jal-900">{row.k}</div>
                  <div className="mt-1.5 text-sm text-jal-700">{row.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Unit economics */}
      <section className="container-x py-20">
        <span className="eyebrow">Unit Economics</span>
        <h2 className="mt-3 text-3xl font-bold md:text-4xl">The numbers behind ₹0.50 per litre.</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {[
            { k: '₹8 – 12 L', v: 'Capex per 1,000 LPD' },
            { k: '~₹1.20', v: 'Opex per 1,000 L treated' },
            { k: '₹0.50', v: 'Price to end consumer / L' },
            { k: '18 – 24 mo', v: 'Payback at 60% utilisation' },
          ].map((s) => (
            <div key={s.v} className="rounded-2xl border border-jal-100 bg-white p-6 shadow-sm">
              <div className="font-display text-3xl font-bold text-jal-900">{s.k}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-jal-600">{s.v}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
