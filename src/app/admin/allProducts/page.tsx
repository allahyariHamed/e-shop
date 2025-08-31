'use client'
import { Products, SingleProductProps } from "@/src/types/types."
import { deleteProduct, getProducts } from "@/src/utils/apiServices"
import Image from "next/image"
import { useEffect, useState } from "react"
import { HiArchiveBoxXMark } from "react-icons/hi2"
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';
import { useDispatch } from "react-redux"
import AdminFooter from "@/src/components/AdminFooter"
import { HiPencil } from "react-icons/hi"

const AllProducts = () => {
  const [products, setProducts] = useState<Products>([])
  const dispatch = useDispatch()

  useEffect(() => {
    getProducts(setProducts, dispatch)
  }, [dispatch])

  return (
    <>
      <div className="grid gap-1 grid-cols-2">
        {
          products.map((product) => {
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

  function ProductCard({ id, image, category, name, description, price, brand, createTime }: SingleProductProps) {
    return (
      <div className="border border-gray-400 shadow rounded">
        <div>
          <Base64Image src={image} name={name} />
        </div>

        <div className="px-2 py-1">
          <div>
            <div className="font-bold text-lg">{brand}</div>
            <div className="text-gray-600 text-sm">{description}</div>
          </div>

          <div className="text-gray-600 text-sm">
            {category}
          </div>

          <div className="text-gray-600 text-xs">
            {createTime}
          </div>

          <div className="text-gray-700 flex justify-between text-sm">
            <div className="font-bold">
              {price}
            </div>

            <div onClick={() => confirmDelete(id)} className="flex gap-2">
              <HiPencil className="text-lg" />
              <HiArchiveBoxXMark className="text-lg text-red-600" />
            </div>
          </div>

        </div>
      </div>
    )
  }

  function Base64Image({ src, name }: { src: string, name: string }) {
    return (
      <Image
        className="w-full h-full aspect-square rounded"
        src={src}
        alt={name}
        width={100}
        height={100}
        loader={() => src}
        unoptimized
      />
    );
  }

  function confirmDelete(id: string) {
    Confirm.show(
      'delete product',
      'Are you sure to delete this product?',
      'delete',
      'cancel',
      function okCb() {
        deleteProduct(id)
      },
      function cancelCb() {
      },
      {
        width: '320px',
        borderRadius: '10px',
        okButtonBackground: 'red',
        titleColor: 'red'
      },
    );
  }

}

export default AllProducts