import axios from "axios"
export const removeCart=(id)=>{
    console.log(id);
    return axios.post(`http://localhost:5000/cart/removeItem/${id}`)
}