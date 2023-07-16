import axios from "axios";
export const updateStatus=(id,status)=>{
    console.log('---id--',id,'---status--',status);
    return axios.put(`http://localhost:5000/users/updateUserDetails/${id}`,{status});
    }