import React, { useEffect,useState } from 'react';
import { getVendorProduct } from '../Services/getVendorProduct.service';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Modal,Table } from 'antd';
import { deleteProduct } from '../Services/deleteProduct.service';
import { getAllProducts } from '../Services/getAllProducts.service';
const ViewProducts = () => {
  const userId=useSelector((state)=>state.authentication.loggedinUserId);
  const userRole=useSelector((state)=>state.authentication.loggedInUserRole);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const[products,setProducts]=useState('');
  const navigate=useNavigate();
  useEffect(()=>{
    const getData=async()=>{
      const res=userRole==='Admin'?await getAllProducts():await getVendorProduct(userId);
      setProducts(res.data.result);
    }
    getData();
  },[])
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    navigate('/dashBoard');
  };
  const alertDelete=async(id)=>{
    const response=await deleteProduct(id);
    console.log(response);
    if(response.status===200){
      alert('Item Deleted Successfully');
      navigate('/dashBoard');
    }
  }
  const columns = [
    {
      title: 'Product Id',
      dataIndex: '_id',
      key: '_id',
      render: (text) => <span style={{fontFamily:'sans-serif',fontWeight:'bold'}}>#{text}</span>,
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      render: (text) => <span>{text}</span>,
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <span>{text}</span>,
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
        render: (text) => <span>{text}</span>,
    },
    {
      title: 'Stock',
      dataIndex: 'Stock',
      key: 'Stock',
      render: (text) => <span>{text}</span>,
    },
    {
      title: 'Status',
      dataIndex: 'Status',
      key: 'Status',
      render: (text) => <span>{text}</span>,
    },
    {
        title: 'Action',
        key: '_id',
        render: (text) => (
          <>
        <span style={{color:'blue',cursor:'pointer',fontSize:'20px',marginRight:'15px'}} onClick={()=>navigate('/updateProduct',{state:text})}>Update</span>
         <span style={{color:'red',cursor:'pointer',fontSize:'20px'}} onClick={()=>alertDelete(text._id)}>Delete</span>
         </>
        )
    },
  ];
  return (
    <Modal  width={900} title="Your Products" open={isModalOpen} onOk={handleOk}  onCancel={handleCancel} footer={null}>
      <Table columns={columns} dataSource={products} />
    </Modal>
  );
}

export default ViewProducts;
