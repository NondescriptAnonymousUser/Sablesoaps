"use client";

import Link from "next/link";
import type { Route } from "next";   // 👈 bring in Route type
import Logo from "./Logo";
import { usePathname } from "next/navigation";

const links: { href: Route; label: string }[] = [
  { href: "/", label: "Home" },
  { href: "/evidence", label: "Evidence" },
  { href: "/for-manufacturers", label: "Manufacturers" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 border-b border-fg/10 bg-bg/70 backdrop-blur">
      <div className="container-narrow flex h-16 items-center justify-between">
        <Link href="/" className="hover:opacity-80" aria-label="Home">
          <Logo />
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`hover:opacity-80 ${pathname === l.href ? "text-fg" : "text-sub"}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}