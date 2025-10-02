import React, { Dispatch, SetStateAction } from "react";
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
    slug?: Record<string, string>
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

export interface CategoryProps {
    formData: Record<string, string>,
    setFormData: React.Dispatch<React.SetStateAction<Record<string, string>>>,
    category: string
    setCategory: React.Dispatch<React.SetStateAction<string>>,
}

export type Product = {
    id: string,
    image: string,
    category: string,
    name: string,
    description: string,
    price: string,
    brand: string,
    createTime: string,
}

// export interface AdminSingleProduct {
//     id: string,
//     image: string,
//     category: string,
//     name: string,
//     description: string,
//     price: string,
//     brand: string,
//     createTime: string,
// }

export type productInitialState = {
    products: {
        id: string,
        image: string,
        category: string,
        name: string,
        description: string,
        price: string,
        brand: string,
        createTime: string,
    }[]
    minPrice: number
    maxPrice: number
}

export interface ClientProductCard {
    layout: string
    image: string
    name: string
    brand: string
    price: string
    product: Product
}

export type FooterProps = {
    layout: string
    setLayout: Dispatch<SetStateAction<'list' | 'grid'>>
}

export type filteredProducts = {
    filteredProducts: {
        id: string,
        image: string,
        category: string,
        name: string,
        description: string,
        price: string,
        brand: string,
        createTime: string,
    }[],
    type: string
}