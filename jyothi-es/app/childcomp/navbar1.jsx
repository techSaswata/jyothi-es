"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavBar1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when path changes
  useEffect(() => {
    setIsOpen(false);
    setIsServicesOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services', hasSubmenu: true },
    { href: '/contact', label: 'Contact' },
  ];

  const serviceLinks = [
    { href: '/repair', label: 'Repair Services', icon: '🔧' },
    { href: '/spares', label: 'Spare Parts', icon: '⚙️' },
    { href: '/energysave', label: 'Energy Solutions', icon: '⚡' },
    { href: '/threed', label: '3D Services', icon: '🔍' },
    { href: '/es', label: 'Engineering Services', icon: '📐' },
    { href: '/edm', label: 'EDM Services', icon: '🛠️' },
  ];

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleServicesMenu = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <nav className={`transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gray-800 flex items-center justify-center">
              <span className="text-lg font-bold text-white">SJ</span>
            </div>
            <div>
              <span className="text-xl font-bold text-gray-800">Sri Jyothi</span>
              <span className="block text-[10px] text-gray-500 tracking-wider font-medium">ENGINEERING SERVICES</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <ul className="flex space-x-8 mr-6">
              {navLinks.map((link) => (
                <li key={link.href} className="relative">
                  {link.hasSubmenu ? (
                    <>
                      <button 
                        className={`flex items-center text-gray-600 hover:text-gray-900 transition-colors 
                          ${pathname.startsWith('/services') || serviceLinks.some(s => pathname === s.href) 
                            ? 'font-medium text-gray-900' 
                            : ''}`}
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                      >
                        {link.label}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <div 
                        className={`absolute top-full right-0 mt-1 w-60 z-10 transition-all duration-200 transform origin-top-right
                          ${isServicesOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                      >
                        <div className="bg-white shadow-lg border border-gray-200 py-1">
                          {serviceLinks.map((service) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              className={`flex items-center px-4 py-2 text-sm transition-colors
                                ${pathname === service.href 
                                  ? 'bg-gray-100 text-gray-900 font-medium' 
                                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`}
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
                      className={`text-gray-600 hover:text-gray-900 transition-colors
                        ${pathname === link.href 
                          ? 'font-medium text-gray-900' 
                          : ''}`}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="px-5 py-2 bg-gray-800 text-white font-medium 
                hover:bg-gray-700 transition-colors"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open menu</span>
            {isOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
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
                      className={`flex justify-between items-center w-full px-4 py-2 text-left
                        ${pathname.startsWith('/services') || serviceLinks.some(s => pathname === s.href) 
                          ? 'font-medium text-gray-900' 
                          : 'text-gray-600'
                        }`}
                    >
                      <span>{link.label}</span>
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className={`h-4 w-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div className={`transition-all duration-300 overflow-hidden bg-gray-50 ${isServicesOpen ? 'max-h-96' : 'max-h-0'}`}>
                      {serviceLinks.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className={`flex items-center px-6 py-2 text-sm
                            ${pathname === service.href 
                              ? 'text-gray-900 font-medium' 
                              : 'text-gray-600 hover:text-gray-900'
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
                    className={`block px-4 py-2 
                      ${pathname === link.href 
                        ? 'font-medium text-gray-900' 
                        : 'text-gray-600 hover:text-gray-900'
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
                className="block w-full text-center py-2 px-4 bg-gray-800 text-white font-medium hover:bg-gray-700 transition-colors"
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
