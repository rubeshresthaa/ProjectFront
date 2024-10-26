// AdminProfile.js
import { Link, useNavigate } from "react-router-dom";
import Products from "./Products";
import Accessories from "./AddAccessories/Accessories";

const AdminProfile = () => {
  const navigate = useNavigate();

  return (
    <div className="p-5 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center py-4 text-gray-800">Welcome To Admin Dashboard</h1>
      <div className="flex justify-end space-x-4 mt-8">
        <button
          className="px-5 py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-600 transition"
          onClick={() => navigate('/add-blog')}
        >
          Add Blogs
        </button>
        <button
          className="px-5 py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-600 transition"
          onClick={() => navigate('/contact-query')}
        >
          All Contacts
        </button>
        <Link to="/add-breeds">
          <button className="py-2 px-4 bg-purple-700 text-white rounded-lg hover:bg-purple-600 transition">
            Add Breeds
          </button>
        </Link>
        <Link to="/add-accessories">
          <button className="py-2 px-4 bg-purple-700 text-white rounded-lg hover:bg-purple-600 transition">
            Add Accessories
          </button>
        </Link>
      </div>

      <div className="my-6">
        <Products />
        <Accessories />
      </div>

      
    </div>
  );
};

export default AdminProfile;
