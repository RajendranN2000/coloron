import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import SolutionsSection from '../components/SolutionsSection';
import WhyChooseSection from '../components/WhyChooseSection';
import CallToActionBanner from '../components/CallToActionBanner';
import VisionMissionSection from '../components/VisionMissionSection';
import ProductsSection from '../components/ProductsSection';
import WorkSection from '../components/WorkSection';
import Footer from '../components/Footer';
import GallerySection from '../components/GallerySection';
import SmoothScrollTop from '../components/SmoothScrollTop';

const HomePage: React.FC = () => {
  return (
    <SmoothScrollTop>
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <SolutionsSection />
      <WhyChooseSection />
      <CallToActionBanner />
      <VisionMissionSection />
      <GallerySection />
      <ProductsSection />
      <WorkSection />
      <Footer />
    </div>
    </SmoothScrollTop>
  );
};

export default HomePage;
