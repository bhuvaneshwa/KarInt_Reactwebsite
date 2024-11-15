import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileDropdown = () => {
    setIsMobileDropdownOpen(!isMobileDropdownOpen);
  };

  return (
    <div>
      <header className="sticky top-0 z-50 p-1 dark:bg-black dark:text-white shadow-lg">
        <div className="container flex justify-between h-16 mx-auto">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link
              rel="noopener noreferrer"
              to="/"
              aria-label="Back to homepage"
              className="flex items-center p-2"
            >
              <img src="/logo.png" alt="Logo" className="w-12 h-8" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className="items-stretch hidden space-x-3 lg:flex">
            <li className="flex">
              <Link to="/" className="flex items-center px-4 -mb-1  hover:text-primary">
                Home
              </Link>
            </li>
            <li className="flex">
              <Link to="/about" className="flex items-center px-4 -mb-1 hover:text-primary">
                About Us
              </Link>
            </li>
            <li className="flex">
              <Link to="/products" className="flex items-center px-4 -mb-1 hover:text-primary">
                Our Products
              </Link>
            </li>
            <li className="flex">
              <Link to="/services" className="flex items-center px-4 -mb-1 hover:text-primary">
                Our Services
              </Link>
            </li>
            <li className="relative flex">
              <button
                onClick={toggleDropdown}
                className="flex items-center px-4 -mb-1 hover:text-primary focus:outline-none"
              >
                More
              </button>
              {isDropdownOpen && (
                <ul className="absolute top-full mt-2 bg-white text-black dark:bg-white shadow-lg  py-2 w-48 left-0">
                  <li>
                    <Link to="/other/team" className="block px-4 py-2 hover:bg-primary dark:hover:bg-primary  hover:text-white">
                      Our Team
                    </Link>
                  </li>
                  <li>
                    <Link to="/other/career" className="block px-4 py-2 hover:bg-primary dark:hover:bg-primary  hover:text-white">
                     Career page
                    </Link>
                  </li>
                  {/* <li>
                    <Link to="/other/subpage3" className="block px-4 py-2 hover:bg-primary dark:hover:bg-primary  hover:text-white">
                      Subpage 3
                    </Link>
                  </li> */}
                </ul>
              )}
            </li>
            <li className="flex">
              <Link to="/contact" className="flex items-center px-4 -mb-1 hover:text-primary">
                Contact Us
              </Link>
            </li>
            
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="p-4 lg:hidden focus:outline-none"
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
              <li>
                <Link to="/" className="block px-4 py-2 hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="block px-4 py-2 hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="block px-4 py-2 hover:text-primary">
                  Our Products
                </Link>
              </li>
              <li>
                <Link to="/services" className="block px-4 py-2 hover:text-primary">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="block px-4 py-2 hover:text-primary">
                  Contact Us
                </Link>
              </li>
              <li>
                <button
                  onClick={toggleMobileDropdown}
                  className="w-full text-left block px-4 py-2 hover:text-primary focus:outline-none"
                >
                  Others
                </button>
                {isMobileDropdownOpen && (
                  <ul className="pl-4 space-y-2">
                    <li>
                      <Link to="/other/subpage1" className="block px-4 py-2 hover:text-primary">
                        Subpage 1
                      </Link>
                    </li>
                    <li>
                      <Link to="/other/subpage2" className="block px-4 py-2 hover:text-primary">
                        Subpage 2
                      </Link>
                    </li>
                    <li>
                      <Link to="/other/subpage3" className="block px-4 py-2 hover:text-primary">
                        Subpage 3
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        )}
      </header>
      <Outlet />
    </div>
  );
}
