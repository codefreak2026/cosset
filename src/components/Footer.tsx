import Link from "next/link";

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#contact", label: "Contact Us" },
  { href: "#projects", label: "Projects" },
  { href: "#packages", label: "Packages" },
  { href: "#legal", label: "Privacy & Disclaimer" },
];

// const socialLinks = [
  // {
  //   href: "https://pinterest.com",
  //   label: "Pinterest",
  //   icon: (
  //     <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
  //       <path d="M12.04 2C7.57 2 5 5.06 5 8.32c0 1.54.86 3.45 2.25 4.05.21.09.32.05.37-.15.03-.16.23-.94.32-1.31a.33.33 0 0 0-.08-.33c-.45-.55-.8-1.57-.8-2.52 0-2.44 1.83-4.8 4.95-4.8 2.7 0 4.59 1.84 4.59 4.48 0 2.83-1.5 4.79-3.45 4.79-.68 0-1.19-.56-1.03-1.25.2-.84.6-1.75.6-2.36 0-.54-.29-.99-.9-.99-.71 0-1.28.73-1.28 1.71 0 .62.21 1.03.21 1.03s-0.72 3.07-.85 3.61c-.25 1.05-.04 2.33-.02 2.46.01.07.1.09.15.03.06-.08.83-1.23 1.09-2.36l.53-2.09c.27.5 1.05.94 1.88.94 2.48 0 4.16-2.17 4.16-5.08C18.77 5.16 15.98 2 12.04 2z" />
  //     </svg>
  //   ),
  // },
  // {
  //   href: "https://twitter.com",
  //   label: "Twitter",
  //   icon: (
  //     <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
  //       <path d="M19.95 4.05h-3.1L12 9.88 7.15 4.05H4.05L10.6 11.7 4 19.95h3.1L12 13.77l4.9 6.18h3.1L13.4 11.7l6.55-7.65z" />
  //     </svg>
  //   ),
  // },
  // {
  //   href: "https://instagram.com",
  //   label: "Instagram",
  //   icon: (
  //     <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
  //       <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm0 2h10c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3zm11 1a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0V6a1 1 0 0 0-1-1zm-6 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
  //     </svg>
  //   ),
  // },
  // {
  //   href: "https://facebook.com",
  //   label: "Facebook",
  //   icon: (
  //     <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
  //       <path d="M13 3h3a1 1 0 0 1 1 1v3h-2.5A1.5 1.5 0 0 0 13 8.5V11h3.5a1 1 0 0 1 .98 1.2l-.5 3A1 1 0 0 1 16 16h-3v5h-3v-5H7v-3h3V8.5A3.5 3.5 0 0 1 13.5 5H13V3z" />
  //     </svg>
  //   ),
  // },
  // {
  //   href: "https://youtube.com",
  //   label: "Youtube",
  //   icon: (
  //     <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
  //       <path d="M10 9.5v5l4-2.5-4-2.5z" />
  //       <path d="M4.5 5C3.12 5 2 6.12 2 7.5v9c0 1.38 1.12 2.5 2.5 2.5h15c1.38 0 2.5-1.12 2.5-2.5v-9C22 6.12 20.88 5 19.5 5h-15zm0 2h15a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-15a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5z" />
  //     </svg>
  //   ),
  // },
  // {
  //   href: "https://linkedin.com",
  //   label: "LinkedIn",
  //   icon: (
  //     <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
  //       <path d="M5 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM4 8h2.9v12H4zM10 8h2.8v1.7h.04C13.4 8.9 14.5 8 16.2 8 19.3 8 20 9.8 20 12.6V20h-2.9v-6.1c0-1.5-.5-2.4-1.7-2.4-1 0-1.6.7-1.9 1.4-.1.2-.1.6-.1.9V20H10z" />
  //     </svg>
  //   ),
  // },
// ];

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div className="lg:col-span-2">
            <h3 className="text-white text-xl font-semibold mb-4">Cosset</h3>
            <p className="text-stone-400 leading-relaxed max-w-md">
              We are known for our quality and commitment in architecture and interior design. Our team
              creates spaces that speak for themselves and offer comfort and a stress-free environment.
            </p>
            {/* <div className="flex flex-wrap gap-3 mt-4">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-stone-800 text-stone-300 hover:bg-amber-500 hover:text-white transition-colors"
                  aria-label={s.label}
                  title={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div> */}
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-stone-400 hover:text-amber-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-stone-400">
              <li>
                <span className="block text-stone-500 text-sm mt-2">Phone</span>
                <a href="tel:+919876543210" className="hover:text-amber-400">+91 62040 57827</a>
              </li>
              <li>
                <span className="block text-stone-500 text-sm mt-2">Email</span>
                <a href="mailto:hello@cosset.in" className="hover:text-amber-400">heycosset@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-stone-700 text-center text-stone-500 text-sm">
          © {new Date().getFullYear()} Cosset. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
