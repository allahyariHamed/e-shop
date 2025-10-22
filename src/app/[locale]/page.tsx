import ProductList from "../../components/ProductList";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import CarouselComponent from "../../components/Carousel";
import Banner from "../../components/Banner";
import SelectLanguage from "@/src/components/SelectLanguage";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="py-2 relative">
        <Banner />
        <CarouselComponent />
        <ProductList />
        <div className="hidden md:block fixed bottom-10 left-10">
          <SelectLanguage />
        </div>
      </div >
      <Footer />
    </>
  );
}
export default Home