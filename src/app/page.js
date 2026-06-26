import Header from '@/components/Header';
  import Hero from '@/components/Hero';
  import FeatureSection from '@/components/FeatureSection';
  import PricingSection from '@/components/PricingSection';
  import SocialProof from '@/components/SocialProof';
  import Footer from '@/components/Footer';

  export default function Home() {
    return (
      <>
        <Header />
        <main>
          <Hero />
          <FeatureSection />
          <PricingSection />
          <SocialProof />
        </main>
        <Footer />
      </>
    );
  }