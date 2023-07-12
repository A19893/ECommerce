import { Button } from 'antd';
import React,{useState} from 'react';
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom';
const PresentItem = (products) => {
    const [quantity, setQuantity] = useState(1);
    const Address=useSelector((state)=>state.authentication.loggedInUserAddress);
    const navigate=useNavigate();
    console.log(Address);
    let TotalSum=0;
    console.log("Products",products);
    const increaseQuantity = (number,i) => {
        if (products?.products[i]?.Order.Stock <= number){
        alert("We don't have more quantity in stock");
        }
        else{
        const qty = number + 1;
        setQuantity(qty);
        }
      };
    
      const decreaseQuantity = (number,i) => {
        if (1 >= quantity) return;
    
        const qty = quantity - 1;
        setQuantity(qty);
      };
      const checkOut=()=>{
        console.log("clicked",Address);
        Address==='Address'?navigate("/address"):navigate("/buy");
      }
  return (
    <>    
    <div className='cart-Item'>
    <h1 className='prodHeader'>Your Cart Items</h1>
     {products?.products?.map((item,idx)=>{
        {TotalSum+=item.Quantity*item.Order.price}
        return(
        <div key={idx} className='specific-Cart'>
       <div className='cart-Img'>
        <img src={item.Order.images[0].url}/>
       </div>
       <div className='cart-Description'>
        <span>{item.Order.description}</span>
       </div>
       <div className="detailsBlock-3-1-1 cart-AddOn">
                  <button onClick={()=>decreaseQuantity(item.Quantity,idx)}>-</button>
                  <input readOnly type="number" value={item.Quantity} />
                  <button onClick={()=>increaseQuantity(item.Quantity,idx)}>+</button>
        </div>
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
