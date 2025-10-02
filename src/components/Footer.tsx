'use client'
import { FC, useState } from "react";
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

const Footer: FC = () => {
    const layout = useSelector(selectCardLayout)
    const dispatch = useDispatch()
    const products = useFetchProducts('products')
    const [search, setSearch] = useState<boolean>(false);
    const [sort, setSort] = useState<boolean>(false);

    return (
        <div className="sticky bottom-0 shadow bg-violet-200 py-2 rounded-md flex justify-around items-center">
            {
                layout === 'list' ? <div onClick={() => dispatch(setLayout('grid'))} className="text-2xl">
                    <HiViewGrid />
                </div> : null
            }
            {
                layout === 'grid' ? <div onClick={() => dispatch(setLayout('list'))} className="text-xl">
                    <FaThList />
                </div> : null
            }
            <ModalComponent Icon={IoSearch} open={search} setOpen={setSearch}>
                <Search products={products} setOpen={setSearch} />
            </ModalComponent>

            <ModalComponent Icon={HiSortDescending} open={sort} setOpen={setSort}>
                <Sort products={products} setOpen={setSort} />
            </ModalComponent>

            <BiSolidShoppingBagAlt className="text-2xl"/>
        </div>
    )
}
export default Footer