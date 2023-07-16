import axios from 'axios'
export const getAllOrders=()=>{
return axios.get('http://localhost:5000/orders/getAllOrders');
}