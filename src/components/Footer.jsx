import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white py-12 px-6">
      {/* Main Glass Container */}
      <div className="max-w-7xl mx-auto rounded-3xl border border-white/10 bg-white/10 backdrop-blur-lg p-10 shadow-[0_8px_30px_rgba(255,255,255,0.1)]">
        
        {/* Top Section: Logo & Links */}
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          
          {/* Logo Section */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-3">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center border border-white/10">
                <img src="/logo.png" alt="Logo" className="w-8 h-8 object-contain" />
              </div>
              <h2 className="text-xl font-semibold tracking-wide">KAR International InfoTech</h2>
            </Link>
            <p className="text-sm text-gray-300 max-w-sm">
              Innovation • Technology • Growth — Empowering businesses through next-generation digital solutions.
            </p>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm text-gray-200">
            
            {/* Our Product */}
            <div>
              <h3 className="uppercase text-[#f86a04] font-semibold mb-3">Our Product</h3>
              <ul className="space-y-1">
                <li><Link to="/product" className="hover:text-[#f86a04] transition">Product Overview</Link></li>
                <li><Link to="/customSolutions" className="hover:text-[#f86a04] transition">Custom Solutions</Link></li>
                <li><Link to="/caseStudies" className="hover:text-[#f86a04] transition">Case Studies</Link></li>
                <li><Link to="/productUpdates" className="hover:text-[#f86a04] transition">Product Updates</Link></li>
              </ul>
            </div>

            {/* Our Services */}
            <div>
              <h3 className="uppercase text-[#f86a04] font-semibold mb-3">Our Services</h3>
              <ul className="space-y-1">
                <li><Link to="/services" className="hover:text-[#f86a04] transition">Web Development</Link></li>
                <li><Link to="/services" className="hover:text-[#f86a04] transition">Mobile App Development</Link></li>
                <li><Link to="/services" className="hover:text-[#f86a04] transition">Digital Marketing</Link></li>
                <li><Link to="/services" className="hover:text-[#f86a04] transition">E-Commerce Solutions</Link></li>
                <li><Link to="/services" className="hover:text-[#f86a04] transition">SEO Optimization</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="uppercase text-[#f86a04] font-semibold mb-3">Company</h3>
              <ul className="space-y-1">
                <li><Link to="/about" className="hover:text-[#f86a04] transition">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-[#f86a04] transition">Contact</Link></li>
                <li><Link to="/terms" className="hover:text-[#f86a04] transition">Terms of Service</Link></li>
                <li><a href="/privacypolicy" className="hover:text-[#f86a04] transition">Privacy Policy</a></li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="uppercase text-[#f86a04] font-semibold mb-3">Follow Us</h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#f86a04] transition">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5C3.34 3.5 2 4.84 2 6.48s1.34 2.98 2.98 2.98..."/></svg>
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#f86a04] transition">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.373 0 12..."/></svg>
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#f86a04] transition">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2A5.75 5.75 0 002 7.75v8.5..."/></svg>
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="mailto:help@karinternationalinfotech.com" className="flex items-center gap-2 hover:text-[#f86a04] transition">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M2.25 4.5A2.25 2.25 0 014.5..."/></svg>
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 pt-6 border-t border-white/10 text-center text-gray-300 text-sm">
          <Link to="/adminlog" className="hover:text-[#f86a04] transition">
            © KAR International Infotech
          </Link>{" "}
          2025. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
