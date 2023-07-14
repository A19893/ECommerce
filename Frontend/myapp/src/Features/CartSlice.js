import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  CartItems:null
};
export const CartSlice=createSlice({
    name:'Cart',
    initialState:initialState,
    reducers:{
    addCartItems:(state,action)=>{
        state.CartItems=action.payload;
    }
  }
})
export const {addCartItems}=CartSlice.actions;
export default CartSlice.reducer;