import axios from "axios";
export const getAllUsers=()=>{
return axios.get('http://localhost:5000/users/getAllUsers');
}