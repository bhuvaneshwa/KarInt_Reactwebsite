import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <footer className="px-4 divide-y dark:bg-black dark:text-white">
        <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
          {/* Logo Section */}
          <div className="lg:w-1/3">
            <Link to="/" className="flex justify-center space-x-3 lg:justify-start">
              <div className="flex items-center justify-center w-12 h-12 rounded-full">
                <img src="/logo.png" alt="Logo" />
              </div>
              <span className="self-center text-2xl font-semibold">
                KAR International InfoTech
              </span>
            </Link>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
            <div className="space-y-3">
              <h3 className="tracking-wide uppercase dark:text-white">Our Product</h3>
              <ul className="space-y-1">
                <li><Link to="/product">Product Overview</Link></li>
                <li><Link to="/customSolutions">Custom Solutions</Link></li>
                <li><Link to="/caseStudies">Case Studies</Link></li>
                <li><Link to="/productUpdates">Product Updates</Link></li>
               
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="tracking-wide uppercase dark:text-white">Our Services</h3>
              <ul className="space-y-1">
                <li><Link to="/services">Web Development</Link></li>
                <li><Link to="/services">Mobile App Development</Link></li>
                <li><Link to="/services">Digital Marketing</Link></li>
                <li><Link to="/services">E-Commerce Solutions</Link></li>
                <li><Link to="/services">SEO Optimization</Link></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="tracking-wide uppercase dark:text-white">Company</h3>
              <ul className="space-y-1">
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/terms" className="hover:underline">Terms of Service</Link></li>
                <li><a href="/privacypolicy">Privacy Policy</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="uppercase dark:text-white">Social Media</h3>
              <ul className="space-y-1">
                <li>
                  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M4.98 3.5C3.34 3.5 2 4.84 2 6.48s1.34 2.98 2.98 2.98 2.98-1.34 2.98-2.98S6.62 3.5 4.98 3.5zM2.4 21h5.17V9H2.4v12zM8.9 9h4.95v1.71h.07c.69-1.24 2.39-2.54 4.92-2.54 5.26 0 6.23 3.46 6.23 7.96V21h-5.18v-5.59c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.15 1.45-2.15 2.95V21h-5.18V9z" />
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                </li>
                <li>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.385.6.113.793-.26.793-.577v-2.022c-3.338.727-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.809 1.305 3.495.997.108-.775.42-1.306.763-1.606-2.665-.3-5.466-1.335-5.466-5.933 0-1.312.469-2.382 1.236-3.221-.124-.303-.536-1.522.117-3.176 0 0 1.008-.322 3.301 1.23a11.5 11.5 0 013.003-.404c1.018.005 2.044.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.655 1.654.243 2.873.12 3.176.77.839 1.235 1.909 1.235 3.221 0 4.61-2.805 5.63-5.475 5.921.431.37.815 1.102.815 2.222v3.293c0 .32.192.694.801.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                    <span>GitHub</span>
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zM12 8.25a3.75 3.75 0 110 7.5 3.75 3.75 0 010-7.5zm5.25-.75a1.25 1.25 0 112.5 0 1.25 1.25 0 01-2.5 0zM12 9.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
                    </svg>
                    <span>Instagram</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:help@karinternationalinfotech.com" className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M2.25 4.5A2.25 2.25 0 014.5 2.25h15a2.25 2.25 0 012.25 2.25v15a2.25 2.25 0 01-2.25 2.25h-15A2.25 2.25 0 012.25 19.5v-15zm16.28 2.53a.75.75 0 10-1.06-1.06L12 11.19 6.53 5.97a.75.75 0 00-1.06 1.06L10.44 12l-4.97 4.97a.75.75 0 101.06 1.06L12 12.81l5.47 5.22a.75.75 0 101.06-1.06L13.56 12l4.97-4.97z" />
                    </svg>
                    <span>Email</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom Note */}
        <div className="py-6 text-sm text-center dark:text-gray-600">
          © KAR International Infotech 2025. All rights reserved.
        </div>
      </footer>
    </div>
  );
}