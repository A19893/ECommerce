import axios from "axios";
export const updateAddress=(id,address)=>{
    return axios.put(`http://localhost:5000/users/updateUserDetails/${id}`,{address});
}