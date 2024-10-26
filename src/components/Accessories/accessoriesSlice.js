import { createSlice } from "@reduxjs/toolkit";
import { getAccessoriesFromLocal, removeAccessoriesFromLocal, setAccessories } from "../../hooks/localStorage";

export const accessoriesSlice=createSlice({
  name:'accessoriesSlice',
  initialState:getAccessoriesFromLocal() || [],
  reducers:{
    addAccessories:(state,action)=>{
      state.action.push(action.payload);
      setAccessories(state.accessories)
    },
    removeAccessories:(state,action)=>{
      removeAccessoriesFromLocal(action.payload._id);
      state.accessories=state.accessories.filter((acc)=>acc._id !== action.payload._id)
    }
  }
})


export const {addAccessories,removeAccessories}=accessoriesSlice.actions;