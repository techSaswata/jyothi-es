'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timeout);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after submission
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          service: '',
          message: ''
        });
      }, 3000);
    }, 1500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-blue-900 to-blue-950 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-grid-pattern opacity-5"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        
        {/* Circuit pattern */}
        <div className="absolute inset-0 bg-circuit-pattern opacity-5 bg-no-repeat bg-cover"></div>
      </div>

      <div className="container relative mx-auto px-4 z-10">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="inline-block py-1.5 px-6 text-sm font-medium text-blue-300 bg-blue-900/50 rounded-full backdrop-blur-sm mb-6 border border-blue-800">
              CONTACT US
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">Get in Touch</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Partner with SJES for engineering excellence and innovative solutions tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10 shadow-xl hover:shadow-blue-500/5 transition-all duration-300">
                <h3 className="text-2xl font-semibold mb-8 relative">
                  Contact Information
                  <span className="absolute bottom-0 left-0 w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full -mb-3"></span>
                </h3>
                <div className="space-y-8">
                  <div className="flex items-start space-x-5">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2 text-blue-100">Office Address</h4>
                      <p className="text-gray-300 leading-relaxed">
                        Plot no 61/d, Phase-1, I.D.A,<br />
                        Jeedimetla, Hyderabad - 500055
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-5">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2 text-blue-100">Phone</h4>
                      <p className="text-gray-300 mb-1">+91 77229 44331</p>
                      <p className="text-gray-300">+91 96303 11331</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-5">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2 text-blue-100">Email</h4>
                      <p className="text-gray-300">techcom@srijyothi.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10 shadow-xl relative overflow-hidden">
                <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-gradient-to-br from-blue-500/20 to-cyan-400/10 rounded-full blur-2xl"></div>
                
                <h3 className="text-2xl font-semibold mb-8 relative">
                  Business Hours
                  <span className="absolute bottom-0 left-0 w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full -mb-3"></span>
                </h3>
                <div className="space-y-4 relative">
                  <div className="flex justify-between pb-3 border-b border-white/10">
                    <span className="text-gray-300 font-medium">Monday - Friday</span>
                    <span className="text-blue-200 font-semibold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between pb-3 border-b border-white/10">
                    <span className="text-gray-300 font-medium">Saturday</span>
                    <span className="text-blue-200 font-semibold">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300 font-medium">Sunday</span>
                    <span className="text-blue-200 font-semibold">Closed</span>
                  </div>
                </div>
              </div>
              
              {/* Map */}
              <div className="rounded-2xl overflow-hidden h-72 shadow-xl relative">
                <div className="absolute inset-0 flex items-center justify-center bg-blue-900/50 backdrop-blur-sm z-10">
                  <div className="text-center p-6 bg-black/30 rounded-xl backdrop-blur-md">
                    <h4 className="text-xl font-bold mb-3">Our Location</h4>
                    <p className="mb-4 text-blue-100">Jeedimetla, Hyderabad</p>
                    <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                      <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                      View on Google Maps
                    </a>
                  </div>
                </div>
                <Image
                  src="/Web Pics/Equipment Pic-1.avif"
                  alt="Office Location Map"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className={`bg-white/5 rounded-2xl p-10 backdrop-blur-sm border border-white/10 shadow-xl transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <h3 className="text-2xl font-semibold mb-8 relative">
                Send us a Message
                <span className="absolute bottom-0 left-0 w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full -mb-3"></span>
              </h3>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500/20 rounded-full mb-6">
                    <svg className="w-10 h-10 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-3">Message Sent!</h4>
                  <p className="text-blue-200">Thank you for contacting us. We'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2 text-blue-100">
                        Full Name <span className="text-blue-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-blue-800 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-white"
                        required
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2 text-blue-100">
                        Email <span className="text-blue-400">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-blue-800 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-white"
                        required
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-2 text-blue-100">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-blue-800 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-white"
                        placeholder="Your Company"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2 text-blue-100">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-blue-800 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-white"
                        placeholder="+91 1234567890"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2 text-blue-100">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-blue-800 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-white"
                    >
                      <option value="" className="bg-blue-900">Select a service</option>
                      <option value="Engineering Services" className="bg-blue-900">Engineering Services</option>
                      <option value="Reverse Engineering" className="bg-blue-900">Reverse Engineering</option>
                      <option value="Overhauling Services" className="bg-blue-900">Overhauling Services</option>
                      <option value="3D Scanning" className="bg-blue-900">3D Scanning</option>
                      <option value="Spares Manufacturing" className="bg-blue-900">Spares Manufacturing</option>
                      <option value="Repair & Refurbishment" className="bg-blue-900">Repair & Refurbishment</option>
                      <option value="Energy Saving Solutions" className="bg-blue-900">Energy Saving Solutions</option>
                      <option value="Other" className="bg-blue-900">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-blue-100">
                      How can we help? <span className="text-blue-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 bg-white/5 border border-blue-800 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-white resize-none"
                      required
                      placeholder="Please describe your project or inquiry..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium text-lg hover:shadow-lg hover:shadow-blue-600/20 transition-all duration-300 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
