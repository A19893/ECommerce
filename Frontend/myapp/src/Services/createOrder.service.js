import axios from 'axios'
export const createOrder=(shippingInfo,orderItems,user)=>{
    return axios.post('http://localhost:5000/orders/createOrder',{shippingInfo,orderItems,user})
}