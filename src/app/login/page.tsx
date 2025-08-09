'use client'
import Form from "@/src/components/Form"
import { login, loginByGoogle } from "../../utils/apiServices"

const Login = () => {
    const inputs = [
        { label: 'email', type: 'email' },
        { label: 'password', type: 'password' },
    ]
    const button = ['Login']
    const endOfTheFormTitle = { text: "Don't have an account?", link: "Register" }
    return (
        <div className="px-2">
            <Form endOfTheFormTitle={endOfTheFormTitle} inputs={inputs} button={button} handleSubmit={login} handleGoogleAuth={loginByGoogle} />
        </div>
    )
}

export default Login