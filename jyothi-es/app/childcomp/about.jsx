"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    title: "Technical Excellence",
    description: "Our team brings deep expertise and innovative solutions to every project, ensuring optimal results.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    title: "Industry Experience",
    description: "Specializing in high-capacity production environments across diverse industries with decades of combined expertise.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    title: "Quality Assurance",
    description: "Committed to delivering exceptional results that exceed expectations through rigorous quality control processes.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    )
  },
  {
    title: "Customer Focus",
    description: "Building lasting relationships through exceptional service, transparent communication and dedicated support.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  }
];

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "200+", label: "Projects Completed" },
  { value: "50+", label: "Industry Partners" },
  { value: "24/7", label: "Technical Support" }
];

const timeline = [
  {
    year: "2008",
    title: "Company Founded",
    description: "SJES was established with a vision to provide exceptional engineering services."
  },
  {
    year: "2012",
    title: "Expansion of Services",
    description: "Added comprehensive manufacturing capabilities to our service portfolio."
  },
  {
    year: "2016",
    title: "Industry Recognition",
    description: "Received certification for excellence in engineering services delivery."
  },
  {
    year: "2020",
    title: "Technology Advancement",
    description: "Implemented cutting-edge technologies for enhanced precision and efficiency."
  }
];

const About = ({ id, className }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id={id} className={`bg-gray-50 ${className || ''}`}>
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="relative">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/Web Pics/About us Header-1.jpg"
                alt="Sri Jyothi Engineering Services"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/30"></div> {/* Add overlay for better text contrast */}
            </div>
          </div>

          <div className="relative">
            <div className="relative">
              <div className="inline-block py-1.5 px-6 text-sm font-medium text-white bg-blue-600 rounded-full mb-5">
                ABOUT US
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-8">
                <span className="relative inline-block">
                  Sri Jyothi Engineering Services
                  <div className="absolute -bottom-3 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"></div>
                </span>
              </h2>
              <div className="prose prose-lg text-gray-700 max-w-none">
                <p className="mb-6">
                  SJES is a leading India-based engineering service and manufacturing company
                  specializing in high-capacity production environments across various industries,
                  with particular expertise in the Energy sector.
                </p>
                <p className="mb-6">
                  With an impressive and growing client list, SJES has built a reputation for
                  exceptional customer service, technical expertise, reliability, and quality
                  engineering outcomes.
                </p>
                <p>
                  Our vision is to be the most trusted specialist services group in the delivery
                  of Erection, Commissioning, Maintenance, and Manufacture & Supply of spares.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className={`mt-32 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="text-center mb-16 relative">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
              Why Choose SJES?
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine technical expertise with industry experience to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group p-8 bg-white rounded-xl border border-gray-200 hover:border-blue-300 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="absolute right-0 bottom-0 w-24 h-24 bg-blue-100 rounded-tl-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center text-white mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h4>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Timeline Section */}
        <div className={`mt-32 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
              Our Journey
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A brief history of our growth and achievements over the years.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-cyan-500"></div>
            
            <div className="space-y-24 relative">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                  <div className="w-1/2 flex justify-center">
                    <div className="rounded-xl overflow-hidden shadow-lg w-full max-w-xs transform hover:-translate-y-2 transition-transform duration-300">
                      <div className="h-40 bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                        <span className="text-4xl font-bold text-white">{item.year}</span>
                      </div>
                      <div className="p-5 bg-white">
                        <h4 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h4>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full border-4 border-blue-500 z-10"></div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`mt-32 text-center relative transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-12 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
            
            <h3 className="text-3xl font-bold text-white mb-6 relative z-10">Ready to Partner with Us?</h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto relative z-10">
              SJES welcomes the opportunity to discuss how we can add value to your next project,
              existing asset, or production cycle.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 rounded-lg bg-white text-blue-600 font-semibold text-lg hover:bg-blue-50 transition-colors relative z-10"
            >
              Get in Touch
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
