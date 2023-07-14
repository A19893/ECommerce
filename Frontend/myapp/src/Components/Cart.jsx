import React, { useEffect,useState } from 'react'
import { useSelector } from 'react-redux'
import { getCartItems } from '../Services/getCartItems.service';
import NoItem from './NoItem';
import PresentItem from './PresentItem';
import { addCartItems } from '../Features/CartSlice';
import { useDispatch } from 'react-redux';
import NavBar from './NavBar';
const Cart = () => {
  const dispatch=useDispatch();
    const userId=useSelector((state)=>state.authentication.loggedinUserId);
    const[products,setProducts]=useState([]);
    useEffect(()=>{
     const getData=async()=>{
       const response=await getCartItems();
       console.log('------response',response);
       const FilteredData=response.data.OrdersInCart.filter((item)=>item.PurchasedBy===userId)
       dispatch(addCartItems(FilteredData));
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