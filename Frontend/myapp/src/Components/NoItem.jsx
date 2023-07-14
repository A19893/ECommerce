import React from 'react';
import nocart from '../Assets/no-cartItem.PNG'
const NoItem = () => {
  return (
    <div className='cart-container'>
     <div className='no-cart'>
        <img src={nocart} alt="Missing"/>
     </div>
    </div>
  );
}

export default NoItem;
