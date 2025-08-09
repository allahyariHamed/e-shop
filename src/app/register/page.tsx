"use client"
import Form from "@/src/components/Form";
import { register } from "../../utils/apiServices";

const inputs = [
    { label: 'user name', type: 'text' },
    { label: 'phone number', type: 'tel' },
    { label: 'email', type: 'email' },
    { label: 'password', type: 'password' },
    { label: 'confirm password', type: 'password' },
]
const button = ['Register']
const endOfTheFormTitle = { text: "Already have an account?", link: "Login" }

const Register = () => {
    return (
        <div className="px-2">
            <Form endOfTheFormTitle={endOfTheFormTitle} inputs={inputs} button={button} handleSubmit={register} />
        </div>
    );
};

export default Register;