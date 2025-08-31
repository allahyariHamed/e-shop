import Popover from '@mui/material/Popover';
import Link from 'next/link';
import { useState } from 'react';
import { HiDotsVertical, HiLogin, HiLogout, HiUser } from 'react-icons/hi';
import { AdminOnlyButtons, ShowOnLogin, ShowOnLogout } from './DynamicLinks';
import { logOut } from '../utils/apiServices';
import { HiHome } from 'react-icons/hi2';

const BasicPopover = () => {
    const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);

    const openPopover = (event: React.MouseEvent<HTMLDivElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const closePopover = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div>
            <div className='text-xl px-2' aria-describedby={id} onClick={openPopover} >
                <HiDotsVertical />
            </div>
            <Popover
                className='mt-4'
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={closePopover}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                disableAutoFocus
                disableRestoreFocus
            >
                <div className='flex bg-violet-200 py-2 px-3 gap-5'>
                    <Link href='/' >
                        <HiHome className='text-2xl' />
                    </Link>

                    <AdminOnlyButtons>
                        <Link href='/admin/home' >
                            <HiUser className='text-2xl' />
                        </Link>
                    </AdminOnlyButtons>

                    <ShowOnLogin>
                        <Link href="/" onClick={() => logOut()}>
                            <HiLogout className='text-2xl' />
                        </Link>
                    </ShowOnLogin>

                    <ShowOnLogout>
                        <Link href="/login" >
                            <HiLogin className='text-2xl' />
                        </Link>
                    </ShowOnLogout>
                </div>
            </Popover>
        </div>
    );
}
export default BasicPopover