'use client'
import AdminFooter from "@/src/components/adminComponents/AdminFooter"
import { useFetchProducts } from "@/src/utils/customHooks/useFetchProducts"
import ProductCard from "@/src/components/adminComponents/AdminProductCard"

const AllProducts = () => {
  const data = useFetchProducts('products')

  return (
    <>
      <div className="grid gap-1 grid-cols-2">
        {
          data.map((product) => {
            return (
              <ProductCard
                key={product.id}
                id={product.id}
                image={product.image}
                category={product.category}
                name={product.name}
                description={product.description}
                price={product.price}
                brand={product.brand}
                createTime={product.createTime}
              />
            )
          })
        }

      </div>
      <AdminFooter />
    </>
  )
}

export default AllProducts