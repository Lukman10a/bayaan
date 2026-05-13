import { HeroSection, StatsSection, AboutSnapshot, ProgrammesSection, FeaturesSection, CTASection } from '@/components/sections/HomeSections';
import { FeaturedCoursesSection, TestimonialsSection, TeachersSection, BlogPreviewSection } from '@/components/sections/HomeSections2';

export default function HomePage() {
  return (
    <main className="flex-1 overflow-hidden">
      <HeroSection />
      <StatsSection />
      <AboutSnapshot />
      <ProgrammesSection />
      <FeaturesSection />
      <FeaturedCoursesSection />
      <TestimonialsSection />
      <TeachersSection />
      <BlogPreviewSection />
      <CTASection />
    </main>
  );
}
