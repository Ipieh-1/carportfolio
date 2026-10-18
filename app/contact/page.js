'use client';

import { useEffect, useRef, useState } from "react";
import { vehicles } from "../inventory/vehicles";

const formspreeEndpoint = "https://formspree.io/f/mzedowvr";

const inquiryTypes = [
  "Acquisition Brief",
  "Private Sale / Consignment",
  "Collection Management",
  "General Advisory",
  "Private Viewing / Test Drive",
];

const preferredContactMethods = ["Email", "Phone", "WhatsApp"];
const preferredTitles = [
  "Mr.",
  "Mrs.",
  "Ms.",
  "Mx.",
  "Dr.",
  "Prof.",
  "Prefer not to say",
];

const contactMethods = [
  { label: "Direct email", value: "ashinjefferywebdev@gmail.com", href: "mailto:ashinjefferywebdev@gmail.com" },
  { label: "Telephone", value: "+234 916 424 8754", href: "tel:+2349164248754" },
  { label: "Location", value: "Abuja, Nigeria" },
];

const inputClassName =
  "w-full rounded-full border border-white/15 bg-white/[0.04] px-4 py-3 text-white placeholder:text-white/40 transition focus:border-white/40 focus:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-white/10";

export default function ContactPage() {
  const [vehicle, setVehicle] = useState("");
  const [inquiryType, setInquiryType] = useState("");
  const [preferredContact, setPreferredContact] = useState("");
  const [preferredTitle, setPreferredTitle] = useState("");
  const [titleMenuOpen, setTitleMenuOpen] = useState(false);
  const [activeTitleIndex, setActiveTitleIndex] = useState(0);
  const [assistanceError, setAssistanceError] = useState(false);
  const [submissionState, setSubmissionState] = useState("idle");
  const [submissionMessage, setSubmissionMessage] = useState("");
  const [formKey, setFormKey] = useState(0);
  const titlePickerRef = useRef(null);
  const titleTriggerRef = useRef(null);
  const titleOptionRefs = useRef([]);
  const initialValues = useRef({
    vehicle: "",
    inquiryType: "",
  });

  useEffect(() => {
    if (!titleMenuOpen) {
      return;
    }

    function closeOnOutsideClick(event) {
      if (!titlePickerRef.current?.contains(event.target)) {
        setTitleMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", closeOnOutsideClick);
    return () => document.removeEventListener("mousedown", closeOnOutsideClick);
  }, [titleMenuOpen]);

  useEffect(() => {
    if (titleMenuOpen) {
      titleOptionRefs.current[activeTitleIndex]?.focus();
    }
  }, [activeTitleIndex, titleMenuOpen]);

  function openTitleMenu(index = preferredTitles.indexOf(preferredTitle)) {
    setActiveTitleIndex(index >= 0 ? index : 0);
    setTitleMenuOpen(true);
  }

  function chooseTitle(title) {
    setPreferredTitle(title);
    setTitleMenuOpen(false);
    titleTriggerRef.current?.focus();
  }

  function handleTitleMenuKeyDown(event) {
    if (event.key === "Escape") {
      event.preventDefault();
      setTitleMenuOpen(false);
      titleTriggerRef.current?.focus();
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveTitleIndex((index) => (index + 1) % preferredTitles.length);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveTitleIndex(
        (index) => (index - 1 + preferredTitles.length) % preferredTitles.length,
      );
    } else if (event.key === "Home") {
      event.preventDefault();
      setActiveTitleIndex(0);
    } else if (event.key === "End") {
      event.preventDefault();
      setActiveTitleIndex(preferredTitles.length - 1);
    } else if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      chooseTitle(preferredTitles[activeTitleIndex]);
    }
  }

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const requestedVehicle =
      searchParams.get("vehicle") || searchParams.get("interest") || "";
    const requestedType = searchParams.get("type");

    const requestedInquiryType = inquiryTypes.includes(requestedType)
      ? requestedType
      : "";

    initialValues.current = {
      vehicle: requestedVehicle,
      inquiryType: requestedInquiryType,
    };
    setVehicle(requestedVehicle);
    setInquiryType(requestedInquiryType);
  }, []);

  function handleReset(event) {
    event.preventDefault();
    if (submissionState === "sending") {
      return;
    }

    setFormKey((currentKey) => currentKey + 1);
    setVehicle(initialValues.current.vehicle);
    setInquiryType(initialValues.current.inquiryType);
    setPreferredContact("");
    setPreferredTitle("");
    setTitleMenuOpen(false);
    setAssistanceError(false);
    setSubmissionState("idle");
    setSubmissionMessage("");
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (!inquiryType) {
      setAssistanceError(true);
      setSubmissionState("idle");
      setSubmissionMessage("");
      return;
    }

    setAssistanceError(false);
    const formData = new FormData(event.currentTarget);
    const interest = formData.get("interest");
    const selectedInquiryType = formData.get("inquiry_type");
    formData.set(
      "_subject",
      `${selectedInquiryType || "Apex inquiry"}${interest ? ` - ${interest}` : ""}`,
    );
    setSubmissionState("sending");
    setSubmissionMessage("");

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (!response.ok) {
        setSubmissionState("error");
        setSubmissionMessage(
          `We couldn't send your inquiry (error ${response.status}). Please try again or email us directly.`,
        );
        return;
      }

      setSubmissionState("success");
      setSubmissionMessage("Thank you. Your private inquiry has been sent.");
    } catch {
      setSubmissionState("error");
      setSubmissionMessage(
        "We couldn't connect to the inquiry service. Please check your connection and try again, or email us directly.",
      );
    }
  }

  return (
    <main className="min-h-screen bg-[#101214] text-white">
      <div className="mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pt-20">
        <header>
          <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/70">
            Private Advisory
          </p>
          <h1 className="mt-4 text-4xl font-medium tracking-[-0.06em] text-white sm:text-5xl lg:text-6xl">
            A considered conversation.
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/70 sm:text-base">
            Share what brings you to Apex. Select the kind of assistance you have in mind, and we’ll take it from there.
          </p>
        </header>

        <div className="mt-10 grid items-start gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <form
            key={formKey}
            action={formspreeEndpoint}
            method="POST"
            onSubmit={handleSubmit}
            onReset={handleReset}
            className="rounded-[30px] border border-white/10 bg-[#0d1115] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.22)] sm:p-8"
          >
            <p className="mb-6 text-sm leading-6 text-white/65">
              Your details help us direct your inquiry appropriately.
            </p>

            <fieldset
              aria-required="true"
              aria-invalid={assistanceError}
              aria-describedby={assistanceError ? "assistance-error" : undefined}
            >
              <legend className="mb-3 text-[10px] font-medium uppercase tracking-[0.22em] text-white/60">
                How may we assist?
              </legend>
              <div className="grid gap-2 sm:grid-cols-2">
                {inquiryTypes.map((type) => (
                  <label
                    key={type}
                    className={`flex min-h-12 cursor-pointer items-center gap-3 rounded-2xl border px-3 py-3 text-xs transition ${
                      inquiryType === type
                        ? "border-white/35 bg-white/10 text-white"
                        : "border-white/10 bg-white/[0.025] text-white/65 hover:border-white/25 hover:text-white"
                    }`}
                  >
                    <input
                      type="radio"
                      name="inquiry_type"
                      value={type}
                      checked={inquiryType === type}
                      onClick={() => {
                        if (inquiryType === type) {
                          setInquiryType("");
                        }
                        setAssistanceError(false);
                      }}
                      onChange={() => {
                        setInquiryType(type);
                        setAssistanceError(false);
                      }}
                      className="accent-white"
                    />
                    <span>{type}</span>
                  </label>
                ))}
              </div>
              {assistanceError && (
                <p
                  id="assistance-error"
                  role="alert"
                  className="mt-3 text-sm leading-5 text-red-300"
                >
                  Select at least one assistance type before submitting.
                </p>
              )}
            </fieldset>

            <div className="mt-6 grid gap-5 sm:grid-cols-[0.72fr_1.28fr]">
              <div className="block text-sm text-white/75">
                <span className="mb-2 block text-[10px] uppercase tracking-[0.22em] text-white/60">
                  Preferred title <span className="text-white/35">(optional)</span>
                </span>
                <div ref={titlePickerRef} className="relative">
                  <input
                    type="hidden"
                    name="preferred_title"
                    value={preferredTitle}
                  />
                  <button
                    ref={titleTriggerRef}
                    type="button"
                    aria-label={`Preferred title, ${preferredTitle || "Select"}`}
                    aria-haspopup="listbox"
                    aria-expanded={titleMenuOpen}
                    aria-controls="preferred-title-options"
                    onClick={() => {
                      if (titleMenuOpen) {
                        setTitleMenuOpen(false);
                      } else {
                        openTitleMenu();
                      }
                    }}
                    onKeyDown={(event) => {
                      if (event.key === "ArrowDown" || event.key === "ArrowUp") {
                        event.preventDefault();
                        const currentIndex = preferredTitles.indexOf(preferredTitle);
                        openTitleMenu(
                          currentIndex >= 0
                            ? currentIndex
                            : event.key === "ArrowUp"
                              ? preferredTitles.length - 1
                              : 0,
                        );
                      }
                    }}
                    className="flex w-full items-center justify-between rounded-full border border-white/10 bg-white/4 px-4 py-3 text-left text-sm text-white/90 backdrop-blur-md transition hover:border-white/20 focus:border-white/35 focus:outline-none focus:ring-2 focus:ring-white/10"
                  >
                    <span className={preferredTitle ? "text-white/90" : "text-white/45"}>
                      {preferredTitle || "Select"}
                    </span>
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 20 20"
                      fill="none"
                      className={`h-4 w-4 text-white/55 transition-transform ${
                        titleMenuOpen ? "rotate-180" : ""
                      }`}
                    >
                      <path
                        d="m5.5 7.5 4.5 4.5 4.5-4.5"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </button>
                  {titleMenuOpen && (
                    <div
                      id="preferred-title-options"
                      role="listbox"
                      aria-label="Preferred title"
                      onKeyDown={handleTitleMenuKeyDown}
                      className="absolute left-0 top-full z-50 mt-2 w-full overflow-hidden rounded-xl border border-white/15 bg-[#121418]/90 p-1.5 shadow-2xl backdrop-blur-xl"
                    >
                      {preferredTitles.map((title, index) => (
                        <div
                          key={title}
                          ref={(element) => {
                            titleOptionRefs.current[index] = element;
                          }}
                          role="option"
                          aria-selected={preferredTitle === title}
                          tabIndex={-1}
                          onClick={() => chooseTitle(title)}
                          onMouseEnter={() => setActiveTitleIndex(index)}
                          className={`cursor-pointer rounded-lg px-3 py-2.5 text-sm transition-colors ${
                            preferredTitle === title || activeTitleIndex === index
                              ? "bg-white/10 text-white"
                              : "text-white/75 hover:bg-white/10 hover:text-white"
                          }`}
                        >
                          {title}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <label className="block text-sm text-white/75">
                <span className="mb-2 block text-[10px] uppercase tracking-[0.22em] text-white/60">
                  Full name
                </span>
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  required
                  placeholder="Your full name"
                  className={inputClassName}
                />
              </label>
            </div>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <label className="block text-sm text-white/75">
                <span className="mb-2 block text-[10px] uppercase tracking-[0.22em] text-white/60">
                  Email address
                </span>
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  placeholder="you@example.com"
                  className={inputClassName}
                />
              </label>
              <label className="block text-sm text-white/75">
                <span className="mb-2 block text-[10px] uppercase tracking-[0.22em] text-white/60">
                  Phone / WhatsApp <span className="text-white/35">(optional)</span>
                </span>
                <input
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  placeholder="+1 (555) 000-0000"
                  className={inputClassName}
                />
              </label>
            </div>

            <label className="mt-5 block text-sm text-white/75">
              <span className="mb-2 block text-[10px] uppercase tracking-[0.22em] text-white/60">
                Vehicle of interest <span className="text-white/35">(optional)</span>
              </span>
              <input
                type="text"
                name="interest"
                list="apex-vehicle-options"
                value={vehicle}
                onChange={(event) => setVehicle(event.target.value)}
                placeholder="Choose a model or enter your own"
                className={inputClassName}
              />
              <datalist id="apex-vehicle-options">
                {vehicles.map((item) => (
                  <option key={item.slug} value={item.name} />
                ))}
              </datalist>
            </label>

            <fieldset className="mt-6">
              <legend className="mb-3 text-[10px] font-medium uppercase tracking-[0.22em] text-white/60">
                Preferred method of contact
              </legend>
              <div className="flex flex-wrap gap-2">
                {preferredContactMethods.map((method) => (
                  <label
                    key={method}
                    className={`inline-flex cursor-pointer items-center gap-2 rounded-full border px-4 py-2.5 text-[10px] font-medium uppercase tracking-[0.17em] transition ${
                      preferredContact === method
                        ? "border-white/35 bg-white/10 text-white"
                        : "border-white/10 bg-white/[0.025] text-white/60 hover:border-white/25 hover:text-white"
                    }`}
                  >
                    <input
                      type="radio"
                      name="preferred_contact_method"
                      value={method}
                      checked={preferredContact === method}
                      onClick={() => {
                        if (preferredContact === method) {
                          setPreferredContact("");
                        }
                      }}
                      onChange={() => setPreferredContact(method)}
                      className="accent-white"
                    />
                    {method}
                  </label>
                ))}
              </div>
            </fieldset>

            <label className="mt-5 block text-sm text-white/75">
              <span className="mb-2 block text-[10px] uppercase tracking-[0.22em] text-white/60">
                Message / specific brief
              </span>
              <textarea
                rows="5"
                name="message"
                required
                placeholder="Tell us what you’re looking for..."
                className="w-full rounded-[24px] border border-white/15 bg-white/[0.04] px-4 py-3 text-white placeholder:text-white/40 transition focus:border-white/40 focus:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-white/10"
              />
            </label>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                type="submit"
                disabled={submissionState === "sending"}
                className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-5 py-3.5 text-[10px] font-medium uppercase tracking-[0.2em] text-[#101214] transition hover:bg-white/90 disabled:cursor-wait disabled:opacity-60"
              >
                {submissionState === "sending" ? "Sending..." : "Send private inquiry"}
                {submissionState !== "sending" && <span aria-hidden="true">→</span>}
              </button>
              <button
                type="reset"
                disabled={submissionState === "sending"}
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.025] px-5 py-3.5 text-[10px] font-medium uppercase tracking-[0.2em] text-white/70 transition hover:border-white/30 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
              >
                Reset form
              </button>
            </div>
            {submissionMessage && (
              <p
                role={submissionState === "error" ? "alert" : "status"}
                aria-live="polite"
                className={`mt-5 text-sm leading-6 ${
                  submissionState === "error" ? "text-red-300" : "text-emerald-300"
                }`}
              >
                {submissionMessage}
              </p>
            )}
          </form>

          <aside className="space-y-5 lg:sticky lg:top-28">
            <section className="rounded-[30px] border border-white/10 bg-white/[0.035] p-6 sm:p-7">
              <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-white/55">
                Private Advisory Hub
              </p>
              <h2 className="mt-3 text-2xl font-medium tracking-[-0.05em]">
                A direct line to Apex.
              </h2>
              <div className="mt-6 space-y-3">
                {contactMethods.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.025] p-4">
                    <p className="text-[9px] uppercase tracking-[0.22em] text-white/50">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="mt-2 inline-block text-base font-medium tracking-[-0.03em] text-white transition hover:text-white/70"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-2 text-base font-medium tracking-[-0.03em] text-white">
                        {item.value}
                      </p>
                    )}
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs leading-5 text-white/50">
                Meetings and viewing arrangements can be discussed individually. Availability and location are confirmed when arrangements are made.
              </p>
            </section>

            <section className="rounded-[30px] border border-white/10 bg-[#0e1217] p-6 sm:p-7">
              <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-white/55">
                Discretion & privacy
              </p>
              <h2 className="mt-3 text-xl font-medium tracking-[-0.04em]">
                Your inquiry, handled with care.
              </h2>
              <p className="mt-3 text-sm leading-6 text-white/65">
                Please share only the information needed for an initial conversation. Avoid sending sensitive financial, identity, or ownership documents through this form.
              </p>
              <p className="mt-3 text-xs leading-5 text-white/45">
                Any formal confidentiality arrangements or NDA terms must be discussed and agreed separately before sensitive information is shared.
              </p>
            </section>

            <section className="rounded-[26px] border border-white/10 bg-white/[0.025] p-5">
              <p className="text-[9px] font-medium uppercase tracking-[0.22em] text-white/45">
                A note on response times
              </p>
              <p className="mt-2 text-sm leading-6 text-white/60">
                We aim to respond as promptly as possible. Response timing may vary.
              </p>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
}
