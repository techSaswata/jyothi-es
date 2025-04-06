import React from "react";

export default function THREED() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="mb-8 md:mb-0 md:pr-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              3D scanning
            </h2>
            <p className="text-gray-600 mb-4">
              3D scanning services have revolutionized the field of mechanical
              engineering by providing precise, efficient, and detailed digital
              representations of physical objects. These services are
              particularly valuable for the development of technical drawings
              and mechanical equipment spares, offering numerous advantages over
              traditional methods.
            </p>
            <p className="text-gray-600 mb-4">
              3D scanning involves capturing the physical shape and dimensions
              of an object using specialized equipment. The data collected is
              then processed to create a digital 3D model. This model can be
              used for various applications, including reverse engineering,
              quality control, and design.
            </p>

            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Applications in Drawing Development
            </h3>
            <ol className="list-decimal px-8">
              <li>Technical Drawings:</li>
              <ul className="list-none md:list-disc px-8">
                <li className="text-gray-800 mb-1">
                  <span className="font-bold text-blue-400">
                    Reverse Engineering:
                  </span>{" "}
                  By scanning existing parts, engineers can create accurate
                  technical drawings. This is especially useful when original
                  drawings are unavailable.
                </li>
                <li className="text-gray-800 mb-1">
                  <span className="font-bold text-blue-400">
                    Design Iteration:
                  </span>{" "}
                  3D models can be quickly altered and refined to develop
                  detailed drawings for manufacturing.
                </li>
                <li className="text-gray-800 mb-1">
                  <span className="font-bold text-blue-400">
                    Quality Assurance:{" "}
                  </span>
                  Scanned models can be compared with original designs to
                  identify discrepancies and ensure precision.
                </li>
              </ul>
              <li>Spares Development</li>
              <ul className="list-none md:list-disc px-8">
                <li className="text-gray-800 mb-1">
                  <span className="font-bold text-blue-400">
                    Replacement Parts:{" "}
                  </span>
                  Scanning damaged or worn parts allows for the creation of
                  exact replicas, ensuring that spare parts fit and function
                  correctly.
                </li>
                <li className="text-gray-800 mb-1">
                  <span className="font-bold text-blue-400">
                    Legacy Parts:{" "}
                  </span>{" "}
                  For older equipment with no digital documentation, 3D scanning
                  helps in creating digital records and spares.
                </li>
                <li className="text-gray-800 mb-1">
                  <span className="font-bold text-blue-400">
                    Customization:
                  </span>
                  Scanned data can be used to modify and improve parts, offering
                  customized solutions for specific mechanical needs.
                </li>
              </ul>
            </ol>

            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Benefits of 3D Scanning Services
            </h3>
            <ul className="list-none md:list-decimal px-8 mb-4">
              <li className="text-gray-800 mb-1">
                <span className="font-bold text-blue-400">
                  Accuracy and Precision:{" "}
                </span>
                3D scanners capture intricate details with high accuracy,
                ensuring that digital models are precise representations of
                physical objects.
              </li>
              <li className="text-gray-800 mb-1">
                <span className="font-bold text-blue-400">Efficiency: </span>
                Reduces the time required to create drawings and develop parts
                compared to traditional methods.
              </li>
              <li className="text-gray-800 mb-1">
                <span className="font-bold text-blue-400">
                  Cost-Effectiveness:{" "}
                </span>
                Minimizes material wastage and reduces the need for physical
                prototypes, lowering overall development costs.
              </li>
              <li className="text-gray-800 mb-1">
                <span className="font-bold text-blue-400">Flexibility: </span>
                Suitable for a wide range of materials and sizes, from small
                components to large machinery.
              </li>
              <li className="text-gray-800 mb-1">
                <span className="font-bold text-blue-400">
                  Enhanced Documentation:{" "}
                </span>
                Provides detailed digital records that can be easily archived,
                shared, and modified.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
