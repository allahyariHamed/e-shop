'use client'
import { addToCart } from "@/src/utils/redux/cartSlice"
import { selectProducts } from "@/src/utils/redux/productSlice"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { FC } from "react"
import { useDispatch, useSelector } from "react-redux"

const Page: FC = () => {
    const params = useParams()
    const products = useSelector(selectProducts)
    console.log(products)
    const singleProduct = products.find((item) => item.id == params.slug)
    const dispatch = useDispatch()
    const storedCartItems = localStorage.getItem('cartItems')

    return (
        <>
            <div className="py-2 bg-white md:w-3xl mx-auto">
                <div className="bg-violet-200 rounded shadow py-2 text-xl text-center font-bold">
                    single product view
                </div>
            </div>

            <div className="">
                <div className="p-3 bg-violet-200 rounded shadow max-w-xs mx-auto ">
                    <Image src={singleProduct?.image || ""} alt={singleProduct?.name || ""} width={200} height={200} className="rounded h-full w-full aspect-[4/5] shadow" />

                    <div className="py-2 font-bold">
                        {singleProduct?.name}
                    </div>
                    <div className="py-2">
                        {singleProduct?.description}
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="font-bold">
                            {singleProduct?.price} T
                        </div>
                        <div className="bg-black text-white text-sm font-bold px-2 py-1 rounded shadow sm:text-sm lg:text-sm hover:cursor-pointer" onClick={() => dispatch(addToCart({ product: singleProduct, storedCartItems }))}>
                            <Link href={`/${params.locale}/cart`}>
                                buy
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page