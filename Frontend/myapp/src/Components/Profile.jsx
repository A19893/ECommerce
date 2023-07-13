import React, { useEffect,useState } from 'react';
import { useSelector } from 'react-redux';
import { getSpecificUser } from '../Services/getSpecificUser.service';
import {Modal} from 'antd';
import { Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
const Profile = () => {
  const userId=useSelector((state)=>state.authentication.loggedinUserId);
  const[user,setUser]=useState(null);
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
  return (
    <Modal width={700} title="Your Profile" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <div className='profileContainer'>
       <div className='profile-leftPart'>
       <div className='profile-Img'>
        <div>
        <Upload
        width={400}
        action="http://localhost:5000/uploads"
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

       </div>
       </div>
       <div className='profile-rightPart'>

       </div>
      </div>
      </Modal>
  );
}

export default Profile;
