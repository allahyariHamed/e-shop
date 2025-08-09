'use client'
import React, { useState } from 'react';
import Link from 'next/link';
// import { logOut } from '../utils/apiServices';
import { AdminOnlyButtons, ShowOnLogout } from './DynamicLinks';
// import { HiDotsVertical } from "react-icons/hi";
import BasicPopover from './BasicPopover';
import Avatar from '@mui/material/Avatar';

const Navbar: React.FC = () => {
    const [active, setActive] = useState<number>(0)
    const activeStyle = 'shadow-none bg-violet-300'
    const notActiveStyle = 'shadow bg-white'

    return (
        <nav className="w-full p-2">
            <div className="flex items-center justify-between shadow bg-violet-200 rounded-md p-1">

                <div className='flex items-center gap-1 text-sm p-1'>
                    <AdminOnlyButtons>
                        {/* <Link href="/Login"> */}
                            <Avatar alt="Remy Sharp" src="/assets/images.jfif" sx={{ width: 35, height: 35 }} />
                        {/* </Link> */}
                    </AdminOnlyButtons>

                    <ShowOnLogout>
                        <Link href="/Login" className={`navbar-button ${active === 1 ? activeStyle : notActiveStyle}`} onClick={() => setActive(1)}>
                            Login
                        </Link>
                    </ShowOnLogout>

                    {/* <ShowOnLogin>
                        <div onClick={() => logOut()}>
                            <Link href="/" className={`navbar-button ${active === 2 ? activeStyle : notActiveStyle}`} onClick={() => setActive(2)}>
                                Logout
                            </Link>
                        </div>
                    </ShowOnLogin> */}
                </div>

                <div>
                    <Link href="/" className="text-lg font-bold px-3">
                        TaroPud
                    </Link>
                </div>


                <BasicPopover />
            </div>
        </nav>
    );
};
export default Navbar; 