import { collection, getDocs, query, orderBy, where, limit } from "firebase/firestore";
import { db } from "./client";
import { Project } from "@/types/project";

export async function getProjects(): Promise<Project[]> {
  try {
    const q = query(collection(db, "projects"), orderBy("createdAt", "desc"));
    const snapshot = await getDocs(q);
    
    return snapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
        teamAr: data.teamAr || data.team_ar || [],
        supervisorAr: data.supervisorAr || data.supervisor_ar || "",
      } as Project;
    });
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const q = query(collection(db, "projects"), where("slug", "==", slug), limit(1));
    const snapshot = await getDocs(q);
    
    if (snapshot.empty) return null;
    
    const doc = snapshot.docs[0];
    const data = doc.data();
    return {
      id: doc.id,
      ...data,
      teamAr: data.teamAr || data.team_ar || [],
      supervisorAr: data.supervisorAr || data.supervisor_ar || "",
    } as Project;
  } catch (error) {
    console.error("Error fetching project by slug:", error);
    return null;
  }
}
