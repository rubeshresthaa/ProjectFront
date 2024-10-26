import { createSlice } from "@reduxjs/toolkit";
import { getBlogFromLocal, removeBlogFromLocal, setBlogs } from "../../hooks/localStorage";

export const blogSlice = createSlice({
  name: 'blogSlice',
  initialState: getBlogFromLocal() || [],
  reducers: {
    addBlogs: (state, action) => {
      state.push(action.payload);
      setBlogs(state); // Update local storage with the new state
    },
    removeBlogs: (state, action) => {
      // Filter out the blog with the matching ID
      const updatedState = state.filter((blog) => blog._id !== action.payload._id);
      setBlogs(updatedState); // Update local storage with the new state
      return updatedState; // Return the updated state
    }
  }
});

export const { addBlogs, removeBlogs } = blogSlice.actions;

