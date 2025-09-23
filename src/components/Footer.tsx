import { FC } from "react";
import { HiSortDescending, HiViewGrid } from "react-icons/hi"
import { FaThList } from "react-icons/fa";
import { FooterProps } from "../types/types.";
import TransitionsModal from "./SearchModal";

const Footer: FC<FooterProps> = ({ layout, setLayout }) => {

    return (
        <div className="sticky bottom-0 shadow bg-violet-200 py-1 rounded-md flex justify-around items-center">
            {
                layout === 'grid' ? <div onClick={() => setLayout('list')} className="text-3xl">
                    <HiViewGrid />
                </div> : null
            }
            {
                layout === 'list' ? <div onClick={() => setLayout('grid')} className="text-2xl">
                    <FaThList />
                </div> : null
            }
            <div>
                <TransitionsModal />
            </div>

            <div className="text-3xl">
                <HiSortDescending />
            </div>
        </div>
    )
}

export default Footer