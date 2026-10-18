import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Inventory", href: "/inventory" },
  { label: "Our process", href: "/process" },
  { label: "Journal", href: "/journal" },
  { label: "About Apex", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative mt-20 overflow-hidden border-t border-white/10 bg-[#0c0f12] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full bg-white/[0.035] blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 pb-6 pt-12 sm:px-6 sm:pt-16 lg:px-8">
        <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-[1.3fr_0.7fr_1fr] md:gap-8">
          <div className="max-w-sm">
            <Link
              href="/"
              aria-label="Apex GT Motors home"
              className="inline-flex items-center gap-3"
            >
              <Image
                src="/apex-monogram.svg"
                alt=""
                aria-hidden="true"
                width={40}
                height={40}
                unoptimized
                className="h-10 w-10"
              />
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-white/85">
                Apex GT Motors
              </span>
            </Link>
            <p className="mt-5 text-sm leading-6 text-white/55">
              A considered point of view on the machines, moments, and design
              that move us.
            </p>
            <p className="mt-4 text-[10px] uppercase tracking-[0.2em] text-white/40">
              Abuja, Nigeria
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="text-[10px] font-medium uppercase tracking-[0.24em] text-white/45">
              Explore
            </h2>
            <ul className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-1 lg:grid-cols-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/65 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="rounded-[24px] border border-white/10 bg-white/[0.035] p-5 sm:p-6">
            <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-white/45">
              Begin a conversation
            </p>
            <h2 className="mt-3 text-xl font-medium tracking-[-0.04em] text-white">
              What are you looking for?
            </h2>
            <p className="mt-2 text-sm leading-6 text-white/55">
              Share your interest with the Apex team and start with a
              considered brief.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-[9px] font-medium uppercase tracking-[0.18em] text-[#101214] transition hover:bg-white/90"
              >
                Contact us <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/contact?type=Private%20Viewing%20%2F%20Test%20Drive"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-[9px] font-medium uppercase tracking-[0.18em] text-white/75 transition hover:border-white/35 hover:text-white"
              >
                Book a drive
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-5 text-[10px] leading-5 text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Apex GT Motors. All rights reserved.</p>
          <p>Vehicle imagery and model concepts are illustrative.</p>
        </div>
      </div>
    </footer>
  );
}