import { createSlice } from "@reduxjs/toolkit";
import { ProductData } from "../../components/ProductData";

const initialState ={
cart:[],
items:ProductData,
totalQuantity:0,
totalPrice:0
}



export const cartSlice = createSlice(
    {     name:'cart',
        initialState,
        reducers:{
Addtocart:(action, state) =>{
    state.push(action.payload)
}   },
    })

export const {Addtocart} = cartSlice.actions;
export const cartfile = (state) =>state.cart;
console.log(ProductData)
export default cartSlice.reducer;