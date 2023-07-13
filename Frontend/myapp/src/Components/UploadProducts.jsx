import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Upload } from 'antd';
import AddItems from './AddItems';
const UploadProducts = () => {
  const [image,setImage]=useState([]);
  const [fileList, setFileList] = useState([]);
  const handleChange = ({ file:newFile,fileList: newFileList }) => {
    setFileList(newFileList) ;
  (newFile.status==='done')&& setImage([...image,`http://localhost:5000/${newFile.response}`])
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
  return (
    <>
      <Upload
        action="http://localhost:5000/uploads"
        listType="picture-circle"
        fileList={fileList}
        onChange={handleChange}
        name='image'
        showUploadList={{showPreviewIcon:false,showDownloadIcon:false,showRemoveIcon:false}}
      >
        {fileList.length >= 4 ? null : uploadButton}
      </Upload>
      <AddItems image={image}/>
    </>
  );
};
export default UploadProducts;