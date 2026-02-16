"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#gallery", label: "Gallery" },
  { href: "#process", label: "Process" },
  // { href: "#projects", label: "Projects" },
  { href: "#packages", label: "Packages" },
  // { href: "#testimonials", label: "Testimonials" },
  // { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact Us" },
];

const VISIT_KEY = "cosset_visit_recorded";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [visitCount, setVisitCount] = useState<number | null>(null);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    async function recordVisitAndFetchCount() {
      if (typeof window === "undefined") return;
      const recorded = sessionStorage.getItem(VISIT_KEY);
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

    function initTheme() {
      if (typeof window === "undefined") return;
      const stored = localStorage.getItem("theme");
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const nextIsDark = stored ? stored === "dark" : prefersDark;
      setIsDark(nextIsDark);
      document.documentElement.classList.toggle("dark", nextIsDark);
    }

    recordVisitAndFetchCount();
    initTheme();
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      if (typeof window !== "undefined") {
        document.documentElement.classList.toggle("dark", next);
        localStorage.setItem("theme", next ? "dark" : "light");
      }
      return next;
    });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-slate-900/90 backdrop-blur border-b border-stone-200 dark:border-slate-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-20">
        <Link href="#home" className="flex items-center gap-3">
          {/* <div className="relative w-9 h-9 md:w-10 md:h-10 rounded-lg overflow-hidden bg-stone-900 flex-shrink-0 shadow-md ring-1 ring-white/20">
            <Image
              src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=160"
              alt="Cosset logo"
              fill
              className="object-cover"
              sizes="40px"
              priority
            />
          </div> */}
          <span className="text-xl md:text-2xl font-semibold text-stone-800 dark:text-slate-50">
            Cosset
          </span>
          {visitCount !== null && (
            <span className="hidden sm:inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-amber-800 dark:text-amber-200 ">
              {visitCount.toLocaleString()} visits
            </span>
          )}
        </Link>

        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-stone-600 dark:text-slate-200 hover:text-amber-700 dark:hover:text-amber-400 font-medium transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-stone-300/80 dark:border-slate-600 bg-white/70 dark:bg-slate-800 text-stone-700 dark:text-slate-100 shadow-sm hover:bg-stone-100 hover:dark:bg-slate-700 transition-colors"
          >
            {isDark ? (
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21.64 13.35A9 9 0 0 1 11 2.05 7 7 0 1 0 21.64 13.35z" />
              </svg>
            ) : (
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="4" strokeWidth="2" />
                <path strokeWidth="2" d="M12 2v2m0 16v2m10-10h-2M4 12H2m17.657-7.657-1.414 1.414M7.757 16.243 6.343 17.657m12.314 0-1.414-1.414M7.757 7.757 6.343 6.343" />
              </svg>
            )}
          </button>
          <a
            href="#contact"
            className="inline-flex items-center px-5 py-2.5 bg-amber-600 text-white font-medium rounded-md hover:bg-amber-700 transition-colors shadow-sm"
          >
            Let&apos;s Talk
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="md:hidden p-2 text-stone-700 dark:text-slate-100"
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
        <div className="md:hidden border-t border-stone-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-4">
          <div className="flex items-center justify-between mb-3">
            {visitCount !== null && (
              <p className="text-sm text-stone-500 dark:text-slate-400">
                {visitCount.toLocaleString()} visits
              </p>
            )}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-stone-300/80 dark:border-slate-600 bg-white/70 dark:bg-slate-800 text-stone-700 dark:text-slate-100 shadow-sm hover:bg-stone-100 hover:dark:bg-slate-700 transition-colors"
            >
              {isDark ? (
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21.64 13.35A9 9 0 0 1 11 2.05 7 7 0 1 0 21.64 13.35z" />
                </svg>
              ) : (
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="12" cy="12" r="4" strokeWidth="2" />
                  <path strokeWidth="2" d="M12 2v2m0 16v2m10-10h-2M4 12H2m17.657-7.657-1.414 1.414M7.757 16.243 6.343 17.657m12.314 0-1.414-1.414M7.757 7.757 6.343 6.343" />
                </svg>
              )}
            </button>
          </div>
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-2 text-stone-600 dark:text-slate-200 hover:text-amber-700 dark:hover:text-amber-400 font-medium"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="inline-flex items-center px-5 py-2.5 bg-amber-600 text-white font-medium rounded-md w-full justify-center shadow-sm"
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
