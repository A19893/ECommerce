const Cart=require("../models/cartModel");
//Function for adding products to cart
exports.addToCart=async(req,res)=>{
    console.log("body",req.body);
    const Order=req.body.Order;
    const Quantity=req.body.Quantity;
    const PurchasedBy=req.body.PurchasedBy;
    const cart=await Cart.create({
        Order,
        Quantity,
        PurchasedBy
    })
    return res.status(200).json({
        success:true,
        message:"Added To Cart",
        cart
    }) 
}
//Function for getting all cart items
exports.getCartItems=async(req,res)=>{
const OrdersInCart=await Cart.find({})
return res.status(200).json({
    success:true,
    OrdersInCart
})
console.log(OrdersInCart)
}