import axios from "axios";
export const getVendorOrders=(id)=>{
    return axios.get(`http://localhost:5000/orders/getVendorOrders/${id}`)
}