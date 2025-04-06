import React from "react";

export default function StatSection() {
  return (
    <div>
      <section className="bg-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-blue-600 text-4xl font-bold mb-2">25+</div>
              <div className="text-gray-600">Years of Experience</div>
            </div>
            <div className="p-6">
              <div className="text-blue-600 text-4xl font-bold mb-2">500+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="p-6">
              <div className="text-blue-600 text-4xl font-bold mb-2">30%</div>
              <div className="text-gray-600">Average Efficiency Gain</div>
            </div>
            <div className="p-6">
              <div className="text-blue-600 text-4xl font-bold mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
