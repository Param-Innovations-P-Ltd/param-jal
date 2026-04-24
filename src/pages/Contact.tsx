import { FormEvent, useState } from 'react';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';

type Status = 'idle' | 'sending' | 'sent' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState<string>('');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus('sending');
    setErrorMsg('');

    try {
      const resp = await fetch('https://formsubmit.co/ajax/aps@paramai.in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          Name: data.get('name'),
          Organisation: data.get('org'),
          Email: data.get('email'),
          Phone: data.get('phone') || '-',
          'Enquiry type': data.get('type') || '-',
          Message: data.get('message'),
          _cc: 'aditdhn@gmail.com',
          _subject: `Param Jal enquiry — ${data.get('org') || 'Website'}`,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      if (resp.ok) {
        setStatus('sent');
        form.reset();
      } else {
        const body = await resp.text().catch(() => '');
        setStatus('error');
        setErrorMsg(body || `Request failed (${resp.status})`);
      }
    } catch (err) {
      setStatus('error');
      setErrorMsg('Network error. Please email us directly at aps@paramai.in.');
    }
  }

  const isSending = status === 'sending';

  return (
    <>
      <SEO
        title="Contact"
        description="Contact Param Innovations for water-tech deployments, municipal partnerships, mining-corporation enquiries, or government and institutional collaborations."
        path="/contact"
      />
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
            <p className="mt-2 text-sm text-brand-sky/70">
              Your message reaches <strong>aps@paramai.in</strong> and <strong>aditdhn@gmail.com</strong> directly. No mail client required.
            </p>

            {status === 'sent' ? (
              <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-full bg-emerald-500 text-white">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  </div>
                  <div>
                    <div className="font-display text-xl font-semibold text-emerald-900">Enquiry received.</div>
                    <p className="mt-1 text-sm text-emerald-800">We&apos;ll respond within our SLA. Thank you for reaching out.</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="mt-5 text-sm font-semibold text-emerald-700 underline decoration-emerald-400 hover:decoration-emerald-700"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <>
                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  <Field name="name" label="Your name" required disabled={isSending} />
                  <Field name="org" label="Organisation" required disabled={isSending} />
                  <Field name="email" label="Email" type="email" required disabled={isSending} />
                  <Field name="phone" label="Phone (optional)" disabled={isSending} />
                </div>
                <div className="mt-5">
                  <label className="block text-sm font-semibold text-brand-sky">Enquiry type</label>
                  <select
                    name="type"
                    disabled={isSending}
                    className="mt-2 w-full rounded-lg border border-brand-sky/15 bg-white p-3 text-sm shadow-sm focus:border-brand-sky focus:outline-none focus:ring-2 focus:ring-brand-gold/30 disabled:opacity-60"
                  >
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
                    disabled={isSending}
                    rows={5}
                    className="mt-2 w-full rounded-lg border border-brand-sky/15 bg-white p-3 text-sm shadow-sm focus:border-brand-sky focus:outline-none focus:ring-2 focus:ring-brand-gold/30 disabled:opacity-60"
                    placeholder="Tell us about the site, volume required, and timeline."
                  />
                </div>

                <button type="submit" disabled={isSending} className="btn-primary mt-7 disabled:opacity-60">
                  {isSending ? (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="animate-spin"><circle cx="12" cy="12" r="10" strokeOpacity="0.25"/><path d="M12 2a10 10 0 0 1 10 10"/></svg>
                      Sending…
                    </>
                  ) : (
                    <>Send enquiry →</>
                  )}
                </button>

                {status === 'error' && (
                  <p className="mt-4 text-sm text-red-700">
                    Something went wrong — {errorMsg || 'please try again'}.
                  </p>
                )}
              </>
            )}
          </form>

          {/* Contact details */}
          <aside className="space-y-4">
            <Block title="Direct email">
              <a href="mailto:aps@paramai.in" className="text-brand-sky hover:text-brand-ink">aps@paramai.in</a>
              <div className="mt-2 text-sm text-brand-sky/60">
                Founder · <a href="mailto:aditdhn@gmail.com" className="link-underline">aditdhn@gmail.com</a>
              </div>
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
                Reference <strong>EOI Sr. No. 20, W-000301</strong> (SPM NIWAS submission) in the subject line for priority routing.
              </p>
            </Block>
            <Block title="Sibling brand">
              <a href="https://paramai.in" className="text-brand-sky hover:text-brand-ink">Param AI · career intelligence platform</a>
              <p className="mt-1 text-sm text-brand-sky/60">Same parent company. Different domain.</p>
            </Block>
          </aside>
        </div>
      </section>
    </>
  );
}

function Field({ name, label, type = 'text', required, disabled }: { name: string; label: string; type?: string; required?: boolean; disabled?: boolean }) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-brand-sky">{label}{required && <span className="text-red-500"> *</span>}</span>
      <input
        name={name}
        type={type}
        required={required}
        disabled={disabled}
        className="mt-2 w-full rounded-lg border border-brand-sky/15 bg-white p-3 text-sm shadow-sm focus:border-brand-sky focus:outline-none focus:ring-2 focus:ring-brand-gold/30 disabled:opacity-60"
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
