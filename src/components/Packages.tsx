const packages = [
  {
    name: "Silver Package",
    rate: "₹6/Sqft",
    features: [
      "Floor Plan",
      "Plumbing Design",
      "Electric Design",
      "3D Front Elevation",
    ],
    highlighted: false,
  },
  {
    name: "Gold Package",
    rate: "₹8/Sqft",
    features: [
      "Floor Plan",
      "Plumbing Design",
      "Electric Design",
      "3D Front Elevation",
      "Column Layout Design",
      "Pile/Footing Layout Design",
      "Tie Beam Detail Design",
      "Slab Beam Detail Design",
      "Slab Reinforcement Details Design",
      "Staircase Section Details",
      "Septic Tank & Borewell Position",
    ],
    highlighted: true,
  },
  {
    name: "Diamond Package",
    rate: "₹25/Sqft",
    features: [
      "Everything in Gold Package",
      "3D Interior Design",
    ],
    highlighted: false,
  },
];

export default function Packages() {
  return (
    <section id="packages" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <p className="section-tag mb-3">Services</p>
        <h2 className="section-title mb-4">Our Packages</h2>
        <p className="text-stone-600 max-w-2xl mb-12">
          Choose a package that fits your project. From basic floor plans to full structural and interior design.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className={`rounded-lg border-2 p-6 ${
                pkg.highlighted
                  ? "border-amber-500 bg-amber-50/50 shadow-lg scale-105 z-10"
                  : "border-stone-200 bg-stone-50"
              }`}
            >
              {pkg.highlighted && (
                <span className="inline-block text-xs font-semibold text-amber-700 bg-amber-200 px-2 py-1 rounded mb-4">
                  Popular
                </span>
              )}
              <h3 className="text-xl font-semibold text-stone-800 mb-2">{pkg.name}</h3>
              <p className="text-2xl font-bold text-amber-600 mb-6">Rate: {pkg.rate}</p>
              <ul className="space-y-2">
                {pkg.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-stone-600 text-sm">
                    <span className="text-amber-600 mt-0.5">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-6 block w-full py-3 text-center font-medium rounded-md transition-colors ${
                  pkg.highlighted
                    ? "bg-amber-600 text-white hover:bg-amber-700"
                    : "bg-stone-800 text-white hover:bg-stone-700"
                }`}
              >
                Get Quote
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
