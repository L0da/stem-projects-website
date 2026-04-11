import { NextResponse } from "next/server";
import { adminAuth } from "@/lib/firebase/admin";

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

    const formData = await request.formData();
    const files = formData.getAll("file");
    const slug = formData.get("slug") as string | null;

    if (!files || files.length === 0) {
      return NextResponse.json({ error: "No files uploaded" }, { status: 400 });
    }

    const uploadedUrls: string[] = [];
    const owner = process.env.GITHUB_REPO_OWNER;
    const repo = process.env.GITHUB_REPO_NAME;
    const githubToken = process.env.GITHUB_TOKEN;

    if (!owner || !repo || !githubToken) {
      return NextResponse.json({ error: "GitHub config missing" }, { status: 500 });
    }

    for (const entry of files) {
      const file = entry as File;
      const buffer = Buffer.from(await file.arrayBuffer());
      const base64Content = buffer.toString("base64");

      const fileExt = file.name.split(".").pop();
      const safeSlug = (slug || "project").trim().toLowerCase().replace(/[^a-z0-9]+/g, "-");
      const randomStr = Math.random().toString(36).substring(2, 7);
      const fileName = `${safeSlug}-${Date.now()}-${randomStr}.${fileExt}`;
      const path = `public/uploads/${fileName}`;

      const githubApiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;

      const githubRes = await fetch(githubApiUrl, {
        method: "PUT",
        headers: {
          "Authorization": `Bearer ${githubToken}`,
          "Content-Type": "application/json",
          "Accept": "application/vnd.github.v3+json",
        },
        body: JSON.stringify({
          message: `Add project image ${fileName}`,
          content: base64Content,
          branch: "main",
        }),
      });

      if (!githubRes.ok) {
        const errorData = await githubRes.json();
        console.error("GitHub upload error:", errorData);
        throw new Error("Failed to upload to GitHub");
      }

      // Return the raw URL which uses unauthenticated CDN fetch
      const rawUrl = `https://raw.githubusercontent.com/${owner}/${repo}/main/${path}`;
      uploadedUrls.push(rawUrl);
    }

    return NextResponse.json({ success: true, urls: uploadedUrls });
  } catch (error) {
    console.error("Upload API error:", error);
    return NextResponse.json(
      { error: "Something went wrong during upload" },
      { status: 500 }
    );
  }
}
