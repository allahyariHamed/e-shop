'use client'
import { Dispatch, FC, SetStateAction } from 'react';
import { useDispatch } from 'react-redux';
import { filterBySort } from '../utils/redux/filterSlice';
import { Product } from '../types/types';
import { useTranslations } from 'next-intl';

type props = {
    products: Product[]
    setOpen: Dispatch<SetStateAction<boolean>>
}

const Sort: FC<props> = ({ products, setOpen }) => {
    const t = useTranslations('navbar')
    const dispatch = useDispatch()
    const buttons = [
        { title: 'Latest' },
        { title: 'Lowest Price' },
        { title: 'Highest Price' },
        { title: 'A - Z' },
        { title: 'Z - A' }
    ]

    return (
        <div className='text-center gap-2 grid sm:grid-cols-2'>
            {
                buttons.map((button, i) => (
                    <div key={i} className='bg-white py-1 sm:py-2 sm:text-base rounded shadow font-bold' onClick={() => {
                        dispatch(filterBySort({
                            type: button.title,
                            payload: products
                        }))
                        setOpen(false)
                    }}>
                        {t(button.title)}
                    </div>  
                ))
            }
        </div>
    );
}
export default Sort