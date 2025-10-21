'use client'
import React, { useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import GoogleAuthButton from "./GoogleAuthButton";
import 'react-toastify/ReactToastify.css'
import { FormProps, CategoryProps, UploadImageProps } from "../types/types";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { fileToBase64 } from "../utils/base64Converter";
import { useSelector } from "react-redux";
import { selectPrevURL } from "../utils/redux/cartSlice";
import { useTranslations } from "next-intl";
// import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

const Form: React.FC<FormProps> = ({ endOfTheFormTitle, button, handleSubmit, inputs, addProductForm }) => {
    const params = useParams();
    const { locale } = params
    const t = useTranslations('navbar')
    const [formData, setFormData] = useState<Record<string, string>>({});
    const [focus, SetFocus] = useState<string>('')
    const [category, setCategory] = useState<string>('')
    const router = useRouter();
    const prevURL = useSelector(selectPrevURL)

    return (
        <div className="p-3 w-full rounded-lg shadow bg-violet-200 sm:w-md">

            <div className="font-extrabold text-2xl text-center sm:text-3xl py-5">
                {t(button)}
            </div>

            <form onSubmit={(e) => { handleSubmit?.(e, formData, router, prevURL); setCategory(''); setFormData({}) }} className="my-5">

                {
                    inputs?.map((input, i) => (
                        < div key={i} className="relative my-5" >
                            <input
                                type={input.type}
                                id={input.label}
                                name={input.label}
                                value={formData[input.label.replace(' ', '_')] ?? ''}
                                onChange={(e) => setFormData({ ...formData, [input.label.replace(' ', '_')]: e.target.value })}
                                className="peer w-full bg-white placeholder:text-slate-500 text-black text-xs rounded px-3 py-2  sm:text-base transition duration-300 ease focus:outline-none shadow focus:shadow-none"
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

                {addProductForm && <SelectCategory formData={formData} setFormData={setFormData} category={category} setCategory={setCategory} />}

                {addProductForm && <UploadImage formData={formData} setFormData={setFormData} SetFocus={SetFocus} focus={focus} />}

                <div className="flex gap-2">
                    {
                        button && <button type="submit" className="font-bold button sm:text-lg hover:cursor-pointer">
                            {t(button)}
                        </button>
                    }
                    {
                        button?.includes('login') && <GoogleAuthButton />
                    }
                </div>
            </form>

            <p className="text-center text-sm sm:text-base">
                <span>
                    {endOfTheFormTitle?.text}{' '}
                </span>

                <Link href={`/${locale}/${endOfTheFormTitle?.link}`} className="text-violet-600 hover:text-violet-400 font-bold">
                    {endOfTheFormTitle?.link}
                </Link>
            </p>

        </div >
    );
};

function SelectCategory({ formData, setFormData, category, setCategory }: CategoryProps) {

    const handleChange = (event: SelectChangeEvent) => {
        setCategory(event.target.value as string)
        setFormData({ ...formData, ['product_category']: event.target.value })
    };

    return (
        <Box>
            <FormControl fullWidth size="small">
                <InputLabel id="select-label" sx={{ fontSize: 14 }}>category</InputLabel>
                <Select
                    labelId="select-label"
                    id="demo-simple-select"
                    value={category}
                    label="product category"
                    onChange={handleChange}
                    className="mb-5 bg-white"
                >
                    <MenuItem value={'spring'}>spring</MenuItem>
                    <MenuItem value={'summer'}>summer</MenuItem>
                    <MenuItem value={'fall'}>fall</MenuItem>
                    <MenuItem value={'winter'}>winter</MenuItem>
                    <MenuItem value={'fashion'}>fashion</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}

function UploadImage({ formData, setFormData }: UploadImageProps) {
    const input = { label: 'product image', type: 'file' }

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const event = e.target.files

        if (event && event[0]) {
            const file = event[0]
            if (file) {
                const base64 = await fileToBase64(file)
                setFormData({ ...formData, [input.label.replace(' ', '_')]: base64 })
            }
        }
    }

    return (
        <div className="relative mb-5" >
            <input
                accept="image/*"
                type='file'
                id='product image'
                name='product image'
                onChange={handleFileChange}
                className="peer w-full bg-white placeholder:text-slate-500 text-black text-xs rounded px-3 py-2 transition duration-300 ease focus:outline-none shadow focus:shadow-none"
                required
            />

            <label htmlFor={input.label} className="label">
                {input.label}
            </label>
        </div>
    );
}

// function redirect(prevURL: string, router: AppRouterInstance) {
//     if (prevURL.includes('cart')) {
//         router.push('/cart')
//     } else {
//         router.push('/')
//     }
// }

export default Form; 