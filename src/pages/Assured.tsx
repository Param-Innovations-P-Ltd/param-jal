import PageHero from '../components/PageHero';

const indicators = [
  { letter: 'A', label: 'Affordability',   line: '₹0.50 per litre to the end consumer. Capital cost 60–70% below conventional Water Treatment Plants at equivalent capacity. Payback 18–24 months at 60% utilisation.' },
  { letter: 'S', label: 'Scalability',     line: 'Modular skid systems from 50,000 LPD to 5,00,000 LPD. Over 600 active coal-mine sites form the immediate addressable market. Pan-India rollout architecture.' },
  { letter: 'S', label: 'Sustainability',  line: 'Gravity-assisted flow reduces energy demand. Sludge co-processed with mine overburden under existing environmental clearance. Solar-ready power architecture.' },
  { letter: 'U', label: 'Universality',    line: 'Validated on acid mine drainage, high-TDS groundwater and surface water. Process parameters adapt across input chemistries without redesign.' },
  { letter: 'R', label: 'Rapidity',        line: 'Skid systems deployable within 15–20 days of order. An ATM kiosk is operational within one week of commissioning at the host site.' },
  { letter: 'E', label: 'Excellence',      line: 'NABL-accredited lab validation on actual feed: pH 2.8 → 7.2, Iron 48.2 → 0.28 mg/L, Turbidity <1 NTU, Coliform Nil. All 30 BIS parameters passed.' },
  { letter: 'D', label: 'Distinctiveness', line: 'To our knowledge, the only field-deployed technology in India converting coal-mine acid drainage to BIS-standard potable water at decentralised ATM scale.' },
];

const compliance = [
  { k: 'NABL Lab Test Report',  v: 'Passed IS 10500:2012 on all 30 parameters. Independent NABL-accredited laboratory.' },
  { k: 'Provisional Patent',    v: '202531084570 — filed September 2025. Complete specification due September 2026.' },
  { k: 'SISFS Grant',           v: '₹9 Lakh from ACIC IIT(ISM) Dhanbad under Startup India Seed Fund Scheme.' },
  { k: 'DPIIT Recognition',     v: 'Param Innovations Pvt. Ltd. is DPIIT-recognised.' },
  { k: 'MSME Registration',     v: 'UDYAM-JH-04-0066916' },
  { k: 'Field Deployment',      v: 'Ward-7 Dhanbad Water ATM operational. DMC Technical Sanction received.' },
];

const econ = [
  { k: '₹8 – 12 L', v: 'Capex per 1,000 LPD', sub: 'All-inclusive, skid-mounted' },
  { k: '~₹1.20',    v: 'Opex per 1,000 L',    sub: 'Chemicals + electricity + labour' },
  { k: '₹0.50',     v: 'Consumer price / L',  sub: 'At the Water ATM dispenser' },
  { k: '18–24 mo',  v: 'Payback period',      sub: 'At 60% daily utilisation' },
];

export default function Assured() {
  return (
    <>
      <PageHero
        eyebrow="Evaluation Framework"
        title="The ASSURED case for Param Jal."
        subtitle="SPM NIWAS evaluates water technologies against seven indicators — Affordability, Scalability, Sustainability, Universality, Rapidity, Excellence, Distinctiveness. Here is where Param Jal lands on each, with the numbers to back it."
        sanskrit="सर्वं निष्पादयेत् · Deliver on every dimension."
      />

      {/* Indicator cards */}
      <section className="container-x py-20">
        <div className="grid gap-4">
          {indicators.map((i) => (
            <article key={i.label} className="flex flex-col gap-5 rounded-2xl border border-brand-sky/10 bg-white p-6 shadow-soft md:flex-row md:items-center">
              <div className="flex size-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-sky to-brand-skysoft font-display text-4xl font-semibold text-brand-gold">
                {i.letter}
              </div>
              <div>
                <h3 className="font-display text-2xl font-semibold text-brand-sky">{i.label}</h3>
                <p className="mt-2 text-brand-sky/80">{i.line}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Compliance */}
      <section className="border-y border-brand-sky/10 bg-jal-50/40">
        <div className="container-x py-20">
          <span className="eyebrow">Assured Metrics — Compliance Status</span>
          <h2 className="headline-deco mt-4 font-display text-4xl font-semibold text-brand-sky md:text-5xl">
            Every item submitted or confirmed.
          </h2>
          <p className="mt-5 max-w-3xl text-lg text-brand-sky/70">
            The table below mirrors the Assured Metrics Form with the current status of
            each requirement, cross-referenced against submitted documents.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {compliance.map((row) => (
              <div key={row.k} className="flex items-start gap-4 rounded-2xl border border-brand-sky/10 bg-white p-5">
                <div className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                </div>
                <div>
                  <div className="font-semibold text-brand-sky">{row.k}</div>
                  <div className="mt-1 text-sm text-brand-sky/75">{row.v}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Unit economics */}
      <section className="container-x py-20">
        <span className="eyebrow">Unit Economics</span>
        <h2 className="headline-deco mt-4 font-display text-4xl font-semibold text-brand-sky md:text-5xl">
          The numbers behind ₹0.50 per litre.
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {econ.map((s) => (
            <div key={s.v} className="rounded-2xl border border-brand-sky/10 bg-white p-6 shadow-soft">
              <div className="font-display text-3xl font-semibold text-brand-sky">{s.k}</div>
              <div className="mt-2 text-sm text-brand-sky/70">{s.v}</div>
              <div className="mt-3 border-t border-brand-sky/10 pt-3 text-xs text-brand-sky/60">{s.sub}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-brand-sky/10 bg-gradient-to-br from-jal-50 to-white p-8 shadow-soft md:p-12">
          <h3 className="font-display text-2xl font-semibold text-brand-sky">How a 10,000-LPD kiosk earns back its capital.</h3>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div>
              <div className="text-xs uppercase tracking-[0.18em] text-brand-gold">Daily revenue</div>
              <div className="mt-2 font-mono text-lg text-brand-sky">10,000 L × ₹0.50 = <strong>₹5,000</strong></div>
              <div className="mt-2 text-sm text-brand-sky/70">At 100% utilisation; pilot runs closer to 60–70%.</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.18em] text-brand-gold">Daily opex</div>
              <div className="mt-2 font-mono text-lg text-brand-sky">10,000 L × ~₹1.20/1000L = <strong>₹12</strong></div>
              <div className="mt-2 text-sm text-brand-sky/70">Chemicals + power + routine labour.</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.18em] text-brand-gold">Monthly net</div>
              <div className="mt-2 font-mono text-lg text-brand-sky">~<strong>₹1.0 L – ₹1.4 L</strong></div>
              <div className="mt-2 text-sm text-brand-sky/70">After opex, before civic handling charges.</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
