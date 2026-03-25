import { redirect } from "next/navigation";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import ProjectForm from "@/components/admin/project-form";
import AdminPageHeader from "@/components/admin/admin-page-header";

export default async function NewProjectPage() {
  const supabase = await createServerSupabaseClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  return (
    <div className="container py-10">
      <AdminPageHeader />
      <ProjectForm />
    </div>
  );
}