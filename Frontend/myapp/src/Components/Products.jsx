import React, { useEffect, useState } from "react";
import { getAllProducts } from "../Services/getAllProducts.service";
import {Rate} from "antd"
import { useNavigate } from "react-router-dom";
const Products = (props) => {
  const [products, setProducts] = useState(null);
  const navigate=useNavigate();
  useEffect(() => {
    const getData = async () => {
      const products = await getAllProducts();
      setProducts(products?.data.result);
    };
    getData();
  }, []);
  const selectProduct = (id) => {
    navigate("/specific",{state:id})
  };
  console.log("category",props.category);
  return (
    <>
      <div className="prodHeader">Featured Products</div>
      <div className="productContainer">
        {products?.map((item, idx) => {
          if(item.name.toLowerCase().includes(props.searchItem.toLowerCase())){
         if(props.category!=='not selected'){
          if(item.category.toLowerCase()===props.category.toLowerCase())
          return (
            <>
              <div
                className="specificProd"
                onClick={() => selectProduct(item._id)}
                key={idx}
              >
                <div className="prodImg">
                  <img src={item.image[0]} alt="Missing" />
                </div>
                  <div>{item.name}</div>
                  <div>&#x20B9;{item.price}</div>
                  <div><Rate allowHalf disabled defaultValue={item.ratings} /></div>
                  <div>({item.ReviewsCount} Reviews)</div>
              </div>
            </>
          );
         }
         else{
          return (
            <>
              <div
                className="specificProd"
                onClick={() => selectProduct(item._id)}
                key={idx}
              >
                <div className="prodImg">
                  <img src={item.image[0]} alt="Missing" />
                </div>
                  <div>{item.name}</div>
                  <div>&#x20B9;{item.price}</div>
                  <div><Rate allowHalf disabled defaultValue={item.ratings} /></div>
                  <div>({item.ReviewsCount} Reviews)</div>
              </div>
            </>
          );
         }
          }
        })}
      </div>
    </>
  );
};

export default Products;
