import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

const NonUserRoute = () => {
  const {user}=useSelector((state)=>state.userSlice)
  return user ? <Navigate to ="/" replace /> : <Outlet />
}
export default NonUserRoute