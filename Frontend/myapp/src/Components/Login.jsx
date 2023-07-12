import React,{useState} from 'react';
import LoginDisplay from './LoginDisplay';
import { addAuthentication,selectRole } from "../Features/AuthSlice";
import { useDispatch } from "react-redux";
import { manualLogin } from '../Services/manualLogin.service';
import { useNavigate } from "react-router-dom";
import {signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../Config/Firebase";
import { checkUser } from "../Services/checkBeforeLogin.service";
import { manualSignup } from '../Services/manualSignup.service';
const Login = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  //This Function will help to login user with email and password
  const onManualLogin=async(e)=>{
    e.preventDefault();
    if (password.length <= 6) {
      alert("Password shoudl be greater than 6 characters");
    } else {
      const res = await manualLogin(password, email);
      console.log(res);
      if (res.status === 201) {
        dispatch(
          addAuthentication({
            id: res.data.result._id,
            email: res.data.result.email,
          })
        );
        dispatch(selectRole(res.data.result.role));
        setPassword("");
       setEmail("");
        navigate("/home");
      }
      else if(res.status===200){
        alert("You are Not a Registered User");
      }
      else if(res.status===203){
        alert("Credentials are InValid");
      }
    }
  }
  //This function will help to sign in user with google
  const signInGoogle=async(e)=>{
    e.preventDefault();
    try {
     const res = await signInWithPopup(auth, googleProvider);
     const data=res._tokenResponse;
     console.log(data);
     const result=await checkUser(data.email,"password");
     if(result.status===200){
       const res = await manualSignup(data.displayName, "password", data.email);
       console.log(res);
       if (res.status === 201) {
         dispatch(
           addAuthentication({
             id: res.data.creation._id,
             email: res.data.creation.email,
           })
         );
         navigate("/role");
     }
   }
   else if(result.status===201){
     const data=result.data
     console.log(data);
     dispatch(
       addAuthentication({
         id: data.result._id,
         email: data.result.email,
       })
     );
     dispatch(selectRole(data.result.role));
     navigate("/home")
   }
   }catch (err) {
     if(err.response.status===302){
       alert("Kaam kar rha hai")
     }
     console.log(err);
   }
 }
  return (
    <LoginDisplay
    signInGoogle={signInGoogle}
    onManualLogin={onManualLogin}
    password={password}
    email={email}
    setPassword={setPassword}
    setEmail={setEmail}
    />
  );
}

export default Login;
