import Form from "./Form"

const AddProduct = () => {
    // const labels = ["product name", "product image", 'product price', 'product category', 'product brand', 'product description']
    const button = ['add product']
    const inputs = [
        { label: 'product name', type: 'text' },
        { label: 'product image', type: 'file' },
        { label: 'product price', type: 'number' },
        { label: 'product category', type: 'radio' },
        { label: 'product brand', type: 'text' },
        { label: 'product description', type: 'text' },
    ]
    return (
        <Form button={button} inputs={inputs} />
    )
}

export default AddProduct