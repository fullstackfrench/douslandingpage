"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function SiteNav() {
  const pathname = usePathname();

  const waitlistHref =
    pathname === "/professionals"
      ? "/professionals#pro-waitlist"
      : "/#waitlist";

  return (
    <header className="relative z-20 flex items-center justify-between">
      <Link href="/" className="flex items-center gap-3">
        <div className="relative h-10 w-10 overflow-hidden rounded-xl">
          <Image
            src="/images/dous-logo.png"
            alt="DOUS Logo"
            fill
            className="object-cover"
          />
        </div>

        <span className="text-xl font-semibold text-white">DOUS</span>
      </Link>

      <nav className="flex items-center gap-4">
        <Link
          href="/"
          className="hidden text-sm font-semibold text-white/60 transition hover:text-white sm:block"
        >
          Home
        </Link>

        <Link
          href="/professionals"
          className="hidden text-sm font-semibold text-white/60 transition hover:text-white sm:block"
        >
          For professionals
        </Link>

        <Link
          href={waitlistHref}
          className="rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-bold text-white shadow-lg shadow-black/20 backdrop-blur-md transition hover:bg-white/15"
        >
          Join waitlist
        </Link>
      </nav>
    </header>
  );
}
