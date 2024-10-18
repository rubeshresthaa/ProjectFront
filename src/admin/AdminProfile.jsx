import { useNavigate } from "react-router-dom"

const AdminProfile = () => {
  const nav=useNavigate();
  return (
    <div>
      <h1 className="text-2xl font-bold text-center py-2">Welcome To Admin Dash Board</h1>
      <div className="flex justify-end items-end p-5 space-x-5">
        <button className="bg-purple-900 text-white p-3 rounded-xl hover:bg-purple-800 hover:text-black" onClick={()=>nav('/add-blog')}>Add Blogs</button>
        <button className="bg-purple-900 text-white p-3 rounded-xl hover:bg-purple-800 hover:text-black" onClick={()=>nav('/contact-query')}>All Contacts</button>
      </div>
    </div>
  )
}
export default AdminProfile