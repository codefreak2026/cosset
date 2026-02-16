import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-1 gap-12 md:gap-16 items-center">
          <div>
            <p className="section-tag mb-3">About Us</p>
              <h2 className="section-title mb-6">Welcome to <span className="text-4xl md:text-5xl font-semibold italic mb-6  text-red-700/90">Cosset Spaces</span> </h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              Founded on the belief that a home or workspace should be a sanctuary from the chaotic, our studio blends technical rigor with a tactile, human-centric approach.
              We pamper, we protect, we inspire. 
We curate every shadow, material, and sightline to ensure your space feels uniquely yours. At Cosset Spaces, we aren't just designing for the eyes—we are designing for the soul
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              We create highly adjustable and tailored spaces that promote physical health, emotional
              well-being, and mental clarity. Our design speaks to you—fusing modern sensibilities with
              indigenous materials, art, and craft.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-5 py-2.5 bg-amber-600 text-white font-medium rounded-md hover:bg-amber-700 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
