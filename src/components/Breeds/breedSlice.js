import { createSlice } from "@reduxjs/toolkit";
import { getBreedFromLocal, removeBreedFromLocal, setBreeds } from "../../hooks/localStorage";

export const breedSlice=createSlice({
  name:'breedSlice',
  initialState:getBreedFromLocal || [],
  reducers:{
    addBreeds:(state,action)=>{
      state.breeds.action.push(action.payload)
      setBreeds(state.breeds)
    },
    removeBreeds:(state,action)=>{
      removeBreedFromLocal(action.payload._id);
      state.breeds=state.breeds.filter((breed)=>breed._id !== action.payload._id)

    },
   
  }
})