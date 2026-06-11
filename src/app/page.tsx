import Hero from "@/app/(core)/_components/Hero";
import ShowcaseSection from "@/app/(core)/_components/ShowcaseSection";
import FutureSection from "@/app/(core)/_components/FutureSection";
import CTASection from "@/app/(core)/_components/CTASection";
import StatsSection from "@/app/(core)/_components/StatsSection";
import FeaturedAgentsSection from "@/app/(core)/_components/FeaturedAgentsSection";
import AboutSection from "@/app/(core)/_components/AboutSection";
import CompareTable from "@/app/(core)/_components/CompareTable";
import BackgroundGlow from "@/app/(core)/_components/BackgroundGlow";
export default function HomePage() {
  return (
    <main
      dir="rtl"
      className=" relative min-h-screen overflow-hidden bg-[#0b0b0f] text-white ">
      <BackgroundGlow />
      <div className="  z-10 mx-auto max-w-7xl px-6">
        <Hero />
        <ShowcaseSection />
        <FutureSection />
        <CTASection />
        <StatsSection />
        <FeaturedAgentsSection />
        <AboutSection />
        <CompareTable />
      </div>
    </main>
  );
}
