import PageHero from '../components/PageHero';

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Param Innovations Pvt. Ltd."
        subtitle="A DPIIT-recognised deep-tech startup from Dhanbad, Jharkhand. Param Jal is our water technology division — a sibling initiative to Param AI under the same parent company."
      />

      {/* Story */}
      <section className="container-x py-20">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr]">
          <div className="prose prose-lg max-w-none text-jal-800">
            <p>
              Param Innovations was founded in Dhanbad — the heart of India&apos;s coal belt — because the problems we saw up close were the ones being ignored. Acidic pit water spilling from working mines. Groundwater that slowly poisoned the villages that sit on top of the country&apos;s energy reserves.
            </p>
            <p>
              We started with a simple question: can decentralised, low-cost water treatment meet BIS drinking-water standards on actual coal-mine feed, at a price the last-mile consumer can afford? Param Jal is our answer. A six-stage modular system, running today, converting pit water at pH 2.8 into potable water at ₹0.50 per litre.
            </p>
            <p>
              Under the same parent company, <strong>Param AI</strong> builds an India-first career intelligence platform. Different domain, same principle: solve problems that matter, for places that get overlooked.
            </p>
          </div>

          {/* Cert block */}
          <aside className="space-y-3">
            {certs.map((c) => (
              <div key={c.k} className="rounded-xl border border-jal-100 bg-white p-4">
                <div className="text-xs uppercase tracking-wider text-jal-500">{c.k}</div>
                <div className="mt-1 font-medium text-jal-900">{c.v}</div>
              </div>
            ))}
          </aside>
        </div>
      </section>

      {/* Milestones */}
      <section className="border-t border-jal-100 bg-jal-50/60">
        <div className="container-x py-20">
          <span className="eyebrow">Milestones</span>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">From prototype to operational pilot.</h2>
          <ol className="mt-10 relative border-l-2 border-jal-200 pl-8">
            {milestones.map((m) => (
              <li key={m.date} className="mb-10 last:mb-0">
                <span className="absolute -left-[9px] mt-1.5 size-4 rounded-full border-2 border-jal-600 bg-white" />
                <div className="text-sm font-mono text-jal-600">{m.date}</div>
                <h3 className="mt-1 text-lg font-semibold text-jal-950">{m.title}</h3>
                <p className="mt-1 text-jal-700">{m.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Partners */}
      <section className="container-x py-20">
        <span className="eyebrow">Partners & Affiliations</span>
        <h2 className="mt-3 text-3xl font-bold md:text-4xl">Built with institutional backing.</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {partners.map((p) => (
            <div key={p.name} className="rounded-2xl border border-jal-100 bg-white p-6">
              <div className="font-semibold text-jal-900">{p.name}</div>
              <p className="mt-2 text-sm text-jal-700">{p.role}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

const certs = [
  { k: 'Registered Entity', v: 'Param Innovations Pvt. Ltd.' },
  { k: 'Recognition', v: 'DPIIT-recognised Startup' },
  { k: 'MSME UDYAM', v: 'UDYAM-JH-04-0066916' },
  { k: 'Provisional Patent', v: '202531084570' },
  { k: 'Patent Agent', v: 'P.S. Davar & Co. · Dr. Indira Banerjee (IN/PA-211)' },
  { k: 'Founder', v: 'Aditya Prakash' },
  { k: 'Headquarters', v: 'Dhanbad, Jharkhand, India' },
];

const milestones = [
  { date: 'Sep 2025', title: 'Provisional patent filed', body: 'Application 202531084570 establishes priority date for the integrated six-stage treatment sequence.' },
  { date: 'Sep 2025', title: 'SISFS grant secured', body: '₹9 Lakh from ACIC IIT(ISM) Dhanbad under the Startup India Seed Fund Scheme.' },
  { date: 'Early 2026', title: 'Ward-7 Water ATM commissioned', body: '10,000 LPD capacity, actual coal-mine pit water feed, serving ~150 households at ₹0.50 per litre.' },
  { date: 'Early 2026', title: 'DMC Technical Sanction', body: 'Dhanbad Municipal Corporation sanctions 5 Drinking Water Kiosk stations; ~200 ATMs planned, ₹45 Cr total project.' },
  { date: '24 Apr 2026', title: 'SPM NIWAS evaluation', body: 'Formal presentation to SPM NIWAS evaluation panel — EOI Sr. No. 20, W-000301.' },
];

const partners = [
  { name: 'ACIC IIT(ISM) Dhanbad Foundation', role: 'Incubator and implementation partner for the DMC deployment rollout.' },
  { name: 'Dhanbad Municipal Corporation (DMC)', role: 'Technical Sanction issued for 5 Drinking Water Kiosk stations under ₹45 Cr project.' },
  { name: 'P. S. Davar & Company', role: 'Patent agent of record; working with Dr. Indira Banerjee (IN/PA-211) on the complete specification.' },
];
