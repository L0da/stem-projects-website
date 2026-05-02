import { NextResponse } from "next/server";
import { adminAuth, adminDb } from "@/lib/firebase/admin";

export async function POST(request: Request) {
  try {
    const authHeader = request.headers.get("Authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const token = authHeader.split("Bearer ")[1];
    let decodedToken;
    try {
      decodedToken = await adminAuth.verifyIdToken(token);
    } catch {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (!decodedToken) {
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
      teamAr: cleanedTeamAr,
      supervisor: body.supervisor || "",
      supervisorAr: body.supervisorAr || "",
      featured: body.featured === true,
      createdAt: Date.now(),
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

    await adminDb.collection("projects").add(payload);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: `Error: ${error instanceof Error ? error.message : String(error)}` },
      { status: 500 }
    );
  }
}