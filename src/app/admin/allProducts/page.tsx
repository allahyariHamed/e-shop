'use client'
import AdminFooter from "@/src/components/adminComponents/AdminFooter"
import { useFetchProducts } from "@/src/utils/customHooks/useFetchProducts"
import AdminProductCard from "@/src/components/adminComponents/AdminProductCard"

const AllProducts = () => {
  const data = useFetchProducts('products')

  return (
    <>
      <div className="bg-white pt-2">
        <div className="bg-violet-200 text-center text-2xl font-bold py-2 rounded shadow">
          all products
        </div>
      </div>
      <div className="grid gap-2 grid-cols-2 py-2">
        {
          data.map((product) => {
            return (
              <AdminProductCard
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