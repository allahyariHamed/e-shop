'use client'
import { FC, useEffect, useState } from "react";
import { HiSortDescending, HiViewGrid } from "react-icons/hi"
import { FaThList } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { selectCardLayout, setLayout } from "../utils/redux/productCardSlice";
import Search from "./Search";
import Sort from "./Sort";
import { useFetchProducts } from "../utils/customHooks/useFetchProducts";
import ModalComponent from "./Modal";
import { IoSearch } from "react-icons/io5";
import { BiSolidShoppingBagAlt } from "react-icons/bi";
import Link from "next/link";
import { calculateTotalQuantity, selectCartItem, selectTotalQuantity } from "../utils/redux/cartSlice";

const Footer: FC = () => {
    const layout = useSelector(selectCardLayout)
    const totalQuantity = useSelector(selectTotalQuantity)
    const cartItems = useSelector(selectCartItem)
    const dispatch = useDispatch()
    const products = useFetchProducts('products')
    const [search, setSearch] = useState<boolean>(false);
    const [sort, setSort] = useState<boolean>(false);

    useEffect(() => {
        dispatch(calculateTotalQuantity())
    }, [dispatch, cartItems])

    return (
        <div className="bg-white sticky bottom-0 w-full pb-2 rounded-t md:static">
            <div className="shadow bg-violet-200 py-2 rounded-md flex justify-around items-center md:hidden">
                {
                    layout === 'list' ? <div onClick={() => dispatch(setLayout('grid'))} className="text-2xl sm:text-3xl hover:cursor-pointer">
                        <HiViewGrid />
                    </div> : null
                }
                {
                    layout === 'grid' ? <div onClick={() => dispatch(setLayout('list'))} className="text-xl sm:text-2xl hover:cursor-pointer">
                        <FaThList />
                    </div> : null
                }
                <ModalComponent Icon={IoSearch} open={search} setOpen={setSearch}>
                    <Search products={products} setOpen={setSearch} />
                </ModalComponent>

                <ModalComponent Icon={HiSortDescending} open={sort} setOpen={setSort}>
                    <Sort products={products} setOpen={setSort} />
                </ModalComponent>

                <Link href={'/cart'}>
                    <div className="relative">
                        <BiSolidShoppingBagAlt className="text-2xl sm:text-3xl" />
                        <div className="absolute bottom-2 left-6 text-sm font-bold sm:left-8 sm:bottom-2 sm:text-lg">
                            {totalQuantity}
                        </div>
                    </div>
                </Link>
            </div>

            <div className="md:block bg-violet-200 text-center py-2 rounded text-sm shadow hidden">
                This template is made with Love by <span className="font-bold">Hamed Allahyari</span> .
            </div>
        </div>
    )
}
export default Footer