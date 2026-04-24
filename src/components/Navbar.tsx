import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Logo from './Logo';

const links = [
  { to: '/technology', label: 'Technology' },
  { to: '/impact', label: 'Impact' },
  { to: '/assured', label: 'ASSURED' },
  { to: '/atmanirbhar', label: 'Atmanirbhar' },
  { to: '/about', label: 'About' },
  { to: '/faq', label: 'FAQ' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-40 border-b transition-all ${scrolled ? 'border-brand-sky/10 bg-white/92 backdrop-blur shadow-soft' : 'border-transparent bg-white/80 backdrop-blur'}`}>
      <div className="container-x flex h-[72px] items-center justify-between">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Logo size={44} />
          <div className="leading-tight">
            <div className="font-display text-xl font-semibold text-brand-sky">Param Jal</div>
            <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.18em] text-brand-sky/60">
              <span className="sanskrit text-[13px] normal-case tracking-normal text-brand-gold">जगतं जयतु</span>
              <span>·</span>
              <span>By Param Innovations</span>
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `rounded-full px-3.5 py-2 text-sm font-medium transition ${
                  isActive
                    ? 'bg-brand-sky text-white'
                    : 'text-brand-sky/80 hover:bg-brand-sky/5 hover:text-brand-sky'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/contact" className="ml-3 btn-gold !py-2 !px-4">Contact</Link>
        </nav>

        <button
          className="md:hidden rounded-md border border-brand-sky/15 p-2 text-brand-sky"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6l-12 12" /> : <><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/></>}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-brand-sky/10 bg-white">
          <div className="container-x flex flex-col py-2">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-md px-3 py-2.5 text-sm font-medium ${
                    isActive ? 'bg-brand-sky text-white' : 'text-brand-sky/80 hover:bg-brand-sky/5'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <NavLink to="/contact" onClick={() => setOpen(false)} className="mt-2 rounded-md bg-brand-gold px-3 py-2.5 text-sm font-semibold text-brand-sky text-center">
              Contact us
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}
