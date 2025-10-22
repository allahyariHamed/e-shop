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
        <>
            <motion.button whileHover={{ scale: 1.5 }} onClick={() => setDropdown(!dropdown)} onBlur={delay} id="dropdown-button" className="relative rounded-full md:p-2  hover:cursor-pointer bg-violet-200 md:shadow">
                <GrLanguage className='md:text-3xl text-2xl' />
            </motion.button>

            <AnimatePresence>
                {
                    dropdown &&
                    <div className="absolute rounded-md z-10 flex gap-3 md:left-15 md:top-1 top-16 bg-violet-200 p-2">
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
        </>
    )
}
export default SelectLanguage