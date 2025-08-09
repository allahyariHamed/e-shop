'use client'
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import GoogleAuthButton from "./GoogleAuthButton";
import 'react-toastify/ReactToastify.css'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";
import { useDispatch } from "react-redux";
import { REMOVE_ACTIVE_USER, SET_ACTIVE_USER } from "../utils/redux/authSlice";
import { FormProps } from "../types/types.";

const Form: React.FC<FormProps> = ({ endOfTheFormTitle, button, handleSubmit, handleGoogleAuth, inputs }) => {
    const [formData, setFormData] = useState<Record<string, string>>({});
    const [focus, SetFocus] = useState<string>('')
    const [extractedUserName, SetExtractedUserName] = useState<string>()
    const router = useRouter();
    const dispatch = useDispatch()


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {


                if (user?.displayName == null || '') {
                    SetExtractedUserName(user?.email?.split('@')[0])
                }
                dispatch(SET_ACTIVE_USER({
                    email: user?.email || '',
                    userName: user?.displayName || extractedUserName,
                    userId: user?.uid
                }))
            } else {
                dispatch(REMOVE_ACTIVE_USER())
            }
        })
    }, [dispatch, extractedUserName])


    return (
        <div className="p-3 w-full rounded-lg shadow bg-violet-200">

            <div className="font-extrabold text-2xl text-center">
                {button}
            </div>

            <form onSubmit={(e) => handleSubmit?.(e, formData, router)} className="my-5">
                {
                    inputs?.map((input, i) => (
                        < div key={i} className="relative my-5" >
                            <input
                                // type={label.toLowerCase().includes('password') ? 'password' : label.toLowerCase() === 'email' ? 'email' : 'text'}
                                type={input.type}
                                id={input.label}
                                name={input.label}
                                value={formData[input.label] || ''}
                                onChange={(e) => setFormData({ ...formData, [input.label]: e.target.value })}
                                className="peer w-full bg-white placeholder:text-slate-500 text-black text-xs rounded px-3 py-2 transition duration-300 ease focus:outline-none shadow focus:shadow-none"
                                required
                                onFocus={() => SetFocus(input.label)}
                                onBlur={() => SetFocus('')}
                                placeholder={focus === input.label ? '' : input.label}
                            />
                            <label htmlFor={input.label} className="label">
                                {input.label}
                            </label>
                        </div>
                    ))
                }
                <div className="flex gap-2">
                    {
                        button && <button type="submit" className="font-bold button">
                            {button}
                        </button>
                    }
                    {
                        button?.includes('Login') && <GoogleAuthButton handleGoogleAuth={handleGoogleAuth} button={button} />
                    }
                </div>
            </form>

            <p className="text-center text-sm">
                <span>
                    {endOfTheFormTitle?.text}{' '}
                </span>

                <Link href={`/${endOfTheFormTitle?.link}`} className="text-violet-600 hover:text-violet-400 font-bold">
                    {endOfTheFormTitle?.link}
                </Link>
            </p>

        </div >
    );
};
export default Form; 