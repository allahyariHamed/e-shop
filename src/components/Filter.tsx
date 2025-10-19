import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { useFetchProducts } from "../utils/customHooks/useFetchProducts";
import { useDispatch, useSelector } from "react-redux";
import { filterByBrand, filterByCategory, filterByPrice, reset } from "../utils/redux/filterSlice";
import { getPriceRange, selectMaxPrice, selectMinPrice } from "../utils/redux/productSlice";
import { useTranslations } from "next-intl";

type props = {
    setOpen: Dispatch<SetStateAction<boolean>>
}

const Filter: FC<props> = ({ setOpen }) => {
    const t = useTranslations('navbar')
    const products = useFetchProducts('products')
    const allCategories = ['all', ...new Set(products.map((product) => product.category))]
    const allBrands = ['all', ...new Set(products.map((product) => product.brand))]
    console.log(allBrands)
    const dispatch = useDispatch()
    const maxPrice = useSelector(selectMaxPrice)
    const minPrice = useSelector(selectMinPrice)
    const [price, setPrice] = useState<string | number>(maxPrice)

    useEffect(() => {
        dispatch(getPriceRange({ products }))
    }, [dispatch, products])

    return (
        <div>
            <div className="grid gap-5 sm:gap-7">

                <div>
                    <div className="text-xl font-bold sm:text-xl mb-2">
                        {t('categories')}
                    </div>
                    <div className="flex gap-1">
                        {
                            allCategories.map((element) => (
                                <div key={element} className="bg-white rounded shadow px-2 w-fit font-bold" onClick={() => {
                                    dispatch(filterByCategory({ products, category: element }))
                                }}>
                                    {t(element)}
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div>
                    <div className="text-xl font-bold sm:text-xl">
                        {t('brands')}
                    </div>
                    <select name="" id="" className="bg-white rounded shadow px-1 w-full font-bold sm:py-1" onChange={(e) => dispatch(filterByBrand({ products, brand: e.target.value }))}>
                        {
                            allBrands.map((element) => (
                                <option value={element} key={element}>
                                    {t(element)}
                                </option>
                            ))
                        }
                    </select>
                </div>

                <div>
                    <div onClick={() => dispatch(getPriceRange({ products }))} className="font-bold sm:text-xl">
                        {t('price')} : {price}
                    </div>
                    <div>
                        <input type="range" name="" id="" className="w-full" value={price} max={maxPrice} min={minPrice} onChange={(e) => {
                            dispatch(filterByPrice({ products, price: e.target.value }))
                            setPrice(e.target.value)
                        }} />
                    </div>
                </div>

                <div className="flex justify-between font-bold text-sm sm:text-base sm:justify-around">
                    <div className="bg-black text-white px-3 py-1 rounded shadow" onClick={() => { dispatch(reset()); setOpen(false) }}>
                        {t('reset')}
                    </div>
                    <div className="bg-black px-3 py-1 text-white rounded shadow" onClick={() => setOpen(false)}>
                        {t('accept')}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Filter