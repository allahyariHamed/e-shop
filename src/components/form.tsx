'use client'
import Link from "next/link";
import React, { SetStateAction, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import GoogleAuthButton from "./googleAuthButton";
import 'react-toastify/ReactToastify.css'
import Spinner from "./spinner";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";
import { useDispatch } from "react-redux";
import { REMOVE_ACTIVE_USER, SET_ACTIVE_USER } from "./redux/authSlice";

interface prop {
    formType?: { text: string, link: string }
    labels?: string[]
    button: React.ReactNode[]
    handleSubmit: (
        e: React.FormEvent<HTMLFormElement>,
        formData: Record<string, string>,
        router: ReturnType<typeof useRouter>,
        setSpinner: React.Dispatch<SetStateAction<boolean>>
    ) => void
    handleGoogleAuth?: () => void
}

const Form = ({ formType, labels, button, handleSubmit, handleGoogleAuth }: prop) => {
    const [formData, setFormData] = useState<Record<string, string>>({});
    const [spinner, setSpinner] = useState<boolean>(false)
    const router = useRouter();
    const dispatch = useDispatch()

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user?.displayName == null || '') {
                const extractedUserName = user?.email?.split('@')[0]
                dispatch(SET_ACTIVE_USER({
                    email: user?.email || '',
                    userName: user?.displayName || extractedUserName,
                    userId: user?.uid
                }))

            } else {
                dispatch(REMOVE_ACTIVE_USER())
            }
        })
    }, [dispatch])

    return (
        <>
            <div className="h-screen flex items-center justify-center p-5">
                <div className="bg-violet-100 p-5 w-full rounded-2xl shadow-md shadow-violet-400 border-b border-b-violet-500">

                    <span className="flex justify-center font-extrabold text-2xl items-center w-full text-violet-600 mb-5 hover:bg-violet-700">
                        {button}
                    </span>

                    <form onSubmit={(e) => handleSubmit(e, formData, router, setSpinner)}>
                        {
                            labels?.map((label, i) => (
                                < div key={i} className="mb-5 relative" >
                                    <input
                                        type={label.toLowerCase().includes('password') ? 'password' : label.toLowerCase() === 'email' ? 'email' : 'text'}
                                        id={label.replace(' ', '')}
                                        name={label.replace(' ', '')}
                                        value={formData[label.replace(' ', '')] || ''}
                                        onChange={(e) => setFormData({ ...formData, [label.replace(' ', '')]: e.target.value })}
                                        className="peer w-full bg-transparent placeholder:text-slate-400 text-violet-900 text-sm border border-violet-500 rounded-lg px-3 py-2 transition duration-300 ease focus:outline-none focus:border-violet-400 shadow shadow-violet-400 focus:shadow-none"
                                        required
                                        placeholder={label}
                                    />
                                    <label htmlFor={label.replace(' ', '')} className="absolute cursor-text bg-violet-200 rounded px-1 left-2.5 top-2.5 text-violet-700 text-sm opacity-0
                                    transition-all transform origin-left peer-focus:-top-3 peer-focus:left-2 peer-focus:text-sm peer-focus:opacity-100 peer-focus:text-violet-700 peer-focus:scale-90
                                    peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm">
                                        {label}
                                    </label>
                                </div>
                            ))
                        }

                        {
                            button && <button type="submit" className="flex justify-evenly font-bold items-center w-full bg-violet-600 text-white py-2 mt-4 rounded-lg hover:bg-violet-700 transition-colors shadow-md shadow-violet-400 active:shadow-none">
                                {!spinner ? button : <Spinner />}
                            </button>
                        }

                        {button.includes('Login') && <GoogleAuthButton handleGoogleAuth={handleGoogleAuth} button={button} />}
                    </form>

                    <p className="mt-4 text-center text-violet-900">
                        {formType?.text}{' '}
                        <Link href="/login" className="text-violet-500 hover:text-violet-700">
                            {formType?.link}
                        </Link>
                    </p>

                </div >
            </div >
        </>
    );
};
export default Form; 