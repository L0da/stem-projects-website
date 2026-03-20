export type Project = {
  id: string;
  slug: string;
  title: string;
  category: string;
  grade: string;
  team: string[];
  supervisor?: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  tags: string[];
  featured?: boolean;
};