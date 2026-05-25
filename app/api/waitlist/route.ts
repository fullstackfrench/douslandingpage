import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  },
);

const ALLOWED_USER_TYPES = ["client", "professional"] as const;

const ALLOWED_PROFESSIONAL_ROLES = [
  "Hair Stylist",
  "Makeup Artist",
  "Nail Tech",
  "Esthetician",
  "Barber",
];

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function cleanString(value: unknown) {
  return String(value || "").trim();
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = cleanString(body.name);
    const email = cleanString(body.email).toLowerCase();
    const userType = cleanString(body.userType);
    const professionalRoles = Array.isArray(body.professionalRoles)
      ? body.professionalRoles.map(cleanString).filter(Boolean)
      : [];

    // Honeypot field. Real users will never fill this out.
    const website = cleanString(body.website);

    if (website) {
      return NextResponse.json(
        { message: "You’re on the DOUS waitlist!" },
        { status: 200 },
      );
    }

    if (!name || !email || !userType) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 },
      );
    }

    if (name.length > 120) {
      return NextResponse.json(
        { error: "Please enter a shorter name." },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    if (!ALLOWED_USER_TYPES.includes(userType as "client" | "professional")) {
      return NextResponse.json(
        { error: "Please choose client or professional." },
        { status: 400 },
      );
    }

    if (userType === "professional" && professionalRoles.length === 0) {
      return NextResponse.json(
        { error: "Please select at least one professional role." },
        { status: 400 },
      );
    }

    if (professionalRoles.length > 5) {
      return NextResponse.json(
        { error: "Please select fewer professional roles." },
        { status: 400 },
      );
    }

    const hasInvalidRole = professionalRoles.some(
      (role) => !ALLOWED_PROFESSIONAL_ROLES.includes(role),
    );

    if (hasInvalidRole) {
      return NextResponse.json(
        { error: "Please select a valid professional role." },
        { status: 400 },
      );
    }

    const { error } = await supabaseAdmin.from("waitlist").insert({
      name,
      email,
      user_type: userType,
      professional_roles: userType === "professional" ? professionalRoles : null,
    });

    if (error) {
      if (error.code === "23505") {
        return NextResponse.json(
          { error: "This email is already on the DOUS waitlist!" },
          { status: 409 },
        );
      }

      console.error("DOUS waitlist insert error:", error);

      return NextResponse.json(
        { error: "Something went wrong. Please try again." },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { message: "You’re on the DOUS waitlist!" },
      { status: 201 },
    );
  } catch (error) {
    console.error("DOUS waitlist route error:", error);

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}