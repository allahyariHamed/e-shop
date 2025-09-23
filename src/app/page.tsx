'use client'
import { useDispatch, useSelector } from "react-redux";
import { FC, Suspense, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";
import { removeActiveUser, setActiveUser } from "../utils/redux/authSlice";
import Footer from "../components/Footer";
import Loading from "./loading";
import clsx from "clsx";
import { selectFilteredProducts } from "../utils/redux/filterSlice";
import ProductCard from "../components/ProductCard";

const Home: FC = () => {
  const [extractedUserName, SetExtractedUserName] = useState<string>()
  const dispatch = useDispatch()
  const [layout, setLayout] = useState<'list' | 'grid'>('list')
  // const products = useFetchProducts('products')
  const filteredProducts = useSelector(selectFilteredProducts)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        if (user?.displayName == null || '') {
          SetExtractedUserName(user?.email?.split('@')[0])
        }
        dispatch(setActiveUser({
          email: user?.email || '',
          userName: user?.displayName || extractedUserName,
          userId: user?.uid
        }))
      } else {
        dispatch(removeActiveUser())
      }
    })
  }, [dispatch, extractedUserName])

  return (
    <div>
      <div className={clsx("gap-1 py-2",
        layout === 'grid' && 'grid grid-cols-2',
        layout === 'list' && 'grid',
      )}>
        <Suspense fallback={<Loading />}>
          {
            filteredProducts.length > 0 && filteredProducts.map((product, i) => (
              <ProductCard key={i} layout={layout} image={product.image} name={product.name} price={product.price} brand={product.brand} />
            ))
          }
        </Suspense>
      </div>
      {
        filteredProducts.length == 0 && <div className="flex justify-center items-center font-bold h-[90vh]">No product founded !</div>
      }
      <Footer layout={layout} setLayout={setLayout} />
    </div >
  );
}
export default Home