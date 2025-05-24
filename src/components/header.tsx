import { ShoppingCartIcon, UserCircleIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const Header = () => {

    return (
        <nav className="bg-white shadow shadow-violet-400 border-b border-violet-500 rounded-b-3xl">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-12">
                    <div>
                        <Link href="/" className="text-xl font-bold text-violet-900">
                            TaroPud
                        </Link>
                    </div>

                    <div className='flex items-center space-x-4'>

                        <Link href="/profile" className="text-violet-900 hover:text-violet-500">
                            <MagnifyingGlassIcon className="h-6 w-6" />
                        </Link>

                        <Link href="/cart" className="text-violet-900 hover:text-violet-500 relative">
                            <ShoppingCartIcon className="h-6 w-6" />
                        </Link>

                        <Link href="/profile" className="text-violet-900 hover:text-violet-500">
                            <UserCircleIcon className="h-7 w-7" />
                        </Link>
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Header; 