import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "0",
 }
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      console.log(state.user);
     // console.log(user);
    },
    // logout: (state) => {
    //   state.user = null;
    // },
},
});
export const { login} = userSlice.actions;
//export const selectUser = (state) => state.user.user;
export default userSlice.reducer; 
