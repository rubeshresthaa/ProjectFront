import { useSelector } from "react-redux"
import UserProfile from "./UserProfile"
import OrderData from '../../components/Orders/OrderData'


const ProfileMain = () => {
  const{user}=useSelector((state)=>state.userSlice)
console.log(user)

  if (!user) {
    return <div>Loading profile...</div>;
  }
  return (
    <div className="grid grid-cols-2 p-2 items-start">
      <UserProfile user={user} />
      <OrderData user={user} />
    </div>
  )
}
export default ProfileMain