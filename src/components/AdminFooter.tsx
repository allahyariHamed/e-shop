import Link from "next/link";
import { HiMiniFolderPlus, HiMiniFolder, HiHome } from "react-icons/hi2";

const AdminFooter = () => {
    return (
        <footer className="py-1 w-full sticky bottom-0 bg-white">
            <div className="px-3 shadow bg-violet-200 rounded-md py-2 flex justify-around">
                <Link href={'/admin/allProducts'}>
                    <div className="text-xl">
                        <HiMiniFolder />
                    </div>
                </Link>

                <Link href={'/admin/home'}>
                    <div className="text-xl">
                        <HiMiniFolderPlus />
                    </div>
                </Link>

                <Link href='/'>
                    <div className="text-xl">
                        <HiHome />
                    </div>
                </Link>
            </div>
        </footer>
    );
};

export default AdminFooter;