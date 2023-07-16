import axios from "axios";
export const getVendorProduct=(id)=>{
    return axios.get(`http://localhost:5000/routes/getVendorProducts/${id}`)
}