import {createSlice} from '@reduxjs/toolkit';
const initialState={
    Products:null,
}
export const ProductSlice=createSlice({
    name:'Products',
    initialState:initialState,
    reducers:{
        saveProducts:(state,action)=>{
            console.log(action)
            state.Products=action.payload;
        },
        removeProducts:(state,action)=>{
            state.Products=null;
        }
    }
})

export const {saveProducts,removeProducts}=ProductSlice.actions;
export default ProductSlice.reducer;