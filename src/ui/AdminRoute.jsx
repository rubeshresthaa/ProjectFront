import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

const AdminRoute = () => {
  const {user}=useSelector((state)=>state.userSlice)
  return user?.isAdmin ? <Outlet /> : <Navigate to={'/'} replace />
}
export default AdminRoute