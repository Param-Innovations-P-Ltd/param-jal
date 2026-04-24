import PageHero from '../components/PageHero';

const nablRows = [
  { param: 'pH', raw: '2.8', treated: '7.2', limit: '6.5 – 8.5', pass: true },
  { param: 'Iron (Fe)', raw: '48.2 mg/L', treated: '0.28 mg/L', limit: '≤ 0.3 mg/L', pass: true },
  { param: 'Total Coliform', raw: '240 MPN', treated: 'Nil', limit: 'Nil required', pass: true },
  { param: 'Turbidity', raw: '42 NTU', treated: '< 1 NTU', limit: '≤ 1 NTU', pass: true },
  { param: 'TDS', raw: '3,180 mg/L', treated: '312 mg/L', limit: '≤ 500 mg/L', pass: true },
];

export default function Impact() {
  return (
    <>
      <PageHero
        eyebrow="Impact & Validation"
        title="Not a prototype. Running today."
        subtitle="Param Jal is live at Ward-7, Dhanbad — treating actual coal mine pit water at 10,000 litres per day and serving approximately 150 households at ₹0.50 per litre."
      />

      {/* Top stats */}
      <section className="container-x -mt-8 md:-mt-12">
        <div className="grid gap-4 md:grid-cols-4">
          {[
            { k: '10,000', v: 'LPD capacity, Ward-7' },
            { k: '~150', v: 'Households served daily' },
            { k: '₹45 Cr', v: 'DMC sanctioned pipeline' },
            { k: '600+', v: 'Pan-India mine sites' },
          ].map((s) => (
            <div key={s.v} className="rounded-2xl border border-jal-100 bg-white p-6 shadow-sm">
              <div className="font-display text-3xl font-bold text-jal-900">{s.k}</div>
              <div className="mt-1 text-sm text-jal-600">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Proof points */}
      <section className="container-x py-20">
        <div className="grid gap-6 md:grid-cols-2">
          <Proof
            badge="Proof Point 01"
            title="Operational pilot — Ward-7, Dhanbad"
            body="A fully-commissioned Water ATM drawing from actual coal mine pit water at pH 2.8–3.6 and delivering BIS-standard potable water at 10,000 LPD. Approximately 150 households per day at ₹0.50 per litre."
          />
          <Proof
            badge="Proof Point 02"
            title="DMC — Technical Sanction"
            body="Dhanbad Municipal Corporation has issued Technical Sanction for 5 Drinking Water Kiosk stations. Approximately 200 water vending machines planned across DMC area. Total project value: ₹45 Crore. Implementation partner: ACIC IIT(ISM) Dhanbad Foundation."
          />
          <Proof
            badge="Proof Point 03"
            title="NABL-accredited lab validation"
            body="Independent NABL-accredited testing confirms all 30 parameters of IS 10500:2012 are met — including pH, heavy metals, turbidity, TDS, and bacteriological safety. See table below."
          />
          <Proof
            badge="Proof Point 04"
            title="Active deployment pipeline"
            body="Discussions underway with Hazaribagh, Godda and Ramgarh. Ranchi Municipal Corporation has expressed interest for Dhurwa Dam water. Early-stage MoU conversations with BCCL, CCL and ECL."
          />
        </div>
      </section>

      {/* NABL table */}
      <section className="border-t border-jal-100 bg-jal-50/60">
        <div className="container-x py-20">
          <span className="eyebrow">NABL Test Results</span>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Before and after — actual mine water feed.</h2>
          <p className="mt-3 max-w-3xl text-jal-700">Selected parameters from the full 30-parameter IS 10500:2012 report. Every parameter passed.</p>

          <div className="mt-8 overflow-hidden rounded-2xl border border-jal-100 bg-white shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="bg-jal-900 text-white">
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
                    <td className="px-5 py-3 font-medium text-jal-900">{r.param}</td>
                    <td className="px-5 py-3 font-mono text-red-700">{r.raw}</td>
                    <td className="px-5 py-3 font-mono text-emerald-700">{r.treated}</td>
                    <td className="px-5 py-3 text-jal-700">{r.limit}</td>
                    <td className="px-5 py-3">
                      <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-800">
                        {r.pass ? 'PASS' : 'FAIL'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-jal-500">
            Full report available on request. Testing by a NABL-accredited laboratory against BIS IS 10500:2012.
          </p>
        </div>
      </section>
    </>
  );
}

function Proof({ badge, title, body }: { badge: string; title: string; body: string }) {
  return (
    <article className="rounded-2xl border border-jal-100 bg-white p-7 shadow-sm">
      <span className="eyebrow">{badge}</span>
      <h3 className="mt-3 text-xl font-semibold text-jal-950">{title}</h3>
      <p className="mt-3 text-jal-700">{body}</p>
    </article>
  );
}
