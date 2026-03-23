import CTASection from "@/components/home/CTA-Section";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import FeaturedProjectsSection from "@/components/home/featured-projects-section";
import InspirationSection from "@/components/home/inspiration-section";
import StemVideoSection from "@/components/home/stem-video-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <InspirationSection />
      <StemVideoSection />
      <FeaturedProjectsSection />
      <CTASection />
    </>
  );
}