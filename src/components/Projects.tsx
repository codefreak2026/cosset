import Image from "next/image";
import Link from "next/link";

const dummyProjects = [
  { id: "1", title: "Commercial Complex", category: "Commercial", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600", link: "https://example.com/project1" },
  { id: "2", title: "Resort", category: "Hospitality", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600", link: "https://example.com/project2" },
  { id: "3", title: "Exterior Villa", category: "Residential", image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600", link: "https://example.com/project3" },
  { id: "4", title: "Modern Duplex", category: "Residential", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600", link: "https://example.com/project4" },
  { id: "5", title: "Living Area Design", category: "Interior", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600", link: "https://example.com/project5" },
  { id: "6", title: "House Design", category: "Residential", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600", link: "https://example.com/project6" },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <p className="section-tag mb-3">Portfolio</p>
        <h2 className="section-title mb-4">Our Projects</h2>
        <p className="text-stone-600 max-w-2xl mb-12">
          A selection of our completed work across residential, commercial, and interior design.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dummyProjects.map((project) => (
            <Link
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-lg overflow-hidden border border-stone-200 shadow-sm card-hover"
            >
              <div className="relative aspect-[4/3] bg-stone-200">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-white font-medium">{project.title}</span>
                </div>
              </div>
              <div className="p-4">
                <p className="text-amber-600 text-sm font-medium">{project.category}</p>
                <h3 className="font-semibold text-stone-800">{project.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
