import React from "react";

export default function page() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-4xl font-extrabold text-blue-600 mb-4 tracking-wide border-b-4 border-blue-500 pb-2">
            Dynamic Balancing
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Dynamic balancing services are essential for maintaining the
            performance, reliability, and safety of rotating machinery across
            various industries. By addressing and correcting imbalances, these
            services ensure that machinery operates smoothly, efficiently, and
            with minimal wear and tear.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Utilizing advanced diagnostic tools, precise balancing techniques,
            and comprehensive verification processes, dynamic balancing services
            provide critical support for the optimal operation of industrial
            equipment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Card 1 */}
          <div className="bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow p-8">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">
              Reduced Vibration
            </h3>
            <p className="text-gray-700">
              Significantly reduces vibration levels, leading to smoother
              operation and less wear on bearings and other components.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow p-8">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">
              Extended Equipment Life
            </h3>
            <p className="text-gray-700">
              Minimizes mechanical stress and wear, extending the lifespan of
              rotating components and reducing maintenance costs.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow p-8">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">
              Improved Performance
            </h3>
            <p className="text-gray-700">
              Enhances the overall performance and efficiency of machinery by
              ensuring that all rotating parts operate smoothly.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow p-8">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">
              Energy Savings
            </h3>
            <p className="text-gray-700">
              Reduces energy consumption by eliminating excessive vibrations and
              friction, leading to more efficient operation.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow p-8">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">
              Increased Safety
            </h3>
            <p className="text-gray-700">
              Improves safety by reducing the risk of mechanical failures and
              accidents caused by imbalanced components.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow p-8">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">
              Compliance with Standards
            </h3>
            <p className="text-gray-700">
              Ensures that equipment meets industry standards and regulatory
              requirements for vibration and balance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
