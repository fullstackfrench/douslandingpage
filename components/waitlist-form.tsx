"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle2, Loader2 } from "lucide-react";

const PROFESSIONAL_ROLES = [
  "Hair Stylist",
  "Makeup Artist",
  "Nail Tech",
  "Esthetician",
  "Barber",
];

type UserType = "client" | "professional";

const inputClassName =
  "h-12 rounded-2xl border border-white/15 bg-white/[0.11] px-4 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_0_22px_rgba(176,124,158,0.05)] placeholder:text-white/45 outline-none backdrop-blur-xl transition-all focus-visible:border-[#B07C9E]/60 focus-visible:bg-white/[0.14] focus-visible:ring-1 focus-visible:ring-[#B07C9E]/25 focus-visible:ring-offset-0";

export function WaitlistForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userType, setUserType] = useState<UserType | null>(null);
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  const [website, setWebsite] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleRoleToggle = (role: string) => {
    setSelectedRoles((prev) =>
      prev.includes(role)
        ? prev.filter((currentRole) => currentRole !== role)
        : [...prev, role],
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const trimmedName = name.trim();
    const trimmedEmail = email.trim().toLowerCase();

    if (!trimmedName || !trimmedEmail || !userType) {
      setError("Please fill in all required fields");
      return;
    }

    if (userType === "professional" && selectedRoles.length === 0) {
      setError("Please select at least one role");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          userType,
          professionalRoles: userType === "professional" ? selectedRoles : [],
          website,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        return;
      }

      setIsSuccess(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="rounded-[2rem] border border-white/20 bg-[#020303]/55 p-8 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_24px_80px_rgba(0,0,0,0.38),0_0_48px_rgba(176,124,158,0.12)] backdrop-blur-[28px]">
        <div className="mb-4 flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#0F5257]/40 bg-[#0F5257]/20 shadow-[0_0_34px_rgba(15,82,87,0.26)] backdrop-blur-xl">
            <CheckCircle2 className="h-12 w-12 text-[#0F5257]" />
          </div>
        </div>

        <h3 className="mb-2 text-2xl font-bold text-white">
          {"You're"} on the list!
        </h3>

        <p className="text-sm leading-relaxed text-white/75">
          {"We'll"} notify you when DOUS launches. Get ready to transform your
          beauty experience.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-[2rem] border border-white/20 bg-[#020303]/55 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_24px_80px_rgba(0,0,0,0.38),0_0_48px_rgba(176,124,158,0.12)] backdrop-blur-[28px] md:p-8"
    >
      <input
        type="text"
        name="website"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="mb-6 text-center">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-[#B07C9E]/90">
          Beta access
        </p>

        <h2 className="mb-2 text-2xl font-black tracking-tight text-white md:text-3xl">
          Join the Waitlist
        </h2>

        <p className="text-sm leading-relaxed text-white/72 md:text-base">
          Be the first to experience the future of Black beauty discovery.
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-sm font-semibold text-white/90">
            Name
          </Label>

          <Input
            id="name"
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClassName}
            autoComplete="name"
            required
          />
        </div>

        <div className="space-y-2">
          <Label
            htmlFor="email"
            className="text-sm font-semibold text-white/90"
          >
            Email
          </Label>

          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClassName}
            autoComplete="email"
            required
          />
        </div>

        <div className="space-y-3">
          <Label className="text-sm font-semibold text-white/90">
            I am a...
          </Label>

          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => {
                setUserType("client");
                setSelectedRoles([]);
              }}
              className={`rounded-2xl border p-4 text-left backdrop-blur-xl transition-all duration-200 ${
                userType === "client"
                  ? "border-[#0F5257]/80 bg-[#0F5257]/35 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_0_26px_rgba(15,82,87,0.22)]"
                  : "border-white/12 bg-white/[0.08] text-white/75 shadow-[inset_0_1px_0_rgba(255,255,255,0.10)] hover:border-[#B07C9E]/45 hover:bg-white/[0.12] hover:text-white"
              }`}
            >
              <span className="block text-base font-bold">Client</span>
              <span className="mt-1 block text-xs leading-relaxed opacity-75">
                Looking for services
              </span>
            </button>

            <button
              type="button"
              onClick={() => setUserType("professional")}
              className={`rounded-2xl border p-4 text-left backdrop-blur-xl transition-all duration-200 ${
                userType === "professional"
                  ? "border-[#0F5257]/80 bg-[#0F5257]/35 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_0_26px_rgba(15,82,87,0.22)]"
                  : "border-white/12 bg-white/[0.08] text-white/75 shadow-[inset_0_1px_0_rgba(255,255,255,0.10)] hover:border-[#B07C9E]/45 hover:bg-white/[0.12] hover:text-white"
              }`}
            >
              <span className="block text-base font-bold">Professional</span>
              <span className="mt-1 block text-xs leading-relaxed opacity-75">
                Offering services
              </span>
            </button>
          </div>
        </div>

        {userType === "professional" && (
          <div className="animate-in fade-in slide-in-from-top-2 space-y-3 duration-300">
            <Label className="text-sm font-semibold text-white/90">
              Select your roles
            </Label>

            <div className="flex flex-wrap gap-2">
              {PROFESSIONAL_ROLES.map((role) => (
                <button
                  key={role}
                  type="button"
                  onClick={() => handleRoleToggle(role)}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold backdrop-blur-xl transition-all duration-200 ${
                    selectedRoles.includes(role)
                      ? "border-[#B07C9E]/85 bg-[#B07C9E]/55 text-white shadow-[0_0_20px_rgba(176,124,158,0.22)]"
                      : "border-white/12 bg-white/[0.08] text-white/75 hover:border-[#B07C9E]/45 hover:bg-white/[0.12] hover:text-white"
                  }`}
                >
                  {role}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {error && (
        <div className="rounded-2xl border border-red-300/25 bg-red-500/15 p-3 backdrop-blur-xl">
          <p className="text-center text-sm font-semibold text-red-100">
            {error}
          </p>
        </div>
      )}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="h-12 w-full rounded-full bg-[#0F5257] text-base font-bold text-white shadow-[0_0_24px_rgba(15,82,87,0.28)] transition-all duration-200 hover:bg-[#0b3f43] disabled:bg-white/10 disabled:text-white/35"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Joining...
          </>
        ) : (
          "Join Waitlist"
        )}
      </Button>
    </form>
  );
}
