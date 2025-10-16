'use client'
import AdminFooter from "@/src/components/adminComponents/AdminFooter"
import { AdminOnlyRoutes } from "@/src/components/DynamicLinks"
import InfoBox from "@/src/components/InfoBox"
import ModalComponent from "@/src/components/Modal"
import Search from "@/src/components/Search"
import Sort from "@/src/components/Sort"
import { auth } from "@/src/firebase/config"
import { useFetchProducts } from "@/src/utils/customHooks/useFetchProducts"
import { removeActiveUser, setActiveUser } from "@/src/utils/redux/authSlice"
import { onAuthStateChanged } from "firebase/auth"
import { FC, useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { IoSearch } from "react-icons/io5";
import { HiSortDescending } from "react-icons/hi"

const AdminHome: FC = () => {
  const products = useFetchProducts('products')
  const dispatch = useDispatch()
  const [search, setSearch] = useState<boolean>(false);
  const [sort, setSort] = useState<boolean>(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setActiveUser({
          email: user?.email || '',
          userName: user?.displayName || '',
          userId: user?.uid
        }))
      } else {
        dispatch(removeActiveUser())
      }
    })
  }, [dispatch])

  return (
    <AdminOnlyRoutes>
      <div className="bg-white py-2">
        <div className="flex justify-between items-center px-3 text-2xl py-2 rounded font-bold text-center bg-violet-200">

          <ModalComponent Icon={HiSortDescending} open={sort} setOpen={setSort}>
            <Sort products={products} setOpen={setSort} />
          </ModalComponent>

          <div>
            admin home
          </div>

          <ModalComponent Icon={IoSearch} open={search} setOpen={setSearch}>
            <Search products={products} setOpen={setSearch} />
          </ModalComponent>
        </div>
      </div>

      <div className="grid gap-2">
        <InfoBox />
      </div>

      <AdminFooter />
    </AdminOnlyRoutes>
  )
}

export default AdminHome