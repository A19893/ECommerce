import axios from 'axios'
export const checkUser=(email,password)=>{
    console.log("aaya");
    return axios.post("http://localhost:5000/users/loginUser",{email,password})
}