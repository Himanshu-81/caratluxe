import AnnouncementBar from "./components/layout/AnnouncementBar";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/home/HeroSection";
import ShopByCategory from "./components/home/ShopByCategory";
import AllCategoriesSection from "./components/home/AllCategoriesSection";
import BestSellers from "./components/home/BestSellers";
import WhyLabDiamonds from "./components/home/WhyLabDiamonds";
import CollectionsBanner from "./components/home/CollectionsBanner";
import ShopByShape from "./components/home/ShopByShape";
import GenderDiamondShowcase from "./components/home/GenderDiamondShowcase";
import EngagementSection from "./components/home/EngagementSection";
import ShopByOccasion from "./components/home/ShopByOccasion";
import CustomerTestimonials from "./components/home/CustomerTestimonials";
import FAQSection from "./components/home/FAQSection";
import TrustFeatures from "./components/home/TrustFeatures";
import NewsletterSignup from "./components/home/NewsletterSignup";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>
        <HeroSection />
        <TrustFeatures />
        <ShopByCategory />
        <BestSellers />
        <AllCategoriesSection />
        <WhyLabDiamonds />
        <CollectionsBanner />
        <ShopByShape />
        <GenderDiamondShowcase />
        <EngagementSection />
        <ShopByOccasion />
        <CustomerTestimonials />
        <FAQSection />
        <NewsletterSignup />
      </main>
      <Footer />
    </>
  );
}
