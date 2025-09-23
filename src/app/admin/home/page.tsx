'use client'
import AdminFooter from "@/src/components/adminComponents/AdminFooter"
import { AdminOnlyRoutes } from "@/src/components/DynamicLinks"
import { auth } from "@/src/firebase/config"
import { removeActiveUser, setActiveUser } from "@/src/utils/redux/authSlice"
import { onAuthStateChanged } from "firebase/auth"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

const AdminHome = () => {
  const dispatch = useDispatch()

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
      <div className="px-1 h-screen">
        admin home
      </div>
      <AdminFooter />
    </AdminOnlyRoutes>
  )
}

export default AdminHome