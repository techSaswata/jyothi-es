"use client";

import React from "react";

export default function RE() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="mb-8 md:mb-0 md:pr-12 animate-fade-in">
            <h2 className="text-4xl font-extrabold text-blue-600 mb-6 tracking-wide border-b-4 border-blue-500 pb-2">
              Reverse Engineering
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col md:flex-row items-start">
                <img
                  src="/Reverse_Engineering.jpg"
                  alt="Reverse Engineering"
                  className="w-full md:w-1/3 rounded-lg shadow-md mb-4 md:mb-0 md:mr-6"
                />
                <div>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Reverse engineering makes it possible to quickly reproduce
                    spares that are hard to find or no longer available.
                  </p>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    When an original manufacturer no longer exists or no longer
                    makes a part you need, it can have a huge impact on your
                    production capacity. Having to get the part replaced adds
                    more stress as it can lead to excessive down time and
                    potentially also decreased machine efficiency.
                  </p>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    You are in urgent need of a spare part to keep your system
                    running. However, the manufacturer may no longer offer spare
                    parts. The delivery period may be too long. Or you may wish
                    to replace parts with new components with an improved
                    structural/higher-grade MOC. In all these situations, SJES
                    is the best choice for reverse engineering solutions for all
                    static or rotational equipment. Whether the part to be
                    changed is a casting, a turned part, a milled/welded
                    element—thanks to reverse engineering, the reproduction of
                    spare parts is straightforward—irrespective of the make.
                  </p>
                </div>
              </div>
            </div>
            <h2 className="text-4xl font-extrabold text-blue-600 mt-8 mb-6 tracking-wide border-b-4 border-blue-500 pb-2">
              Our Reverse Engineering Process
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <p className="text-gray-700 mb-4 leading-relaxed">
                The first step to producing a replacement part is to construct a
                computer-aided drawing (CAD) of the part needing replacement.
                The CAD drawing is important as it provides a reference for the
                machinist to compare the final part to.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                To create the CAD drawing, we use 3D scan technology to scan the
                object and draw up the part. 3D scanning is a great tool for
                complex parts.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                The tool paths from the CAD drawing are then finalized and
                converted to G-code. The G-code is tested before beginning any
                machining operation on stock to prevent damage and ensure the
                program runs as intended.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                The final step involves checking that the part or parts are all
                of high quality and reflect the original they are based on.
              </p>
            </div>
            <h2 className="text-4xl font-extrabold text-blue-600 mt-8 mb-6 tracking-wide border-b-4 border-blue-500 pb-2">
              Benefits of Reverse Engineering with SJES
            </h2>
            <ul className="list-none md:list-disc px-8 text-blue-600 space-y-2">
              <li className="hover:text-blue-800 transition duration-300">
                Replacements for original parts that are no longer available
              </li>
              <li className="hover:text-blue-800 transition duration-300">
                Short delivery times
              </li>
              <li className="hover:text-blue-800 transition duration-300">
                Easy reproduction
              </li>
              <li className="hover:text-blue-800 transition duration-300">
                Longer service life by upgraded design or higher-grade MOC
              </li>
              <li className="hover:text-blue-800 transition duration-300">
                Fully surfaced CAD models of design concepts or replacement
                parts
              </li>
              <li className="hover:text-blue-800 transition duration-300">
                High degree of precision and accuracy
              </li>
              <li className="hover:text-blue-800 transition duration-300">
                On-machine and in-line inspection
              </li>
              <li className="hover:text-blue-800 transition duration-300">
                CAD comparison and proper tolerances
              </li>
            </ul>
            <p className="text-gray-700 mt-6 leading-relaxed bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              Our focus is always on providing the best possible service that
              saves you time and money.
            </p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 1.5s ease-in-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}
