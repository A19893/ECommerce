import React, { useEffect,useState } from 'react'
import { useSelector } from 'react-redux'
import { getCartItems } from '../Services/getCartItems.service';
import NoItem from './NoItem';
import PresentItem from './PresentItem';
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
        <PresentItem products={products}/>
        :<NoItem/>
     }
    </>
  )
}

export default Cart