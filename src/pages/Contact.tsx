import { FormEvent, useState } from 'react';
import PageHero from '../components/PageHero';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sent'>('idle');

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Param Jal enquiry — ${data.get('org') || 'Website'}`);
    const body = encodeURIComponent(
      `Name: ${data.get('name')}\nOrganisation: ${data.get('org')}\nEmail: ${data.get('email')}\nPhone: ${data.get('phone') || '-'}\nEnquiry type: ${data.get('type') || '-'}\n\n${data.get('message')}`
    );
    window.location.href = `mailto:contact@paraminnovations.in?subject=${subject}&body=${body}`;
    setStatus('sent');
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's get water running."
        subtitle="Municipal bodies, mining corporations, Jal Jeevan Mission implementation partners, institutional buyers, and government evaluators — reach us directly."
        sanskrit="सम्भाषणम् आरभ्यताम् · Let the conversation begin."
      />

      <section className="container-x py-20">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
          {/* Form */}
          <form onSubmit={onSubmit} className="rounded-2xl border border-brand-sky/10 bg-white p-8 shadow-soft md:p-10">
            <h2 className="font-display text-2xl font-semibold text-brand-sky">Send an enquiry</h2>
            <p className="mt-2 text-sm text-brand-sky/70">This opens your email client with the message pre-filled so you can review before sending.</p>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <Field name="name" label="Your name" required />
              <Field name="org" label="Organisation" required />
              <Field name="email" label="Email" type="email" required />
              <Field name="phone" label="Phone (optional)" />
            </div>
            <div className="mt-5">
              <label className="block text-sm font-semibold text-brand-sky">Enquiry type</label>
              <select name="type" className="mt-2 w-full rounded-lg border border-brand-sky/15 bg-white p-3 text-sm shadow-sm focus:border-brand-sky focus:outline-none focus:ring-2 focus:ring-brand-gold/30">
                <option>Municipal / Government deployment</option>
                <option>Mining corporation partnership</option>
                <option>Jal Jeevan Mission / AMRUT 2.0</option>
                <option>Technology partnership / CSIR / IIT</option>
                <option>Media / press</option>
                <option>Other</option>
              </select>
            </div>
            <div className="mt-5">
              <label className="block text-sm font-semibold text-brand-sky">How can we help?</label>
              <textarea
                name="message"
                required
                rows={5}
                className="mt-2 w-full rounded-lg border border-brand-sky/15 bg-white p-3 text-sm shadow-sm focus:border-brand-sky focus:outline-none focus:ring-2 focus:ring-brand-gold/30"
                placeholder="Tell us about the site, volume required, and timeline."
              />
            </div>
            <button type="submit" className="btn-primary mt-7">Send enquiry →</button>
            {status === 'sent' && (
              <p className="mt-4 text-sm text-emerald-700">Your email client should open shortly with the prefilled message.</p>
            )}
          </form>

          {/* Contact details */}
          <aside className="space-y-4">
            <Block title="Direct email">
              <a href="mailto:contact@paraminnovations.in" className="text-brand-sky hover:text-brand-ink">contact@paraminnovations.in</a>
              <div className="mt-2 text-sm text-brand-sky/60">Founder · <a href="mailto:aditdhn@gmail.com" className="link-underline">aditdhn@gmail.com</a></div>
            </Block>
            <Block title="Registered office">
              Param Innovations Pvt. Ltd.<br />
              Dhanbad, Jharkhand, India
            </Block>
            <Block title="Response SLA">
              <ul className="space-y-1.5 text-sm text-brand-sky/80">
                <li>· Government / EOI references: <strong>within 24 hrs</strong></li>
                <li>· Commercial enquiries: <strong>within 48 hrs</strong></li>
                <li>· Media / press: <strong>within 72 hrs</strong></li>
              </ul>
            </Block>
            <Block title="For government & institutional enquiries">
              <p className="text-sm text-brand-sky/80">
                Reference <strong>EOI Sr. No. 20, W-000301</strong> (SPM NIWAS submission)
                in the subject line for priority routing.
              </p>
            </Block>
            <Block title="Sibling brand">
              <a href="#" className="text-brand-sky hover:text-brand-ink">Param AI · career intelligence platform</a>
              <p className="mt-1 text-sm text-brand-sky/60">Same parent company. Different domain.</p>
            </Block>
          </aside>
        </div>
      </section>
    </>
  );
}

function Field({ name, label, type = 'text', required }: { name: string; label: string; type?: string; required?: boolean }) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-brand-sky">{label}{required && <span className="text-red-500"> *</span>}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-lg border border-brand-sky/15 bg-white p-3 text-sm shadow-sm focus:border-brand-sky focus:outline-none focus:ring-2 focus:ring-brand-gold/30"
      />
    </label>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-brand-sky/10 bg-white p-6 shadow-soft">
      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold">{title}</div>
      <div className="mt-3 text-brand-sky">{children}</div>
    </div>
  );
}
