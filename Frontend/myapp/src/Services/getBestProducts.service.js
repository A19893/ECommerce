import axios from "axios";
export const getBestProducts=()=>{
    return axios.get("http://localhost:5000/routes/getBestProducts");
}