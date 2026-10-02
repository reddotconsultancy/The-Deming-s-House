import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";
import HeroSlider from "@/components/HeroSlider";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import CourseDetails from "@/components/CourseDetails";
import LicensingSection from "@/components/LicensingSection";
import MarketingSection from "@/components/MarketingSection";
import TeamSection from "@/components/TeamSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import FounderQuote from "@/components/FounderQuote";
import PromiseSection from "@/components/PromiseSection";
import Footer from "@/components/Footer";

const Index = () => {

  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />
      <Navbar />
      <main>
        <HeroSlider />
        <AboutSection />
        <ServicesSection />
        <CourseDetails />
        <LicensingSection />
        <MarketingSection />
        <TeamSection />
        <WhyChooseUs />
        <FounderQuote />
        <PromiseSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
