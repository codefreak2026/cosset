import Image from "next/image";

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600", alt: "Modern residence" },
  { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600", alt: "Living space" },
  { src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600", alt: "Villa exterior" },
  { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600", alt: "Interior design" },
  { src: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600", alt: "Kitchen" },
  { src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600", alt: "Bedroom" },
  { src: "https://images.unsplash.com/photo-1600585154526-990dac4a53f0?w=600", alt: "House front" },
  { src: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600", alt: "Contemporary home" },
  { src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600", alt: "Architecture detail" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 md:py-24 bg-stone-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="section-tag mb-3">Gallery</p>
        <h2 className="section-title mb-4">Our Work</h2>
        <p className="text-stone-600 max-w-2xl mb-12">
          A glimpse of the spaces we create—residential, commercial, and interior.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="relative aspect-[4/3] rounded-lg overflow-hidden bg-stone-200 group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
