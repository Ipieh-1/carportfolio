import Link from "next/link";

export const metadata = {
  title: "About | Apex GT Motors",
  description:
    "Explore the Apex ethos, illustrative brand story, and advisory perspectives behind a more considered automotive portfolio.",
};

const stats = [
  { value: "12", label: "Illustrative vehicle concepts" },
  { value: "07", label: "Journal topics" },
  { value: "06", label: "Journey stages" },
  { value: "03", label: "Brand story chapters" },
];

const milestones = [
  {
    year: "2020",
    label: "Foundational idea",
    title: "A more considered point of view.",
    text: "The Apex story begins as a concept: bring a curator’s eye to remarkable automotive design and the way people experience it.",
  },
  {
    year: "2023",
    label: "Sourcing vision",
    title: "A wider world of possibility.",
    text: "An aspiration to explore exceptional vehicles across markets, with clear context around provenance, availability, and what can be verified.",
  },
  {
    year: "2026",
    label: "Digital ecosystem",
    title: "A considered experience, online.",
    text: "The evolving Apex portfolio brings together vehicle concepts, editorial perspectives, and a direct path to start a conversation.",
  },
];

const advisoryRoles = [
  {
    number: "01",
    initials: "EP",
    title: "Executive Principal",
    focus: "Private collections & sourcing briefs",
    inquiryType: "Acquisition Brief",
    visual: "from-stone-200/20 via-stone-500/10 to-transparent",
  },
  {
    number: "02",
    initials: "TA",
    title: "Head of Technical Audit",
    focus: "Provenance & independent inspection coordination",
    inquiryType: "General Advisory",
    visual: "from-zinc-200/20 via-zinc-500/10 to-transparent",
  },
  {
    number: "03",
    initials: "CA",
    title: "Director of Client Advisory",
    focus: "Collection guidance & client experience",
    inquiryType: "Collection Management",
    visual: "from-neutral-200/20 via-neutral-500/10 to-transparent",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#101214] text-white">
      <div className="mx-auto max-w-6xl px-4 pb-20 pt-20 sm:px-6 lg:px-8 lg:pt-24">
        <header>
          <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/70">
            About the studio
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-medium tracking-[-0.06em] text-white sm:text-5xl lg:text-6xl">
            Built around precision, taste, and experience.
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/65 sm:text-base">
            An automotive portfolio exploring considered curation, distinctive design, and a more personal relationship with the drive.
          </p>
        </header>

        <nav className="mt-8 flex flex-wrap gap-2.5" aria-label="On this page">
          {[
            ["Ethos", "#ethos"],
            ["Principles", "#principles"],
            ["Legacy", "#legacy"],
            ["Advisory", "#advisory"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="rounded-full border border-white/15 bg-white/5 px-3 py-2 text-[9px] font-medium uppercase tracking-[0.18em] text-white/70 transition hover:border-white/30 hover:text-white sm:px-4 sm:text-[10px]"
            >
              {label}
            </a>
          ))}
          <Link
            href="/inventory"
            className="rounded-full border border-white/15 bg-white/5 px-3 py-2 text-[9px] font-medium uppercase tracking-[0.18em] text-white/70 transition hover:border-white/30 hover:text-white sm:px-4 sm:text-[10px]"
          >
            Explore collection
          </Link>
        </nav>

        <section
          id="ethos"
          className="mt-10 scroll-mt-28 rounded-[30px] border border-white/10 bg-white/[0.025] p-6 sm:p-8 lg:p-10"
          aria-labelledby="ethos-heading"
        >
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.26em] text-white/55">
                The Ethos
              </p>
              <h2
                id="ethos-heading"
                className="mt-3 text-2xl font-medium tracking-[-0.05em] sm:text-3xl"
              >
                A Discerning Standard in Motion.
              </h2>
              <blockquote className="mt-6 border-l border-white/30 pl-5 text-xl font-light leading-8 tracking-[-0.03em] text-white/85 sm:text-2xl">
                “The right car is not simply acquired. It is understood, considered, and chosen with intention.”
              </blockquote>
            </div>

            <div className="space-y-4 text-sm leading-7 text-white/70 sm:text-base">
              <p>
                Apex is a boutique automotive portfolio built for people who value more than specifications alone. We are drawn to form, cabin feel, material character, and the emotional rhythm a well-made machine brings to the road.
              </p>
              <p>
                Our point of view is shaped around restraint, precision, and thoughtful curation. Vehicle concepts and editorial perspectives are presented with context; availability, provenance, and any advisory services require individual confirmation.
              </p>
            </div>
          </div>
        </section>

        <section
          id="principles"
          className="mt-8 scroll-mt-28 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]"
          aria-labelledby="principles-heading"
        >
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 sm:p-7">
            <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-white/60">
              Principles
            </p>
            <h2 id="principles-heading" className="mt-3 text-2xl font-medium tracking-[-0.05em]">
              Details make the difference.
            </h2>
            <ul className="mt-6 space-y-4 text-sm text-white/75">
              <li className="flex gap-3"><span aria-hidden="true">—</span><span>Distilled curation over excess.</span></li>
              <li className="flex gap-3"><span aria-hidden="true">—</span><span>Performance with poise and control.</span></li>
              <li className="flex gap-3"><span aria-hidden="true">—</span><span>Materials, lines, and presence that linger.</span></li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex min-h-32 flex-col justify-center rounded-[24px] border border-white/10 bg-white/[0.035] p-4 sm:p-5">
              <p className="text-3xl font-medium tracking-[-0.05em] text-white sm:text-4xl">{stat.value}</p>
              <p className="mt-2 text-[9px] leading-4 uppercase tracking-[0.16em] text-white/60 sm:text-[10px] sm:tracking-[0.18em]">{stat.label}</p>
            </div>
          ))}
          </div>
        </section>

        <section id="legacy" className="mt-20 scroll-mt-28 border-t border-white/10 pt-12" aria-labelledby="legacy-heading">
          <div className="max-w-2xl">
            <p className="text-[10px] font-medium uppercase tracking-[0.26em] text-white/60">
              The Origin
            </p>
            <h2
              id="legacy-heading"
              className="mt-3 text-3xl font-medium tracking-[-0.05em] text-white sm:text-4xl"
            >
              Driven by Legacy
            </h2>
            <p className="mt-4 text-sm leading-6 text-white/65">
              A vision for a more considered automotive advisory—expressed as three chapters in the Apex brand story.
            </p>
            <p className="mt-3 text-xs leading-5 text-white/45">
              Illustrative brand narrative, not a record of verified company milestones, sourcing activity, or service history.
            </p>
          </div>

          <ol className="mt-8 grid gap-4 md:grid-cols-3">
            {milestones.map((milestone) => (
              <li
                key={milestone.year}
                className="rounded-[26px] border border-white/10 bg-white/[0.035] p-5 md:p-6"
              >
                <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-white/45">
                  {milestone.year} <span aria-hidden="true">·</span> {milestone.label}
                </p>
                <h3 className="mt-4 text-lg font-medium tracking-[-0.035em] text-white">
                  {milestone.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/60">
                  {milestone.text}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section id="advisory" className="mt-20 scroll-mt-28 border-t border-white/10 pt-12" aria-labelledby="curators-heading">
          <div className="max-w-2xl">
            <p className="text-[10px] font-medium uppercase tracking-[0.26em] text-white/60">
              The Curators
            </p>
            <h2
              id="curators-heading"
              className="mt-3 text-3xl font-medium tracking-[-0.05em] text-white sm:text-4xl"
            >
              The Advisory Board
            </h2>
            <p className="mt-4 text-sm leading-6 text-white/65">
              The perspectives envisioned for a thoughtful, client-led automotive experience.
            </p>
            <p className="mt-3 text-xs leading-5 text-white/45">
              Illustrative role profiles only; these cards do not identify confirmed staff, qualifications, or currently available services.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {advisoryRoles.map((role) => (
              <article
                key={role.number}
                className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.035]"
              >
                <div className={`relative flex h-44 items-end overflow-hidden bg-gradient-to-br ${role.visual} p-5`}>
                  <div
                    aria-hidden="true"
                    className="absolute -right-5 -top-12 h-48 w-48 rounded-full border border-white/10"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute -right-1 -top-1 h-28 w-28 rounded-full border border-white/[0.07]"
                  />
                  <span className="relative inline-flex h-14 w-14 rounded-full bg-gradient-to-br from-white/65 via-white/10 to-white/35 p-px shadow-[0_0_24px_rgba(255,255,255,0.08)]">
                    <span className="flex h-full w-full items-center justify-center rounded-full bg-[radial-gradient(ellipse_at_32%_18%,rgba(255,255,255,0.2),transparent_52%),linear-gradient(145deg,#292d31,#101214_68%,#1d2125)] text-sm font-medium tracking-[0.16em] text-white/90">
                      {role.initials}
                    </span>
                  </span>
                  <span className="absolute right-5 top-5 text-[9px] font-medium tracking-[0.2em] text-white/45">
                    {role.number}
                  </span>
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="text-xl font-medium tracking-[-0.04em] text-white">
                    {role.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-white/60">
                    {role.focus}
                  </p>
                  <Link
                    href={`/contact?type=${encodeURIComponent(role.inquiryType)}`}
                    className="mt-5 inline-flex items-center gap-2 text-[9px] font-medium uppercase tracking-[0.18em] text-white/75 transition hover:text-white"
                  >
                    Start an inquiry <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <Link
          href="/contact"
          className="mt-10 inline-flex rounded-full bg-white px-5 py-3 text-[10px] font-medium uppercase tracking-[0.22em] text-[#101214] shadow-[0_0_32px_rgba(255,255,255,0.16)] transition hover:bg-white/90"
        >
          Get in touch
        </Link>
      </div>
    </main>
  );
}
