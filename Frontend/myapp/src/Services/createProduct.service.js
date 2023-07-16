import axios from "axios";
export const addProducts=(name,description,price,category,image,CreatedBy,Stock,Status)=>{
   return axios.post("http://localhost:5000/routes/createProduct",{name,description,price,category,image,CreatedBy,Stock,Status});
}