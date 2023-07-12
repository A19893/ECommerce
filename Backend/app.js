const express=require("express");
const app=express();
const cors=require('cors')
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors());
//Route Imports
const product=require('./routes/productRoute')
app.use('/routes',product)
const users=require('./routes/userRoutes')
app.use('/users',users)
const orders=require("./routes/orderRoute")
app.use("/orders",orders)
const cart=require("./routes/cartRoutes");
app.use("/cart",cart)

module.exports=app;