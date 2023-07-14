import React from 'react';
import { Button } from 'antd';
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import Quantity from './Cart.Quantity';
import { removeCart } from '../Services/removeCart.service';
import NavBar from './NavBar'
const PresentItem = (products) => {
    const Address=useSelector((state)=>state.authentication.loggedInUserAddress);
    const navigate=useNavigate();
    console.log(Address);
    let TotalSum=0;
    console.log("Products",products);
      const checkOut=()=>{
        console.log("clicked",Address);
        Address==='Address'?navigate("/address"):navigate("/buy");
        return;
      }
      const removeHandler=async(id)=>{
        const res= await removeCart(id);
        if(res.status===200){
        alert("Item Removed Successfully")
        }
        console.log(res);
      }
      // console.log(products)
  return (
    <>    
    <NavBar/>
    <div className='cart-Item'>
    <h1 className='prodHeader'>Your Cart Items</h1>
     {products?.products?.map((item,idx)=>{
        TotalSum+=item.Quantity*item.Order.price
        return(
        <div key={idx} className='specific-Cart'>
       <div className='cart-Img'>
        <img src={item.Order.image[0]} alt="Missing"/>
       </div>
       <div className='cart-Description'>
        <span>{item.Order.description}</span>
       </div>
       <Quantity Quants={item.Quantity}/>
        <div className='cart-Price'>
         <span>₹{item.Quantity*item.Order.price}</span>
        </div>
        <div className='cart-Button'>
            <Button  style={{backgroundColor:"red"}} onClick={()=>removeHandler(item._id)}>Remove</Button>
        </div>
      </div>
        )
     })}
     <div className='cart-TotalPrice'>
        Total Price-₹{TotalSum}
     </div>
     <div className='checkOut-Btn'>
        <Button type="primary" onClick={()=>checkOut()}>CheckOut</Button>
     </div>
     </div>
     </>
  );
}

export default PresentItem;
