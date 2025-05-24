import { createUserWithEmailAndPassword, GoogleAuthProvider, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { toast } from "react-toastify"
import { auth } from "../firebase/config"
import { useRouter } from "next/navigation"
import { SetStateAction } from "react"

export const register = (e: React.FormEvent<HTMLFormElement>, formData: Record<string, string>, router: ReturnType<typeof useRouter>, setSpinner: React.Dispatch<SetStateAction<boolean>>) => {
    e.preventDefault()
    const { Email, Password, ConfirmPassword } = formData
    if (Password !== ConfirmPassword) {
        toast.error("password is not match with confirm password!")
        return
    }
    createUserWithEmailAndPassword(auth, Email, Password).then(() => {
        // const user = userCredential.user;
        setSpinner(true)
        toast.success('user created!')
        router.push('/')
    }).catch((error) => {
        toast.error(error.message)
    });
}

export const login = (e: React.FormEvent<HTMLFormElement>, formData: Record<string, string>, router: ReturnType<typeof useRouter>, setSpinner: React.Dispatch<SetStateAction<boolean>>) => {
    e.preventDefault()
    const { Email, Password } = formData
    signInWithEmailAndPassword(auth, Email, Password).then(() => {
        // const user = userCredential.user;
        setSpinner(true)
        toast.success('user logged in')
        router.push('/')
    }).catch((error) => {
        toast.error(error.message)
        // const errorCode = error.code;
        // const errorMessage = error.message;
    });
}

export const loginByGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then(() => {
        toast.success('logged in by google')
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

export const resetPassword = (e: React.FormEvent<HTMLFormElement>, formData: Record<string, string>, router: ReturnType<typeof useRouter>, setSpinner: React.Dispatch<SetStateAction<boolean>>) => {
    e.preventDefault()
    const { Email } = formData
    sendPasswordResetEmail(auth, Email).then(() => {
        setSpinner(true)
        toast.success('check your email for the link!')
        router.push('/')
    }).catch((error) => {
        toast.error(error.message)
    });
}