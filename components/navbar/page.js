'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Inventory", href: "/inventory" },
  { label: "Process", href: "/process" },
  { label: "Journal", href: "/journal" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  function isActive(href) {
    return href === "/"
      ? pathname === href
      : pathname === href || pathname.startsWith(`${href}/`);
  }

  function navLinkClass(href) {
    return [
      "rounded-full px-3 py-2 text-[10px] font-medium uppercase tracking-[0.22em] transition-all duration-200",
      isActive(href)
        ? "border border-white/20 bg-white/12 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]"
        : "text-white/70 hover:bg-white/6 hover:text-white",
    ].join(" ");
  }

  return (
    <nav className="sticky top-0 z-20 w-full px-4 pt-4 md:px-6 md:pt-6" aria-label="Main navigation">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between gap-3 rounded-full border border-white/15 bg-white/8 px-4 py-3 shadow-[0_18px_50px_rgba(0,0,0,0.22)] backdrop-blur-md md:px-6">
          <Link href="/" className="flex shrink-0 items-center gap-3 text-white" aria-label="Apex home">
            <Image
              src="/apex-monogram.svg"
              alt=""
              aria-hidden="true"
              width={36}
              height={36}
              priority
              unoptimized
              className="h-9 w-9"
            />
            <span className="text-xs font-medium uppercase tracking-[0.28em] text-white/80">
              APEX
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={navLinkClass(item.href)}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
           
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/15 lg:hidden"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span aria-hidden="true" className="text-lg leading-none">
                {menuOpen ? "×" : "☰"}
              </span>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div
            id="mobile-navigation"
            className="mt-2 rounded-[24px] border border-white/15 bg-[#101214]/95 p-3 shadow-[0_18px_50px_rgba(0,0,0,0.35)] backdrop-blur-md lg:hidden"
          >
            <div className="grid gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={navLinkClass(item.href)}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
