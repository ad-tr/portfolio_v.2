import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TransitionCurve from "@/components/TransitionCurve";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black">
      <HeroSection />
      <AboutSection />
      <TransitionCurve />
      <ProjectsSection />
    </main>
  );
}
