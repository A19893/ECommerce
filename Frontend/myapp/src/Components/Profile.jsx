import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getSpecificUser } from "../Services/getSpecificUser.service";
import { PlusOutlined } from "@ant-design/icons";
import { updateUser } from "../Services/updateUserDetails.service";
import { useNavigate } from "react-router-dom";
import ProfileModal from "./ProfileModal";
const Profile = () => {
  const userId = useSelector((state) => state.authentication.loggedinUserId);
  const [user, setUser] = useState(null);
  const [image, setImage] = useState(null);
  const [name, setName] = useState(null);
  const [address,setAddress] = useState(null);
  const [password, setPassword] = useState(null);
  const [email, setEmail] = useState(null);
  const navigate=useNavigate();
  let urls=null;
  // {user?.avatar==='avatar'?urls='https://img.freepik.com/free-icon/user_318-159711.jpg':urls=user?.avatar};
  // console.log('------urls--',urls);
  // const [fileList, setFileList] = useState([]);
  // const handleChange = ({ file: newFile, fileList: newFileList }) => {
  //   setFileList(newFileList);
  //   newFile.status === "done" &&
  //     setImage(`http://localhost:5000/${newFile.response}`);
  // };
  useEffect(() => {
    const getData = async () => {
      const response = await getSpecificUser(userId);
      setName(response.data.result.name);
      setAddress(response.data.result.address);
      setEmail(response.data.result.email);
      setPassword(response.data.result.password);
      setUser(response.data.result);
      setImage(response.data.result.avatar);
    };
    getData();
  }, []);
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
  const handleUpdate=async()=>{
    console.log('----data---',name,address,password,email);
    const res=await updateUser(userId,name,address,password,email,image);
    if(res.status===200){
      alert("Updated Successfully");
       navigate('/home');
    }
  }
  useEffect(() => {
    const getData = async () => {
      const data = await getSpecificUser(userId);
      console.log(data);
    };
    getData();
  });
  console.log('-image---',image)
  return (
    <ProfileModal   uploadButton={uploadButton} name={name} setName={setName}
        setAddress={setAddress} address={address} image={image} setImage={setImage} handleUpdate={handleUpdate} user={user} 
         email={email} setEmail={setEmail} password={password} setPassword={setPassword} />
  );
};

export default Profile;
