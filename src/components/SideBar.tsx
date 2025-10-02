import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { useFetchProducts } from "../utils/customHooks/useFetchProducts";
import { useDispatch, useSelector } from "react-redux";
import { filterByBrand, filterByCategory, filterByPrice, reset } from "../utils/redux/filterSlice";
import { getPriceRange, selectMaxPrice, selectMinPrice } from "../utils/redux/productSlice";

type props = {
    setOpen: Dispatch<SetStateAction<boolean>>
}

const SideBar: FC<props> = ({ setOpen }) => {
    const products = useFetchProducts('products')
    const allCategories = ['all', ...new Set(products.map((product) => product.category))]
    const allBrands = ['all', ...new Set(products.map((product) => product.brand))]
    const dispatch = useDispatch()
    const maxPrice = useSelector(selectMaxPrice)
    const minPrice = useSelector(selectMinPrice)
    const [price, setPrice] = useState<string | number>(maxPrice)

    useEffect(() => {
        dispatch(getPriceRange({ products }))
    }, [dispatch, products])

    return (
        <div>
            <div className="grid gap-5">

                <div>
                    <div className="text-xl font-bold">
                        Categories
                    </div>
                    <div className="flex gap-1">
                        {
                            allCategories.map((element) => (
                                <div key={element} className="bg-white rounded shadow px-2 w-fit" onClick={() => {
                                    dispatch(filterByCategory({ products, category: element }))
                                }}>
                                    {element}
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div>
                    <div className="text-xl font-bold">
                        Brands
                    </div>
                    <select name="" id="" className="bg-white rounded shadow px-1 w-full" onChange={(e) => dispatch(filterByBrand({ products, brand: e.target.value }))}>
                        {
                            allBrands.map((element) => (
                                <option value={element} key={element}>
                                    {element}
                                </option>
                            ))
                        }
                    </select>
                </div>

                <div>
                    <div onClick={() => dispatch(getPriceRange({ products }))}>
                        {`price : ${price}`}
                    </div>
                    <div>
                        <input type="range" name="" id="" className="w-full" value={price} max={maxPrice} min={minPrice} onChange={(e) => {
                            dispatch(filterByPrice({ products, price: e.target.value }))
                            setPrice(e.target.value)
                        }} />
                    </div>
                </div>

                <div className="flex justify-between font-bold text-sm">
                    <div className="bg-violet-200 px-2 py-1 rounded shadow border-2 border-violet-500" onClick={() => { dispatch(reset()); setOpen(false) }}>
                        reset
                    </div>
                    <div className="bg-violet-200 px-2 py-1 rounded shadow border-2 border-violet-500">
                        accept
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SideBar