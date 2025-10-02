'use client'
import clsx from "clsx"
import { FC } from "react"
import { selectFilterAcrionType, selectFilteredProducts } from "../utils/redux/filterSlice"
import { useSelector } from "react-redux"
import ProductCard from "./ProductCard"
import { selectCardLayout } from "../utils/redux/productCardSlice"
import { useFetchProducts } from "../utils/customHooks/useFetchProducts"

const ProductList: FC = () => {
    const products = useFetchProducts('products')
    const layout = useSelector(selectCardLayout)
    const filteredProducts = useSelector(selectFilteredProducts)
    const FilterAcrionType = useSelector(selectFilterAcrionType)

    return (
        <div className={clsx("gap-1 py-2",
            layout === 'grid' && 'grid grid-cols-2',
            layout === 'list' && 'grid',
        )}>
            {
                FilterAcrionType == 'no action' && filteredProducts.length == 0 && products.map((product, i) => (
                    <ProductCard key={i} layout={layout} image={product.image} name={product.name} price={product.price} brand={product.brand} product={product} />
                ))
            }
            {
                filteredProducts.length > 0 && filteredProducts.map((product, i) => (
                    <ProductCard key={i} layout={layout} image={product.image} name={product.name} price={product.price} brand={product.brand} product={product} />
                ))
            }
            {
                FilterAcrionType == 'search' && filteredProducts.length == 0 && <div className="flex justify-center items-center font-bold h-[90vh]">No product founded !</div>
            }
            {
                products.length == 0 && filteredProducts.length == 0 && <div className="flex justify-center items-center font-bold h-[90vh]">No product founded !</div>
            }
        </div>
    )
}

export default ProductList