import { FC } from 'react'
import { FaPhoneFlip } from 'react-icons/fa6'
import { IoMail } from 'react-icons/io5'

const page: FC = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='bg-violet-200 rounded shadow p-2 w-full sm:w-lg'>
                <div className='font-bold text-2xl text-center py-4 sm:py-10 sm:text-4xl'>
                    contact us
                </div>

                <div className='flex items-center justify-center gap-2'>
                    <FaPhoneFlip className='text-lg sm:text-xl'/>
                    <span className='font-bold sm:text-xl'>
                        +989395359588
                    </span>
                </div>

                <div className='flex items-center justify-center gap-2 py-1 sm:pb-10'>
                    <IoMail className='text-xl sm:text-2xl'/>
                    <span className='font-bold sm:text-xl'>
                        allahyarihamed53@gmail.com
                    </span>
                </div>
            </div>
        </div>
    )
}

export default page