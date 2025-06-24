import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import CategoryCards from '@/components/home/CategoryCards';
import StatsSection from '@/components/home/StatsSection';
import FeaturedArtists from '@/components/home/FeaturedArtists';
import CTASection from '@/components/home/CTASection';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <CategoryCards />
        <StatsSection />
        <FeaturedArtists />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}