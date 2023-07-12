import axios from "axios"
export const getSpecificProduct=(id)=>{
    return axios.get(`http://localhost:5000/routes/specificProduct/${id}`);
}