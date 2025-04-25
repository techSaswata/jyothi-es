'use client';
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function OVH() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-800/70 z-10" />
        <div className="absolute inset-0">
          <Image
            src="/header/header4.jpg"
            alt="Industrial Equipment"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 max-w-4xl drop-shadow-lg">
            Erection, Commissioning & Overhauling Services
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl drop-shadow-md">
            Professional industrial services for optimal performance, reliability, and longevity of your equipment
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm">
            <Link href="/" className="text-blue-700 hover:text-blue-900 transition">
              Home
            </Link>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-gray-700">Overhauling Services</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content Area */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-blue-500 pb-2">
                  Comprehensive Lifecycle Management Services
                </h2>
                <p className="lead text-xl text-gray-700 mb-8">
                  The lifecycle management of industrial equipment encompasses a
                  broad range of services, including erection, commissioning,
                  maintenance, troubleshooting, and major overhauling. These
                  services are critical for ensuring the optimal performance,
                  reliability, and longevity of machinery and systems across various
                  industries.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mb-8 shadow-sm">
                  <p className="italic text-gray-800">
                    "These services ensure that equipment is installed correctly,
                    operates efficiently, and is maintained in optimal condition. By
                    leveraging advanced technologies, skilled technicians, and
                    comprehensive quality assurance processes, we provide essential support
                    for the continuous and reliable operation of machinery across various industries."
                  </p>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-3 shadow-sm">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </span>
                  Key Components of Our Services
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                  {/* Service Card */}
                  <div className="bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow p-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 mb-3">Erection Services</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-blue-600 font-bold mr-2">•</span>
                        <span><strong className="text-blue-600">Site Preparation:</strong> Assessing and preparing the site for equipment installation.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 font-bold mr-2">•</span>
                        <span><strong className="text-blue-600">Structural Assembly:</strong> Constructing foundations and frameworks.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 font-bold mr-2">•</span>
                        <span><strong className="text-blue-600">Mechanical Installation:</strong> Assembling all mechanical components.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 font-bold mr-2">•</span>
                        <span><strong className="text-blue-600">Alignment & Calibration:</strong> Precise alignment for optimal performance.</span>
                      </li>
                    </ul>
                  </div>
                  {/* Service Card - Commissioning */}
                  <div className="bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow p-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 mb-3">Commissioning Services</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-blue-600 font-bold mr-2">•</span>
                        <span><strong className="text-blue-600">Pre-Commissioning:</strong> Initial inspections and operational tests.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 font-bold mr-2">•</span>
                        <span><strong className="text-blue-600">System Testing:</strong> Load tests, performance tests, and safety checks.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 font-bold mr-2">•</span>
                        <span><strong className="text-blue-600">Functionality Verification:</strong> Confirming all components meet specifications.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 font-bold mr-2">•</span>
                        <span><strong className="text-blue-600">Operational Training:</strong> Staff training on equipment operation.</span>
                      </li>
                    </ul>
                  </div>
                  {/* Service Card - Maintenance */}
                  <div className="bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow p-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 mb-3">Maintenance Services</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-blue-600 font-bold mr-2">•</span>
                        <span><strong className="text-blue-600">Preventive Maintenance:</strong> Regular inspections to prevent failures.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 font-bold mr-2">•</span>
                        <span><strong className="text-blue-600">Predictive Maintenance:</strong> Advanced monitoring to predict issues.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 font-bold mr-2">•</span>
                        <span><strong className="text-blue-600">Corrective Maintenance:</strong> Repairs to restore optimal function.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 font-bold mr-2">•</span>
                        <span><strong className="text-blue-600">Parts Replacement:</strong> High-quality spare parts replacement.</span>
                      </li>
                    </ul>
                  </div>
                  {/* Service Card - Overhauling */}
                  <div className="bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow p-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 mb-3">Major Overhauling</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-blue-600 font-bold mr-2">•</span>
                        <span><strong className="text-blue-600">Comprehensive Inspection:</strong> Thorough assessment of equipment condition.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 font-bold mr-2">•</span>
                        <span><strong className="text-blue-600">Disassembly & Cleaning:</strong> Complete disassembly and thorough cleaning.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 font-bold mr-2">•</span>
                        <span><strong className="text-blue-600">Component Reconditioning:</strong> Repair or replacement of worn components.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 font-bold mr-2">•</span>
                        <span><strong className="text-blue-600">System Upgrades:</strong> Performance and efficiency improvements.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg shadow-md border border-gray-200 p-6 sticky top-24">
                <h3 className="text-xl font-bold text-gray-800 mb-6 pb-4 border-b border-gray-300">
                  Need Assistance?
                </h3>
                <p className="text-gray-700 mb-4">
                  Contact our team for expert advice and service quotes.
                </p>
                <Link href="/contact" className="btn btn-primary w-full text-center mb-4">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
