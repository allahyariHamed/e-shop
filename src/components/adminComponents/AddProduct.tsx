import { addProduct } from "@/src/utils/apiServices"
import Form from "../Form"

const AddProduct = () => {
    const button = 'add product'
    const inputs = [
        { label: 'product name', type: 'text' },
        { label: 'product price', type: 'number' },
        { label: 'product brand', type: 'text' },
        { label: 'product description', type: 'text' },
    ]
    return (
        <div className="h-screen flex items-center justify-center border p-5">
            <Form button={button} inputs={inputs} handleSubmit={addProduct} addProductForm={true} />
        </div>
    )
}

export default AddProduct