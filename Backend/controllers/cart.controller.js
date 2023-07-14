const Cart=require("../models/cartModel");
//Function for adding products to cart
exports.addToCart=async(req,res)=>{
    console.log("body",req.body);
    const Order=req.body.Order;
    const Quantity=req.body.Quantity;
    const PurchasedBy=req.body.PurchasedBy;
    
    const prevOrderId = Order._id;
    // console.log('-----prevOrderId-- :',  prevOrderId,'-------purchasedby', PurchasedBy);
    const result= await Cart.findOne({'Order._id':prevOrderId });
    // console.log('-------result------')
    console.log(result);
    if(result!=null){
        // console.log('-------[purchase]------',PurchasedBy,'-------[purchase]------',result.PurchasedBy.toString())
        if(result.PurchasedBy.toString()===PurchasedBy){
            // console.log('----ayaaa');
         result.Quantity+=Quantity
         await result.save({validateBeforeSave:false});
        return res.status(201).json({
        success:true,
        message:"Added To Cart",
       })
        }
    }
    else{
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
}
//Function for getting all cart items
exports.getCartItems=async(req,res)=>{
const OrdersInCart=await Cart.find({})
console.log('----getItems',OrdersInCart);
return res.status(200).json({
    success:true,
    OrdersInCart
})
}
//Function for removing an item from Cart
exports.removeCartItem=async(req,res)=>{
    console.log("aaya");
    const result=await Cart.findByIdAndRemove(req.params.id);
    return res.status(200).json({
        success:true,
        result
    })
}