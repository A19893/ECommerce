import { useEffect, useState, Fragment } from "react";
import { useLocation } from "react-router-dom";
import { getSpecificProduct } from "../Services/getSpecificProduct.service";
import Carousel from "react-material-ui-carousel";
import { Rate } from "antd";
import { addToCart } from "../Services/addToCart.service";
import { useSelector } from "react-redux";
const SpecificProduct = () => {
  const { state } = useLocation();
  const [ProductData, setProductData] = useState(null);
  const [quantity, setQuantity] = useState(1);
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
    if (ProductData?.Stock <= quantity) return;

    const qty = quantity + 1;
    setQuantity(qty);
  };

  const decreaseQuantity = () => {
    if (1 >= quantity) return;

    const qty = quantity - 1;
    setQuantity(qty);
  };

  const addToCartHandler=async()=>{
    const response=await addToCart(ProductData,quantity,userId)
    console.log("response",response)
    if(response.status===200){
      alert("Item Added To Cart Successfully!")
    }
    else if(response.status===201){
    alert("Item Added To Cart Successfully!")
    }
  }
   console.log(ProductData);
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
              <h1>{`₹${ProductData?.price}`}</h1>
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
                Status:
                <b
                  className={ProductData?.Stock < 1 ? "redColor" : "greenColor"}
                >
                  {ProductData?.Stock < 1 ? "OutOfStock" : "InStock"}
                </b>
              </p>
            </div>
            <div className="detailsBlock-4">
                Description : <p>{ProductData?.description}</p>
              </div>
          </div>
        </div>
        <h3 className="reviewsHeading">REVIEWS</h3>
      </Fragment>
    </>
  );
};

export default SpecificProduct;
