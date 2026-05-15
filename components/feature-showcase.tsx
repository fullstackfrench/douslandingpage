"use client";

import Image from "next/image";
import {
  Calendar,
  MessageCircle,
  Search,
  ShoppingBag,
  Sparkles,
} from "lucide-react";

interface Feature {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  alt: string;
  imageLeft: boolean;
  glow: string;
}

const features: Feature[] = [
  {
    id: "discovery",
    eyebrow: "Discover",
    title: "Find beauty pros through video.",
    description:
      "Explore real work, real styles, and real professionals before you book. DOUS makes discovery visual, personal, and community-centered.",
    icon: <Search className="h-5 w-5" strokeWidth={1.6} />,
    image: "/images/landing/discover-final-iphone-mockup.png",
    alt: "DOUS video discovery feed inside an iPhone frame",
    imageLeft: true,
    glow: "from-[#B07C9E]/35 via-[#7C88D1]/20 to-[#0F5257]/35",
  },
  {
    id: "booking",
    eyebrow: "Book",
    title: "Choose a date and time with ease.",
    description:
      "Clients can move from inspiration to appointment without leaving the app. Booking feels simple, clear, and intentional.",
    icon: <Calendar className="h-5 w-5" strokeWidth={1.6} />,
    image: "/images/landing/booking-final-iphone-mockup.png",
    alt: "DOUS appointment booking calendar inside an iPhone frame",
    imageLeft: false,
    glow: "from-[#B07C9E]/30 via-[#F0A35E]/18 to-[#0F5257]/30",
  },
  {
    id: "messaging",
    eyebrow: "Message",
    title: "Keep the conversation and payments together.",
    description:
      "Talk through appointment details, send payment requests, and stay connected before and after the service.",
    icon: <MessageCircle className="h-5 w-5" strokeWidth={1.6} />,
    image: "/images/landing/messages-final-iphone-mockup.png",
    alt: "DOUS messaging and payment request screen inside an iPhone frame",
    imageLeft: true,
    glow: "from-[#0F5257]/35 via-[#B07C9E]/20 to-[#7184FF]/25",
  },
  {
    id: "shopping",
    eyebrow: "Shop",
    title: "Shop products trusted by the community.",
    description:
      "Discover products featured by beauty professionals and creators, then add them to your cart without leaving DOUS.",
    icon: <ShoppingBag className="h-5 w-5" strokeWidth={1.6} />,
    image: "/images/landing/shop-final-iphone-mockup.png",
    alt: "DOUS shopping and product discovery screen inside an iPhone frame",
    imageLeft: false,
    glow: "from-[#0F5257]/35 via-[#B07C9E]/18 to-[#F0A35E]/18",
  },
];

function FeatureRow({
  eyebrow,
  title,
  description,
  icon,
  image,
  alt,
  imageLeft,
  glow,
}: Feature) {
  return (
    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
      <div
        className={`flex justify-center ${
          imageLeft ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <div className="relative">
          <div
            className={`absolute inset-0 scale-110 rounded-full bg-gradient-to-br ${glow} blur-3xl`}
          />

          <div className="relative">
            <Image
              src={image}
              alt={alt}
              width={520}
              height={1040}
              className="h-auto w-[230px] drop-shadow-[0_30px_90px_rgba(0,0,0,0.65)] sm:w-[270px] md:w-[310px] lg:w-[350px]"
            />
          </div>
        </div>
      </div>

      <div className={imageLeft ? "lg:order-2" : "lg:order-1"}>
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-[#B07C9E] shadow-[inset_0_1px_0_rgba(255,255,255,0.10)] backdrop-blur-xl">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/[0.06] text-white">
            {icon}
          </span>
          {eyebrow}
        </div>

        <h3 className="mt-6 max-w-xl text-4xl font-black leading-[0.95] tracking-tight text-white md:text-5xl">
          {title}
        </h3>

        <p className="mt-5 max-w-xl text-base leading-8 text-white/68 md:text-lg">
          {description}
        </p>
      </div>
    </div>
  );
}

export function FeatureShowcase() {
  return (
    <section className="relative overflow-hidden bg-[#020303] px-4 py-24 text-white md:px-6 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[460px] w-[460px] -translate-x-1/2 rounded-full bg-[#B07C9E]/10 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-[20%] right-0 h-[360px] w-[360px] rounded-full bg-[#0F5257]/12 blur-[130px]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-[#B07C9E] shadow-[inset_0_1px_0_rgba(255,255,255,0.10)] backdrop-blur-xl">
            <Sparkles className="h-4 w-4" strokeWidth={1.6} />
            Product highlights
          </div>

          <h2 className="mt-6 text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
            A beauty marketplace built for us.
          </h2>

          <p className="text-white/70 max-w-2xl mx-auto">
            <br />
            DOUS comes from Haitian Kreyòl and means sweet, soft, gentle, and
            tender. That meaning shapes the marketplace we are building: a
            revolutionary way for Black women and femmes to discover beauty
            professionals, book services, shop trusted products, and feel cared
            for throughout the experience.
          </p>

          <p className="text-white/70 max-w-2xl mx-auto">
            <br />
            That commitment to care also extends beyond the platform to the most
            vulnerable among us. A portion of DOUS revenue will support shelters
            serving survivors of domestic violence around the country.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#discovery"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-semibold text-white/75 backdrop-blur-xl transition hover:border-[#B07C9E]/40 hover:bg-white/[0.08] hover:text-white"
            >
              <Search className="h-4 w-4 text-[#B07C9E]" />
              Discover
            </a>

            <a
              href="#booking"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-semibold text-white/75 backdrop-blur-xl transition hover:border-[#B07C9E]/40 hover:bg-white/[0.08] hover:text-white"
            >
              <Calendar className="h-4 w-4 text-[#0F5257]" />
              Book
            </a>

            <a
              href="#messaging"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-semibold text-white/75 backdrop-blur-xl transition hover:border-[#B07C9E]/40 hover:bg-white/[0.08] hover:text-white"
            >
              <MessageCircle className="h-4 w-4 text-[#B07C9E]" />
              Message
            </a>

            <a
              href="#shopping"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-semibold text-white/75 backdrop-blur-xl transition hover:border-[#B07C9E]/40 hover:bg-white/[0.08] hover:text-white"
            >
              <ShoppingBag className="h-4 w-4 text-[#0F5257]" />
              Shop
            </a>
          </div>
        </div>

        <div className="mt-24 space-y-28 md:space-y-36">
          {features.map((feature) => (
            <div key={feature.id} id={feature.id} className="scroll-mt-24">
              <FeatureRow {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
