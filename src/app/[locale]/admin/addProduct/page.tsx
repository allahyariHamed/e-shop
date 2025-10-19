import AdminFooter from "@/src/components/adminComponents/AdminFooter"
import Form from "@/src/components/Form"
import { addProduct } from "@/src/utils/apiServices"

const AddProduct = () => {
    const button = ['add product']
    const inputs = [
        { label: 'product name', type: 'text' },
        { label: 'product price', type: 'number' },
        { label: 'product brand', type: 'text' },
        { label: 'product description', type: 'text' },
    ]
    return (
        <>
            <AdminFooter />
            <div>
                <Form button={button} inputs={inputs} handleSubmit={addProduct} addProductForm={true} />
            </div>
        </>
    )
}

export default AddProduct