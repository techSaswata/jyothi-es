"use client";
import React from "react";

export default function ES() {
  return (
    <>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-8 md:mb-0 md:pr-12 animate-fade-in">
              <h2 className="text-4xl font-extrabold text-blue-600 mb-6 tracking-wide border-b-4 border-blue-500 pb-2">
                Engineering Services
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  SJES provides reliable and professional engineering services
                  that support our clients’ need for timely response, technical
                  expertise and quality engineering outcomes, to ensure
                  production processes are fully supported against down-time,
                  potential OH&S issues and during times of proactive change.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  With our knowledge and 24 years’ experience, our expertise in
                  high production environments assists the competitiveness of
                  our clients through innovative design and quality mechanical
                  engineering solutions that increase the output capacity of
                  production, streamline their processes and reduce their costs.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  We have found practical solutions, provided innovative design
                  and addressed production and productivity issues for a large
                  range of applications. With SJES as your partner, you will
                  benefit from:
                </p>
              </div>
              <ul className="list-none md:list-disc px-8 text-blue-600 space-y-2 mt-6">
                <li className="hover:text-blue-800 transition duration-300 flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Improved efficiencies
                </li>
                <li className="hover:text-blue-800 transition duration-300 flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Accurate information
                </li>
                <li className="hover:text-blue-800 transition duration-300 flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Competitive pricing
                </li>
                <li className="hover:text-blue-800 transition duration-300 flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Back up service
                </li>
                <li className="hover:text-blue-800 transition duration-300 flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Design integrity
                </li>
                <li className="hover:text-blue-800 transition duration-300 flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Reduced downtime
                </li>
                <li className="hover:text-blue-800 transition duration-300 flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Spare parts supply
                </li>
              </ul>
              <p className="text-gray-700 mt-6 leading-relaxed bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                At SJES, our team of mechanical engineers take pride in
                providing technical expertise, an open and professional working
                relationship, and identifying the best practical solutions for
                your requirements.
              </p>
            </div>
            {/* <div className="md:w-1/2 animate-slide-in">
                    <img src="https://images.unsplash.com/photo-1581093057306-c3073573f16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Industrial engineering team" className="rounded-lg shadow-lg w-full"/>
                </div> */}
          </div>
        </div>
      </section>
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 1.5s ease-in-out;
        }
        .animate-slide-in {
          animation: slideIn 1.5s ease-in-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}
