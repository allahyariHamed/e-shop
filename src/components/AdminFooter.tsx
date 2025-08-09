import { HiMiniFolderPlus, HiMiniFolder, HiHome } from "react-icons/hi2";

const AdminFooter = () => {
    return (
        <footer className="p-2 w-full fixed bottom-0">
            <div className="px-3 shadow bg-violet-200 rounded-md py-2 flex justify-around">
                <div className="text-xl">
                    <HiHome />
                </div>
                <div className="text-xl">
                    <HiMiniFolderPlus />
                </div>
                <div className="text-xl">
                    <HiMiniFolder />
                </div>
            </div>
        </footer>
    );
};

export default AdminFooter; 