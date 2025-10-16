import { collection, onSnapshot, orderBy, query } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { storeProducts } from "../redux/productSlice"
import { toast } from "react-toastify"
import { DB } from "@/src/firebase/config"
import { Product } from "@/src/types/types"

export const useFetchProducts = (collectionName: string): Product[] => {
    const [data, setData] = useState<Product[]>([])
    const dispatch = useDispatch()

    useEffect(() => {
        const getProducts = async () => {
            try {
                const productRef = collection(DB, collectionName)
                const q = query(productRef, orderBy('createTime', 'desc'))

                onSnapshot(q, (snapshot) => {
                    const allProducts = snapshot.docs.map((doc) => {

                        const data = doc.data();
                        return {
                            id: doc.id,
                            image: data.image ?? "",
                            category: data.category ?? "",
                            name: data.name ?? "",
                            description: data.description ?? "",
                            price: data.price ?? "",
                            brand: data.brand ?? "",
                            createTime: data.createTime.toDate().toISOString().split('T')[0]
                        };
                    })
                    dispatch(storeProducts({
                        products: allProducts
                    }))
                    setData(allProducts)
                })
            } catch (err) {
                if (err instanceof Error) {
                    toast.error(err.message);
                } else {
                    toast.error(String(err));
                }
            }
        }

        getProducts()
    }, [])

    return data
}