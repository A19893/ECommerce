import axios from 'axios'
export const createOrder=(shippingInfo,order,user,Quantity,subTotal)=>{
    return axios.post('http://localhost:5000/orders/createOrder',{shippingInfo,order,user,Quantity,subTotal})
}