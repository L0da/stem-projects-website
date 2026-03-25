"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { useLanguage } from "@/components/providers/language-provider";
import { getProjectBySlug } from "@/lib/supabase/projects";
import { Project } from "@/types/project";
export const dynamic = "force-dynamic"

export default function ProjectDetailsPage() {
  const { t, locale } = useLanguage();
  const params = useParams();

  const slug = params?.slug as string;

  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    async function loadProject() {
      try {
        setLoading(true);
        const data = await getProjectBySlug(slug);
        setProject(data);
      } catch (error) {
        console.error("Failed to load project:", error);
        setProject(null);
      } finally {
        setLoading(false);
      }
    }

    if (slug) {
      loadProject();
    }
  }, [slug]);

  const content = project ? (locale === "ar" ? project.ar : project.en) : null;

  const galleryImages = useMemo(() => {
    if (!project) return [];
    if (Array.isArray(project.images) && project.images.length > 0) {
      return project.images.filter(Boolean);
    }
    if (project.image) {
      return [project.image];
    }
    return ["/images/placeholder.jpg"];
  }, [project]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [slug]);

  function goToNext() {
    if (galleryImages.length === 0) return;
    setSelectedIndex((prev) => (prev + 1) % galleryImages.length);
  }

  function goToPrev() {
    if (galleryImages.length === 0) return;
    setSelectedIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );
  }

  function openLightbox(index: number) {
    setSelectedIndex(index);
    setIsLightboxOpen(true);
  }

  useEffect(() => {
    if (galleryImages.length <= 1 || isLightboxOpen) return;

    const interval = setInterval(() => {
      setSelectedIndex((prev) => (prev + 1) % galleryImages.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [galleryImages, isLightboxOpen]);

  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsLightboxOpen(false);
      } else if (e.key === "ArrowRight") {
        if (locale === "ar") {
          goToPrev();
        } else {
          goToNext();
        }
      } else if (e.key === "ArrowLeft") {
        if (locale === "ar") {
          goToNext();
        } else {
          goToPrev();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isLightboxOpen, locale, galleryImages.length]);

  if (loading) {
    return (
      <div className="py-20 text-center text-gray-500 dark:text-slate-300">
        {locale === "ar" ? "جارٍ تحميل المشروع..." : "Loading project..."}
      </div>
    );
  }

  if (!project || !content) {
    return (
      <div className="py-20 text-center text-red-500">
        {locale === "ar" ? "المشروع غير موجود" : "Project not found"}
      </div>
    );
  }

  const selectedImage =
    galleryImages[selectedIndex] || "/images/placeholder.jpg";

  return (
    <main className="pb-20">
      <Container>
        <div className="grid gap-10 pt-12 lg:grid-cols-2">
          <div>
            <div
              className="group relative mb-4 h-[300px] cursor-zoom-in overflow-hidden rounded-3xl bg-gray-100 shadow-lg dark:bg-slate-800 md:h-[460px]"
              onClick={() => openLightbox(selectedIndex)}
            >
              <Image
                src={selectedImage}
                alt={content.title}
                fill
                priority
                loading="eager"
                unoptimized
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />

              <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/10" />

              <div className="absolute bottom-4 left-4 rounded-full bg-black/55 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                {locale === "ar" ? "اضغط للتكبير" : "Click to enlarge"}
              </div>

              {galleryImages.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      goToPrev();
                    }}
                    className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-sm transition hover:bg-black/65"
                    aria-label={
                      locale === "ar" ? "الصورة السابقة" : "Previous image"
                    }
                  >
                    {locale === "ar" ? "→" : "←"}
                  </button>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      goToNext();
                    }}
                    className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-sm transition hover:bg-black/65"
                    aria-label={
                      locale === "ar" ? "الصورة التالية" : "Next image"
                    }
                  >
                    {locale === "ar" ? "←" : "→"}
                  </button>
                </>
              )}
            </div>

            {galleryImages.length > 1 && (
              <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
                {galleryImages.map((img, index) => {
                  const isActive = selectedIndex === index;

                  return (
                    <button
                      key={`${img}-${index}`}
                      type="button"
                      onClick={() => setSelectedIndex(index)}
                      onDoubleClick={() => openLightbox(index)}
                      className={`relative h-24 overflow-hidden rounded-2xl border-2 transition ${
                        isActive
                          ? "border-blue-500 ring-2 ring-blue-500/20"
                          : "border-transparent hover:border-blue-400/50"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`${content.title} ${index + 1}`}
                        fill
                        unoptimized
                        sizes="(max-width: 640px) 33vw, 120px"
                        className="object-cover"
                      />
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          <div>
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                {content.category}
              </span>

              <span className="rounded-full bg-gray-100 px-4 py-1 text-sm font-medium text-gray-600 dark:bg-slate-700 dark:text-slate-300">
                {content.grade}
              </span>
            </div>

            <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              {content.title}
            </h1>

            <p className="mb-6 text-lg text-gray-600 dark:text-slate-300">
              {content.shortDescription}
            </p>

            <div className="mb-8">
              <h2 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                {locale === "ar" ? "وصف المشروع" : "Project Description"}
              </h2>

              <p className="leading-8 text-gray-600 dark:text-slate-300">
                {content.fullDescription}
              </p>
            </div>

            <div className="mb-8">
              <h2 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                {t.projectDetails.tags}
              </h2>

              <div className="flex flex-wrap gap-2">
                {content.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 dark:bg-slate-700 dark:text-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-8 rounded-2xl border border-gray-200 p-5 dark:border-slate-700">
              <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
                {t.projectDetails.teamMembers}
              </h3>

              <ul className="space-y-1 text-gray-600 dark:text-slate-300">
                {(locale === "ar" && project.teamAr
                  ? project.teamAr
                  : project.team
                ).map((member) => (
                  <li key={member}>{member}</li>
                ))}
              </ul>
            </div>

            {project.supervisor && (
              <div className="rounded-2xl border border-gray-200 p-5 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
                  {t.projectDetails.supervisor}
                </h3>

                <p className="text-gray-600 dark:text-slate-300">
                  {locale === "ar" && project.supervisorAr
                    ? project.supervisorAr
                    : project.supervisor}
                </p>
              </div>
            )}
          </div>
        </div>
      </Container>

      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setIsLightboxOpen(false)}
        >
          <button
            type="button"
            onClick={() => setIsLightboxOpen(false)}
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition hover:bg-white/20"
            aria-label={locale === "ar" ? "إغلاق" : "Close"}
          >
            ×
          </button>

          {galleryImages.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrev();
                }}
                className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition hover:bg-white/20"
                aria-label={
                  locale === "ar" ? "الصورة السابقة" : "Previous image"
                }
              >
                {locale === "ar" ? "→" : "←"}
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-2xl text-white transition hover:bg-white/20"
                aria-label={
                  locale === "ar" ? "الصورة التالية" : "Next image"
                }
              >
                {locale === "ar" ? "←" : "→"}
              </button>
            </>
          )}

          <div
            className="relative h-[70vh] w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt={content.title}
              fill
              unoptimized
              sizes="100vw"
              className="object-contain"
            />
          </div>

          {galleryImages.length > 1 && (
            <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm">
              <span>
                {selectedIndex + 1} / {galleryImages.length}
              </span>
            </div>
          )}
        </div>
      )}
    </main>
  );
}