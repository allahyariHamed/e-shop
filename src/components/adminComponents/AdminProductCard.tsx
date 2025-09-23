import Link from "next/link"
import { SingleProductProps } from "../../types/types."
import { HiPencil } from "react-icons/hi"
import { HiArchiveBoxXMark } from "react-icons/hi2"
import { Confirm } from "notiflix"
import { deleteProduct } from "../../utils/apiServices"
import Base64Image from "../Base64Image"

const AdminProductCard = ({ id, image, category, name, description, price, brand, createTime }: SingleProductProps) => {
    return (
        <div className="border border-violet-300 shadow rounded">
            <div>
                <Base64Image src={image} name={name} />
            </div>

            <div className="px-2 py-1">
                <div>
                    <div className="font-bold text-lg">{brand}</div>
                    <div className="text-gray-600 text-sm">{description}</div>
                </div>

                <div className="text-gray-600 text-sm">
                    {category}
                </div>

                <div className="text-gray-600 text-xs">
                    {createTime}
                </div>

                <div className="text-gray-700 flex justify-between text-sm">

                    <div className="font-bold">
                        {price}
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