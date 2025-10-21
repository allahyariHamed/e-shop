'use client'
import { createUserWithEmailAndPassword, GoogleAuthProvider, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { toast } from "react-toastify"
import { auth, DB } from "../firebase/config"
import { addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, setDoc, Timestamp } from "firebase/firestore"
import { Product } from "../types/types"
import { storeProducts } from "./redux/productSlice"
import React from "react"
import { Dispatch, UnknownAction } from "@reduxjs/toolkit"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"

export const cart = JSON.parse(localStorage.getItem('cartItems') ?? '[]')

export const register = (e: React.FormEvent<HTMLFormElement>, formData: Record<string, string>, router: AppRouterInstance, prevURL: string) => {
    e.preventDefault()
    const { email, password, confirm_password } = formData
    console.log(formData)
    // console.log(password)
    // console.log(confirmpassword)

    if (password !== confirm_password) {
        toast.error("password is not match with confirm password!", { theme: 'colored' })
        return
    }
    createUserWithEmailAndPassword(auth, email, password).then(() => {
        toast.success('user created!', { theme: 'colored' })
        router.push(prevURL)

    }).catch((error) => {
        toast.error(error.message, { theme: 'colored' })
    });
}

export const login = (e: React.FormEvent<HTMLFormElement>, formData: Record<string, string>, router: AppRouterInstance, prevURL: string) => {
    e.preventDefault()
    console.log(formData)
    const { Email, Password } = formData
    signInWithEmailAndPassword(auth, Email, Password).then(() => {
        toast.success('user logged in', { theme: 'colored' })
        router.push(prevURL)
    }).catch((error) => {
        toast.error(error.message, { theme: 'colored' })
    });
}

export const loginByGoogle = (router: AppRouterInstance, prevURL: string) => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then(() => {
        toast.success('logged in by google', { theme: 'colored' })
        router.push(prevURL)
    }).catch((error) => {
        toast.error(error.message, { theme: 'colored' })
    })
}

export const logOut = () => {
    signOut(auth).then(() => {
        toast.success('user logged out', { theme: 'colored' })
    }).catch((error) => {
        toast.error(error, { theme: 'colored' })
    });
}

export const resetPassword = (e: React.FormEvent<HTMLFormElement>, formData: Record<string, string>) => {
    e.preventDefault()
    const { Email } = formData
    sendPasswordResetEmail(auth, Email).then(() => {
        toast.success('check your email for the link!', { theme: 'colored' })
    }).catch((error) => {
        toast.error(error.message, { theme: 'colored' })
    });
}

export const addProduct = async (e: React.FormEvent<HTMLFormElement>, formData: Record<string, string>) => {
    e.preventDefault()
    const { product_name, product_price, product_brand, product_description, product_category, product_image } = formData
    try {
        await addDoc(collection(DB, 'products'), {
            name: product_name,
            price: product_price,
            brand: product_brand,
            description: product_description,
            category: product_category,
            image: product_image,
            createTime: Timestamp.now().toDate()
        })
        // router.push('/admin/allProducts')
        toast.success('document added!', { theme: 'colored' })

    } catch (err) {
        if (err instanceof Error) {
            toast.error(err.message, { theme: 'colored' });
        } else {
            toast.error(String(err), { theme: 'colored' });
        }
    }
}

export const getProducts = async (setProducts: React.Dispatch<React.SetStateAction<Product[]>>, dispatch: Dispatch<UnknownAction>) => {
    try {
        const productRef = collection(DB, 'products')
        const q = query(productRef, orderBy('createTime', 'desc'))

        onSnapshot(q, (snapshot) => {
            const allProducts = snapshot.docs.map((doc) => {

                const data = doc.data();
                return {
                    id: doc.id,
                    image: data.image ?? "",
                    category: data.category ?? "",
                    name: data.name ?? "",
                    description: data.description ?? "",
                    price: data.price ?? "",
                    brand: data.brand ?? "",
                    createTime: data.createTime.toDate().toISOString().split('T')[0]
                };
            })
            setProducts(allProducts)
            dispatch(storeProducts({
                products: allProducts
            }))
        })
    } catch (err) {

        if (err instanceof Error) {
            toast.error(err.message, { theme: 'colored' });
        } else {
            toast.error(String(err), { theme: 'colored' });
        }
    }
}

export const deleteProduct = async (id: string) => {

    try {
        await deleteDoc(doc(DB, "products", id));
        toast.success('document deleted!', { theme: 'colored' })

    } catch (err) {
        if (err instanceof Error) {
            toast.error(err.message, { theme: 'colored' });
        } else {
            toast.error(String(err), { theme: 'colored' });
        }
    }
}

export const editProduct = async (e: React.FormEvent<HTMLFormElement>, router: AppRouterInstance, id: string, formData: Record<string, string>) => {
    e.preventDefault()
    const { name, price, brand, description, category, image } = formData
    try {
        await setDoc(doc(DB, "products", id), {
            name,
            price,
            brand,
            description,
            category,
            image,
            createTime: Timestamp.now().toDate()
        });
        toast.success('document edited!', { theme: 'colored' })
        router.push('/admin/allProducts')

    } catch (err) {
        if (err instanceof Error) {
            toast.error(err.message, { theme: 'colored' });
        } else {
            toast.error(String(err), { theme: 'colored' });
        }
    }
}

export const checkVPN = async () => {
    try {
        const res = await fetch("https://ipwho.is/");
        const data = await res.json();
        if (data.country === 'Iran') {
            // alert("⚠️ Please connect to VPN to use this app !");
            toast.error('Please connect to VPN to use this app !', { position: "top-center", theme: 'colored', autoClose: 4000 })
        }
    } catch {
        // alert("⚠️ Please check your connection !");
        toast.error('Please check your connection !', { position: "top-center", theme: 'colored', autoClose: 4000 })
    }
}