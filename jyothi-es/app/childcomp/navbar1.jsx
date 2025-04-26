"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const NavBar1 = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services', hasSubmenu: true },
  ];

  const serviceLinks = [
    { href: '/es', label: 'Engineering Services', icon: '🛠️' },
    { href: '/re', label: 'Reverse Engineering', icon: '🔄' },
    { href: '/ovh', label: 'Overhauling Services', icon: '🔧' },
    { href: '/threed', label: '3D Services', icon: '📐' },
    { href: '/spares', label: 'Spare Parts', icon: '⚙️' },
    { href: '/repair', label: 'Repair Services', icon: '🛠️' },
    { href: '/energysave', label: 'Energy Solutions', icon: '💡' },
    { href: '/edm', label: 'EDM Services', icon: '⚡' },
    { href: '/bend', label: 'Bend Removal', icon: '🔩' },
    { href: '/dynamic', label: 'Dynamic Balancing', icon: '⚖️' },
  ];

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleServicesMenu = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  let servicesMenuTimeout;

  const handleMouseEnterServices = () => {
    clearTimeout(servicesMenuTimeout);
    setIsServicesOpen(true);
  };

  const handleMouseLeaveServices = () => {
    servicesMenuTimeout = setTimeout(() => {
      setIsServicesOpen(false);
    }, 200);
  };

  return (
    <nav
      className={`transition-all duration-300 ${
        isScrolled ? 'py-2 bg-white shadow-md' : 'py-4 bg-white'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative">
              <Image
                src="/SJES-LOGO.jpg"
                alt="Sri Jyothi Engineering Services Logo"
                width={90} // Set explicit width
                height={1} // Set explicit height
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <ul className="flex space-x-8 mr-6">
              {navLinks.map((link) => (
                <li key={link.href} className="relative group">
                  {link.hasSubmenu ? (
                    <>
                      <button
                        className={`flex items-center text-gray-700 hover:text-blue-700 transition-colors ${
                          pathname.startsWith('/services')
                            ? 'font-medium text-blue-700'
                            : ''
                        }`}
                        onMouseEnter={handleMouseEnterServices}
                        onMouseLeave={handleMouseLeaveServices}
                      >
                        {link.label}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 ml-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      <div
                        className={`absolute top-full right-0 mt-1 w-60 z-10 transition-all duration-200 transform origin-top-right ${
                          isServicesOpen
                            ? 'opacity-100 scale-100'
                            : 'opacity-0 scale-95 pointer-events-none'
                        }`}
                        onMouseEnter={handleMouseEnterServices}
                        onMouseLeave={handleMouseLeaveServices}
                      >
                        <div className="bg-white shadow-lg border border-gray-200 py-1">
                          {serviceLinks.map((service) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              className={`flex items-center px-4 py-2 text-sm transition-colors ${
                                pathname === service.href
                                  ? 'bg-gray-100 text-blue-700 font-medium'
                                  : 'text-gray-600 hover:bg-gray-50 hover:text-blue-700'
                              }`}
                            >
                              <span className="mr-2.5 text-base">{service.icon}</span>
                              <span>{service.label}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className={`text-gray-700 hover:text-blue-700 transition-colors relative group ${
                        pathname === link.href ? 'font-medium text-blue-700' : ''
                      }`}
                    >
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="px-5 py-2 bg-blue-700 text-white font-medium hover:bg-blue-600 transition-colors rounded-lg"
            >
              Contact us
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-gray-700 hover:text-blue-700 transition-colors"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open menu</span>
            {isOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-screen opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-white border border-gray-200 shadow-md divide-y divide-gray-100">
            {navLinks.map((link) => (
              <div key={link.href} className="py-1">
                {link.hasSubmenu ? (
                  <div>
                    <button
                      onClick={toggleServicesMenu}
                      className={`flex justify-between items-center w-full px-4 py-2 text-left ${
                        pathname.startsWith('/services')
                          ? 'font-medium text-blue-700'
                          : 'text-gray-700'
                      }`}
                    >
                      <span>{link.label}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-4 w-4 transition-transform duration-200 ${
                          isServicesOpen ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    <div
                      className={`transition-all duration-300 overflow-hidden bg-gray-50 ${
                        isServicesOpen ? 'max-h-96' : 'max-h-0'
                      }`}
                    >
                      {serviceLinks.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className={`flex items-center px-6 py-2 text-sm ${
                            pathname === service.href
                              ? 'text-blue-700 font-medium'
                              : 'text-gray-700 hover:text-blue-700'
                          }`}
                        >
                          <span className="mr-2.5 text-base">{service.icon}</span>
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className={`block px-4 py-2 ${
                      pathname === link.href
                        ? 'font-medium text-blue-700'
                        : 'text-gray-700 hover:text-blue-700'
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="py-3 px-4">
              <Link
                href="/contact"
                className="block w-full text-center py-2 px-4 bg-blue-700 text-white font-medium hover:bg-blue-600 transition-colors rounded-lg"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar1;
