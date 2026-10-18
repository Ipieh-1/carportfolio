import Link from "next/link";
import { notFound } from "next/navigation";
import VehicleGallery from "./VehicleGallery";
import { vehicles } from "../vehicles";

export function generateStaticParams() {
  return vehicles.map((vehicle) => ({ slug: vehicle.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const vehicle = vehicles.find((item) => item.slug === slug);

  if (!vehicle) {
    return { title: "Vehicle not found | Apex" };
  }

  return {
    title: `${vehicle.name} | Apex Collection`,
    description: vehicle.description,
  };
}

export default async function VehiclePage({ params }) {
  const { slug } = await params;
  const vehicle = vehicles.find((item) => item.slug === slug);

  if (!vehicle) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#101214] text-white">
      <div className="mx-auto max-w-6xl px-4 pb-20 pt-12 sm:px-6 lg:px-8 lg:pt-16">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.2em] text-white/55">
            <li>
              <Link href="/inventory" className="transition hover:text-white">
                Inventory
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-white/85">{vehicle.name}</li>
          </ol>
        </nav>

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div className="vehicle-content-enter">
            <VehicleGallery vehicle={vehicle} />
          </div>

          <div className="vehicle-content-enter lg:sticky lg:top-28" style={{ "--vehicle-enter-delay": "120ms" }}>
            <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/65">
              {vehicle.type} <span aria-hidden="true">·</span> Apex concept series
            </p>
            <h1 className="mt-4 text-4xl font-medium tracking-[-0.06em] sm:text-5xl">
              {vehicle.name}
            </h1>
            <p className="mt-5 text-sm leading-7 text-white/70 sm:text-base">
              {vehicle.description}
            </p>

            <div className="mt-7 flex items-end justify-between gap-4 border-y border-white/10 py-5">
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-white/50">Portfolio concept</p>
                <p className="mt-2 text-sm font-medium text-white/85">{vehicle.spec}</p>
              </div>
              <p className="text-xl font-medium tracking-[-0.04em] text-white">{vehicle.price}</p>
            </div>

            <Link
              href={`/contact?vehicle=${encodeURIComponent(vehicle.name)}`}
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-3.5 text-[10px] font-medium uppercase tracking-[0.22em] text-[#101214] transition hover:bg-white/90"
            >
              Request details or a drive
            </Link>
            <Link
              href="/inventory"
              className="mt-3 inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-[10px] font-medium uppercase tracking-[0.22em] text-white/80 transition hover:border-white/30 hover:text-white"
            >
              Back to inventory
            </Link>
          </div>
        </div>

        <div
          className="vehicle-content-enter mt-16 grid gap-12 border-t border-white/10 pt-10 lg:grid-cols-[0.75fr_1.25fr]"
          style={{ "--vehicle-enter-delay": "220ms" }}
        >
          <section>
            <p className="text-[10px] font-medium uppercase tracking-[0.26em] text-white/60">
              The character
            </p>
            <h2 className="mt-3 text-2xl font-medium tracking-[-0.05em]">
              Made for a more considered drive.
            </h2>
            <p className="mt-4 text-sm leading-6 text-white/65">
              Each Apex model is presented as a design and ownership concept. Explore the details, then get in touch to discuss the direction that fits you.
            </p>
            <ul className="mt-6 space-y-3">
              {vehicle.features.map((feature) => (
                <li key={feature} className="flex gap-3 text-sm text-white/75">
                  <span aria-hidden="true" className="text-white/45">—</span>
                  {feature}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.26em] text-white/60">
                  Concept specifications
                </p>
                <h2 className="mt-3 text-2xl font-medium tracking-[-0.05em]">
                  At a glance
                </h2>
              </div>
              <span className="text-[9px] uppercase tracking-[0.18em] text-white/40">
                Illustrative
              </span>
            </div>
            <dl className="mt-6 divide-y divide-white/10 border-y border-white/10">
              {vehicle.specs.map(([label, value]) => (
                <div key={label} className="flex items-center justify-between gap-6 py-4">
                  <dt className="text-sm text-white/55">{label}</dt>
                  <dd className="text-right text-sm font-medium text-white/85">{value}</dd>
                </div>
              ))}
            </dl>
          </section>
        </div>

        {vehicle.ownershipConcept && (
          <section
            className="vehicle-content-enter mt-16 border-t border-white/10 pt-10"
            style={{ "--vehicle-enter-delay": "320ms" }}
            aria-labelledby="ownership-concept-heading"
          >
            <div className="max-w-2xl">
              <p className="text-[10px] font-medium uppercase tracking-[0.26em] text-white/60">
                Beyond the drive
              </p>
              <h2
                id="ownership-concept-heading"
                className="mt-3 text-2xl font-medium tracking-[-0.05em] sm:text-3xl"
              >
                The {vehicle.name}, tailored.
              </h2>
              <p className="mt-4 text-sm leading-6 text-white/60">
                Illustrative ownership and design directions for this portfolio concept—not confirmed specifications, production plans, availability, or services.
              </p>
            </div>
            <div className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {vehicle.ownershipConcept.map((item, index) => (
                <article
                  key={item.label}
                  className="vehicle-content-enter rounded-[24px] border border-white/10 bg-white/[0.035] p-5"
                  style={{ "--vehicle-enter-delay": `${400 + index * 90}ms` }}
                >
                  <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-white/45">
                    {item.label}
                  </p>
                  <h3 className="mt-4 text-lg font-medium tracking-[-0.04em] text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/60">
                    {item.detail}
                  </p>
                </article>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
