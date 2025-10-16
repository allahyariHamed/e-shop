import Link from 'next/link'
import React, { FC } from 'react'

const NotFound: FC = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='bg-violet-200 rounded shadow p-4 sm:py-10 font-bold w-full text-center sm:w-lg'>
                <div className='text-xl sm:text-3xl'>
                    page not found ! 404
                </div>

                <Link href='/'>
                    <button className='py-1 px-3 text-sm sm:text-lg  bg-white rounded shadow mt-5'>
                        back to home
                    </button>
                </Link>
            </div>

        </div>
    )
}

export default NotFound