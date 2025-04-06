"use client";
import React from "react";

export default function ES() {
  return (
    <>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-8 md:mb-0 md:pr-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Engineering Services
              </h2>
              <p className="text-gray-600 mb-4">
                SJES provides reliable and professional engineering services
                that support our clients’ need for timely response, technical
                expertise and quality engineering outcomes, to ensure production
                processes are fully supported against down-time, potential OH&S
                issues and during times of proactive change.
              </p>
              <p className="text-gray-600 mb-4">
                With our knowledge and 24 years’ experience, our expertise in
                high production environments assists the competitiveness of our
                clients through innovative design and quality mechanical
                engineering solutions that increase the output capacity of
                production, streamline their processes and reduce their costs.
              </p>
              <p className="text-gray-600 mb-4">
                We have found practical solutions, provided innovative design
                and addressed production and productivity issues for a large
                range of applications. With SJES as your partner, you will
                benefit from:
              </p>

              <ul className="list-none md:list-disc px-8">
                <li>Improved efficiencies</li>
                <li>Accurate information</li>
                <li>Competitive pricing</li>
                <li>Back up service</li>
                <li>Design integrity</li>
                <li>Reduced downtime</li>
                <li>Spare parts supply</li>
              </ul>
              <p className="text-gray-600 mb-4">
                At SJES, our team of mechanical engineers take pride in
                providing technical expertise, an open and professional working
                relationship, and identifying the best practical solutions for
                your requirements.
              </p>
            </div>
            {/* <div className="md:w-1/2">
                    <img src="https://images.unsplash.com/photo-1581093057306-c3073573f16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Industrial engineering team" className="rounded-lg shadow-lg w-full"/>
                </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
