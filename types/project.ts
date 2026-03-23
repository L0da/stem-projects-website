export type ProjectTranslation = {
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
  grade: string;
  tags: string[];
};

export type Project = {
  id: string;
  slug: string;
  image: string;
  images?: string[];
  team: string[];
  teamAr?: string[];
  supervisor?: string;
  supervisorAr?: string;
  featured?: boolean;
  en: ProjectTranslation;
  ar: ProjectTranslation;
};