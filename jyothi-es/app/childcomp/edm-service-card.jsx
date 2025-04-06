'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const EDMServiceCard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  const edmServices = [
    {
      id: 'overview',
      title: 'Overview',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      content: (
        <>
          <p className="text-gray-600 mb-4">
            EDM (Electrical Discharge Machining), also known as Spark Erosion / Spark Machining / Wire erosion / Die sinking, 
            is a specialized manufacturing process that creates precise shapes using controlled electrical discharges (sparks).
          </p>
          <p className="text-gray-600 mb-4">
            Spark erosion removes material from a workpiece with current discharges between two electrodes separated by a dielectric liquid 
            subject to voltage. The dielectric fluid acts as a conductor and a cooling agent during the sparking process, 
            allowing for exceptional precision with tolerances as tight as 0.1 microns.
          </p>
        </>
      )
    },
    {
      id: 'benefits',
      title: 'Benefits',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <h4 className="font-semibold text-gray-900 mb-2">Material Versatility</h4>
            <p className="text-gray-600 text-sm">Machine any conductive material regardless of hardness</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <h4 className="font-semibold text-gray-900 mb-2">Complex Geometries</h4>
            <p className="text-gray-600 text-sm">Create intricate shapes impossible with conventional machining</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <h4 className="font-semibold text-gray-900 mb-2">No Mechanical Stress</h4>
            <p className="text-gray-600 text-sm">Non-contact process eliminates stress on workpieces</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <h4 className="font-semibold text-gray-900 mb-2">Exceptional Accuracy</h4>
            <p className="text-gray-600 text-sm">Achieve tolerances as tight as 0.1 microns</p>
          </div>
        </div>
      )
    },
    {
      id: 'applications',
      title: 'Applications',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      content: (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {[
            'Aerospace Components', 
            'Medical Implants', 
            'Automotive Parts', 
            'Tool & Die Making',
            'Precision Electronics',
            'Injection Molds',
            'Military Applications',
            'Prototype Development'
          ].map((app, idx) => (
            <div key={idx} className="bg-gray-50 p-3 rounded text-center text-sm font-medium text-gray-700">
              {app}
            </div>
          ))}
        </div>
      )
    },
    {
      id: 'specifications',
      title: 'Specs',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      content: (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="py-3 font-medium text-gray-900">Tolerance</td>
                <td className="py-3 text-gray-600">± 0.1 microns</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 font-medium text-gray-900">Surface Finish</td>
                <td className="py-3 text-gray-600">Ra 0.1 μm</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 font-medium text-gray-900">Min Feature Size</td>
                <td className="py-3 text-gray-600">0.3 mm</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-3 font-medium text-gray-900">Material Capability</td>
                <td className="py-3 text-gray-600">All conductive materials</td>
              </tr>
              <tr>
                <td className="py-3 font-medium text-gray-900">Max Workpiece Size</td>
                <td className="py-3 text-gray-600">500mm × 750mm × 500mm</td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    }
  ];
  
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      {/* Tab Navigation */}
      <div className="flex border-b border-gray-200">
        {edmServices.map((service) => (
          <button
            key={service.id}
            className={`flex items-center p-4 text-sm font-medium ${
              activeTab === service.id
                ? 'text-primary border-b-2 border-primary bg-primary/5'
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
            }`}
            onClick={() => setActiveTab(service.id)}
          >
            <span className="mr-2">{service.icon}</span>
            {service.title}
          </button>
        ))}
      </div>
      
      {/* Tab Content */}
      <div className="p-6">
        {edmServices.map((service) => (
          <div
            key={service.id}
            className={`transition-opacity duration-300 ${
              activeTab === service.id ? 'block opacity-100' : 'hidden opacity-0'
            }`}
          >
            {service.content}
          </div>
        ))}
        
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-700 font-medium mb-4 sm:mb-0">
              Need precision machining services?
            </p>
            <Link
              href="/contact"
              className="btn btn-primary inline-flex items-center px-4 py-2"
            >
              Request Quote
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EDMServiceCard;