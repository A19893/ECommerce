import axios from "axios";
export const removeCartItems=(orderItems)=>{
    return axios.post("http://localhost:5000/cart/removeCart",orderItems);
}