"use client"
import Form from "@/src/components/form";
import { register } from "../../components/functions";

const Register = () => {
    const labels = ["Username", "Phone Number", "Email", "Password", "Confirm Password"]
    const button = ['Register']

    const formType = { text: "Already have an account?", link: "login" }
    return (
        <Form formType={formType} labels={labels} button={button} handleSubmit={register} />
    );
};

export default Register;