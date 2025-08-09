import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { toast } from "react-toastify"
import { auth } from "../firebase/config"
import { useRouter } from "next/navigation"

export const register = (e: React.FormEvent<HTMLFormElement>, formData: Record<string, string>, router: ReturnType<typeof useRouter>) => {
    e.preventDefault()
    const { Email, Password, ConfirmPassword } = formData
    if (Password !== ConfirmPassword) {
        toast.error("password is not match with confirm password!")
        return
    }
    createUserWithEmailAndPassword(auth, Email, Password).then(() => {
        // const user = userCredential.user;
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
        // router.push('/')
    }).catch((error) => {
        toast.error(error.message)
    })
}
export const logOut = () => {
    signOut(auth).then(() => {
        toast.success('user logged out')
        console.log('logout')
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
export const getSignedInUser = () => {
    onAuthStateChanged(auth, (user) => {
        if (user) {

            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            // const uid = user.uid;
            // ...
        } else {
            // User is signed out
            // ...
        }
    });
}