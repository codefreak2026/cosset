import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-stone-200">
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800"
              alt="Studio workspace"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="section-tag mb-3">About Us</p>
            <h2 className="section-title mb-6">Welcome to Our Studio</h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              We believe that architecture is more than bricks and mortar. It&apos;s a testament to creativity,
              innovation, and the pursuit of timeless beauty. As an established Architecture and Interior
              Designing practice, we are dedicated to crafting spaces that not only stand as functional
              marvels but also serve as aesthetic expressions of our clients&apos; dreams and aspirations.
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
