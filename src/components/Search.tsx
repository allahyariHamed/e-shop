'use client'
import { IoSearch } from "react-icons/io5";
import { Dispatch, FC, SetStateAction, useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterBySearch } from '../utils/redux/filterSlice';
import { Products } from '../types/types';

type props = {
    products: Products[]
    setOpen: Dispatch<SetStateAction<boolean>>
}

const Search: FC<props> = ({ products, setOpen }) => {
    const [search, setSearch] = useState<string>('');
    const dispatch = useDispatch()

    return (
        <div className='flex gap-1 w-64'>
            <input
                type="search"
                name="search"
                id=""
                placeholder='search'
                className="peer w-full bg-white placeholder:text-slate-500 text-black text-xs rounded px-3 py-2 transition duration-300 ease focus:outline-none shadow focus:shadow-none"
                onBlur={(e) => setSearch(e.target.value)}
            />

            <div className='bg-white p-1 rounded shadow' onClick={() => {
                dispatch(filterBySearch({ products, search }))
                setOpen(false)
            }}>
                <IoSearch className="text-3xl" />
            </div>
        </div>
    );
}
export default Search