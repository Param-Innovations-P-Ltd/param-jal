import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-brand-sky/10 bg-brand-sky text-jal-100">
      {/* Brand strip */}
      <div className="border-b border-white/5">
        <div className="container-x py-10">
          <div className="flex flex-wrap items-center gap-6">
            <Logo size={56} />
            <div>
              <div className="font-display text-2xl text-white">Param Innovations Pvt. Ltd.</div>
              <div className="mt-1 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-brand-gold/90">
                <span className="sanskrit text-sm tracking-normal normal-case">जगतं जयतु</span>
                <span className="opacity-60">·</span>
                <span>May the world prevail</span>
              </div>
            </div>
            <div className="ml-auto hidden items-center gap-4 md:flex">
              <Link to="/contact" className="btn-gold !py-2.5">Start a conversation →</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Link columns */}
      <div className="container-x grid gap-10 py-14 md:grid-cols-4">
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-gold">The Technology</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/technology" className="link-underline hover:text-white">Six-stage process</Link></li>
            <li><Link to="/impact" className="link-underline hover:text-white">Field validation</Link></li>
            <li><Link to="/assured" className="link-underline hover:text-white">ASSURED framework</Link></li>
            <li><Link to="/atmanirbhar" className="link-underline hover:text-white">The Atmanirbhar case</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-gold">Company</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/about" className="link-underline hover:text-white">About Param Innovations</Link></li>
            <li><Link to="/faq" className="link-underline hover:text-white">FAQ</Link></li>
            <li><Link to="/contact" className="link-underline hover:text-white">Contact</Link></li>
            <li><a href="https://paramai.in" target="_blank" rel="noreferrer" className="link-underline hover:text-white">Sibling brand · Param AI</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-gold">Recognitions</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-jal-200">
            <li>DPIIT-recognised Startup · DPIIT207495</li>
            <li>CIN: U36000JH2025PTC025036</li>
            <li>MSME UDYAM-JH-04-0066916</li>
            <li>FSSAI Registration 21125172000318</li>
            <li>SISFS Grantee · ACIC IIT(ISM)</li>
            <li>Provisional Patent 202531084570</li>
            <li>EOI W-000301 · SPM NIWAS · DDWS</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-gold">Registered Office</h4>
          <address className="mt-4 not-italic text-sm text-jal-200">
            Param Innovations Pvt. Ltd.<br />
            Madnadih, Bansjora<br />
            Dhanbad, Jharkhand — 826001<br />
            <a href="tel:+917209377707" className="link-underline hover:text-white">+91 72093 77707</a><br />
            <a href="mailto:aps@paramjal.in" className="link-underline hover:text-white">aps@paramjal.in</a>
          </address>
        </div>
      </div>

      {/* Closing quote */}
      <div className="border-t border-white/5">
        <div className="container-x py-6 text-center text-sm italic text-jal-300">
          &ldquo;Advancement that doesn&apos;t reach the last person is incompleteness — not achievement.&rdquo;
        </div>
      </div>

      {/* Bottom strip */}
      <div className="border-t border-white/5">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-jal-300 md:flex-row">
          <span>© {new Date().getFullYear()} Param Innovations Pvt. Ltd. · PARAM JAL is a registered technology under Patent Application 202531084570 · DPIIT Recognised Startup</span>
          <span className="flex items-center gap-3">
            <span>FSSAI 21125172000318</span>
            <span className="h-3 w-px bg-white/20" />
            <span>EOI W-000301</span>
            <span className="h-3 w-px bg-white/20" />
            <span>Made in Dhanbad · For India</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
