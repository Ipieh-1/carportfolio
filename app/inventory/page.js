'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { vehicles } from "./vehicles";

const filters = [
  { label: "All models", value: "all" },
  { label: "Grand tourers", value: "gt" },
  { label: "SUVs", value: "suv" },
  { label: "Electric", value: "ev" },
  { label: "Track", value: "track" },
];

export default function InventoryPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const visibleVehicles = vehicles.filter(
    (vehicle) => activeFilter === "all" || vehicle.category === activeFilter,
  );

  return (
    <main className="min-h-screen bg-[#101214] text-white">
      <div className="mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pt-20">
        <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/70">
          Curated collection
        </p>
        <h1 className="mt-4 text-4xl font-medium tracking-[-0.06em] text-white sm:text-5xl lg:text-6xl">
          Inventory
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-6 text-white/70 sm:text-base">
          A focused selection of performance cars, luxury utility, and electric design built to be experienced rather than merely observed.
        </p>
        <p className="mt-3 text-xs leading-5 text-white/45">
          Apex models, specifications, imagery, and prices are illustrative portfolio concepts, not live vehicle listings.
        </p>

        <div className="mt-8 flex flex-wrap gap-3" aria-label="Filter inventory">
          {filters.map((filter) => (
            <button
              key={filter.value}
              type="button"
              aria-pressed={activeFilter === filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`rounded-full border px-3 py-2 text-[10px] font-medium uppercase tracking-[0.2em] transition ${
                activeFilter === filter.value
                  ? "border-white/40 bg-white text-[#101214]"
                  : "border-white/15 bg-white/5 text-white/70 hover:border-white/30 hover:text-white"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <p className="mt-5 text-xs text-white/50" aria-live="polite">
          Showing {visibleVehicles.length} {visibleVehicles.length === 1 ? "model" : "models"}
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visibleVehicles.map((vehicle) => (
            <article
              key={vehicle.name}
              className="rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.24)]"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-[10px] uppercase tracking-[0.24em] text-white/60">
                  {vehicle.type}
                </span>
                <span className="rounded-full border border-white/15 bg-white/6 px-2 py-1 text-[9px] uppercase tracking-[0.2em] text-white/75">
                  Concept
                </span>
              </div>

              <Link
                href={`/inventory/${vehicle.slug}`}
                className="group relative mt-6 block aspect-[16/10] overflow-hidden rounded-[22px] border border-white/10 bg-white/5"
                aria-label={`View ${vehicle.name} details`}
              >
                <Image
                  src={vehicle.image}
                  alt={`${vehicle.name} concept vehicle`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
              </Link>

              <div className="mt-6 flex items-end justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-medium tracking-[-0.05em] text-white">
                    <Link
                      href={`/inventory/${vehicle.slug}`}
                      className="transition hover:text-white/75"
                    >
                      {vehicle.name}
                    </Link>
                  </h2>
                  <p className="mt-2 text-sm text-white/65">{vehicle.spec}</p>
                </div>
                <p className="text-sm font-medium text-white/80">{vehicle.price}</p>
              </div>

              <p className="mt-4 text-sm leading-6 text-white/70">{vehicle.blurb}</p>
              <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-white/10 pt-4">
                <Link
                  href={`/inventory/${vehicle.slug}`}
                  className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/80 transition hover:text-white"
                >
                  Explore details <span aria-hidden="true">→</span>
                </Link>
                <Link
                  href={`/contact?vehicle=${encodeURIComponent(vehicle.name)}`}
                  className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-white transition hover:border-white/40 hover:bg-white/15"
                >
                  Request a viewing
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
