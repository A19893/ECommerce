import { useEffect, useState, Fragment } from "react";
import { useLocation } from "react-router-dom";
import { getSpecificProduct } from "../Services/getSpecificProduct.service";
import Carousel from "react-material-ui-carousel";
import { Rate,Button } from "antd";
import { addToCart } from "../Services/addToCart.service";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const SpecificProduct = () => {
  const { state } = useLocation();
  const navigate=useNavigate();
  const [ProductData, setProductData] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const[coupon,setCoupon]=useState(false);
  const [couponCode,setCouponCode]=useState('')
  const userId=useSelector((state)=>state.authentication.loggedinUserId);
  console.log(userId)
  useEffect(() => {
    const getData = async () => {
      const response = await getSpecificProduct(state);
      setProductData(response.data.result);
    };
    getData();
  }, []);
  const increaseQuantity = () => {
    if (ProductData?.Stock <= quantity) 
    alert("We don't have more quantity in stock")
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

  const couponHandler=(e)=>{
    console.log(e.target.value)
    if(couponCode==='BOGO500'){
     setCoupon(true)
    }
    else{
      alert('Coupon Code not Valid!!')
    }
  }
  const addToCartHandler=async()=>{
    coupon?ProductData.price=ProductData.price-500:ProductData.price=ProductData.price;
    console.log('----product---',ProductData);
    const response=await addToCart(ProductData,quantity,userId)
    console.log("response",response)
    if(response.status===200){
      alert("Item Added To Cart Successfully!")
      navigate('/cart')
    }
    else if(response.status===201){
    alert("Item Added To Cart Successfully!")
    }
  }
  return (
    <>
      <Fragment>
        <div className="ProductDetails">
          <div>
            <Carousel sx={{ width: "450px" }}>
              {ProductData?.image &&
                ProductData?.image?.map((item, i) => (
                  <img
                    className="CarouselImage"
                    key={i}
                    src={item}
                    alt={`${i} Slide`}
                  />
                ))}
            </Carousel>
          </div>
          <div>
            <div className="detailsBlock-1">
              <h2>{ProductData?.name}</h2>
              <p>Product #{ProductData?._id}</p>
            </div>
            <div className="detailsBlock-2">
              <div>
                <Rate allowHalf disabled value={ProductData?.ratings} />
              </div>
              <span>{`(${ProductData?.ReviewsCount}Reviews)`}</span>
            </div>
            <div className="detailsBlock-3">
              <h1>{coupon?`₹${ProductData?.price-500}`:`₹${ProductData?.price}`}</h1>
              <div className="detailsBlock-3-1">
                <div className="detailsBlock-3-1-1">
                  <button onClick={decreaseQuantity}>-</button>
                  <input readOnly type="number" value={quantity} />
                  <button onClick={increaseQuantity}>+</button>
                </div>
                <button
                  disabled={ProductData?.Stock < 1 ? true : false}
                   onClick={addToCartHandler}
                >
                  Add to Cart
                </button>
              </div>
              <p>
                Status:&nbsp;&nbsp;
                <b
                  className={ProductData?.Stock < 1 ? "redColor" : "greenColor"}
                >
                  {ProductData?.Stock < 1 ? "OutOfStock" : "InStock"}
                </b>
              </p>
            </div>
            <div className="detailsBlock-4">
               Coupons: <input type="text" className="coupon" onChange={(e)=>setCouponCode(e.target.value)}/>&nbsp;&nbsp;
                 {coupon?<Button type="primary" style={{backgroundColor:'black',color:'white'}} onClick={(e)=>couponHandler(e)} disabled>Apply Coupon</Button>:<Button type="primary" style={{backgroundColor:'black',color:'white'}} onClick={(e)=>couponHandler(e)}>Apply Coupon</Button>}<br/>
                Description : <p>{ProductData?.description}</p>
              </div>
          </div>
        </div>
      </Fragment>
    </>
  );
};

export default SpecificProduct;
