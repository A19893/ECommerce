import React,{useState} from 'react';
import { Modal,Select } from 'antd';
import {useDispatch,useSelector} from 'react-redux';
import { updateRole } from '../Services/updateRole.service';
import { selectRole } from '../Features/AuthSlice';
import { useNavigate } from 'react-router-dom';
const Role = () => {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const loggedInUserId=useSelector((state)=>state.authentication.loggedinUserId);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const[role,setRole]=useState('');
  const handleOk = async() => {
    if(role===''){
      alert("Please Select Role");
    }
    else{
    setIsModalOpen(false);
    const res=await updateRole(role,loggedInUserId)
    dispatch(selectRole(res.data.result.role))
    setRole('');
    navigate('/home')
    }
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onChange = (value) => {
        setRole(value)
      };
  return (
      <>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <Select
    showSearch
    placeholder="Please Select a Role"
    optionFilterProp="children"
    onChange={onChange}
    filterOption={(input, option) =>
      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
    }
    options={[
      {
        value: 'Vendor',
        label: 'Vendor',
      },
      {
        value: 'User',
        label: 'User',
      },
    ]}/>
      </Modal>
      </>
  );
}

export default Role;
