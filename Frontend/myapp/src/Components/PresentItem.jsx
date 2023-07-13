import { Button } from 'antd';
import React,{useState} from 'react';
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import Quantity from './Cart.Quantity';
const PresentItem = (products) => {
    // const [quantity, setQuantity] = useState(1);
    const Address=useSelector((state)=>state.authentication.loggedInUserAddress);
    const navigate=useNavigate();
    console.log(Address);
    let Stock;
    let Quants;
    let TotalSum=0;
    console.log("Products",products);
      const checkOut=()=>{
        console.log("clicked",Address);
        Address==='Address'?navigate("/address"):navigate("/buy");
      }
      console.log(products)
  return (
    <>    
    <div className='cart-Item'>
    <h1 className='prodHeader'>Your Cart Items</h1>
     {products?.products?.map((item,idx)=>{
        {TotalSum+=item.Quantity*item.Order.price}
        {Stock=item.Order.Stock}
        {Quants=item.Quantity}
        return(
        <div key={idx} className='specific-Cart'>
       <div className='cart-Img'>
        <img src={item.Order.image[0]}/>
       </div>
       <div className='cart-Description'>
        <span>{item.Order.description}</span>
       </div>
       <Quantity Stock={Stock} Quants={Quants}/>
        <div className='cart-Price'>
         <span>₹{item.Quantity*item.Order.price}</span>
        </div>
        <div className='cart-Button'>
            <Button  style={{backgroundColor:"red"}}>Remove</Button>
        </div>
      </div>
        )
     })}
     <div className='cart-TotalPrice'>
        Total Price-₹{TotalSum}
     </div>
     <div className='checkOut-Btn'>
        <Button type="primary" onClick={checkOut}>Buy Now</Button>
     </div>
     </div>
     </>
  );
}

export default PresentItem;
