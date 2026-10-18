import ProcessTimeline from "./ProcessTimeline";

const processSteps = [
  {
    id: "consultation",
    number: "01",
    title: "Bespoke Consultation",
    summary:
      "A considered conversation about your driving profile, collection goals, and the details that matter most to you.",
    details: [
      "Clarify intended use, preferences, and priorities.",
      "Agree on a brief and the next steps before any search begins.",
      "No obligation to proceed beyond the initial conversation.",
    ],
  },
  {
    id: "sourcing",
    number: "02",
    title: "Sourcing & Curation",
    summary:
      "Shape a focused shortlist around your brief, exploring suitable vehicles and sourcing avenues where available.",
    details: [
      "Review relevant specifications, condition information, and provenance records when available.",
      "Discuss sourcing options and any limitations before moving forward.",
      "Access to specific vehicles or private allocations is not guaranteed.",
    ],
  },
  {
    id: "verification",
    number: "03",
    title: "Verification & Inspection",
    summary:
      "Understand what is known about a vehicle, what still needs checking, and which independent assessments may be appropriate.",
    details: [
      "Review available service, ownership, and vehicle-history documentation.",
      "An independent inspection may be arranged by agreement, subject to vehicle and provider availability.",
      "Inspection scope and findings are documented; no inspection can eliminate every risk.",
    ],
  },
  {
    id: "presentation",
    number: "04",
    title: "Bespoke Presentation",
    summary:
      "Bring the shortlist together in a clear, tailored review so you can compare each option with confidence.",
    details: [
      "Present specifications, known history, condition notes, and outstanding questions together.",
      "Arrange a private walkthrough or additional materials where available.",
      "Confirm the information available for each vehicle before making a decision.",
    ],
  },
  {
    id: "acquisition",
    number: "05",
    title: "Acquisition Coordination",
    summary:
      "If you choose to proceed, coordinate agreed next steps and keep the transaction requirements visible.",
    details: [
      "Review proposed commercial terms and responsibilities before commitment.",
      "Payment, escrow, title, import, and customs arrangements depend on the transaction and jurisdiction.",
      "Any third-party provider, fees, and written terms must be confirmed before funds are transferred.",
    ],
  },
  {
    id: "delivery",
    number: "06",
    title: "Delivery & Handover",
    summary:
      "Plan the handover around your requirements, with transport options discussed and confirmed for the specific vehicle and route.",
    details: [
      "Enclosed transport may be requested where offered by a suitable carrier.",
      "Carrier, route, insurance, timing, and tracking depend on availability and the agreed service.",
      "Handover arrangements and vehicle orientation are confirmed before delivery.",
    ],
  },
];

const standards = [
  {
    title: "Independent inspection",
    text: "Inspection scope and provider are agreed for each vehicle; availability and findings vary.",
  },
  {
    title: "Clear transaction terms",
    text: "Costs, responsibilities, and any third-party arrangements should be confirmed in writing before commitment.",
  },
  {
    title: "Sourcing with context",
    text: "We aim to explore relevant options while being clear about availability, access, and limitations.",
  },
  {
    title: "Respect for privacy",
    text: "Personal information is handled with care. Any formal confidentiality terms must be agreed separately.",
  },
];

const values = [
  "Tailored Curation",
  "Absolute Discretion",
  "Bespoke Presentation",
  "Uncompromising Standards",
];

export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-[#101214] text-white">
      <div className="mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pt-20">
        <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/70">
          A considered client journey
        </p>
        <h1 className="mt-4 max-w-4xl text-4xl font-medium tracking-[-0.06em] text-white sm:text-5xl lg:text-6xl">
          The Apex process
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-white/70 sm:text-base">
          Six thoughtful stages, from the first conversation to handover. The scope, availability, and terms of any services are discussed and confirmed for each individual engagement.
        </p>
        <p className="mt-4 max-w-2xl border-l border-white/20 pl-4 text-xs leading-5 text-white/50">
          Service concept: this page describes an aspirational client journey, not a guarantee that every service, provider, vehicle, or transaction option is currently available.
        </p>

        <ProcessTimeline steps={processSteps} />

        <section className="mt-20 border-t border-white/10 pt-12" aria-labelledby="apex-standard">
          <div className="max-w-2xl">
            <p className="text-[10px] font-medium uppercase tracking-[0.26em] text-white/60">
              A clear standard of care
            </p>
            <h2 id="apex-standard" className="mt-3 text-3xl font-medium tracking-[-0.05em] sm:text-4xl">
              The Apex Standard
            </h2>
            <p className="mt-4 text-sm leading-6 text-white/65">
              The principles we intend to bring to every conversation—always shaped around what can be confirmed for that specific vehicle and engagement.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {standards.map((standard, index) => (
              <article
                key={standard.title}
                className="rounded-[24px] border border-white/10 bg-white/[0.035] p-5"
              >
                <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/40">
                  0{index + 1}
                </span>
                <h3 className="mt-5 text-lg font-medium tracking-[-0.03em] text-white">
                  {standard.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/60">{standard.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 grid gap-8 rounded-[30px] border border-white/10 bg-[#0e1217] p-6 sm:p-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.26em] text-white/60">
              Working principles
            </p>
            <h2 className="mt-3 text-2xl font-medium tracking-[-0.05em]">
              Quiet confidence at every stage.
            </h2>
          </div>
          <div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {values.map((value) => (
                <li
                  key={value}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-sm text-white/80"
                >
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-white/80" />
                  {value}
                </li>
              ))}
            </ul>
            <a
              href="/contact"
              className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-[10px] font-medium uppercase tracking-[0.22em] text-[#101214] transition hover:bg-white/90"
            >
              Ready to Acquire Your Next Asset?
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
