'use client'
import Form from "@/src/components/form"
import { resetPassword } from "../../components/functions"

const Reset = () => {
    const labels = ["Email"]
    const button = ['Reset Password']
    // const formType = { text: "Don't have an account?", link: "Register" }
    return (
        <Form labels={labels} button={button} handleSubmit={resetPassword} />
    )
}

export default Reset