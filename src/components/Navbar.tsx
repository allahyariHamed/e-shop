'use client'
import Link from 'next/link';
import BasicPopover from './BasicPopover';
import Avatar from '@mui/material/Avatar';
import { ShowOnLogin, ShowOnLogout } from './DynamicLinks';

const Navbar: React.FC = () => {
    return (
        <nav className="sticky top-0 z-10">
            <div className="flex items-center justify-between shadow bg-violet-200 rounded-md p-2">

                <div className='flex items-center gap-1 text-sm'>
                    <ShowOnLogin>
                        <Avatar alt="Hamed Allahyari" className='shadow' src="#" sx={{ width: 35, height: 35, bgcolor: '#000' }} />
                    </ShowOnLogin>
                    <ShowOnLogout>
                        <Avatar alt="" className='shadow' src="" sx={{ width: 35  , height: 35, bgcolor: '#000' }} />
                    </ShowOnLogout>
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