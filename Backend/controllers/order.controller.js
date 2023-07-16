const Order=require("../models/orderModel");
//Create New Order
exports.newOrder=async(req,res,next)=>{
    console.log(req.body);
const{
    shippingInfo,
    order,
    user,
    Quantity,
    subTotal
}=req.body

const orders=await Order.create({
    shippingInfo,
    order,
    user,
    Quantity,
    subTotal
});
res.status(201).json({
    success:true,
    orders,
});
}
//get Single Order
exports.getSingleOrder=async(req,res)=>{
    const order=await Order.findById(req.params.id);
    if(!order){
        return res.status(401).json({
            success:false,
            message:"No Order Found"
        })
    }
    return res.status(200).json({
        success:true,
        order
    })
}
//get MyOrders
exports.getMyOrders=async(req,res,next)=>{
    const myOrders=await Order.find({user:req.params.id})
    return res.status(200).json({
        success:true,
        myOrders
    })
}
//get AllOrders
exports.getAllOrders=async(req,res,next)=>{
    const Orders=await Order.find();
   let totalAmount=0;
   Orders.forEach((item)=>{
    totalAmount+=item.itemsPrice
   })
   res.status(200).json({
    success:true,
    totalAmount,
    Orders
   })
}
//update OrderStatus
exports.updateOrder=async(req,res)=>{
    console.log(req.params.id,req.body);
    const order=await Order.findById(req.params.id);
    console.log(order);
    // if(order.orderStatus==="Delivered"){
    //    return  res.status(401).json({
    //         success:false,
    //         message:"Already Delivered"
    //     })
    // }
    // order.orderItems.forEach(async(item)=>{
    //     await updateStock(item.product,item.quantity);
    // })
    order.orderStatus=req.body.orderStatus;
    // order.deliveredAt=Date.now();
    await order.save({validateBeforeSave:false});
    res.status(200).json({
        success:true,
        order
    });
}
async function updateStock(id,quantity){
    const product=await Product.findById(id);
    product.Stock=product.Stock-quantity;
    await product.save({validateBeforeSave:false});
}
//Delete Order
exports.deleteOrder=async(req,res)=>{
    console.log('---remobve id',req.params.id);
    const order=await Order.findByIdAndRemove(req.params.id);
    console.log('-----removee----',order);
    return res.status(200).json({
        success:true,
        message:"Order Deleted"
    })
}
exports.getVendorOrder=async(req,res)=>{
    // console.log(req.params.id);
    const Orders=await Order.find({'order.CreatedBy':req.params.id});
    res.status(200).json({
        success:true,
        Orders
       })
}