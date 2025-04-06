'use client';
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function ServiceSection() {
  const [activeService, setActiveService] = useState(null);

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
      image: "/reverse-engineering.png"
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
      image: "/3d-model.png"
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
    <section className="py-24 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white -z-10 animate-gradient"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10 animate-pulse-slow delay-1000"></div>
      
      {/* Animated Industrial Graphics */}
      <div className="absolute top-20 right-10 opacity-10 hidden lg:block animate-float">
        <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 6V4M12 6V8M12 6H8M16 6H20M4 12V14M4 12V10M4 12H2M4 12H6M19 18L17 14.5M19 18L21 14.5M19 18H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 18H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M10 14.5V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M14 14.5V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M12 14.5V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16 relative">
          <span className="inline-block py-1 px-3 text-sm font-medium text-primary bg-primary/10 rounded-full mb-3 animate-fade-in">
            OUR EXPERTISE
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-slide-up">
            Engineering Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up delay-200">
            We provide a comprehensive range of specialized engineering solutions
            tailored to meet your industrial challenges and optimize performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 z-20 relative">
          {services.map((service) => (
            <div 
              key={service.id}
              className={`group cursor-pointer rounded-2xl transition-all duration-500 overflow-hidden ${
                activeService === service.id 
                  ? "ring-2 ring-primary shadow-lg transform scale-[1.02]" 
                  : "bg-white shadow-sm hover:shadow-xl border border-gray-100"
              }`}
              onClick={() => handleServiceClick(service.id)}
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-110"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-8">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 relative mr-4 flex-shrink-0">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={48}
                      height={48}
                      className="object-contain transition-transform duration-300 group-hover:scale-110"
                      unoptimized
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-6 line-clamp-2">
                  {service.description}
                </p>
                
                {activeService === service.id && (
                  <div className="mt-4 space-y-6 animate-fadeIn">
                    <div>
                      <h4 className="text-sm uppercase tracking-wider font-semibold text-primary mb-2">Key Benefits</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-gray-700">
                            <svg className="w-4 h-4 mr-2 text-primary" viewBox="0 0 24 24" fill="none">
                              <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm uppercase tracking-wider font-semibold text-primary mb-2">Applications</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.applications.map((app, idx) => (
                          <span key={idx} className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="mt-6 flex justify-between items-center">
                  <Link
                    href={service.route}
                    className="inline-flex items-center text-primary font-medium group-hover:translate-x-1 transition-transform"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M13.75 6.75L19.25 12L13.75 17.25"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M19 12H4.75"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                  
                  <button 
                    className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-primary rounded-full hover:bg-gray-100 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleServiceClick(service.id);
                    }}
                  >
                    <svg 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none"
                      className={`transform transition-transform duration-300 ${activeService === service.id ? 'rotate-180' : ''}`}
                    >
                      <path 
                        d="M6 9L12 15L18 9" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4">
            <svg width="200" height="200" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.7519 11.1679L11.5547 9.03647C10.8901 8.59343 10 9.06982 10 9.86852V14.1315C10 14.9302 10.8901 15.4066 11.5547 14.9635L14.7519 12.8321C15.3457 12.4362 15.3457 11.5638 14.7519 11.1679Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21 12C21.0034 13.3199 20.6951 14.6219 20.1 15.8C19.3944 17.2118 18.3098 18.3825 16.9674 19.1929C15.6251 20.0032 14.0782 20.4238 12.5 20.4167C11.1801 20.4201 9.87812 20.1118 8.7 19.5167L3 21L4.48333 15.3C3.88825 14.1219 3.57997 12.8199 3.58333 11.5C3.57621 9.92179 3.99677 8.37488 4.80711 7.03258C5.61745 5.69028 6.78816 4.60559 8.2 3.9C9.37812 3.30491 10.6801 2.99664 12 3H12.5C14.6217 3.01156 16.6566 3.86572 18.1569 5.36604C19.6572 6.86637 20.5114 8.90131 20.5229 11.0229V11.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          
          <div className="max-w-3xl relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Need Custom Engineering Solutions?</h3>
            <p className="text-lg text-gray-700 mb-8">
              Our team of experts is ready to discuss your specific requirements and develop tailored solutions 
              for your industrial challenges. Contact us today to explore how we can enhance your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn btn-primary">
                Request a Consultation
              </Link>
              <Link href="/about" className="btn bg-white border border-gray-300 text-gray-700 hover:bg-gray-50">
                Learn About Our Expertise
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 15s ease infinite;
        }
        .animate-slide-up {
          animation: slideUp 0.5s ease-out forwards;
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .delay-200 {
          animation-delay: 200ms;
        }
        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </section>
  );
}

export default ServiceSection;
