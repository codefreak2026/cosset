"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920",
    title: "Where Vision Meets Design",
    subtitle: "Architecture & Interior Design",
  },
  {
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920",
    title: "Spaces That Speak",
    subtitle: "Crafting functional marvels and aesthetic expressions",
  },
  {
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920",
    title: "Timeless Beauty",
    subtitle: "Innovation rooted in tradition",
  },
  {
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1920",
    title: "Your Dream Space",
    subtitle: "From concept to completion",
  },
];

const AUTOPLAY_MS = 5000;

export default function LandingCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="relative h-[85vh] min-h-[500px] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === index ? "opacity-100 z-0" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={slide.image}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority={i === 0}
          />
          <div className="absolute inset-0 bg-stone-900/50" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <p className="text-amber-400/95 text-sm font-semibold uppercase tracking-widest mb-3">
              {slide.subtitle}
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight max-w-4xl">
              {slide.title}
            </h1>
            <div className="flex gap-4 mt-10">
              <a
                href="#projects"
                className="inline-flex items-center px-6 py-3 bg-amber-500 text-white font-medium rounded-md hover:bg-amber-600 transition-colors"
              >
                Our Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-medium rounded-md hover:bg-white hover:text-stone-900 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-6 left-0 right-0 z-10 flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              i === index ? "bg-amber-400 w-8" : "bg-white/60 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

      <div className="absolute left-4 right-4 top-1/2 -translate-y-1/2 z-10 flex justify-between pointer-events-none sm:pointer-events-auto">
        <button
          type="button"
          aria-label="Previous slide"
          onClick={() => setIndex((i) => (i - 1 + slides.length) % slides.length)}
          className="w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          type="button"
          aria-label="Next slide"
          onClick={() => setIndex((i) => (i + 1) % slides.length)}
          className="w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
