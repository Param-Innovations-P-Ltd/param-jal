import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';

const sections: { group: string; items: { q: string; a: string }[] }[] = [
  {
    group: 'Technology',
    items: [
      { q: 'What exactly does Param Jal treat?', a: 'Acidic coal mine pit water (pH 2–4) is our primary feed. The same six-stage process also handles high-TDS groundwater and surface water at municipal scale, validated across all three input chemistries.' },
      { q: 'How is the process different from a conventional RO + ETP?', a: 'Conventional plants are centralised and assume benign feed. Param Jal is decentralised, skid-mounted, and purpose-built for acid-feed water with a specific stage sequence (coagulation → neutralisation → precipitation → chlorination → filtration → RO+UV) that protects downstream elements and extends RO membrane life 2–3×.' },
      { q: 'Is the output actually safe to drink?', a: 'Yes. A NABL-accredited laboratory verified all 30 parameters of BIS IS 10500:2012 are met on treated water drawn from actual coal mine pit water. The full report is available on request.' },
      { q: 'Why RO at the end rather than upfront?', a: 'RO membranes perform well only on already-clean feed. Placing RO last — after coagulation, neutralisation, heavy-metal precipitation, chlorination and sand-carbon filtration — is what extends replacement cycles from 2–3 years to 5–7 years.' },
    ],
  },
  {
    group: 'Operations & Environment',
    items: [
      { q: 'What happens to the heavy-metal sludge?', a: 'It is co-processed with mine overburden at the source mine under the mine\u2019s existing Environmental Clearance, per CPCB guidelines. It is never released to the open environment.' },
      { q: 'What is the energy profile?', a: 'Param Jal is gravity-assisted wherever possible. Pumping and RO are the dominant loads. Systems are solar-ready — the skid architecture supports a hybrid grid-plus-solar power package without redesign.' },
      { q: 'What is the operator skill required?', a: 'A single technician spending 1–2 hours per day for routine chemical top-up, filter backwash monitoring, and log-keeping. No full-time chemist is needed once the system is commissioned and dialled in.' },
      { q: 'What is the planned maintenance cycle?', a: 'Backwash every 24–72 hours depending on load. RO pre-filter replacement every 3–6 months. RO membrane replacement every 5–7 years with Param Jal pre-treatment, versus 2–3 years without.' },
    ],
  },
  {
    group: 'Commercial & Compliance',
    items: [
      { q: 'What is the capex and opex?', a: 'Capex is ₹8–12 Lakh per 1,000 LPD unit — all inclusive, skid-mounted. Opex is approximately ₹1.20 per 1,000 litres treated (chemicals + electricity + labour). The end consumer pays ₹0.50 per litre. Payback is 18–24 months at 60% utilisation.' },
      { q: 'Why is the patent only provisional, not complete?', a: 'Provisional 202531084570 was filed in September 2025 to secure priority date. Complete specification — with expanded claims — is due September 2026. This is standard patent strategy in India.' },
      { q: 'What government funding has Param Innovations received?', a: '₹9 Lakh SISFS grant from ACIC IIT(ISM) Dhanbad under the Startup India Seed Fund Scheme. Beyond that, the company is self-funded.' },
      { q: 'How do you validate with Coal India or BCCL?', a: 'The Ward-7 pilot draws from BCCL-adjacent mine water. Formal MoU discussions are active with BCCL, CCL and ECL. Specifics are shareable on request under appropriate NDAs.' },
    ],
  },
  {
    group: 'Strategy & Scale',
    items: [
      { q: 'How does Param Jal contribute to Atmanirbharta?', a: 'Five of six stages are 100% Indian-sourceable. Pre-treatment extends RO membrane life 2–3×, cutting per-unit imports by roughly 60%. The process is membrane-chemistry agnostic — ready to adopt indigenous TFC membrane (e.g., CSIR-CSMCRI) the day it scales. Param Jal fills the PLI white space for water treatment membranes.' },
      { q: 'Is this competing with indigenous membrane R&D?', a: 'No. Indigenous membrane R&D is a 10-year programme. Param Jal reduces import exposure today while that R&D matures. These are complementary, not competing.' },
      { q: 'How scalable is this?', a: 'Modular skids from 50,000 LPD to 5,00,000 LPD. India has 600+ active coal mine sites. DMC alone plans ~200 ATMs. Jal Jeevan Mission and AMRUT 2.0 both have aligned mandates.' },
      { q: 'What are you asking for from government evaluators?', a: 'Endorsement that opens doors to Jal Jeevan Mission, AMRUT 2.0, and Coal India tender pipelines. We are not asking for equity or additional grant at this stage — credibility is the unlock.' },
    ],
  },
];

export default function FAQ() {
  return (
    <>
      <SEO
        title="FAQ"
        description="Answers to the most common questions about Param Jal's six-stage treatment, operations, environmental management, unit economics, and strategic positioning."
        path="/faq"
      />
      <PageHero
        eyebrow="Frequently Asked Questions"
        title="The diligence questions, answered plainly."
        subtitle="Twenty most-common questions from evaluators, municipal buyers, coal-sector operators, investors and technical reviewers — grouped by topic."
        sanskrit="स्पष्टतायाम् विश्वासः · Trust lives in clarity."
      />

      <section className="container-x py-16">
        <div className="grid gap-12 lg:grid-cols-[260px_1fr]">
          {/* Group nav */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold">Jump to</div>
            <nav className="mt-4 space-y-1">
              {sections.map((s) => (
                <a key={s.group} href={`#${slug(s.group)}`} className="block rounded-lg px-3 py-2 text-sm font-medium text-brand-sky/80 hover:bg-brand-sky/5 hover:text-brand-sky">
                  {s.group}
                </a>
              ))}
            </nav>
          </aside>

          {/* Q&A */}
          <div className="space-y-14">
            {sections.map((s) => (
              <section key={s.group} id={slug(s.group)}>
                <div className="flex items-center gap-3">
                  <span className="rule-gold" />
                  <h2 className="font-display text-2xl font-semibold text-brand-sky md:text-3xl">{s.group}</h2>
                </div>
                <div className="mt-6 space-y-3">
                  {s.items.map((it, i) => (
                    <details key={i} className="group rounded-2xl border border-brand-sky/10 bg-white p-6 shadow-soft open:shadow-[0_24px_48px_-20px_rgba(10,37,64,0.18)]">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-medium text-brand-sky">
                        {it.q}
                        <span className="grid size-8 shrink-0 place-items-center rounded-full bg-brand-gold/15 text-brand-gold transition group-open:rotate-45">+</span>
                      </summary>
                      <p className="mt-4 text-brand-sky/80">{it.a}</p>
                    </details>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      {/* Still stuck */}
      <section className="container-x pb-20">
        <div className="flex flex-wrap items-center justify-between gap-6 rounded-3xl bg-gradient-to-br from-brand-sky to-brand-skysoft p-10 text-white shadow-soft md:p-12">
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-brand-gold">Didn&apos;t find your question?</div>
            <h3 className="mt-2 font-display text-3xl font-semibold md:text-4xl">We&apos;ll get you an answer in 48 hours.</h3>
          </div>
          <Link to="/contact" className="btn-gold">Ask us directly →</Link>
        </div>
      </section>
    </>
  );
}

function slug(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-');
}
