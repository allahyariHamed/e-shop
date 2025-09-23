'use client'
import Link from 'next/link';
import BasicPopover from './BasicPopover';
import ClientAvatar from './ClientAvatar';

const Navbar: React.FC = () => {
    return (
        <nav className="sticky top-0 z-10">
            <div className="flex items-center justify-between shadow bg-violet-200 rounded-md px-2">

                <ClientAvatar />

                <Link href="/" className="text-lg font-bold px-3">
                    TaroPud
                </Link>

                <BasicPopover />
            </div>
        </nav>
    );
};
export default Navbar;  