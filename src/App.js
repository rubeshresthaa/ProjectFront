
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
import AddAccessories from "./admin/AddAccessories/AddAccessories";
import AccessoriesDetail from "./components/Accessories/AccessorriesDetail";
import CartPage from './components/Cart/CartPage'
import ProfileMain from "./Features/User/ProfileMain";
import OrderData from "./components/Orders/OrderData";
import OrderDetail from "./components/Orders/OrderDetail";
import SearchPage from "./components/Search/SearchPage";

import ProductEdit from "./admin/ProductEdit/ProductEdit";
import BlogEdit from "./components/Blogs/BlogEdit";

import AccessoriesEdit from "./admin/AddAccessories/AccessoriesEdit";
import AdminRoute from "./ui/AdminRoute";
import UserRoute from "./ui/UserRoute";
import NonUserRoute from "./ui/NonUserRoute";
import About from "./components/Footer/About";
import Services from "./components/Footer/Service";
import ContactUs from "./components/Footer/ContactUs";
import Faqs from "./components/Footer/Faqs";
import Careers from "./components/Footer/Careers";
import Team from "./components/Footer/Teams";



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
        element:<NonUserRoute />,
        children:[
          {
            path:'login',
            element:<Login />
          },
          {
            path:'register',
            element:<Register />
          },
        ]
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
        element:<AdminRoute />,
        children:[
          
            {
              path:'admin-profile',
              element:<AdminProfile />
             },
             {
              path:'add-breeds',
              element:<AddProducts />
             },
            
             {
              path:'breeds-edit/:id',
              element:<ProductEdit />
             },
             {
              path:'blog-edit/:id',
              element:<BlogEdit />
             },
             {
              path:'acc-edit/:id',
              element:<AccessoriesEdit />
             },
             {
              path:'add-accessories',
              element:<AddAccessories />
             },          

          
        ]
       },      
       //accessories
       {
        path:'accessories-detail/:id',
        element:<AccessoriesDetail />
       },
       {
        path:'breeds-detail/:id',
        element:<BreedDetail />
       },
     
       //cart
       
       {
        element:<UserRoute />,
        children:[
          {
            path:'user-profile',
            element:<ProfileMain />
           },
           {
            path:'cart-page',
            element:<CartPage />
           },
           {
            path:'user-order/:id',
            element:<OrderDetail />
           },
        ]
       },
      
       {
        path:'order-data',
        element:<OrderData />
       },
       
       {
        path:'search/:query',
        element:<SearchPage />

       },
       {
        path:'about',
        element:<About />
       },
       {
        path:'service',
        element:<Services />
       },
       {
        path:'contact-us',
        element:<ContactUs />
       },
       {
        path:'info',
        element:<Faqs />
       },
       {
        path:'career',
        element:<Careers />
       },
       {
        path:'team',
        element:<Team />
       }
       
      


    ]
  }])
  return (
   <RouterProvider router={router} />
  );
}

export default App;
