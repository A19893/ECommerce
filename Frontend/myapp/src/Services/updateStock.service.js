import axios from "axios";
export const updateProduct=(id,Stock)=>{
     return axios.put(`http://localhost:5000/routes/updateProduct/${id}`,{Stock});
}