'use client'
import { IoSearch } from "react-icons/io5";
import { Dispatch, FC, SetStateAction, useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterBySearch } from '../utils/redux/filterSlice';
import { Product } from '../types/types';

type props = {
    products: Product[]
    setOpen: Dispatch<SetStateAction<boolean>>
}

const Search: FC<props> = ({ products, setOpen }) => {
    const [search, setSearch] = useState<string>('');
    const dispatch = useDispatch()

    return (
        <div className='flex gap-1'>
            <input
                type="search"
                name="search"
                id=""
                placeholder='search'
                className="peer w-full bg-white placeholder:text-slate-500 text-black text-sm sm:text-base rounded px-3 py-2 transition duration-300 ease focus:outline-none shadow focus:shadow-none"
                onBlur={(e) => setSearch(e.target.value)}
            />

            <div className='bg-black text-white p-2 rounded-md shadow' onClick={() => {
                dispatch(filterBySearch({ products, search }))
                setOpen(false)
            }}>
                <IoSearch className="text-2xl sm:text-3xl" />
            </div>
        </div>
    );
}
export default Search