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
        <SelectLanguage />
      </div >
      <Footer />
    </>
  );
}
export default Home