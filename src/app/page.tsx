import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import PromiseSection from "@/components/sections/PromiseSection";
import ProcessSection from "@/components/sections/ProcessSection";
import AboutSection from "@/components/sections/AboutSection";
import TestimonialVideoSection from "@/components/sections/TestimonialVideoSection";
// import ResourcesSection from "@/components/sections/ResourcesSection";
import DiagnosticSection from "@/components/sections/DiagnosticSection";
import LogoBanner from "@/components/LogoBanner";
import MethodValuesSection from "@/components/sections/MethodValuesSection";
import FinalCtaSection from "@/components/sections/FinalCtaSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />
      <LogoBanner />
      <ProblemSection />
      <PromiseSection />
      <ProcessSection />
      <AboutSection />
      <MethodValuesSection />
      <TestimonialVideoSection />
      {/* <ResourcesSection /> */}
      <DiagnosticSection />
      <FinalCtaSection />
    </main>
  );
}
