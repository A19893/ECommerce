import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isAuth: false,
  loggedInUserRole: null,
  loggedinUserEmail: null,
  loggedinUserId: null,
  loggedInUserAddress: null,
};
export const AuthSlice = createSlice({
  name: "Authentication",
  initialState: initialState,
  reducers: {
    addAuthentication: (state, action) => {
      state.isAuth = true;
      state.loggedinUserEmail = action.payload.email;
      state.loggedinUserId = action.payload.id;
       state.loggedInUserAddress = action.payload.address;
    },
    selectRole: (state, action) => {
      state.loggedInUserRole = action.payload;
    },
    removeAuthentication: (state, action) => {
      state.isAuth = false;
      state.loggedInUserRole = null;
      state.loggedinUserEmail = null;
      state.loggedinUserId = null;
      state.loggedInUserAddress=null;
    },
    selectAddress: (state, action) => {
       state.loggedInUserAddress = action.payload;
    },
  },
});
export const {
  addAuthentication,
  selectRole,
  removeAuthentication,
  selectAddress,
} = AuthSlice.actions;
export default AuthSlice.reducer;
