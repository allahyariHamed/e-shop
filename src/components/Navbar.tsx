'use client'
import SideBar from './SideBar';
import ClientAvatar from './ClientAvatar';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/config';
import { removeActiveUser, setActiveUser } from '../utils/redux/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import ModalComponent from './Modal';
// import { HiDotsVertical } from 'react-icons/hi';
import { HiFilter, HiSortDescending, HiViewGrid } from "react-icons/hi";
import Search from './Search';
import Sort from './Sort';
import Link from 'next/link';
import { IoSearch } from 'react-icons/io5';
import { BiSolidShoppingBagAlt } from 'react-icons/bi';
import { useFetchProducts } from '../utils/customHooks/useFetchProducts';
import { selectTotalQuantity } from '../utils/redux/cartSlice';
import { selectCardLayout, setLayout } from '../utils/redux/productCardSlice';
import { FaThList } from 'react-icons/fa';

const Navbar: React.FC = () => {
    const totalQuantity = useSelector(selectTotalQuantity)
    const layout = useSelector(selectCardLayout)
    const [extractedUserName, SetExtractedUserName] = useState<string>()
    const [sidebar, SetSidebar] = useState<boolean>(false)
    const products = useFetchProducts('products')
    const [search, setSearch] = useState<boolean>(false);
    const [sort, setSort] = useState<boolean>(false);
    const dispatch = useDispatch()


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                if (user?.displayName == null || '') {
                    SetExtractedUserName(user?.email?.split('@')[0])
                }

                dispatch(setActiveUser({
                    email: user?.email || '',
                    userName: user?.displayName || extractedUserName,
                    userId: user?.uid
                }))

            } else {
                dispatch(removeActiveUser())
            }
        })
    }, [dispatch, extractedUserName])

    return (
        <nav className="sticky top-0 z-10 pt-2 bg-white rounded-b">
            <div className="flex items-center justify-between shadow bg-violet-200 rounded-md py-1 pr-3 md:pr-0">

                <div className='md:hidden'>
                    <ClientAvatar />
                </div>

                <div className='md:flex gap-5 items-center hidden'>
                    <ClientAvatar />

                    {
                        layout === 'list' ? <div onClick={() => dispatch(setLayout('grid'))} className="text-2xl sm:text-3xl hover:cursor-pointer">
                            <HiViewGrid />
                        </div> : null
                    }
                    {
                        layout === 'grid' ? <div onClick={() => dispatch(setLayout('list'))} className="text-xl sm:text-2xl p-1 hover:cursor-pointer">
                            <FaThList />
                        </div> : null
                    }
                    <Link href={'/cart'}>
                        <div className="relative">
                            <BiSolidShoppingBagAlt className="text-2xl sm:text-3xl" />
                            <div className="absolute bottom-2 left-6 text-sm font-bold sm:left-8 sm:bottom-2 sm:text-lg">
                                {totalQuantity}
                            </div>
                        </div>
                    </Link>
                </div>

                <span className="text-lg font-bold px-3 sm:text-2xl">
                    TaroPud
                </span>

                <div className='md:hidden'>
                    <ModalComponent Icon={HiFilter} open={sidebar} setOpen={SetSidebar}>
                        <SideBar setOpen={SetSidebar} />
                    </ModalComponent>
                </div>

                <div className='md:flex gap-5 px-3 hidden'>
                    <ModalComponent Icon={IoSearch} open={search} setOpen={setSearch}>
                        <Search products={products} setOpen={setSearch} />
                    </ModalComponent>

                    <ModalComponent Icon={HiSortDescending} open={sort} setOpen={setSort}>
                        <Sort products={products} setOpen={setSort} />
                    </ModalComponent>

                    <ModalComponent Icon={HiFilter} open={sidebar} setOpen={SetSidebar}>
                        <SideBar setOpen={SetSidebar} />
                    </ModalComponent>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;  