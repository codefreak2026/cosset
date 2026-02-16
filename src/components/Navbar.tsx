"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#gallery", label: "Gallery" },
  { href: "#process", label: "Process" },
  { href: "#projects", label: "Projects" },
  { href: "#packages", label: "Packages" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact Us" },
];

const VISIT_KEY = "cosset_visit_recorded";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [visitCount, setVisitCount] = useState<number | null>(null);

  useEffect(() => {
    async function recordVisitAndFetchCount() {
      const recorded = typeof window !== "undefined" && sessionStorage.getItem(VISIT_KEY);
      try {
        if (!recorded) {
          const visitRes = await fetch("/api/stats/visit", { method: "POST" });
          if (visitRes.ok) sessionStorage.setItem(VISIT_KEY, "1");
        }
        const res = await fetch("/api/stats");
        const data = await res.json();
        setVisitCount(data.homePageVisits ?? 0);
      } catch {
        setVisitCount(0);
      }
    }
    recordVisitAndFetchCount();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-stone-200">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-20">
        <Link href="#home" className="flex items-center gap-3">
          <div className="relative w-10 h-10 md:w-11 md:h-11 rounded-lg overflow-hidden bg-stone-800 flex-shrink-0">
            <Image
              src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=100"
              alt="Cosset logo"
              fill
              className="object-cover"
              sizes="44px"
              priority
            />
          </div>
          <span className="text-xl md:text-2xl font-semibold text-stone-800">Cosset</span>
          {visitCount !== null && (
            <span className="hidden sm:inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800 border border-amber-200">
              {visitCount.toLocaleString()} visits
            </span>
          )}
        </Link>

        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-stone-600 hover:text-amber-700 font-medium transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center px-5 py-2.5 bg-amber-600 text-white font-medium rounded-md hover:bg-amber-700 transition-colors"
        >
          Let&apos;s Talk
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          className="md:hidden p-2 text-stone-700"
          onClick={() => setOpen(!open)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-stone-200 bg-white px-4 py-4">
          {visitCount !== null && (
            <p className="text-sm text-stone-500 mb-2">{visitCount.toLocaleString()} visits</p>
          )}
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-2 text-stone-600 hover:text-amber-700 font-medium"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="inline-flex items-center px-5 py-2.5 bg-amber-600 text-white font-medium rounded-md w-full justify-center"
                onClick={() => setOpen(false)}
              >
                Let&apos;s Talk
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
