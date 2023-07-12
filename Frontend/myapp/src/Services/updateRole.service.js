import axios from "axios"
export const updateRole=(role,id)=>{
return axios.post("http://localhost:5000/users/selectRole",{role,id})
}