'use client'
import React from "react"
import { FcGoogle } from "react-icons/fc"
import { GoogleAuth } from "../types/types."

const GoogleAuthButton: React.FC<GoogleAuth> = ({ handleGoogleAuth, button }) => {
    return (
        <button type="button" onClick={handleGoogleAuth} className="flex button gap-2 font-bold items-center justify-center p-1">
            <div><FcGoogle className="text-2xl bg-transparent" /></div>
            <div className="text-xs">{`${button} by Google`}</div>
        </button>
    )
}

export default GoogleAuthButton