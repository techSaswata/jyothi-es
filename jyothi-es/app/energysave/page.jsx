import React from "react";

export default function page() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-4xl font-extrabold text-blue-600 mb-4 tracking-wide border-b-4 border-blue-500 pb-2">
            Energy Saving Consultancy Services
          </h2>
          <p className="text-gray-700 leading-relaxed">
            There are many means of improving the energy efficiency of a power
            plant – from the replacement of a single component to complete
            modernisation or operation and maintenance solutions. There are also
            many aspects that affect a plant’s energy efficiency, and these need
            to be examined before choosing the suitable improvement solution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Card 1 */}
          <div className="bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow p-8">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">
              Key Factors to Examine
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>
                <span className="font-bold text-blue-500">Fuel System:</span>{" "}
                Assess the type and quality of fuel used and its compatibility
                with the plant's original design.
              </li>
              <li>
                <span className="font-bold text-blue-500">Engine Condition:</span>{" "}
                Evaluate the maintenance and cleanliness of the engine and fuel
                injection system.
              </li>
              <li>
                <span className="font-bold text-blue-500">Cooling System:</span>{" "}
                Check the quality of cooling water and its purification level.
              </li>
              <li>
                <span className="font-bold text-blue-500">Boiler Condition:</span>{" "}
                Inspect the boiler and exhaust gas removal system for
                efficiency.
              </li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow p-8">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">
              Operational Aspects
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>
                <span className="font-bold text-blue-500">Operating Parameters:</span>{" "}
                Ensure the plant operates according to its original design or
                updated needs.
              </li>
              <li>
                <span className="font-bold text-blue-500">Engine Load:</span>{" "}
                Verify that engines are running at optimal load levels.
              </li>
              <li>
                <span className="font-bold text-blue-500">Maintenance:</span>{" "}
                Regular maintenance is critical for sustained efficiency.
              </li>
              <li>
                <span className="font-bold text-blue-500">Number of Engines:</span>{" "}
                Match the number of engines to customer needs for optimal
                performance.
              </li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow p-8">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">
              Site Audit and Analysis
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>
                <span className="font-bold text-blue-500">Site Audit:</span>{" "}
                Conduct audits to identify equipment and processes with
                improvement potential.
              </li>
              <li>
                <span className="font-bold text-blue-500">Operational Data:</span>{" "}
                Examine operational data and technical schematics for informed
                decision-making.
              </li>
              <li>
                <span className="font-bold text-blue-500">Improvement Solutions:</span>{" "}
                Select the best solutions based on comprehensive analysis.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
