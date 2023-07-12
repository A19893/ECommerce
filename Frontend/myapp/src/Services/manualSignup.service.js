import axios from "axios"
export const manualSignup=(name,password,email)=>{
    return axios.post("http://localhost:5000/users/registerUser",{name:name,password:password,email:email})
}