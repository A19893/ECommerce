import axios from "axios";
export const updatePurchaseCount=(id,PurchaseCount)=>{
    console.log('----Count---',PurchaseCount);
    return axios.put(`http://localhost:5000/routes/updateProduct/${id}`,{PurchaseCount});
}