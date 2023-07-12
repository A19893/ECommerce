import axios from 'axios'
export const manualLogin=(password,email)=>{
    return axios.post("http://localhost:5000/users/loginUser",{email,password})
}