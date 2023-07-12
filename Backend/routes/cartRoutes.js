const express=require("express");
const { addToCart, getCartItems } = require("../controllers/cart.controller");
const router=express.Router();
//Route for adding a product to Cart
router.route("/addToCart").post(addToCart);
//Route for getting all items from Cart
router.route("/getCartItems").get(getCartItems)
module.exports=router;