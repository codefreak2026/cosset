export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex items-center justify-center bg-stone-100 text-center px-4 pt-24 pb-16"
    >
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920')] bg-cover bg-center opacity-20" />
      <div className="relative z-10 max-w-4xl mx-auto">
        <p className="section-tag mb-4">Architecture & Interior Design</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-stone-800 tracking-tight mb-6">
          Where Vision Meets Design
        </h1>
        <p className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto mb-8">
          We craft spaces that stand as functional marvels and aesthetic expressions of our clients&apos; dreams.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#projects"
            className="inline-flex items-center px-6 py-3 bg-amber-600 text-white font-medium rounded-md hover:bg-amber-700 transition-colors"
          >
            Our Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 border-2 border-stone-800 text-stone-800 font-medium rounded-md hover:bg-stone-800 hover:text-white transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
