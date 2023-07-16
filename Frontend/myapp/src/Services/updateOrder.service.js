import axios from "axios";
export const  updateOrder=(id,orderStatus)=>{
return axios.put(`http://localhost:5000/orders/updateOrder/${id}`,{orderStatus});
}