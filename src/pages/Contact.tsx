import { FormEvent, useState } from 'react';
import PageHero from '../components/PageHero';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sent'>('idle');

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Param Jal enquiry — ${data.get('org') || 'Website'}`);
    const body = encodeURIComponent(
      `Name: ${data.get('name')}\nOrganisation: ${data.get('org')}\nEmail: ${data.get('email')}\nPhone: ${data.get('phone') || '-'}\n\n${data.get('message')}`
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
      />

      <section className="container-x py-20">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
          {/* Form */}
          <form onSubmit={onSubmit} className="rounded-2xl border border-jal-100 bg-white p-8 shadow-sm">
            <div className="grid gap-5 md:grid-cols-2">
              <Field name="name" label="Your name" required />
              <Field name="org" label="Organisation" required />
              <Field name="email" label="Email" type="email" required />
              <Field name="phone" label="Phone (optional)" />
            </div>
            <div className="mt-5">
              <label className="block text-sm font-semibold text-jal-900">How can we help?</label>
              <textarea
                name="message"
                required
                rows={5}
                className="mt-2 w-full rounded-lg border border-jal-200 bg-white p-3 text-sm shadow-sm focus:border-jal-500 focus:outline-none focus:ring-2 focus:ring-jal-200"
                placeholder="Tell us about the site, volume required, and timeline."
              />
            </div>
            <button type="submit" className="btn-primary mt-6">Send enquiry →</button>
            {status === 'sent' && (
              <p className="mt-4 text-sm text-emerald-700">Your email client should open shortly with the prefilled message.</p>
            )}
          </form>

          {/* Contact details */}
          <aside className="space-y-5">
            <Block title="Email">
              <a href="mailto:contact@paraminnovations.in" className="text-jal-700 hover:text-jal-900">contact@paraminnovations.in</a>
            </Block>
            <Block title="Registered office">
              Param Innovations Pvt. Ltd.<br />
              Dhanbad, Jharkhand, India
            </Block>
            <Block title="For government &amp; institutional enquiries">
              Reference: EOI Sr. No. 20, W-000301 (SPM NIWAS submission). Please mention EOI reference for priority routing.
            </Block>
            <Block title="Related">
              Sibling brand: <a href="#" className="text-jal-700 hover:text-jal-900">Param AI — career intelligence platform</a>
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
      <span className="text-sm font-semibold text-jal-900">{label}{required && <span className="text-red-500"> *</span>}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-lg border border-jal-200 bg-white p-3 text-sm shadow-sm focus:border-jal-500 focus:outline-none focus:ring-2 focus:ring-jal-200"
      />
    </label>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-jal-100 bg-white p-6">
      <div className="text-xs font-semibold uppercase tracking-wider text-jal-500">{title}</div>
      <div className="mt-2 text-jal-800">{children}</div>
    </div>
  );
}
