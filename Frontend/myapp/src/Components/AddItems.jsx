import React, { useState } from 'react'
import { addProducts } from '../Services/createProduct.service'
import { useSelector } from 'react-redux';
const AddItems = (image) => {
    const CreatedBy=useSelector((state)=>state.authentication.loggedinUserId)
    const[name,setName]=useState('');
    const[description,setDescription]=useState('');
    const[price,setPrice]=useState('');
    const[category,setCategory]=useState('');
    console.log(image)
    const addProduct=async(e)=>{
         e.preventDefault();
        const res=await addProducts(name,description,price,category,image?.image,CreatedBy);
    }
  return (
    <form className="modalForm" >
        <div className="inputContainer">
          <div className="fileInput">
            <input name="prodName" type="text" onChange={(e)=>setName(e.target.value)}/>
            <input name="prodDesc" type="text" onChange={(e)=>setDescription(e.target.value)}/>
            <input name="prodPrice" type="text" onChange={(e)=>setPrice(e.target.value)}/>
            <input name="prodCategory" type="text" onChange={(e)=>setCategory(e.target.value)}/>
            
          </div>
          </div>
          <input type = "submit" onClick={addProduct}/>
          </form>
  )
}

export default AddItems