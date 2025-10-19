'use client'
import Form from "@/src/components/Form"
import { resetPassword } from "../../../utils/apiServices"

const inputs = [
    { label: 'email', type: 'email' },
]
const button = ['Reset Password']

const Reset = () => {
    return (
        <div className="px-2 h-screen flex items-center justify-center">
            <Form inputs={inputs} button={button} handleSubmit={resetPassword} />
        </div>
    )
}

export default Reset