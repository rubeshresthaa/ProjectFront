
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
      //contact
      {
        path:'contact-query',
        element:<ContactDetail />
      },
      {
        path:'add-blog',
        element:<AddBlogs />
      }


    ]
  }])
  return (
   <RouterProvider router={router} />
  );
}

export default App;
