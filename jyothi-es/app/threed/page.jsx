"use client";

import React from "react";

export default function THREED() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="mb-8 md:mb-0 md:pr-12 animate-fade-in">
            <h2 className="text-4xl font-extrabold text-blue-600 mb-6 tracking-wide border-b-4 border-blue-500 pb-2">
              3D Scanning
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              3D scanning services have revolutionized the field of mechanical
              engineering by providing precise, efficient, and detailed digital
              representations of physical objects. These services are
              particularly valuable for the development of technical drawings
              and mechanical equipment spares, offering numerous advantages over
              traditional methods.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              3D scanning involves capturing the physical shape and dimensions
              of an object using specialized equipment. The data collected is
              then processed to create a digital 3D model. This model can be
              used for various applications, including reverse engineering,
              quality control, and design.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {/* Card 1 */}
          <div className="bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 animate-slide-in">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">
              Applications in Drawing Development
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>
                <span className="font-bold text-blue-500">Reverse Engineering:</span>{" "}
                By scanning existing parts, engineers can create accurate
                technical drawings. This is especially useful when original
                drawings are unavailable.
              </li>
              <li>
                <span className="font-bold text-blue-500">Design Iteration:</span>{" "}
                3D models can be quickly altered and refined to develop detailed
                drawings for manufacturing.
              </li>
              <li>
                <span className="font-bold text-blue-500">Quality Assurance:</span>{" "}
                Scanned models can be compared with original designs to identify
                discrepancies and ensure precision.
              </li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 animate-slide-in">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">
              Spares Development
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>
                <span className="font-bold text-blue-500">Replacement Parts:</span>{" "}
                Scanning damaged or worn parts allows for the creation of exact
                replicas, ensuring that spare parts fit and function correctly.
              </li>
              <li>
                <span className="font-bold text-blue-500">Legacy Parts:</span>{" "}
                For older equipment with no digital documentation, 3D scanning
                helps in creating digital records and spares.
              </li>
              <li>
                <span className="font-bold text-blue-500">Customization:</span>{" "}
                Scanned data can be used to modify and improve parts, offering
                customized solutions for specific mechanical needs.
              </li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 animate-slide-in">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">
              Benefits of 3D Scanning Services
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>
                <span className="font-bold text-blue-500">Accuracy and Precision:</span>{" "}
                3D scanners capture intricate details with high accuracy,
                ensuring that digital models are precise representations of
                physical objects.
              </li>
              <li>
                <span className="font-bold text-blue-500">Efficiency:</span>{" "}
                Reduces the time required to create drawings and develop parts
                compared to traditional methods.
              </li>
              <li>
                <span className="font-bold text-blue-500">Cost-Effectiveness:</span>{" "}
                Minimizes material wastage and reduces the need for physical
                prototypes, lowering overall development costs.
              </li>
              <li>
                <span className="font-bold text-blue-500">Flexibility:</span>{" "}
                Suitable for a wide range of materials and sizes, from small
                components to large machinery.
              </li>
              <li>
                <span className="font-bold text-blue-500">Enhanced Documentation:</span>{" "}
                Provides detailed digital records that can be easily archived,
                shared, and modified.
              </li>
            </ul>
          </div>
        </div>
      </div>

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
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}
