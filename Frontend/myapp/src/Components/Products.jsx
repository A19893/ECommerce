import React, { useEffect, useState } from "react";
import { getAllProducts } from "../Services/getAllProducts.service";
import Product from "../Assets/Product.jpg";
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
  return (
    <>
      <div className="prodHeader">Featured Products</div>
      <div className="productContainer">
        {products?.map((item, idx) => {
          if(item.name.toLowerCase().includes(props.searchItem.toLowerCase()))
          return (
            <>
              <div
                className="specificProd"
                onClick={() => selectProduct(item._id)}
              >
                <div className="prodImg">
                  <img src={Product} alt="Missing" />
                </div>
                  <div>{item.name}</div>
                  <div>&#x20B9;{item.price}</div>
                  <div><Rate allowHalf disabled defaultValue={item.ratings} /></div>
                  <div>({item.ReviewsCount} Reviews)</div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Products;
