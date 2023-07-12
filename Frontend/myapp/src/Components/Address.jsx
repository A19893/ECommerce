import React,{useState} from 'react';
import { Modal,Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import { updateAddress } from '../Services/updateUserAddress.service';
import { selectAddress } from '../Features/AuthSlice';
const Address = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const [Address,setAddress]=useState('');
    const [isModalOpen, setIsModalOpen] = useState(true);
    
    const loggedInUserId=useSelector((state)=>state.authentication.loggedinUserId);
    const handleOk = async() => {
        if(Address===''){
          alert("Please Enter Address");
        }
        else{
        const res=await updateAddress(loggedInUserId,Address);
        dispatch(selectAddress(Address));
        setAddress('');
        navigate("/buy")
        }
      };
      const handleCancel = () => {
        setIsModalOpen(false);
      };
  return (
    <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Input  onChange={(e)=>setAddress(e.target.value)} type="text" placeholder="Please Enter Your Address"/>
    </Modal>
  );
}

export default Address;
