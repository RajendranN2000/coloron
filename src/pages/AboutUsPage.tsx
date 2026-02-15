import Navbar from "../components/Aboutus/Navbar";
import AboutHero from "../components/Aboutus/AboutHero";
import VisionMission from "../components/Aboutus/VisionMission";
import Differentiators from "../components/Aboutus/Differentiators";
import Services from "../components/Aboutus/Services";
import ReachUs from "../components/Aboutus/ReachUs";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SmoothScrollTop from "../components/SmoothScrollTop";

const AboutPage = () => {
  return (
    <SmoothScrollTop>
    <div className="bg-gray-50">
      <Header />
      <Navbar />
      <AboutHero />
      <VisionMission />
      <Differentiators />
      <Services />
      <ReachUs />
      <Footer />
    </div>
    </SmoothScrollTop>
  );
};

export default AboutPage;
