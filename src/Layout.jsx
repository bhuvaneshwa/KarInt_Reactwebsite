import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/product", label: "Our Products" },
    { path: "/services", label: "Our Services" },
    { path: "/training-programs", label: "Training Programs" },
    { path: "/careers", label: "Our Careers" },
    { path: "/contact", label: "Contact Us" },
  ];

  return (
    <div>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ease-in-out 
          dark:bg-black dark:text-white bg-[#f86a04] shadow-lg
          ${isScrolled ? "mt-24 mx-8 rounded-3xl scale-[0.97]" : "mt-0 mx-0 scale-100"}
        `}
      >
        <div className="container flex justify-between h-16 mx-auto px-2">
          {/* Logo */}
          <div className="flex items-center">
            <NavLink to="/" aria-label="Back to homepage" className="flex items-center p-2">
              <h1 className="text-2xl font-bold text-primary">
                KAR <span className="text-white">International InfoTech</span>
              </h1>
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <ul className="items-stretch hidden space-x-3 lg:flex">
            {navLinks.map((link) => (
              <li className="flex" key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `flex items-center px-4 -mb-1 font-bold hover:text-primary ${
                      isActive ? "text-primary font-semibold border-b-4 border-primary" : ""
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="p-4 lg:hidden focus:outline-none"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 dark:text-white"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <ul className="space-y-2 p-4 dark:bg-black dark:text-white">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `block px-4 py-2 hover:text-primary ${
                        isActive ? "text-primary font-semibold" : ""
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      <Outlet />
    </div>
  );
}
