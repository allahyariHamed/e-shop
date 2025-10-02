'use client'
import { createUserWithEmailAndPassword, GoogleAuthProvider, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { toast } from "react-toastify"
import { auth, DB } from "../firebase/config"
import { useRouter } from "next/navigation"
import { addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, setDoc, Timestamp } from "firebase/firestore"
import { Products } from "../types/types"
import { storeProducts } from "./redux/productSlice"
import React from "react"
import { Dispatch, UnknownAction } from "@reduxjs/toolkit"

export const register = (e: React.FormEvent<HTMLFormElement>, formData: Record<string, string>, router: ReturnType<typeof useRouter>) => {
    e.preventDefault()
    const { email, password, confirmpassword } = formData
    if (password !== confirmpassword) {
        toast.error("password is not match with confirm password!")
        return
    }
    createUserWithEmailAndPassword(auth, email, password).then(() => {
        toast.success('user created!')
        router.push('/')

    }).catch((error) => {
        toast.error(error.message)
    });
}

export const login = (e: React.FormEvent<HTMLFormElement>, formData: Record<string, string>, router: ReturnType<typeof useRouter>) => {
    e.preventDefault()
    const { Email, Password } = formData
    signInWithEmailAndPassword(auth, Email, Password).then(() => {
        toast.success('user logged in')
        router.push('/')
    }).catch((error) => {
        toast.error(error.message)
    });
}

export const loginByGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then(() => {
        toast.success('logged in by google')
        console.log(auth)
        // router.push('/')
    }).catch((error) => {
        toast.error(error.message)
    })
}

export const logOut = () => {
    signOut(auth).then(() => {
        toast.success('user logged out')
    }).catch((error) => {
        toast.error(error)
    });
}

export const resetPassword = (e: React.FormEvent<HTMLFormElement>, formData: Record<string, string>, router: ReturnType<typeof useRouter>) => {
    e.preventDefault()
    const { Email } = formData
    sendPasswordResetEmail(auth, Email).then(() => {
        toast.success('check your email for the link!')
        router.push('/')
    }).catch((error) => {
        toast.error(error.message)
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
        toast.success('document added!')

    } catch (err) {
        if (err instanceof Error) {
            toast.error(err.message);
        } else {
            toast.error(String(err));
        }
    }
}

export const getProducts = async (setProducts: React.Dispatch<React.SetStateAction<Products[]>>, dispatch: Dispatch<UnknownAction>) => {
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
            toast.error(err.message);
        } else {
            toast.error(String(err));
        }
    }
}

export const deleteProduct = async (id: string) => {

    try {
        await deleteDoc(doc(DB, "products", id));
        toast.success('document deleted!')

    } catch (err) {
        if (err instanceof Error) {
            toast.error(err.message);
        } else {
            toast.error(String(err));
        }
    }
}

export const editProduct = async (e: React.FormEvent<HTMLFormElement>, router: ReturnType<typeof useRouter>, id: string, formData: Record<string, string>) => {
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
        toast.success('document edited!')
        router.push('/admin/allProducts')

    } catch (err) {
        if (err instanceof Error) {
            toast.error(err.message);
        } else {
            toast.error(String(err));
        }
    }
}

export const checkVPN = async () => {
    try {
        const res = await fetch("https://ipwho.is/");
        const data = await res.json();
        if (data.country === 'Iran') {
            alert("⚠️ Please connect to VPN to use this app !");
        }
    } catch {
        alert("⚠️ Please check your connection !");
    }
}