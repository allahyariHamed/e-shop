'use client'
import React from "react"
import { FcGoogle } from "react-icons/fc"
import { GoogleAuth } from "../types/types"
import { useRouter } from "next/navigation"
import { useSelector } from "react-redux"
import { selectPrevURL } from "../utils/redux/cartSlice"
import { loginByGoogle } from "../utils/apiServices"

const GoogleAuthButton: React.FC<GoogleAuth> = ({ button }) => {
    const router = useRouter();
    const prevURL = useSelector(selectPrevURL)

    return (
        <button type="button" onClick={() => loginByGoogle(router, prevURL)} className="flex button gap-2 font-bold items-center justify-center py-1 px-3 hover:cursor-pointer">
            <div><FcGoogle className="text-2xl bg-transparent sm:text-2xl" /></div>
            <div className="text-xs sm:text-base">{`${button} by Google`}</div>
        </button>
    )
}

export default GoogleAuthButton