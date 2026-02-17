import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import HeroSlider from "@/components/HeroSlider";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import CourseDetails from "@/components/CourseDetails";
import FounderQuote from "@/components/FounderQuote";
import FAQSection from "@/components/FAQSection";
import Certifications from "@/components/Certifications";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Navbar />
      <main>
        <HeroSlider />
        <AboutSection />
        <ServicesSection />
        <WhyChooseUs />
        <CourseDetails />
        <FounderQuote />
        <FAQSection />
        <Certifications />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
