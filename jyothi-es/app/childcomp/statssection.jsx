"use client";

import React, { useState, useEffect } from "react";
import CountUp from "react-countup";

export default function StatSection() {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 }
    );

    const section = document.getElementById("stats-section");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <div id="stats-section">
      <section className="bg-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 shadow-lg rounded-lg">
              <div className="text-blue-600 text-4xl font-bold mb-2">
                {inView ? <CountUp start={0} end={25} duration={2} /> : 0}+
              </div>
              <div className="text-gray-600">Years of Experience</div>
            </div>
            <div className="p-6 shadow-lg rounded-lg">
              <div className="text-blue-600 text-4xl font-bold mb-2">
                {inView ? <CountUp start={0} end={500} duration={2} /> : 0}+
              </div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="p-6 shadow-lg rounded-lg">
              <div className="text-blue-600 text-4xl font-bold mb-2">
                {inView ? <CountUp start={0} end={30} duration={2} /> : 0}%
              </div>
              <div className="text-gray-600">Average Efficiency Gain</div>
            </div>
            <div className="p-6 shadow-lg rounded-lg">
              <div className="text-blue-600 text-4xl font-bold mb-2">
                {inView ? <CountUp start={0} end={98} duration={2} /> : 0}%
              </div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
