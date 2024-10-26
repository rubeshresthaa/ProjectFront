import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "../Features/auth/userApi";
import { userSlice } from "../Features/auth/userSlice";

import { contactSlice } from "../components/Contact/contactSlice";
import { contactApi } from "../components/Contact/contactApi";
import { blogApi } from "../components/Blogs/blogApi";
import { blogSlice } from "../components/Blogs/blogSlice";
import { breedApi } from "../components/Breeds/breedApi";
import { breedSlice } from "../components/Breeds/breedSlice";
import { accessoriesApi } from "../components/Accessories/accessoriesApi";
import { accessoriesSlice } from "../components/Accessories/accessoriesSlice";
import { orderApi } from "../components/Orders/orderApi";
import { cartSlice } from "../components/Cart/cartSlice";

export const store=configureStore({
  reducer:{
    [userApi.reducerPath]:userApi.reducer,
    [userSlice.name]: userSlice.reducer,
    [contactSlice.name]: contactSlice.reducer,
    [contactApi.reducerPath]: contactApi.reducer, 
    [blogApi.reducerPath]:blogApi.reducer,
    [blogSlice.name]:blogSlice.reducer,
    [breedApi.reducerPath]:breedApi.reducer,
    [breedSlice.name]:breedApi.reducer,
    [accessoriesApi.reducerPath]:accessoriesApi.reducer,
    [accessoriesSlice.name]:accessoriesApi.reducer,
    [orderApi.reducerPath]:orderApi.reducer,
    [cartSlice.name]:cartSlice.reducer

  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat([
    userApi.middleware,
    contactApi.middleware,
    blogApi.middleware,
    breedApi.middleware,
    accessoriesApi.middleware,
    orderApi.middleware
  ])
})