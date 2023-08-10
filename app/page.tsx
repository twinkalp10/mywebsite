import AboutSection from "@/components/AboutSection";
import BlogSection from "@/components/BlogSection";
import HeroSection from "@/components/HeroSection";
import ProjectSection from "@/components/ProjectSection";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <BlogSection />
    </main>
  );
}
