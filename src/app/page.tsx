import { FC } from "react";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CarouselComponent from "../components/Carousel";
import Banner from "../components/Banner";

const Home: FC = () => {
  return (
    <>
      <Navbar />
      <div className="py-2">
        <Banner />
        <CarouselComponent />
        <ProductList />
      </div >
      <Footer />
    </>
  );
}
export default Home