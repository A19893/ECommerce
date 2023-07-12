import React, {useState, useEffect } from 'react';

const Quantity = (quant) => {
    const [quantity, setQuantity] = useState(null);
    useEffect(()=>{
      setQuantity(quant)
    },[])
    const increaseQuantity = () => {
        // if (products?.products?.Order.Stock <= quantity) return;
    
        // const qty = quantity + 1;
        // setQuantity(qty);
      };
    
      const decreaseQuantity = () => {
        if (1 >= quantity) return;
    
        const qty = quantity - 1;
        setQuantity(qty);
      };
  return (
    <div className="detailsBlock-3-1-1">
                  <button onClick={decreaseQuantity()}>-</button>
                  <input readOnly type="number"  value={quantity} />
                  <button onClick={increaseQuantity()}>+</button>
        </div>
  );
}

export default Quantity;
