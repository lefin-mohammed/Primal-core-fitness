import HeroSection from "@/components/HeroSection";
import PhilosophySection from "@/components/PhilosophySection";
import ProgramsSection from "@/components/ProgramsSection";
import SpaceSection from "@/components/SpaceSection";
import TransformationSection from "@/components/TransformationSection";
import CallToActionSection from "@/components/CallToActionSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <HeroSection />
      <PhilosophySection />
      <ProgramsSection />
      <SpaceSection />
      <TransformationSection />
      <CallToActionSection />
      <FooterSection />
    </div>
  );
};

export default Index;
