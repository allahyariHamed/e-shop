'use client'
import { Dispatch, FC, SetStateAction } from 'react';
import { useDispatch } from 'react-redux';
import { filterBySort } from '../utils/redux/filterSlice';
import { Products } from '../types/types';

type props = {
    products: Products[]
    setOpen: Dispatch<SetStateAction<boolean>>
}

const Sort: FC<props> = ({ products, setOpen }) => {
    const dispatch = useDispatch()
    const buttons = [
        { title: 'Latest' },
        { title: 'Lowest Price' },
        { title: 'Highest Price' },
        { title: 'a - z' },
        { title: 'z - a' }
    ]

    return (
        <div>
            <div className='text-center gap-2 grid'>
                {
                    buttons.map((button, i) => (
                        <div key={i} className='bg-white px-3 py-1 rounded shadow' onClick={() => {
                            dispatch(filterBySort({
                                type: button.title,
                                payload: products
                            }))
                            setOpen(false)
                        }}>
                            {button.title}
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
export default Sort