"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const slides = [
  {
    image: "https://drive.google.com/uc?export=view&id=1xnI1lb0MGshKsGdi3pkfANEJHwEc9Kn_",
    title: "Where Vision Meets Design",
    subtitle: "Architecture & Interior Design",
  },
  {
    image: "https://drive.google.com/uc?export=view&id=1gk_ViNwLsEOuHCncZQ6Ma35w7hhJtSZe",
    title: "Spaces That Speak",
    subtitle: "Crafting functional marvels and aesthetic expressions",
  },
  {
    image: "https://drive.google.com/uc?export=view&id=1MHOVxI14f7aqQVItr2mxuSXhFMae-P0v",
    title: "Timeless Beauty",
    subtitle: "Innovation rooted in tradition",
  },
  {
    image: "https://drive.google.com/uc?export=view&id=1SGOXBXS1hqWJDWW_0E5QRAVHIBjejUCG",
    title: "Your Dream Space",
    subtitle: "From concept to completion",
  },
  {
    image: "https://drive.google.com/uc?export=view&id=11gI118ycplza5rpiU7f5Hzp0eyYV_vqV",
    title: "Luxury Living",
    subtitle: "Experience the pinnacle of luxury living",
  },
  {
    image: "https://drive.google.com/uc?export=view&id=1nAouMPN1ZqBNMdykkuSVkEF7k4epCKcC",
    title: "Commercial Complex",
    subtitle: "Commercial Complex Design",
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
    <section
      id="home"
      className="relative h-[85vh] min-h-[520px] overflow-hidden mt-16 md:mt-20 rounded-b-3xl shadow-[0_18px_45px_rgba(15,23,42,0.35)]"
    >
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
            className={`object-cover transition-transform duration-[4000ms] ease-out ${
              i === index ? "scale-105" : "scale-100"
            }`}
            sizes="100vw"
            priority={i === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <div className="max-w-5xl mx-auto">
              <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-amber-200 text-xs font-semibold uppercase tracking-[0.25em] mb-4">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber-300" />
                {slide.subtitle}
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight max-w-4xl mx-auto drop-shadow-[0_10px_40px_rgba(0,0,0,0.7)]">
                {slide.title}
              </h1>
              <p className="mt-5 text-base sm:text-lg text-slate-100/80 max-w-xl mx-auto">
                Bespoke architecture and interiors crafted to cocoon you in comfort.
              </p>
              <div className="flex flex-wrap gap-4 justify-center mt-10">
                <a
                  href="#gallery"
                  className="inline-flex items-center px-6 py-3 rounded-full bg-amber-500 text-white font-medium shadow-lg shadow-amber-500/40 hover:bg-amber-400 transition-colors"
                >
                  View Gallery
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 rounded-full border border-white/70 text-white font-medium hover:bg-white hover:text-stone-900 transition-colors"
                >
                  Get in Touch
                </a>
              </div>
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
