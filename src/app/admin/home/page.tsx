import AddProduct from "@/src/components/AddProduct"
import AdminFooter from "@/src/components/AdminFooter"
import { AdminOnlyRoutes } from "@/src/components/DynamicLinks"

const AdminHome = () => {
  return (
    <AdminOnlyRoutes>
      <div className="px-2">
        <AddProduct />
      </div>
      <AdminFooter />
    </AdminOnlyRoutes>
  )
}

export default AdminHome