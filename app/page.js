import Image from "next/image";
import Link from "next/link";

const fallbackStats = [
  { value: "12", label: "Curated models" },
  { value: "4.9/5", label: "Client rating" },
  { value: "48h", label: "Delivery window" },
  { value: "24/7", label: "Support access" },
];

const featurePillars = [
  {
    title: "Bespoke curation",
    text: "A tight selection of machine-driven icons, performance builds, and refined daily drivers.",
  },
  {
    title: "Luxury detailing",
    text: "Clean presentation, premium materials, and a balance of performance and comfort in every frame.",
  },
  {
    title: "Tailored experience",
    text: "From first contact to final handoff, every interaction is designed to feel precise and personal.",
  },
];

const featuredCars = [
  {
    slug: "apex-cr",
    image: "/hero-car.png",
    name: "Apex CR",
    type: "Luxery",
    accent: "0-100 km/h in 3.2s",
    description: "A sculpted, performance-first coupe designed for expressive drives.",
  },
  {
    slug: "noir-s",
    image: "/noir s.jpg",
    name: "Noir S",
    type: "tourer",
    accent: "Luxery touring",
    description: "Balanced precision, elevated comfort, and a commanding cabin feel.",
  },
  {
    slug: "monarch-r",
    image: "/Monarch.jpg",
    name: "Monarch R",
    type: "track",
    accent: "Carbon aero-kit",
    description: "Silent acceleration, digital interfaces, and aerodynamic elegance.",
  },
];

const processSteps = [
  {
    title: "Curated selection",
    text: "Every model is chosen for the way it looks, feels, and performs on the road.",
  },
  {
    title: "Detailed presentation",
    text: "Clean storytelling, precise specs, and elevated visuals bring each vehicle to life.",
  },
  {
    title: "Tailored guidance",
    text: "From first look to final drive, the experience stays personal and confident.",
  },
];

export default function Home() {
  return (
    <main id="top" className="relative isolate min-h-screen overflow-hidden bg-[#101214] text-white">
      <Image
        src="/hero-car.png"
        alt="A black sports car in a dark studio"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 hidden scale-[1.25] object-cover object-[36%_54%] sm:scale-100 lg:block lg:object-center"
      />
      <Image
        src="/new2.jpg"
        alt="Luxury sports car on a city road"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover lg:hidden"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-black/60 via-black/20 to-[#101214]"
      />

      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-5 sm:px-6 lg:px-8 lg:pb-20 lg:pt-8">
        <header className="mt-10 flex items-start justify-between gap-4 text-[10px] font-medium uppercase tracking-[0.22em] text-white/75 sm:text-xs lg:mt-14">
          <p>
            Automotive
            <br />
            Portfolio
          </p>
          <p className="text-right">Form · Detail · Motion</p>
        </header>

        <section className="mt-12 max-w-4xl pb-16 sm:mt-16 lg:pb-20">
          <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.3em] text-white/75 sm:mb-6 sm:text-xs">
            A study in automotive design
          </p>
          <h1 className="text-5xl font-medium leading-[0.95] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
            Driven by
            <br />
            detail.
          </h1>
          <p className="mt-5 max-w-sm text-sm leading-6 text-white/75 sm:mt-7 sm:text-base">
            An appreciation of the machines, moments, and design that move us.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="#featured"
              className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-[10px] font-medium uppercase tracking-[0.22em] text-[#101214] transition hover:bg-white/90"
            >
              View collection
            </Link>
            <Link
              href="/contact?type=Private%20Viewing%20%2F%20Test%20Drive"
              className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/8 px-5 py-3 text-[10px] font-medium uppercase tracking-[0.22em] text-white transition hover:border-white/45 hover:bg-white/14"
            >
              Book a drive
            </Link>
          </div>
        </section>

        <section className="relative mx-auto max-w-6xl pb-12 pt-4">
          <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[#111417]/80 shadow-[0_30px_80px_rgba(0,0,0,0.34)]">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(0,0,0,0.18)), url("https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=80")',
              }}
            />
            <div className="absolute inset-0 bg-[#0d1115]/65" />

            <div className="relative grid gap-0 lg:grid-cols-[1.08fr_0.92fr]">
              <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/70">
                    Studio selection
                  </p>
                  <h2 className="mt-4 max-w-lg text-3xl font-medium tracking-[-0.06em] text-white sm:text-5xl">
                    Designed for drivers who want more than transportation.
                  </h2>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4 xl:grid-cols-4">
                  {fallbackStats.map((stat) => (
                    <div key={stat.label} className="rounded-[22px] border border-white/10 bg-white/4 p-4 backdrop-blur-sm">
                      <p className="text-2xl font-medium tracking-[-0.05em] text-white">{stat.value}</p>
                      <p className="mt-2 text-[10px] uppercase tracking-[0.22em] text-white/60">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative min-h-[360px] overflow-hidden border-t border-white/10 lg:border-l lg:border-t-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.10),transparent_55%)]" />
                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/6 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 rounded-[26px] border border-white/15 bg-[#0d1115]/75 p-4 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
                  <p className="text-[10px] uppercase tracking-[0.26em] text-white/60">Featured detail</p>
                  <div className="mt-3 flex items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-medium tracking-[-0.05em] text-white">Apex GT Motors</h3>
                      <p className="mt-1 text-sm text-white/70">Performance, Luxury, Comfort, etc</p>
                    </div>
                    <span className="rounded-full border border-white/20 bg-white/6 px-3 py-2 text-[10px] uppercase tracking-[0.24em] text-white/80">
                      2025 V.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="featured" className="mx-auto max-w-6xl pb-12 pt-6">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/70">
                Featured collection
              </p>
              <h2 className="mt-2 text-3xl font-medium tracking-[-0.05em] text-white sm:text-4xl">
                Precision in motion.
              </h2>
            </div>
            <Link
              href="/inventory"
              className="hidden text-[10px] font-medium uppercase tracking-[0.22em] text-white/75 transition hover:text-white sm:inline-flex"
            >
              See all models
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredCars.map((car, index) => (
              <article
                key={car.name}
                className="rounded-[28px] border border-white/12 bg-white/6 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/8"
              >
                <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.24em] text-white/60">
                  <span>0{index + 1}</span>
                  <span>{car.type}</span>
                </div>
                <Link
                  href={`/inventory/${car.slug}`}
                  className="relative mt-8 block h-32 overflow-hidden rounded-[22px] bg-gradient-to-br from-white/15 via-white/5 to-transparent"
                  aria-label={`Explore ${car.name}`}
                >
                  <Image
                    src={car.image}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover transition duration-500 hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
                </Link>
                <h3 className="mt-6 text-2xl font-medium tracking-[-0.04em] text-white">
                  <Link href={`/inventory/${car.slug}`} className="transition hover:text-white/75">
                    {car.name}
                  </Link>
                </h3>
                <p className="mt-2 text-sm text-white/70">{car.description}</p>
                <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-sm text-white/75">
                  <span>{car.accent}</span>
                  <Link
                    href={`/inventory/${car.slug}`}
                    className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/70 transition hover:text-white"
                  >
                    Details <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="process" className="mx-auto max-w-6xl pb-8 pt-4 sm:pt-8">
          <div className="mb-8 max-w-xl">
            <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/70">
              Our approach
            </p>
            <h2 className="mt-2 text-3xl font-medium tracking-[-0.05em] text-white sm:text-4xl">
              Crafted for the way you drive.
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featurePillars.map((step, index) => (
              <article
                key={step.title}
                className="rounded-[28px] border border-white/12 bg-[#111417]/80 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.24)] transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-[#151b1f]/90"
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.26em] text-white/60">
                    0{index + 1}
                  </span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/6 text-[10px] uppercase tracking-[0.18em] text-white/75">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-medium tracking-[-0.04em] text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/70">{step.text}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
