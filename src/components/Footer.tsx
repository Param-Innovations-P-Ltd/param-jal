import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="mt-20 bg-jal-950 text-jal-100">
      <div className="container-x grid gap-10 py-14 md:grid-cols-4">
        <div>
          <div className="font-display text-xl font-bold text-white">Param Jal</div>
          <p className="mt-3 text-sm text-jal-200">
            A water technology initiative by Param Innovations Pvt. Ltd. — turning acidic coal mine pit water into BIS-standard drinking water.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Explore</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/technology" className="hover:text-white">Technology</Link></li>
            <li><Link to="/impact" className="hover:text-white">Impact &amp; Validation</Link></li>
            <li><Link to="/assured" className="hover:text-white">ASSURED Framework</Link></li>
            <li><Link to="/atmanirbhar" className="hover:text-white">Atmanirbhar Case</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-white">About Param Innovations</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            <li className="text-jal-300">DPIIT-recognised Startup</li>
            <li className="text-jal-300">MSME UDYAM-JH-04-0066916</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Registered Office</h4>
          <address className="mt-3 not-italic text-sm text-jal-200">
            Param Innovations Pvt. Ltd.<br />
            Dhanbad, Jharkhand, India<br />
            <a href="mailto:contact@paraminnovations.in" className="hover:text-white">contact@paraminnovations.in</a>
          </address>
        </div>
      </div>
      <div className="border-t border-jal-900/60">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-5 text-xs text-jal-300 md:flex-row">
          <span>© {new Date().getFullYear()} Param Innovations Pvt. Ltd. All rights reserved.</span>
          <span>Provisional Patent · 202531084570</span>
        </div>
      </div>
    </footer>
  );
}
