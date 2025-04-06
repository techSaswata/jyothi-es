import React from "react";
import Link from "next/link";
export default function NavBar() {
  return (
    <>
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="text-blue-600 font-bold text-2xl">
                <span className="text-gray-800">SRIJYOTHI</span>ES
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-700 hover:text-blue-600">
                Home
              </a>
              <a href="#about" className="text-gray-700 hover:text-blue-600">
                About Us
              </a>
              <Link href="#" className="text-gray-700 hover:text-blue-600">
                Services
              </Link>
              <a
                href="#equipment"
                className="text-gray-700 hover:text-blue-600"
              >
                Equipment
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600">
                Contact
              </a>
            </div>
            <div className="md:hidden">
              <button className="text-gray-700 focus:outline-none">
                <i className="fas fa-bars text-xl"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
