const testimonials = [
  {
    name: "Priya Sharma",
    text: "The studio delivered beyond our expectations. Their designs were both beautiful and functional. Highly recommended for anyone looking for quality architecture.",
    date: "2024-01-15",
  },
  {
    name: "Rajiv Kumar",
    text: "From planning to execution, everything was handled flawlessly. The attention to detail and timely delivery made the entire process smooth and stress-free.",
    date: "2023-11-20",
  },
  {
    name: "Anita Singh",
    text: "Fresh designs and unique ideas by a talented team. They understood our vision and brought it to life. Best wishes for their future projects!",
    date: "2023-09-10",
  },
  {
    name: "Vikram Patel",
    text: "We now have a home we're proud of, thanks to their expertise. The team was creative, professional, and committed to quality at every step.",
    date: "2023-07-05",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <p className="section-tag mb-3">Testimonials</p>
        <h2 className="section-title mb-4">What Our Clients Say</h2>
        <p className="text-stone-600 max-w-2xl mb-12">
          Hear from clients who trusted us with their dream spaces.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-lg border border-stone-200 p-6 shadow-sm card-hover"
            >
              <p className="text-stone-600 leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 font-semibold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-stone-800">{t.name}</p>
                  <p className="text-sm text-stone-500">{t.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
