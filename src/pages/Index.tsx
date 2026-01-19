import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import NetworksSection from "@/components/NetworksSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import SecuritySection from "@/components/SecuritySection";
import RoadmapSection from "@/components/RoadmapSection";
import ReferralSection from "@/components/ReferralSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <NetworksSection />
        <HowItWorksSection />
        <SecuritySection />
        <ReferralSection />
        <RoadmapSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
