  import { createSlice } from "@reduxjs/toolkit";
  import { getContactFromLocal, removeContactFromLocal, setContact } from "../../hooks/localStorage";

  export const contactSlice=createSlice({
    name:'contactSlice',
    initialState:{
      contact:getContactFromLocal() || []
    },
    reducers:{
      submitContact: (state, action) => {
        state.contact.push(action.payload); // Add the new contact to the existing list
        setContact(state.contact); // Update local storage
      },
      removeContact:(state,action)=>{
        removeContactFromLocal(action.payload._id);
        state.contact = state.contact.filter((con) => con._id !== action.payload._id);
      }
    }
  })

  export const {submitContact,removeContact}=contactSlice.actions;