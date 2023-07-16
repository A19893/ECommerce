import axios from "axios";
export const getAllVendors=()=>{
    return axios.get("http://localhost:5000/users/getAllVendors");
}