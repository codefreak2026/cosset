import Link from "next/link";

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#contact", label: "Contact Us" },
  { href: "#projects", label: "Projects" },
  { href: "#packages", label: "Packages" },
  { href: "#legal", label: "Privacy & Disclaimer" },
];

const socialLinks = [
  { href: "https://pinterest.com", label: "Pinterest" },
  { href: "https://twitter.com", label: "Twitter" },
  { href: "https://instagram.com", label: "Instagram" },
  { href: "https://facebook.com", label: "Facebook" },
  { href: "https://youtube.com", label: "Youtube" },
  { href: "https://linkedin.com", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div className="lg:col-span-2">
            <h3 className="text-white text-xl font-semibold mb-4">Cosset</h3>
            <p className="text-stone-400 leading-relaxed max-w-md">
              We are known for our quality and commitment in architecture and interior design. Our team
              creates spaces that speak for themselves and offer comfort and a stress-free environment.
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-400 hover:text-amber-400 transition-colors"
                  aria-label={s.label}
                >
                  {s.label}
                </a>
              ))}
            </div>
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
                <span className="block text-stone-500 text-sm">Address</span>
                House No. 3, 1st Floor, A.N Path, Opposite A.N College, Near Petrol Pump, Patna, Bihar 800013.
              </li>
              <li>
                <span className="block text-stone-500 text-sm mt-2">Phone</span>
                <a href="tel:+919876543210" className="hover:text-amber-400">+91 98765 43210</a>
              </li>
              <li>
                <span className="block text-stone-500 text-sm mt-2">Email</span>
                <a href="mailto:hello@cosset.in" className="hover:text-amber-400">hello@cosset.in</a>
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
