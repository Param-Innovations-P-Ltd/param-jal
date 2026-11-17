import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';

const CONCLAVE_URL = 'https://csrconclave.iitism.ac.in/#projects';
const PROPOSAL_EMAIL = 'centenary@iitism.ac.in';

const faqs = [
  {
    q: 'What is the Param Jal CSR project at the IIT (ISM) Dhanbad CSR Conclave?',
    a: 'PARAM JAL – Mine-Pit Water Purification (project PRJ-02) is one of four CSR projects showcased at Shatabdi Samriddhi 2026, the CSR Conclave of IIT (ISM) Dhanbad. It transforms unused mine-pit water into safe, affordable drinking water for mining communities.',
  },
  {
    q: 'How much CSR support does the Param Jal project need?',
    a: 'Sponsorship packages range from ₹5 lakh to ₹25 lakh. Depending on the package, the project serves an estimated 550 to 2,700 people per year.',
  },
  {
    q: 'Which Schedule VII category does the project fall under?',
    a: 'Schedule VII, Item (i) – Safe Drinking Water.',
  },
  {
    q: 'Who is the project proponent?',
    a: 'Param Innovations Pvt. Ltd., Dhanbad, Jharkhand, the company behind Param Jal.',
  },
  {
    q: 'When and where is the CSR Conclave?',
    a: 'Saturday, 5 December 2026, 10:00 AM to 5:00 PM IST, at GJLT, IIT (ISM) Dhanbad, Jharkhand 826004. The project is part of the "CSR–Supported Projects @ IIT (ISM) Dhanbad" showcase session (2:20 PM to 4:00 PM IST).',
  },
  {
    q: 'How can my company fund or learn more about the project?',
    a: `Write to ${PROPOSAL_EMAIL} to request the full proposal, or contact Param Jal directly at aps@paramjal.in. You can also use "Express interest" on the Conclave website.`,
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Event',
      '@id': 'https://paramjal.in/csr-conclave#event',
      name: 'Shatabdi Samriddhi 2026 – CSR Conclave, IIT (ISM) Dhanbad',
      description:
        'CSR Conclave marking the centenary (1926–2026) of IIT (ISM) Dhanbad, bringing together CSR leaders, PSU representatives, government officials and academicians. Showcases CSR-supported projects including PARAM JAL – Mine-Pit Water Purification.',
      url: 'https://csrconclave.iitism.ac.in/',
      startDate: '2026-12-05T10:00:00+05:30',
      endDate: '2026-12-05T17:00:00+05:30',
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      inLanguage: 'en-IN',
      location: {
        '@type': 'Place',
        name: 'GJLT, IIT (ISM) Dhanbad',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Dhanbad',
          addressRegion: 'Jharkhand',
          postalCode: '826004',
          addressCountry: 'IN',
        },
      },
      organizer: {
        '@type': 'CollegeOrUniversity',
        name: 'Indian Institute of Technology (Indian School of Mines) Dhanbad',
        url: 'https://www.iitism.ac.in/',
      },
    },
    {
      '@type': 'WebPage',
      '@id': 'https://paramjal.in/csr-conclave',
      url: 'https://paramjal.in/csr-conclave',
      name: 'Param Jal at the IIT (ISM) Dhanbad CSR Conclave 2026',
      about: { '@id': 'https://paramjal.in/csr-conclave#event' },
      inLanguage: 'en-IN',
      isPartOf: { '@type': 'WebSite', name: 'Param Jal', url: 'https://paramjal.in' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://paramjal.in/' },
        { '@type': 'ListItem', position: 2, name: 'CSR Conclave 2026', item: 'https://paramjal.in/csr-conclave' },
      ],
    },
  ],
};

const facts = [
  { label: 'Project', value: 'PRJ-02 · Mine-Pit Water Purification' },
  { label: 'Support required', value: '₹5–25 lakh sponsorship packages' },
  { label: 'Beneficiaries', value: '550–2,700 people per year' },
  { label: 'Schedule VII', value: 'Item (i) – Safe Drinking Water' },
  { label: 'Proponent', value: 'Param Innovations Pvt. Ltd., Dhanbad' },
  { label: 'Showcase', value: '5 Dec 2026 · GJLT, IIT (ISM) Dhanbad' },
];

export default function CSRConclave() {
  return (
    <>
      <SEO
        title="CSR Conclave 2026 · Fund Safe Drinking Water from Mine-Pit Water"
        description="Param Jal is a showcased CSR project at Shatabdi Samriddhi 2026, the IIT (ISM) Dhanbad CSR Conclave (5 Dec 2026). Sponsor safe drinking water from mine-pit water: ₹5–25 lakh packages, Schedule VII item (i)."
        path="/csr-conclave"
      />
      <Helmet>
        <meta
          name="keywords"
          content="Param Jal CSR, CSR project safe drinking water, IIT ISM Dhanbad CSR Conclave, Shatabdi Samriddhi 2026, Schedule VII safe drinking water, mine pit water purification, CSR funding Jharkhand"
        />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <PageHero
        eyebrow="Showcased · Shatabdi Samriddhi 2026"
        title="Param Jal at the IIT (ISM) Dhanbad CSR Conclave."
        subtitle="Param Jal is a showcased CSR project at the centenary CSR Conclave of IIT (ISM) Dhanbad on 5 December 2026. Companies and PSUs can sponsor safe drinking water for mining communities, with packages from ₹5 lakh to ₹25 lakh."
        sanskrit="जलं जीवनम् · Water is life."
      />

      <section className="container-x py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="eyebrow">CSR Project PRJ-02</span>
            <h2 className="headline-deco mt-4 font-display text-4xl font-semibold text-brand-sky">
              Mine-Pit Water Purification
            </h2>
            <p className="mt-6 text-lg text-brand-sky/75">
              Transforming unused mine-pit water into safe, affordable drinking water,
              addressing water scarcity in mining communities. The same six-stage
              treatment is live at Ward-7, Dhanbad, and the treated water has been
              confirmed compliant with IS 10500:2012 by a Government of Jharkhand
              laboratory.
            </p>
            <p className="mt-4 text-lg text-brand-sky/75">
              The Conclave brings together CSR leaders, PSU representatives, government
              officials and academicians to turn dialogue into funded partnerships. Param
              Jal is one of four CSR projects in its showcase session.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={CONCLAVE_URL} target="_blank" rel="noreferrer" className="btn-primary">
                Express interest on the Conclave site →
              </a>
              <a
                href={`mailto:${PROPOSAL_EMAIL}?subject=Request%20for%20full%20proposal%20-%20PRJ-02%20PARAM%20JAL`}
                className="btn-gold"
              >
                Request the full proposal
              </a>
            </div>
          </div>

          <dl className="grid gap-px overflow-hidden rounded-2xl border border-brand-sky/10 bg-brand-sky/10 shadow-soft">
            {facts.map((f) => (
              <div key={f.label} className="bg-white px-6 py-4">
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-gold">{f.label}</dt>
                <dd className="mt-1 font-display text-lg text-brand-sky">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-y border-brand-sky/10 bg-jal-50/60">
        <div className="container-x py-16">
          <span className="eyebrow">About the event</span>
          <h2 className="headline-deco mt-4 font-display text-3xl font-semibold text-brand-sky md:text-4xl">
            Shatabdi Samriddhi 2026 · CSR Conclave
          </h2>
          <p className="mt-6 max-w-3xl text-lg text-brand-sky/75">
            Marking 100 years of IIT (ISM) Dhanbad (1926–2026), the Conclave takes place on{' '}
            <strong>Saturday, 5 December 2026, 10:00 AM to 5:00 PM IST</strong> at GJLT,
            IIT (ISM) Dhanbad, Jharkhand 826004. Param Jal is presented in the session
            "CSR–Supported Projects @ IIT (ISM) Dhanbad" (2:20 PM to 4:00 PM IST).
          </p>
          <p className="mt-4 text-sm text-brand-sky/60">
            Event details are from the organiser website, csrconclave.iitism.ac.in.
          </p>
        </div>
      </section>

      <section className="container-x py-16">
        <span className="eyebrow">Questions</span>
        <h2 className="headline-deco mt-4 font-display text-3xl font-semibold text-brand-sky md:text-4xl">
          Sponsoring Param Jal through CSR
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {faqs.map((f) => (
            <article key={f.q} className="rounded-2xl border border-brand-sky/10 bg-white p-6 shadow-soft">
              <h3 className="font-display text-xl text-brand-sky">{f.q}</h3>
              <p className="mt-3 text-brand-sky/75">{f.a}</p>
            </article>
          ))}
        </div>
        <p className="mt-10 text-brand-sky/75">
          Want to see the evidence first? Read the{' '}
          <Link to="/impact" className="link-underline font-medium text-brand-sky">field validation</Link>{' '}
          or the{' '}
          <Link to="/technology" className="link-underline font-medium text-brand-sky">six-stage process</Link>, or{' '}
          <Link to="/contact" className="link-underline font-medium text-brand-sky">contact us</Link>.
        </p>
      </section>
    </>
  );
}
