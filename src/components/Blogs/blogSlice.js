import { createSlice } from "@reduxjs/toolkit";
import { getBlogFromLocal, removeBlogFromLocal, setBlogs } from "../../hooks/localStorage";


export const blogSlice=createSlice({
  name:'blogSlice',
  initialState:getBlogFromLocal() || [],
  reducers:{
    addBlogs:(state,action)=>{
      state.blog.action.push(action.payload);
      setBlogs(state.blog)
      
    },
    removeBlogs:(state,action)=>{
      removeBlogFromLocal(action.payload._id)
      state.blog=state.blog.filter((blog)=>blog._id!==action.payload._id)
    }
  }
})