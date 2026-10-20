'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const featuredEntry = {
  date: "EDITORIAL FEATURE",
  title: "The Architecture of Valuation",
  subtitle: "Why analog supercars continue to captivate collectors",
  category: "Heritage",
  readTime: "6 min read",
  image: "/New top.jpg",
  imageAlt: "Illustrative grand touring car photographed on a road",
  excerpt:
    "Gated manuals, naturally aspirated engines, and mechanical feedback have a particular hold on the imagination. What gives an analogue driving experience its enduring appeal?",
  body: [
    "The appeal of an analogue supercar is not simply nostalgia. A manual shift, a naturally aspirated engine, and an unfiltered steering response ask the driver to participate. The experience is physical, legible, and shaped by small decisions made in real time.",
    "For collectors, rarity and provenance may add to that appeal, but neither guarantees future value. Condition, documented history, originality, maintenance, and individual demand all matter—and tastes change. A considered purchase starts with the car itself, not a promise about what it might be worth later.",
    "This is an editorial reflection on collector culture, not investment advice or a prediction of market performance. Any purchase deserves independent research and a close look at the specific vehicle.",
  ],
};

const entries = [
  {
    date: "FIELD NOTES",
    title: "Silencer C+: Aero in Quiet Space",
    category: "Performance",
    readTime: "4 min read",
    image: "/cars/track.jpg",
    imageAlt: "Illustrative performance coupe in a dynamic setting",
    excerpt:
      "How active aerodynamics and carefully managed airflow can support a composed, confidence-inspiring drive.",
    body: [
      "The most effective aerodynamic work is often the kind you notice through the car rather than by looking at it. Underbody airflow, cooling paths, and carefully balanced surfaces can help a vehicle remain composed as speed and conditions change.",
      "Active systems add another layer, adjusting to the task at hand. The challenge is to make those systems feel coherent with the steering, braking, and suspension—not like a separate technology demonstration.",
      "Every design is a compromise between efficiency, stability, cooling, and visual clarity. There is no single aerodynamic solution that suits every car.",
    ],
  },
  {
    date: "ROUTE STUDY",
    title: "Glider Pro: The Alpine Passes",
    category: "Culture",
    readTime: "5 min read",
    image: "/cars/roadster.jpg",
    imageAlt: "Illustrative open-top sports car on a scenic road",
    excerpt:
      "Elevation changes a drive. Long climbs and tight descents reveal the character of a powertrain, chassis, and braking setup.",
    body: [
      "Mountain roads reward a measured approach. A responsive powertrain helps on the climb, while predictable braking and a settled chassis matter more as the road turns downward.",
      "At altitude, changing conditions and thinner air can affect both driver and machine. Preparation—checking the route, weather, tyres, and vehicle condition—is part of the pleasure, not a distraction from it.",
      "The best route is not necessarily the fastest one. It is the one that leaves room to enjoy the landscape and drive within the conditions.",
    ],
  },
  {
    date: "DETAIL STUDY",
    title: "Smart 26X: Tactile Touchpoints",
    category: "Bespoke",
    readTime: "4 min read",
    image: "/cars/sedan.jpg",
    imageAlt: "Illustrative close study of a refined automotive design",
    excerpt:
      "Milled metal, carefully finished controls, and exposed materials can make a cockpit feel distinctly personal.",
    body: [
      "A cabin is experienced through the hand as much as the eye. The resistance of a control, the edge of a machined detail, and the grain of a chosen material all influence how a space feels in daily use.",
      "Bespoke work is most successful when it begins with intention. Materials should suit the design, age gracefully, and feel consistent across the cabin rather than competing for attention.",
      "The small choices are often the lasting ones: a surface that invites touch, a control that falls naturally to hand, or a finish chosen to complement rather than dominate.",
    ],
  },
  {
    date: "DESIGN NOTES",
    title: "Trooper 26: Design Language, Refined",
    category: "Design",
    readTime: "3 min read",
    image: "/Design.jpg",
    imageAlt: "Illustrative grand touring car with a sculpted silhouette",
    excerpt:
      "Proportion, restraint, and considered detail give a performance car a point of view that outlasts passing trends.",
    body: [
      "A compelling silhouette can communicate purpose before a single specification is read. Proportion establishes the first impression; surfacing and detail reward a closer look.",
      "Restraint is not the absence of character. It is the decision to let a few strong ideas carry the design, and to ensure each detail has a reason to be there.",
      "The result is a visual identity that feels resolved from every angle, rather than assembled from disconnected gestures.",
    ],
  },
  {
    date: "PERSPECTIVE",
    title: "Zoom E33: Electric Form, Not Compromise",
    category: "Electric",
    readTime: "4 min read",
    image: "/Electric.jpg",
    imageAlt: "Illustrative modern electric performance vehicle",
    excerpt:
      "New packaging possibilities give designers room to rethink the cabin, silhouette, and rhythm of a performance car.",
    body: [
      "Electrification changes the engineering brief, but it does not dictate a single aesthetic. Designers can explore new proportions and quieter forms while preserving a sense of movement and intent.",
      "The strongest electric experiences make technology feel integrated. Clear feedback, thoughtful controls, and a comfortable driving position matter just as much as acceleration figures.",
      "A distinctive electric car should feel complete in its own right—not simply like a familiar shape with a different power source.",
    ],
  },
  {
    date: "COLLECTOR'S NOTE",
    title: "Trimmer GT: Reading a Car's Provenance",
    category: "Market Insights",
    readTime: "5 min read",
    image: "/cars/suv.jpg",
    imageAlt: "Illustrative luxury vehicle in a considered setting",
    excerpt:
      "A useful starting point for understanding a vehicle's story: records, ownership history, condition, and the questions still unanswered.",
    body: [
      "Provenance is built from evidence. Service records, ownership documents, invoices, and inspection findings can help establish a vehicle's history, but each record needs to be read in context.",
      "Gaps do not automatically settle the question either way. They identify what is not yet known and where further checks may be worthwhile. Independent advice can be valuable for a significant purchase.",
      "No document alone guarantees condition or value. Consider the complete picture, verify important details, and take time to understand any uncertainty before proceeding.",
    ],
  },
  {
    date: "DRIVER'S JOURNAL",
    title: "Sindace M5: The Daily Driver, Reconsidered",
    category: "Performance",
    readTime: "3 min read",
    image: "/Drivers Comfort.jpg",
    imageAlt: "Illustrative luxury car in an urban environment",
    excerpt:
      "Comfort, visibility, and control deserve a place in the performance conversation alongside speed and silhouette.",
    body: [
      "A car that feels special on an ordinary Tuesday has achieved something a headline figure cannot measure. Controls that make sense, a supportive seat, and good outward visibility shape every journey.",
      "Performance is also composure: the way a car rides over imperfect surfaces, responds to a small steering input, and remains easy to place in traffic.",
      "Choosing a daily performance car is a personal balance. The right one makes its capabilities available without demanding attention at every moment.",
    ],
  },
  {
    date: "MODEL STUDY",
    title: "Noir S: The Art of Restraint",
    category: "Design",
    readTime: "4 min read",
    image: "/Noir S.jpg",
    imageAlt: "Illustrative dark luxury car in an urban setting",
    excerpt:
      "A closer look at the Noir S concept and how quiet proportions, careful surfaces, and a restrained cabin create presence.",
    body: [
      "The Noir S concept is built around a simple design question: how can a large touring sedan feel distinctive without relying on visual excess? Its answer begins with proportion, a low and composed profile, and surfaces that let light do much of the work.",
      "Inside, the same restraint carries through to the touchpoints. Materials and controls are intended to feel deliberate, with detail revealed gradually rather than demanding attention all at once.",
      "Noir S is an illustrative Apex design concept, not a production vehicle.",
    ],
  },
  {
    date: "MODEL STUDY",
    title: "Monarch R: Precision at Pace",
    category: "Performance",
    readTime: "4 min read",
    image: "/Monarch.jpg",
    imageAlt: "Illustrative track-focused performance coupe",
    excerpt:
      "The Monarch R concept puts chassis balance, clear driver feedback, and repeatable control ahead of headline numbers.",
    body: [
      "The Monarch R is imagined as a focused track coupe, but its character is not defined by power alone. Predictable responses, a readable chassis, and controls that invite precision are what help a driver build confidence lap after lap.",
      "A considered performance setup is a system: tyres, brakes, cooling, aerodynamics, and suspension must work together. The best outcome is not merely speed, but a car that communicates what it is doing.",
      "Monarch R is an illustrative Apex concept. Its specifications are creative placeholders, not tested performance claims.",
    ],
  },
  {
    date: "MODEL STUDY",
    title: "Solara E: A New Electric Rhythm",
    category: "Electric",
    readTime: "4 min read",
    image: "/Cars.jpg",
    imageAlt: "Illustrative modern electric performance car",
    excerpt:
      "The Solara E concept explores how immediate response and calm, intuitive controls can share the same electric driving experience.",
    body: [
      "The Solara E concept starts with the way electric power changes the rhythm of a drive: response arrives smoothly, sound recedes, and the cabin can become a quieter place to travel.",
      "That quiet should not mean a lack of character. A thoughtful driving position, clear feedback, and well-judged controls can make an electric performance sedan engaging without adding unnecessary complexity.",
      "Solara E is an illustrative Apex design concept. Its range and performance details are not verified product specifications.",
    ],
  },
  {
    date: "MODEL STUDY",
    title: "Solstice T: The Road as Destination",
    category: "Culture",
    readTime: "3 min read",
    image: "/Solistic.jpg",
    imageAlt: "Illustrative roadster on a scenic open road",
    excerpt:
      "An open-top touring concept shaped around scenic routes, unhurried stops, and the pleasure of being present for the drive.",
    body: [
      "The Solstice T is imagined for routes where the journey matters as much as the arrival. An open cabin changes the experience of a familiar road: light, temperature, and landscape become part of the drive.",
      "Good touring is as much about judgement as machinery. A flexible itinerary, changing weather, and regular pauses make a memorable route more rewarding than a rushed itinerary.",
      "Solstice T is an illustrative Apex concept. The route and driving notes are editorial, not a claim of a specific vehicle test.",
    ],
  },
  {
    date: "MODEL STUDY",
    title: "Aurora GT: A Collector's Perspective",
    category: "Market Insights",
    readTime: "5 min read",
    image: "/Aroara.jpg",
    imageAlt: "Illustrative grand touring car photographed on a road",
    excerpt:
      "Considering the Aurora GT concept through the lens of ownership: provenance, condition, documentation, and personal connection.",
    body: [
      "A collector's interest in a car can begin with design or engineering, but responsible consideration quickly turns to the individual example: how it has been maintained, what its records show, and where the history is incomplete.",
      "Desirability and market value are not fixed. They depend on many factors, including condition, originality, documentation, supply, and changing buyer preferences. No feature or specification can guarantee appreciation.",
      "Aurora GT is an illustrative Apex concept. This editorial is not a valuation, investment recommendation, or prediction of future market performance.",
    ],
  },
  {
    date: "MODEL STUDY",
    title: "Vanta X: A More Personal Cabin",
    category: "Bespoke",
    readTime: "4 min read",
    image: "/Solistic 2.jpg",
    imageAlt: "Illustrative luxury SUV in a refined setting",
    excerpt:
      "The Vanta X concept considers how material, colour, and everyday usability can shape a cabin around its owner's preferences.",
    body: [
      "Personalisation works best when it starts with how a vehicle will be used. The Vanta X concept explores a calm material palette, tactile details, and storage choices that make the cabin feel considered as well as individual.",
      "A bespoke brief can balance expression with longevity: a distinctive finish or colour can still feel at home when paired with durable materials and controls that remain easy to use.",
      "Vanta X is an illustrative Apex design concept. The customisation ideas described here are examples, not confirmed options or available commissions.",
    ],
  },
  {
    date: "HERITAGE NOTES",
    title: "Apex CR: The Grand Touring Ideal",
    category: "Heritage",
    readTime: "4 min read",
    image: "/hero-car.png",
    imageAlt: "Illustrative dark grand touring coupe in a studio",
    excerpt:
      "A study of the Apex CR concept, where a purposeful silhouette meets the comfort and restraint of a modern grand tourer.",
    body: [
      "The Apex CR concept brings together two complementary ambitions: a car with the stance and response of a performance coupe, and the composure to make a longer journey feel effortless.",
      "Its design language favours a low, continuous profile and carefully resolved surfaces. Rather than adding detail for its own sake, the concept lets proportion and light establish its character.",
      "Apex CR is an origin brand which brought together the concept and idea of 'Apex GT Motors' as a branch of 'Apex Production Ltd'.",
    ],
  },
  {
    date: "MODEL STUDY",
    title: "Tensile S: The Shape of a Lasting Legacy",
    category: "Performance",
    readTime: "4 min read",
    image: "/Legacy.jpg",
    imageAlt: "Illustrative sports car representing enduring automotive design",
    excerpt:
      "A marque's identity is carried through more than badges: proportion, craft, and the details that connect one generation to the next.",
    body: [
      "Automotive heritage is not simply a matter of age. It can be seen in the design decisions that endure: a familiar profile, a distinctive approach to engineering, or a detail refined over generations.",
      "Those references work best when they are interpreted with care. Repeating an old shape for nostalgia alone can feel superficial; understanding why it mattered creates room for a fresh expression that still feels connected to its roots.",
      "This is an editorial perspective on design heritage. The vehicle imagery is illustrative and does not depict a verified historical model.",
    ],
  },
  {
    date: "MODEL STUDY",
    title: "Tempest R: Composure on Circuit",
    category: "Performance",
    readTime: "4 min read",
    image: "/Tempest.jpg",
    imageAlt: "Illustrative performance coupe with a track-focused character",
    excerpt:
      "The Tempest R concept explores how balanced braking, cooling, and chassis response shape a confident circuit car.",
    body: [
      "The Tempest R concept is imagined around repeatability. A car that can communicate its limits clearly and manage heat through a session can be more rewarding than one focused on a single impressive lap.",
      "That depends on the complete package: brake feel, tyre behaviour, cooling capacity, and suspension that keeps the car composed as conditions change.",
      "Tempest R is an illustrative Apex concept. These design notes are not based on a physical vehicle test or verified performance data.",
    ],
  },
  {
    date: "MODEL STUDY",
    title: "Eclipse S: Designed Around the Pause",
    category: "Electric",
    readTime: "4 min read",
    image: "/Car3.jpg",
    imageAlt: "Illustrative electric performance vehicle",
    excerpt:
      "The Eclipse S concept considers how charging stops, daily routines, and quiet motion can all inform electric-car design.",
    body: [
      "Electric mobility changes not only how a car moves, but also how a journey is planned. Charging opportunities, dwell time, and the rhythm of everyday use become part of the design conversation.",
      "The Eclipse S concept treats those pauses as part of a larger touring experience, with an emphasis on intuitive information, a calm cabin, and a driving character that feels smooth rather than effortful.",
      "Eclipse S is an illustrative Apex concept. Its range and charging characteristics are not verified product claims.",
    ],
  },
  {
    date: "MODEL STUDY",
    title: "Solstice T: The Long Way Around",
    category: "Culture",
    readTime: "3 min read",
    image: "/Vanta 1.jpg",
    imageAlt: "Illustrative open-top sports car on a scenic road",
    excerpt:
      "The Solstice T roadster concept is an invitation to make room for scenic routes, unhurried stops, and the landscape.",
    body: [
      "The idea behind the Solstice T is simple: choose the route for the experience, not just the arrival time. An open-top car can make changes in light, air, and landscape feel like part of the drive itself.",
      "A memorable touring day is not measured by distance alone. A flexible plan, thoughtful stops, and attention to road and weather conditions leave more room to enjoy it.",
      "Solstice T is an illustrative Apex concept, and this piece is a lifestyle editorial rather than a vehicle review.",
    ],
  },
  {
    date: "MODEL STUDY",
    title: "Noir S (25 V.) : Context Before Collecting",
    category: "Market Insights",
    readTime: "4 min read",
    image: "/Noir 2.jpg",
    imageAlt: "Illustrative executive car in an urban setting",
    excerpt:
      "A collector's view of the Noir S concept begins with the questions every considered purchase should ask about history and condition.",
    body: [
      "Before comparing a car to market headlines, start with the individual example. Condition, maintenance, documentation, ownership history, and originality all help provide context.",
      "A careful review also makes space for what is not known. Independent inspection and appropriate professional advice may help clarify open questions, but neither a model's story nor a market trend guarantees future value.",
      "Noir S is an illustrative Apex concept. This editorial is not a valuation, investment recommendation, or forecast.",
      "(Previous Version)"
    ],
  },
  {
    date: "MODEL STUDY",
    title: "Ridgeback V: Utility, Considered",
    category: "Bespoke",
    readTime: "4 min read",
    image: "/Ridgeback.jpg",
    imageAlt: "Illustrative luxury SUV in a refined setting",
    excerpt:
      "The Ridgeback V concept looks at personalisation through the practical details of a luxury hybrid SUV.",
    body: [
      "A tailored SUV should feel coherent in everyday life. For the Ridgeback V concept, that means considering how materials, storage, seating, and the cabin's visual tone work together.",
      "A useful personalisation brief starts with priorities: who uses the vehicle, what it carries, and which details will matter after the novelty has passed. The best choices support the way the car is actually lived in.",
      "Ridgeback V is an illustrative Apex concept. The equipment and customisation described are ideas, not confirmed options or available services.",
    ],
  },
];

const topics = [
  "All",
  "Design",
  "Performance",
  "Electric",
  "Culture",
  "Market Insights",
  "Bespoke",
  "Heritage",
];

function ArticleCard({ entry }) {
  return (
    <article className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.035] transition hover:border-white/20 hover:bg-white/[0.055]">
      <div className="relative aspect-[16/10] overflow-hidden bg-white/5">
        <Image
          src={entry.image}
          alt={entry.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition duration-500 hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-[#101214]/75 px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.2em] text-white/85 backdrop-blur-sm">
          {entry.category}
        </span>
      </div>
      <div className="p-5 sm:p-6">
        <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-white/45">
          {entry.date} <span aria-hidden="true">·</span> {entry.readTime}
        </p>
        <h2 className="mt-4 text-xl font-medium tracking-[-0.045em] text-white sm:text-2xl">
          {entry.title}
        </h2>
        <p className="mt-3 text-sm leading-6 text-white/65">{entry.excerpt}</p>
        <p className="mt-5 text-[9px] uppercase tracking-[0.18em] text-white/40">
          Curated by Apex Editorial
        </p>
        <details className="group mt-5 border-t border-white/10 pt-4">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[10px] font-medium uppercase tracking-[0.2em] text-white/80 [&::-webkit-details-marker]:hidden">
            <span>Read editorial</span>
            <span
              aria-hidden="true"
              className="text-base transition-transform group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <div className="mt-4 space-y-4 text-sm leading-7 text-white/65">
            {entry.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </details>
      </div>
    </article>
  );
}

export default function JournalExperience() {
  const [activeTopic, setActiveTopic] = useState("All");
  const [featuredOpen, setFeaturedOpen] = useState(false);
  const visibleEntries = entries.filter(
    (entry) => activeTopic === "All" || entry.category === activeTopic,
  );

  return (
    <main className="min-h-screen bg-[#101214] text-white">
      <div className="mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pt-20">
        <header>
          <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/70">
            The Apex Journal
          </p>
          <h1 className="mt-4 text-4xl font-medium tracking-[-0.06em] text-white sm:text-5xl lg:text-6xl">
            Notes on motion and detail
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/70 sm:text-base">
            Editorial perspectives on automotive design, engineering, heritage, and the culture of the drive.
          </p>
        </header>

        <article className="relative mt-10 min-h-[440px] overflow-hidden rounded-[32px] border border-white/10 bg-[#15191d] sm:min-h-[500px]">
          <Image
            src={featuredEntry.image}
            alt={featuredEntry.imageAlt}
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1200px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b0e11]/95 via-[#0b0e11]/70 to-[#0b0e11]/15" />
          <div className="relative flex min-h-[440px] items-end p-6 sm:min-h-[500px] sm:p-10 lg:items-center lg:p-14">
            <div className="max-w-2xl">
              <div className="flex flex-wrap items-center gap-3 text-[9px] font-medium uppercase tracking-[0.22em] text-white/70">
                <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1.5">
                  Featured · {featuredEntry.category}
                </span>
                <span>{featuredEntry.readTime}</span>
              </div>
              <p className="mt-6 text-[10px] font-medium uppercase tracking-[0.24em] text-white/55">
                {featuredEntry.date} <span aria-hidden="true">·</span> Curated by Apex Editorial
              </p>
              <h2 className="mt-3 text-3xl font-medium leading-[1.04] tracking-[-0.055em] text-white sm:text-5xl lg:text-6xl">
                {featuredEntry.title}
              </h2>
              <p className="mt-3 text-lg font-light tracking-[-0.02em] text-white/80 sm:text-xl">
                {featuredEntry.subtitle}
              </p>
              <p className="mt-5 max-w-xl text-sm leading-6 text-white/70 sm:text-base">
                {featuredEntry.excerpt}
              </p>
              <button
                type="button"
                onClick={() => {
                  setFeaturedOpen(true);
                  document.getElementById("featured-editorial")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                className="mt-7 inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-[10px] font-medium uppercase tracking-[0.2em] text-[#101214] transition hover:bg-white/90"
              >
                Read editorial <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </article>

        <details
          id="featured-editorial"
          open={featuredOpen}
          onToggle={(event) => setFeaturedOpen(event.currentTarget.open)}
          className="group mt-4 rounded-[26px] border border-white/10 bg-white/[0.025] p-5 sm:p-7"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium text-white/85 [&::-webkit-details-marker]:hidden">
            <span>Open the featured editorial</span>
            <span
              aria-hidden="true"
              className="text-lg transition-transform group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <div className="mt-5 max-w-3xl space-y-4 text-sm leading-7 text-white/65">
            {featuredEntry.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </details>

        <section className="mt-14" aria-labelledby="journal-library">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-white/50">
                From the journal
              </p>
              <h2 id="journal-library" className="mt-2 text-2xl font-medium tracking-[-0.05em] sm:text-3xl">
                Perspectives, collected.
              </h2>
            </div>
            <p className="text-xs text-white/40" aria-live="polite">
              {visibleEntries.length} {visibleEntries.length === 1 ? "editorial" : "editorials"}
            </p>
          </div>

          <nav className="mt-6 flex flex-wrap gap-2.5" aria-label="Filter journal topics">
            {topics.map((topic) => (
              <button
                key={topic}
                type="button"
                aria-pressed={activeTopic === topic}
                onClick={() => setActiveTopic(topic)}
                className={`rounded-full border px-3 py-2 text-[9px] font-medium uppercase tracking-[0.17em] transition sm:px-4 sm:text-[10px] ${
                  activeTopic === topic
                    ? "border-white/40 bg-white text-[#101214]"
                    : "border-white/15 bg-white/[0.035] text-white/65 hover:border-white/30 hover:text-white"
                }`}
              >
                {topic}
              </button>
            ))}
          </nav>

          <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {visibleEntries.map((entry) => (
              <ArticleCard key={entry.title} entry={entry} />
            ))}
          </div>
        </section>

        <section className="relative mt-16 overflow-hidden rounded-[30px] border border-white/10 bg-[#0e1217] p-6 sm:p-10">
          <div
            aria-hidden="true"
            className="absolute -right-16 -top-28 h-72 w-72 rounded-full bg-white/[0.035] blur-3xl"
          />
          <div className="relative grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-2xl">
              <p className="text-[10px] font-medium uppercase tracking-[0.26em] text-white/55">
                The Apex Dispatch
              </p>
              <h2 className="mt-3 text-2xl font-medium tracking-[-0.05em] text-white sm:text-3xl">
                A considered note, from time to time.
              </h2>
              <p className="mt-4 text-sm leading-6 text-white/65">
                We’re preparing a quarterly letter on automotive design, collecting, and the culture of the drive.
              </p>
              <p className="mt-3 text-xs leading-5 text-white/45">
                Dispatch subscriptions are not open yet. Request an invitation and we’ll be in touch when the mailing list is ready.
              </p>
            </div>
            <Link
              href="/contact?interest=The%20Apex%20Dispatch"
              className="inline-flex w-fit items-center justify-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-[10px] font-medium uppercase tracking-[0.19em] text-white transition hover:border-white/35 hover:bg-white/15"
            >
              Request an invitation <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

        <p className="mt-6 text-center text-[10px] leading-5 text-white/35">
          Journal pieces are editorial perspectives. Market commentary is not financial advice; vehicle imagery is illustrative.
        </p>
      </div>
    </main>
  );
}
