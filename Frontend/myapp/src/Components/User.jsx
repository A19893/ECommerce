import React, { useState } from 'react';
import Slider from './Slider';
import NavBar from './NavBar';
import Prodcuts from './Products'
import BestProducts from './BestProducts';
const User = () => {
  const[searchItem,setSearchItem]=useState('');
  return (
    <>
    <div className="home">
    <NavBar setSearchItem={setSearchItem}/>
    <Slider/>
    <BestProducts/>
    <Prodcuts searchItem={searchItem}/>
    </div>
    </>
  );
}
export default User;
