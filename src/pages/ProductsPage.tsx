
import Navbar from "../components/Aboutus/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductList from "../components/productCard";
import ProductHero from "../components/ProductHero";
import SmoothScrollTop from "../components/SmoothScrollTop";

const ProductsPage = () => {
  return (
    <SmoothScrollTop>
      <div className="bg-gray-50">
        <Header/>
        <Navbar />
        <ProductHero />
        <ProductList/>
        <Footer />
      </div>
      </SmoothScrollTop>
    );
};

export default ProductsPage;
