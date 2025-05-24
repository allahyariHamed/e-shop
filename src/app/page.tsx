import Footer from "../components/footer";
import Header from "../components/header";
import Slider from "../components/slider";

export default function Home() {
  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Our E-Commerce Store
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Discover amazing products at great prices
          </p>
        </div>
      </div>
      <Slider />
      <Footer />
    </>
  );
}
