import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeUser } from "../Features/auth/userSlice";


const Headers = () => {
  const { user } = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [search, setSearch] = useState('');
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const isAdmin = user?.isAdmin; // Check if user is an admin
  const isLoggedIn = user !== null; // Check if user is logged in

  const handleSignOut = () => {
    dispatch(removeUser()); // Dispatch the action to remove user
    nav('/'); // Redirect to home or login page
  };

  const toggleDropdown = () => setDropdownVisible((prev) => !prev);


  return (
    <div className="flex justify-between p-10 bg-[#fff5cc]">
      <div className="flex justify-around space-x-2">
        <div>
          <h2>Image</h2>
        </div>
        <div>
          <h1>Paw Store</h1>
        </div>
      </div>
      <div className="flex space-x-4">
        <ul className="flex justify-between items-center space-x-5 cursor-pointer">
          <li className="hover:text-xl hover:underline hover:underline-offset-8" onClick={() => nav('/')}>Home</li>
          <li className="hover:text-xl hover:underline hover:underline-offset-8" onClick={() => nav('/breeds')}>Breeds</li>
          <li className="hover:text-xl hover:underline hover:underline-offset-8" onClick={() => nav('/accessories')}>Accessories</li>
          <li className="hover:text-xl hover:underline hover:underline-offset-8" onClick={() => nav('/blogs')}>Blogs</li>
          <li className="hover:text-xl hover:underline hover:underline-offset-8" onClick={() => nav('/contact')}>Contact</li>
          
          {/* Dropdown Button */}
          <li className="relative">
            <button
              onClick={toggleDropdown}
              className="text-black bg-[#fff5cc] outline-none rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
              type="button"
            >
              {isLoggedIn ? 'Sign Out' : 'Login/Register'}
              <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {dropdownVisible && (
              <div
                
                className="absolute left-0 mt-2 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
              >
                <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownDefaultButton">
                  {isLoggedIn ? (
                    <>
                      <li>
                        <Link to="/user-profile" className="block px-4 py-2 hover:bg-gray-100">Profile</Link>
                      </li>
                      <li>
                        <button onClick={handleSignOut} className="block w-full text-left px-4 py-2 hover:bg-gray-100">Sign Out</button>
                      </li>
                      {isAdmin && (
                        <li>
                          <Link to="/admin-profile" className="block px-4 py-2 hover:bg-gray-100">Admin Profile</Link>
                        </li>
                      )}
                    </>
                  ) : (
                    <>
                      <li>
                        <Link to="/login" className="block px-4 py-2 hover:bg-gray-100">Login</Link>
                      </li>
                      <li>
                        <Link to="/register" className="block px-4 py-2 hover:bg-gray-100">Sign Up</Link>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            )}
          </li>
        </ul>
        <div className="flex items-center space-x-2">
          <input
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            type="text"
            className="p-3 rounded-full focus:outline-none focus:border-none"
            placeholder="Search for Pets" 
          />
          <div className="relative right-14">
            <IoIosSearch size={30} className="text-blue-gray-100 cursor-pointer"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Headers;
