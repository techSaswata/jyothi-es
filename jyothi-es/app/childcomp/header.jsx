'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { title: 'Home', path: '/' },
    { 
      title: 'Services', 
      path: '/services',
      dropdown: true,
      children: [
        { title: 'EDM Services', path: '/services/edm' },
        { title: 'CNC Machining', path: '/services/cnc' },
        { title: 'Tool Manufacturing', path: '/services/tool-manufacturing' },
        { title: 'Precision Grinding', path: '/services/precision-grinding' },
      ]
    },
    { title: 'About', path: '/about' },
    { title: 'Projects', path: '/projects' },
    { title: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`sticky top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative h-10 w-40">
            {/* Placeholder for actual logo */}
            <div className="absolute inset-0 flex items-center">
              <span className="text-primary font-bold text-xl">JYOTHI-ES</span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link) => 
            link.dropdown ? (
              <div key={link.title} className="relative group">
                <button 
                  className={`nav-link group flex items-center ${
                    pathname === link.path ? 'nav-link-active' : ''
                  }`}
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  {link.title}
                  <svg className="ml-1 w-4 h-4 transition-transform duration-200 group-hover:rotate-180" 
                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div 
                  className={`absolute left-0 mt-1 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 origin-top-left
                    ${servicesDropdownOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <div className="py-1">
                    {link.children.map((child) => (
                      <Link 
                        key={child.title} 
                        href={child.path}
                        className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${
                          pathname === child.path ? 'bg-gray-50 text-primary font-medium' : ''
                        }`}
                      >
                        {child.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link 
                key={link.title} 
                href={link.path}
                className={`nav-link ${pathname === link.path ? 'nav-link-active' : ''}`}
              >
                {link.title}
              </Link>
            )
          )}
        </nav>

        {/* Contact Button */}
        <div className="hidden lg:block">
          <Link href="/quote" className="btn btn-primary btn-sm">
            Get a Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden flex items-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <div className="relative w-6 h-5">
            <span 
              className={`absolute block h-0.5 w-6 bg-gray-800 transform transition duration-300 ease-in-out ${
                mobileMenuOpen ? 'rotate-45 translate-y-2' : '-translate-y-2'
              }`}
            ></span>
            <span 
              className={`absolute block h-0.5 bg-gray-800 transform transition-opacity duration-300 ease-in-out ${
                mobileMenuOpen ? 'opacity-0 w-0' : 'opacity-100 w-6'
              }`}
            ></span>
            <span 
              className={`absolute block h-0.5 w-6 bg-gray-800 transform transition duration-300 ease-in-out ${
                mobileMenuOpen ? '-rotate-45 translate-y-2' : 'translate-y-2'
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <Link href="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
            <div className="relative h-8 w-32">
              {/* Placeholder for actual logo */}
              <div className="absolute inset-0 flex items-center">
                <span className="text-primary font-bold text-lg">JYOTHI-ES</span>
              </div>
            </div>
          </Link>
          <button 
            className="focus:outline-none"
            onClick={() => setMobileMenuOpen(false)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="p-4">
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.title}>
                {link.dropdown ? (
                  <div>
                    <button 
                      className="flex items-center justify-between w-full py-2 text-gray-700 hover:text-primary"
                      onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                    >
                      <span className="font-medium">{link.title}</span>
                      <svg className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} 
                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {servicesDropdownOpen && (
                      <ul className="pl-4 mt-2 space-y-2 border-l-2 border-gray-200">
                        {link.children.map((child) => (
                          <li key={child.title}>
                            <Link 
                              href={child.path}
                              className={`block py-1 text-gray-600 hover:text-primary ${
                                pathname === child.path ? 'text-primary font-medium' : ''
                              }`}
                            >
                              {child.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link 
                    href={link.path}
                    className={`block py-2 font-medium ${
                      pathname === link.path ? 'text-primary' : 'text-gray-700 hover:text-primary'
                    }`}
                  >
                    {link.title}
                  </Link>
                )}
              </li>
            ))}
            <li className="pt-4 mt-6 border-t border-gray-200">
              <Link 
                href="/quote" 
                className="btn btn-primary w-full text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get a Quote
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}