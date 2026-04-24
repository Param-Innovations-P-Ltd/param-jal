import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient">
        <div className="container-x grid gap-12 py-20 md:grid-cols-2 md:py-28 md:items-center">
          <div>
            <span className="eyebrow">A Param Innovations Initiative · Dhanbad</span>
            <h1 className="mt-5 text-4xl font-bold leading-[1.05] text-jal-950 md:text-6xl">
              Acidic pit water to <span className="text-jal-600">safe drinking water.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-jal-700 md:text-xl">
              Param Jal is a six-stage, modular water treatment technology that converts
              acidic coal mine pit water into BIS IS 10500:2012 potable drinking water —
              affordable, field-proven, and engineered for India&apos;s 600+ mine sites.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/technology" className="btn-primary">Explore the Technology →</Link>
              <Link to="/impact" className="btn-ghost">See Field Validation</Link>
            </div>
            <dl className="mt-10 grid max-w-lg grid-cols-3 gap-6 border-t border-jal-100 pt-6">
              <Stat k="pH 2.8 → 7.2" v="Verified conversion" />
              <Stat k="₹0.50 / litre" v="End-consumer price" />
              <Stat k="₹45 Cr" v="Sanctioned pipeline" />
            </dl>
          </div>
          <HeroVisual />
        </div>
      </section>

      {/* Problem */}
      <section className="water-wave">
        <div className="container-x py-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div>
              <span className="eyebrow">The Problem</span>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                India&apos;s mining belts run on poisoned water.
              </h2>
              <p className="mt-5 text-lg text-jal-700">
                Every active coal mine in India generates acidic pit water — pH 2–4,
                loaded with heavy metals, suspended solids and pathogens. This discharge
                silently contaminates groundwater, rivers, and the wells that communities
                around the mines depend on.
              </p>
              <p className="mt-4 text-lg text-jal-700">
                Today, it is a hazard. <strong className="text-jal-950">Param Jal makes it a resource.</strong>
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Fact label="Active coal mine sites" value="600+" />
              <Fact label="Typical raw pH" value="2 – 4" />
              <Fact label="Heavy metals removed" value="Fe, Mn, As, Pb" />
              <Fact label="BIS parameters passed" value="30 / 30" />
            </div>
          </div>
        </div>
      </section>

      {/* Six pillars */}
      <section className="border-t border-jal-100 bg-jal-50/60">
        <div className="container-x py-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Why Param Jal</span>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Six reasons it works where others stall.</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.title} className="card">
                <div className="flex size-10 items-center justify-center rounded-lg bg-jal-600 text-white">
                  {p.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-jal-950">{p.title}</h3>
                <p className="mt-2 text-sm text-jal-700">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x py-20">
        <div className="overflow-hidden rounded-3xl bg-jal-950 px-8 py-14 md:px-16">
          <div className="grid gap-8 md:grid-cols-[1.3fr_1fr] md:items-center">
            <div>
              <h3 className="font-display text-3xl font-bold text-white md:text-4xl">
                Partner with us on a deployment.
              </h3>
              <p className="mt-4 max-w-xl text-jal-200">
                Municipal bodies, mining corporations, gram panchayats and Jal Jeevan
                Mission partners — we deliver skid-mounted systems in 15–20 days.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link to="/contact" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-jal-900 hover:bg-jal-100">Start a conversation</Link>
              <Link to="/atmanirbhar" className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">Read the strategy</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const pillars = [
  {
    title: 'NABL-certified output',
    desc: 'All 30 parameters of IS 10500:2012 passed on actual pit-water feed.',
    icon: <IconCheck />,
  },
  {
    title: 'Patent-protected process',
    desc: 'Provisional Patent 202531084570 covers the integrated six-stage sequence.',
    icon: <IconShield />,
  },
  {
    title: '60–70% lower capex',
    desc: 'Versus conventional water treatment plants at equivalent capacity.',
    icon: <IconCoin />,
  },
  {
    title: 'Modular by design',
    desc: 'Skid systems from 50,000 LPD to 5,00,000 LPD. Deployable in 15–20 days.',
    icon: <IconModule />,
  },
  {
    title: 'Atmanirbhar pre-treatment',
    desc: 'Five of six stages are 100% Indian-sourceable; extends RO membrane life 2–3×.',
    icon: <IconFlag />,
  },
  {
    title: 'Field-proven today',
    desc: 'Ward-7 Dhanbad Water ATM is live, serving ~150 households at ₹0.50/L.',
    icon: <IconPin />,
  },
];

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <dt className="text-xl font-bold text-jal-900">{k}</dt>
      <dd className="mt-1 text-xs uppercase tracking-wider text-jal-600">{v}</dd>
    </div>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-jal-100 bg-white p-5">
      <div className="text-2xl font-bold text-jal-900">{value}</div>
      <div className="mt-1 text-xs uppercase tracking-wider text-jal-600">{label}</div>
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="relative">
      <div className="absolute inset-0 -z-0 rounded-[2.5rem] bg-gradient-to-br from-jal-200/60 via-white to-jal-100 blur-2xl" />
      <div className="relative rounded-[2rem] border border-jal-100 bg-white p-6 shadow-xl">
        <div className="flex items-center justify-between text-xs uppercase tracking-widest text-jal-500">
          <span>Live · Ward-7 Dhanbad</span>
          <span className="flex items-center gap-1">
            <span className="size-2 rounded-full bg-emerald-500 animate-pulse" /> operational
          </span>
        </div>
        <div className="mt-4 space-y-3">
          {[
            { label: 'Raw pH', v: '2.8', after: '7.2', unit: '' },
            { label: 'Iron', v: '48.2', after: '0.28', unit: 'mg/L' },
            { label: 'Coliform', v: '240', after: 'Nil', unit: 'MPN' },
            { label: 'Turbidity', v: '42', after: '<1', unit: 'NTU' },
          ].map((r) => (
            <div key={r.label} className="flex items-center justify-between rounded-xl border border-jal-100 bg-jal-50/60 px-4 py-3">
              <span className="text-sm font-medium text-jal-700">{r.label}</span>
              <div className="flex items-center gap-2 font-mono text-sm">
                <span className="rounded bg-red-100 px-2 py-0.5 text-red-700">{r.v} {r.unit}</span>
                <span className="text-jal-400">→</span>
                <span className="rounded bg-emerald-100 px-2 py-0.5 text-emerald-700">{r.after} {r.unit}</span>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-5 text-xs text-jal-500">
          NABL-accredited lab report, IS 10500:2012, actual coal mine pit water feed.
        </p>
      </div>
    </div>
  );
}

/* inline icons */
function IconCheck() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>; }
function IconShield() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5l-8-3Z"/></svg>; }
function IconCoin() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="9"/><path d="M9 9h6M9 13h6M12 6v12"/></svg>; }
function IconModule() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>; }
function IconFlag() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 4v17"/><path d="M4 4h13l-2 4 2 4H4"/></svg>; }
function IconPin() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 22s7-6 7-12a7 7 0 1 0-14 0c0 6 7 12 7 12Z"/><circle cx="12" cy="10" r="2.5"/></svg>; }
