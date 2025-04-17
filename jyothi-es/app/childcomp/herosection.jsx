"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    image: "/header/header1.webp",
    title: "Engineering Excellence",
    description: "Innovative solutions for complex industrial challenges",
    cta: "Explore Services",
    link: "/services"
  },
  {
    image: "/header/header4.jpg",
    title: "Precision & Quality",
    description: "State-of-the-art equipment and expert craftsmanship",
    cta: "Our Expertise",
    link: "/about"
  },
  {
    image: "/header/header5.jpeg",
    title: "Complete Solutions",
    description: "From design to implementation, we deliver excellence",
    cta: "Get Started",
    link: "/contact"
  },
  {
    image: "/header/header2.jpg", 
    title: "Advanced Technology",
    description: "Cutting-edge tools and methodologies for optimal results",
    cta: "Discover More",
    link: "/services"
  },
  {
    image: "/header/header3.jpg",
    title: "Trusted Partners",
    description: "Building long-term relationships through reliable service",
    cta: "Contact Us",
    link: "/contact"
  }
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((current) => (current + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((current) => (current - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  const goToSlide = (index) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  return (
    <section className="relative h-[90vh] overflow-hidden bg-gray-900">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20 bg-grid-pattern pointer-events-none z-0"></div>
      
      {/* Slides */}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/60 to-gray-900/30 z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-transparent to-gray-900/30 z-10" />
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              quality={90}
              className="object-cover transform scale-105 transition-transform duration-3000 ease-out"
              style={{
                transform: index === currentIndex ? 'scale(1.05)' : 'scale(1)',
                transition: 'transform 6s ease-out'
              }}
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 h-full">
        <div className="container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 ${
                  index === currentIndex
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                {index === currentIndex && (
                  <>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
                        {slide.title}
                      </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl">
                      {slide.description}
                    </p>
                    <div className="flex flex-wrap gap-4 items-center">
                      <Link
                        href={slide.link}
                        className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium text-lg hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-1"
                      >
                        {slide.cta}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </Link>
                      <Link
                        href="/about"
                        className="inline-flex items-center px-6 py-4 rounded-lg bg-white/10 backdrop-blur-sm text-white font-medium text-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
                      >
                        Learn More
                      </Link>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex space-x-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-12 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-blue-500 w-16"
                : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Arrow buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300 border border-white/20"
        aria-label="Previous slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300 border border-white/20"
        aria-label="Next slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-6 z-30 hidden lg:block">
        <div className="flex flex-col items-center">
          <div className="h-16 w-0.5 bg-white/30"></div>
          <span className="text-white/70 text-sm mt-2 animate-bounce">Scroll</span>
        </div>
      </div>
    </section>
  );
}
