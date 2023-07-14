const express=require("express");
const { addToCart, getCartItems, removeCartItem } = require("../controllers/cart.controller");
const router=express.Router();
//Route for adding a product to Cart
router.route("/addToCart").post(addToCart);
//Route for getting all items from Cart
router.route("/getCartItems").get(getCartItems);
//Route for removing a specific cart item
router.route("/removeItem/:id").post(removeCartItem);
module.exports=router;