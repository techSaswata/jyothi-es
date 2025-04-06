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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-4xl">
            Erection, Commissioning & Overhauling Services
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Professional industrial services for optimal performance, reliability, and longevity of your equipment
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm">
            <Link href="/" className="text-primary hover:text-primary-dark">Home</Link>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-gray-600">Overhauling Services</span>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Service Navigation Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg shadow-sm border border-gray-200 p-6 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-200">
                  Our Services
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/es" className="flex items-center py-2 px-3 text-gray-700 hover:bg-gray-100 hover:text-primary rounded-md transition-colors">
                      <span className="mr-2">→</span>
                      Engineering Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/re" className="flex items-center py-2 px-3 text-gray-700 hover:bg-gray-100 hover:text-primary rounded-md transition-colors">
                      <span className="mr-2">→</span>
                      Reverse Engineering
                    </Link>
                  </li>
                  <li>
                    <Link href="/ovh" className="flex items-center py-2 px-3 text-primary font-semibold bg-primary/5 rounded-md transition-colors">
                      <span className="mr-2">→</span>
                      Overhauling Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/threed" className="flex items-center py-2 px-3 text-gray-700 hover:bg-gray-100 hover:text-primary rounded-md transition-colors">
                      <span className="mr-2">→</span>
                      3D Scanning
                    </Link>
                  </li>
                  <li>
                    <Link href="/spares" className="flex items-center py-2 px-3 text-gray-700 hover:bg-gray-100 hover:text-primary rounded-md transition-colors">
                      <span className="mr-2">→</span>
                      Spares Manufacturing
                    </Link>
                  </li>
                  <li>
                    <Link href="/repair" className="flex items-center py-2 px-3 text-gray-700 hover:bg-gray-100 hover:text-primary rounded-md transition-colors">
                      <span className="mr-2">→</span>
                      Repair & Refurbishment
                    </Link>
                  </li>
                </ul>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Need Assistance?</h4>
                  <p className="text-gray-600 mb-4">Contact our team for expert advice and service quotes</p>
                  <Link href="/contact" className="btn btn-primary w-full text-center">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Main Content Area */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Comprehensive Lifecycle Management Services
                </h2>
                
                <p className="lead text-xl text-gray-600 mb-8">
                  The lifecycle management of industrial equipment encompasses a
                  broad range of services, including erection, commissioning,
                  maintenance, troubleshooting, and major overhauling. These
                  services are critical for ensuring the optimal performance,
                  reliability, and longevity of machinery and systems across various
                  industries.
                </p>
                
                <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-8">
                  <p className="italic text-gray-700">
                    "These services ensure that equipment is installed correctly,
                    operates efficiently, and is maintained in optimal condition. By
                    leveraging advanced technologies, skilled technicians, and
                    comprehensive quality assurance processes, we provide essential support
                    for the continuous and reliable operation of machinery across various industries."
                  </p>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-3">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </span>
                  Key Components of Our Services
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                  {/* Service Card - Erection */}
                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Erection Services</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-2">•</span>
                        <span><strong className="text-primary">Site Preparation:</strong> Assessing and preparing the site for equipment installation.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-2">•</span>
                        <span><strong className="text-primary">Structural Assembly:</strong> Constructing foundations and frameworks.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-2">•</span>
                        <span><strong className="text-primary">Mechanical Installation:</strong> Assembling all mechanical components.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-2">•</span>
                        <span><strong className="text-primary">Alignment & Calibration:</strong> Precise alignment for optimal performance.</span>
                      </li>
                    </ul>
                  </div>
                  
                  {/* Service Card - Commissioning */}
                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Commissioning Services</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-2">•</span>
                        <span><strong className="text-primary">Pre-Commissioning:</strong> Initial inspections and operational tests.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-2">•</span>
                        <span><strong className="text-primary">System Testing:</strong> Load tests, performance tests, and safety checks.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-2">•</span>
                        <span><strong className="text-primary">Functionality Verification:</strong> Confirming all components meet specifications.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-2">•</span>
                        <span><strong className="text-primary">Operational Training:</strong> Staff training on equipment operation.</span>
                      </li>
                    </ul>
                  </div>
                  
                  {/* Service Card - Maintenance */}
                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Maintenance Services</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-2">•</span>
                        <span><strong className="text-primary">Preventive Maintenance:</strong> Regular inspections to prevent failures.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-2">•</span>
                        <span><strong className="text-primary">Predictive Maintenance:</strong> Advanced monitoring to predict issues.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-2">•</span>
                        <span><strong className="text-primary">Corrective Maintenance:</strong> Repairs to restore optimal function.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-2">•</span>
                        <span><strong className="text-primary">Parts Replacement:</strong> High-quality spare parts replacement.</span>
                      </li>
                    </ul>
                  </div>
                  
                  {/* Service Card - Overhauling */}
                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Major Overhauling</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-2">•</span>
                        <span><strong className="text-primary">Comprehensive Inspection:</strong> Thorough assessment of equipment condition.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-2">•</span>
                        <span><strong className="text-primary">Disassembly & Cleaning:</strong> Complete disassembly and thorough cleaning.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-2">•</span>
                        <span><strong className="text-primary">Component Reconditioning:</strong> Repair or replacement of worn components.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-2">•</span>
                        <span><strong className="text-primary">System Upgrades:</strong> Performance and efficiency improvements.</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-3">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  Industries We Serve
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
                  <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <span className="text-primary mr-3">✓</span>
                    <span className="font-medium">Power Generation Plants</span>
                  </div>
                  <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <span className="text-primary mr-3">✓</span>
                    <span className="font-medium">Cement Manufacturing</span>
                  </div>
                  <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <span className="text-primary mr-3">✓</span>
                    <span className="font-medium">Paper Industries</span>
                  </div>
                  <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <span className="text-primary mr-3">✓</span>
                    <span className="font-medium">Sugar Processing</span>
                  </div>
                  <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <span className="text-primary mr-3">✓</span>
                    <span className="font-medium">Metal Fabrication</span>
                  </div>
                  <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <span className="text-primary mr-3">✓</span>
                    <span className="font-medium">Oil & Gas Refineries</span>
                  </div>
                  <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <span className="text-primary mr-3">✓</span>
                    <span className="font-medium">Fertilizer Production</span>
                  </div>
                  <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <span className="text-primary mr-3">✓</span>
                    <span className="font-medium">Manufacturing Units</span>
                  </div>
                </div>
                
                <div className="my-12 bg-gray-50 rounded-xl p-8 border border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Optimize Your Equipment Performance?</h3>
                  <p className="text-gray-700 mb-6">
                    Contact our team of experts to discuss how our comprehensive erection, commissioning,
                    and overhauling services can help extend the lifespan of your equipment, improve operational
                    efficiency, and reduce downtime.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/contact" className="btn btn-primary">
                      Request a Quote
                    </Link>
                    <Link href="/about" className="btn bg-white border border-gray-300 text-gray-700 hover:bg-gray-50">
                      Learn About Our Expertise
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
