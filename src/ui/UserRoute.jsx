import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

const UserRoute = () => {
  const {user}=useSelector((state)=>state.userSlice)
  return user ? <Outlet /> : <Navigate to={'/login'} replace />
}
export default UserRoute;