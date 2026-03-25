"use client";

import { useState } from "react";
import { useLanguage } from "@/components/providers/language-provider";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";

type FormData = {
  slug: string;
  images: string[];
  team: string[];
  teamAr: string[];
  supervisor: string;
  supervisorAr: string;
  en: {
    title: string;
    fullDescription: string;
    category: string;
    grade: string;
    tags: string[];
  };
  ar: {
    title: string;
    fullDescription: string;
    category: string;
    grade: string;
    tags: string[];
  };
};

const initialFormData: FormData = {
  slug: "",
  images: [],
  team: [""],
  teamAr: [""],
  supervisor: "",
  supervisorAr: "",
  en: {
    title: "",
    fullDescription: "",
    category: "",
    grade: "",
    tags: [""],
  },
  ar: {
    title: "",
    fullDescription: "",
    category: "",
    grade: "",
    tags: [""],
  },
};

const formText = {
  en: {
    basicInfo: "Basic Info",
    englishContent: "English Content",
    arabicContent: "Arabic Content",
    images: "Images",
    teamEn: "Team (EN)",
    teamAr: "Team (AR)",
    slug: "Slug",
    supervisorEn: "Supervisor (EN)",
    supervisorAr: "Supervisor (AR)",
    titleEn: "Title (EN)",
    titleAr: "Title (AR)",
    fullDescriptionEn: "Full Description (EN)",
    fullDescriptionAr: "Full Description (AR)",
    categoryEn: "Category (EN)",
    categoryAr: "Category (AR)",
    gradeEn: "Grade (EN)",
    gradeAr: "Grade (AR)",
    tagsEn: "Tags (EN)",
    tagsAr: "Tags (AR)",
    addTag: "+ Add Tag",
    addTeamMember: "+ Add Team Member",
    chooseImages: "Choose images",
    uploadingImages: "Uploading images...",
    uploadedImages: "Uploaded images",
    teamMember: "Team member",
    teamMemberAr: "Team member AR",
    save: "Save Project",
    saving: "Saving...",
    success: "Project saved successfully",
    failed: "Failed to save project",
    error: "Something went wrong while saving the project",
    imageUploadError: "Failed to upload one or more images",
    noImages: "No images uploaded yet",
  },
  ar: {
    basicInfo: "البيانات الأساسية",
    englishContent: "المحتوى الإنجليزي",
    arabicContent: "المحتوى العربي",
    images: "الصور",
    teamEn: "الفريق (إنجليزي)",
    teamAr: "الفريق (عربي)",
    slug: "الرابط المختصر",
    supervisorEn: "المشرف (إنجليزي)",
    supervisorAr: "المشرف (عربي)",
    titleEn: "العنوان (إنجليزي)",
    titleAr: "العنوان (عربي)",
    fullDescriptionEn: "الوصف الكامل (إنجليزي)",
    fullDescriptionAr: "الوصف الكامل (عربي)",
    categoryEn: "التصنيف (إنجليزي)",
    categoryAr: "التصنيف (عربي)",
    gradeEn: "الصف الدراسي (إنجليزي)",
    gradeAr: "الصف الدراسي (عربي)",
    tagsEn: "الوسوم (إنجليزي)",
    tagsAr: "الوسوم (عربي)",
    addTag: "+ إضافة وسم",
    addTeamMember: "+ إضافة عضو",
    chooseImages: "اختر الصور",
    uploadingImages: "جارٍ رفع الصور...",
    uploadedImages: "الصور المرفوعة",
    teamMember: "عضو الفريق",
    teamMemberAr: "عضو الفريق بالعربي",
    save: "حفظ المشروع",
    saving: "جاري الحفظ...",
    success: "تم حفظ المشروع بنجاح",
    failed: "فشل في حفظ المشروع",
    error: "حدث خطأ أثناء حفظ المشروع",
    imageUploadError: "فشل رفع صورة أو أكثر",
    noImages: "لا توجد صور مرفوعة حتى الآن",
  },
};

export default function ProjectForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [loading, setLoading] = useState(false);
  const [uploadingImages, setUploadingImages] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const { locale } = useLanguage();
  const text = formText[locale];
  const supabase = createBrowserSupabaseClient();

  const updateField = (field: keyof FormData, value: string | string[]) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const updateNestedField = (
    lang: "en" | "ar",
    field: keyof FormData["en"],
    value: string | string[]
  ) => {
    setFormData((prev) => ({
      ...prev,
      [lang]: {
        ...prev[lang],
        [field]: value,
      },
    }));
  };

  const updateArrayField = (
    field: "team" | "teamAr",
    index: number,
    value: string
  ) => {
    const updated = [...formData[field]];
    updated[index] = value;

    setFormData((prev) => ({
      ...prev,
      [field]: updated,
    }));
  };

  const updateTagsField = (lang: "en" | "ar", index: number, value: string) => {
    const updated = [...formData[lang].tags];
    updated[index] = value;

    setFormData((prev) => ({
      ...prev,
      [lang]: {
        ...prev[lang],
        tags: updated,
      },
    }));
  };

  const addArrayItem = (field: "team" | "teamAr") => {
    setFormData((prev) => ({
      ...prev,
      [field]: [...prev[field], ""],
    }));
  };

  const addTagItem = (lang: "en" | "ar") => {
    setFormData((prev) => ({
      ...prev,
      [lang]: {
        ...prev[lang],
        tags: [...prev[lang].tags, ""],
      },
    }));
  };

  const handleImageUpload = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setUploadingImages(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const uploadedUrls: string[] = [];

      for (const file of Array.from(files)) {
        const fileExt = file.name.split(".").pop();
        const safeSlug = formData.slug.trim() || "project";
        const fileName = `${safeSlug}-${Date.now()}-${Math.random()
          .toString(36)
          .slice(2)}.${fileExt}`;

        const filePath = `projects/${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from("project-images")
          .upload(filePath, file, {
            cacheControl: "3600",
            upsert: false,
            contentType: file.type,
          });

        if (uploadError) {
          throw uploadError;
        }

        const { data } = supabase.storage
          .from("project-images")
          .getPublicUrl(filePath);

        uploadedUrls.push(data.publicUrl);
      }

      setFormData((prev) => ({
        ...prev,
        images: [...prev.images, ...uploadedUrls],
      }));
    } catch {
      setErrorMessage(text.imageUploadError);
    } finally {
      setUploadingImages(false);
      e.target.value = "";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    const cleanedFormData = {
      ...formData,
      images: formData.images.filter((item) => item.trim() !== ""),
      team: formData.team.filter((item) => item.trim() !== ""),
      teamAr: formData.teamAr.filter((item) => item.trim() !== ""),
      en: {
        ...formData.en,
        tags: formData.en.tags.filter((item) => item.trim() !== ""),
      },
      ar: {
        ...formData.ar,
        tags: formData.ar.tags.filter((item) => item.trim() !== ""),
      },
    };

    try {
      const response = await fetch("/api/admin/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cleanedFormData),
      });

      const result = await response.json();

      if (!response.ok) {
        setErrorMessage(result.error || text.failed);
        setLoading(false);
        return;
      }

      setSuccessMessage(text.success);
      setFormData(initialFormData);
    } catch {
      setErrorMessage(text.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-8"
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <div className="rounded-2xl border p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-bold">{text.basicInfo}</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <input
            className="rounded-lg border p-3"
            placeholder={text.slug}
            value={formData.slug}
            onChange={(e) => updateField("slug", e.target.value)}
          />

          <input
            className="rounded-lg border p-3"
            placeholder={text.supervisorEn}
            value={formData.supervisor}
            onChange={(e) => updateField("supervisor", e.target.value)}
          />

          <input
            className="rounded-lg border p-3 md:col-span-2"
            placeholder={text.supervisorAr}
            value={formData.supervisorAr}
            onChange={(e) => updateField("supervisorAr", e.target.value)}
          />
        </div>
      </div>

      <div className="rounded-2xl border p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-bold">{text.englishContent}</h2>

        <div className="grid gap-4">
          <input
            className="rounded-lg border p-3"
            placeholder={text.titleEn}
            value={formData.en.title}
            onChange={(e) => updateNestedField("en", "title", e.target.value)}
          />

          <textarea
            className="min-h-[140px] rounded-lg border p-3"
            placeholder={text.fullDescriptionEn}
            value={formData.en.fullDescription}
            onChange={(e) =>
              updateNestedField("en", "fullDescription", e.target.value)
            }
          />

          <input
            className="rounded-lg border p-3"
            placeholder={text.categoryEn}
            value={formData.en.category}
            onChange={(e) => updateNestedField("en", "category", e.target.value)}
          />

          <input
            className="rounded-lg border p-3"
            placeholder={text.gradeEn}
            value={formData.en.grade}
            onChange={(e) => updateNestedField("en", "grade", e.target.value)}
          />
        </div>

        <div className="mt-4 space-y-3">
          <h3 className="font-semibold">{text.tagsEn}</h3>
          {formData.en.tags.map((tag, index) => (
            <input
              key={index}
              className="block w-full rounded-lg border p-3"
              placeholder={`${text.tagsEn} ${index + 1}`}
              value={tag}
              onChange={(e) => updateTagsField("en", index, e.target.value)}
            />
          ))}
          <button
            type="button"
            onClick={() => addTagItem("en")}
            className="rounded-lg border px-4 py-2"
          >
            {text.addTag}
          </button>
        </div>
      </div>

      <div className="rounded-2xl border p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-bold">{text.arabicContent}</h2>

        <div className="grid gap-4">
          <input
            className="rounded-lg border p-3"
            placeholder={text.titleAr}
            value={formData.ar.title}
            onChange={(e) => updateNestedField("ar", "title", e.target.value)}
          />

          <textarea
            className="min-h-[140px] rounded-lg border p-3"
            placeholder={text.fullDescriptionAr}
            value={formData.ar.fullDescription}
            onChange={(e) =>
              updateNestedField("ar", "fullDescription", e.target.value)
            }
          />

          <input
            className="rounded-lg border p-3"
            placeholder={text.categoryAr}
            value={formData.ar.category}
            onChange={(e) => updateNestedField("ar", "category", e.target.value)}
          />

          <input
            className="rounded-lg border p-3"
            placeholder={text.gradeAr}
            value={formData.ar.grade}
            onChange={(e) => updateNestedField("ar", "grade", e.target.value)}
          />
        </div>

        <div className="mt-4 space-y-3">
          <h3 className="font-semibold">{text.tagsAr}</h3>
          {formData.ar.tags.map((tag, index) => (
            <input
              key={index}
              className="block w-full rounded-lg border p-3"
              placeholder={`${text.tagsAr} ${index + 1}`}
              value={tag}
              onChange={(e) => updateTagsField("ar", index, e.target.value)}
            />
          ))}
          <button
            type="button"
            onClick={() => addTagItem("ar")}
            className="rounded-lg border px-4 py-2"
          >
            {text.addTag}
          </button>
        </div>
      </div>

      <div className="rounded-2xl border p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-bold">{text.images}</h2>

        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageUpload}
          className="block w-full rounded-lg border p-3"
        />

        {uploadingImages ? (
          <p className="mt-3 text-sm text-muted-foreground">
            {text.uploadingImages}
          </p>
        ) : null}

        <div className="mt-4">
          <h3 className="mb-2 font-semibold">{text.uploadedImages}</h3>

          {formData.images.length === 0 ? (
            <p className="text-sm text-muted-foreground">{text.noImages}</p>
          ) : (
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {formData.images.map((url, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-xl border p-2"
                >
                  <img
                    src={url}
                    alt={`Uploaded ${index + 1}`}
                    className="h-32 w-full rounded-lg object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="rounded-2xl border p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-bold">{text.teamEn}</h2>

        <div className="space-y-3">
          {formData.team.map((member, index) => (
            <input
              key={index}
              className="block w-full rounded-lg border p-3"
              placeholder={`${text.teamMember} ${index + 1}`}
              value={member}
              onChange={(e) => updateArrayField("team", index, e.target.value)}
            />
          ))}
          <button
            type="button"
            onClick={() => addArrayItem("team")}
            className="rounded-lg border px-4 py-2"
          >
            {text.addTeamMember}
          </button>
        </div>
      </div>

      <div className="rounded-2xl border p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-bold">{text.teamAr}</h2>

        <div className="space-y-3">
          {formData.teamAr.map((member, index) => (
            <input
              key={index}
              className="block w-full rounded-lg border p-3"
              placeholder={`${text.teamMemberAr} ${index + 1}`}
              value={member}
              onChange={(e) =>
                updateArrayField("teamAr", index, e.target.value)
              }
            />
          ))}
          <button
            type="button"
            onClick={() => addArrayItem("teamAr")}
            className="rounded-lg border px-4 py-2"
          >
            {text.addTeamMember}
          </button>
        </div>
      </div>

      {errorMessage ? (
        <p className="text-sm font-medium text-red-500">{errorMessage}</p>
      ) : null}

      {successMessage ? (
        <p className="text-sm font-medium text-green-600">{successMessage}</p>
      ) : null}

      <button
        type="submit"
        disabled={loading || uploadingImages}
        className="rounded-xl bg-primary px-6 py-3 text-white disabled:opacity-60"
      >
        {loading ? text.saving : text.save}
      </button>
    </form>
  );
}