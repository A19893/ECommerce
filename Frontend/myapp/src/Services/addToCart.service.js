import axios from "axios"
export const addToCart=(Order,Quantity,PurchasedBy)=>{
    console.log("purchase",PurchasedBy)
    return axios.post("http://localhost:5000/cart/addToCart",{Order,Quantity,PurchasedBy})
}