import { FC, Suspense } from "react";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer";
import Loading from "../components/Loading";

const Home: FC = () => {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <ProductList />
      </Suspense>
      <Footer />
    </div >
  );
}
export default Home