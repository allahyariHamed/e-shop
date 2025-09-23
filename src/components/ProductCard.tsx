import clsx from 'clsx'
import Image from 'next/image'
import { FC } from 'react'
import { ClientProductCard } from '../types/types.'

const ProductCard: FC<ClientProductCard> = ({ layout, image, name, brand, price }) => {
    return (
        <div className={clsx("border border-violet-300 shadow rounded p-1",
            layout === 'list' && 'flex '
        )}>
            <div className={clsx('',
                layout === 'list' && 'w-2/5'
            )}>
                <Image alt='#' src={image} height='200' width='200' className='w-full h-full aspect-square rounded' />
            </div>

            <div className={clsx('',
                layout === 'list' && 'w-3/5 flex flex-col justify-between h-full'
            )}>

                <div className={clsx('p-1',
                    layout === 'list' && 'px-2'
                )}>
                    <div className="font-bold text-lg">{name}</div>
                    <div className="text-gray-500 text-sm">{brand}</div>
                </div>

                <div className="flex justify-between items-baseline p-1">

                    <div className={clsx("font-bold text-sm",
                        layout === 'list' && 'px-1'
                    )}>
                        {price} $
                    </div>

                    <div className="bg-violet-200 text-sm font-bold px-2 py-1 rounded shadow">
                        Buy
                    </div>

                </div>

            </div>
        </div>
    )
}

export default ProductCard