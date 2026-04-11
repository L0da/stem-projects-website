import CTASection from "@/components/home/CTA-Section";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import FeaturedProjectsSection from "@/components/home/featured-projects-section";
import InspirationSection from "@/components/home/inspiration-section";
import StemVideoSection from "@/components/home/stem-video-section";
import { getProjects } from "@/lib/firebase/projects";

export default async function Home() {
  const projects = await getProjects();

  return (
    <>
      <HeroSection />
      <StatsSection />
      <InspirationSection />
      <StemVideoSection />
      <FeaturedProjectsSection projects={projects} />
      <CTASection />
    </>
  );
}