import React, { useState } from "react";
import SignupDisplay from "./SignupDisplay";
import { addAuthentication,selectRole } from "../Features/AuthSlice";
import { useDispatch } from "react-redux";
import { manualSignup } from "../Services/manualSignup.service";
import { useNavigate } from "react-router-dom";
import {signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../Config/Firebase";
import { checkUser } from "../Services/checkBeforeLogin.service";
const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  //This function is used to register a user manually
  const onManualSignup = async (e) => {
    e.preventDefault();
    if (name === "") {
      alert("Please fill the name");
    } else if (password.length <= 6) {
      alert("Password shoul be greater than 6 characters");
    } else {
      const res = await manualSignup(name, password, email);
      console.log(res);
      if (res.status === 201) {
        dispatch(
          addAuthentication({
            id: res.data.creation._id,
            email: res.data.creation.email,
            address:res.data.creation.address
          })
        );
        navigate("/role");
      }
      if (res.status === 500) {
        alert("You are already a Registered User");
        navigate("/login");
      }
      setName("");
      setPassword("");
      setEmail("");
    }
  };

  //This function will help to sign in user with google
  const signInGoogle=async(e)=>{
   e.preventDefault();
   try {
    const res = await signInWithPopup(auth, googleProvider);
    const data=res._tokenResponse;
    console.log(data);
    const result=await checkUser(data.email,"password");
    console.log(result);
    if(result.status===200){
      const res = await manualSignup(data.displayName, "password", data.email);
      console.log(res);
      if (res.status === 201) {
        dispatch(
          addAuthentication({
            id: res.data.creation._id,
            email: res.data.creation.email,
            address:res.data.creation.address
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
        address:data.result.address
      })
    );
    dispatch(selectRole(data.result.role));
    navigate("/home")
  }
  }catch (err) {
    console.log(err);
    // if(err.response.status===302){
    //   alert("Kaam kar rha hai")
    // }
    console.log(err);
  }
}

//This function will let user sign in with phone
const signInPhone=async(e)=>{
  e.preventDefault();
}
  return (
    <SignupDisplay
      name={name}
      password={password}
      email={email}
      setName={setName}
      setPassword={setPassword}
      setEmail={setEmail}
      onManualSignup={onManualSignup}
      signInGoogle={signInGoogle}
      signInPhone={signInPhone}
    />
  );
};

export default Signup;
