'use client'
import AdminFooter from "@/src/components/adminComponents/AdminFooter"
import { editProduct } from "@/src/utils/apiServices"
import { fileToBase64 } from "@/src/utils/base64Converter"
import { selectProducts } from "@/src/utils/redux/productSlice"
import Box from "@mui/material/Box"
import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import { useParams, useRouter } from "next/navigation"
import { FC, useState } from "react"
import { useSelector } from "react-redux"

const EditProduct: FC = () => {
    const { slug } = useParams()
    const router = useRouter()
    const products = useSelector(selectProducts)
    const singleProduct = products.find((item) => item.id == slug) || {
        id: "",
        image: "",
        category: "",
        name: "",
        description: "",
        price: "",
        brand: "",
        createTime: ""
    }
    const [focus, SetFocus] = useState<string>('')
    const [formData, setFormData] = useState<Record<string, string>>({
        name: singleProduct.name,
        price: singleProduct.price,
        brand: singleProduct.brand,
        description: singleProduct.description,
        category: singleProduct.category,
        image: singleProduct.image,
    });
    const button = ['edit product']
    const inputs = [
        { label: 'product name', type: 'text', value: singleProduct.name },
        { label: 'product price', type: 'number', value: singleProduct.price },
        { label: 'product brand', type: 'text', value: singleProduct.brand },
        { label: 'product description', type: 'text', value: singleProduct.description },
    ]

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const event = e.target.files
        if (event && event[0]) {
            const file = event[0]
            if (file) {
                const base64 = await fileToBase64(file)
                setFormData({ ...formData, ['image']: base64 })
            }
        }
    }

    const handleCategoryChange = (event: SelectChangeEvent) => {
        setFormData({ ...formData, ['category']: event.target.value })
    };

    return (
        <>
            <div className="px-1 h-screen">
                <div className="p-3 w-full rounded-lg shadow bg-violet-200">

                    <div className="font-extrabold text-2xl text-center">
                        {button}
                    </div>

                    <form onSubmit={(e) => {
                        editProduct(e, router, singleProduct.id, formData)
                        setFormData({})
                    }} className="my-5">
                        {
                            inputs?.map((input, i) => (
                                < div key={i} className="relative my-5" >
                                    <input
                                        type={input.type}
                                        id={input.label}
                                        name={input.label}
                                        value={formData[input.label.replace('product ', '')] || ''}
                                        onChange={(e) => setFormData({ ...formData, [input.label.replace('product ', '')]: e.target.value })}
                                        className="peer w-full bg-white placeholder:text-slate-500 text-black text-xs rounded px-3 py-2 transition duration-300 ease focus:outline-none shadow focus:shadow-none"
                                        required
                                        onFocus={() => SetFocus(input.label)}
                                        onBlur={() => SetFocus('')}
                                        placeholder={focus === input.label ? '' : input.label}
                                    />
                                    <label htmlFor={input.label} className="label">
                                        {input.label}
                                    </label>
                                </div>
                            ))
                        }

                        <Box>
                            <FormControl fullWidth size="small">
                                <InputLabel id="select-label" sx={{ fontSize: 14 }}>category</InputLabel>
                                <Select
                                    labelId="select-label"
                                    id="demo-simple-select"
                                    value={formData['category'] || ''}
                                    label="product category"
                                    onChange={(e) => handleCategoryChange(e)}
                                    className="mb-5 bg-white"
                                >
                                    <MenuItem value={'spring'}>spring</MenuItem>
                                    <MenuItem value={'summer'}>summer</MenuItem>
                                    <MenuItem value={'fall'}>fall</MenuItem>
                                    <MenuItem value={'winter'}>winter</MenuItem>
                                    <MenuItem value={'fashion'}>fashion</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>

                        <div className="relative mb-5" >
                            <input
                                accept="image/*"
                                type='file'
                                id='product image'
                                name='product image'
                                onChange={(e) => handleFileChange(e)}
                                className="peer w-full bg-white placeholder:text-slate-500 text-black text-xs rounded px-3 py-2 transition duration-300 ease focus:outline-none shadow focus:shadow-none"
                                required
                            />

                            <label htmlFor='product image' className="label">
                                product image
                            </label>
                        </div>

                        <button type="submit" className="font-bold button">
                            {button}
                        </button>

                    </form>

                </div >
            </div>
            <AdminFooter />
        </>
    )
}

export default EditProduct