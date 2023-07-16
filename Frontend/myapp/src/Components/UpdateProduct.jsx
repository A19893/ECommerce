import React,{useState} from 'react';
import { Modal,Upload,Alert } from 'antd';
import { Button, Form, Input,Select } from "antd";
import { useNavigate,useLocation } from 'react-router-dom';
import { PlusOutlined } from "@ant-design/icons";
import { updateProduct } from '../Services/updateProduct.service';
const UpdateProduct = () => {
    const navigate=useNavigate();
    const {state}=useLocation();
    console.log('---state',state);
    const { TextArea } = Input;
    const [isModalOpen, setIsModalOpen] = useState(true);
    const [fileList, setFileList] = useState([]);
    const [image, setImage] = useState([]);
    const[name,setName]=useState(state.name);
    const[description,setDescription]=useState(state.description);
    const[price,setPrice]=useState(state.price);
    const[category,setCategory]=useState(state.category);
    const[Status,setStatus]=useState(state.Status)
    const[Stock,setStock]=useState(state.Stock);
    const handleChange = ({ file: newFile, fileList: newFileList }) => {
        setFileList(newFileList) ;
        (newFile.status==='done')&& setImage([...image,`http://localhost:5000/${newFile.response}`])
  };
  const handleUpdate=async()=>{
    if(image.length>0){
        if(image.length<4){
            // alert("You have to upload 4 images atleast!!")
            <Alert message="Success Tips" type="success" showIcon />
        }
    }
     const response=image.length>0?await updateProduct(state._id,name,description,price,category,image,Stock,Status):
     await updateProduct(state._id,name,description,price,category,state.image,Stock,Status);
     console.log(response);
     if(response.status===200){
    <Alert message="Updated Successfully" type="success" showIcon />
       navigate("/dashBoard")
     }
 }
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
    const handleOk = () => {
        setIsModalOpen(false);
      };
      const handleCancel = () => {
        setIsModalOpen(false);
        navigate('/viewProducts');
      };
    const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("horizontal");
  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };
  const formItemLayout =
    formLayout === "horizontal"
      ? {
          labelAlign: "left",
          labelCol: {
            span: 7,
            offset: 1,
          },
          wrapperCol: {
            span: 20,
          },
        }
      : null;
  return (
    <Modal
      width={1000}
      title="Update Product"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
    >
      <div className="updateContainer">
        <div className="update-leftPart">
          <div className="update-Img">
            <div className="upload-img">
              <Upload
              action="http://localhost:5000/uploads"
              listType="picture-circle"
              fileList={fileList}
              onChange={handleChange}
              name='image'
              >
                {fileList.length >= 4 ? null : uploadButton}
              </Upload>
            </div>
          </div>
          <div className="update-Links">
            {
                state?.image.map((item,idx)=>{
                    return(
                        <div className='uploaded-Img'>
                          <img src={item} alt="Missing"/>
                        </div>
                    )
                })
            }
          </div>
        </div>
        <div className="update-rightPart">
        <Form style={{marginTop:"40px"}}  {...formItemLayout}
      layout={formLayout}
      form={form}
      initialValues={{
        layout: formLayout,
      }}
      onValuesChange={onFormLayoutChange}>
      <Form.Item label="Name">
        <Input placeholder="Product Name" style={{width:'220px'}} value={name} onChange={(e)=>setName(e.target.value)} />
      </Form.Item>
      <Form.Item label="Description">
        <TextArea placeholder="Product Description" value={description} onChange={(e)=>setDescription(e.target.value)}/>
      </Form.Item>
      <Form.Item label="Select">
        <Select placeholder="Category"  style={{width:"180px",padding:"5px"}} value={category} onSelect={(value)=>setCategory(value)}>
        <Select.Option value="Applications" >Appliances</Select.Option>
          <Select.Option value="Beauty" >Beauty</Select.Option>
          <Select.Option value="Fashion" >Fashion</Select.Option>
          <Select.Option value="Electronics" >Electronics</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label=" Stock" >
        <Input placeholder="Stock" type='number' style={{width:'220px'}} value={Stock} onChange={(e)=>setStock(e.target.value)}/>
      </Form.Item>
      <Form.Item label="Price">
        <Input placeholder="Price" type='number'style={{width:'220px'}}  value={price} onChange={(e)=>setPrice(e.target.value)}/>
      </Form.Item>
      <Form.Item label="Status">
        <Input placeholder="Status" style={{width:'220px'}}  value={Status} onChange={(e)=>setStatus(e.target.value)}/>
      </Form.Item>
      <Form.Item >
        <Button type="primary" style={{textAlign:'center',margin:'auto',display:'table'}} onClick={()=>handleUpdate()}>Update Product</Button>
      </Form.Item>
    </Form>
        </div>
      </div>
    </Modal>
  );
}

export default UpdateProduct;
