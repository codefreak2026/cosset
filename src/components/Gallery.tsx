"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import PhotoSwipe from "photoswipe";
import "photoswipe/style.css";

const galleryImages = [
  { src: "https://drive.google.com/uc?export=view&id=19_He0OPiKcM8agVvIXcHeOsPMMh4Kw1Q", alt: "Modern residence" },
  { src: "https://drive.google.com/uc?export=view&id=1wRLZtYAsGCi_WR12p6rY9uC3D9bbTkD6", alt: "Living space" },
  { src: "https://drive.google.com/uc?export=view&id=1NMyipNkZi5o0XtQYkgRP3JuVYzA_7sy3", alt: "Villa exterior" },
  { src: "https://drive.google.com/uc?export=view&id=1LE2Tm3ATUkiNzv-8w295MfYoMvMBU9Ih", alt: "Interior design" },
  { src: "https://drive.google.com/uc?export=view&id=1pq0EasZOTARLdcneo4nkCCoFAYkNBwks", alt: "Kitchen" },
  { src: "https://drive.google.com/uc?export=view&id=1IY4QVlXnmNEyirK3KEyzeivhuTRQHbS3", alt: "Bedroom" },
  { src: "https://drive.google.com/uc?export=view&id=1hJx0gah1rRH_XRCRUs-hLxqqwHCgkeVf", alt: "House front" },
  { src: "https://drive.google.com/uc?export=view&id=1y7aM06aI5KrSV7kOcM9BeUZJEYjSlnYE", alt: "Contemporary home" },
  { src: "https://drive.google.com/uc?export=view&id=1GyO0UuUdPVHjExf_wqzRTK6oOXIfsG2b", alt: "Architecture detail" },
  { src: "https://drive.google.com/uc?export=view&id=1oY6OPUzRuB81bXPj3kI5QvdPBJSvvBkB", alt: "Architecture detail" },
  { src: "https://drive.google.com/uc?export=view&id=1ZvVh1vuyLiHZXiZzAHW1Sz35091sd9_8", alt: "Architecture detail" },
  { src: "https://drive.google.com/uc?export=view&id=1FsTDn3tCn1WDTPvWtTxKQCZ6hFHxG_0J", alt: "Architecture detail" },
  { src: "https://drive.google.com/uc?export=view&id=1Lay3192bXPZfZwiyyK44joXV3f782xCD", alt: "Architecture detail" },
  { src: "https://drive.google.com/uc?export=view&id=1Pv24oM3MifuJbAjuraREQZZRB_rjqVc6", alt: "Architecture detail" },
  { src: "https://drive.google.com/uc?export=view&id=1I6G_sdfMYHajmUl8A0_xBUxxcKlvhnbD", alt: "Architecture detail" },
  { src: "https://drive.google.com/uc?export=view&id=1fB3OE_FbN0feOcqka28y__Zrg7Tm2dU8", alt: "Architecture detail" },
  { src: "https://drive.google.com/uc?export=view&id=14x0tBsV26yTcsYWmMi_XoOACWEyne5ZV", alt: "Architecture detail" },
  { src: "https://drive.google.com/uc?export=view&id=1XH-o4z2J5LTfdfvWGeEI1PbjYXMSTPvz", alt: "Architecture detail" },
  { src: "https://drive.google.com/uc?export=view&id=12T3cUIeh3q-Hha9-PTfb0n8RPYGcOBfv", alt: "Architecture detail" },
  { src: "https://drive.google.com/uc?export=view&id=1F7Ac2ByN_5fxvLdG-JKddE6UrENjrO93", alt: "Architecture detail" },
  { src: "https://drive.google.com/uc?export=view&id=1Gbt7NVOXjp1Vf-8o9pr_euBNZgORrF1V", alt: "Architecture detail" },
  { src: "https://drive.google.com/uc?export=view&id=1pY5DHpqzS_karzToPZAPnnArOZ5ZAMeq", alt: "Architecture detail" },
  { src: "https://drive.google.com/uc?export=view&id=1LL2Jd8ClXpaPZOLNEOTstE8o0rVgEaLj", alt: "Architecture detail" },
  { src: "https://drive.google.com/uc?export=view&id=1HYw75MVusRiscp3lE0f82WGBGjNMXUn7", alt: "Architecture detail" },
  { src: "https://drive.google.com/uc?export=view&id=1z6xhsqsPu37r10-cNE29cUnWOPwrEpU0", alt: "Architecture detail" },
  { src: "https://drive.google.com/uc?export=view&id=1EyQSq1XdjiMNGNfvhmEEPFuSN_IJh3WQ", alt: "Architecture detail" },
  { src: "https://drive.google.com/uc?export=view&id=1wDCavnbxKkPrsjnZR2YgmyVMrUFjTW3s", alt: "Architecture detail" },
  { src: "https://drive.google.com/uc?export=view&id=1vUKc6aJgkH25soAK-eo0lH0Xg3lCEO59", alt: "Architecture detail" },
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
