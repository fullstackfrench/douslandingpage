import Image from "next/image";
import { VideoBackground } from "@/components/video-background";
import { WaitlistForm } from "@/components/waitlist-form";
import { FeatureShowcase } from "@/components/feature-showcase";
import { SiteNav } from "@/components/site-nav";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#020303] text-white">
      {/* Hero Section */}
      <section className="relative min-h-[125vh] overflow-hidden">
        {/* Video layer */}
        <VideoBackground />

        {/* Soft readability overlays — darkened slightly for nav and hero text clarity */}
        <div className="pointer-events-none absolute inset-0 z-[1] bg-black/35" />
        <div className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(circle_at_28%_22%,rgba(176,124,158,0.16),transparent_34%),radial-gradient(circle_at_72%_44%,rgba(15,82,87,0.22),transparent_38%),linear-gradient(to_bottom,rgba(2,3,3,0.18),rgba(2,3,3,0.34)_58%,rgba(2,3,3,0.72)_88%,#020303_100%)]" />

        {/* Content layer */}
        <div className="relative z-10 mx-auto flex min-h-[125vh] w-full max-w-7xl flex-col px-4 py-8 md:px-8">
          <SiteNav />
          <div className="pt-[55vh] md:pt-[54vh] lg:pt-[52vh]">
            <div className="grid items-end gap-12 pb-28 lg:grid-cols-[1.08fr_0.92fr] lg:pb-32">
              {/* Left side - Branding */}
              <div className="max-w-4xl text-center lg:text-left">
                <h1 className="text-5xl font-black leading-[0.92] tracking-tight text-white md:text-7xl lg:text-8xl">
                  Beauty discovery,
                  <span className="block">
                    built for Black women and femmes.
                  </span>
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-8 text-white/72 md:text-lg lg:text-xl">
                  DOUS, pronounced 'doos', is a video-based beauty marketplace
                  connecting Black women and femmes to professionals skilled in
                  textured hair and deeper complexions.
                </p>
              </div>

              {/* Right side - Form */}
              <div
                id="waitlist"
                className="w-full max-w-md justify-self-center lg:justify-self-end"
              >
                <WaitlistForm />
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 animate-bounce flex-col items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-white/60">
              Explore Features
            </span>
            <svg
              className="h-6 w-6 text-[#B07C9E]/70"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.8}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Feature Showcase */}
      <section className="relative z-10 bg-[#020303]">
        <FeatureShowcase />
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-[#B07C9E]/10 bg-[#020303] px-4 py-12">
        <div className="mx-auto max-w-6xl text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-xl">
              <Image
                src="/images/dous-logo.png"
                alt="DOUS Logo"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-xl font-semibold text-white">DOUS</span>
          </div>

          <p className="text-white/50 text-sm leading-relaxed max-w-2xl mx-auto">
            Demo videos and usernames shown are sourced from incredibly talented
            Black beauty content creators. They are used here to demonstrate the
            kind of content that will be featured on DOUS when it launches.
            These creators are not users of the platform... yet.
          </p>

          <p className="mt-6 text-sm text-white/40">
            &copy; {new Date().getFullYear()} DOUS. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
