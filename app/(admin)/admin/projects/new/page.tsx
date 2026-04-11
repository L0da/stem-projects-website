import ProjectForm from "@/components/admin/project-form";
import AdminPageHeader from "@/components/admin/admin-page-header";
import AuthGuard from "@/components/auth-guard";

export default function NewProjectPage() {
  return (
    <AuthGuard>
      <div className="container py-10">
        <AdminPageHeader />
        <ProjectForm />
      </div>
    </AuthGuard>
  );
}