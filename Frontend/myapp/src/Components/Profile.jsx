import React, { useEffect,useState } from 'react';
import { useSelector } from 'react-redux';
import { getSpecificUser } from '../Services/getSpecificUser.service';
import {Modal} from 'antd';
import { Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
const Profile = () => {
  const userId=useSelector((state)=>state.authentication.loggedinUserId);
  // const[user,setUser]=useState(null);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [image,setImage]=useState(null);
  const [fileList, setFileList] = useState([]);
  const handleChange = ({ file:newFile,fileList: newFileList }) => {
    setFileList(newFileList);
  (newFile.status==='done')&& setImage(`http://localhost:5000/${newFile.response}`)
};
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
  };
  useEffect(()=>{
    const getData=async()=>{
     const data=await getSpecificUser(userId);
     console.log(data);
    }
    getData();
  })
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
            span: 7,
            offset:1
          },
          wrapperCol: {
            span: 20,
          },
        }
      : null;
  return (
    <Modal width={700} title="Your Profile" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null}>
      <div className='profileContainer'>
       <div className='profile-leftPart'>
       <div className='profile-Img'>
        <div className='upload-img'>
        <Upload
        width={400} 
        listType="picture-circle"
        fileList={fileList}
        onChange={handleChange}
        name='image'
        showUploadList={{showPreviewIcon:false,showDownloadIcon:false,showRemoveIcon:false}}
      >
        {fileList.length >= 1 ? null : uploadButton}
      </Upload>
        </div>
       </div>
       <div className='profile-Links'>
                <ul >
                  <li className='profile-icon'>
                  <h6 class="mb-0" style={{margin:0}}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-globe mr-2 icon-inline"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>Website</h6>
                    <span class="text-secondary" style={{paddingTop:'10px'}}>https://bootdey.com</span>
                  </li>
                  <hr/>
                  <li className='profile-icon' >
                    <h6 class="mb-0" style={{margin:0}}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github mr-2 icon-inline"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>Github</h6>
                    <span class="text-secondary" style={{paddingTop:'10px'}}>https://github.com/A19893</span>
                  </li>
                  <hr/>
                  <li className='profile-icon'>
                    <h6 class="mb-0" style={{margin:0}}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter mr-2 icon-inline text-info"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>Twitter</h6>
                    <span class="text-secondary" style={{paddingTop:'10px'}}>https://twitter.com</span>
                  </li>
                  <hr/>
                  <li className='profile-icon'>
                    <h6 class="mb-0" style={{margin:0}}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram mr-2 icon-inline text-danger"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>Instagram</h6>
                    <span class="text-secondary" style={{paddingTop:'10px'}}>https://www.instagram.com</span>
                  </li>
                </ul>
       </div>
       </div>
       <div className='profile-rightPart'>
        
       <Form style={{marginTop:"40px"}}  {...formItemLayout}
      layout={formLayout}
      form={form}
      initialValues={{
        layout: formLayout,
      }}
      onValuesChange={onFormLayoutChange}>
      <Form.Item label="Name">
        <Input placeholder="input placeholder"/>
      </Form.Item>
      <Form.Item label="Address">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item label="Email">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item label="Password">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item >
        <Button type="primary" style={{textAlign:'center',margin:'auto',display:'table'}}>Update</Button>
      </Form.Item>
    </Form>
       </div>
      </div>
      </Modal>
  );
}

export default Profile;
