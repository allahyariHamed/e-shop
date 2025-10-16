'use client'
import clsx from "clsx"
import { FC, useEffect, useState } from "react"
import { selectFilterAcrionType, selectFilteredProducts } from "../utils/redux/filterSlice"
import { useSelector } from "react-redux"
import ProductCard from "./ProductCard"
import { selectCardLayout } from "../utils/redux/productCardSlice"
import { useFetchProducts } from "../utils/customHooks/useFetchProducts"
import Pagination from "@mui/material/Pagination"
import { Product } from "../types/types"
export const cart = JSON.parse(localStorage.getItem('cartItems') ?? '[]')

const ProductList: FC = () => {
    const products = useFetchProducts('products')
    const layout = useSelector(selectCardLayout)
    const filteredProducts = useSelector(selectFilteredProducts)
    const FilterActionType = useSelector(selectFilterAcrionType)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [productPerPage] = useState<number>(12)
    const [currentproducts, setCurrentproducts] = useState<Product[]>([])
    const count = Math.ceil(products.length / productPerPage)

    useEffect(() => {
        const lastProductIndex = currentPage * productPerPage
        const firstProductIndex = lastProductIndex - productPerPage
        setCurrentproducts(products.slice(firstProductIndex, lastProductIndex))
    }, [currentPage, productPerPage, products])

    if (products.length == 0 && filteredProducts.length == 0) return <div className="flex justify-center items-center h-[90vh] font-bold">Turn on your VPN and refresh !</div>;
    if (FilterActionType == 'search' && filteredProducts.length == 0) return <div className="flex justify-center items-center h-[90vh] font-bold">Turn on your VPN and refresh !</div>;

    return (
        <>
            <div className='font-bold text-xl py-10 text-center'>
                <span className='bg-black text-white px-5 py-1 rounded-full'>
                    All Products
                </span>
            </div>

            <div className={clsx("gap-2 pb-2 lg:gap-10 sm:gap-5",
                layout === 'grid' && 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 xl:max-w-5xl mx-auto',
                layout === 'list' && 'grid sm:grid-cols-2 md:grid-cols-3',
            )}>
                {
                    FilterActionType == 'no action' && filteredProducts.length == 0 && currentproducts.map((product, i) => (
                        <ProductCard key={i} layout={layout} image={product.image} name={product.name} price={product.price} brand={product.brand} product={product} />
                    ))
                }
                {
                    filteredProducts.length > 0 && filteredProducts.map((product, i) => (
                        <ProductCard key={i} layout={layout} image={product.image} name={product.name} price={product.price} brand={product.brand} product={product} />
                    ))
                }
                {/* {
                FilterAcrionType == 'search' && filteredProducts.length == 0 && <div className="flex justify-center items-center font-bold h-[90vh]">No product founded !</div>
            } */}
                {/* {
                products.length == 0 && filteredProducts.length == 0 && <div className="flex justify-center items-center font-bold h-[90vh]">No product founded !</div>
            } */}
            </div>

            <div className="flex justify-center py-5 md:py-8">
                <Pagination count={count} color="secondary" defaultPage={1} size="small" className="md:hidden" onChange={(_, p) => setCurrentPage(p)} />
                <Pagination count={count} color="secondary" defaultPage={1} className="hidden md:block" onChange={(_, p) => setCurrentPage(p)} />
            </div>
        </>
    )

    // function handlePageChange(page: number) {
    //     const lastProductIndex = page * productPerPage
    //     const firstProductIndex = lastProductIndex - productPerPage
    //     setCurrentproducts(products.slice(firstProductIndex, lastProductIndex))
    // }
}

export default ProductList