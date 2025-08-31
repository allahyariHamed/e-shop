import React from "react";
import { useRouter } from "next/navigation";

export interface AuthState {
    LoggedIn: boolean;
    email: string | null;
    userName: string | null;
    userId: string | null;
}

export interface FormProps {
    endOfTheFormTitle?: { text: string, link: string }
    button?: React.ReactNode[]
    handleSubmit: (
        e: React.FormEvent<HTMLFormElement>,
        formData: Record<string, string>,
        router: ReturnType<typeof useRouter>,
    ) => void
    handleGoogleAuth?: () => void,
    inputs: { label: string; type: string; }[],
    addProductForm?: boolean
}

export interface GoogleAuth {
    handleGoogleAuth?: () => void
    button?: React.ReactNode[]
}

export interface DynamicRoutes {
    children: React.ReactNode
}

export interface UploadImageProps {
    formData: Record<string, string>,
    setFormData: React.Dispatch<React.SetStateAction<Record<string, string>>>
    focus: string
    SetFocus: React.Dispatch<React.SetStateAction<string>>
}

export interface SelectCategoryProps {
    formData: Record<string, string>,
    setFormData: React.Dispatch<React.SetStateAction<Record<string, string>>>,
    category: string
    setCategory: React.Dispatch<React.SetStateAction<string>>,
}

export type Products = {
    id: string,
    image: string,
    category: string,
    name: string,
    description: string,
    price: string,
    brand: string,
    createTime: string,
}[]

export interface SingleProductProps {
    id: string,
    image: string,
    category: string,
    name: string,
    description: string,
    price: string,
    brand: string,
    createTime: string,
}