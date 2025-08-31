import { addProduct } from "../utils/apiServices"
import Form from "./Form"

const AddProduct = () => {
    const button = ['add product']
    const inputs = [
        { label: 'product name', type: 'text' },
        { label: 'product price', type: 'number' },
        { label: 'product brand', type: 'text' },
        { label: 'product description', type: 'text' },
    ]
    return (
        <Form button={button} inputs={inputs} handleSubmit={addProduct} addProductForm={true} />
    )
}

export default AddProduct