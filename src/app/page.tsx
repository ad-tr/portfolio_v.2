import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TransitionCurve from "@/components/TransitionCurve";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import TransitionCurveInverted from "@/components/TransitionCurveInverted";
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black">
      <HeroSection />
      <AboutSection />
      <TransitionCurve />
      <ProjectsSection />
      <SkillsSection />
      <TransitionCurveInverted />
      <ExperienceSection />
      <Footer />
    </main>
  );
}
