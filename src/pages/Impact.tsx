import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';

const nablRows = [
  { param: 'pH',                  raw: '2.8',        treated: '7.2',     limit: '6.5 – 8.5',   pass: true },
  { param: 'Iron (Fe)',           raw: '48.2 mg/L',  treated: '0.28 mg/L', limit: '≤ 0.3 mg/L',  pass: true },
  { param: 'Manganese (Mn)',      raw: '4.8 mg/L',   treated: '0.08 mg/L', limit: '≤ 0.1 mg/L',  pass: true },
  { param: 'Arsenic (As)',        raw: '0.06 mg/L',  treated: '<0.01 mg/L', limit: '≤ 0.01 mg/L', pass: true },
  { param: 'Total Coliform',      raw: '240 MPN',    treated: 'Nil',     limit: 'Nil required',pass: true },
  { param: 'Turbidity',           raw: '42 NTU',     treated: '< 1 NTU', limit: '≤ 1 NTU',     pass: true },
  { param: 'TDS',                 raw: '3,180 mg/L', treated: '312 mg/L',limit: '≤ 500 mg/L',  pass: true },
  { param: 'Total Hardness',      raw: '1,240 mg/L', treated: '198 mg/L',limit: '≤ 600 mg/L',  pass: true },
];

const pipeline = [
  { place: 'Dhanbad Ward-7',        status: 'Live',       volume: '10,000 LPD',  note: 'Water ATM operational · ~150 households daily' },
  { place: 'DMC — 5 Kiosk Stations', status: 'Sanctioned', volume: '50,000 LPD',  note: 'Technical Sanction received · ~200 vending machines planned' },
  { place: 'Hazaribagh',             status: 'In Discussion', volume: 'TBD',       note: 'Municipal enquiry active' },
  { place: 'Godda',                  status: 'In Discussion', volume: 'TBD',       note: 'Municipal enquiry active' },
  { place: 'Ramgarh',                status: 'In Discussion', volume: 'TBD',       note: 'Municipal enquiry active' },
  { place: 'Ranchi · Dhurwa Dam',    status: 'Interest',   volume: 'TBD',         note: 'Ranchi Municipal Corporation · surface-water brief' },
  { place: 'BCCL / CCL / ECL',       status: 'Early-stage', volume: 'Pan-India',  note: 'Formal MoU discussions initiated' },
];

export default function Impact() {
  return (
    <>
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
            title="NABL-accredited lab validation"
            body="Independent NABL-accredited testing confirms all 30 parameters of IS 10500:2012 are met — including pH, heavy metals (Fe, Mn, As, Pb), turbidity, TDS, total hardness, and bacteriological safety (coliform Nil)."
            facts={['30 / 30 parameters passed', 'Feed drawn from actual mine water']}
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
              <span className="eyebrow">NABL Test Results</span>
              <h2 className="headline-deco mt-4 font-display text-4xl font-semibold text-brand-sky md:text-5xl">
                Before and after.
              </h2>
            </div>
            <p className="text-lg text-brand-sky/70">
              Selected parameters from the full 30-parameter IS 10500:2012 report.
              Every parameter passed, on actual coal mine pit water feed.
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
            Full 30-parameter report available on request. Testing by a NABL-accredited laboratory against BIS IS 10500:2012.
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
