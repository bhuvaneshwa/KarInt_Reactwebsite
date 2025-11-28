import { Link } from "react-router-dom";
import {  Linkedin, Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white py-8 md:py-12 px-4 md:px-6">
      {/* Main Glass Container */}
      <div className="max-w-7xl mx-auto rounded-2xl md:rounded-3xl border border-white/10 bg-white/10 backdrop-blur-lg p-6 md:p-10 shadow-[0_8px_30px_rgba(255,255,255,0.1)]">
        
        {/* Top Section: Logo & Links */}
        <div className="flex flex-col lg:flex-row justify-between gap-8 md:gap-10">
          
          {/* Logo Section */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-3">
            <Link to="/" className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center border border-white/10">
                <img src="/logo.png" alt="Logo" className="w-8 h-8 object-contain" />
              </div>
              <h2 className="text-lg sm:text-xl font-semibold tracking-wide">KAR International InfoTech</h2>
            </Link>
            <p className="text-xs sm:text-sm text-gray-300 max-w-sm px-4 sm:px-0">
              Innovation • Technology • Growth — Empowering businesses through next-generation digital solutions.
            </p>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 text-sm text-gray-200">
            
            {/* Our Product */}
            <div className="text-center sm:text-left">
              <h3 className="uppercase text-[#f86a04] font-semibold mb-3 text-sm md:text-base">Our Product</h3>
              <ul className="space-y-2">
                <li><Link to="/product" className="hover:text-[#f86a04] transition">Product Overview</Link></li>
                <li><Link to="/customSolutions" className="hover:text-[#f86a04] transition">Custom Solutions</Link></li>
                <li><Link to="/caseStudies" className="hover:text-[#f86a04] transition">Case Studies</Link></li>
                <li><Link to="/productUpdates" className="hover:text-[#f86a04] transition">Product Updates</Link></li>
               
              </ul>
            </div>

            {/* Our Services */}
            <div className="text-center sm:text-left">
              <h3 className="uppercase text-[#f86a04] font-semibold mb-3 text-sm md:text-base">Our Services</h3>
              <ul className="space-y-2">
                <li><Link to="/services" className="hover:text-[#f86a04] transition">Web Development</Link></li>
                <li><Link to="/services" className="hover:text-[#f86a04] transition">Mobile App Development</Link></li>
                <li><Link to="/services" className="hover:text-[#f86a04] transition">Digital Marketing</Link></li>
                <li><Link to="/services" className="hover:text-[#f86a04] transition">E-Commerce Solutions</Link></li>
                <li><Link to="/services" className="hover:text-[#f86a04] transition">SEO Optimization</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div className="text-center sm:text-left">
              <h3 className="uppercase text-[#f86a04] font-semibold mb-3 text-sm md:text-base">Company</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="hover:text-[#f86a04] transition">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-[#f86a04] transition">Contact</Link></li>
                <li><Link to="/terms" className="hover:text-[#f86a04] transition">Terms of Service</Link></li>
                <li><a href="/privacypolicy" className="hover:text-[#f86a04] transition">Privacy Policy</a></li>
                <li><Link to="/faq" className="hover:text-[#f86a04] transition">FAQ</Link></li>
                 <li><Link to="/portfolio" className="hover:text-[#f86a04] transition">Our Portfolio</Link></li>
                <li><Link to="/ourBlog" className="hover:text-[#f86a04] transition">Our Blog</Link></li>
      
              </ul>
            </div>

            {/* Social Media */}
         {/* Social Media */}
<div className="text-center sm:text-left">
  <h3 className="uppercase text-[#f86a04] font-semibold mb-3 text-sm md:text-base">Follow Us</h3>
  <ul className="space-y-3 flex flex-col items-center sm:items-start text-gray-200">

    <li>
      <a
        href="https://www.linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-[#f86a04] transition"
      >
        <Linkedin className="w-5 h-5" />
        LinkedIn
      </a>
    </li>

   
    <li>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-[#f86a04] transition"
      >
        <Instagram className="w-5 h-5" />
        Instagram
      </a>
    </li>

    <li>
      <a
        href="mailto:help@karinternationalinfotech.com"
        className="flex items-center gap-2 hover:text-[#f86a04] transition"
      >
        <Mail className="w-5 h-5" />
        Email
      </a>
    </li>

  </ul>
</div>

          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 md:mt-10 pt-4 md:pt-6 border-t border-white/10 text-center text-gray-300 text-xs md:text-sm">
          <p className="text-gray-300 px-4">
            © KAR International Infotech 2025. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
