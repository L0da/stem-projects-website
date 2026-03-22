import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import AboutPreviewSection from "@/components/home/AboutPreviewSection";
import FeaturedProjectsSection from "@/components/home/featured-projects-section";
import VisionMissionSection from "@/components/home/vision-mission-section";
import InspirationSection from "@/components/home/inspiration-section";
import StemVideoSection from "@/components/home/stem-video-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <StemVideoSection />
      <FeaturedProjectsSection />
      <InspirationSection />
      <AboutPreviewSection />
    </>
  );
}