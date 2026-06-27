import {
  CtaSection,
  HeroSection,
  PortfolioSection,
  ProcessSection,
  ServicesSection,
  StorySection,
  TeamSection,
  TestimonialsSection,
} from '@/components/sections';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <StorySection />
      <ServicesSection />
      <PortfolioSection />
      <ProcessSection />
      <TeamSection />
      <TestimonialsSection />
      <CtaSection />
    </main>
  );
}
