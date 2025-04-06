import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../childcomp/header';
import Footer from '../childcomp/footer';
import EDMServiceCard from '../childcomp/edm-service-card';

export const metadata = {
  title: 'Jyothi Engineering Services - Precision Machining & EDM Services',
  description: 'Specialized precision machining services including EDM, CNC, and tool manufacturing with industry-leading accuracy and quality.',
};

export default function ServicesPage() {
  const services = [
    {
      id: 'edm',
      title: 'EDM Services',
      description: 'Electrical Discharge Machining with exceptional precision for complex geometries and hardened materials.',
      icon: '/services/edm-icon.svg',
      imageUrl: '/skills.png',
      link: '/services/edm'
    },
    {
      id: 'cnc',
      title: 'CNC Machining',
      description: 'Computer-controlled precision machining for components with tight tolerances and complex designs.',
      icon: '/services/cnc-icon.svg',
      imageUrl: '/engservice.png',
      link: '/services/cnc'
    },
    {
      id: 'tool-die',
      title: 'Tool & Die Manufacturing',
      description: 'Custom design and production of high-quality tools and dies for various industrial applications.',
      icon: '/services/tool-icon.svg',
      imageUrl: '/reverse-engineering.png',
      link: '/services/tool-manufacturing'
    },
    {
      id: 'precision',
      title: 'Precision Grinding',
      description: 'Surface, cylindrical, and centerless grinding services with exceptional accuracy.',
      icon: '/services/grinding-icon.svg',
      imageUrl: '/repair.png',
      link: '/services/precision-grinding'
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section with Parallax */}
        <section className="relative h-[60vh] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/sjes-logo2.jpeg"
              alt="Engineering Services"
              fill
              className="object-cover object-center"
              priority
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-800/70 z-10"></div>
          </div>
          <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-slide-up">
                Engineering Solutions<br />
                <span className="text-primary">Precision & Excellence</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 animate-slide-up delay-200">
                Cutting-edge machining and manufacturing services delivering 
                industry-leading accuracy and exceptional quality since 1995.
              </p>
              <div className="flex flex-wrap justify-center gap-4 animate-fade-in">
                <Link href="/contact" className="btn btn-primary">
                  Request a Quote
                </Link>
                <Link href="/about" className="btn btn-outline-light">
                  Learn About Our Process
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Service Overview */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 animate-slide-up">Our Engineering Services</h2>
              <p className="text-gray-600 animate-slide-up delay-200">
                We provide comprehensive precision machining and tool manufacturing services
                to meet the most demanding specifications across various industries.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, idx) => (
                <Link href={service.link} key={service.id} className="group">
                  <div className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden h-full border border-gray-200">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={service.imageUrl}
                        alt={service.title}
                        fill
                        className="object-contain transition-transform duration-500 group-hover:scale-110"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {service.description}
                      </p>
                      <span className="text-primary font-medium inline-flex items-center">
                        Learn more
                        <svg className="w-4 h-4 ml-1 group-hover:ml-2 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Service Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="text-primary font-semibold animate-fade-in">FEATURED SERVICE</span>
              <h2 className="text-3xl font-bold mt-2 mb-4 animate-slide-up">Electrical Discharge Machining</h2>
              <p className="text-gray-600 animate-slide-up delay-200">
                Our state-of-the-art EDM capabilities allow for precision machining of complex geometries
                and hard materials with exceptional accuracy.
              </p>
            </div>
            
            <EDMServiceCard />
          </div>
        </section>
        
        {/* Industries Served */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 animate-slide-up">Industries We Serve</h2>
              <p className="text-gray-600 animate-slide-up delay-200">
                Our precision machining and engineering services support critical applications
                across multiple industries.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
              {[
                'Aerospace', 
                'Automotive', 
                'Medical', 
                'Electronics', 
                'Defense', 
                'Oil & Gas',
                'Power Generation',
                'Semiconductor',
                'Tool & Die',
                'Telecommunications',
                'Robotics',
                'Research'
              ].map((industry, idx) => (
                <div 
                  key={idx} 
                  className="bg-white rounded-lg p-4 text-center shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors duration-300">
                    <span className="text-primary font-bold">{industry.charAt(0)}</span>
                  </div>
                  <p className="font-medium text-gray-800">{industry}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4 animate-slide-up">Ready to Start Your Project?</h2>
              <p className="text-lg mb-8 opacity-90 animate-slide-up delay-200">
                Contact our team today to discuss your requirements and get a customized quote
                for your precision machining needs.
              </p>
              <Link href="/contact" className="btn btn-light animate-fade-in">
                Contact Us Today
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
        .animate-slide-up {
          animation: slideUp 0.5s ease-out forwards;
        }
        .delay-200 {
          animation-delay: 200ms;
        }
      `}</style>
    </div>
  );
}