import { createBrowserSupabaseClient } from "./client";
import { Project } from "@/types/project";

export async function getProjects(): Promise<Project[]> {
  const supabase = createBrowserSupabaseClient();

  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching projects:", error);
    return [];
  }

  return data ?? [];
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const supabase = createBrowserSupabaseClient();

  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) {
    console.error("Error fetching project by slug:", error);
    return null;
  }

  return data;
}