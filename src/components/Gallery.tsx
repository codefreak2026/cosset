"use client";

import Image from "next/image";
import { useEffect } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import PhotoSwipe from "photoswipe";
import "photoswipe/style.css";

const galleryImages = [
  { src: "https://res.cloudinary.com/dmgvtmsba/image/upload/v1771269593/cosset/gallery/1.jpg", alt: "Modern residence", w: 1600, h: 1000 },
  { src: "https://res.cloudinary.com/dmgvtmsba/image/upload/v1771269593/cosset/gallery/2.jpg", alt: "Living space", w: 1600, h: 1000 },
  { src: "https://res.cloudinary.com/dmgvtmsba/image/upload/v1771269594/cosset/gallery/3.jpg", alt: "Villa exterior", w: 1600, h: 1000 },
  { src: "https://res.cloudinary.com/dmgvtmsba/image/upload/v1771269593/cosset/gallery/4.jpg", alt: "Interior design", w: 1600, h: 1000 },
  { src: "https://res.cloudinary.com/dmgvtmsba/image/upload/v1771269594/cosset/gallery/5.jpg", alt: "Kitchen", w: 1600, h: 1000 },
  { src: "https://res.cloudinary.com/dmgvtmsba/image/upload/v1771269595/cosset/gallery/6.jpg", alt: "Bedroom", w: 1600, h: 1000 },
  { src: "https://res.cloudinary.com/dmgvtmsba/image/upload/v1771269593/cosset/gallery/7.jpg", alt: "House front", w: 1600, h: 1000 },
  { src: "https://res.cloudinary.com/dmgvtmsba/image/upload/v1771269595/cosset/gallery/8.jpg", alt: "Contemporary home", w: 1600, h: 1000 },
  { src: "https://res.cloudinary.com/dmgvtmsba/image/upload/v1771269595/cosset/gallery/9.jpg", alt: "Architecture detail", w: 1600, h: 1000 },
  { src: "https://res.cloudinary.com/dmgvtmsba/image/upload/v1771269596/cosset/gallery/10.jpg", alt: "Architecture detail", w: 1600, h: 1000 },
  { src: "https://res.cloudinary.com/dmgvtmsba/image/upload/v1771269598/cosset/gallery/11.jpg", alt: "Architecture detail", w: 1600, h: 1000 },
  { src: "https://res.cloudinary.com/dmgvtmsba/image/upload/v1771269594/cosset/gallery/12.jpg", alt: "Architecture detail", w: 1600, h: 1000 },
  { src: "https://res.cloudinary.com/dmgvtmsba/image/upload/v1771269595/cosset/gallery/13.jpg", alt: "Architecture detail", w: 1600, h: 1000 },
  { src: "https://res.cloudinary.com/dmgvtmsba/image/upload/v1771269594/cosset/gallery/14.jpg", alt: "Architecture detail", w: 1600, h: 1000 },
  { src: "https://res.cloudinary.com/dmgvtmsba/image/upload/v1771269593/cosset/gallery/15.jpg", alt: "Architecture detail", w: 1600, h: 1000 },
];

export default function Gallery() {
  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: "#pswp-gallery",
      children: "a",
      pswpModule: PhotoSwipe,
      showHideAnimationType: "zoom",
      bgOpacity: 0.85,
    });

    lightbox.init();
    return () => lightbox.destroy();
  }, []);

  return (
    <section id="gallery" className="py-16 md:py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <p className="section-tag mb-3">What We Do</p>
        <h2 className="section-title mb-4">Gallery</h2>
        <p className="text-stone-600 max-w-2xl mb-12">
          A glimpse of the spaces we create—residential, commercial, and interior.
        </p>

        <div id="pswp-gallery" className="columns-2 md:columns-3 gap-3 md:gap-4 [column-fill:balance]">
          {galleryImages.map((img, i) => (
            <figure key={i} className="relative mb-3 overflow-hidden rounded-lg bg-stone-200 break-inside-avoid group m-0">
              <a href={img.src} data-pswp-width={img.w} data-pswp-height={img.h}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </a>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
