import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';

const certs = [
  { k: 'Registered Entity',  v: 'Param Innovations Pvt. Ltd.' },
  { k: 'Recognition',        v: 'DPIIT-recognised Startup' },
  { k: 'MSME UDYAM',         v: 'UDYAM-JH-04-0066916' },
  { k: 'Provisional Patent', v: '202531084570' },
  { k: 'Patent Agent',       v: 'P.S. Davar & Co. · Dr. Indira Banerjee (IN/PA-211)' },
  { k: 'Founder',            v: 'Aditya Prakash' },
  { k: 'Headquarters',       v: 'Dhanbad, Jharkhand, India' },
];

const milestones = [
  { date: 'Sep 2025',  title: 'Provisional patent filed',      body: 'Application 202531084570 establishes priority date for the integrated six-stage treatment sequence.' },
  { date: 'Sep 2025',  title: 'SISFS grant secured',           body: '₹9 Lakh from ACIC IIT(ISM) Dhanbad under the Startup India Seed Fund Scheme.' },
  { date: 'Early 2026', title: 'Ward-7 Water ATM commissioned',body: '10,000 LPD capacity, actual coal-mine pit water feed, serving ~150 households at ₹0.50 per litre.' },
  { date: 'Early 2026', title: 'DMC Technical Sanction',       body: 'Dhanbad Municipal Corporation sanctions 5 Drinking Water Kiosk stations; ~200 ATMs planned, ₹45 Cr total project.' },
  { date: '24 Apr 2026', title: 'SPM NIWAS evaluation',         body: 'Formal presentation to SPM NIWAS evaluation panel — EOI Sr. No. 20, W-000301.' },
];

const partners = [
  { name: 'ACIC IIT(ISM) Dhanbad Foundation', role: 'Incubator and implementation partner for the DMC deployment rollout.' },
  { name: 'Dhanbad Municipal Corporation',     role: 'Technical Sanction issued for 5 Drinking Water Kiosk stations under ₹45 Cr project.' },
  { name: 'P. S. Davar & Company',             role: 'Patent agent of record; working with Dr. Indira Banerjee (IN/PA-211) on the complete specification.' },
  { name: 'Startup India Seed Fund Scheme',    role: '₹9 Lakh grant disbursed via ACIC IIT(ISM) Dhanbad.' },
];

const values = [
  { k: 'Solve in the open',   v: 'We build in places others overlook. Dhanbad is our home — and every technology we ship has to work here first.' },
  { k: 'Proof over pitch',    v: 'A NABL report, a sanctioned contract and an operational pilot are worth a thousand decks. We lead with evidence.' },
  { k: 'Indigenous by design', v: 'Wherever a stage can be sourced domestically, it is. Imports are the exception, not the default — and we work to stretch every imported input as far as it can go.' },
  { k: 'Dignity of the last mile', v: 'A technology that cannot reach the household that needs it is unfinished engineering. The ATM kiosk is the thesis.' },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Param Innovations Pvt. Ltd."
        subtitle="A DPIIT-recognised deep-tech startup from Dhanbad, Jharkhand. Param Jal is our water-technology wing — a sibling initiative to Param AI under the same parent company."
        sanskrit="जगतं जयतु · May the world prevail."
      />

      {/* Story */}
      <section className="container-x py-20">
        <div className="grid gap-16 md:grid-cols-[1.4fr_1fr]">
          <div>
            <span className="eyebrow">Our Story</span>
            <h2 className="headline-deco mt-4 font-display text-4xl font-semibold text-brand-sky md:text-5xl">
              Founded in the coal belt, for the coal belt.
            </h2>
            <div className="prose prose-lg mt-8 max-w-none text-brand-sky/85">
              <p>
                Param Innovations was founded in Dhanbad — the heart of India&apos;s coal
                belt — because the problems we saw up close were the ones being ignored.
                Acidic pit water spilling from working mines. Groundwater that slowly
                poisoned the villages sitting on top of the country&apos;s energy reserves.
              </p>
              <p>
                We started with a simple question: <em>can decentralised, low-cost water
                treatment meet BIS drinking-water standards on actual coal-mine feed, at
                a price the last-mile consumer can afford?</em>
              </p>
              <p>
                Param Jal is our answer. A six-stage modular system, running today,
                converting pit water at pH 2.8 into potable water at ₹0.50 per litre.
              </p>
              <p>
                Under the same parent company, <strong>Param AI</strong> builds an
                India-first career-intelligence platform. Different domain — same principle:
                solve problems that matter, for places that get overlooked.
              </p>
            </div>
          </div>

          <aside className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold">Corporate Details</h3>
            {certs.map((c) => (
              <div key={c.k} className="rounded-xl border border-brand-sky/10 bg-white p-4 shadow-soft">
                <div className="text-xs uppercase tracking-[0.14em] text-brand-sky/60">{c.k}</div>
                <div className="mt-1 font-medium text-brand-sky">{c.v}</div>
              </div>
            ))}
          </aside>
        </div>
      </section>

      {/* Founder */}
      <section className="border-y border-brand-sky/10 bg-brand-sky text-white">
        <div className="container-x py-20">
          <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:items-center">
            <div className="mx-auto">
              <div className="relative">
                <div className="absolute -inset-4 rounded-full bg-brand-gold/20 blur-2xl" />
                <div className="relative flex size-48 items-center justify-center rounded-full bg-gradient-to-br from-brand-gold to-brand-goldsoft font-display text-6xl font-semibold text-brand-sky shadow-xl md:size-56">
                  AP
                </div>
              </div>
            </div>
            <div>
              <span className="eyebrow-dark">Founder</span>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-white md:text-5xl">
                Aditya Prakash
              </h2>
              <p className="mt-5 text-lg text-jal-100">
                Founder of Param Innovations Pvt. Ltd. Based in Dhanbad. Focused on
                building deep-tech that earns its place in the field — through
                accredited validation, sanctioned deployments, and measurable public-
                health outcomes.
              </p>
              <p className="mt-4 text-lg text-jal-100">
                Under his leadership, the company has secured DPIIT recognition, a SISFS
                grant from ACIC IIT(ISM) Dhanbad, a provisional patent on the Param Jal
                process, and a ₹45 Crore Technical Sanction pipeline with Dhanbad
                Municipal Corporation.
              </p>
              <div className="mt-6 flex gap-4 text-sm text-jal-100">
                <a href="mailto:aditdhn@gmail.com" className="link-underline">aditdhn@gmail.com</a>
                <span className="opacity-40">·</span>
                <a href="mailto:aps@paramai.in" className="link-underline">aps@paramai.in</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container-x py-20">
        <span className="eyebrow">Operating Principles</span>
        <h2 className="headline-deco mt-4 font-display text-4xl font-semibold text-brand-sky md:text-5xl">
          What we will and will not do.
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {values.map((v) => (
            <div key={v.k} className="rounded-2xl border border-brand-sky/10 bg-white p-7 shadow-soft">
              <h3 className="font-display text-xl font-semibold text-brand-sky">{v.k}</h3>
              <p className="mt-2 text-brand-sky/75">{v.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Milestones */}
      <section className="border-y border-brand-sky/10 bg-jal-50/40">
        <div className="container-x py-20">
          <span className="eyebrow">Milestones</span>
          <h2 className="headline-deco mt-4 font-display text-4xl font-semibold text-brand-sky md:text-5xl">
            From prototype to operational pilot.
          </h2>
          <ol className="mt-12 relative border-l-2 border-brand-gold/40 pl-8">
            {milestones.map((m) => (
              <li key={m.date} className="mb-10 last:mb-0">
                <span className="absolute -left-[9px] mt-1.5 size-4 rounded-full border-2 border-brand-gold bg-white" />
                <div className="font-mono text-xs font-semibold uppercase tracking-wider text-brand-gold">{m.date}</div>
                <h3 className="mt-1 font-display text-xl font-semibold text-brand-sky">{m.title}</h3>
                <p className="mt-1 text-brand-sky/75">{m.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Partners */}
      <section className="container-x py-20">
        <span className="eyebrow">Partners & Affiliations</span>
        <h2 className="headline-deco mt-4 font-display text-4xl font-semibold text-brand-sky md:text-5xl">
          Built with institutional backing.
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {partners.map((p) => (
            <div key={p.name} className="rounded-2xl border border-brand-sky/10 bg-white p-6 shadow-soft">
              <div className="size-10 rounded-lg bg-brand-sky/5 flex items-center justify-center">
                <span className="font-display text-lg text-brand-sky">{p.name.slice(0, 1)}</span>
              </div>
              <div className="mt-4 font-semibold text-brand-sky">{p.name}</div>
              <p className="mt-2 text-sm text-brand-sky/75">{p.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-x pb-20">
        <div className="flex flex-wrap items-center justify-between gap-6 rounded-3xl bg-gradient-to-br from-brand-sky to-brand-skysoft p-10 text-white shadow-soft md:p-12">
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-brand-gold">Let&apos;s work together</div>
            <h3 className="mt-2 font-display text-3xl font-semibold md:text-4xl">Institutional enquiry?</h3>
            <p className="mt-2 text-jal-100">EOI reference · Sr. No. 20, W-000301</p>
          </div>
          <Link to="/contact" className="btn-gold">Contact us →</Link>
        </div>
      </section>
    </>
  );
}
