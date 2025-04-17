'use client';
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

function ServiceSection() {
  const [activeService, setActiveService] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timeout);
  }, []);

  const services = [
    {
      id: 1,
      title: "Engineering Services",
      description: "SJES provides reliable and professional engineering services that support our clients' need for timely response, technical expertise and quality engineering outcomes.",
      icon: "/engservice.png",
      route: "/es",
      benefits: ["Expert technical consultation", "Customized engineering solutions", "24/7 technical support"],
      applications: ["Power Plants", "Manufacturing Units", "Industrial Facilities"],
      image: "/engservice.png"
    },
    {
      id: 2,
      title: "Reverse Engineering",
      description: "Reverse engineering makes it possible to quickly reproduce spares that are hard to find or no longer available, ensuring continuity in your operations.",
      icon: "/reverse-engineering.png",
      route: "/re",
      benefits: ["Recreation of obsolete parts", "Enhanced product understanding", "Rapid prototyping"],
      applications: ["Legacy Equipment", "Discontinued Parts", "Performance Optimization"],
      image: "/Web Pics/Reverse_Engineering.jpg"
    },
    {
      id: 3,
      title: "Overhauling Services",
      description: "Comprehensive lifecycle management of industrial equipment including erection, commissioning, maintenance, troubleshooting, and major overhauling.",
      icon: "/engservice.png",
      route: "/ovh",
      benefits: ["Extended equipment lifespan", "Improved operational efficiency", "Reduced downtime"],
      applications: ["Turbines", "Industrial Machinery", "Processing Equipment"],
      image: "/engservice.png"
    },
    {
      id: 4,
      title: "3D Scanning",
      description: "Advanced 3D scanning services revolutionize mechanical engineering by providing precise, efficient, and detailed digital representations of physical objects.",
      icon: "/3d-model.png",
      route: "/threed",
      benefits: ["High precision measurements", "Comprehensive digital models", "Quality control applications"],
      applications: ["Complex Part Design", "Quality Inspection", "Reverse Engineering"],
      image: "/Web Pics/3D scan-1.jpg"
    },
    {
      id: 5,
      title: "Spares Manufacturing",
      description: "Custom spares development services to maintain operational efficiency and longevity of mechanical equipment through tailored replacement parts.",
      icon: "/spare-parts.png",
      route: "/spares",
      benefits: ["Custom-engineered components", "Higher quality than OEM parts", "Competitive lead times"],
      applications: ["Critical Equipment", "Production Lines", "Heavy Machinery"],
      image: "/spare-parts.png"
    },
    {
      id: 6,
      title: "Repair & Refurbishment",
      description: "Specialized repair and reconditioning services to extend equipment lifespan, improve performance, and reduce replacement costs.",
      icon: "/repair.png",
      route: "/repair",
      benefits: ["Cost-effective alternatives to replacement", "Performance restoration", "Warranty on repairs"],
      applications: ["Worn Components", "Damaged Equipment", "Performance Degradation"],
      image: "/repair.png"
    },
    {
      id: 7,
      title: "Energy Saving Solutions",
      description: "Comprehensive energy efficiency solutions from component replacement to complete modernization and operation optimization.",
      icon: "/energysave.png",
      route: "/energysave",
      benefits: ["Reduced operational costs", "Lower environmental impact", "Improved system reliability"],
      applications: ["Power Plants", "Industrial Facilities", "Manufacturing Units"],
      image: "/energysave.png"
    },
    {
      id: 8,
      title: "EDM Services",
      description: "Precision Electrical Discharge Machining (EDM) services for creating complex shapes and features in hard metals and alloys.",
      icon: "/skills.png",
      route: "/edm",
      benefits: ["High precision machining", "Complex geometry capabilities", "Work with hardened materials"],
      applications: ["Die Manufacturing", "Aerospace Components", "Medical Devices"],
      image: "/skills.png"
    },
    {
      id: 9,
      title: "Bend Removal",
      description: "Specialized shaft and turbine rotor bend removal services to restore functionality and performance of critical industrial components.",
      icon: "/bending.png",
      route: "/bend",
      benefits: ["Vibration elimination", "Performance restoration", "Extended component life"],
      applications: ["Turbine Rotors", "Drive Shafts", "Industrial Machinery"],
      image: "/bending.png"
    },
    {
      id: 10,
      title: "Dynamic Balancing",
      description: "Precision dynamic balancing services to maintain performance, reliability, and safety of rotating machinery across industries.",
      icon: "/dynamicbalance.png",
      route: "/dynamic",
      benefits: ["Reduced vibration", "Lower maintenance costs", "Extended bearing life"],
      applications: ["Turbines", "Generators", "Industrial Fans"],
      image: "/dynamicbalance.png"
    },
  ];

  const handleServiceClick = (id) => {
    setActiveService(activeService === id ? null : id);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-blue-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 -z-10"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl -z-10 animate-pulse-slow delay-1000"></div>
      
      {/* Animated Industrial Graphics */}
      <div className="absolute top-20 right-10 opacity-10 hidden lg:block animate-float">
        <svg width="150" height="150" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 6V4M12 6V8M12 6H8M16 6H20M4 12V14M4 12V10M4 12H2M4 12H6M19 18L17 14.5M19 18L21 14.5M19 18H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 18H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M10 14.5V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M14 14.5V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M12 14.5V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>
      
      <div className="absolute bottom-20 left-10 opacity-10 hidden lg:block animate-float delay-500">
        <svg width="150" height="150" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 9h3M15 12h3M15 15h3M4 9h8M4 12h8M4 15h8M17 5H7a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <div className={`text-center mb-20 relative transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-block py-1.5 px-6 text-sm font-medium text-blue-600 bg-blue-100 rounded-full mb-5">
            OUR EXPERTISE
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="relative inline-block">
              Engineering Solutions
              <div className="absolute -bottom-3 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"></div>
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide a comprehensive range of specialized engineering solutions
            tailored to meet your industrial challenges and optimize performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 z-20 relative">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className={`group relative rounded-xl overflow-hidden transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              }`}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                boxShadow: activeService === service.id ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' : '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
              onClick={() => handleServiceClick(service.id)}
            >
              {/* Service Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent transition-opacity duration-500"></div>
                
                {/* Title overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-10 h-10 flex-shrink-0 rounded-full bg-white/15 backdrop-blur-sm p-2 flex items-center justify-center">
                      <Image
                        src={service.icon}
                        alt=""
                        width={24}
                        height={24}
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-blue-300 transition-colors">
                      {service.title}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white border border-gray-100">                
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {service.description}
                </p>
                
                {activeService === service.id ? (
                  <div className="mt-6 space-y-6 animate-fadeIn">
                    <div>
                      <h4 className="text-sm uppercase tracking-wider font-semibold text-blue-600 mb-3">Key Benefits</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start text-gray-700">
                            <svg className="w-5 h-5 mr-2 text-blue-500 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm uppercase tracking-wider font-semibold text-blue-600 mb-3">Common Applications</h4>
                      <ul className="space-y-2">
                        {service.applications.map((application, idx) => (
                          <li key={idx} className="flex items-start text-gray-700">
                            <svg className="w-5 h-5 mr-2 text-blue-500 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span>{application}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Link href={service.route} 
                      className="mt-6 inline-flex items-center justify-center w-full py-3 px-4 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium text-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
                    >
                      Learn More
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                ) : (
                  <Link href={service.route} 
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium mt-2 group-hover:translate-x-1 transition-transform duration-300"
                  >
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                )}
              </div>
              
              {/* Edge Glow Effect on active */}
              {activeService === service.id && (
                <div className="absolute inset-0 border-2 border-blue-500 rounded-xl pointer-events-none"></div>
              )}
            </div>
          ))}
        </div>
        
        <div className={`flex justify-center mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Link href="/services" 
            className="inline-flex items-center justify-center py-3 px-8 rounded-lg bg-blue-600 text-white font-medium text-base hover:bg-blue-700 transition-colors duration-300"
          >
            View All Services
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
