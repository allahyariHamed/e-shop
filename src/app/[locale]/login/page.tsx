'use client'
import Form from "@/src/components/Form"
import { login } from "../../../utils/apiServices"

const Login = () => {
    const inputs = [
        { label: 'email', type: 'email' },
        { label: 'password', type: 'password' },
    ]
    const button ='login'
    const endOfTheFormTitle = { text: "Don't have an account?", link: "register" }
    return (
        <div className="px-2 h-screen flex items-center justify-center">
            <Form endOfTheFormTitle={endOfTheFormTitle} inputs={inputs} button={button} handleSubmit={login} />
        </div>
    )
}

export default Login