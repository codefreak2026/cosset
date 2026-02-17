"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import PhotoSwipe from "photoswipe";
import "photoswipe/style.css";

const galleryImages = [
  { src: "https://res.cloudinary.com/dmgvtmsba/image/upload/v1771269593/cosset/gallery/1.jpg", alt: "Modern residence" },
  { src: "https://res.cloudinary.com/dmgvtmsba/image/upload/v1771269593/cosset/gallery/2.jpg", alt: "Living space" },
  { src: "https://res.cloudinary.com/dmgvtmsba/image/upload/v1771269594/cosset/gallery/3.jpg", alt: "Villa exterior" },
  { src: "https://res.cloudinary.com/dmgvtmsba/image/upload/v1771269593/cosset/gallery/4.jpg", alt: "Interior design" },
  { src: "https://res.cloudinary.com/dmgvtmsba/image/upload/v1771269594/cosset/gallery/5.jpg", alt: "Kitchen" },
  { src: "https://res.cloudinary.com/dmgvtmsba/image/upload/v1771269595/cosset/gallery/6.jpg", alt: "Bedroom" },
  { src: "https://res.cloudinary.com/dmgvtmsba/image/upload/v1771269593/cosset/gallery/7.jpg", alt: "House front" },
  { src: "https://res.cloudinary.com/dmgvtmsba/image/upload/v1771269595/cosset/gallery/8.jpg", alt: "Contemporary home" },
  { src: "https://res.cloudinary.com/dmgvtmsba/image/upload/v1771269595/cosset/gallery/9.jpg", alt: "Architecture detail" },
  { src: "https://res.cloudinary.com/dmgvtmsba/image/upload/v1771269596/cosset/gallery/10.jpg", alt: "Architecture detail" },
  { src: "https://res.cloudinary.com/dmgvtmsba/image/upload/v1771269598/cosset/gallery/11.jpg", alt: "Architecture detail" },
  { src: "https://res.cloudinary.com/dmgvtmsba/image/upload/v1771269594/cosset/gallery/12.jpg", alt: "Architecture detail" },
  { src: "https://res.cloudinary.com/dmgvtmsba/image/upload/v1771269595/cosset/gallery/13.jpg", alt: "Architecture detail" },
  { src: "https://res.cloudinary.com/dmgvtmsba/image/upload/v1771269594/cosset/gallery/14.jpg", alt: "Architecture detail" },
  { src: "https://res.cloudinary.com/dmgvtmsba/image/upload/v1771269593/cosset/gallery/15.jpg", alt: "Architecture detail" },
];

// Fetch actual image dimensions
const getImageDimensions = async (src: string): Promise<{ w: number; h: number }> => {
  return new Promise((resolve) => {
    const img = new window.Image();
    img.onload = () => resolve({ w: img.width, h: img.height });
    img.onerror = () => resolve({ w: 1600, h: 1000 }); // fallback
    img.src = src;
  });
};

export default function Gallery() {
  const [itemData, setItemData] = useState<
    Array<{ src: string; alt: string; w: number; h: number }>
  >([]);

  useEffect(() => {
    // Fetch dimensions for all images
    const fetchDimensions = async () => {
      const data = await Promise.all(
        galleryImages.map(async (img) => {
          const dims = await getImageDimensions(img.src);
          return { ...img, ...dims };
        })
      );
      setItemData(data);
    };

    fetchDimensions();
  }, []);

  useEffect(() => {
    if (itemData.length === 0) return;

    const lightbox = new PhotoSwipeLightbox({
      gallery: "#pswp-gallery",
      children: "a",
      pswpModule: PhotoSwipe,
      showHideAnimationType: "zoom",
      bgOpacity: 0.85,
      wheelToZoom: true,
      paddingFn: (viewportSize) => ({
        top: 40,
        bottom: 40,
        left: 20,
        right: 20,
      }),
    });

    // Add click-outside-to-close functionality
    lightbox.on("init", () => {
      const element = lightbox.pswp?.element;
      if (element) {
        const bgElement = element.querySelector(".pswp__bg") as HTMLElement;
        if (bgElement) {
          bgElement.addEventListener("click", () => {
            lightbox.pswp?.close();
          });
        }
      }
    });

    lightbox.init();
    return () => lightbox.destroy();
  }, [itemData]);

  return (
    <section id="gallery" className="py-16 md:py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <p className="section-tag mb-3">What We Do</p>
        <h2 className="section-title mb-4">Gallery</h2>
        <p className="text-stone-600 max-w-2xl mb-12">
          A glimpse of the spaces we create—residential, commercial, and interior.
        </p>

        <div id="pswp-gallery" className="columns-2 md:columns-3 gap-3 md:gap-4 [column-fill:balance]">
          {itemData.map((img, i) => (
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
