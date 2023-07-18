import axios from "axios";
export const createChat=(senderId,chatRoomId,msgObj)=>{
    return axios.post('http://localhost:5000/Chat/createChat',{senderId,chatRoomId,msgObj});
}