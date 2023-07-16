import axios from "axios";
export const updateProduct=(id,name,description,price,category,image,Stock,Status)=>{
    return axios.put(`http://localhost:5000/routes/updateProduct/${id}`,{name,description,price,category,image,Stock,Status});
}