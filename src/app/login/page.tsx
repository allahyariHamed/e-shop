'use client'
import Form from "@/src/components/form"
import { login, loginByGoogle } from "../../components/functions"

const Login = () => {
    const labels = ["Email", "Password"]
    const button = ['Login']
    const formType = { text: "Don't have an account?", link: "Register" }
    return (
        <Form formType={formType} labels={labels} button={button} handleSubmit={login} handleGoogleAuth={loginByGoogle} />
    )
}

export default Login