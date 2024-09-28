
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/Main/Main";
import Footer from "./ui/Footer";
import Headers from "./ui/Headers";
import RootLayout from "./ui/RootLayout";
import Breeds from "./components/Breeds/Breeds";
import Accessories from "./components/Accessories/Accessories";
import Blogs from "./components/Blogs/Blogs";
import Contact from "./components/Contact/Contact";
import Login from "./Features/auth/Login";


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
      }


    ]
  }])
  return (
   <RouterProvider router={router} />
  );
}

export default App;
