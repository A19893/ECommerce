import axios from "axios"
export const getSpecificUser=(id)=>{
return axios.get(`http://localhost:5000/users/getUserDetails/${id}`)
}