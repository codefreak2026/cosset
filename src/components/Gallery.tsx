"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import PhotoSwipe from "photoswipe";
import "photoswipe/style.css";

const galleryImages = [
  { src: "https://res.cloudinary.com/dmgvtmsba/image/upload/v1775212841/cosset/gallery/1.png", alt: "Modern residence" },
  { src: "https://res.cloudinary.com/dmgvtmsba/image/upload/v1775212864/cosset/gallery/2.png", alt: "Living space" },
  { src: "https://res.cloudinary.com/dmgvtmsba/image/upload/v1775212882/cosset/gallery/3.png", alt: "Villa exterior" },
  { src: "https://res.cloudinary.com/dmgvtmsba/image/upload/v1775212879/cosset/gallery/4.png", alt: "Interior design" },
  { src: "https://res.cloudinary.com/dmgvtmsba/image/upload/v1775212881/cosset/gallery/5.png", alt: "Kitchen" },
  { src: "https://res.cloudinary.com/dmgvtmsba/image/upload/v1775212883/cosset/gallery/6.png", alt: "Bedroom" },
  { src: "https://res.cloudinary.com/dmgvtmsba/image/upload/v1775212889/cosset/gallery/7.png", alt: "House front" },
  { src: "https://res.cloudinary.com/dmgvtmsba/image/upload/v1775212888/cosset/gallery/8.png", alt: "Contemporary home" },
  { src: "https://res.cloudinary.com/dmgvtmsba/image/upload/v1775212886/cosset/gallery/9.png", alt: "Architecture detail" },
  { src: "https://res.cloudinary.com/dmgvtmsba/image/upload/v1775212849/cosset/gallery/10.png", alt: "Architecture detail" },
  { src: "https://res.cloudinary.com/dmgvtmsba/image/upload/v1775212851/cosset/gallery/11.png", alt: "Architecture detail" },
  { src: "https://res.cloudinary.com/dmgvtmsba/image/upload/v1775212845/cosset/gallery/12.png", alt: "Architecture detail" },
  { src: "https://res.cloudinary.com/dmgvtmsba/image/upload/v1775212841/cosset/gallery/13.png", alt: "Architecture detail" },
  { src: "https://res.cloudinary.com/dmgvtmsba/image/upload/v1775212856/cosset/gallery/14.png", alt: "Architecture detail" },
  { src: "https://res.cloudinary.com/dmgvtmsba/image/upload/v1775212856/cosset/gallery/15.png", alt: "Architecture detail" },
  { src: "https://res.cloudinary.com/dmgvtmsba/image/upload/v1775212858/cosset/gallery/16.png", alt: "Architecture detail" },
  { src: "https://res.cloudinary.com/dmgvtmsba/image/upload/v1775212859/cosset/gallery/17.png", alt: "Architecture detail" },
  { src: "https://res.cloudinary.com/dmgvtmsba/image/upload/v1775212863/cosset/gallery/18.png", alt: "Architecture detail" },
  { src: "https://res.cloudinary.com/dmgvtmsba/image/upload/v1775212864/cosset/gallery/19.png", alt: "Architecture detail" },
  { src: "https://res.cloudinary.com/dmgvtmsba/image/upload/v1775212863/cosset/gallery/20.png", alt: "Architecture detail" },
  { src: "https://res.cloudinary.com/dmgvtmsba/image/upload/v1775212968/cosset/gallery/21.png", alt: "Architecture detail" },
  { src: "https://res.cloudinary.com/dmgvtmsba/image/upload/v1775212865/cosset/gallery/22.png", alt: "Architecture detail" },
  { src: "https://res.cloudinary.com/dmgvtmsba/image/upload/v1775212867/cosset/gallery/23.png", alt: "Architecture detail" },
  { src: "https://res.cloudinary.com/dmgvtmsba/image/upload/v1775212884/cosset/gallery/24.png", alt: "Architecture detail" },
  { src: "https://res.cloudinary.com/dmgvtmsba/image/upload/v1775212870/cosset/gallery/25.png", alt: "Architecture detail" },
  { src: "https://res.cloudinary.com/dmgvtmsba/image/upload/v1775212869/cosset/gallery/27.png", alt: "Architecture detail" },
  { src: "https://res.cloudinary.com/dmgvtmsba/image/upload/v1775212877/cosset/gallery/26.png", alt: "Architecture detail" },
  { src: "https://res.cloudinary.com/dmgvtmsba/image/upload/v1775212871/cosset/gallery/28.png", alt: "Architecture detail" },
  { src: "https://res.cloudinary.com/dmgvtmsba/image/upload/v1775212874/cosset/gallery/29.png", alt: "Architecture detail" },
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

    let isLightboxOpen = false;

    // Handle back button close
    const handlePopState = () => {
      if (isLightboxOpen) {
        lightbox.pswp?.close();
      }
    };

    // Add click-outside-to-close functionality and back button support
    lightbox.on("init", () => {
      isLightboxOpen = true;
      // Push a state to browser history so back button works
      window.history.pushState({ lightboxOpen: true }, "");

      const element = lightbox.pswp?.element;
      if (element) {
        const bgElement = element.querySelector(".pswp__bg") as HTMLElement;
        if (bgElement) {
          bgElement.addEventListener("click", () => {
            lightbox.pswp?.close();
          });
        }
      }

      window.addEventListener("popstate", handlePopState);
    });

    lightbox.on("close", () => {
      isLightboxOpen = false;
      window.removeEventListener("popstate", handlePopState);
    });

    lightbox.init();
    return () => {
      window.removeEventListener("popstate", handlePopState);
      lightbox.destroy();
    };
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
