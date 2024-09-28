import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "../Features/auth/userApi";
import { userSlice } from "../Features/auth/userSlice";

export const store=configureStore({
  reducer:{
    [userApi.reducerPath]:userApi.reducer,
    [userSlice.name]: userSlice.reducer,

  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat([
    userApi.middleware
  ])
})