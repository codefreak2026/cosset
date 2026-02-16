const steps = [
  {
    title: "Discuss & Quote",
    description: "We will talk about your project in detail and then finalize the deal.",
  },
  {
    title: "Finalising Designs",
    description: "After finalizing the deal, we will finalize the designs required.",
  },
  {
    title: "Build & Execution",
    description: "Build the project according to the client and execute the final result.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <p className="section-tag mb-3">How We Work</p>
        <h2 className="section-title mb-4">Our Process</h2>
        <p className="text-stone-600 max-w-2xl mb-12">
          From concept to completion, we follow a clear process to deliver your dream space.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-100 text-amber-700 font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-stone-800 mb-2">{step.title}</h3>
                  <p className="text-stone-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
