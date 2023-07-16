import axios from 'axios'
export const getMyOrders=(id)=>{
    return axios.get(`http://localhost:5000/orders/getMyOrders/${id}`)
}