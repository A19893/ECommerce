import React from 'react';
import NavBar from './NavBar';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useNavigate } from 'react-router-dom';
const Vendor = () => {
  const navigate=useNavigate();
  const uploadProd=()=>{
    navigate("/upload")
  }
  return (
    <div>
      <NavBar/>
      Vendor
      <AddCircleIcon onClick={uploadProd}fontSize='large' className='uploadProd'/>
    </div>
  );
}

export default Vendor;
