'use client';

import { useEffect, useState } from "react";

export default function ProcessTimeline({ steps }) {
  const [activeStep, setActiveStep] = useState(steps[0]?.id);

  useEffect(() => {
    const sections = steps
      .map((step) => document.getElementById(step.id))
      .filter(Boolean);

    if (!sections.length) {
      return undefined;
    }

    function updateActiveStep() {
      const marker = window.innerHeight * 0.45;
      let closestSection = sections[0];
      let closestDistance = Number.POSITIVE_INFINITY;

      for (const section of sections) {
        const bounds = section.getBoundingClientRect();
        const distance =
          bounds.top <= marker && bounds.bottom >= marker
            ? 0
            : Math.min(Math.abs(bounds.top - marker), Math.abs(bounds.bottom - marker));

        if (distance < closestDistance) {
          closestDistance = distance;
          closestSection = section;
        }
      }

      setActiveStep((currentStep) =>
        currentStep === closestSection.id ? currentStep : closestSection.id,
      );
    }

    updateActiveStep();
    window.addEventListener("scroll", updateActiveStep, { passive: true });
    window.addEventListener("resize", updateActiveStep);

    return () => {
      window.removeEventListener("scroll", updateActiveStep);
      window.removeEventListener("resize", updateActiveStep);
    };
  }, [steps]);

  return (
    <section className="mt-12" aria-label="Six stages of the Apex process">
      <div className="grid gap-8 lg:grid-cols-[250px_1fr] lg:gap-12">
        <nav
          aria-label="Process timeline"
          className="h-fit rounded-[26px] border border-white/10 bg-white/[0.025] p-4 lg:sticky lg:top-28"
        >
          <p className="px-3 pb-3 text-[9px] font-medium uppercase tracking-[0.24em] text-white/45">
            Your journey
          </p>
          <ol className="relative space-y-1 before:absolute before:bottom-5 before:left-[1.35rem] before:top-5 before:w-px before:bg-white/10">
            {steps.map((step) => {
              const isActive = activeStep === step.id;

              return (
                <li key={step.id} className="relative">
                  <a
                    href={`#${step.id}`}
                    aria-current={isActive ? "step" : undefined}
                    onClick={() => setActiveStep(step.id)}
                    className={`flex items-center gap-3 rounded-full px-3 py-2.5 text-xs transition ${
                      isActive
                        ? "bg-white/10 text-white"
                        : "text-white/55 hover:bg-white/5 hover:text-white/85"
                    }`}
                  >
                    <span
                      className={`relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-[9px] font-medium transition ${
                        isActive
                          ? "border-white bg-white text-[#101214]"
                          : "border-white/20 bg-[#101214] text-white/65"
                      }`}
                    >
                      {step.number}
                    </span>
                    <span>{step.title}</span>
                  </a>
                </li>
              );
            })}
          </ol>
        </nav>

        <div className="space-y-4">
          {steps.map((step) => (
            <article
              key={step.id}
              id={step.id}
              className={`scroll-mt-28 rounded-[28px] border p-5 transition-colors duration-300 sm:p-7 ${
                activeStep === step.id
                  ? "border-white/20 bg-white/[0.06]"
                  : "border-white/10 bg-white/[0.025]"
              }`}
            >
              <div className="flex items-start gap-4 sm:gap-5">
                <span
                  aria-hidden="true"
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border text-xs font-medium transition-colors ${
                    activeStep === step.id
                      ? "border-white/40 bg-white/10 text-white"
                      : "border-white/15 bg-white/[0.04] text-white/55"
                  }`}
                >
                  {step.number}
                </span>
                <div className="min-w-0 flex-1">
                  <h2 className="text-xl font-medium tracking-[-0.04em] text-white sm:text-2xl">
                    {step.title}
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-white/65 sm:text-base">
                    {step.summary}
                  </p>

                  <details className="group mt-5 border-t border-white/10 pt-4">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[10px] font-medium uppercase tracking-[0.2em] text-white/75 [&::-webkit-details-marker]:hidden">
                      <span>What to expect</span>
                      <span
                        aria-hidden="true"
                        className="text-base transition-transform group-open:rotate-45"
                      >
                        +
                      </span>
                    </summary>
                    <ul className="mt-4 space-y-3">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex gap-3 text-sm leading-6 text-white/60">
                          <span aria-hidden="true" className="text-white/35">—</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </details>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
