import clsx from 'clsx'
import Image from 'next/image'
import { FC } from 'react'
import { ClientProductCard } from '../types/types'
import { useDispatch } from 'react-redux'
import { addToCart } from '../utils/redux/cartSlice'

const ProductCard: FC<ClientProductCard> = ({ layout, image, name, brand, price, product }) => {
    const dispatch = useDispatch()
    const storedCartItems = localStorage.getItem('cartItems')

    return (
        <div className={clsx("bg-violet-200 shadow rounded p-1 md:p-2",
            layout === 'list' && 'flex '
        )}>
            <div className={clsx('',
                layout === 'list' && 'w-2/5'
            )}>
                <Image alt='#' src={image} height='400' width='400' className='shadow rounded h-full w-full aspect-[4/5]' />
            </div>

            <div className={clsx('',
                layout === 'list' && 'w-3/5 flex flex-col justify-between h-full'
            )}>

                <div className={clsx('p-1 sm:pl-1',
                    layout === 'list' && 'px-2'
                )}>
                    <div className="font-bold text-sm sm:text-base py-1 truncate">{name}</div>
                    <div className="text-sm sm:text-base lg:text-sm">{brand}</div>
                </div>

                <div className="flex justify-between items-baseline p-1">

                    <div className={clsx("font-bold text-sm sm:text-base",
                        layout === 'list' && 'px-1'
                    )}>
                        {price} T
                    </div>

                    <div className="bg-black text-white text-xs font-bold px-2 py-1 rounded shadow sm:text-sm lg:text-sm hover:cursor-pointer" onClick={() => dispatch(addToCart({ product, storedCartItems }))}>
                        Buy
                    </div>

                </div>

            </div>
        </div>
    )
}

export default ProductCard