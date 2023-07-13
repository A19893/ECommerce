import React,{useState,useEffect} from 'react'

const Quantity = (props) => {
  // const[first,setFirst]=useState(true)
  const [quantity, setQuantity] = useState(props.Quants);
  // useEffect(()=>{
  //   if(first){
  //     console.log("andar aaya",props.Quants)
  //   setQuantity(props.Quants)
  //   }
  //   setFirst(false)
  // },[])
    const increaseQuantity = () => {
        console.log(props.Stock)
        if (props.Stock <= quantity){
        alert("We don't have more quantity in stock");
        }
        else{
        const qty = quantity + 1;
        setQuantity(qty);
        }
      };
    
      const decreaseQuantity = () => {
        if (1 >= quantity) return;
    
        const qty = quantity - 1;
        setQuantity(qty);
      };
      return(
      <div className="detailsBlock-3-1-1 cart-AddOn">
                      <button onClick={()=>decreaseQuantity()}>-</button>
                      <input readOnly type="number" value={quantity} />
                      <button onClick={()=>increaseQuantity()}>+</button>
       </div>
      )
}

export default Quantity