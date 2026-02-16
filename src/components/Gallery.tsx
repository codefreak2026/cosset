import Image from "next/image";

const galleryImages = [
  { src: "https://drive.google.com/uc?export=view&id=1WnjHDeEDGUutlGHW9aC9WMe8iNrWgBdP", alt: "Modern residence" },
  { src: "https://drive.google.com/uc?export=view&id=17yJ3MRpUyc2q6BE2Ai4lbJtQ0VcXwia_", alt: "Living space" },
  { src: "https://drive.google.com/uc?export=view&id=1wlMFoFF49ZpKVO0lbGued0HPlIF_sWmE", alt: "Villa exterior" },
  { src: "https://drive.google.com/uc?export=view&id=1r2vhDBBrxx7V_a197djZMs2t1Um_KrpO", alt: "Interior design" },
  { src: "https://drive.google.com/uc?export=view&id=17ksiOiuEep4yTX-rWZ9M01dMouN1JbOm", alt: "Kitchen" },
  { src: "https://drive.google.com/uc?export=view&id=1lTkuZ09LwBvgwJs0wjAnB4dVX0mJ7I3W", alt: "Bedroom" },
  { src: "https://drive.google.com/uc?export=view&id=1NL0eWaT_5vMvc96zgGbbyLzYbkb7UnI1", alt: "House front" },
  { src: "https://drive.google.com/uc?export=view&id=1lnxUkDyrLX_qIH5_-jypdYELYFiVC2c2", alt: "Contemporary home" },
  { src: "https://drive.google.com/uc?export=view&id=1PnpyTWokS35C559v2FLMoocAHlEoX967", alt: "Architecture detail" },
  { src: "https://drive.google.com/uc?export=view&id=1grD2xqw1STSfcah27TM_PtSRwHCkkbei", alt: "Architecture detail" },
  { src: "https://drive.google.com/uc?export=view&id=1K6kD8OgWPFDCSEjUHgTjkNa0AyLO70dz", alt: "Architecture detail" },
  { src: "https://drive.google.com/uc?export=view&id=1ohZWig52bvhUgB_Z6JjNnr62odeuvvbW", alt: "Architecture detail" },
  { src: "https://drive.google.com/uc?export=view&id=1JO7WE7IungBXDoL8Ux8k7pK1okEP4s8j", alt: "Architecture detail" },
  { src: "https://drive.google.com/uc?export=view&id=19AVVkPA83uLUeaTI6E0csapjZ-Zhc7sQ", alt: "Architecture detail" },
  { src: "https://drive.google.com/uc?export=view&id=1_O2Rtt3tEDutZFYIDQ7VhB2pVfq5w8ue", alt: "Architecture detail" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 md:py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <p className="section-tag mb-3">What We Do</p>
        <h2 className="section-title mb-4">Gallery</h2>
        <p className="text-stone-600 max-w-2xl mb-12">
          A glimpse of the spaces we create—residential, commercial, and interior.
        </p>

        {/* Masonry-style layout like Pinterest */}
        <div className="columns-2 md:columns-3 gap-3 md:gap-4 [column-fill:_balance]">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="relative mb-3 overflow-hidden rounded-lg bg-stone-200 break-inside-avoid group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={800}
                height={600}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

