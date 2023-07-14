import React, { useState } from 'react'
import { addProducts } from '../Services/createProduct.service'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
 import { Form,Input,Button,Select } from 'antd';
const AddItems = (image) => {
    const CreatedBy=useSelector((state)=>state.authentication.loggedinUserId);
    const { TextArea } = Input;
    const[name,setName]=useState('');
    const[description,setDescription]=useState('');
    const[price,setPrice]=useState('');
    const[category,setCategory]=useState('');
    const[Stock,setStock]=useState('');
    const navigate=useNavigate();
    const addProduct=async(e)=>{
        const response=await addProducts(name,description,price,category,image?.image,CreatedBy,Stock);
        if(response.status===201){
          alert('Item Added Successfully');
          navigate("/home")
        }
    }
    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState('horizontal');
    const onFormLayoutChange = ({ layout }) => {
      setFormLayout(layout);
    };
    const formItemLayout =
      formLayout === 'horizontal'
        ? {
          labelAlign:"left",
            labelCol: {
              span: 3,
              offset:1
            },
            wrapperCol: {
              span: 20,
            },
          }
        : null;
  return (
      <Form style={{marginTop:"40px"}}  {...formItemLayout}
      layout={formLayout}
      form={form}
      initialValues={{
        layout: formLayout,
      }}
      onValuesChange={onFormLayoutChange}>
      <Form.Item label="Name">
        <Input placeholder="Product Name"  onChange={(e)=>setName(e.target.value)}/>
      </Form.Item>
      <Form.Item label="Description">
        <TextArea placeholder="Product Description"  onChange={(e)=>setDescription(e.target.value)}/>
      </Form.Item>
      <Form.Item label="Select">
        <Select placeholder="Category"  style={{width:"350px",padding:"5px"}} onSelect={(value)=>setCategory(value)}>
        <Select.Option value="Applications" >Applications</Select.Option>
          <Select.Option value="Applications" >Applications</Select.Option>
          <Select.Option value="Beauty" >Beauty</Select.Option>
          <Select.Option value="Fashion" >Fashion</Select.Option>
          <Select.Option value="Electronics" >Electronics</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label=" Stock">
        <Input placeholder="Stock" type='number' onChange={(e)=>setStock(e.target.value)}/>
      </Form.Item>
      <Form.Item label=" Price">
        <Input placeholder="Price" type='number' onChange={(e)=>setPrice(e.target.value)}/>
      </Form.Item>
      <Form.Item >
        <Button type="primary" style={{textAlign:'center',margin:'auto',display:'table'}} onClick={()=>addProduct()}>Add Product</Button>
      </Form.Item>
    </Form>
  )
}

export default AddItems