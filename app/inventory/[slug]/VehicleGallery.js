'use client';

import Image from "next/image";
import { useState } from "react";

export default function VehicleGallery({ vehicle }) {
  const [selectedImage, setSelectedImage] = useState(vehicle.gallery[0]);

  return (
    <section aria-label={`${vehicle.name} image gallery`}>
      <div className="relative aspect-[4/3] overflow-hidden rounded-[30px] border border-white/10 bg-[#181c20] sm:aspect-[16/10]">
        <Image
          src={selectedImage.src}
          alt={`${vehicle.name} — ${selectedImage.label}`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 58vw"
          className="object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-5 pb-5 pt-16">
          <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-white/80">
            {selectedImage.label}
          </p>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-3 gap-3">
        {vehicle.gallery.map((image) => (
          <button
            key={image.src}
            type="button"
            aria-label={`Show ${image.label}`}
            aria-pressed={selectedImage.src === image.src}
            onClick={() => setSelectedImage(image)}
            className={`relative aspect-[4/3] overflow-hidden rounded-2xl border transition ${
              selectedImage.src === image.src
                ? "border-white/70"
                : "border-white/10 opacity-70 hover:border-white/35 hover:opacity-100"
            }`}
          >
            <Image
              src={image.src}
              alt=""
              fill
              sizes="(max-width: 1024px) 33vw, 18vw"
              className="object-cover"
            />
          </button>
        ))}
      </div>
      <p className="mt-3 text-xs leading-5 text-white/45">
        Illustrative reference imagery. Vehicle names, specifications, and pricing are portfolio concepts.
      </p>
    </section>
  );
}
