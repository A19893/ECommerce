import axios from 'axios';
export const  removeSpecificOrder=(id)=>{
    return axios.get(`http://localhost:5000/orders/deleteOrder/${id}`)
}