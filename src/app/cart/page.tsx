'use client'
import { calculateTotalAmount, calculateTotalQuantity, clearCart, decrease, increase, removeFromCart, saveUrl, selectCartItem, selectTotalAmount, selectTotalQuantity } from "@/src/utils/redux/cartSlice"
import Image from "next/image"
import { HiArchiveBoxXMark } from "react-icons/hi2"
import { useDispatch, useSelector } from "react-redux"
import { FaSquarePlus, FaSquareMinus } from "react-icons/fa6";
import { FC, useEffect } from "react"
import { useRouter } from "next/navigation"
import { selectLoggedIn } from "@/src/utils/redux/authSlice"

const Cart: FC = () => {
    const cartItems = useSelector(selectCartItem)
    const totalQuantity = useSelector(selectTotalQuantity)
    const totalAmount = useSelector(selectTotalAmount)
    const login = useSelector(selectLoggedIn)
    const dispatch = useDispatch()
    const router = useRouter()
    const url = window.location.href

    useEffect(() => {
        dispatch(calculateTotalAmount())
        dispatch(calculateTotalQuantity())
    }, [dispatch, cartItems])

    if (cartItems.length === 0) return <div className="flex justify-center items-center h-[40vh] font-bold">Your cart is empty !</div>;

    return (
        <>
            <div className="py-2 bg-white md:py-3">
                <div className="font-bold text-2xl md:text-3xl text-center py-2 bg-violet-200 rounded shadow md:max-w-3xl lg:max-w-full mx-auto">
                    shopping cart
                </div>
            </div>

            <div className="gap-2 grid relative xs:grid-cols-2 sm:grid-cols-2 md:gap-3 lg:grid-cols-3  mx-auto md:max-w-3xl lg:max-w-full">

                {
                    cartItems.map((element, i) => (
                        <div key={i} className="flex bg-violet-200 rounded items-center p-1 md:p-2 shadow">
                            <Image src={element.image} alt="" className="h-full shadow rounded aspect-[4/5] w-2/5" width={200} height={200} />
                            <div className="w-3/5 px-2 flex flex-col justify-around h-full">
                                <div className="font-bold">{element.name}</div>
                                <div className="flex justify-between">
                                    <div>
                                        price :
                                    </div>
                                    <div className="font-bold">
                                        {element.price}
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <div>
                                        quantity :
                                    </div>
                                    <div className="flex items-center font-bold gap-2">
                                        <FaSquareMinus className="text-rose-600 sm:text-xl hover:cursor-pointer" onClick={() => { dispatch(decrease(element)) }} />
                                        {element.totalQuantity}
                                        <FaSquarePlus className="text-emerald-600 sm:text-xl hover:cursor-pointer" onClick={() => { dispatch(increase(element)) }} />
                                    </div>
                                </div>

                                <div className="flex justify-between">
                                    <div>
                                        total price :
                                    </div>
                                    <div className="font-bold">
                                        {Number(element.totalQuantity) * Number(element.price)}
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <div>
                                        actions :
                                    </div>
                                    <div onClick={() => dispatch(removeFromCart(element))}>
                                        <HiArchiveBoxXMark className="text-xl text-rose-600 sm:text-2xl hover:cursor-pointer" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
                <div className="fixed bottom-0 left-0 w-full p-2 bg-white">
                    <div className="font-bold text-sm sm:text-base grid lg:w-1/2 mx-auto grid-cols-2 gap-2 sm:grid-cols-4 text-center md:max-w-3xl lg:max-w-full">
                        <div className="shadow py-1 bg-violet-200 rounded sm:py-2">
                            total : {totalAmount} $
                        </div>
                        <div className="shadow py-1 bg-violet-200 rounded sm:py-2">
                            quantity : {totalQuantity}
                        </div>
                        <button type="button" onClick={checkOut} className="bg-violet-200 font-bold shadow py-1 rounded sm:mb-0 sm:py-2 hover:cursor-pointer">check out</button>
                        <button type="button" onClick={() => dispatch(clearCart())} className="bg-rose-600 font-bold py-1 shadow rounded sm:py-2 hover:cursor-pointer">clear</button>
                    </div>
                </div>
            </div>
        </>
    )

    function checkOut() {
        if (login) {
            router.push('/checkOutDetails')
        } else {
            dispatch(saveUrl(url))
            router.push('/login')
        }
    }
}

export default Cart