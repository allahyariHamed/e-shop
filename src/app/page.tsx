import Footer from "../components/footer";
import Header from "../components/header";
import Slider from "../components/slider";

export default function Home() {
  return (
    <>
      <Header />
      <div className="px-5">
        <div className="text-center py-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-5">
            Welcome to Our <br /> E-Commerce Store
          </h1>
          <p className="text-xl text-gray-600">
            Discover amazing products <br /> at great prices
          </p>
        </div>
      </div>
      <Slider />
      <Footer />
    </>
  );
}
