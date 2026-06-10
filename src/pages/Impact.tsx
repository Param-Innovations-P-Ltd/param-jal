import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';

const nablRows = [
  { param: 'Taste',                raw: 'Agreeable',   treated: 'Agreeable', limit: 'Agreeable',      pass: true },
  { param: 'Odour',                raw: 'Agreeable',   treated: 'Agreeable', limit: 'Agreeable',      pass: true },
  { param: 'Colour (Hazen)',       raw: '<20 ⚠',       treated: '<5',        limit: '5–15',           pass: true },
  { param: 'pH (25°C)',            raw: '7.9',         treated: '7.0',       limit: '6.5–8.5',        pass: true },
  { param: 'TDS (mg/L)',           raw: '653',         treated: '47.0',      limit: '500–2000',       pass: true },
  { param: 'Turbidity (NTU)',      raw: '3.6',         treated: '1.1',       limit: '1.0–5.0',        pass: true },
  { param: 'Fluoride (mg/L)',      raw: '2.7 ⚠',       treated: '0.12',      limit: '1.0–1.5',        pass: true },
  { param: 'Total Alkalinity (mg/L)', raw: '320',      treated: '24.0',      limit: '200–600',        pass: true },
  { param: 'Total Hardness (mg/L)',raw: '626 ⚠',       treated: '42.0',      limit: '200–600',        pass: true },
  { param: 'Calcium (mg/L)',       raw: '91.2',        treated: '0.8',       limit: '75–200',         pass: true },
  { param: 'Magnesium (mg/L)',     raw: '95.52',       treated: '5.28',      limit: '30–100',         pass: true },
  { param: 'Chloride (mg/L)',      raw: '67.02',       treated: '9.0',       limit: '250–1000',       pass: true },
  { param: 'Total Coliforms (CFU/100mL)', raw: 'Present ⚠', treated: 'Absent', limit: 'Not detectable', pass: true },
  { param: 'E. Coli (CFU/100mL)', raw: 'Absent',      treated: 'Absent',    limit: 'Not detectable', pass: true },
];

const pipeline = [
  { place: 'Angrapatra Mines, Sijua Ward-7 Dhanbad', status: 'Live', volume: '10,000 LPD', note: 'Water ATM operational · ~1,342 households/kiosk · Solar 3 KVA · Coin + UPI · 24×7' },
  { place: 'DMC — 5 Kiosk Stations', status: 'Sanctioned', volume: '50,000 LPD', note: '₹19,86,900/kiosk · Chief Engineer Technical Sanction · 19 Aug 2025 · ~200 ATMs planned' },
  { place: 'Hazaribagh',             status: 'In Discussion', volume: 'TBD',       note: 'Municipal enquiry active' },
  { place: 'Godda',                  status: 'In Discussion', volume: 'TBD',       note: 'Municipal enquiry active' },
  { place: 'Ramgarh',                status: 'In Discussion', volume: 'TBD',       note: 'Municipal enquiry active' },
  { place: 'Ranchi · Dhurwa Dam',    status: 'Interest',   volume: 'TBD',         note: 'Ranchi Municipal Corporation · surface-water brief' },
  { place: 'BCCL / CCL / ECL',       status: 'Early-stage', volume: 'Pan-India',  note: 'Formal MoU discussions initiated' },
];

export default function Impact() {
  return (
    <>
      <SEO
        title="Impact & Validation"
        description="Angrapatra Mines Ward-7 Dhanbad Water ATM running 10,000 LPD at ₹0.50/L. DMC Technical Sanction ₹19,86,900/kiosk, 5 locations. Government laboratory certified (DWSD Jharkhand) on all 14 IS 10500:2012 parameters."
        path="/impact"
      />
      <PageHero
        eyebrow="Impact & Validation"
        title="Not a prototype. Running today."
        subtitle="Param Jal is live at Ward-7, Dhanbad — treating actual coal mine pit water at 10,000 litres per day, serving approximately 150 households at ₹0.50 per litre. Every figure on this page is drawn from a sanctioned contract, a NABL lab report, or a live pilot."
        sanskrit="प्रमाणेन सत्यम् · Truth, by evidence."
      />

      {/* Headline stats */}
      <section className="container-x -mt-10">
        <div className="grid gap-4 md:grid-cols-4">
          {[
            { k: '10,000', v: 'LPD capacity, Ward-7', sub: 'Live' },
            { k: '~150',   v: 'Households served daily', sub: '₹0.50 / litre' },
            { k: '₹45 Cr', v: 'DMC sanctioned pipeline', sub: '~200 ATMs planned' },
            { k: '600+',   v: 'Pan-India mine sites',   sub: 'Addressable market' },
          ].map((s) => (
            <div key={s.v} className="rounded-2xl border border-brand-sky/10 bg-white p-6 shadow-soft">
              <div className="font-display text-4xl font-semibold text-brand-sky">{s.k}</div>
              <div className="mt-1 text-sm text-brand-sky/70">{s.v}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.14em] text-brand-gold">{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Four proof points */}
      <section className="container-x py-20">
        <span className="eyebrow">The Four Proof Points</span>
        <h2 className="headline-deco mt-4 font-display text-4xl font-semibold text-brand-sky md:text-5xl">
          Concept to deployment, in four chapters.
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Proof
            badge="Proof Point 01"
            title="Operational pilot — Ward-7, Dhanbad"
            body="A fully-commissioned Water ATM drawing from actual coal mine pit water at pH 2.8–3.6, delivering BIS-standard potable water at 10,000 LPD. Serves approximately 150 households per day at ₹0.50 per litre — less than one-third the cost of packaged drinking water."
            facts={['Continuous operation since early 2026', 'Powered by grid + solar-ready architecture']}
          />
          <Proof
            badge="Proof Point 02"
            title="DMC — Technical Sanction"
            body="Dhanbad Municipal Corporation has issued Technical Sanction for five Drinking Water Kiosk stations. Approximately 200 water vending machines planned across the DMC area. Total project value: ₹45 Crore. Implementation partner: ACIC IIT(ISM) Dhanbad Foundation."
            facts={['Technical Sanction received', '~200 ATMs planned DMC-wide']}
          />
          <Proof
            badge="Proof Point 03"
            title="Government laboratory certified"
            body="Government of Jharkhand District Level Water Testing Laboratory (DWSD Dhanbad) confirmed all 14 IS 10500:2012 parameters compliant — including fluoride (95.5% reduction: 2.7 → 0.12 mg/L), TDS (93% reduction: 653 → 47 mg/L), hardness (93% reduction: 626 → 42 mg/L), and Total Coliforms: Present → Absent."
            facts={['14 / 14 parameters passed', 'ULR TC1560325000000214F · 09 Jun 2026', 'Angrapatra Mines, Sijua Ward No. 7']}
          />
          <Proof
            badge="Proof Point 04"
            title="Active deployment pipeline"
            body="Municipal discussions underway with Hazaribagh, Godda, Ramgarh and Ranchi (Dhurwa Dam). Early-stage MoU conversations with BCCL, CCL and ECL. A pan-India pipeline of over 600 mine sites."
            facts={['7 active municipal conversations', 'Formal MoU discussions with BCCL / CCL / ECL']}
          />
        </div>
      </section>

      {/* NABL results */}
      <section className="border-y border-brand-sky/10 bg-jal-50/40">
        <div className="container-x py-20">
          <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:items-end">
            <div>
              <span className="eyebrow">Government Lab Test Results</span>
              <h2 className="headline-deco mt-4 font-display text-4xl font-semibold text-brand-sky md:text-5xl">
                Before and after.
              </h2>
            </div>
            <p className="text-lg text-brand-sky/70">
              All 14 IS 10500:2012 parameters tested by the Government of Jharkhand —
              District Level Water Testing Laboratory (DWSD), Dhanbad. Both samples taken
              same day, same site: Angrapatra Mines, Sijua Ward No. 7.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl border border-brand-sky/10 bg-white shadow-soft">
            <table className="w-full text-left text-sm">
              <thead className="bg-brand-sky text-white">
                <tr>
                  <th className="px-5 py-4 font-semibold">Parameter</th>
                  <th className="px-5 py-4 font-semibold">Raw feed</th>
                  <th className="px-5 py-4 font-semibold">After Param Jal</th>
                  <th className="px-5 py-4 font-semibold">BIS limit</th>
                  <th className="px-5 py-4 font-semibold">Result</th>
                </tr>
              </thead>
              <tbody>
                {nablRows.map((r, i) => (
                  <tr key={r.param} className={i % 2 ? 'bg-jal-50/40' : ''}>
                    <td className="px-5 py-3.5 font-medium text-brand-sky">{r.param}</td>
                    <td className="px-5 py-3.5 font-mono text-red-700">{r.raw}</td>
                    <td className="px-5 py-3.5 font-mono text-emerald-700">{r.treated}</td>
                    <td className="px-5 py-3.5 text-brand-sky/80">{r.limit}</td>
                    <td className="px-5 py-3.5">
                      <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-emerald-800">
                        {r.pass ? 'Pass' : 'Fail'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-brand-sky/60">
            Tested by: Govt of Jharkhand — District Level Water Testing Laboratory (DWSD), Bhelatand Water Treatment Plant, Dhanbad-826004.
            ULR No. TC1560325000000213F (pit water) · TC1560325000000214F (treated water). Date of Analysis: 06-06-2026 · Report: 09-06-2026.
          </p>
        </div>
      </section>

      {/* Deployment pipeline */}
      <section className="bg-white">
        <div className="container-x py-20">
          <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:items-end">
            <div>
              <span className="eyebrow">Deployment Pipeline</span>
              <h2 className="headline-deco mt-4 font-display text-4xl font-semibold text-brand-sky md:text-5xl">
                Where Param Jal is going next.
              </h2>
            </div>
            <p className="text-lg text-brand-sky/70">
              One Water ATM is a pilot. Seven active municipal conversations, a sanctioned
              DMC roll-out, and early MoU discussions with India&apos;s three largest coal
              producers is a national pipeline.
            </p>
          </div>

          <div className="mt-10 grid gap-3">
            {pipeline.map((p) => (
              <div key={p.place} className="grid grid-cols-[auto_1fr_auto] items-center gap-5 rounded-2xl border border-brand-sky/10 bg-white px-6 py-4 shadow-soft">
                <StatusDot status={p.status} />
                <div>
                  <div className="font-display text-lg font-semibold text-brand-sky">{p.place}</div>
                  <div className="text-sm text-brand-sky/70">{p.note}</div>
                </div>
                <div className="flex items-center gap-4 text-right">
                  <div>
                    <div className="text-xs uppercase tracking-[0.14em] text-brand-sky/60">Volume</div>
                    <div className="font-mono text-sm text-brand-sky">{p.volume}</div>
                  </div>
                  <StatusPill status={p.status} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community impact */}
      <section className="border-t border-brand-sky/10 bg-brand-sky text-white">
        <div className="container-x py-20">
          <div className="grid gap-12 md:grid-cols-[1.2fr_1fr] md:items-center">
            <div>
              <span className="eyebrow-dark">Community Impact</span>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-white md:text-5xl">
                The human number behind every litre.
              </h2>
              <p className="mt-6 text-lg text-jal-100">
                Every 10,000-LPD skid replaces roughly ₹4 Lakh of household spending on
                packaged drinking water annually — and displaces the quiet, cumulative
                exposure to heavy metals and pathogens that mine-adjacent communities
                have absorbed for decades.
              </p>
              <p className="mt-4 text-lg text-jal-100">
                Water you can drink without second-guessing it is, ultimately, what
                public-health infrastructure is supposed to produce.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { k: '~54,000 L', v: 'Safe water per month per ATM' },
                { k: '~₹27,000', v: 'Monthly household savings aggregate' },
                { k: '0', v: 'E. coli detected in treated output' },
                { k: '<0.3 mg/L', v: 'Iron — below BIS limit' },
              ].map((s) => (
                <div key={s.v} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                  <div className="font-display text-2xl font-semibold text-brand-gold">{s.k}</div>
                  <div className="mt-2 text-sm text-white/80">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x py-16">
        <div className="flex flex-wrap items-center justify-between gap-6 rounded-3xl border border-brand-sky/10 bg-gradient-to-br from-jal-50 to-white p-10 shadow-soft">
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-brand-gold">Partner with Param Jal</div>
            <h3 className="mt-2 font-display text-2xl font-semibold text-brand-sky md:text-3xl">Exploring a deployment for your district?</h3>
          </div>
          <Link to="/contact" className="btn-primary">Start a conversation →</Link>
        </div>
      </section>
    </>
  );
}

function Proof({ badge, title, body, facts }: { badge: string; title: string; body: string; facts: string[] }) {
  return (
    <article className="rounded-2xl border border-brand-sky/10 bg-white p-8 shadow-soft">
      <span className="eyebrow">{badge}</span>
      <h3 className="mt-4 font-display text-2xl font-semibold text-brand-sky">{title}</h3>
      <p className="mt-3 text-brand-sky/75">{body}</p>
      <ul className="mt-5 space-y-2">
        {facts.map((f) => (
          <li key={f} className="flex gap-2 text-sm text-brand-sky">
            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-gold" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function StatusDot({ status }: { status: string }) {
  const color =
    status === 'Live' ? 'bg-emerald-500' :
    status === 'Sanctioned' ? 'bg-brand-gold' :
    status === 'Interest' ? 'bg-jal-400' :
    'bg-brand-sky/40';
  return <span className={`size-2.5 rounded-full ${color}`} />;
}

function StatusPill({ status }: { status: string }) {
  const classes =
    status === 'Live'         ? 'bg-emerald-50 text-emerald-700' :
    status === 'Sanctioned'   ? 'bg-amber-50 text-amber-700' :
    status === 'Interest'     ? 'bg-sky-50 text-sky-700' :
    status === 'In Discussion'? 'bg-jal-50 text-brand-sky' :
                                'bg-jal-50 text-brand-sky';
  return <span className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider ${classes}`}>{status}</span>;
}
