"use client"
import { FC, useState } from 'react'
import { US } from 'country-flag-icons/react/3x2'
import { IR } from 'country-flag-icons/react/3x2'
import Link from 'next/link';
import { GrLanguage } from "react-icons/gr";
import { AnimatePresence, motion } from "framer-motion"

const SelectLanguage: FC = () => {
    const [dropdown, setDropdown] = useState<boolean>(false)
    const delay = () => {
        setTimeout(() => { setDropdown(false) }, 150);
    }

    return (
        <div className="flex justify-center fixed bottom-10 left-10">
            <motion.button whileHover={{ scale: 1.5 }} onClick={() => setDropdown(!dropdown)} onBlur={delay} id="dropdown-button" className="relative rounded-full p-2 hover:cursor-pointer bg-violet-200 shadow">
                <GrLanguage className='text-3xl' />
            </motion.button>

            <AnimatePresence>
                {
                    dropdown &&
                    <div className="absolute rounded-md z-10 flex gap-3 left-15 top-1 bg-violet-200 p-2">
                        <motion.div whileHover={{ scale: 1.4 }} className='w-10 p-1' initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }}>
                            <Link href='/en' className="rounded-md w-full text-sm active:border-yellow-500 cursor-pointer" role="menuitem">
                                <US title="United States" />
                            </Link>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.4 }} className='w-10 p-1' initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }}>
                            <Link href='/fa' className="rounded-md w-full text-sm active:border-yellow-500 cursor-pointer" role="menuitem">
                                <IR title="Iran" />
                            </Link>
                        </motion.div>
                    </div>
                }
            </AnimatePresence>
        </div >
    )
}
export default SelectLanguage