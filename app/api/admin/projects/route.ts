import { NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export async function POST(request: Request) {
  try {
    const supabase = await createServerSupabaseClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();

    const cleanedImages = Array.isArray(body.images)
      ? body.images.filter((item: string) => item.trim() !== "")
      : [];

    const cleanedTeam = Array.isArray(body.team)
      ? body.team.filter((item: string) => item.trim() !== "")
      : [];

    const cleanedTeamAr = Array.isArray(body.teamAr)
      ? body.teamAr.filter((item: string) => item.trim() !== "")
      : [];

    const cleanedTagsEn = Array.isArray(body.en?.tags)
      ? body.en.tags.filter((item: string) => item.trim() !== "")
      : [];

    const cleanedTagsAr = Array.isArray(body.ar?.tags)
      ? body.ar.tags.filter((item: string) => item.trim() !== "")
      : [];

    const payload = {
      slug: body.slug,
      image: cleanedImages[0] || "",
      images: cleanedImages,
      team: cleanedTeam,
      team_ar: cleanedTeamAr,
      supervisor: body.supervisor || "",
      supervisor_ar: body.supervisorAr || "",
      featured: false,
      en: {
        title: body.en?.title || "",
        shortDescription: "",
        fullDescription: body.en?.fullDescription || "",
        category: body.en?.category || "",
        grade: body.en?.grade || "",
        tags: cleanedTagsEn,
      },
      ar: {
        title: body.ar?.title || "",
        shortDescription: "",
        fullDescription: body.ar?.fullDescription || "",
        category: body.ar?.category || "",
        grade: body.ar?.grade || "",
        tags: cleanedTagsAr,
      },
    };

    const { error } = await supabase.from("projects").insert([payload]);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}