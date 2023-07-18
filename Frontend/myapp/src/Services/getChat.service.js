import axios from 'axios'
export const getChat=(id)=>{
    return axios.get(`http://localhost:5000/Chat/getChat/${id}`);
}