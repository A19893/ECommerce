import React, { useState } from 'react';
import Slider from './Slider';
import NavBar from './NavBar';
import Prodcuts from './Products'
import BestProducts from './BestProducts';
const User = () => {
  const[searchItem,setSearchItem]=useState('');
  const[category,setCategory]=useState('not selected')
  console.log(category);
  return (
    <>
    <div className="home">
    <NavBar setSearchItem={setSearchItem} setCategory={setCategory}/>
    <Slider/>
    <BestProducts/>
    <Prodcuts searchItem={searchItem} category={category}/>
    </div>
    </>
  );
}
export default User;
