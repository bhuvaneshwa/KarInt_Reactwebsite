import { Link, Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  const location = useLocation();

  // Close dropdowns and menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    // setIsDropdownOpen(false);
    // setIsMobileDropdownOpen(false);
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  // const toggleDropdown = () => {
  //   setIsDropdownOpen((prev) => !prev);
  // };

  // const toggleMobileDropdown = () => {
  //   setIsMobileDropdownOpen((prev) => !prev);
  // };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/product", label: "Our Products" },
    { path: "/services", label: "Our Services" },
    { path: "/contact", label: "Contact Us" },
  ];

  // const dropdownLinks = [
  //   { path: "/other/team", label: "Our Team" },
  //   { path: "/other/career", label: "Career Page" },
  // ];

  return (
    <div>
      <header className="sticky top-0 z-50 p-1 dark:bg-black dark:text-white shadow-lg">
        <div className="container flex justify-between h-16 mx-auto">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link
              to="/"
              aria-label="Back to homepage"
              className="flex items-center p-2"
            >
              <img
                src="/logo.png"
                alt="Company Logo"
                className="h-16 w-44" // Adjust as per design
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className="items-stretch hidden space-x-3 lg:flex">
            {navLinks.map((link) => (
              <li className="flex" key={link.path}>
                <Link
                  to={link.path}
                  className="flex items-center px-4 -mb-1 hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            {/* <li className="relative flex">
              <button
                onClick={toggleDropdown}
                className="flex items-center px-4 -mb-1 hover:text-primary focus:outline-none"
                aria-expanded={isDropdownOpen}
              >
                More
              </button>
              {isDropdownOpen && (
                <ul className="absolute top-full mt-2 bg-white text-black dark:bg-white shadow-lg py-2 w-48 left-0">
                  {dropdownLinks.map((link) => (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        className="block px-4 py-2 hover:bg-primary dark:hover:bg-primary hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li> */}
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <ul className="space-y-2 p-4 dark:bg-black dark:text-white">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="block px-4 py-2 hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              {/* <li>
                <button
                  onClick={toggleMobileDropdown}
                  className="w-full text-left block px-4 py-2 hover:text-primary focus:outline-none"
                  aria-expanded={isMobileDropdownOpen}
                >
                  More
                </button>
                {isMobileDropdownOpen && (
                  <ul className="pl-4 space-y-2">
                    {dropdownLinks.map((link) => (
                      <li key={link.path}>
                        <Link
                          to={link.path}
                          className="block px-4 py-2 hover:text-primary"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li> */}
            </ul>
          </div>
        )}
      </header>
      <Outlet />
    </div>
  );
}
