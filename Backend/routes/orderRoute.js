const express=require("express");
const { newOrder, getSingleOrder, getMyOrders, getAllOrders, updateOrder, deleteOrder } = require("../controllers/order.controller");
const router=express.Router();
//Route for creating  a order
router.route("/createOrder").post(newOrder);

//Route for getting details of a single order
router.route("/getSingleOrder/:id").get(getSingleOrder);

//Route for getting my Orders
router.route("/getMyOrders/:id").get(getMyOrders);

//Route for Admin to get all Orders
router.route("/getAllOrders").get(getAllOrders);

//Route for updating a order
router.route("/updateOrder/:id").get(updateOrder);

//Route for delete a Order
router.route("/deleteOrder/:id").get(deleteOrder);
module.exports=router;