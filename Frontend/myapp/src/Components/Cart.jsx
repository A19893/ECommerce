import React, { useEffect,useState } from 'react'
import { useSelector } from 'react-redux'
import { getCartItems } from '../Services/getCartItems.service';
const Cart = () => {
    const userId=useSelector((state)=>state.authentication.loggedinUserId);
    const[products,setProducts]=useState([]);
    useEffect(()=>{
     const getData=async()=>{
       const response=await getCartItems();
       const FilteredData=response.data.OrdersInCart.filter((item)=>item.PurchasedBy===userId)
       setProducts(FilteredData);
     }
     getData();                                                                                                                                                                                                                                                                                                                                                                                       
    },[])
  return (
    <>
    {console.log(products)}
     {
        products?.length>0?
        ""
        :""
     }
    </>
  )
}

export default Cart