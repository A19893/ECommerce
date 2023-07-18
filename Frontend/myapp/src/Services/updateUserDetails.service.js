import axios from "axios";
export const updateUser=(id,name,address,password,email,avatar,companyLogo,companyName,companyDetails)=>{
 return axios.put(`http://localhost:5000/users/updateUserDetails/${id}`,{name,address,password,email,avatar,companyLogo,companyName,companyDetails});
}