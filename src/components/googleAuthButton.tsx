'use client'
// import { useRouter } from "next/navigation"
import { FcGoogle } from "react-icons/fc"

type prop = {
    handleGoogleAuth?: () => void
    button?: React.ReactNode[]
}

const GoogleAuthButton = ({ handleGoogleAuth, button }: prop) => {
    return (
        <button type="button" onClick={handleGoogleAuth} className="flex justify-evenly font-bold items-center w-full bg-violet-600 text-white py-2 mt-4 rounded-lg hover:bg-violet-700 transition-colors shadow-md shadow-violet-400 active:shadow-none">
            <div>{`${button} by Google`}</div>
            <div><FcGoogle className=" text-3xl bg-white rounded-lg shadow-md shadow-violet-700" /></div>
        </button>
    )
}

export default GoogleAuthButton