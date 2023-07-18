import axios from 'axios';
export const getAllChats=()=>{
    return axios.get('http://localhost:5000/Chat/getAllChat');
}