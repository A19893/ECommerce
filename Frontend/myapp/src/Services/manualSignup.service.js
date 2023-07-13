import axios from "axios"
export const manualSignup=(name,password,email,number)=>{
    return axios.post("http://localhost:5000/users/registerUser",{name:name,password:password,email:email,number:number})
}