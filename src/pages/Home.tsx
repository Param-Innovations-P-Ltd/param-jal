import { Link } from 'react-router-dom';
import PartnerMarquee from '../components/PartnerMarquee';
import SEO from '../components/SEO';

export default function Home() {
  return (
    <>
      <SEO
        description="PARAM JAL converts high-TDS coal mine pit water into BIS IS 10500:2012 drinking water. Government laboratory certified (DWSD Jharkhand), patent-protected, field-proven at Ward-7 Dhanbad."
        path="/"
      />
      {/* ─────────────────────── HERO ─────────────────────── */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="dot-bg absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" aria-hidden />
        <div className="container-x relative grid gap-12 py-20 md:grid-cols-[1.1fr_1fr] md:py-28 md:items-center">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="eyebrow">A Param Innovations initiative</span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-sky/10 bg-white px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-brand-sky/70">
                <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Ward-7 Dhanbad · live
              </span>
            </div>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.02] tracking-editorial text-brand-sky md:text-6xl lg:text-[5rem]">
              From <span className="italic text-brand-gold">poisoned</span> pit water<br /> to pure <span className="italic">jeevan-jal.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-brand-sky/75 md:text-xl">
              PARAM JAL converts high-TDS coal mine pit water into certified potable water —
              IS 10500:2012 compliant, government laboratory certified (DWSD Jharkhand),
              patent-protected, and running today at Angrapatra Mines, Ward-7, Dhanbad.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link to="/technology" className="btn-primary">Explore the Technology →</Link>
              <Link to="/impact" className="btn-ghost">See Field Validation</Link>
            </div>

            <div className="mt-12 flex items-center gap-4">
              <div className="h-px flex-1 bg-brand-sky/15" />
              <span className="sanskrit text-lg text-brand-sky/70">जगतं जयतु</span>
              <div className="h-px flex-1 bg-brand-sky/15" />
            </div>
          </div>
          <HeroPanel />
        </div>
      </section>

      {/* ─────────────────────── PARTNER STRIP ─────────────────────── */}
      <PartnerMarquee />

      {/* ─────────────────────── CREDENTIALS STRIP ─────────────────────── */}
      <section className="bg-white border-b border-brand-sky/10">
        <div className="container-x py-10">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
            {credentials.map((c) => (
              <div key={c.label} className="rounded-xl border border-brand-sky/10 bg-jal-50/60 p-4 text-center">
                <div className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-gold">{c.label}</div>
                <div className="mt-1 font-display text-sm font-semibold text-brand-sky leading-tight">{c.value}</div>
                <div className="mt-1 text-[10px] text-brand-sky/60">{c.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────── BY THE NUMBERS ─────────────────────── */}
      <section className="bg-white">
        <div className="container-x py-20">
          <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:items-end">
            <div>
              <span className="eyebrow">By the Numbers</span>
              <h2 className="headline-deco mt-4 text-4xl font-semibold text-brand-sky md:text-5xl">
                Proof, in numbers.
              </h2>
            </div>
            <p className="text-lg text-brand-sky/70">
              Param Jal is not a concept pitch. Every figure below is drawn from a NABL
              lab report, a sanctioned contract, or an operational pilot running as you
              read this.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-4">
            {numbers.map((n) => (
              <div key={n.label} className="group rounded-2xl border border-brand-sky/10 bg-white p-6 shadow-soft transition hover:-translate-y-0.5 hover:border-brand-gold/40">
                <div className="font-display text-4xl font-semibold text-brand-sky md:text-5xl">{n.k}</div>
                <div className="mt-2 h-px w-8 bg-brand-gold transition-all group-hover:w-14" />
                <div className="mt-3 text-xs uppercase tracking-[0.14em] text-brand-sky/60">{n.label}</div>
                <p className="mt-2 text-sm text-brand-sky/70">{n.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────── THE PROBLEM ─────────────────────── */}
      <section className="relative border-y border-brand-sky/10 bg-brand-sky text-white">
        <div className="dot-bg absolute inset-0 opacity-[0.06]" aria-hidden />
        <div className="container-x relative grid gap-12 py-20 md:grid-cols-2 md:items-center">
          <div>
            <span className="eyebrow-dark">The Problem</span>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-white md:text-5xl">
              India&apos;s mining belts run on poisoned water.
            </h2>
            <p className="mt-6 text-lg text-jal-100">
              Every active coal mine in India produces acidic pit water — pH 2 to 4,
              loaded with iron, manganese, arsenic, lead, suspended solids, and pathogens.
              It seeps into groundwater, contaminates rivers, and slowly disfigures the
              health of the communities that live on top of the country&apos;s energy reserves.
            </p>
            <p className="mt-4 text-lg text-jal-100">
              Conventional water treatment plants were not designed for this feed, and
              they cannot be deployed at the last mile at a price the community can bear.
            </p>
            <p className="mt-6 font-display text-2xl italic text-brand-gold">
              Today, this water is a hazard.<br />
              <span className="text-white">Param Jal makes it a resource.</span>
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {problemFacts.map((f) => (
              <div key={f.label} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="font-display text-3xl font-semibold text-brand-gold">{f.value}</div>
                <div className="mt-2 text-xs uppercase tracking-[0.14em] text-white/60">{f.label}</div>
                <p className="mt-2 text-sm text-white/80">{f.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────── SIX-STAGE PROCESS ─────────────────────── */}
      <section className="bg-white">
        <div className="container-x py-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">The Technology</span>
            <h2 className="headline-deco mx-auto mt-4 text-4xl font-semibold text-brand-sky md:text-5xl">
              Seven stages. Each with a precise engineering role.
            </h2>
            <p className="mt-5 text-lg text-brand-sky/70">
              Five of the seven stages are one-hundred-percent indigenous. Only the RO
              membrane is imported — and our patented pre-treatment extends its life two to three times.
            </p>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            {stages.map((s, i) => (
              <div key={s.n} className="relative">
                {i < stages.length - 1 && (
                  <div className="hidden lg:block absolute -right-2 top-8 text-brand-gold/40">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                  </div>
                )}
                <div className="rounded-2xl border border-brand-sky/10 bg-gradient-to-br from-white to-jal-50/40 p-5 transition hover:border-brand-gold/40 hover:shadow-soft">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-brand-gold">{s.n}</span>
                    {s.indigenous ? (
                      <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-emerald-700">Indian</span>
                    ) : (
                      <span className="rounded-full bg-amber-50 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-amber-700">Import</span>
                    )}
                  </div>
                  <h3 className="mt-2 font-display text-lg font-semibold leading-tight text-brand-sky">{s.title}</h3>
                  <p className="mt-2 text-xs text-brand-sky/70">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link to="/technology" className="btn-ghost">Walk through every stage →</Link>
          </div>
        </div>
      </section>

      {/* ─────────────────────── SIX PILLARS ─────────────────────── */}
      <section className="border-y border-brand-sky/10 bg-jal-50/40">
        <div className="container-x py-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Why Param Jal</span>
            <h2 className="headline-deco mx-auto mt-4 text-4xl font-semibold text-brand-sky md:text-5xl">
              Six reasons it works where others stall.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {pillars.map((p) => (
              <article key={p.title} className="card group">
                <div className="flex size-11 items-center justify-center rounded-xl bg-brand-sky text-brand-gold transition group-hover:bg-brand-gold group-hover:text-brand-sky">
                  {p.icon}
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-brand-sky">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-sky/75">{p.desc}</p>
                {p.link && (
                  <Link to={p.link} className="mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-brand-sky link-underline">
                    {p.linkLabel} →
                  </Link>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────── CASE STUDY / WARD-7 ─────────────────────── */}
      <section className="bg-white">
        <div className="container-x py-20">
          <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:items-center">
            <div className="relative">
              <div className="rounded-3xl bg-gradient-to-br from-brand-sky to-brand-skysoft p-1 shadow-soft">
                <div className="rounded-[calc(1.5rem-4px)] bg-brand-sky p-8 text-white">
                  <span className="eyebrow-dark">Live Case · Ward-7 Dhanbad</span>
                  <h3 className="mt-5 font-display text-3xl font-semibold leading-tight text-white">
                    A Water ATM serving ~150 households, today.
                  </h3>
                  <p className="mt-5 text-jal-100">
                    Commissioned in early 2026, drawing feed directly from BCCL-adjacent
                    coal mine pit water at pH 2.8–3.6. Output is BIS-standard potable
                    water at ₹0.50 per litre — less than one-third the price of packaged
                    drinking water.
                  </p>
                  <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-white/10 pt-6">
                    <div>
                      <dt className="text-xs uppercase tracking-[0.14em] text-brand-gold">Capacity</dt>
                      <dd className="mt-1 font-display text-2xl text-white">10,000 LPD</dd>
                    </div>
                    <div>
                      <dt className="text-xs uppercase tracking-[0.14em] text-brand-gold">Households</dt>
                      <dd className="mt-1 font-display text-2xl text-white">~150 / day</dd>
                    </div>
                    <div>
                      <dt className="text-xs uppercase tracking-[0.14em] text-brand-gold">Consumer price</dt>
                      <dd className="mt-1 font-display text-2xl text-white">₹0.50 / L</dd>
                    </div>
                    <div>
                      <dt className="text-xs uppercase tracking-[0.14em] text-brand-gold">Contract pipeline</dt>
                      <dd className="mt-1 font-display text-2xl text-white">₹45 Cr</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>

            <div>
              <span className="eyebrow">The Commercial Arc</span>
              <h2 className="headline-deco mt-4 font-display text-4xl font-semibold text-brand-sky md:text-5xl">
                From one Water ATM to 200 across DMC.
              </h2>
              <p className="mt-6 text-lg text-brand-sky/75">
                Dhanbad Municipal Corporation has issued Technical Sanction for five
                Drinking Water Kiosk stations, with a broader plan of approximately
                200 water vending machines across the DMC area. Total project value:
                ₹45 Crore, implemented in partnership with ACIC IIT(ISM) Dhanbad Foundation.
              </p>
              <p className="mt-4 text-lg text-brand-sky/75">
                Parallel discussions are active with Hazaribagh, Godda, Ramgarh, Ranchi
                Municipal Corporation (Dhurwa Dam) and BCCL / CCL / ECL — a pan-India
                pipeline of <strong>600-plus mine sites</strong>.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/impact" className="btn-primary">View field evidence →</Link>
                <Link to="/assured" className="btn-ghost">See ASSURED scorecard</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────── FOUNDER NOTE ─────────────────────── */}
      <section className="relative overflow-hidden bg-brand-sky text-white">
        <div className="absolute inset-0 opacity-20" aria-hidden>
          <div className="absolute -right-24 -top-24 size-96 rounded-full bg-brand-gold/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 size-96 rounded-full bg-jal-400/10 blur-3xl" />
        </div>
        <div className="container-tight relative py-24 text-center">
          <div className="mx-auto mb-8 size-16 rounded-full bg-brand-gold text-brand-sky flex items-center justify-center font-display text-3xl font-semibold">“</div>
          <blockquote className="font-display text-2xl font-medium italic leading-relaxed text-white md:text-3xl">
            We did not set out to build an elegant piece of engineering. We set out to
            answer a question Dhanbad has lived with for generations — can the water
            that comes out of a coal mine be the same water a child drinks safely at home?
            Param Jal is the answer we are putting into the field, stage by stage,
            kiosk by kiosk.
          </blockquote>
          <div className="mt-10 flex flex-col items-center gap-1 text-sm">
            <span className="font-semibold text-white">Aditya Prakash</span>
            <span className="text-brand-gold">Founder · Param Innovations Pvt. Ltd.</span>
          </div>
        </div>
      </section>

      {/* ─────────────────────── FAQ PREVIEW ─────────────────────── */}
      <section className="bg-white">
        <div className="container-x py-20">
          <div className="grid gap-12 md:grid-cols-[1fr_1.4fr]">
            <div>
              <span className="eyebrow">Common Questions</span>
              <h2 className="headline-deco mt-4 font-display text-4xl font-semibold text-brand-sky md:text-5xl">
                What evaluators usually ask first.
              </h2>
              <p className="mt-5 text-lg text-brand-sky/70">
                A quick preview of how we answer the most common diligence questions.
              </p>
              <Link to="/faq" className="mt-6 inline-block btn-ghost">Browse the full FAQ →</Link>
            </div>
            <div className="space-y-3">
              {previewFaqs.map((q, i) => (
                <details key={i} className="group rounded-2xl border border-brand-sky/10 bg-white p-5 open:shadow-soft">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 font-display text-lg font-medium text-brand-sky">
                    {q.q}
                    <span className="text-brand-gold transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 text-brand-sky/75">{q.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────── FINAL CTA ─────────────────────── */}
      <section className="container-x py-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-sky to-brand-skysoft px-8 py-16 md:px-16 md:py-20">
          <div className="absolute -right-10 -top-10 size-48 rounded-full bg-brand-gold/30 blur-3xl" aria-hidden />
          <div className="absolute bottom-0 left-0 size-40 rounded-full bg-jal-400/20 blur-3xl" aria-hidden />
          <div className="relative grid gap-10 md:grid-cols-[1.5fr_1fr] md:items-center">
            <div>
              <span className="eyebrow-dark">Partner with Param Jal</span>
              <h3 className="mt-4 font-display text-4xl font-semibold leading-tight text-white md:text-5xl">
                Every coal mine is an opportunity.<br />
                <span className="italic text-brand-gold">600+ of them are waiting.</span>
              </h3>
              <p className="mt-5 max-w-2xl text-jal-100">
                Municipal bodies, mining corporations, gram panchayats and Jal Jeevan
                Mission partners — we deliver skid-mounted systems in 15–20 days.
              </p>
            </div>
            <div className="flex flex-col gap-3 md:items-end">
              <Link to="/contact" className="btn-gold">Start a conversation →</Link>
              <Link to="/atmanirbhar" className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">Read the strategy</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ───────── Data ───────── */

const credentials = [
  { label: 'Patent Pending',    value: 'App. No. 202531084570', note: 'Filed 5 Sep 2025 · Kolkata Patent Office' },
  { label: 'SISFS Grant',       value: '₹9 Lakhs',             note: 'ACIC IIT(ISM) Dhanbad' },
  { label: 'Govt Sanction',     value: '₹19,86,900 / kiosk',   note: 'DMC Technical Sanction · Chief Engineer · 19 Aug 2025' },
  { label: 'DPIIT Recognised',  value: 'Startup India',         note: 'Param Innovations Pvt. Ltd.' },
  { label: 'EOI Shortlisted',   value: 'W-000301',              note: 'SPM NIWAS Expert Committee · DDWS · 12 Jun 2026' },
  { label: 'FSSAI Registered',  value: '21125172000318',        note: 'Food Safety Registration' },
];

const numbers = [
  { k: '10,000 LPD', label: 'Live Production',              note: 'Operational Water ATM at Angrapatra Mines, Ward-7 Dhanbad.' },
  { k: '14 / 14',    label: 'IS 10500:2012 Parameters',     note: 'All tested parameters compliant — Government laboratory certified (DWSD Jharkhand, 09 Jun 2026).' },
  { k: '₹0.50 /L',   label: 'Consumer Price',               note: 'Coin + UPI Water ATM — 24×7. Under one-third the cost of packaged drinking water.' },
  { k: 'TRL 8/9',    label: 'System Qualified',             note: 'Field-deployed and government-validated. DMC Technical Sanction: ₹19,86,900 per kiosk.' },
];

const problemFacts = [
  { value: '2 – 4',   label: 'Raw pH of mine pit water', note: 'Acidic enough to dissolve metal; currently discharged to environment.' },
  { value: '48 mg/L', label: 'Iron in raw feed',        note: 'The BIS drinking-water limit is 0.3 mg/L. Ward-7 sits at 48.' },
  { value: '600+',    label: 'Active Indian coal mines', note: 'Every one of them a potential Param Jal site.' },
  { value: '₹112 B',  label: 'India\u2013China trade deficit FY26', note: 'A significant share sits in industrial inputs.' },
];

const stages = [
  { n: '01', title: 'Aeration',                      desc: 'Cascade aerator oxidises dissolved Fe²⁺ and Mn²⁺; pH rises; dissolved gases volatilise.', indigenous: true },
  { n: '02', title: 'Coagulation',                   desc: 'Alum dosing neutralises surface charge on suspended particles and colloids.',              indigenous: true },
  { n: '03', title: 'Flocculation',                  desc: 'Slow mixing (50–300 RPM) grows micro-aggregates into settleable flocs carrying heavy metals.', indigenous: true },
  { n: '04', title: 'Sequential Filtration',         desc: 'Patented: activated carbon → multi-media → ion exchange resin. Protects RO membrane, extends life 2–3×.', indigenous: true },
  { n: '05', title: 'Reverse Osmosis',               desc: 'Physical size exclusion at 0.0001 µm — 95–99% ion rejection. TDS 653 → 47 mg/L at Ward-7.', indigenous: false },
  { n: '06', title: 'UV Disinfection',               desc: 'UV at 254 nm disrupts pathogen DNA. Ward-7 result: Total Coliforms — Absent, E. Coli — Absent.', indigenous: false },
  { n: '07', title: 'Sludge Management',             desc: 'Reject water collected (not discharged); sludge managed per CPCB guidelines.', indigenous: true },
];

const pillars = [
  { title: 'Government laboratory certified', desc: 'All 14 IS 10500:2012 parameters passed — Government of Jharkhand DWSD lab, 09 Jun 2026 (ULR TC1560325000000214F).', icon: <IconCheck />,  link: '/impact',     linkLabel: 'See lab report' },
  { title: 'Patent-protected process',  desc: 'Provisional Patent 202531084570 covers the integrated seven-stage sequence.',                icon: <IconShield />, link: '/about',      linkLabel: 'Compliance' },
  { title: '60–70% lower capex',        desc: 'Versus conventional Water Treatment Plants at equivalent capacity.',                         icon: <IconCoin />,   link: '/assured',    linkLabel: 'Unit economics' },
  { title: 'Modular by design',         desc: 'Skids from 50,000 to 5,00,000 LPD. Deployable in 15–20 days.',                               icon: <IconModule />, link: '/technology', linkLabel: 'Design notes' },
  { title: 'Atmanirbhar pre-treatment', desc: 'Five of six stages are 100% Indian-sourceable; extends RO membrane life 2–3×.',              icon: <IconFlag />,   link: '/atmanirbhar', linkLabel: 'The strategy' },
  { title: 'Field-proven today',        desc: 'Ward-7 Water ATM is live, serving ~150 households at ₹0.50/L.',                              icon: <IconPin />,    link: '/impact',     linkLabel: 'Case study' },
];

const previewFaqs = [
  { q: 'Is the output actually safe to drink?',            a: 'Yes — the Government of Jharkhand District Level Water Testing Laboratory (DWSD Dhanbad, 09 Jun 2026) confirmed all 14 IS 10500:2012 parameters are compliant on treated water from Angrapatra Mines, Ward-7. Full report available on request.' },
  { q: 'What happens to the heavy-metal sludge?',          a: 'It is co-processed with mine overburden at the source mine under the mine\u2019s existing Environmental Clearance, per CPCB guidelines. It is never released to the open environment.' },
  { q: 'How is this different from a conventional ETP?',   a: 'ETPs are large, centralised, and use imported elements at industrial scale. Param Jal is decentralised, skid-mounted, and designed for last-mile ATM delivery at ₹0.50/L. Different segment, different cost structure.' },
  { q: 'Why is the process patent-protected?',             a: 'The integrated sequence of six stages — and their specific ordering — is novel. We filed Provisional 202531084570 in September 2025 to establish priority; complete specification is due September 2026.' },
];

/* ───────── Hero Panel ───────── */

function HeroPanel() {
  return (
    <div className="relative">
      <div className="absolute -inset-6 -z-0 rounded-[3rem] bg-gradient-to-br from-brand-gold/20 via-white to-brand-sky/10 blur-2xl" />
      <div className="relative rounded-[2rem] border border-brand-sky/10 bg-white p-6 shadow-[0_40px_80px_-40px_rgba(10,37,64,0.25)]">
        <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.18em]">
          <span className="text-brand-sky/60">Govt lab report · DWSD Jharkhand · 09 Jun 2026</span>
          <span className="flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[10px] text-emerald-700">
            <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" /> Pass · 14/14
          </span>
        </div>
        <div className="mt-5 space-y-3">
          {[
            { label: 'TDS',       v: '653',  after: '47.0',  unit: 'mg/L' },
            { label: 'Fluoride',  v: '2.7',  after: '0.12',  unit: 'mg/L' },
            { label: 'Hardness',  v: '626',  after: '42.0',  unit: 'mg/L' },
            { label: 'Coliform',  v: 'Present', after: 'Absent', unit: '' },
            { label: 'pH',        v: '7.9',  after: '7.0',   unit: '' },
          ].map((r) => (
            <div key={r.label} className="flex items-center justify-between rounded-xl border border-brand-sky/10 bg-gradient-to-r from-jal-50/70 to-white px-4 py-3">
              <span className="text-sm font-medium text-brand-sky">{r.label}</span>
              <div className="flex items-center gap-2 font-mono text-sm">
                <span className="rounded bg-red-100 px-2 py-0.5 text-red-700">{r.v} {r.unit}</span>
                <span className="text-brand-sky/30">→</span>
                <span className="rounded bg-emerald-100 px-2 py-0.5 text-emerald-700">{r.after} {r.unit}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5 flex items-center justify-between border-t border-brand-sky/10 pt-4">
          <span className="text-xs text-brand-sky/60">Angrapatra Mines, Ward-7 Dhanbad</span>
          <span className="font-mono text-xs text-brand-sky/60">IS 10500:2012</span>
        </div>
      </div>
    </div>
  );
}

/* ───────── Icons ───────── */

function IconCheck()  { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>; }
function IconShield() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5l-8-3Z"/></svg>; }
function IconCoin()   { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="9"/><path d="M9 9h6M9 13h6M12 6v12"/></svg>; }
function IconModule() { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>; }
function IconFlag()   { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 4v17"/><path d="M4 4h13l-2 4 2 4H4"/></svg>; }
function IconPin()    { return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 22s7-6 7-12a7 7 0 1 0-14 0c0 6 7 12 7 12Z"/><circle cx="12" cy="10" r="2.5"/></svg>; }
