import Link from "next/link"
import { HiPencil } from "react-icons/hi"
import { HiArchiveBoxXMark } from "react-icons/hi2"
import { Confirm } from "notiflix"
import { deleteProduct } from "../../utils/apiServices"
import Base64Image from "../Base64Image"
import { Product } from "@/src/types/types"

const AdminProductCard = ({ id, image, category, name, description, price, brand, createTime }: Product) => {
    return (
        <div className="bg-violet-200 shadow rounded">
            <div className="p-1">
                <Base64Image src={image} name={name} />
            </div>

            <div className="px-2">
                <div>
                    <div className="font-bold text-lg py-1 truncate">{name}</div>
                    <div className="text-sm">{brand}</div>
                </div>

                <div className="text-sm">
                    <div>{category}</div>
                    <div>{description}</div>
                </div>

                <div className="text-xs">
                    {createTime}
                </div>

                <div className="flex justify-between text-sm py-1">

                    <div className="font-bold">
                        {price} T
                    </div>

                    <div className="flex gap-2">
                        <Link href={`/admin/addProduct/${id}`}>
                            <HiPencil className="text-lg" />
                        </Link>

                        <div onClick={() => confirmDelete(id)}>
                            <HiArchiveBoxXMark className="text-lg text-red-600" />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )

    function confirmDelete(id: string) {
        Confirm.show(
            'delete product',
            'Are you sure to delete this product?',
            'delete',
            'cancel',
            function okCb() {
                deleteProduct(id)
            },
            function cancelCb() {
            },
            {
                width: '320px',
                borderRadius: '10px',
                okButtonBackground: 'red',
                titleColor: 'red'
            },
        );
    }
}
export default AdminProductCard