import { configureStore } from "@reduxjs/toolkit";
import useReducer  from '../app/userSlice';



export default configureStore({
  reducer:{
    user:useReducer,
  },
});