
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/Main/Main";

import RootLayout from "./ui/RootLayout";
import Breeds from "./components/Breeds/Breeds";
import Accessories from "./components/Accessories/Accessories";
import Blogs from "./components/Blogs/Blogs";
import Contact from "./components/Contact/Contact";
import Login from "./Features/auth/Login";
import Register from "./Features/auth/Register";
import ContactDetail from "./components/Contact/ContactDetail";
import AddBlogs from "./components/Blogs/AddBlogs";
import BlogDetail from "./components/Blogs/BlogDetail";
import AdminProfile from "./admin/AdminProfile";
import AddProducts from "./admin/AddProducts";
import BreedDetail from "./components/Breeds/BreedDetail";


function App() {
  const router=createBrowserRouter([{
    path:'/',
    element:<RootLayout />,
    children:[
      {
        index:true,
        element:<Main />
      },
      {
        path:'breeds',
        element:<Breeds />
      },
      {
        path:'accessories',
        element:<Accessories />
      },
      {
        path:'blogs',
        element:<Blogs />
      },
      {
        path:'contact',
        element:<Contact />
      },
      {
        path:'login',
        element:<Login />
      },
      {
        path:'register',
        element:<Register />
      },
      {
        path:'/blogs',
        element:<Blogs />
      },
      {
        path:'blog-detail/:id',
        element:<BlogDetail />
       },
      //contact
      {
        path:'contact-query',
        element:<ContactDetail />
      },
      {
        path:'add-blog',
        element:<AddBlogs />
      },
       //admin
       {
        path:'admin-profile',
        element:<AdminProfile />
       },
       {
        path:'add-breeds',
        element:<AddProducts />
       },
       {
        path:'breeds-detail/:id',
        element:<BreedDetail />
       }


    ]
  }])
  return (
   <RouterProvider router={router} />
  );
}

export default App;
