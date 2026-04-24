import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

const links = [
  { to: '/technology', label: 'Technology' },
  { to: '/impact', label: 'Impact' },
  { to: '/assured', label: 'ASSURED' },
  { to: '/atmanirbhar', label: 'Atmanirbhar' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-jal-100 bg-white/85 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <Logo />
          <div className="leading-tight">
            <div className="font-display text-lg font-bold text-jal-900">Param Jal</div>
            <div className="text-[10px] uppercase tracking-widest text-jal-600">by Param Innovations</div>
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
                    ? 'bg-jal-100 text-jal-800'
                    : 'text-jal-700 hover:bg-jal-50 hover:text-jal-900'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="md:hidden rounded-md border border-jal-200 p-2 text-jal-700"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6l-12 12" /> : <><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/></>}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-jal-100 bg-white">
          <div className="container-x flex flex-col py-2">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-md px-3 py-2.5 text-sm font-medium ${
                    isActive ? 'bg-jal-100 text-jal-800' : 'text-jal-700 hover:bg-jal-50'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Logo() {
  return (
    <svg width="36" height="36" viewBox="0 0 64 64" aria-hidden>
      <defs>
        <linearGradient id="nav-g" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#36b2f6" />
          <stop offset="100%" stopColor="#02619f" />
        </linearGradient>
      </defs>
      <path d="M32 4 C 18 24, 10 36, 10 44 a22 22 0 0 0 44 0 c 0-8 -8-20 -22-40 z" fill="url(#nav-g)" />
      <path d="M32 18 C 24 30, 20 38, 20 44 a12 12 0 0 0 12 12" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
}
