import { WaitlistForm } from "@/components/waitlist-form";
import { SiteNav } from "@/components/site-nav";

const toolIcons = {
  dashboard: (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </svg>
  ),
  calendar: (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="3" y="4" width="18" height="18" rx="3" />
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <path d="M3 10h18" />
    </svg>
  ),
  bookings: (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M8 6h13" />
      <path d="M8 12h13" />
      <path d="M8 18h13" />
      <path d="M3 6l1 1 2-2" />
      <path d="M3 12l1 1 2-2" />
      <path d="M3 18l1 1 2-2" />
    </svg>
  ),
  payments: (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="2" y="5" width="20" height="14" rx="3" />
      <path d="M2 10h20" />
      <path d="M7 15h4" />
    </svg>
  ),

  shop: (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 10h16" />
      <path d="M5 10l1.2-5h11.6L19 10" />
      <path d="M6 10v9h12v-9" />
      <path d="M9 19v-5h6v5" />
      <path d="M4 10c0 1.1.9 2 2 2s2-.9 2-2" />
      <path d="M8 10c0 1.1.9 2 2 2s2-.9 2-2" />
      <path d="M12 10c0 1.1.9 2 2 2s2-.9 2-2" />
      <path d="M16 10c0 1.1.9 2 2 2s2-.9 2-2" />
    </svg>
  ),
};

const heroPills = [
  {
    label: "Dashboard",
    href: "#dashboard",
    icon: toolIcons.dashboard,
    color: "text-[#B07C9E]",
  },
  {
    label: "Calendar",
    href: "#calendar",
    icon: toolIcons.calendar,
    color: "text-[#0F8B8D]",
  },
  {
    label: "Bookings",
    href: "#bookings",
    icon: toolIcons.bookings,
    color: "text-[#B07C9E]",
  },
  {
    label: "Payments",
    href: "#payments",
    icon: toolIcons.payments,
    color: "text-[#0F8B8D]",
  },
  {
    label: "Shop",
    href: "#shop",
    icon: toolIcons.shop,
    color: "text-[#B07C9E]",
  },
];

const proFeatures = [
  {
    id: "dashboard",
    eyebrow: "Dashboard",
    icon: toolIcons.dashboard,
    iconColor: "text-[#B07C9E]",
    title: "Your business has a home base now.",
    description:
      "DOUS gives pros a home base for their profile, services, bookings, client activity, and business tools so everything is not scattered across five different apps.",
  },
  {
    id: "calendar",
    eyebrow: "Calendar",
    icon: toolIcons.calendar,
    iconColor: "text-[#0F8B8D]",
    title: "Availability your clients can actually see.",
    description:
      "Pros can manage their schedule and reduce the back-and-forth that comes from booking through DMs, texts, and screenshots.",
  },
  {
    id: "bookings",
    eyebrow: "Bookings",
    icon: toolIcons.bookings,
    iconColor: "text-[#B07C9E]",
    title: "Clearer appointments. Fewer no-call-no-shows.",
    description:
      "Clients can request services with clearer details, while pros can keep track of upcoming appointments, deposits, and what each client booked.",
  },
  {
    id: "payments",
    eyebrow: "Payments",
    icon: toolIcons.payments,
    iconColor: "text-[#0F8B8D]",
    title: "Deposits and payment requests without the DM chase.",
    description:
      "Payment requests help pros make deposits and appointment payments clearer, cleaner, and easier for clients to complete.",
  },
  {
    id: "shop",
    eyebrow: "Shop",
    icon: toolIcons.shop,
    iconColor: "text-[#B07C9E]",
    title: "Sell products without sending clients somewhere else.",
    description:
      "The DOUS shop gives pros a place to feature products, recommend essentials, and create a smoother path from content to purchase.",
  },
];

function IphonePlaceholder({ label }: { label: string }) {
  return (
    <div className="relative mx-auto w-full max-w-[280px]">
      <div className="absolute -inset-8 rounded-[3rem] bg-[radial-gradient(circle,rgba(176,124,158,0.22),transparent_60%)] blur-2xl" />

      <div className="relative rounded-[3rem] border border-white/25 bg-[#121212] p-2 shadow-2xl shadow-black/50">
        <div className="relative aspect-[9/19.5] overflow-hidden rounded-[2.55rem] border border-white/10 bg-[#050606]">
          <div className="absolute left-1/2 top-3 z-20 h-7 w-24 -translate-x-1/2 rounded-full bg-black" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(176,124,158,0.22),transparent_35%),radial-gradient(circle_at_50%_70%,rgba(15,82,87,0.3),transparent_38%),linear-gradient(to_bottom,#111,#020303)]" />

          <div className="relative z-10 flex h-full flex-col justify-between p-5 pt-14">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B07C9E]">
                iPhone Preview
              </p>
              <h3 className="mt-3 text-2xl font-black leading-tight text-white">
                {label}
              </h3>
            </div>

            <div className="space-y-3">
              <div className="h-24 rounded-3xl border border-white/10 bg-white/[0.07]" />
              <div className="h-16 rounded-3xl border border-white/10 bg-white/[0.05]" />
              <div className="h-16 rounded-3xl border border-white/10 bg-white/[0.05]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MacbookPlaceholder() {
  return (
    <div className="relative w-full">
      <div className="absolute -inset-8 rounded-[3rem] bg-[radial-gradient(circle_at_50%_30%,rgba(15,82,87,0.32),transparent_55%),radial-gradient(circle_at_30%_70%,rgba(176,124,158,0.18),transparent_50%)] blur-2xl" />

      <div className="relative mx-auto max-w-3xl">
        <div className="rounded-t-[1.75rem] border border-white/15 bg-[#151515] p-3 shadow-2xl shadow-black/50">
          <div className="aspect-video overflow-hidden rounded-t-[1.25rem] border border-white/10 bg-[#020303]">
            <div className="flex h-full items-center justify-center bg-[radial-gradient(circle_at_50%_30%,rgba(176,124,158,0.18),transparent_38%),radial-gradient(circle_at_70%_70%,rgba(15,82,87,0.26),transparent_40%),linear-gradient(to_bottom,#071010,#020303)] px-8 text-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#B07C9E]">
                  Demo Video Placeholder
                </p>
                <h3 className="mt-4 text-3xl font-black leading-tight text-white md:text-5xl">
                  MacBook Pro Frame
                </h3>
                <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-white/55">
                  Add the pro dashboard demo video here when it is ready.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto h-4 w-[92%] rounded-b-[2rem] border border-white/10 bg-[#2a2a2a]" />
        <div className="mx-auto h-2 w-[28%] rounded-b-full bg-white/20" />
      </div>
    </div>
  );
}

export default function ProfessionalsPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#020303] text-white">
      <section className="relative overflow-hidden px-4 py-8 md:px-8">
        <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_18%_10%,rgba(176,124,158,0.2),transparent_34%),radial-gradient(circle_at_82%_18%,rgba(15,82,87,0.3),transparent_36%),linear-gradient(to_bottom,#020303_0%,#020303_76%,rgba(15,82,87,0.14)_100%)]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <SiteNav />

          <div className="grid items-center gap-10 pb-14 pt-20 md:pt-28 lg:grid-cols-[0.72fr_1.28fr]">
            <div className="order-2 lg:order-1">
              <IphonePlaceholder label="Pro mobile tools" />
            </div>

            <div className="order-1 lg:order-2">
              <MacbookPlaceholder />
            </div>
          </div>

          <div className="mx-auto max-w-5xl pb-24 text-center">
            <h1 className="text-5xl font-black leading-[0.92] tracking-tight text-white md:text-7xl lg:text-8xl">
              Everything pros need to manage and grow in one place.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/72 md:text-lg lg:text-xl">
              DOUS helps beauty professionals manage discovery, bookings,
              calendars, client details, and payment requests in one place, so
              running the business feels less scattered.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {heroPills.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.08] px-6 py-3 text-sm font-bold text-white/75 shadow-lg shadow-black/20 backdrop-blur-md transition hover:border-[#B07C9E]/35 hover:bg-white/[0.12] hover:text-white"
                >
                  <span className={item.color}>{item.icon}</span>
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 border-t border-white/10 bg-[#020303] px-4 py-24 md:px-8">
        <div className="mx-auto max-w-7xl space-y-28">
          {proFeatures.map((feature, index) => (
            <div
              id={feature.id}
              key={feature.title}
              className="scroll-mt-24 grid items-center gap-14 lg:grid-cols-2"
            >
              <div
                className={
                  index % 2 === 1
                    ? "text-center lg:order-2 lg:text-left"
                    : "text-center lg:text-left"
                }
              >
                <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.08] px-4 py-2 text-sm font-bold uppercase tracking-[0.22em] text-[#0F5257] backdrop-blur-md">
                  <span className="text-white">{feature.icon}</span>
                  {feature.eyebrow}
                </p>

                <h2 className="text-4xl font-black leading-[0.98] tracking-tight text-white md:text-6xl">
                  {feature.title}
                </h2>

                <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-white/62 md:text-lg lg:mx-0">
                  {feature.description}
                </p>
              </div>

              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <IphonePlaceholder label={`${feature.eyebrow} screen`} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="pro-waitlist"
        className="relative z-10 overflow-hidden bg-[#020303] px-4 py-24 md:px-8"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(176,124,158,0.16),transparent_34%),radial-gradient(circle_at_78%_42%,rgba(15,82,87,0.24),transparent_38%),linear-gradient(to_bottom,#020303_0%,rgba(2,3,3,0.92)_55%,#020303_100%)]" />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="max-w-4xl text-center lg:text-left">
            <h2 className="text-5xl font-black leading-[0.92] tracking-tight text-white md:text-6xl lg:text-7xl">
              Beauty business tools, built for the way pros work.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/72 md:text-lg lg:mx-0 lg:text-xl">
              Join the DOUS waitlist to get early access to tools for discovery,
              bookings, calendars, client details, and payment requests.
            </p>
          </div>

          <div className="w-full max-w-md justify-self-center lg:justify-self-end">
            <WaitlistForm />
          </div>
        </div>
      </section>
    </main>
  );
}
