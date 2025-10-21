"use client"
import Form from "@/src/components/Form";
import { register } from "../../../utils/apiServices";

const inputs = [
    { label: 'email', type: 'email' },
    { label: 'password', type: 'password' },
    { label: 'confirm password', type: 'password' },
]
const button = 'register'
const endOfTheFormTitle = { text: "Already have an account?", link: "login" }

const Register = () => {
    return (
        <div className="px-2 h-screen flex items-center justify-center">
            <Form endOfTheFormTitle={endOfTheFormTitle} inputs={inputs} button={button} handleSubmit={register} />
        </div>
    );
};

export default Register;