import React from "react";

export default function page() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-4xl font-extrabold text-blue-600 mb-4 tracking-wide border-b-4 border-blue-500 pb-2">
            Repair, Reconditioning and Refurbishment
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Repair, reconditioning, and refurbishment services are crucial for
            maintaining the operational efficiency, extending the lifespan, and
            improving the performance of mechanical equipment. These services
            involve restoring equipment to its original or improved condition,
            ensuring that machinery continues to operate reliably and
            efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Card 1 */}
          <div className="bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow p-8">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">
              Assessment and Diagnosis
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>
                <span className="font-bold text-blue-500">Initial Inspection:</span>{" "}
                Conducting a thorough inspection to identify visible damages,
                wear, and tear.
              </li>
              <li>
                <span className="font-bold text-blue-500">Diagnostic Testing:</span>{" "}
                Utilizing advanced diagnostic tools to pinpoint underlying
                issues not visible to the naked eye.
              </li>
              <li>
                <span className="font-bold text-blue-500">Failure Analysis:</span>{" "}
                Analyzing the root cause of equipment failure to inform repair
                strategies and prevent future occurrences.
              </li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow p-8">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">
              Repair Services
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>
                <span className="font-bold text-blue-500">Component Replacement:</span>{" "}
                Replacing damaged or worn-out components with new or
                reconditioned parts.
              </li>
              <li>
                <span className="font-bold text-blue-500">Welding and Machining:</span>{" "}
                Performing welding, machining, and other metalworking processes
                to repair or rebuild damaged parts.
              </li>
              <li>
                <span className="font-bold text-blue-500">Electrical Repairs:</span>{" "}
                Fixing or replacing faulty electrical components, wiring, and
                electronic control systems.
              </li>
              <li>
                <span className="font-bold text-blue-500">Hydraulic Repairs:</span>{" "}
                Repairing or replacing damaged hydraulic and pneumatic systems
                to restore functionality.
              </li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow p-8">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">
              Reconditioning Services
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>
                <span className="font-bold text-blue-500">Cleaning and Decontamination:</span>{" "}
                Thoroughly cleaning equipment to remove dirt, grime, and
                contaminants.
              </li>
              <li>
                <span className="font-bold text-blue-500">Surface Treatment:</span>{" "}
                Applying surface treatments such as painting, coating, or
                plating to protect against corrosion and wear.
              </li>
              <li>
                <span className="font-bold text-blue-500">Reassembly and Testing:</span>{" "}
                Reassembling the equipment after reconditioning and conducting
                tests to ensure it operates correctly.
              </li>
            </ul>
          </div>

          {/* Card 4 */}
          <div className="bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow p-8">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">
              Refurbishment Services
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>
                <span className="font-bold text-blue-500">Upgrading Components:</span>{" "}
                Upgrading old or obsolete components with modern, more efficient
                alternatives.
              </li>
              <li>
                <span className="font-bold text-blue-500">Redesign and Modification:</span>{" "}
                Modifying equipment design to enhance performance, efficiency,
                or safety.
              </li>
              <li>
                <span className="font-bold text-blue-500">Control System Upgrades:</span>{" "}
                Updating control systems and software to the latest versions for
                improved functionality and reliability.
              </li>
              <li>
                <span className="font-bold text-blue-500">Retrofitting:</span>{" "}
                Adding new technology or features to existing equipment to
                extend its capabilities and lifespan.
              </li>
            </ul>
          </div>

          {/* Card 5 */}
          <div className="bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow p-8">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">
              Benefits of Services
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>
                <span className="font-bold text-blue-500">Cost Savings:</span>{" "}
                Significantly lower costs compared to purchasing new equipment.
              </li>
              <li>
                <span className="font-bold text-blue-500">Extended Lifespan:</span>{" "}
                Restores equipment to like-new condition, extending its usable
                life.
              </li>
              <li>
                <span className="font-bold text-blue-500">Improved Performance:</span>{" "}
                Enhances the performance and efficiency of equipment through
                upgrades and modifications.
              </li>
              <li>
                <span className="font-bold text-blue-500">Sustainability:</span>{" "}
                Reduces waste and promotes sustainability by reusing and
                upgrading existing equipment.
              </li>
              <li>
                <span className="font-bold text-blue-500">Minimized Downtime:</span>{" "}
                Quick turnaround times reduce equipment downtime, maintaining
                productivity.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
