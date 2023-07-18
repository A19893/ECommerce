import axios from "axios";
export const updateAddress=(id,address,country,state)=>{
    console.log(state,country)
    return axios.put(`http://localhost:5000/users/updateUserDetails/${id}`,{address,state,country});
}