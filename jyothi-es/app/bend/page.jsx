import React from "react";

export default function page() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-4xl font-extrabold text-blue-600 mb-4 tracking-wide border-b-4 border-blue-500 pb-2">
            Bend Removal
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Shaft or turbine rotor bend removal services are essential for
            maintaining the functionality and performance of critical industrial
            components. These components are vital in various industrial
            applications, including power generation, manufacturing, and
            transportation.
          </p>
          <p className="text-gray-700 leading-relaxed">
            By employing advanced diagnostic, straightening, and verification
            techniques, these services ensure that bent shafts and rotors are
            restored to their precise original specifications. This enhances the
            reliability and efficiency of machinery, extends the lifespan of
            vital components, and provides significant cost savings and
            operational benefits across various industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Card 1 */}
          <div className="bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow p-8">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">
              Restored Performance
            </h3>
            <p className="text-gray-700">
              Ensures that shafts and rotors operate at optimal performance
              levels, improving efficiency and output.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow p-8">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">
              Extended Equipment Life
            </h3>
            <p className="text-gray-700">
              Extends the operational lifespan of critical components, delaying
              the need for expensive replacements.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow p-8">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Cost Savings</h3>
            <p className="text-gray-700">
              Reduces the financial impact of downtime and the costs associated
              with premature equipment failure.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow p-8">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">
              Enhanced Reliability
            </h3>
            <p className="text-gray-700">
              Improves the reliability and safety of machinery by addressing and
              correcting potential failure points.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow p-8">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">
              Compliance and Standards
            </h3>
            <p className="text-gray-700">
              Ensures that all corrections meet industry standards and
              regulatory requirements, maintaining operational compliance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
