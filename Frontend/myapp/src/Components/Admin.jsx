import React, { useState } from "react";
import NavBar from "./NavBar";
import Slider from "./Slider";
import Prodcuts from "./Products";
import BestProducts from "./BestProducts";
const Admin = () => {
  const [searchItem, setSearchItem] = useState("");
  const [category, setCategory] = useState("not selected");
  return (
    <div>
      <NavBar setSearchItem={setSearchItem} setCategory={setCategory} />
      <Slider />
      <BestProducts />
      <Prodcuts searchItem={searchItem} category={category} />
    </div>
  );
};

export default Admin;
