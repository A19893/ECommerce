import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  CurrentOrderPlaced:null
};
export const OrderSlice=createSlice({
    name:'Order',
    initialState:initialState,
    reducers:{
    placedOrder:(state,action)=>{
        state.CurrentOrderPlaced=action.payload;
    }
  }
})
export const {placedOrder}=OrderSlice.actions;
export default OrderSlice.reducer;