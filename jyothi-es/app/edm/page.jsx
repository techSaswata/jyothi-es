'use client';
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { initParticles, initTypewriter } from "@/app/animation";

export default function EDMServices() {
  const titleRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    // Initialize particle effect
    if (canvasRef.current) {
      const cleanup = initParticles('background-particles', '#1a56db', 50);
      
      // Type effect for title
      if (titleRef.current) {
        setTimeout(() => {
          initTypewriter(
            titleRef.current, 
            " Machining Services",
            40
          );
        }, 500);
      }
      
      return cleanup;
    }
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section with Parallax Effect */}
      <div className="relative h-[60vh] overflow-hidden">
        {/* Particle Canvas */}
        <canvas id="background-particles" ref={canvasRef} className="absolute inset-0 z-10"></canvas>
        
        <div className="absolute inset-0">
          <Image
            src="/Web Pics/Home page/Home Header-2.webp"
            alt="EDM Services"
            fill
            className="object-cover object-center parallax"
            data-speed="0.3"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-gray-800/80 z-10"></div>
        </div>
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-4xl min-h-[4rem]"></h1>
          <p className="text-xl text-gray-100 max-w-2xl animate-slide-up delay-200">
            Precision electrical discharge machining for complex shapes and features in hard metals and alloys
          </p>
          <div className="mt-8 reveal delay-300">
            <Link 
              href="/contact" 
              className="btn btn-primary inline-flex items-center px-6 py-3 bg-white text-primary hover:bg-gray-100 hover-lift rounded-md shadow-sm"
            >
              Request a Quote
              <svg className="ml-2 h-5 w-5 animate-slide-left delay-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Breadcrumb with Animation */}
      <div className="bg-gray-50 py-4 border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm animate-fade-in">
            <Link href="/" className="text-primary hover:text-primary-dark font-medium">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-800 font-medium">EDM Services</span>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <section className="py-16 bg-white relative">
        <div className="absolute inset-0 bg-animated-dots opacity-5 pointer-events-none"></div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content Area */}
            <div className="lg:col-span-8">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 reveal">
                  Advanced Electrical Discharge Machining
                </h2>
                
                {/* Image Gallery */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="relative h-64 rounded-lg overflow-hidden group shadow-md reveal delay-100">
                    <Image
                      src="/Web Pics/Spares/BFP Special Ring(1).jpg"
                      alt="EDM Process"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <span className="text-white p-4 font-medium">BFP Special Ring</span>
                    </div>
                  </div>
                  <div className="relative h-64 rounded-lg overflow-hidden group shadow-md reveal delay-200">
                    <Image
                      src="/Web Pics/Spares/BFP-Shafer.jpg"
                      alt="EDM Equipment"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <span className="text-white p-4 font-medium">BFP Shafer Components</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 border-l-4 border-primary p-6 rounded-r-lg mb-8 animate-fade-in shadow-sm reveal">
                  <p className="italic text-gray-800">
                    EDM (Electrical Discharge Machining), also known as Spark Erosion / Spark Machining / Wire erosion / Die sinking, 
                    is a specialized manufacturing process that creates precise shapes using controlled electrical discharges (sparks).
                  </p>
                </div>
                
                <p className="text-gray-800 mb-6 leading-relaxed reveal delay-100">
                  Spark erosion removes material from a workpiece with current discharges between two electrodes separated by a dielectric liquid 
                  subject to voltage. The dielectric fluid acts as a conductor and a cooling agent during the sparking process, 
                  allowing for exceptional precision with tolerances as tight as 0.1 microns.
                </p>
                
                <p className="text-gray-800 mb-8 leading-relaxed reveal delay-200">
                  It's possible to work to really tight tolerances of up to 0.1 microns; this gives you a feel for the potential level 
                  of detail that's achievable. Our EDM services can handle complex geometries and hard materials that conventional 
                  machining processes cannot.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 my-6 reveal">Key Benefits</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-8">
                  {[
                    { title: "Material Versatility", icon: "✓", desc: "Works with any conductive material regardless of hardness" },
                    { title: "Complex Geometries", icon: "✓", desc: "Creates intricate shapes impossible with conventional methods" },
                    { title: "No Mechanical Stress", icon: "✓", desc: "Process doesn't exert force on the workpiece" },
                    { title: "Exceptional Accuracy", icon: "✓", desc: "Achieve tolerances as tight as 0.1 microns" }
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex flex-col p-5 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover-lift reveal" style={{ animationDelay: `${idx * 100}ms` }}>
                      <div className="flex items-center mb-2">
                        <span className="text-primary text-lg font-bold mr-3 animate-pulse">{benefit.icon}</span>
                        <span className="font-semibold text-gray-900">{benefit.title}</span>
                      </div>
                      <p className="text-gray-700 text-sm">{benefit.desc}</p>
                    </div>
                  ))}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 my-6 reveal">Applications</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-8">
                  {[
                    { name: "Aerospace components", desc: "High-precision parts for aircraft and spacecraft", img: "/Web Pics/Spares/Impellers.jpg" },
                    { name: "Industrial Machinery", desc: "Specialized components for critical equipment", img: "/Web Pics/Spares/Special bolts.jpg" },
                    { name: "Tool & die manufacturing", desc: "Custom tooling with complex geometries", img: "/Web Pics/Spares/Turbine special bolts.jpg" },
                    { name: "Turbine Components", desc: "Precision parts for power generation", img: "/Web Pics/Spares/Kit chamber stack(1).jpeg" }
                  ].map((app, idx) => (
                    <div key={idx} className="flex flex-col p-5 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover-glow reveal" style={{ animationDelay: `${idx * 100}ms` }}>
                      <div className="flex items-center mb-2">
                        <span className="text-primary text-lg font-bold mr-3 animate-pulse">{idx === 0 ? "✓" : "→"}</span>
                        <span className="font-semibold text-gray-900">{app.name}</span>
                      </div>
                      <div className="relative h-32 mb-3 rounded-md overflow-hidden">
                        <Image
                          src={app.img}
                          alt={app.name}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-105"
                          unoptimized
                        />
                      </div>
                      <p className="text-gray-700 text-sm">{app.desc}</p>
                    </div>
                  ))}
                </div>
                
                <div className="my-12 bg-gradient-to-r from-blue-50 to-gray-50 rounded-xl p-8 border border-gray-200 shadow-sm reveal hover-lift">
                  <div className="absolute top-0 right-0 p-4 transform -translate-y-1/2 translate-x-1/2">
                    <div className="text-primary text-5xl font-bold animate-float">✨</div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Precision Machining Services?</h3>
                  <p className="text-gray-800 mb-6">
                    Contact our specialists to discuss your specific requirements for EDM services.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/contact" className="btn btn-primary inline-flex items-center justify-center px-6 py-3 rounded-md shadow-sm text-white font-medium bg-primary hover:bg-primary/90 transition-colors hover-lift">
                      <span>Request a Quote</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* Additional Service Images */}
                <h3 className="text-2xl font-bold text-gray-900 my-6 reveal">Our Machining Capabilities</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
                  <div className="relative h-48 rounded-lg overflow-hidden shadow-md reveal delay-100">
                    <Image
                      src="/Web Pics/Spares/BFP-wearings-3.jpg"
                      alt="Machining Capability 1"
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <span className="text-white p-3 font-medium">Precision Engineering</span>
                    </div>
                  </div>
                  <div className="relative h-48 rounded-lg overflow-hidden shadow-md reveal delay-200">
                    <Image
                      src="/Web Pics/Spares/BFP-Shaft-cylindrical grinding.jpg"
                      alt="Machining Capability 2"
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <span className="text-white p-3 font-medium">Shaft Grinding</span>
                    </div>
                  </div>
                  <div className="relative h-48 rounded-lg overflow-hidden shadow-md reveal delay-300">
                    <Image
                      src="/Web Pics/Spares/IMG-20240418-WA0007.jpg"
                      alt="Machining Capability 3"
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <span className="text-white p-3 font-medium">Advanced Components</span>
                    </div>
                  </div>
                </div>

                {/* Showcase More Images */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                  <div className="relative h-72 rounded-lg overflow-hidden shadow-md reveal delay-100">
                    <Image
                      src="/Web Pics/Services/vacuum pump overhauling.jpg"
                      alt="Vacuum Pump Overhaul"
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <span className="text-white p-4 font-medium">Vacuum Pump Overhaul</span>
                    </div>
                  </div>
                  <div className="relative h-72 rounded-lg overflow-hidden shadow-md reveal delay-200">
                    <Image
                      src="/Web Pics/Services/firefighting pumps.jpg"
                      alt="Firefighting Pumps"
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <span className="text-white p-4 font-medium">Firefighting Pumps Manufacturing</span>
                    </div>
                  </div>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16 reveal">
                  <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover-lift">
                    <div className="text-4xl font-bold text-primary mb-2 counter" data-count="99.9">0</div>
                    <div className="text-sm text-gray-600 uppercase">Precision Rate (%)</div>
                  </div>
                  <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover-lift">
                    <div className="text-4xl font-bold text-primary mb-2 counter" data-count="1250">0</div>
                    <div className="text-sm text-gray-600 uppercase">Projects Completed</div>
                  </div>
                  <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover-lift">
                    <div className="text-4xl font-bold text-primary mb-2 counter" data-count="15">0</div>
                    <div className="text-sm text-gray-600 uppercase">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-24 reveal">
                <h3 className="text-xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-200">
                  Our Services
                </h3>
                <ul className="space-y-3">
                  {[
                    { title: "Engineering Services", path: "/es" },
                    { title: "Reverse Engineering", path: "/re" },
                    { title: "Overhauling Services", path: "/ovh" },
                    { title: "3D Scanning", path: "/threed" },
                    { title: "Spares Manufacturing", path: "/spares" },
                    { title: "EDM Services", path: "/edm", active: true }
                  ].map((service, idx) => (
                    <li key={idx} className="reveal" style={{ animationDelay: `${idx * 100}ms` }}>
                      <Link 
                        href={service.path} 
                        className={`flex items-center py-2.5 px-4 text-gray-700 hover:bg-gray-50 hover:text-primary rounded-md transition-colors duration-300 ${
                          service.active ? 'text-primary font-semibold bg-blue-50' : ''
                        } hover-lift`}
                      >
                        <span className={`mr-2 ${service.active ? 'text-primary' : 'text-gray-400'}`}>
                          {service.active ? '→' : '•'}
                        </span>
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 pt-6 border-t border-gray-200 reveal">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Recent Projects</h4>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="relative w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                        <Image
                          src="/Web Pics/Services/condenser tubes replacement.jpg"
                          alt="Condenser Tubes"
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      </div>
                      <div>
                        <h5 className="text-sm font-semibold">Condenser Tubes Replacement</h5>
                        <p className="text-xs text-gray-600">Precision engineering for power plant equipment</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="relative w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                        <Image
                          src="/Web Pics/Services/vacuum pump balancing.jpg"
                          alt="Vacuum Pump"
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      </div>
                      <div>
                        <h5 className="text-sm font-semibold">Vacuum Pump Balancing</h5>
                        <p className="text-xs text-gray-600">High-precision dynamic balancing services</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="relative w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                        <Image
                          src="/Web Pics/Spares/BFP wearings.jpg"
                          alt="BFP Wearings"
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      </div>
                      <div>
                        <h5 className="text-sm font-semibold">BFP Wearings Manufacturing</h5>
                        <p className="text-xs text-gray-600">Custom-engineered components for boiler feed pumps</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200 reveal">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Technical Specs</h4>
                  <ul className="space-y-4 text-sm">
                    {[
                      { label: "Tolerance", value: "± 0.1 microns" },
                      { label: "Surface finish", value: "Ra 0.1 μm" },
                      { label: "Material capability", value: "All conductive" },
                      { label: "Max workpiece size", value: "1000mm x 800mm" },
                      { label: "Wire diameter", value: "0.1 - 0.3mm" }
                    ].map((spec, idx) => (
                      <li key={idx} className="flex justify-between items-center p-2 bg-gray-50 rounded animate-fade-in hover-lift" style={{ animationDelay: `${idx * 100}ms` }}>
                        <span className="text-gray-600 font-medium">{spec.label}:</span>
                        <span className="font-semibold text-gray-800">{spec.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Featured Product */}
                <div className="mt-8 pt-6 border-t border-gray-200 reveal delay-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Featured Product</h4>
                  <div className="relative h-48 rounded-lg overflow-hidden shadow-md mb-4">
                    <Image
                      src="/Web Pics/Spares/Special bolts of turbine.jpg"
                      alt="Featured Product"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <span className="text-white p-3 font-medium">Special Turbine Bolts</span>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Custom-engineered turbine bolts with tight tolerances and exceptional durability
                  </p>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200 reveal delay-300">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Need Assistance?</h4>
                  <p className="text-gray-700 mb-4">Contact our team for expert advice</p>
                  <Link href="/contact" className="btn btn-primary w-full inline-flex items-center justify-center px-4 py-3 rounded-md shadow-sm text-white font-medium bg-primary hover:bg-primary/90 transition-colors hover-lift">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 animate-pulse" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    Contact Us
                  </Link>
                </div>

                {/* Testimonial */}
                <div className="mt-8 pt-6 border-t border-gray-200 reveal delay-400">
                  <div className="bg-blue-50 p-4 rounded-lg relative">
                    <div className="text-5xl text-primary absolute -top-4 left-4 opacity-30">"</div>
                    <p className="text-gray-700 text-sm italic mb-4 relative z-10">
                      The EDM services provided by Sri Jyothi Engineering are exceptional. They created complex parts for our aerospace project with incredible precision.
                    </p>
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center text-primary font-bold">AB</div>
                      <div className="ml-3">
                        <div className="text-sm font-semibold">Arun Bhatia</div>
                        <div className="text-xs text-gray-500">Chief Engineer, Aerospace Solutions</div>
                      </div>
                    </div>
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
